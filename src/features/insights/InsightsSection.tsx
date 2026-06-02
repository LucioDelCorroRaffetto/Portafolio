"use client";

import { useState } from "react";
import type { Locale } from "@/types";
import { insights } from "@/content/insights";
import type { InsightPost } from "@/content/insights";
import { i18n } from "@/lib/i18n";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { InsightModal } from "./InsightModal";

interface InsightsSectionProps {
  locale: Locale;
}

export function InsightsSection({ locale }: InsightsSectionProps) {
  const [openPost, setOpenPost] = useState<InsightPost | null>(null);
  const t = i18n[locale];

  return (
    <section id="insights" className="section">
      <div className="container-page">
        <EyebrowLabel>{t.insightsEyebrow}</EyebrowLabel>
        <h2 className="section-heading">{t.insightsHeading}</h2>
        <p className="section-description">{t.insightsDescription}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((post) => {
            const title = locale === "es" ? post.title.es : post.title.en;
            const summary = locale === "es" ? post.summary.es : post.summary.en;
            const formattedDate = new Date(post.date).toLocaleDateString(
              locale === "es" ? "es-AR" : "en-US",
              { year: "numeric", month: "short", day: "numeric" }
            );

            return (
              <Card key={post.slug} className="flex flex-col gap-3 p-4" hover>
                <p className="text-[11px] text-muted">{formattedDate}</p>
                <p className="text-sm font-medium text-foreground leading-snug">
                  {title}
                </p>
                <p className="text-xs text-muted leading-relaxed flex-1">
                  {summary}
                </p>
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag) => (
                      <Chip key={tag} className="text-[10px]">
                        {tag}
                      </Chip>
                    ))}
                  </div>
                )}
                <button
                  onClick={() => setOpenPost(post)}
                  className="mt-1 w-fit text-xs text-[color:var(--accent)] transition hover:opacity-70"
                >
                  {t.insightsReadMore}
                </button>
              </Card>
            );
          })}
        </div>
      </div>

      {openPost !== null && (
        <InsightModal
          post={openPost}
          locale={locale}
          onClose={() => setOpenPost(null)}
        />
      )}
    </section>
  );
}
