"use client";

import { useRef, useEffect, useState } from "react";
import { experience } from "@/content/experience";
import type { Locale } from "@/types";
import { i18n } from "@/lib/i18n";
import { Card } from "@/components/ui/Card";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

interface ExperienceSectionProps {
  locale: Locale;
}

export function ExperienceSection({ locale }: ExperienceSectionProps) {
  const tx = i18n[locale];
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineVisible, setLineVisible] = useState(false);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setLineVisible(true);
        });
      },
      { rootMargin: "-10% 0px", threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section">
      <div className="container-page">
        <EyebrowLabel>{tx.experienceEyebrow}</EyebrowLabel>
        <h2 className="section-heading">{tx.experienceHeading}</h2>
        <p className="section-description">{tx.experienceDescription}</p>

        <div className="relative mt-10 pl-4 sm:pl-6">
          <div
            ref={lineRef}
            className={`timeline-line ${lineVisible ? "animate" : ""}`}
            aria-hidden
          />
          <div className="space-y-8">
            {experience.map((item) => (
              <div key={item.id} className="relative flex gap-4 sm:gap-6">
                <div className="relative z-10 flex items-start pt-1">
                  <span className="timeline-node" aria-hidden />
                </div>
                <div className="min-w-0 flex-1 pb-2">
                  <Card className="p-5" hover>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-semibold text-foreground">
                          {item.role[locale]}
                        </h3>
                        <p className="text-xs text-muted">{item.company}</p>
                      </div>
                      <p className="text-[11px] text-muted">
                        {item.period[locale]}
                      </p>
                    </div>
                    <p className="mt-3 text-sm text-muted">
                      {item.description[locale]}
                    </p>
                    <ul className="mt-3 space-y-1.5 text-xs text-muted">
                      {item.highlights[locale].map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full bg-muted-soft" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
