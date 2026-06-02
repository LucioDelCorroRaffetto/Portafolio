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

export function matchSkills(jobDescription: string): {
  matched: string[];
  percentage: number;
} {
  const jdLower = jobDescription.toLowerCase();

  const matched = LUCIO_SKILLS.filter((skill) => {
    const skillLower = skill.toLowerCase();
    if (jdLower.includes(skillLower)) return true;

    const extras = ALIASES[skill];
    if (extras) {
      return extras.some((alias) => jdLower.includes(alias));
    }
    return false;
  });

  const percentage = Math.round((matched.length / LUCIO_SKILLS.length) * 100);

  return { matched, percentage };
}
