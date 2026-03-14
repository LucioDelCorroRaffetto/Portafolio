"use client";

import type { Locale } from "@/types";

interface ProjectFiltersProps {
  locale: Locale;
  filterType: string;
  onTypeChange: (value: string) => void;
  filterTech: string;
  onTechChange: (value: string) => void;
}

export function ProjectFilters({
  locale,
  filterType,
  onTypeChange,
  filterTech,
  onTechChange,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-soft">
        {locale === "es" ? "Todos los proyectos" : "All projects"}
      </p>
      <div className="flex flex-wrap gap-2 text-[11px] text-muted">
        <select
          value={filterType}
          onChange={(e) => onTypeChange(e.target.value)}
          className="rounded-md border border-[color:var(--border)] bg-[color:var(--background-soft)] px-2 py-1 text-foreground"
        >
          <option value="all">
            {locale === "es" ? "Tipo: todos" : "Type: all"}
          </option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Fullstack</option>
          <option value="game">Game</option>
          <option value="microservice">Microservice</option>
        </select>
        <select
          value={filterTech}
          onChange={(e) => onTechChange(e.target.value)}
          className="rounded-md border border-[color:var(--border)] bg-[color:var(--background-soft)] px-2 py-1 text-foreground"
        >
          <option value="all">
            {locale === "es" ? "Stack: todos" : "Stack: all"}
          </option>
          <option value="react">React</option>
          <option value="node">Node.js</option>
          <option value="nest">NestJS</option>
          <option value="postgres">PostgreSQL</option>
          <option value="mysql">MySQL</option>
          <option value="tdd">TDD</option>
          <option value="clean-architecture">Clean Architecture</option>
        </select>
      </div>
    </div>
  );
}
