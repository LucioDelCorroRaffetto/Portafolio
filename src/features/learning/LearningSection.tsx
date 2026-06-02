"use client";

import { learning } from "@/content/learning";
import type { Locale } from "@/types";
import { i18n } from "@/lib/i18n";
import { Card } from "@/components/ui/Card";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

interface LearningSectionProps {
  locale: Locale;
}

export function LearningSection({ locale }: LearningSectionProps) {
  const tx = i18n[locale];
  return (
    <section id="learning" className="section">
      <div className="container-page">
        <EyebrowLabel>{tx.learningEyebrow}</EyebrowLabel>
        <h2 className="section-heading">{tx.learningHeading}</h2>
        <p className="section-description">{tx.learningDescription}</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {learning.map((item) => (
            <Card key={item.id} className="p-4" hover>
              <p className="text-xs font-semibold text-foreground">
                {item.institution}
              </p>
              <p className="mt-1 text-xs text-muted">{item.program[locale]}</p>
              <p className="mt-1 text-[11px] text-muted">{item.period[locale]}</p>
              <p className="mt-3 text-xs text-muted">{item.description[locale]}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
