export type SectionId =
  | "hero"
  | "about"
  | "approach"
  | "projects"
  | "experience"
  | "exploring"
  | "learning"
  | "testimonials"
  | "insights"
  | "contact";

export type Locale = "es" | "en";

export type { Project, ProjectType, ProjectStatus, TechTag } from "./project";
export type { ExperienceItem } from "./experience";
export type { LearningItem } from "./learning";
