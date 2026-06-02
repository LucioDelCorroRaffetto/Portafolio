"use client";

import type { Locale } from "@/types";
import { i18n } from "@/lib/i18n";
import { Chip } from "@/components/ui/Chip";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

const EXPLORING_ITEMS = {
  es: [
    "Arquitectura limpia aplicada a frontend",
    "Testing de integración en APIs",
    "Sistemas de diseño escalables",
    "Experiencias de usuario en aplicaciones complejas",
  ],
  en: [
    "Clean architecture applied to frontend",
    "Integration testing in APIs",
    "Scalable design systems",
    "User experience in complex applications",
  ],
};

interface ExploringSectionProps {
  locale: Locale;
}

export function ExploringSection({ locale }: ExploringSectionProps) {
  const tx = i18n[locale];
  const items = EXPLORING_ITEMS[locale];

  return (
    <section id="exploring" className="section">
      <div className="container-page">
        <EyebrowLabel>{tx.exploringEyebrow}</EyebrowLabel>
        <h2 className="section-heading">{tx.exploringHeading}</h2>
        <p className="section-description">{tx.exploringDescription}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {items.map((item) => (
            <li key={item}>
              <Chip>{item}</Chip>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
