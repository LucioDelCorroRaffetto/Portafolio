"use client";

import { skillCategories } from "@/content/skills";
import type { Locale } from "@/types";
import { i18n } from "@/lib/i18n";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { SkillGrid } from "@/components/ui/SkillGrid";
import { GitHubActivity } from "@/components/ui/GitHubActivity";
import { PerformanceWidget } from "@/components/ui/PerformanceWidget";

interface AboutSectionProps {
  locale: Locale;
}

export function AboutSection({ locale }: AboutSectionProps) {
  const tx = i18n[locale];
  return (
    <section id="about" className="section">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-start">
          <div>
            <EyebrowLabel>{tx.aboutEyebrow}</EyebrowLabel>
            <h2 className="section-heading">{tx.aboutHeading}</h2>
            <p className="section-description">{tx.aboutPara1}</p>
            <p className="mt-4 text-sm text-muted">{tx.aboutPara2}</p>
          </div>

          <div>
            <EyebrowLabel>{tx.aboutStackLabel}</EyebrowLabel>
            <SkillGrid
              categories={skillCategories}
              locale={locale}
              className="mt-4"
            />
            <GitHubActivity locale={locale} />
            <PerformanceWidget locale={locale} />
          </div>
        </div>
      </div>
    </section>
  );
}
