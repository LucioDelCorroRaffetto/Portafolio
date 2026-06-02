import type { Locale } from "@/types";

export type I18n = {
  footerBuilt: string;
  heroTagline: string;
  heroH1Pre: string;
  heroH1Highlight: string;
  heroBio: string;
  heroMindsetTitle: string;
  heroMindsetBody: string;
  heroBtnProjects: string;
  heroBtnProjectsAria: string;
  heroBtnContact: string;
  heroBtnContactAria: string;
  heroRecentActivity: string;
  heroTagActive: string;
  heroPortfolioNote: string;
  aboutEyebrow: string;
  aboutHeading: string;
  aboutPara1: string;
  aboutPara2: string;
  aboutStackLabel: string;
  approachEyebrow: string;
  approachHeading: string;
  approachDescription: string;
  contactEyebrow: string;
  contactHeading: string;
  contactDescription: string;
  contactAvailableFor: string;
  contactChipFullstack: string;
  contactChipFreelance: string;
  contactChipEarlyStage: string;
  contactConversations: string;
  contactFirstContact: string;
  contactEmailLabel: string;
  contactPhoneLabel: string;
  experienceEyebrow: string;
  experienceHeading: string;
  experienceDescription: string;
  exploringEyebrow: string;
  exploringHeading: string;
  exploringDescription: string;
  learningEyebrow: string;
  learningHeading: string;
  learningDescription: string;
  nowTitle: string;
  nowBuilding: string;
  nowLearning: string;
  statsAria: string;
  projectsEyebrow: string;
  projectsHeading: string;
  projectsDescription: string;
  filtersAll: string;
  filtersTypeAll: string;
  filtersTechAll: string;
  projectMetrics: string;
  projectMetricsLabel: string;
  projectStatusLive: string;
  projectStatusProfessional: string;
  projectStatusPersonal: string;
  projectStatusAcademic: string;
  projectDetails: string;
  projectOpenAria: (title: string) => string;
  projectSectionContext: string;
  projectSectionResponsibilities: string;
  projectSectionArchitecture: string;
  projectSectionStack: string;
  projectGithubAria: (title: string) => string;
  projectLiveAria: (title: string) => string;
  terminalAriaOpen: string;
  terminalAriaDialog: string;
  terminalAriaClose: string;
  terminalPlaceholder: string;
  terminalWelcome: string;
  terminalHelp: string;
  terminalWhoamiQuote: string;
  terminalNavProjects: string;
  terminalNavContact: string;
  terminalUnknownCmd: (cmd: string) => string;
  sidebarThemeToggle: string;
  sidebarEsAriaActive: string;
  sidebarEnAriaSwitch: string;
  sidebarAvailable: string;
  sidebarDownloadCV: string;
  sidebarLocation: string;
  githubActivityTitle: string;
  githubActivityViewProfile: string;
  githubActivityEmpty: string;
  githubActivityLoading: string;
  skillsMatcherBtn: string;
  skillsMatcherTitle: string;
  skillsMatcherDescription: string;
  skillsMatcherPlaceholder: string;
  skillsMatcherAnalyze: string;
  skillsMatcherResult: (n: number) => string;
  skillsMatcherMatched: string;
  skillsMatcherMissing: string;
  skillsMatcherClose: string;
  testimonialsEyebrow: string;
  testimonialsHeading: string;
  testimonialsDescription: string;
  perfWidgetTitle: string;
  perfWidgetNote: string;
  recruiterModeOn: string;
  recruiterModeOff: string;
  recruiterModeLabel: string;
  insightsEyebrow: string;
  insightsHeading: string;
  insightsDescription: string;
  insightsReadMore: string;
  insightsMinRead: (n: number) => string;
  insightsClose: string;
  snippetsCopy: string;
  snippetsCopied: string;
  snippetsTitle: string;
  cmdPaletteSearch: string;
  cmdPaletteEmpty: string;
  cmdPaletteNav: (label: string) => string;
};

export const i18n: Record<Locale, I18n> = {
  es: {
    footerBuilt: "Construido como product lab con TypeScript y Tailwind CSS.",
    heroTagline: "Full Stack · Team Lead · Ing. Sistemas UBA",
    heroH1Pre: "Construyo productos cuidando",
    heroH1Highlight: "código, UX y arquitectura.",
    heroBio:
      "Full Stack Developer con foco en TypeScript, React, Node.js y bases de datos relacionales. Me muevo cómodo entre frontend, backend y diseño de experiencias, aplicando TDD, arquitectura limpia y una mirada de producto.",
    heroMindsetTitle: "Me interesa construir productos que realmente se usen.",
    heroMindsetBody:
      "No solo escribir código, sino entender: el problema del usuario, el flujo de la experiencia y la mantenibilidad del sistema.",
    heroBtnProjects: "Explorar proyectos",
    heroBtnProjectsAria: "Ir a la sección Proyectos",
    heroBtnContact: "Contactar",
    heroBtnContactAria: "Ir a la sección Contacto",
    heroRecentActivity: "Actividad reciente",
    heroTagActive: "Activo",
    heroPortfolioNote:
      "Este portfolio funciona como mi pequeño product lab: los proyectos se cuentan como casos de diseño y arquitectura.",
    aboutEyebrow: "Sobre mí",
    aboutHeading: "Full stack con mentalidad de producto.",
    aboutPara1:
      "Empecé a trabajar en un equipo real antes de cumplir un año de experiencia. En AMIA apliqué TDD, Arquitectura Limpia y monorepo multi-tenant desde el primer día — hasta convertirme en el referente técnico del proyecto. Hoy lidero un equipo en ZLE Store mientras estudio Ingeniería en Sistemas en la UBA.",
    aboutPara2:
      "Mi foco: entender el problema antes de escribir código. Construir sistemas mantenibles, testeables y pensados tanto para el usuario final como para quien los mantenga después.",
    aboutStackLabel: "Stack & prácticas",
    approachEyebrow: "Cómo trabajo",
    approachHeading: "Mi enfoque al desarrollar productos",
    approachDescription: "Principios que guían cómo diseño sistemas y escribo código.",
    contactEyebrow: "Contacto",
    contactHeading: "Hablemos",
    contactDescription:
      "Busco nuevas experiencias, formar parte de proyectos y ser de ayuda. Si te interesa lo que viste y crees que puedo sumar a tu equipo o proyecto, estoy abierto a escucharte.",
    contactAvailableFor: "Disponible para:",
    contactChipFullstack: "Posiciones full-stack",
    contactChipFreelance: "Proyectos freelance",
    contactChipEarlyStage: "Colaboración en productos early-stage",
    contactConversations:
      "Prefiero conversaciones honestas sobre el problema que quieren resolver, el contexto del producto y cómo podemos trabajar juntos para llegar a una buena solución técnica y de experiencia.",
    contactFirstContact:
      "Email, LinkedIn o un mensaje directo funcionan perfecto como primer contacto.",
    contactEmailLabel: "Email",
    contactPhoneLabel: "Teléfono",
    experienceEyebrow: "Experiencia",
    experienceHeading: "Dónde estuve construyendo producto",
    experienceDescription:
      "Experiencia profesional reciente trabajando en plataformas reales con foco en calidad, arquitectura y UX.",
    exploringEyebrow: "En qué estoy invirtiendo ahora",
    exploringHeading: "Áreas en las que profundizo para llevar mejor impacto al producto",
    exploringDescription:
      "Temas técnicos y de práctica que estoy priorizando; complementan el stack que ya uso en el día a día.",
    learningEyebrow: "Aprendizaje & formación",
    learningHeading: "Cómo fui construyendo mi base",
    learningDescription:
      "Formación académica y programas intensivos que me dieron una base sólida en desarrollo full stack y ciencias de la computación.",
    nowTitle: "Ahora",
    nowBuilding: "Construyendo",
    nowLearning: "Aprendiendo",
    statsAria: "Estadísticas",
    projectsEyebrow: "Proyectos destacados",
    projectsHeading: "Casos de estudio seleccionados",
    projectsDescription:
      "Proyectos que resumen cómo pienso el frontend, el backend y las decisiones de arquitectura cuando construyo productos.",
    filtersAll: "Más proyectos",
    filtersTypeAll: "Tipo: todos",
    filtersTechAll: "Stack: todos",
    projectMetrics: "Métricas: ",
    projectMetricsLabel: "Impacto",
    projectStatusLive: "En vivo",
    projectStatusProfessional: "Profesional",
    projectStatusPersonal: "Personal",
    projectStatusAcademic: "Académico",
    projectDetails: "Ver detalles",
    projectOpenAria: (title) => `Ver detalles de ${title}`,
    projectSectionContext: "Contexto",
    projectSectionResponsibilities: "Rol y responsabilidades",
    projectSectionArchitecture: "Arquitectura y decisiones",
    projectSectionStack: "Stack",
    projectGithubAria: (title) => `Ver código de ${title} en GitHub`,
    projectLiveAria: (title) => `Ver ${title} en vivo`,
    terminalAriaOpen: "Abrir terminal interactivo",
    terminalAriaDialog: "Terminal interactivo",
    terminalAriaClose: "Cerrar",
    terminalPlaceholder: "Escribe un comando...",
    terminalWelcome: "Terminal del portfolio. Escribe 'help' para empezar.",
    terminalHelp: `Comandos disponibles:
  whoami     Quién soy
  ls         Listar secciones
  cat <sec>  Ver about, projects, experience, contact
  projects   Ir a Proyectos
  contact    Ir a Contacto
  clear      Limpiar pantalla
  help       Esta ayuda`,
    terminalWhoamiQuote: '"Construyo productos cuidando código, UX y arquitectura."',
    terminalNavProjects: "→ Proyectos",
    terminalNavContact: "→ Contacto",
    terminalUnknownCmd: (cmd) =>
      `Comando no encontrado: ${cmd}. Escribe 'help' para ver comandos.`,
    sidebarThemeToggle: "Cambiar tema claro/oscuro",
    sidebarEsAriaActive: "Idioma: Español (activo)",
    sidebarEnAriaSwitch: "Idioma: cambiar a Inglés",
    sidebarAvailable: "Disponible",
    sidebarDownloadCV: "Descargar CV",
    sidebarLocation: "Buenos Aires · Remoto",
    githubActivityTitle: "Actividad en GitHub",
    githubActivityViewProfile: "Ver perfil en GitHub",
    githubActivityEmpty: "Sin actividad reciente.",
    githubActivityLoading: "Cargando...",
    skillsMatcherBtn: "¿Qué tan bien encajo?",
    skillsMatcherTitle: "Match de habilidades",
    skillsMatcherDescription:
      "Pegá la descripción del puesto para ver cuántos de mis skills aplican.",
    skillsMatcherPlaceholder: "Pegá la descripción del puesto...",
    skillsMatcherAnalyze: "Analizar",
    skillsMatcherResult: (n) => `${n}% de los requisitos cubiertos`,
    skillsMatcherMatched: "Skills encontrados:",
    skillsMatcherMissing: "Requisitos que no cubro:",
    skillsMatcherClose: "Cerrar",
    testimonialsEyebrow: "Lo que dicen de mí",
    testimonialsHeading: "Colaboraciones reales, palabras reales.",
    testimonialsDescription:
      "Feedback directo de colegas y colaboradores con quienes construí producto en entornos reales.",
    perfWidgetTitle: "Lighthouse Scores",
    perfWidgetNote: "Lighthouse 12 · desktop · jun 2026",
    recruiterModeOn: "Modo Reclutador",
    recruiterModeOff: "Vista completa",
    recruiterModeLabel: "Vista rápida · descargá el CV para más detalle",
    insightsEyebrow: "Insights técnicos",
    insightsHeading: "Lo que fui aprendiendo en producción.",
    insightsDescription: "Reflexiones sobre arquitectura, testing y decisiones técnicas reales.",
    insightsReadMore: "Leer más →",
    insightsMinRead: (n) => `${n} min de lectura`,
    insightsClose: "Cerrar",
    snippetsCopy: "Copiar",
    snippetsCopied: "¡Copiado!",
    snippetsTitle: "Cómo se ve en código",
    cmdPaletteSearch: "Buscar comando...",
    cmdPaletteEmpty: "Sin resultados.",
    cmdPaletteNav: (label) => `Ir a ${label}`,
  },
  en: {
    footerBuilt: "Built as a small product lab with TypeScript and Tailwind CSS.",
    heroTagline: "Full Stack · Team Lead · Systems Eng. UBA",
    heroH1Pre: "I build products caring about",
    heroH1Highlight: "code, UX and architecture.",
    heroBio:
      "Full Stack Developer focused on TypeScript, React, Node.js and relational databases. I move comfortably between frontend, backend and UX design, applying TDD, clean architecture and a strong product mindset.",
    heroMindsetTitle: "I care about building products that people actually use.",
    heroMindsetBody:
      "Not just writing code—understanding the user problem, the experience flow, and system maintainability.",
    heroBtnProjects: "Explore projects",
    heroBtnProjectsAria: "Go to Projects section",
    heroBtnContact: "Contact",
    heroBtnContactAria: "Go to Contact section",
    heroRecentActivity: "Recent activity",
    heroTagActive: "Active",
    heroPortfolioNote:
      "This portfolio works as my small product lab: projects are told as design and architecture cases.",
    aboutEyebrow: "About me",
    aboutHeading: "Full stack with a product mindset.",
    aboutPara1:
      "I started working in a real team before completing one year of experience. At AMIA I applied TDD, Clean Architecture and a multi-tenant monorepo from day one — growing into the technical go-to for the project. I now lead a team at ZLE Store while studying Systems Engineering at UBA.",
    aboutPara2:
      "My focus: understand the problem before writing code. Build systems that are maintainable, testable and designed for both the end user and the next dev who maintains them.",
    aboutStackLabel: "Stack & practices",
    approachEyebrow: "How I work",
    approachHeading: "My approach to building products",
    approachDescription: "Principles that guide how I design systems and write code.",
    contactEyebrow: "Contact",
    contactHeading: "Let's talk",
    contactDescription:
      "I'm looking for new experiences, to be part of projects and to be helpful. If you like what you see and think I can add value to your team or project, I'd be happy to talk.",
    contactAvailableFor: "Available for:",
    contactChipFullstack: "Full-stack positions",
    contactChipFreelance: "Freelance projects",
    contactChipEarlyStage: "Early-stage product collaboration",
    contactConversations:
      "I prefer honest conversations about the problem you're trying to solve, the product context and how we can work together towards a good technical and UX solution.",
    contactFirstContact: "Email, LinkedIn or a direct message work great as a first contact.",
    contactEmailLabel: "Email",
    contactPhoneLabel: "Phone",
    experienceEyebrow: "Experience",
    experienceHeading: "Where I've been building product",
    experienceDescription:
      "Recent professional experience working on real platforms with a focus on quality, architecture and UX.",
    exploringEyebrow: "Where I'm investing time now",
    exploringHeading: "Areas I'm deepening to bring better impact to the product",
    exploringDescription:
      "Technical and practice topics I'm prioritizing; they complement the stack I already use day to day.",
    learningEyebrow: "Learning & education",
    learningHeading: "How I built my foundation",
    learningDescription:
      "Academic background and intensive programs that gave me a solid base in full stack development and computer science.",
    nowTitle: "Now",
    nowBuilding: "Building",
    nowLearning: "Learning",
    statsAria: "Stats",
    projectsEyebrow: "Featured projects",
    projectsHeading: "Selected case studies",
    projectsDescription:
      "Projects that show how I approach frontend, backend and architecture decisions when building products.",
    filtersAll: "More projects",
    filtersTypeAll: "Type: all",
    filtersTechAll: "Stack: all",
    projectMetrics: "Metrics: ",
    projectMetricsLabel: "Impact",
    projectStatusLive: "Live",
    projectStatusProfessional: "Professional",
    projectStatusPersonal: "Personal",
    projectStatusAcademic: "Academic",
    projectDetails: "View details",
    projectOpenAria: (title) => `View details of ${title}`,
    projectSectionContext: "Context",
    projectSectionResponsibilities: "Role & responsibilities",
    projectSectionArchitecture: "Architecture & decisions",
    projectSectionStack: "Stack",
    projectGithubAria: (title) => `View ${title} code on GitHub`,
    projectLiveAria: (title) => `View ${title} live`,
    terminalAriaOpen: "Open interactive terminal",
    terminalAriaDialog: "Interactive terminal",
    terminalAriaClose: "Close",
    terminalPlaceholder: "Type a command...",
    terminalWelcome: "Portfolio terminal. Type 'help' to get started.",
    terminalHelp: `Available commands:
  whoami     Who I am
  ls         List sections
  cat <sec>  View about, projects, experience, contact
  projects   Go to Projects
  contact    Go to Contact
  clear      Clear screen
  help       This help`,
    terminalWhoamiQuote: '"I build products caring about code, UX and architecture."',
    terminalNavProjects: "→ Projects",
    terminalNavContact: "→ Contact",
    terminalUnknownCmd: (cmd) =>
      `Command not found: ${cmd}. Type 'help' for commands.`,
    sidebarThemeToggle: "Toggle light/dark theme",
    sidebarEsAriaActive: "Language: switch to Spanish",
    sidebarEnAriaSwitch: "Language: English (active)",
    sidebarAvailable: "Available",
    sidebarDownloadCV: "Download CV",
    sidebarLocation: "Buenos Aires · Remote",
    githubActivityTitle: "GitHub Activity",
    githubActivityViewProfile: "View GitHub profile",
    githubActivityEmpty: "No recent activity.",
    githubActivityLoading: "Loading...",
    skillsMatcherBtn: "How well do I fit?",
    skillsMatcherTitle: "Skills Match",
    skillsMatcherDescription:
      "Paste the job description to see how many of my skills apply.",
    skillsMatcherPlaceholder: "Paste the job description...",
    skillsMatcherAnalyze: "Analyze",
    skillsMatcherResult: (n) => `${n}% of requirements covered`,
    skillsMatcherMatched: "Skills found:",
    skillsMatcherMissing: "Requirements I don't cover:",
    skillsMatcherClose: "Close",
    testimonialsEyebrow: "What they say",
    testimonialsHeading: "Real collaborations, real words.",
    testimonialsDescription:
      "Direct feedback from colleagues and collaborators I've built real products with.",
    perfWidgetTitle: "Lighthouse Scores",
    perfWidgetNote: "Lighthouse 12 · desktop · Jun 2026",
    recruiterModeOn: "Recruiter Mode",
    recruiterModeOff: "Full view",
    recruiterModeLabel: "Quick view · download the CV for more detail",
    insightsEyebrow: "Technical Insights",
    insightsHeading: "What I learned in production.",
    insightsDescription: "Thoughts on architecture, testing, and real technical decisions.",
    insightsReadMore: "Read more →",
    insightsMinRead: (n) => `${n} min read`,
    insightsClose: "Close",
    snippetsCopy: "Copy",
    snippetsCopied: "Copied!",
    snippetsTitle: "What it looks like in code",
    cmdPaletteSearch: "Search command...",
    cmdPaletteEmpty: "No results.",
    cmdPaletteNav: (label) => `Go to ${label}`,
  },
};
