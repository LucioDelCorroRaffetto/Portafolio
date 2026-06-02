"use client";

import { CountUp } from "@/components/ui/CountUp";
import { siteConfig } from "@/config/site";
import { projects } from "@/content/projects";
import { skillCategories } from "@/content/skills";
import type { Locale } from "@/types";
import { i18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const totalSkills = skillCategories.reduce(
  (acc, c) => acc + c.items.es.length,
  0
);

const STATS = [
  {
    value: siteConfig.yearsOfExperience,
    label: { es: "Años en producto", en: "Years in product" },
    suffix: "+",
  },
  {
    value: projects.length,
    label: { es: "Proyectos", en: "Projects" },
  },
  {
    value: totalSkills,
    label: { es: "Tecnologías y prácticas", en: "Techs & practices" },
  },
] as const;

interface StatsBlockProps {
  locale: Locale;
  className?: string;
}

export function StatsBlock({ locale, className }: StatsBlockProps) {
  const tx = i18n[locale];
  return (
    <div
      className={cn("flex flex-wrap justify-center gap-8 sm:gap-12", className)}
      role="group"
      aria-label={tx.statsAria}
    >
      {STATS.map((stat) => (
        <div key={stat.label.es} className="text-center">
          <p className="text-2xl font-semibold text-foreground sm:text-3xl">
            <CountUp end={stat.value} suffix={"suffix" in stat ? stat.suffix : ""} />
          </p>
          <p className="mt-0.5 text-[11px] uppercase tracking-wider text-muted">
            {stat.label[locale]}
          </p>
        </div>
      ))}
    </div>
  );
}
