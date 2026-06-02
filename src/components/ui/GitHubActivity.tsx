"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/types";
import { i18n } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import type { GitHubActivityItem } from "@/app/api/github/route";

interface GitHubActivityProps {
  locale: Locale;
}

function relativeTime(iso: string, locale: Locale): string {
  const diffSec = Math.round((Date.now() - new Date(iso).getTime()) / 1000);
  const rtf = new Intl.RelativeTimeFormat(locale === "es" ? "es" : "en", {
    numeric: "auto",
  });
  const MIN = 60,
    HOUR = 3600,
    DAY = 86400,
    WEEK = 604800,
    MONTH = 2629800,
    YEAR = 31557600;
  if (diffSec < MIN) return rtf.format(-diffSec, "second");
  if (diffSec < HOUR) return rtf.format(-Math.round(diffSec / MIN), "minute");
  if (diffSec < DAY) return rtf.format(-Math.round(diffSec / HOUR), "hour");
  if (diffSec < WEEK) return rtf.format(-Math.round(diffSec / DAY), "day");
  if (diffSec < MONTH) return rtf.format(-Math.round(diffSec / WEEK), "week");
  if (diffSec < YEAR) return rtf.format(-Math.round(diffSec / MONTH), "month");
  return rtf.format(-Math.round(diffSec / YEAR), "year");
}

export function GitHubActivity({ locale }: GitHubActivityProps) {
  const tx = i18n[locale];
  const [items, setItems] = useState<GitHubActivityItem[] | null>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/github")
      .then((r) => (r.ok ? r.json() : { items: [] }))
      .then((data: { items: GitHubActivityItem[] }) => {
        if (active) setItems(data.items ?? []);
      })
      .catch(() => {
        if (active) setItems([]);
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="mt-6">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-muted">
        {tx.githubActivityTitle}
      </p>

      {items === null ? (
        /* Loading skeleton */
        <ul className="space-y-3" aria-hidden>
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i} className="flex flex-col gap-1.5">
              <span className="h-3 w-32 animate-pulse rounded bg-[color:var(--border)]" />
              <span className="h-3.5 w-52 animate-pulse rounded bg-[color:var(--border)]" />
            </li>
          ))}
        </ul>
      ) : items.length === 0 ? (
        /* Fallback: link to profile instead of fake data */
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link text-sm text-[color:var(--accent)]"
        >
          {tx.githubActivityViewProfile} →
        </a>
      ) : (
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex flex-col gap-0.5">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link truncate text-xs font-medium"
                style={{ color: "var(--accent)" }}
              >
                {item.repoName}
              </a>
              <span className="text-sm leading-snug text-foreground">
                {item.message}
              </span>
              <span className="text-xs text-muted">
                {relativeTime(item.date, locale)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
