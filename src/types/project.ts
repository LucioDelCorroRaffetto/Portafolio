export type ProjectType =
  | "frontend"
  | "backend"
  | "fullstack"
  | "game"
  | "microservice";

export type TechTag =
  | "react"
  | "nextjs"
  | "typescript"
  | "vite"
  | "tailwind"
  | "framer-motion"
  | "node"
  | "express"
  | "nest"
  | "postgres"
  | "mysql"
  | "sequelize"
  | "typeorm"
  | "redis"
  | "bull"
  | "huggingface"
  | "tdd"
  | "clean-architecture"
  | "clean-code"
  | "monorepo";

export interface Project {
  slug: string;
  type: ProjectType;
  featured: boolean;
  title: { es: string; en: string };
  shortDescription: { es: string; en: string };
  longDescription: { es: string; en: string };
  role: { es: string; en: string };
  techStack: TechTag[];
  architectureHighlights: { es: string[]; en: string[] };
  links: { github?: string; live?: string };
  meta: {
    year?: string;
    context?: { es: string; en: string };
    /** Rol principal, equipo y responsabilidades (para proyectos grandes). */
    ownership?: { es: string; en: string };
    /** Métricas aproximadas para dimensionar impacto. */
    metrics?: { es: string; en: string };
  };
}
