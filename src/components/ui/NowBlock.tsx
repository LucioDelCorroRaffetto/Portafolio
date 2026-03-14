"use client";

import { siteConfig } from "@/config/site";
import type { Locale } from "@/types";
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
      aria-label={locale === "es" ? "Ahora" : "Now"}
    >
      <p className="font-semibold uppercase tracking-wider text-foreground">
        {locale === "es" ? "Ahora" : "Now"}
      </p>
      <ul className="mt-2 space-y-1.5 text-muted">
        <li>
          <span className="text-muted-soft">
            {locale === "es" ? "Construyendo" : "Building"}:{" "}
          </span>
          {now.building}
        </li>
        <li>
          <span className="text-muted-soft">
            {locale === "es" ? "Aprendiendo" : "Learning"}:{" "}
          </span>
          {now.learning}
        </li>
      </ul>
    </div>
  );
}
