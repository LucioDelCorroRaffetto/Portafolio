"use client";

import type { SectionId } from "@/types";
import type { Locale } from "@/types";

const NAV_LINKS: { id: SectionId; labelEs: string; labelEn: string }[] = [
  { id: "hero", labelEs: "Overview", labelEn: "Overview" },
  { id: "about", labelEs: "Sobre mí", labelEn: "About" },
  { id: "approach", labelEs: "Cómo trabajo", labelEn: "How I work" },
  { id: "projects", labelEs: "Proyectos", labelEn: "Projects" },
  { id: "experience", labelEs: "Experiencia", labelEn: "Experience" },
  { id: "exploring", labelEs: "Explorando", labelEn: "Exploring" },
  { id: "learning", labelEs: "Formación", labelEn: "Learning" },
  { id: "contact", labelEs: "Contacto", labelEn: "Contact" },
];

interface NavbarProps {
  locale: Locale;
  scrollToSection: (id: SectionId) => void;
}

export function Navbar({ locale, scrollToSection }: NavbarProps) {
  return (
    <nav
      className="navbar-float mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-foreground sm:gap-6"
      aria-label="Main"
    >
      {NAV_LINKS.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="link text-muted hover:text-foreground"
        >
          {locale === "es" ? item.labelEs : item.labelEn}
        </button>
      ))}
    </nav>
  );
}
