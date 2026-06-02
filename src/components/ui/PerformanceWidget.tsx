"use client";

import type { Locale } from "@/types";
import { i18n } from "@/lib/i18n";
import { ScoreRing } from "@/components/ui/ScoreRing";

interface PerformanceWidgetProps {
  locale: Locale;
}

const SCORES = {
  performance: 98,
  accessibility: 95,
  bestPractices: 100,
  seo: 100,
} as const;

const LABELS: Record<keyof typeof SCORES, { es: string; en: string }> = {
  performance:    { es: "Rendimiento",   en: "Performance"  },
  accessibility:  { es: "Accesibilidad", en: "Accessibility" },
  bestPractices:  { es: "Buenas prácticas", en: "Best Practices" },
  seo:            { es: "SEO",           en: "SEO"          },
};

/* Lighthouse icon — simplified lighthouse silhouette as inline SVG */
function LighthouseIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
      style={{ color: "var(--accent)" }}
    >
      {/* Tower body */}
      <path
        d="M10 20h4v1a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M9 20l1.5-10h3L15 20H9z"
        fill="currentColor"
        opacity="0.55"
      />
      {/* Light room */}
      <rect x="8.5" y="8" width="7" height="3" rx="0.75" fill="currentColor" opacity="0.8" />
      {/* Light beams */}
      <line x1="12" y1="7" x2="12" y2="4"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
      <line x1="12" y1="7" x2="7"  y2="5"  stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1="12" y1="7" x2="17" y2="5"  stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function PerformanceWidget({ locale }: PerformanceWidgetProps) {
  const tx = i18n[locale];

  return (
    <div className="flex flex-col items-center gap-3 sm:items-end">
      {/* Header */}
      <div className="flex items-center gap-1.5">
        <LighthouseIcon />
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
          {tx.perfWidgetTitle}
        </span>
      </div>

      {/* Rings row */}
      <div className="flex items-end gap-4 sm:gap-5">
        {(Object.keys(SCORES) as (keyof typeof SCORES)[]).map((key) => (
          <ScoreRing
            key={key}
            score={SCORES[key]}
            label={LABELS[key][locale]}
            size={60}
          />
        ))}
      </div>

      {/* Note */}
      <p className="text-[9px] text-muted opacity-60">
        {tx.perfWidgetNote}
      </p>
    </div>
  );
}
