"use client";

import type { Locale, ProjectType, TechTag } from "@/types";
import { i18n } from "@/lib/i18n";

interface ProjectFiltersProps {
  locale: Locale;
  filterType: string;
  onTypeChange: (value: string) => void;
  filterTech: string;
  onTechChange: (value: string) => void;
  availableTypes: ProjectType[];
  availableTechs: TechTag[];
}

const TYPE_LABEL: Record<ProjectType, string> = {
  frontend: "Frontend",
  backend: "Backend",
  fullstack: "Fullstack",
  game: "Game",
  microservice: "Microservice",
};

const TECH_LABEL: Partial<Record<TechTag, string>> = {
  react: "React",
  nextjs: "Next.js",
  typescript: "TypeScript",
  javascript: "JavaScript",
  vite: "Vite",
  tailwind: "Tailwind",
  "framer-motion": "Framer Motion",
  zustand: "Zustand",
  "tanstack-query": "TanStack Query",
  node: "Node.js",
  express: "Express",
  nest: "NestJS",
  postgres: "PostgreSQL",
  mysql: "MySQL",
  sequelize: "Sequelize",
  typeorm: "TypeORM",
  drizzle: "Drizzle",
  turso: "Turso",
  redis: "Redis",
  bull: "Bull",
  websocket: "WebSocket",
  jwt: "JWT",
  pwa: "PWA",
  huggingface: "Hugging Face",
  docker: "Docker",
  vitest: "Vitest",
  tdd: "TDD",
  "clean-architecture": "Clean Architecture",
  "clean-code": "Clean Code",
  monorepo: "Monorepo",
};

function techLabel(tech: TechTag): string {
  return TECH_LABEL[tech] ?? tech;
}

export function ProjectFilters({
  locale,
  filterType,
  onTypeChange,
  filterTech,
  onTechChange,
  availableTypes,
  availableTechs,
}: ProjectFiltersProps) {
  const tx = i18n[locale];
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-soft">
        {tx.filtersAll}
      </p>
      <div className="flex flex-wrap gap-2 text-[11px] text-muted">
        <select
          value={filterType}
          onChange={(e) => onTypeChange(e.target.value)}
          className="rounded-md border border-[color:var(--border)] bg-[color:var(--background-soft)] px-2 py-1 text-foreground"
        >
          <option value="all">{tx.filtersTypeAll}</option>
          {availableTypes.map((type) => (
            <option key={type} value={type}>
              {TYPE_LABEL[type]}
            </option>
          ))}
        </select>
        <select
          value={filterTech}
          onChange={(e) => onTechChange(e.target.value)}
          className="rounded-md border border-[color:var(--border)] bg-[color:var(--background-soft)] px-2 py-1 text-foreground"
        >
          <option value="all">{tx.filtersTechAll}</option>
          {availableTechs.map((tech) => (
            <option key={tech} value={tech}>
              {techLabel(tech)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
