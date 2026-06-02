import type { Project } from "@/types/project";

export type {
  Project,
  ProjectType,
  ProjectStatus,
  TechTag,
} from "@/types/project";

export const projects: Project[] = [
  {
    slug: "mundialito",
    type: "fullstack",
    featured: true,
    status: "live",
    title: {
      es: "Mundialito – PWA del Mundial 2026",
      en: "Mundialito – World Cup 2026 PWA",
    },
    shortDescription: {
      es: "Prode + fantasy league para el Mundial 2026. PWA mobile-first con ligas privadas, leaderboards en tiempo real y logros desbloqueables.",
      en: "Prediction game + fantasy league for World Cup 2026. Mobile-first PWA with private leagues, real-time leaderboards and unlockable achievements.",
    },
    longDescription: {
      es: "Aplicación web progresiva que combina dos formatos de juego entre amigos: un prode de predicciones de resultados y una fantasy league donde armás tu equipo con jugadores reales de las 48 selecciones. Incluye ligas privadas con código de invitación, leaderboards en tiempo real vía WebSocket, sistema de puntajes y notificaciones push. Gratis y sin publicidad.",
      en: "Progressive web app combining two game formats among friends: a results prediction game and a fantasy league where you build your team from real players across the 48 national teams. Includes private leagues with invite codes, real-time leaderboards over WebSocket, a scoring system and push notifications. Free and ad-free.",
    },
    role: {
      es: "Full Stack Developer (proyecto personal)",
      en: "Full Stack Developer (personal project)",
    },
    techStack: [
      "react",
      "typescript",
      "tailwind",
      "vite",
      "framer-motion",
      "zustand",
      "tanstack-query",
      "express",
      "drizzle",
      "turso",
      "websocket",
      "jwt",
      "pwa",
    ],
    architectureHighlights: {
      es: [
        "PWA con funcionalidad offline y notificaciones push (Web Push API + VAPID).",
        "Leaderboards en tiempo real con WebSocket y salas por liga.",
        "Auth JWT stateless (access de 15 min + refresh de 30 días).",
        "Sistema de puntajes del prode: 5 pts resultado exacto, 3 pts diferencia + ganador, 1 pt ganador. Lock automático 1h antes de cada partido.",
        "Fantasy: equipos de 15 jugadores (2 ARQ, 5 DEF, 5 MED, 3 DEL), capitán/vice y 11 titulares sobre las 48 selecciones.",
        "Estado con Zustand persistido + TanStack Query; base distribuida Turso (libSQL) con Drizzle ORM.",
        "Deploy: API en Render, frontend en Vercel, con CI/CD vía GitHub Actions.",
      ],
      en: [
        "PWA with offline support and push notifications (Web Push API + VAPID).",
        "Real-time leaderboards over WebSocket with league-specific rooms.",
        "Stateless JWT auth (15-min access + 30-day refresh).",
        "Prediction scoring: 5 pts exact score, 3 pts goal difference + winner, 1 pt winner. Automatic lock 1h before each match.",
        "Fantasy: 15-player squads (2 GK, 5 DEF, 5 MID, 3 FWD), captain/vice and 11 starters across the 48 national teams.",
        "Zustand persisted state + TanStack Query; distributed Turso (libSQL) database with Drizzle ORM.",
        "Deploy: API on Render, frontend on Vercel, with CI/CD via GitHub Actions.",
      ],
    },
    links: {
      github: "https://github.com/LucioDelCorroRaffetto/Mundialito",
      live: "https://mundialito.vercel.app",
    },
    meta: {
      context: {
        es: "Proyecto personal de mayor escala: monorepo full-stack con TypeScript end-to-end (99% del código).",
        en: "Largest personal project: full-stack monorepo with end-to-end TypeScript (99% of the code).",
      },
      ownership: {
        es: "Rol único: diseño de producto, frontend, backend, base de datos, tiempo real y deploy.",
        en: "Sole role: product design, frontend, backend, database, real-time and deployment.",
      },
      metrics: {
        es: "104 partidos · 48 selecciones · 20 logros · leaderboards en tiempo real · TypeScript 99%",
        en: "104 matches · 48 national teams · 20 achievements · real-time leaderboards · 99% TypeScript",
      },
    },
  },
  {
    slug: "zle-store",
    type: "fullstack",
    featured: true,
    status: "professional",
    title: {
      es: "ZLE Store – E-commerce Mayorista",
      en: "ZLE Store – Wholesale E-commerce",
    },
    shortDescription: {
      es: "Plataforma de e-commerce mayorista en desarrollo activo. Proyecto profesional donde ejerzo como Team Lead.",
      en: "Wholesale e-commerce platform in active development. Professional project where I work as Team Lead.",
    },
    longDescription: {
      es: "E-commerce mayorista con arquitectura limpia y monorepo. Soy el Team Lead técnico del equipo: tomo decisiones de arquitectura, hago code review, priorizo features y acompaño al equipo.",
      en: "Wholesale e-commerce with clean architecture and monorepo setup. I'm the technical Team Lead: I make architecture decisions, do code reviews, prioritize features and support the team.",
    },
    role: {
      es: "Team Lead – ForIT Software Factory",
      en: "Team Lead – ForIT Software Factory",
    },
    techStack: [
      "typescript",
      "react",
      "node",
      "mysql",
      "docker",
      "vitest",
      "tdd",
      "clean-architecture",
      "monorepo",
    ],
    architectureHighlights: {
      es: [
        "Monorepo con Yarn Workspaces: librerías compartidas entre frontend, backend y dominio.",
        "Arquitectura Limpia con separación estricta entre capas (dominio, infra, UI).",
        "TDD aplicado desde el inicio con Vitest.",
        "Docker para entorno de desarrollo reproducible.",
        "Storybook para documentar y aislar componentes de UI.",
      ],
      en: [
        "Monorepo with Yarn Workspaces: shared libraries across frontend, backend and domain.",
        "Clean Architecture with strict layer separation (domain, infra, UI).",
        "TDD from the start with Vitest.",
        "Docker for reproducible development environments.",
        "Storybook to document and isolate UI components.",
      ],
    },
    links: {},
    meta: {
      context: {
        es: "Proyecto profesional activo en ForIT Software Factory.",
        en: "Active professional project at ForIT Software Factory.",
      },
      ownership: {
        es: "Team Lead técnico: decisiones de arquitectura, code review, mentoría al equipo y priorización.",
        en: "Technical Team Lead: architecture decisions, code review, team mentoring and prioritization.",
      },
      metrics: {
        es: "3 devs liderados · 5 módulos en sprint · +200 commits revisados · monorepo de 4 paquetes",
        en: "3 devs led · 5 modules in sprint · 200+ commits reviewed · 4-package monorepo",
      },
    },
  },
  {
    slug: "amia-employment-platform",
    type: "fullstack",
    featured: true,
    status: "professional",
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
        "Vista de búsqueda de postulantes: filtros complejos sin limitación de presupuesto.",
        "Storybook para documentar y probar componentes de UI en aislamiento.",
      ],
      en: [
        "Monorepo with yarn workspaces to share libraries across frontend, backend and domain.",
        "Clean architecture with strict separation between domain, infrastructure and UI layers.",
        "TDD applied to use cases: tests per functionality with libraries like Faker.",
        "Applicant search view: complex filters without budget constraints.",
        "Storybook to document and test UI components in isolation.",
      ],
    },
    links: {},
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
        es: "500+ postulantes gestionados · 8 módulos en producción · cobertura TDD >75% · 2 roles de usuario",
        en: "500+ applicants managed · 8 modules in production · >75% TDD coverage · 2 user roles",
      },
    },
  },
  {
    slug: "contactship",
    type: "microservice",
    featured: false,
    status: "personal",
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
        es: "Cobertura tests >80% · caché Redis -60% latencia · 5 modelos IA evaluados · ~1.200 líneas de código",
        en: ">80% test coverage · Redis cache -60% latency · 5 AI models evaluated · ~1,200 lines of code",
      },
    },
  },
  {
    slug: "impostor-app",
    type: "game",
    featured: false,
    status: "live",
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
        "PWA offline-first: más de 1.600 palabras en 13 categorías disponibles sin internet.",
        "IA generativa integrada con OpenRouter: fallback automático entre 5 modelos gratuitos con lógica de reintento y parseo multi-tier para respuestas inconsistentes.",
        "Caché en localStorage con TTL de 7 días y evicción por cuota — evita re-generar categorías ya pedidas.",
        "Fisher-Yates shuffle para asignación de roles sin sesgo estadístico.",
        "Máquina de estados de juego via hooks: transiciones válidas entre pantallas con AnimatePresence.",
      ],
      en: [
        "Offline-first PWA: 1,600+ words across 13 categories available without internet.",
        "Generative AI via OpenRouter: automatic fallback across 5 free models with retry logic and multi-tier response parsing for inconsistent outputs.",
        "localStorage cache with 7-day TTL and quota-based eviction — avoids re-generating already-fetched categories.",
        "Fisher-Yates shuffle for statistically unbiased role assignment.",
        "Game state machine via hooks: valid transitions between screens with AnimatePresence.",
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
        es: "100+ usuarios reales · 1.600+ palabras offline · 5 modelos IA con fallback · 13 categorías",
        en: "100+ real users · 1,600+ words offline · 5 AI models with fallback · 13 categories",
      },
    },
  },
  {
    slug: "mistica",
    type: "fullstack",
    featured: false,
    status: "personal",
    title: {
      es: "Mistica – Full-Stack con Clean Architecture",
      en: "Mistica – Full-Stack with Clean Architecture",
    },
    shortDescription: {
      es: "App full-stack de referencia con Clean Architecture, TDD y separación estricta de capas en un monorepo.",
      en: "Reference full-stack app with Clean Architecture, TDD and strict layer separation in a monorepo.",
    },
    longDescription: {
      es: "Proyecto pensado como base de arquitectura: una capa de dominio pura e independiente del framework, capas de aplicación e infraestructura separadas, y una suite de tests por funcionalidad. Levantable con Docker en pocos pasos.",
      en: "Project built as an architecture baseline: a pure, framework-agnostic domain layer, separate application and infrastructure layers, and a per-feature test suite. Spins up with Docker in a few steps.",
    },
    role: {
      es: "Full Stack Developer (proyecto personal)",
      en: "Full Stack Developer (personal project)",
    },
    techStack: [
      "react",
      "typescript",
      "vite",
      "express",
      "postgres",
      "vitest",
      "docker",
      "clean-architecture",
      "tdd",
      "monorepo",
    ],
    architectureHighlights: {
      es: [
        "Capa de dominio pura con lógica de negocio agnóstica al framework (100% testeable en aislamiento).",
        "Separación estricta dominio / aplicación / infraestructura / UI.",
        "TDD con Vitest: tests unitarios e integración por caso de uso.",
        "Monorepo con workspaces; entorno reproducible con Docker Compose.",
      ],
      en: [
        "Pure domain layer with framework-agnostic business logic (100% testable in isolation).",
        "Strict domain / application / infrastructure / UI separation.",
        "TDD with Vitest: unit and integration tests per use case.",
        "Monorepo with workspaces; reproducible environment with Docker Compose.",
      ],
    },
    links: {
      github: "https://github.com/LucioDelCorroRaffetto/Mistica",
    },
    meta: {
      context: {
        es: "Proyecto personal para consolidar Clean Architecture y TDD como base reutilizable.",
        en: "Personal project to consolidate Clean Architecture and TDD as a reusable baseline.",
      },
      ownership: {
        es: "Rol único: diseño de arquitectura, dominio, backend, frontend y tests.",
        en: "Sole role: architecture design, domain, backend, frontend and tests.",
      },
    },
  },
  {
    slug: "mobi-ecommerce",
    type: "fullstack",
    featured: false,
    status: "academic",
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
  {
    slug: "cute-valentine",
    type: "frontend",
    featured: false,
    status: "personal",
    title: {
      es: "Cute Valentine – App de San Valentín",
      en: "Cute Valentine – Valentine's Day App",
    },
    shortDescription: {
      es: "Micro-app frontend con un botón 'No' que huye del cursor. Enfoque en UX de detalle y comportamiento interactivo.",
      en: "Frontend micro-app with a 'No' button that escapes the cursor. Focus on detailed UX and interactive behavior.",
    },
    longDescription: {
      es: "Aplicación de San Valentín con una propuesta simple pero con mucha atención al detalle: el botón 'No' escapa al hover y al tap, haciendo la elección inevitable. Sin dependencias, una sola página.",
      en: "Valentine's Day app with a simple premise but strong attention to detail: the 'No' button escapes hover and tap, making the choice inevitable. No dependencies, single page.",
    },
    role: {
      es: "Frontend Developer (proyecto personal)",
      en: "Frontend Developer (personal project)",
    },
    techStack: ["javascript"],
    architectureHighlights: {
      es: [
        "Botón 'No' evasivo: lógica de escape al hover y al touch en mobile.",
        "Animación de celebración con corazones flotantes (se detiene a los 4s para captura).",
        "Sin dependencias — HTML, CSS y JS vanilla.",
        "Mobile-first y totalmente responsive.",
      ],
      en: [
        "Elusive 'No' button: escape logic on hover and touch on mobile.",
        "Celebration animation with floating hearts (stops after 4s for screenshots).",
        "Zero dependencies — plain HTML, CSS and vanilla JS.",
        "Mobile-first and fully responsive.",
      ],
    },
    links: {
      github: "https://github.com/LucioDelCorroRaffetto/cute-valentine",
    },
    meta: {
      context: {
        es: "Proyecto personal para explorar interacciones juguetonas y detalle en UX.",
        en: "Personal project to explore playful interactions and UX attention to detail.",
      },
    },
  },
];

