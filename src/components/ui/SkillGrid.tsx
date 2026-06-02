import type { Locale } from "@/types";
import type { SkillCategory } from "@/content/skills";
import { Chip } from "@/components/ui/Chip";

interface SkillGridProps {
  categories: SkillCategory[];
  locale: Locale;
  className?: string;
}

const CATEGORY_ICONS: Record<string, string> = {
  frontend:  "◈",
  backend:   "⬡",
  databases: "◉",
  devops:    "⟳",
  "ai-tools":"◆",
  practices: "◎",
};

export function SkillGrid({ categories, locale, className }: SkillGridProps) {
  return (
    <div className={`grid gap-3 sm:grid-cols-2 ${className ?? ""}`}>
      {categories.map((cat) => {
        const accent = "text-[color:var(--accent)]";
        const icon = CATEGORY_ICONS[cat.id] ?? "·";
        const items = cat.items[locale];
        const label = cat.label[locale];

        return (
          <div
            key={cat.id}
            className="rounded-xl border border-[color:var(--border)] p-4 surface-soft"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className={`text-xs font-bold ${accent.split(" ")[0]}`} aria-hidden>
                {icon}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                {label}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {items.map((item) => (
                <Chip key={item} className="text-[10px]">
                  {item}
                </Chip>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
