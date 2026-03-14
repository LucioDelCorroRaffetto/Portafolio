import type { LearningItem } from "@/types/learning";

export type { LearningItem } from "@/types/learning";

export const learning: LearningItem[] = [
  {
    id: "uba",
    institution: "Universidad de Buenos Aires",
    program: {
      es: "Ingeniería en Sistemas (en curso)",
      en: "Systems Engineering (in progress)",
    },
    period: {
      es: "Ago 2025 – Dic 2033",
      en: "Aug 2025 – Dec 2033",
    },
    description: {
      es: "Formación académica en ciencias de la computación, algoritmos y fundamentos de ingeniería de software.",
      en: "Academic training in computer science, algorithms and software engineering fundamentals.",
    },
  },
  {
    id: "forit-program",
    institution: "ForIT Software Factory",
    program: {
      es: "Computer Programming",
      en: "Computer Programming",
    },
    period: {
      es: "May 2025 – Sep 2025",
      en: "May 2025 – Sep 2025",
    },
    description: {
      es: "Programa intensivo orientado a desarrollo de aplicaciones web full stack con foco en buenas prácticas y trabajo en equipo.",
      en: "Intensive program focused on full stack web development with an emphasis on best practices and teamwork.",
    },
  },
  {
    id: "digital-house",
    institution: "Digital House & Fundación Formar",
    program: {
      es: "Programación Web Full Stack",
      en: "Full Stack Web Development",
    },
    period: {
      es: "Sep 2024 – May 2025",
      en: "Sep 2024 – May 2025",
    },
    description: {
      es: "Proyecto integrador de e-commerce “Mobi” desde el maquetado hasta la funcionalidad, trabajando con JavaScript, Node.js, Express, HTML5, CSS3, Bootstrap y MySQL (Sequelize).",
      en: "Capstone e-commerce project “Mobi” from design to implementation, working with JavaScript, Node.js, Express, HTML5, CSS3, Bootstrap and MySQL (Sequelize).",
    },
  },
];

