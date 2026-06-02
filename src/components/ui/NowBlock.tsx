"use client";

import { siteConfig } from "@/config/site";
import type { Locale } from "@/types";
import { i18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface NowBlockProps {
  locale: Locale;
  className?: string;
  variant?: "sidebar" | "inline";
}

export function NowBlock({
  locale,
  className,
  variant = "sidebar",
}: NowBlockProps) {
  const tx = i18n[locale];
  const now = siteConfig.now[locale];
  const isSidebar = variant === "sidebar";

  return (
    <div
      className={cn(
        "rounded-lg border border-[color:var(--border)] surface-soft p-3",
        isSidebar && "text-[11px]",
        className
      )}
      role="region"
      aria-label={tx.nowTitle}
    >
      <p className="font-semibold uppercase tracking-wider text-foreground">
        {tx.nowTitle}
      </p>
      <ul className="mt-2 space-y-1.5 text-muted">
        <li>
          <span className="text-muted-soft">{tx.nowBuilding}: </span>
          {now.building}
        </li>
        <li>
          <span className="text-muted-soft">{tx.nowLearning}: </span>
          {now.learning}
        </li>
      </ul>
    </div>
  );
}
