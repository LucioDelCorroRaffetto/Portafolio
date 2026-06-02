"use client";

import { useMemo, useState } from "react";
import { projects } from "@/content/projects";
import {
  getFeaturedProjects,
  filterProjectsByType,
  filterProjectsByTech,
} from "@/lib/filters";
import type { Locale, Project, ProjectType, TechTag } from "@/types";
import { i18n } from "@/lib/i18n";
import { Chip } from "@/components/ui/Chip";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilters } from "./ProjectFilters";
import { ProjectModal } from "./ProjectModal";

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
  const [selected, setSelected] = useState<Project | null>(null);

  const featured = getFeaturedProjects(projects);
  const rest = useMemo(() => projects.filter((p) => !p.featured), []);

  // Filter options derived from the actual "rest" projects, so empty options never show.
  const availableTypes = useMemo(
    () => Array.from(new Set(rest.map((p) => p.type))) as ProjectType[],
    [rest]
  );
  const availableTechs = useMemo(
    () => Array.from(new Set(rest.flatMap((p) => p.techStack))) as TechTag[],
    [rest]
  );

  const filtered = filterProjectsByTech(
    filterProjectsByType(rest, filterType),
    filterTech
  );

  return (
    <section id="projects" className="section">
      <div className="container-page">
        <EyebrowLabel>{tx.projectsEyebrow}</EyebrowLabel>
        <h2 className="section-heading">{tx.projectsHeading}</h2>
        <p className="section-description">{tx.projectsDescription}</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              locale={locale}
              variant="featured"
              onOpen={setSelected}
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
          availableTypes={availableTypes}
          availableTechs={availableTechs}
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard
              key={`all-${project.slug}`}
              project={project}
              locale={locale}
              variant="compact"
              onOpen={setSelected}
            />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal
          project={selected}
          locale={locale}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
