"use client";

import { CountUp } from "@/components/ui/CountUp";
import { siteConfig } from "@/config/site";
import { projects } from "@/content/projects";
import { skillCategories } from "@/content/skills";
import type { Locale } from "@/types";
import { cn } from "@/lib/utils";

const totalSkills = skillCategories.reduce(
  (acc, c) => acc + c.items.es.length,
  0
);

interface StatsBlockProps {
  locale: Locale;
  className?: string;
}

export function StatsBlock({ locale, className }: StatsBlockProps) {
  const stats = [
    {
      value: siteConfig.yearsOfExperience,
      labelEs: "Años en producto",
      labelEn: "Years in product",
      suffix: "+",
    },
    {
      value: projects.length,
      labelEs: "Proyectos",
      labelEn: "Projects",
    },
    {
      value: totalSkills,
      labelEs: "Tecnologías y prácticas",
      labelEn: "Techs & practices",
    },
  ];

  return (
    <div
      className={cn(
        "flex flex-wrap justify-center gap-8 sm:gap-12",
        className
      )}
      role="group"
      aria-label={locale === "es" ? "Estadísticas" : "Stats"}
    >
      {stats.map((stat) => (
        <div key={stat.labelEs} className="text-center">
          <p className="text-2xl font-semibold text-foreground sm:text-3xl">
            <CountUp end={stat.value} suffix={stat.suffix ?? ""} />
          </p>
          <p className="mt-0.5 text-[11px] uppercase tracking-wider text-muted">
            {locale === "es" ? stat.labelEs : stat.labelEn}
          </p>
        </div>
      ))}
    </div>
  );
}
