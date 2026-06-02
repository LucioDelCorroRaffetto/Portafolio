"use client";

import type { Locale } from "@/types";
import { i18n } from "@/lib/i18n";

interface ActivityItem {
  repoName: string;
  message: string;
  relativeDate: { es: string; en: string };
}

// Public GitHub API only exposes public repo events.
// Work repos (ForIT/ZLE Store, AMIA) are private, so we use curated static data.
const STATIC_ACTIVITY: ActivityItem[] = [
  {
    repoName: "LucioDelCorroRaffetto/lucio-portfolio",
    message: "feat: sidebar redesign, CV download, command palette",
    relativeDate: { es: "hace 1 día", en: "1 day ago" },
  },
  {
    repoName: "LucioDelCorroRaffetto/contact-ship",
    message: "feat: Redis cache layer + HuggingFace model evaluation",
    relativeDate: { es: "hace 3 días", en: "3 days ago" },
  },
  {
    repoName: "LucioDelCorroRaffetto/el-impostor",
    message: "fix: offline word list fallback + category routing",
    relativeDate: { es: "hace 1 semana", en: "1 week ago" },
  },
  {
    repoName: "LucioDelCorroRaffetto/lucio-portfolio",
    message: "feat: TechRadar, StatsBlock, interactive terminal",
    relativeDate: { es: "hace 2 semanas", en: "2 weeks ago" },
  },
  {
    repoName: "LucioDelCorroRaffetto/contact-ship",
    message: "refactor: clean architecture use cases + Vitest coverage",
    relativeDate: { es: "hace 3 semanas", en: "3 weeks ago" },
  },
];

interface GitHubActivityProps {
  locale: Locale;
}

export function GitHubActivity({ locale }: GitHubActivityProps) {
  const tx = i18n[locale];

  return (
    <div className="mt-6">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-muted">
        {tx.githubActivityTitle}
      </p>
      <ul className="space-y-3">
        {STATIC_ACTIVITY.map((item, i) => (
          <li key={i} className="flex flex-col gap-0.5">
            <span
              className="truncate text-xs font-medium"
              style={{ color: "var(--accent)" }}
            >
              {item.repoName}
            </span>
            <span className="text-sm leading-snug text-foreground">
              {item.message}
            </span>
            <span className="text-xs text-muted">
              {item.relativeDate[locale]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
