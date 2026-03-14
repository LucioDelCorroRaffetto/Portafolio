"use client";

import Link from "next/link";
import type { Project } from "@/types";
import type { Locale } from "@/types";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  variant?: "featured" | "compact";
}

export function ProjectCard({
  project,
  locale,
  variant = "featured",
}: ProjectCardProps) {
  const title = locale === "es" ? project.title.es : project.title.en;
  const shortDesc =
    locale === "es" ? project.shortDescription.es : project.shortDescription.en;
  const role = locale === "es" ? project.role.es : project.role.en;
  const ownership =
    project.meta.ownership &&
    (locale === "es" ? project.meta.ownership.es : project.meta.ownership.en);
  const metrics =
    project.meta.metrics &&
    (locale === "es" ? project.meta.metrics.es : project.meta.metrics.en);

  const techStack = project.techStack.slice(0, 6);

  if (variant === "compact") {
    return (
      <Card className="flex flex-col p-4" hover>
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          <Chip className="text-[10px] uppercase tracking-[0.15em]">
            {project.type}
          </Chip>
        </div>
        <p className="mt-2 text-sm text-muted">{shortDesc}</p>
        <p className="mt-1 text-xs text-muted">{role}</p>
        {metrics && (
          <p className="mt-1 text-xs text-muted">
            {locale === "es" ? "Métricas: " : "Metrics: "}
            {metrics}
          </p>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>
        <div className="mt-5 flex gap-3">
          {project.links.github && (
            <Link
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              aria-label={locale === "es" ? `Ver código de ${title} en GitHub` : `View ${title} code on GitHub`}
            >
              GitHub
            </Link>
          )}
          {project.links.live && (
            <Link
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label={locale === "es" ? `Ver ${title} en vivo` : `View ${title} live`}
            >
              Live
            </Link>
          )}
        </div>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col p-5" hover>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted">{shortDesc}</p>
      <p className="mt-2 text-xs font-medium text-foreground">{role}</p>
      {ownership && (
        <p className="mt-1 text-xs leading-snug text-muted">{ownership}</p>
      )}
      {metrics && (
        <p className="mt-1 text-xs text-muted">
          {locale === "es" ? "Métricas: " : "Metrics: "}
          {metrics}
        </p>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <Chip key={tech}>{tech}</Chip>
        ))}
      </div>
      <div className="mt-5 flex gap-3">
        {project.links.github && (
          <Link
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            aria-label={locale === "es" ? `Ver código de ${title} en GitHub` : `View ${title} code on GitHub`}
          >
            GitHub
          </Link>
        )}
        {project.links.live && (
          <Link
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            aria-label={locale === "es" ? `Ver ${title} en vivo` : `View ${title} live`}
          >
            Live
          </Link>
        )}
      </div>
    </Card>
  );
}
