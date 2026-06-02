import type { ExperienceItem } from "@/types/experience";

export type { ExperienceItem } from "@/types/experience";

export const experience: ExperienceItem[] = [
  {
    id: "forit-zle",
    company: "ForIT Software Factory · ZLE Store",
    role: {
      es: "Team Lead",
      en: "Team Lead",
    },
    period: {
      es: "mar. 2026 · actualidad",
      en: "Mar 2026 · present",
    },
    description: {
      es: "Liderazgo técnico de un equipo en un e-commerce mayorista. Responsable de organizar el trabajo, tomar decisiones de arquitectura, hacer code review y acompañar al equipo en el día a día. Primeras semanas: entender cómo trabaja el equipo, generar claridad y destrabar bloqueos más que tener todas las respuestas.",
      en: "Technical leadership of a team building a wholesale e-commerce platform. Responsible for organizing work, making architecture decisions, doing code reviews and supporting the team daily. First weeks: understanding how the team works, generating clarity and unblocking issues rather than having all the answers.",
    },
    highlights: {
      es: [
        "Toma de decisiones de arquitectura y priorización de features.",
        "Code review y mentoría al equipo.",
        "Stack: TypeScript · React · Node.js · MySQL · Docker · Vitest · Storybook.",
        "Prácticas: TDD, Arquitectura Limpia, monorepo con Yarn Workspaces.",
      ],
      en: [
        "Architecture decisions and feature prioritization.",
        "Code review and team mentoring.",
        "Stack: TypeScript · React · Node.js · MySQL · Docker · Vitest · Storybook.",
        "Practices: TDD, Clean Architecture, monorepo with Yarn Workspaces.",
      ],
    },
  },
  {
    id: "forit-amia",
    company: "ForIT Software Factory · AMIA",
    role: {
      es: "Developer Ownership",
      en: "Developer Ownership",
    },
    period: {
      es: "ago. 2025 – mar. 2026 · 9 meses",
      en: "Aug 2025 – Mar 2026 · 9 months",
    },
    description: {
      es: "Primer trabajo en IT en un proyecto real con cliente real. Evolucioné de Developer a Developer Ownership: me volví el referente técnico del equipo, tomé decisiones junto al líder y acompañé a nuevos integrantes. Plataforma de recruiting multi-tenant para AMIA, en producción y en uso.",
      en: "First IT job on a real project with a real client. Grew from Developer to Developer Ownership: became the technical go-to for the team, made decisions with the lead and onboarded new members. Multi-tenant recruiting platform for AMIA, live in production.",
    },
    highlights: {
      es: [
        "TDD desde el primer día: tests por caso de uso con Vitest y Faker.",
        "Monorepo con yarn workspaces: librerías compartidas de dominio, UI e infra.",
        "Arquitectura Limpia con separación estricta entre dominio, infra y UI.",
        "Storybook para documentar y probar componentes en aislamiento.",
        "Referente técnico y de dominio: mentoría a nuevos devs, consultas de líderes.",
      ],
      en: [
        "TDD from day one: use-case tests with Vitest and Faker.",
        "Monorepo with yarn workspaces: shared domain, UI and infra libraries.",
        "Clean Architecture with strict separation between domain, infra and UI.",
        "Storybook to document and test components in isolation.",
        "Technical and domain go-to: mentored new devs, answered leads' questions.",
      ],
    },
  },
];

