"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import type { SectionId } from "@/types";
import type { Locale } from "@/types";
import { i18n } from "@/lib/i18n";

const NAV_ITEMS: { id: SectionId; label: { es: string; en: string } }[] = [
  { id: "hero",       label: { es: "Overview",     en: "Overview"   } },
  { id: "about",      label: { es: "Sobre mí",     en: "About"      } },
  { id: "approach",   label: { es: "Cómo trabajo", en: "How I work" } },
  { id: "projects",   label: { es: "Proyectos",    en: "Projects"   } },
  { id: "experience", label: { es: "Experiencia",  en: "Experience" } },
  { id: "exploring",  label: { es: "Explorando",   en: "Exploring"  } },
  { id: "learning",      label: { es: "Formación",    en: "Learning"     } },
  { id: "testimonials", label: { es: "Testimonios",  en: "Testimonials" } },
  { id: "insights",     label: { es: "Insights",     en: "Insights"     } },
  { id: "contact",      label: { es: "Contacto",     en: "Contact"      } },
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
  const tx = i18n[locale];

  return (
    <aside className="hidden w-56 flex-shrink-0 border-r border-[color:var(--border)]/60 bg-background/95 md:flex md:flex-col">
      {/* ── Scrollable body ── */}
      <div className="scrollbar-hide flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-5">

        {/* ── 1. Profile block ── */}
        <div className="flex flex-col items-center gap-3 pb-1 text-center">
          {/* Avatar */}
          <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-[color:var(--border)] bg-[color:var(--background-soft)] shadow-sm">
            <Image
              src="/lucio-profile.jpg"
              alt={`${siteConfig.name} profile`}
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>

          {/* Name + role */}
          <div className="space-y-0.5">
            <p className="text-[13px] font-semibold leading-tight text-foreground">
              {siteConfig.name}
            </p>
            <p className="text-[11px] text-muted">
              {siteConfig.role}
            </p>
          </div>

          {/* Availability badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-500">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            {tx.sidebarAvailable}
          </span>
        </div>

        {/* ── 2. Social links ── */}
        <div className="flex items-center justify-center gap-3">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-7 w-7 items-center justify-center rounded-md border border-[color:var(--border)] text-muted transition-colors hover:border-[color:var(--accent)]/60 hover:text-foreground"
          >
            {/* GitHub SVG mark */}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
            </svg>
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-7 w-7 items-center justify-center rounded-md border border-[color:var(--border)] text-muted transition-colors hover:border-[color:var(--accent)]/60 hover:text-foreground"
          >
            {/* LinkedIn SVG mark */}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        {/* ── 3. Download CV button ── */}
        <a
          href="/CV-LucioDelCorroRaffetto-2026.pdf"
          download
          className="flex w-full items-center justify-center gap-1.5 rounded-md border border-[color:var(--border)] bg-transparent px-3 py-1.5 text-[11px] font-medium text-muted transition-colors hover:border-[color:var(--accent)]/60 hover:bg-[color:var(--background-soft)] hover:text-foreground"
        >
          <span aria-hidden="true">&#x2193;</span>
          {tx.sidebarDownloadCV}
        </a>

        {/* ── 4. Navigation ── */}
        <nav aria-label="Sections" className="space-y-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={[
                  "group relative flex w-full items-center gap-2 rounded-r-md py-1.5 pl-3 pr-2 text-left text-[12px] transition-all duration-150",
                  isActive
                    ? "border-l-2 border-[color:var(--accent)] bg-[color:var(--background-soft)] font-medium text-foreground"
                    : "border-l-2 border-transparent text-muted hover:border-[color:var(--border)] hover:bg-[color:var(--background-soft)] hover:text-foreground",
                ].join(" ")}
              >
                {/* Active dot indicator — left side, inline with label */}
                <span
                  className={[
                    "h-1.5 w-1.5 flex-shrink-0 rounded-full transition-all duration-150",
                    isActive
                      ? "bg-[color:var(--accent)] opacity-100 scale-100"
                      : "bg-transparent opacity-0 scale-75",
                  ].join(" ")}
                  aria-hidden="true"
                />
                <span>{item.label[locale]}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* ── 5. Footer ── */}
      <div className="border-t border-[color:var(--border)]/60 px-4 py-3 space-y-2">
        {/* Language + Theme row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setLocale("es")}
              className={`rounded-full px-2 py-0.5 text-[10px] transition-colors ${
                locale === "es"
                  ? "bg-[color:var(--accent-soft)] text-foreground"
                  : "border border-[color:var(--border)] text-muted hover:text-foreground"
              }`}
              aria-label={tx.sidebarEsAriaActive}
            >
              ES
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`rounded-full px-2 py-0.5 text-[10px] transition-colors ${
                locale === "en"
                  ? "bg-[color:var(--accent-soft)] text-foreground"
                  : "border border-[color:var(--border)] text-muted hover:text-foreground"
              }`}
              aria-label={tx.sidebarEnAriaSwitch}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center gap-1 rounded-full border border-[color:var(--border)] px-2 py-1 text-[10px] text-muted transition-colors hover:text-foreground"
            aria-label={tx.sidebarThemeToggle}
          >
            {!mounted ? (
              <span>&#9790;</span>
            ) : theme === "light" ? (
              <span>&#9728;</span>
            ) : (
              <span>&#9790;</span>
            )}
          </button>
        </div>

        {/* Location + English level */}
        <div className="space-y-0.5">
          <p className="text-[10px] text-muted/70">{tx.sidebarLocation}</p>
          <p className="text-[10px] text-muted/70">{siteConfig.englishLevel}</p>
        </div>
      </div>
    </aside>
  );
}
