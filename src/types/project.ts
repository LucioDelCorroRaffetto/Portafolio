export type ProjectType =
  | "frontend"
  | "backend"
  | "fullstack"
  | "game"
  | "microservice";

/**
 * Estado del proyecto, usado para el badge de la card.
 * - live: desplegado y accesible públicamente.
 * - professional: trabajo profesional (cliente / software factory).
 * - personal: proyecto personal / autodidacta.
 * - academic: proyecto académico o integrador.
 */
export type ProjectStatus = "live" | "professional" | "personal" | "academic";

export type TechTag =
  | "react"
  | "nextjs"
  | "typescript"
  | "javascript"
  | "vite"
  | "tailwind"
  | "framer-motion"
  | "zustand"
  | "tanstack-query"
  | "node"
  | "express"
  | "nest"
  | "postgres"
  | "mysql"
  | "sequelize"
  | "typeorm"
  | "drizzle"
  | "turso"
  | "redis"
  | "bull"
  | "websocket"
  | "jwt"
  | "pwa"
  | "huggingface"
  | "docker"
  | "vitest"
  | "tdd"
  | "clean-architecture"
  | "clean-code"
  | "monorepo";

export interface Project {
  slug: string;
  type: ProjectType;
  featured: boolean;
  /** Estado para el badge de la card (Live / Profesional / Personal / Académico). */
  status?: ProjectStatus;
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
