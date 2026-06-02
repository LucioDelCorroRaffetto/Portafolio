"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import type { Locale, SectionId } from "@/types";
import { i18n } from "@/lib/i18n";
import { siteConfig } from "@/config/site";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  locale: Locale;
  setLocale: (l: Locale) => void;
  theme: string | undefined;
  setTheme: (t: string) => void;
  scrollToSection: (id: SectionId) => void;
}

type Cmd = {
  id: string;
  icon: string;
  label: string;
  category: string;
  action: () => void;
};

export function CommandPalette({
  open,
  onClose,
  locale,
  setLocale,
  setTheme,
  scrollToSection,
}: CommandPaletteProps) {
  const t = i18n[locale];

  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);

  const navItems: Array<{ id: SectionId; label: string }> = useMemo(
    () => [
      { id: "hero", label: locale === "es" ? "Overview" : "Overview" },
      { id: "about", label: locale === "es" ? "Sobre mí" : "About" },
      { id: "projects", label: locale === "es" ? "Proyectos" : "Projects" },
      { id: "experience", label: locale === "es" ? "Experiencia" : "Experience" },
      { id: "contact", label: locale === "es" ? "Contacto" : "Contact" },
    ],
    [locale]
  );

  const commands: Cmd[] = useMemo(
    () => [
      ...navItems.map((item) => ({
        id: `nav-${item.id}`,
        icon: "→",
        label: item.label,
        category: locale === "es" ? "Navegar" : "Navigate",
        action: () => {
          scrollToSection(item.id);
          onClose();
        },
      })),
      {
        id: "theme-dark",
        icon: "⚙",
        label: locale === "es" ? "Modo oscuro" : "Dark mode",
        category: locale === "es" ? "Acciones" : "Actions",
        action: () => {
          setTheme("dark");
          onClose();
        },
      },
      {
        id: "theme-light",
        icon: "⚙",
        label: locale === "es" ? "Modo claro" : "Light mode",
        category: locale === "es" ? "Acciones" : "Actions",
        action: () => {
          setTheme("light");
          onClose();
        },
      },
      {
        id: "locale-es",
        icon: "⚙",
        label: "Español",
        category: locale === "es" ? "Acciones" : "Actions",
        action: () => {
          setLocale("es");
          onClose();
        },
      },
      {
        id: "locale-en",
        icon: "⚙",
        label: "English",
        category: locale === "es" ? "Acciones" : "Actions",
        action: () => {
          setLocale("en");
          onClose();
        },
      },
      {
        id: "link-github",
        icon: "↗",
        label: "GitHub",
        category: "Links",
        action: () => {
          window.open(siteConfig.github, "_blank", "noopener,noreferrer");
          onClose();
        },
      },
      {
        id: "link-linkedin",
        icon: "↗",
        label: "LinkedIn",
        category: "Links",
        action: () => {
          window.open(siteConfig.linkedin, "_blank", "noopener,noreferrer");
          onClose();
        },
      },
      {
        id: "link-email",
        icon: "↗",
        label: locale === "es" ? "Enviar email" : "Send email",
        category: "Links",
        action: () => {
          window.open(`mailto:${siteConfig.email}`, "_blank");
          onClose();
        },
      },
    ],
    [locale, navItems, scrollToSection, onClose, setTheme, setLocale]
  );

  const filtered = useMemo(
    () =>
      query.trim() === ""
        ? commands
        : commands.filter((cmd) =>
            cmd.label.toLowerCase().includes(query.toLowerCase())
          ),
    [commands, query]
  );

  // Reset state when palette opens/closes
  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIdx(0);
    }
  }, [open]);

  // Keep activeIdx in bounds when filtered list changes
  useEffect(() => {
    setActiveIdx(0);
  }, [query]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIdx((prev) => (prev + 1) % Math.max(filtered.length, 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIdx((prev) =>
          prev === 0 ? Math.max(filtered.length - 1, 0) : prev - 1
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        const cmd = filtered[activeIdx];
        if (cmd) cmd.action();
      } else if (e.key === "Escape") {
        onClose();
      }
    },
    [filtered, activeIdx, onClose]
  );

  if (!open) return null;

  // Group by category for display
  const categories = Array.from(new Set(filtered.map((c) => c.category)));

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm pt-[8vh] sm:pt-[15vh]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={locale === "es" ? "Paleta de comandos" : "Command palette"}
    >
      <div
        className="mx-4 w-full max-w-lg rounded-xl border border-[color:var(--border)] bg-[color:var(--background)] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search input */}
        <input
          autoFocus
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.cmdPaletteSearch}
          className="w-full border-b border-[color:var(--border)] bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted"
          aria-label={t.cmdPaletteSearch}
        />

        {/* Results */}
        <div className="max-h-60 overflow-y-auto sm:max-h-72">
          {filtered.length === 0 ? (
            <p className="px-4 py-6 text-center text-sm text-muted">
              {t.cmdPaletteEmpty}
            </p>
          ) : (
            categories.map((category) => {
              const items = filtered.filter((c) => c.category === category);
              return (
                <div key={category}>
                  <div className="px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
                    {category}
                  </div>
                  {items.map((cmd) => {
                    const globalIdx = filtered.indexOf(cmd);
                    const isActive = globalIdx === activeIdx;
                    return (
                      <button
                        key={cmd.id}
                        type="button"
                        onClick={cmd.action}
                        onMouseEnter={() => setActiveIdx(globalIdx)}
                        aria-label={
                          cmd.icon === "→"
                            ? t.cmdPaletteNav(cmd.label)
                            : cmd.label
                        }
                        className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors ${
                          isActive
                            ? "bg-[color:var(--background-soft)]"
                            : "hover:bg-[color:var(--background-soft)]"
                        }`}
                      >
                        <span
                          className="w-5 shrink-0 text-center text-xs text-muted"
                          aria-hidden="true"
                        >
                          {cmd.icon}
                        </span>
                        <span className="flex-1">{cmd.label}</span>
                        <span className="text-[10px] text-muted">
                          {cmd.category}
                        </span>
                      </button>
                    );
                  })}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 text-[10px] text-muted border-t border-[color:var(--border)]">
          ↑↓ navegar · Enter ejecutar · Esc cerrar
        </div>
      </div>
    </div>
  );
}
