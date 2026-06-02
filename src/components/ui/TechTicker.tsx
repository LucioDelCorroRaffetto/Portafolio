import type { Locale } from "@/types";

const TECHS = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Prisma",
  "TDD",
  "Clean Architecture",
  "Tailwind CSS",
  "Jest",
  "REST APIs",
  "Git",
  "Framer Motion",
  "Vite",
  "Monorepos",
];

interface TechTickerProps {
  locale?: Locale;
}

export function TechTicker({ locale: _locale }: TechTickerProps) {
  const doubled = [...TECHS, ...TECHS];

  return (
    <div className="ticker-outer border-y border-[color:var(--border)] py-3" aria-hidden>
      <span className="ticker-track">
        {doubled.map((tech, i) => (
          <span
            key={i}
            className="mx-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted"
          >
            {tech}
            <span className="ml-4 text-[color:var(--accent)] opacity-40">·</span>
          </span>
        ))}
      </span>
    </div>
  );
}
