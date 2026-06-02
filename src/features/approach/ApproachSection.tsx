"use client";

import type { Locale } from "@/types";
import { Card } from "@/components/ui/Card";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { CodeSnippet } from "@/components/ui/CodeSnippet";
import { codeSnippets } from "@/content/code-snippets";
import { i18n } from "@/lib/i18n";

const APPROACH_ITEMS_ES = [
  "Diseño primero la arquitectura y los límites del dominio",
  "Trabajo con TDD cuando el problema lo requiere",
  "Prefiero componentes pequeños y reutilizables",
  "Prioridad en claridad del código y experiencia de usuario",
  "Comunicación clara con el equipo",
];

const APPROACH_ITEMS_EN = [
  "I design architecture and domain boundaries first",
  "I use TDD when the problem calls for it",
  "I prefer small, reusable components",
  "Priority on code clarity and user experience",
  "Clear communication with the team",
];

interface ApproachSectionProps {
  locale: Locale;
}

export function ApproachSection({ locale }: ApproachSectionProps) {
  const items = locale === "es" ? APPROACH_ITEMS_ES : APPROACH_ITEMS_EN;
  const tx = i18n[locale];

  return (
    <section id="approach" className="section">
      <div className="container-page">
        <EyebrowLabel>
          {locale === "es" ? "Cómo trabajo" : "How I work"}
        </EyebrowLabel>
        <h2 className="section-heading">
          {locale === "es"
            ? "Mi enfoque al desarrollar productos"
            : "My approach to building products"}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          {locale === "es"
            ? "Principios que guían cómo diseño sistemas y escribo código."
            : "Principles that guide how I design systems and write code."}
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Card key={item} className="flex gap-3 p-4" hover>
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[color:var(--accent-soft)] text-xs font-semibold text-[color:var(--accent)]"
                aria-hidden
              >
                {i + 1}
              </span>
              <p className="text-sm leading-snug text-foreground">
                {item}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-8 min-w-0 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
            {tx.snippetsTitle}
          </p>
          <div className="min-w-0 space-y-6">
            {codeSnippets.map((s) => (
              <CodeSnippet key={s.id} snippet={s} locale={locale} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
