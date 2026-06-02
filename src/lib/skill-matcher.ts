export const LUCIO_SKILLS: string[] = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "NestJS",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Docker",
  "TDD",
  "Clean Architecture",
  "Tailwind CSS",
  "Vite",
  "Git",
  "REST APIs",
  "monorepo",
  "Vitest",
  "Jest",
  "HTML",
  "CSS",
  "Prisma",
  "TypeORM",
  "GraphQL",
  "CI/CD",
  "Linux",
  "Figma",
  "Zod",
  "React Query",
  "Zustand",
  "Context API",
  "JWT",
  "OAuth",
  "Webpack",
  "ESLint",
  "Prettier",
  "GitHub",
  "Agile",
  "Scrum",
];

/** Aliases map: canonical skill name → list of extra terms to match */
const ALIASES: Record<string, string[]> = {
  "Next.js": ["nextjs", "next js"],
  "NestJS": ["nestjs", "nest js"],
  "Node.js": ["nodejs", "node js"],
  "Tailwind CSS": ["tailwind"],
  "REST APIs": ["rest api", "restful", "rest"],
  "Clean Architecture": ["clean arch", "hexagonal", "ddd", "domain driven"],
  "CI/CD": ["ci/cd", "continuous integration", "continuous deployment", "github actions", "pipelines"],
  "React Query": ["tanstack query", "tanstack"],
  "PostgreSQL": ["postgres"],
  "TypeScript": ["ts"],
  "JavaScript": ["js", "es6", "es2015", "ecmascript"],
  "monorepo": ["turborepo", "nx", "mono repo"],
};

/**
 * Tecnologías que Lucio NO maneja, usadas solo para *detectar* requisitos del
 * puesto que no cubre. No se muestran como skills propias.
 */
const OTHER_TECH: Record<string, string[]> = {
  Angular: ["angular"],
  "Vue.js": ["vue", "vuejs", "vue js", "nuxt"],
  Svelte: ["svelte", "sveltekit"],
  Python: ["python", "django", "flask", "fastapi"],
  Java: ["java", "spring", "spring boot"],
  Go: ["golang", "go lang"],
  Rust: ["rust"],
  PHP: ["php", "laravel", "symfony"],
  Ruby: ["ruby", "rails", "ruby on rails"],
  "C#": ["c#", "csharp", ".net", "dotnet", "asp.net"],
  "C++": ["c++"],
  Kubernetes: ["kubernetes", "k8s"],
  AWS: ["aws", "amazon web services", "lambda", "s3", "ec2"],
  GCP: ["gcp", "google cloud"],
  Azure: ["azure"],
  Terraform: ["terraform"],
  MongoDB: ["mongodb", "mongo", "mongoose"],
  DynamoDB: ["dynamodb"],
  Kafka: ["kafka"],
  RabbitMQ: ["rabbitmq", "rabbit mq"],
  Elasticsearch: ["elasticsearch", "elastic search", "elk"],
  Redux: ["redux"],
  Sass: ["sass", "scss"],
  Jenkins: ["jenkins"],
  Swift: ["swift", "swiftui"],
  Kotlin: ["kotlin"],
  Flutter: ["flutter", "dart"],
  "React Native": ["react native"],
};

function mentioned(jdLower: string, term: string, aliases?: string[]): boolean {
  if (jdLower.includes(term.toLowerCase())) return true;
  return aliases ? aliases.some((a) => jdLower.includes(a)) : false;
}

export function matchSkills(jobDescription: string): {
  /** Skills de Lucio mencionadas en la búsqueda. */
  matched: string[];
  /** Tecnologías pedidas en la búsqueda que Lucio no maneja. */
  missing: string[];
  /** % de los requisitos detectados en la búsqueda que Lucio cubre. */
  percentage: number;
} {
  const jdLower = jobDescription.toLowerCase();

  const matched = LUCIO_SKILLS.filter((skill) =>
    mentioned(jdLower, skill, ALIASES[skill])
  );

  const missing = Object.keys(OTHER_TECH).filter((tech) =>
    mentioned(jdLower, tech, OTHER_TECH[tech])
  );

  // % sobre los requisitos efectivamente detectados (cubiertos + no cubiertos).
  const totalRequirements = matched.length + missing.length;
  const percentage =
    totalRequirements === 0
      ? 0
      : Math.round((matched.length / totalRequirements) * 100);

  return { matched, missing, percentage };
}
