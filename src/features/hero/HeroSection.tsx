"use client";

import type { Locale } from "@/types";
import { i18n } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { StatsBlock } from "@/components/ui/StatsBlock";
import { TypewriterText } from "@/components/effects/TypewriterText";
import { projects } from "@/content/projects";
import type { ProjectType } from "@/types/project";

const ROLES = [
  "Full Stack Developer",
  "Product Builder",
  "Architecture Thinker",
  "TypeScript · React · Node.js",
];

interface HeroSectionProps {
  locale: Locale;
  scrollToProjects: () => void;
  scrollToContact: () => void;
}

function getTagMeta(
  type: ProjectType,
  isFirst: boolean,
  locale: Locale,
): { tag: string; tagClass: string } {
  const tx = i18n[locale];
  if (isFirst) {
    return {
      tag: tx.heroTagActive,
      tagClass: "bg-emerald-500/10 text-emerald-300",
    };
  }
  switch (type) {
    case "backend":
    case "microservice":
      return { tag: "Backend", tagClass: "bg-violet-500/10 text-violet-300" };
    case "game":
      return { tag: "Game", tagClass: "bg-amber-500/10 text-amber-300" };
    default:
      return { tag: "Fullstack", tagClass: "bg-sky-500/10 text-sky-300" };
  }
}

export function HeroSection({
  locale,
  scrollToProjects,
  scrollToContact,
}: HeroSectionProps) {
  const tx = i18n[locale];
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  const recentActivity = featuredProjects.map((project, i) => {
    const isFirst = i === 0;
    const { tag, tagClass } = getTagMeta(project.type, isFirst, locale);
    return {
      check: isFirst ? "▶" : "✔",
      title: project.title[locale],
      desc: project.techStack.slice(0, 5).join(" · ") + ".",
      tag,
      tagClass,
    };
  });

  return (
    <section id="hero" className="section">
      <div className="container-page grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)] lg:items-start">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
            {tx.heroTagline}
          </p>
          <div className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]"
              style={{ animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) 2s infinite" }}
              aria-hidden
            />
            <TypewriterText
              words={ROLES}
              className="font-mono text-[11px] text-[color:var(--accent)]"
            />
          </div>
          <h1 className="hero-title text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {tx.heroH1Pre}{" "}
            <span className="highlight">{tx.heroH1Highlight}</span>
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            {tx.heroBio}
          </p>

          <div className="rounded-lg border border-[color:var(--border)] surface-soft p-3 text-xs text-muted">
            <p className="font-medium text-foreground">{tx.heroMindsetTitle}</p>
            <p className="mt-1.5">{tx.heroMindsetBody}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              onClick={scrollToProjects}
              variant="primary"
              className="group px-5 py-2.5 text-xs uppercase tracking-[0.2em]"
              aria-label={tx.heroBtnProjectsAria}
            >
              {tx.heroBtnProjects}
              <span className="ml-2 inline-block transition-transform group-hover:translate-y-0.5" aria-hidden>↓</span>
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              aria-label={tx.heroBtnContactAria}
            >
              {tx.heroBtnContact}
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-muted">
            <Chip>TypeScript · React · Node.js</Chip>
            <Chip>Node.js · PostgreSQL</Chip>
            <Chip>TDD · Clean Architecture · UX/UI</Chip>
          </div>

          <StatsBlock locale={locale} className="mt-8 pt-6 border-t border-[color:var(--border)]" />
        </div>

        <aside>
          <Card className="space-y-3 p-4 text-sm" hover>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-soft">
              {tx.heroRecentActivity}
            </p>
            <ul className="space-y-2 text-[11px] text-muted">
              {recentActivity.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start justify-between gap-2 rounded-md surface-soft p-2"
                >
                  <span
                    className={`mt-0.5 shrink-0 ${item.check === "✔" ? "text-emerald-400" : "text-amber-400"}`}
                    aria-hidden
                  >
                    {item.check}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="text-muted">{item.desc}</p>
                  </div>
                  <span
                    className={`mt-1 shrink-0 rounded-full px-2 py-0.5 text-[10px] ${item.tagClass}`}
                  >
                    {item.tag}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-muted">{tx.heroPortfolioNote}</p>
          </Card>
        </aside>
      </div>
    </section>
  );
}
