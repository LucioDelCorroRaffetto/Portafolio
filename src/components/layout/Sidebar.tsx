"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import type { SectionId } from "@/types";
import type { Locale } from "@/types";

const NAV_ITEMS: { id: SectionId; labelEs: string; labelEn: string }[] = [
  { id: "hero", labelEs: "Overview", labelEn: "Overview" },
  { id: "about", labelEs: "Sobre mí", labelEn: "About" },
  { id: "approach", labelEs: "Cómo trabajo", labelEn: "How I work" },
  { id: "projects", labelEs: "Proyectos", labelEn: "Projects" },
  { id: "experience", labelEs: "Experiencia", labelEn: "Experience" },
  { id: "exploring", labelEs: "Explorando", labelEn: "Exploring" },
  { id: "learning", labelEs: "Formación", labelEn: "Learning" },
  { id: "contact", labelEs: "Contacto", labelEn: "Contact" },
];

interface SidebarProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: string | undefined;
  setTheme: (theme: string) => void;
  mounted: boolean;
  activeSection: SectionId;
  scrollToSection: (id: SectionId) => void;
}

export function Sidebar({
  locale,
  setLocale,
  theme,
  setTheme,
  mounted,
  activeSection,
  scrollToSection,
}: SidebarProps) {
  return (
    <aside className="hidden w-64 border-r border-[color:var(--border)]/60 bg-background/95 px-5 py-6 md:flex md:flex-col md:justify-between">
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[color:var(--border)] bg-[color:var(--background-soft)]">
              <Image
                src="/lucio-profile.jpg"
                alt={`${siteConfig.name} profile`}
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-muted">
                {siteConfig.role}
              </p>
              <p className="text-sm font-semibold text-foreground">
                {siteConfig.name}
              </p>
            </div>
          </div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-muted">
            TypeScript · React · Node.js
          </p>
          <p className="text-[11px] text-muted">
            TypeScript · React · Node.js · PostgreSQL
          </p>
        </div>

        <nav className="space-y-1 text-[11px] text-muted">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left transition ${
                activeSection === item.id
                  ? "bg-[color:var(--background-soft)] text-foreground"
                  : "hover:bg-[color:var(--background-soft)] hover:text-foreground"
              }`}
            >
              <span>{locale === "es" ? item.labelEs : item.labelEn}</span>
              {activeSection === item.id && (
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="space-y-2 text-[11px] text-muted">
        <p>{siteConfig.location} · {siteConfig.locationNote}</p>
        <div className="flex items-center justify-between">
          <p>{siteConfig.englishLevel}</p>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center gap-1 rounded-full border border-[color:var(--border)] px-2 py-1 text-[10px] text-muted"
            aria-label={locale === "es" ? "Cambiar tema claro/oscuro" : "Toggle light/dark theme"}
          >
            <span>{!mounted ? "Dark" : theme === "light" ? "Light" : "Dark"}</span>
          </button>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setLocale("es")}
            className={`rounded-full px-2 py-0.5 text-[10px] ${
              locale === "es"
                ? "bg-[color:var(--accent-soft)] text-foreground"
                : "border border-[color:var(--border)] text-muted"
            }`}
            aria-label={locale === "es" ? "Idioma: Español (activo)" : "Language: switch to Spanish"}
          >
            ES
          </button>
          <button
            onClick={() => setLocale("en")}
            className={`rounded-full px-2 py-0.5 text-[10px] ${
              locale === "en"
                ? "bg-[color:var(--accent-soft)] text-foreground"
                : "border border-[color:var(--border)] text-muted"
            }`}
            aria-label={locale === "es" ? "Idioma: cambiar a Inglés" : "Language: English (active)"}
          >
            EN
          </button>
        </div>
      </div>
    </aside>
  );
}
