"use client";

import { projects } from "@/content/projects";
import {
  getFeaturedProjects,
  filterProjectsByType,
  filterProjectsByTech,
} from "@/lib/filters";
import type { Locale } from "@/types";
import { i18n } from "@/lib/i18n";
import { Chip } from "@/components/ui/Chip";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilters } from "./ProjectFilters";

interface ProjectsSectionProps {
  locale: Locale;
  filterType: string;
  setFilterType: (value: string) => void;
  filterTech: string;
  setFilterTech: (value: string) => void;
}

export function ProjectsSection({
  locale,
  filterType,
  setFilterType,
  filterTech,
  setFilterTech,
}: ProjectsSectionProps) {
  const tx = i18n[locale];
  const featured = getFeaturedProjects(projects);
  const filtered = filterProjectsByTech(
    filterProjectsByType(projects, filterType),
    filterTech
  );

  return (
    <section id="projects" className="section">
      <div className="container-page">
        <EyebrowLabel>{tx.projectsEyebrow}</EyebrowLabel>
        <h2 className="section-heading">{tx.projectsHeading}</h2>
        <p className="section-description">{tx.projectsDescription}</p>

        <div className="mt-6 flex flex-wrap gap-2 text-[11px] text-muted">
          <Chip>Fullstack</Chip>
          <Chip>Backend + IA</Chip>
          <Chip>PWA · Frontend</Chip>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              locale={locale}
              variant="featured"
            />
          ))}
        </div>
      </div>

      <div className="container-page mt-12 border-t border-[color:var(--border)] pt-8">
        <ProjectFilters
          locale={locale}
          filterType={filterType}
          onTypeChange={setFilterType}
          filterTech={filterTech}
          onTechChange={setFilterTech}
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard
              key={`all-${project.slug}`}
              project={project}
              locale={locale}
              variant="compact"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
