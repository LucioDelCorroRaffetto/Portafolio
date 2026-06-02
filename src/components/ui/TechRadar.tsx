"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";
import type { SkillCategory } from "@/content/skills";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";

interface TechRadarProps {
  categories: SkillCategory[];
  locale: Locale;
  className?: string;
}

const RADAR_VIEW = { es: "Ver", en: "View" };

const RADIUS = 100;
const CENTER = 120;

export function TechRadar({ categories, locale, className }: TechRadarProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = categories.find((c) => c.id === activeId);
  const items = active ? active.items[locale] : [];

  return (
    <div className={cn("relative", className)}>
      <div
        className="relative mx-auto h-[240px] w-[240px]"
        style={{ maxWidth: "100%" }}
      >
        <div
          className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color:var(--border)] opacity-60"
          aria-hidden
        />
        <div
          className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color:var(--border)] opacity-40"
          aria-hidden
        />
        <div
          className="absolute left-1/2 top-1/2 h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color:var(--accent)] opacity-30"
          aria-hidden
        />

        {categories.map((cat, i) => {
          const angle = (i * 360) / categories.length - 90;
          const rad = (angle * Math.PI) / 180;
          const x = CENTER + RADIUS * Math.cos(rad);
          const y = CENTER + RADIUS * Math.sin(rad);
          const isActive = activeId === cat.id;
          const label = cat.label[locale];
          return (
            <button
              key={cat.id}
              type="button"
              className={cn(
                "absolute flex h-9 w-9 items-center justify-center rounded-full border-2 text-[10px] font-semibold transition-all duration-200",
                "border-[color:var(--border)] bg-[color:var(--background-soft)] text-foreground",
                "hover:border-[color:var(--accent)] hover:scale-110",
                isActive &&
                  "border-[color:var(--accent)] bg-[color:var(--accent-soft)] ring-2 ring-[color:var(--accent)]"
              )}
              style={{ left: x - 18, top: y - 18 }}
              onClick={() => setActiveId(isActive ? null : cat.id)}
              aria-expanded={isActive}
              aria-label={`${RADAR_VIEW[locale]} ${label}`}
            >
              {label.slice(0, 2)}
            </button>
          );
        })}
      </div>

      {active && (
        <div
          className="mt-4"
          role="region"
          aria-label={active.label[locale]}
        >
          <Card className="flex min-h-[7.5rem] flex-col p-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
              {active.label[locale]}
            </h3>
            <ul className="skill-tags mt-3 flex flex-1 flex-wrap content-start gap-2 text-[11px]">
              {items.map((item) => (
                <li key={item}>
                  <Chip className="chip-skill">{item}</Chip>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      )}
    </div>
  );
}
