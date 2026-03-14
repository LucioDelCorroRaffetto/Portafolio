import type { Project } from "@/types/project";

export type { Project, ProjectType, TechTag } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "amia-employment-platform",
    type: "fullstack",
    featured: true,
    title: {
      es: "Plataforma de Servicio de Empleo AMIA",
      en: "AMIA Employment Service Platform",
    },
    shortDescription: {
      es: "Plataforma de recruiting multi-tenant para gestionar búsquedas, postulantes y clientes de forma escalable.",
      en: "Multi-tenant recruiting platform to manage jobs, applicants and clients at scale.",
    },
    longDescription: {
      es: "Desarrollo fullstack de una plataforma de servicio de empleo multi-tenant para AMIA, con foco en arquitectura limpia, TDD y una experiencia de usuario clara para administradores, empresas y postulantes.",
      en: "Fullstack development of a multi-tenant employment service platform for AMIA, focused on clean architecture, TDD and a clear user experience for admins, companies and applicants.",
    },
    role: {
      es: "Developer Ownership en ForIT Software Factory",
      en: "Developer Ownership at ForIT Software Factory",
    },
    techStack: [
      "react",
      "typescript",
      "tailwind",
      "vite",
      "node",
      "postgres",
      "tdd",
      "clean-architecture",
      "clean-code",
      "monorepo",
    ],
    architectureHighlights: {
      es: [
        "Monorepo con yarn workspaces para compartir librerías entre frontend, backend y dominio.",
        "Arquitectura limpia y separación estricta entre capas (dominio, infraestructura, UI).",
        "TDD aplicado a casos de uso: tests por funcionalidad con librerías como Faker.",
        "Vista de búsqueda de postulantes sin presupuesto: filtros por preferencias del administrador (ej. stack, género).",
        "Storybook para documentar y probar componentes de UI en aislamiento.",
      ],
      en: [
        "Monorepo with yarn workspaces to share libraries across frontend, backend and domain.",
        "Clean architecture with strict separation between domain, infrastructure and UI layers.",
        "TDD applied to use cases: tests per functionality with libraries like Faker.",
        "Applicant search view without budget: filters by admin preferences (e.g. stack, gender).",
        "Storybook to document and test UI components in isolation.",
      ],
    },
    links: {
      github: undefined,
      live: undefined,
    },
    meta: {
      context: {
        es: "Proyecto profesional para la organización AMIA dentro de ForIT Software Factory.",
        en: "Professional project for AMIA within ForIT Software Factory.",
      },
      ownership: {
        es: "Rol principal: Developer Ownership (evolución desde Developer → Developer Quality). Soy el más veterano del proyecto: tomo decisiones técnicas junto al leader, guío al equipo y actúo como mentor tanto del producto (múltiples funcionalidades) como de compañeros que se incorporan. Referente técnico del proyecto.",
        en: "Lead role: Developer Ownership (evolved from Developer → Developer Quality). I'm the most senior on the project: I make technical decisions with the leader, guide the team and act as mentor both for the product (many features) and for new joiners. Technical go-to for the project.",
      },
      metrics: {
        es: "Plataforma en uso por administradores y postulantes; múltiples módulos en producción.",
        en: "Platform in use by admins and applicants; multiple modules in production.",
      },
    },
  },
  {
    slug: "contactship",
    type: "backend",
    featured: true,
    title: {
      es: "ContactShip – Microservicio de Leads con IA",
      en: "ContactShip – AI-powered Leads Microservice",
    },
    shortDescription: {
      es: "Microservicio NestJS para gestión de leads con enriquecimiento mediante IA, colas y caching.",
      en: "NestJS microservice for lead management with AI enrichment, queues and caching.",
    },
    longDescription: {
      es: "Microservicio backend que orquesta la gestión inteligente de leads: CRUD completo, sincronización automática desde fuentes externas, enriquecimiento con IA (Hugging Face) y caching con Redis para servir respuestas rápidas y consistentes.",
      en: "Backend microservice that orchestrates intelligent lead management: full CRUD, automatic sync from external source, AI enrichment (Hugging Face) and Redis caching for fast, consistent responses.",
    },
    role: {
      es: "Backend Developer (proyecto personal)",
      en: "Backend Developer (personal project)",
    },
    techStack: [
      "nest",
      "typescript",
      "postgres",
      "typeorm",
      "redis",
      "bull",
      "huggingface",
      "tdd",
      "clean-code",
    ],
    architectureHighlights: {
      es: [
        "Integración con Hugging Face vía API y modelo provisto por la plataforma para resúmenes de leads.",
        "Uso de Redis y Bull para colas de tareas asíncronas y caching inteligente.",
        "Adapter Pattern para desacoplar la integración de IA del resto del dominio.",
        "Tests unitarios y E2E con Jest; validación de la IA probando varios modelos e investigando por cuenta propia.",
      ],
      en: [
        "Integration with Hugging Face via API and model provided by the platform for lead summaries.",
        "Redis and Bull used for asynchronous job queues and smart caching.",
        "Adapter pattern to decouple the AI integration from the rest of the domain.",
        "Unit and E2E tests with Jest; AI validation by trying several models and self-directed research.",
      ],
    },
    links: {
      github: "https://github.com/LucioDelCorroRaffetto/ContactShip",
    },
    meta: {
      context: {
        es: "Desafío técnico backend centrado en arquitectura, performance y robustez.",
        en: "Backend technical challenge focused on architecture, performance and robustness.",
      },
      ownership: {
        es: "Rol único: diseño e implementación del microservicio (backend, IA, colas, tests).",
        en: "Sole role: design and implementation of the microservice (backend, AI, queues, tests).",
      },
      metrics: {
        es: "Cobertura de tests superior al 80%.",
        en: "Test coverage above 80%.",
      },
    },
  },
  {
    slug: "impostor-app",
    type: "game",
    featured: true,
    title: {
      es: "El Impostor – Party Game PWA",
      en: "El Impostor – Party Game PWA",
    },
    shortDescription: {
      es: "Juego de fiesta PWA para móvil con uno o más impostores, animaciones suaves y modo offline.",
      en: "Mobile-first party game PWA with one or more impostors, smooth animations and offline mode.",
    },
    longDescription: {
      es: "Aplicación web progresiva inspirada en juegos como Among Us y Codenames. El teléfono pasa de mano en mano, asignando roles ocultos y palabras secretas, con foco en una experiencia fluida en dispositivos móviles.",
      en: "Progressive web app inspired by games like Among Us and Codenames. The phone is passed around assigning hidden roles and secret words, with a strong focus on a smooth mobile experience.",
    },
    role: {
      es: "Full Stack Developer (proyecto personal)",
      en: "Full Stack Developer (personal project)",
    },
    techStack: [
      "react",
      "typescript",
      "vite",
      "tailwind",
      "framer-motion",
    ],
    architectureHighlights: {
      es: [
        "PWA lista para instalar en móviles con soporte offline.",
        "Más de 1.600 palabras en 13 categorías (en roadmap: IA para generar categorías y palabras nuevas sin BD, host en Vercel).",
        "Animaciones suaves entre pantallas con Framer Motion.",
        "Decisiones de UX basadas en referencias de otras páginas e ideas propias.",
      ],
      en: [
        "PWA ready to be installed on mobile with offline support.",
        "1,600+ words across 13 categories (roadmap: AI to generate categories and new words without a DB, host on Vercel).",
        "Smooth screen transitions with Framer Motion.",
        "UX decisions based on references from other sites and own ideas.",
      ],
    },
    links: {
      github: "https://github.com/LucioDelCorroRaffetto/impostor-app",
    },
    meta: {
      context: {
        es: "Proyecto autodidacta para explorar UX de juegos de fiesta y PWA. Actualmente hosteado en GitHub Pages.",
        en: "Self-directed project to explore party game UX and PWAs. Currently hosted on GitHub Pages.",
      },
      ownership: {
        es: "Rol único: diseño, desarrollo y decisiones de UX. Plan a futuro: IA para categorías y despliegue en Vercel.",
        en: "Sole role: design, development and UX decisions. Future plan: AI for categories and deploy on Vercel.",
      },
      metrics: {
        es: "Usuarios reales; métricas por implementar.",
        en: "Real users; metrics to be implemented.",
      },
    },
  },
  {
    slug: "mobi-ecommerce",
    type: "fullstack",
    featured: false,
    title: {
      es: "Mobi – E-commerce Inmobiliario",
      en: "Mobi – Real Estate E-commerce",
    },
    shortDescription: {
      es: "Plataforma de e-commerce inmobiliario desarrollada como proyecto integrador fullstack.",
      en: "Real estate e-commerce platform developed as a fullstack capstone project.",
    },
    longDescription: {
      es: "Aplicación web que permite explorar y gestionar propiedades, con foco en la organización del catálogo, filtros de búsqueda y un flujo de compra básico.",
      en: "Web application to explore and manage properties, focused on catalog organization, search filters and a basic purchase flow.",
    },
    role: {
      es: "Full Stack Developer (proyecto académico)",
      en: "Full Stack Developer (academic project)",
    },
    techStack: ["node", "express", "mysql", "sequelize"],
    architectureHighlights: {
      es: [
        "Backend en Node.js con Express y Sequelize sobre MySQL.",
        "Plantillas server-side y componentes reutilizables.",
        "Modelo de datos centrado en propiedades, usuarios y reseñas.",
      ],
      en: [
        "Node.js backend with Express and Sequelize on top of MySQL.",
        "Server-side templates and reusable components.",
        "Data model focused on properties, users and reviews.",
      ],
    },
    links: {
      github: "https://github.com/LucioDelCorroRaffetto/Mobi",
    },
    meta: {
      context: {
        es: "Proyecto integrador del programa de Programación Web Full Stack.",
        en: "Capstone project for the Web Full Stack program.",
      },
    },
  },
];

