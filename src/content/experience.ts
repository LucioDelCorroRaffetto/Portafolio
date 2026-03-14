import type { ExperienceItem } from "@/types/experience";

export type { ExperienceItem } from "@/types/experience";

export const experience: ExperienceItem[] = [
  {
    id: "forit-amia",
    company: "ForIT Software Factory · AMIA",
    role: {
      es: "Developer Ownership",
      en: "Developer Ownership",
    },
    period: {
      es: "2025 · Proyecto en curso",
      en: "2025 · Ongoing project",
    },
    description: {
      es: "Evolución desde Developer a Developer Quality y luego a Developer Ownership. Soy el desarrollador más veterano del proyecto: tomo decisiones técnicas junto al leader, guío la dirección del producto y actúo como mentor tanto del proyecto (múltiples funcionalidades) como de compañeros que se incorporan. Referente técnico y de dominio; respondo consultas de compañeros y líderes y soy una pieza clave para el equipo.",
      en: "Evolved from Developer to Developer Quality to Developer Ownership. I'm the most senior developer on the project: I make technical decisions with the leader, guide product direction and act as mentor both for the project (many features) and for new joiners. Technical and domain go-to; I answer questions from peers and leads and am a key enabler for the team.",
    },
    highlights: {
      es: [
        "TDD aplicado a casos de uso con tests por funcionalidad (p. ej. Faker).",
        "Monorepo con yarn workspaces, librerías compartidas de dominio y UI.",
        "Storybook para documentar y probar componentes de interfaz.",
        "Vista de búsqueda de postulantes sin presupuesto: filtros por preferencias del administrador.",
        "Mentoría y soporte a nuevos desarrolladores y al equipo.",
      ],
      en: [
        "TDD applied to use cases with tests per functionality (e.g. Faker).",
        "Monorepo with yarn workspaces, shared domain and UI libraries.",
        "Storybook to document and test UI components.",
        "Applicant search view without budget: filters by admin preferences.",
        "Mentorship and support for new developers and the team.",
      ],
    },
  },
];

