"use client";

import type { Locale } from "@/types";
import { i18n } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import { projects } from "@/content/projects";
import { Chip } from "@/components/ui/Chip";

interface RecruiterLayoutProps {
  locale: Locale;
}

// Curated top-level stack for the summary row
const STACK_SUMMARY = [
  "TypeScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "TDD",
  "Clean Architecture",
  "NestJS",
  "Docker",
];

// Map raw tech tags to human-readable labels
const TAG_LABEL: Record<string, string> = {
  typescript: "TypeScript",
  react: "React",
  node: "Node.js",
  postgres: "PostgreSQL",
  mysql: "MySQL",
  tailwind: "Tailwind",
  vite: "Vite",
  nextjs: "Next.js",
  nest: "NestJS",
  redis: "Redis",
  bull: "Bull",
  docker: "Docker",
  tdd: "TDD",
  "clean-architecture": "Clean Arch.",
  "clean-code": "Clean Code",
  monorepo: "Monorepo",
  vitest: "Vitest",
  typeorm: "TypeORM",
  sequelize: "Sequelize",
  express: "Express",
  javascript: "JavaScript",
  huggingface: "HuggingFace",
  "framer-motion": "Framer Motion",
};

function tagLabel(tag: string): string {
  return TAG_LABEL[tag] ?? tag;
}

export function RecruiterLayout({ locale }: RecruiterLayoutProps) {
  const tx = i18n[locale];
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      {/* Subtle top accent line */}
      <div
        className="h-0.5 w-full"
        style={{ background: "linear-gradient(90deg, var(--accent), #a78bfa, var(--accent))" }}
        aria-hidden
      />

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-5 py-10 sm:px-8 sm:py-14">

        {/* ── 1. Identity ─────────────────────────────────────────────── */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
          {/* Avatar placeholder / initials */}
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-xl font-bold text-white"
            style={{ background: "linear-gradient(135deg, var(--accent), #a78bfa)" }}
            aria-hidden
          >
            L
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {siteConfig.name}
            </h1>
            <p className="text-sm font-medium text-muted">
              {siteConfig.role}
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
              {/* Availability dot */}
              <span className="flex items-center gap-1.5">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"
                  style={{ animation: "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite" }}
                  aria-hidden
                />
                {tx.sidebarAvailable}
              </span>
              <span aria-hidden>·</span>
              <span>{siteConfig.location} · {siteConfig.locationNote}</span>
              <span aria-hidden>·</span>
              <span>{siteConfig.englishLevel}</span>
            </div>
          </div>
        </header>

        {/* ── 2. Bio ──────────────────────────────────────────────────── */}
        <section aria-label="Bio">
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            {tx.heroBio}
          </p>
        </section>

        {/* ── 3. Top 3 projects ───────────────────────────────────────── */}
        <section aria-labelledby="rm-projects-heading">
          <h2
            id="rm-projects-heading"
            className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted"
          >
            {tx.projectsEyebrow}
          </h2>
          <ul className="space-y-3">
            {featured.map((project) => (
              <li
                key={project.slug}
                className="card-dev flex flex-col gap-2 rounded-xl p-4 sm:flex-row sm:items-start sm:gap-4"
              >
                {/* Accent dot */}
                <span
                  className="mt-1 hidden h-2 w-2 shrink-0 rounded-full sm:block"
                  style={{ background: "var(--accent)" }}
                  aria-hidden
                />
                <div className="flex-1 space-y-1.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-sm font-semibold">{project.title[locale]}</p>
                    <p className="text-[10px] text-muted">{project.role[locale]}</p>
                  </div>
                  <p className="text-xs leading-relaxed text-muted">
                    {project.shortDescription[locale]}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {project.techStack.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="chip-skill chip rounded-md px-2 py-0.5 text-[10px]"
                      >
                        {tagLabel(tag)}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="chip-skill chip rounded-md px-2 py-0.5 text-[10px] text-muted">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>
                {/* GitHub link if available */}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tx.projectGithubAria(project.title[locale])}
                    className="shrink-0 text-muted transition-colors hover:text-[color:var(--accent)]"
                  >
                    {/* GitHub icon */}
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* ── 4. Stack summary ────────────────────────────────────────── */}
        <section aria-labelledby="rm-stack-heading">
          <h2
            id="rm-stack-heading"
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted"
          >
            {tx.aboutStackLabel}
          </h2>
          <div className="flex flex-wrap gap-2">
            {STACK_SUMMARY.map((tech) => (
              <Chip key={tech} className="text-xs">{tech}</Chip>
            ))}
          </div>
        </section>

        {/* ── 5. CTA contact ──────────────────────────────────────────── */}
        <section
          aria-labelledby="rm-contact-heading"
          className="card-dev rounded-xl p-5"
        >
          <h2
            id="rm-contact-heading"
            className="mb-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted"
          >
            {tx.contactEyebrow}
          </h2>
          <p className="mb-4 text-sm text-muted">{tx.contactFirstContact}</p>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="btn-primary inline-flex items-center gap-2 text-xs"
            >
              {/* Email icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 7 10-7" />
              </svg>
              {tx.contactEmailLabel}
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2 text-xs"
            >
              {/* LinkedIn icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="currentColor"
                aria-hidden
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
          </div>
        </section>

      </main>

      {/* Bottom label */}
      <footer className="pb-6 text-center text-[11px] text-muted">
        {tx.recruiterModeLabel}
      </footer>
    </div>
  );
}
