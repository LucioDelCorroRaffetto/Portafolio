"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { i18n } from "@/lib/i18n";
import type { SectionId } from "@/types";
import type { Locale } from "@/types";

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

interface MobileHeaderProps {
  locale: Locale;
  setLocale: (l: Locale) => void;
  theme: string | undefined;
  setTheme: (t: string) => void;
  mounted: boolean;
  activeSection: SectionId;
  scrollToSection: (id: SectionId) => void;
}

export function MobileHeader({
  locale,
  setLocale,
  theme,
  setTheme,
  mounted,
  activeSection,
  scrollToSection,
}: MobileHeaderProps) {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const tx = i18n[locale];

  // Close on Escape and restore focus
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Focus trap inside drawer
  useEffect(() => {
    if (!open || !drawerRef.current) return;

    const focusableSelectors =
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(
      drawerRef.current.querySelectorAll<HTMLElement>(focusableSelectors)
    );

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    // Move focus into the drawer
    first?.focus();

    const trapTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (focusable.length === 0) {
        e.preventDefault();
        return;
      }
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", trapTab);
    return () => document.removeEventListener("keydown", trapTab);
  }, [open]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (id: SectionId) => {
    scrollToSection(id);
    setOpen(false);
  };

  const handleNavKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    const items = drawerRef.current?.querySelectorAll<HTMLButtonElement>(
      "[data-nav-item]"
    );
    if (!items || items.length === 0) return;
    const arr = Array.from(items);
    const idx = arr.indexOf(document.activeElement as HTMLButtonElement);

    if (e.key === "ArrowDown") {
      e.preventDefault();
      arr[(idx + 1) % arr.length]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      arr[(idx - 1 + arr.length) % arr.length]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      arr[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      arr[arr.length - 1]?.focus();
    }
  };

  return (
    <>
      {/* Header bar — only visible on mobile */}
      <header className="border-b border-[color:var(--border)] px-4 py-3 md:hidden">
        <div className="flex items-center justify-between">
          {/* Profile */}
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-[color:var(--border)] bg-[color:var(--background-soft)]">
              <Image
                src="/lucio-profile.jpg"
                alt={`${siteConfig.name} profile`}
                fill
                sizes="36px"
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

          {/* Hamburger trigger */}
          <button
            ref={triggerRef}
            onClick={() => setOpen(true)}
            aria-label="Abrir menú de navegación"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[color:var(--border)] text-muted transition hover:bg-[color:var(--background-soft)] hover:text-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer slide-in from left */}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-[color:var(--border)] bg-[color:var(--background)] px-5 py-6 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer header row */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-[color:var(--border)] bg-[color:var(--background-soft)]">
              <Image
                src="/lucio-profile.jpg"
                alt={`${siteConfig.name} profile`}
                fill
                sizes="36px"
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

          {/* Close button */}
          <button
            onClick={() => {
              setOpen(false);
              triggerRef.current?.focus();
            }}
            aria-label="Cerrar menú"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-[color:var(--border)] text-muted transition hover:bg-[color:var(--background-soft)] hover:text-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav
          aria-label="Secciones del portfolio"
          className="flex-1 space-y-1 text-[11px] text-muted"
          onKeyDown={handleNavKeyDown}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              data-nav-item
              onClick={() => handleNavClick(item.id)}
              className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left transition ${
                activeSection === item.id
                  ? "bg-[color:var(--background-soft)] text-foreground"
                  : "hover:bg-[color:var(--background-soft)] hover:text-foreground"
              }`}
            >
              <span>{item.label[locale]}</span>
              {activeSection === item.id && (
                <span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                  aria-hidden="true"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Locale + Theme controls */}
        <div className="mt-6 space-y-3 border-t border-[color:var(--border)] pt-4 text-[11px] text-muted">
          {/* Locale switcher */}
          <div className="flex items-center gap-2">
            <span className="mr-1">Idioma:</span>
            <button
              onClick={() => setLocale("es")}
              className={`rounded-full px-2.5 py-1 text-[10px] transition ${
                locale === "es"
                  ? "bg-[color:var(--accent-soft)] text-foreground"
                  : "border border-[color:var(--border)] text-muted hover:text-foreground"
              }`}
              aria-label={tx.sidebarEsAriaActive}
              aria-pressed={locale === "es"}
            >
              ES
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`rounded-full px-2.5 py-1 text-[10px] transition ${
                locale === "en"
                  ? "bg-[color:var(--accent-soft)] text-foreground"
                  : "border border-[color:var(--border)] text-muted hover:text-foreground"
              }`}
              aria-label={tx.sidebarEnAriaSwitch}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
          </div>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center gap-2 rounded-full border border-[color:var(--border)] px-3 py-1.5 text-[10px] text-muted transition hover:text-foreground"
            aria-label={tx.sidebarThemeToggle}
          >
            {mounted ? (
              theme === "light" ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                  <span>Light</span>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                  <span>Dark</span>
                </>
              )
            ) : (
              <span>Dark</span>
            )}
          </button>

          <p className="text-[10px]">
            {siteConfig.location} · {siteConfig.locationNote}
          </p>
        </div>
      </div>
    </>
  );
}
