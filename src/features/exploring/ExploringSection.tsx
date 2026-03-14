"use client";

import type { Locale } from "@/types";
import { Chip } from "@/components/ui/Chip";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

const EXPLORING_ES = [
  "Arquitectura limpia aplicada a frontend",
  "Testing de integración en APIs",
  "Sistemas de diseño escalables",
  "Experiencias de usuario en aplicaciones complejas",
];

const EXPLORING_EN = [
  "Clean architecture applied to frontend",
  "Integration testing in APIs",
  "Scalable design systems",
  "User experience in complex applications",
];

interface ExploringSectionProps {
  locale: Locale;
}

export function ExploringSection({ locale }: ExploringSectionProps) {
  const items = locale === "es" ? EXPLORING_ES : EXPLORING_EN;

  return (
    <section id="exploring" className="section">
      <div className="container-page">
        <EyebrowLabel>
          {locale === "es"
            ? "En qué estoy invirtiendo ahora"
            : "Where I'm investing time now"}
        </EyebrowLabel>
        <h2 className="section-heading">
          {locale === "es"
            ? "Áreas en las que profundizo para llevar mejor impacto al producto"
            : "Areas I'm deepening to bring better impact to the product"}
        </h2>
        <p className="section-description">
          {locale === "es"
            ? "Temas técnicos y de práctica que estoy priorizando; complementan el stack que ya uso en el día a día."
            : "Technical and practice topics I'm prioritizing; they complement the stack I already use day to day."}
        </p>
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
