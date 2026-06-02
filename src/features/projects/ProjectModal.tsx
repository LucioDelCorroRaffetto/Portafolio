"use client";

import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import type { Project, Locale } from "@/types";
import { i18n } from "@/lib/i18n";
import { Chip } from "@/components/ui/Chip";
import { StatusBadge } from "./StatusBadge";

interface ProjectModalProps {
  project: Project;
  locale: Locale;
  onClose: () => void;
}

export function ProjectModal({ project, locale, onClose }: ProjectModalProps) {
  const tx = i18n[locale];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  const title = project.title[locale];
  const longDesc = project.longDescription[locale];
  const role = project.role[locale];
  const ownership = project.meta.ownership?.[locale];
  const context = project.meta.context?.[locale];
  const metrics = project.meta.metrics?.[locale];
  const highlights = project.architectureHighlights[locale];

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-sm"
      style={{ animation: "sm-fade-in 180ms ease both" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--background-soft)] shadow-2xl"
        style={{ animation: "sm-scale-in 200ms ease both", maxHeight: "min(720px, 90vh)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[color:var(--border)] px-6 py-5">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-base font-semibold text-foreground">{title}</h2>
              {project.status && (
                <StatusBadge status={project.status} locale={locale} />
              )}
            </div>
            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-soft">
              {project.type}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={tx.skillsMatcherClose}
            className="ml-2 shrink-0 rounded-lg p-1.5 text-muted transition hover:bg-[color:var(--accent-soft)] hover:text-foreground focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          <p className="text-sm leading-relaxed text-muted">{longDesc}</p>

          {/* Context */}
          {context && (
            <Section title={tx.projectSectionContext}>
              <p className="text-sm leading-relaxed text-muted">{context}</p>
            </Section>
          )}

          {/* Role & responsibilities */}
          <Section title={tx.projectSectionResponsibilities}>
            <p className="text-sm font-medium text-foreground">{role}</p>
            {ownership && (
              <p className="mt-1 text-sm leading-relaxed text-muted">{ownership}</p>
            )}
          </Section>

          {/* Architecture highlights */}
          {highlights.length > 0 && (
            <Section title={tx.projectSectionArchitecture}>
              <ul className="space-y-2">
                {highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" aria-hidden />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* Metrics / impact */}
          {metrics && (
            <Section title={tx.projectMetricsLabel}>
              <p className="text-sm leading-relaxed text-muted">
                <span className="text-[color:var(--accent)]">↗</span> {metrics}
              </p>
            </Section>
          )}

          {/* Full stack */}
          <Section title={tx.projectSectionStack}>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Chip key={tech}>{tech}</Chip>
              ))}
            </div>
          </Section>
        </div>

        {/* Footer links */}
        {(project.links.github || project.links.live) && (
          <div className="flex gap-3 border-t border-[color:var(--border)] px-6 py-4">
            {project.links.live && (
              <Link
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-1.5"
                aria-label={tx.projectLiveAria(title)}
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
                aria-label={tx.projectGithubAria(title)}
              >
                GitHub
              </Link>
            )}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-5 border-t border-[color:var(--border)]/60 pt-4">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-soft">
        {title}
      </p>
      {children}
    </div>
  );
}
