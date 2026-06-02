"use client";

import { useState } from "react";
import { testimonials } from "@/content/testimonials";
import type { Locale } from "@/types";
import { i18n } from "@/lib/i18n";
import { Card } from "@/components/ui/Card";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

interface TestimonialsSectionProps {
  locale: Locale;
}

const INITIAL_COUNT = 6;

export function TestimonialsSection({ locale }: TestimonialsSectionProps) {
  const tx = i18n[locale];
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? testimonials : testimonials.slice(0, INITIAL_COUNT);
  const remaining = testimonials.length - INITIAL_COUNT;

  return (
    <section id="testimonials" className="section">
      <div className="container-page">
        <EyebrowLabel>{tx.testimonialsEyebrow}</EyebrowLabel>
        <h2 className="section-heading">{tx.testimonialsHeading}</h2>
        <p className="section-description">{tx.testimonialsDescription}</p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((t) => (
            <Card key={t.name} className="flex flex-col gap-4 p-5" hover>
              {/* Quote */}
              <div className="relative flex-1">
                <span
                  className="pointer-events-none absolute -left-1 -top-3 select-none text-4xl font-bold leading-none text-[color:var(--accent)] opacity-30"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="relative pt-3 text-sm italic leading-relaxed text-muted">
                  {t.quote[locale]}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-[color:var(--border)]" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-xs font-semibold text-foreground"
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="truncate text-[11px] text-muted">
                    {t.role}
                  </p>
                  <p className="mt-0.5 truncate text-[10px] text-muted opacity-70">
                    {t.relation[locale]} · {t.date}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {!expanded && remaining > 0 && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setExpanded(true)}
              className="rounded-full border border-[color:var(--border)] px-5 py-2 text-[12px] text-muted transition-colors hover:border-[color:var(--accent)]/50 hover:text-foreground"
            >
              {locale === "es"
                ? `Ver ${remaining} recomendaciones más`
                : `Show ${remaining} more recommendations`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
