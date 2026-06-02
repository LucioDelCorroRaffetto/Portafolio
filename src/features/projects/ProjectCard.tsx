"use client";

import Link from "next/link";
import type { Project, ProjectStatus } from "@/types";
import type { Locale } from "@/types";
import { i18n } from "@/lib/i18n";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { TiltCard } from "@/components/effects/TiltCard";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  variant?: "featured" | "compact";
}

function StatusBadge({
  status,
  locale,
}: {
  status: ProjectStatus;
  locale: Locale;
}) {
  const tx = i18n[locale];
  const label = {
    live: tx.projectStatusLive,
    professional: tx.projectStatusProfessional,
    personal: tx.projectStatusPersonal,
    academic: tx.projectStatusAcademic,
  }[status];

  return (
    <span className={`status-badge status-badge-${status}`}>
      <span className="status-dot" aria-hidden />
      {label}
    </span>
  );
}

function ProjectLinks({
  project,
  githubAria,
  liveAria,
}: {
  project: Project;
  githubAria: string;
  liveAria: string;
}) {
  if (!project.links.github && !project.links.live) return null;
  return (
    <div className="mt-5 flex gap-3">
      {project.links.live && (
        <Link
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-1.5"
          aria-label={liveAria}
        >
          <span aria-hidden>↗</span> Live
        </Link>
      )}
      {project.links.github && (
        <Link
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline inline-flex items-center gap-1.5"
          aria-label={githubAria}
        >
          <GithubGlyph /> GitHub
        </Link>
      )}
    </div>
  );
}

function GithubGlyph() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

export function ProjectCard({
  project,
  locale,
  variant = "featured",
}: ProjectCardProps) {
  const tx = i18n[locale];
  const title = project.title[locale];
  const shortDesc = project.shortDescription[locale];
  const role = project.role[locale];
  const ownership = project.meta.ownership?.[locale];
  const metrics = project.meta.metrics?.[locale];
  const techStack = project.techStack.slice(0, 6);
  const extraTech = project.techStack.length - techStack.length;

  const githubAria = tx.projectGithubAria(title);
  const liveAria = tx.projectLiveAria(title);

  if (variant === "compact") {
    return (
      <Card className="flex flex-col p-4" hover>
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          {project.status ? (
            <StatusBadge status={project.status} locale={locale} />
          ) : (
            <Chip className="text-[10px] uppercase tracking-[0.15em]">
              {project.type}
            </Chip>
          )}
        </div>
        <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-muted-soft">
          {project.type}
        </p>
        <p className="mt-2 text-sm text-muted">{shortDesc}</p>
        <p className="mt-1 text-xs text-muted">{role}</p>
        {metrics && (
          <p className="mt-1 text-xs text-muted">
            {tx.projectMetrics}
            {metrics}
          </p>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
          {extraTech > 0 && <Chip>+{extraTech}</Chip>}
        </div>
        <ProjectLinks
          project={project}
          githubAria={githubAria}
          liveAria={liveAria}
        />
      </Card>
    );
  }

  return (
    <TiltCard>
      <div className="featured-card-wrapper h-full">
        <div className="featured-card-spinner" aria-hidden />
        <Card className="flex h-full flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-soft">
                {project.type}
              </p>
            </div>
            {project.status && (
              <StatusBadge status={project.status} locale={locale} />
            )}
          </div>
          <p className="mt-3 text-sm text-muted">{shortDesc}</p>
          <p className="mt-3 text-xs font-medium text-foreground">{role}</p>
          {ownership && (
            <p className="mt-1 text-xs leading-snug text-muted">{ownership}</p>
          )}
          {metrics && (
            <p className="mt-3 text-[11px] text-muted border-t border-[color:var(--border)]/50 pt-2">
              <span className="text-[color:var(--accent)] font-medium">↗</span>{" "}
              {metrics}
            </p>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
            {extraTech > 0 && <Chip>+{extraTech}</Chip>}
          </div>
          <div className="mt-auto">
            <ProjectLinks
              project={project}
              githubAria={githubAria}
              liveAria={liveAria}
            />
          </div>
        </Card>
      </div>
    </TiltCard>
  );
}
