import type { Project, ProjectType, TechTag } from "@/types";

export function filterProjectsByType(
  projects: Project[],
  type: string
): Project[] {
  if (type === "all") return projects;
  return projects.filter((p) => p.type === type);
}

export function filterProjectsByTech(
  projects: Project[],
  tech: string
): Project[] {
  if (tech === "all") return projects;
  return projects.filter((p) =>
    p.techStack.includes(tech as TechTag)
  );
}

export function getFeaturedProjects(projects: Project[]): Project[] {
  return projects.filter((p) => p.featured);
}
