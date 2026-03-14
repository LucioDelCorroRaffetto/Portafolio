"use client";

import { skillCategories } from "@/content/skills";
import type { Locale } from "@/types";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { TechRadar } from "@/components/ui/TechRadar";

interface AboutSectionProps {
  locale: Locale;
}

export function AboutSection({ locale }: AboutSectionProps) {
  return (
    <section id="about" className="section">
      <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1.4fr)]">
        <div>
          <EyebrowLabel>
            {locale === "es" ? "Sobre mí" : "About me"}
          </EyebrowLabel>
          <h2 className="section-heading">
            {locale === "es"
              ? "Full stack con mentalidad de producto."
              : "Full stack with a product mindset."}
          </h2>
          <p className="section-description">
            {locale === "es"
              ? "Siempre fui curioso y me atraen los desafíos lógicos. Me gusta pensar soluciones prácticas y construir productos que realmente le sirvan a las personas. Trabajo con TypeScript, React, Node.js y bases de datos relacionales, aplicando buenas prácticas, TDD y diseño centrado en el usuario."
              : "I've always been curious and attracted to logical challenges. I enjoy designing practical solutions and building products that truly help people. I work with TypeScript, React, Node.js and relational databases, applying best practices, TDD and user‑centered design."}
          </p>
          <p className="mt-4 text-sm text-muted">
            {locale === "es"
              ? "Valoro la comunicación clara, el trabajo en equipo y la mejora constante. Busco crecer como desarrollador full stack en equipos que cuiden la calidad del código, el diseño de experiencias y el impacto real de los productos."
              : "I value clear communication, teamwork and continuous improvement. I'm looking to grow as a full stack developer in teams that care about code quality, user experience and real product impact."}
          </p>
        </div>

        <div>
          <EyebrowLabel>
            {locale === "es" ? "Stack & prácticas" : "Stack & practices"}
          </EyebrowLabel>
          <TechRadar
            categories={skillCategories}
            locale={locale}
            className="mt-4"
          />
        </div>
      </div>
    </section>
  );
}
