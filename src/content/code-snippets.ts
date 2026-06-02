export interface CodeSnippet {
  id: string;
  language: string;
  filename: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  code: string;
}

export const codeSnippets: CodeSnippet[] = [
  {
    id: "clean-architecture-use-case",
    language: "TypeScript",
    filename: "create-user.use-case.ts",
    title: {
      es: "Use case con Clean Architecture",
      en: "Clean Architecture use case",
    },
    description: {
      es: "Separación de dominio e infraestructura con dependency injection",
      en: "Domain and infrastructure separation with dependency injection",
    },
    code: `interface UserRepository {
  create(dto: CreateUserDTO): Promise<UserResult>;
  existsByEmail(email: string): Promise<boolean>;
}

interface CreateUserDTO {
  email: string;
  name: string;
}

interface UserResult {
  id: string;
  email: string;
  createdAt: Date;
}

export class CreateUserUseCase {
  constructor(private readonly repo: UserRepository) {}

  async execute(dto: CreateUserDTO): Promise<UserResult> {
    if (!dto.email || !dto.name) {
      throw new Error("Email and name are required");
    }

    const alreadyExists = await this.repo.existsByEmail(dto.email);
    if (alreadyExists) {
      throw new Error(\`User with email \${dto.email} already exists\`);
    }

    try {
      return await this.repo.create(dto);
    } catch (err) {
      throw new Error("Could not create user. Please try again.");
    }
  }
}`,
  },
  {
    id: "tdd-user-service-test",
    language: "TypeScript",
    filename: "user.service.test.ts",
    title: {
      es: "TDD: test primero, código después",
      en: "TDD: test first, code later",
    },
    description: {
      es: "Ciclo red-green-refactor con Vitest y mocks tipados",
      en: "Red-green-refactor cycle with Vitest and typed mocks",
    },
    code: `import { describe, it, expect, vi, beforeEach } from "vitest";
import { UserService } from "./user.service";
import type { UserRepository } from "./user.repository";

describe("UserService", () => {
  let service: UserService;
  let mockRepo: UserRepository;

  beforeEach(() => {
    mockRepo = {
      create: vi.fn(),
      existsByEmail: vi.fn(),
    };
    service = new UserService(mockRepo);
  });

  it("creates a user successfully", async () => {
    vi.mocked(mockRepo.existsByEmail).mockResolvedValue(false);
    vi.mocked(mockRepo.create).mockResolvedValue({
      id: "uuid-1",
      email: "lucio@dev.com",
      createdAt: new Date(),
    });

    const result = await service.create({ email: "lucio@dev.com", name: "Lucio" });

    expect(result.id).toBe("uuid-1");
    expect(mockRepo.create).toHaveBeenCalledOnce();
  });

  it("throws if email is already in use", async () => {
    vi.mocked(mockRepo.existsByEmail).mockResolvedValue(true);

    await expect(
      service.create({ email: "taken@dev.com", name: "Other" })
    ).rejects.toThrow("already exists");
  });

  it("throws if required fields are missing", async () => {
    await expect(
      service.create({ email: "", name: "" })
    ).rejects.toThrow("required");
  });
});`,
  },
  {
    id: "use-async-data-hook",
    language: "TypeScript",
    filename: "use-async-data.ts",
    title: {
      es: "Custom hook con TypeScript genérico",
      en: "Generic TypeScript custom hook",
    },
    description: {
      es: "Hook reutilizable para fetching asíncrono con loading y error state",
      en: "Reusable hook for async fetching with loading and error state",
    },
    code: `import { useState, useEffect, useCallback } from "react";

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useAsyncData<T>(
  fetcher: (signal: AbortSignal) => Promise<T>,
  deps: unknown[] = []
): AsyncState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  const refetch = useCallback(() => setTick((n) => n + 1), []);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetcher(controller.signal)
      .then((result) => {
        if (!controller.signal.aborted) setData(result);
      })
      .catch((err: unknown) => {
        if (!controller.signal.aborted) {
          setError(err instanceof Error ? err.message : "Unknown error");
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tick, ...deps]);

  return { data, loading, error, refetch };
}`,
  },
];
