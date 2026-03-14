export type SkillCategoryId =
  | "frontend"
  | "backend"
  | "databases"
  | "devops"
  | "ai-tools"
  | "practices"
  | "other";

export interface SkillCategory {
  id: SkillCategoryId;
  label: {
    es: string;
    en: string;
  };
  items: {
    es: string[];
    en: string[];
  };
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: {
      es: "Frontend",
      en: "Frontend",
    },
    items: {
      es: ["React", "TypeScript", "Vite", "Tailwind CSS", "Storybook", "Vitest", "Responsive Design", "UX/UI"],
      en: ["React", "TypeScript", "Vite", "Tailwind CSS", "Storybook", "Vitest", "Responsive Design", "UX/UI"],
    },
  },
  {
    id: "backend",
    label: {
      es: "Backend",
      en: "Backend",
    },
    items: {
      es: ["Node.js", "Express.js", "NestJS", "APIs REST", "Autenticación básica"],
      en: ["Node.js", "Express.js", "NestJS", "REST APIs", "Basic authentication"],
    },
  },
  {
    id: "databases",
    label: {
      es: "Bases de datos",
      en: "Databases",
    },
    items: {
      es: ["PostgreSQL", "MySQL", "Sequelize", "TypeORM", "Modelado relacional básico"],
      en: ["PostgreSQL", "MySQL", "Sequelize", "TypeORM", "Basic relational modeling"],
    },
  },
  {
    id: "devops",
    label: {
      es: "DevOps / Infra",
      en: "DevOps / Infra",
    },
    items: {
      es: ["Git", "GitHub", "CI/CD básico", "Docker (básico)", "Vercel", "Monorepo con yarn workspaces"],
      en: ["Git", "GitHub", "Basic CI/CD", "Docker (basic)", "Vercel", "Monorepo with yarn workspaces"],
    },
  },
  {
    id: "ai-tools",
    label: {
      es: "IA / Tools",
      en: "AI / Tools",
    },
    items: {
      es: ["Hugging Face Inference API", "Integración de modelos generativos", "Colas de procesamiento (Bull + Redis)"],
      en: ["Hugging Face Inference API", "Generative model integration", "Processing queues (Bull + Redis)"],
    },
  },
  {
    id: "practices",
    label: {
      es: "Prácticas y filosofía",
      en: "Practices & Philosophy",
    },
    items: {
      es: ["Test Driven Development", "Arquitectura Limpia", "Código Limpio", "Programación Funcional", "Design Thinking", "Agile / Scrum"],
      en: ["Test Driven Development", "Clean Architecture", "Clean Code", "Functional Programming", "Design Thinking", "Agile / Scrum"],
    },
  },
];

