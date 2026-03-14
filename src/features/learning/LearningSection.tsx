"use client";

import { learning } from "@/content/learning";
import type { Locale } from "@/types";
import { Card } from "@/components/ui/Card";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

interface LearningSectionProps {
  locale: Locale;
}

export function LearningSection({ locale }: LearningSectionProps) {
  return (
    <section id="learning" className="section">
      <div className="container-page">
        <EyebrowLabel>
          {locale === "es" ? "Aprendizaje & formación" : "Learning & education"}
        </EyebrowLabel>
        <h2 className="section-heading">
          {locale === "es"
            ? "Cómo fui construyendo mi base"
            : "How I built my foundation"}
        </h2>
        <p className="section-description">
          {locale === "es"
            ? "Formación académica y programas intensivos que me dieron una base sólida en desarrollo full stack y ciencias de la computación."
            : "Academic background and intensive programs that gave me a solid base in full stack development and computer science."}
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {learning.map((item) => (
            <Card key={item.id} className="p-4" hover>
              <p className="text-xs font-semibold text-foreground">
                {item.institution}
              </p>
              <p className="mt-1 text-xs text-muted">
                {locale === "es" ? item.program.es : item.program.en}
              </p>
              <p className="mt-1 text-[11px] text-muted">
                {locale === "es" ? item.period.es : item.period.en}
              </p>
              <p className="mt-3 text-xs text-muted">
                {locale === "es" ? item.description.es : item.description.en}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
