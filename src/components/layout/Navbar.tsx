"use client";

import type { SectionId } from "@/types";
import type { Locale } from "@/types";

const NAV_LINKS: { id: SectionId; label: { es: string; en: string } }[] = [
  { id: "hero",       label: { es: "Overview",    en: "Overview"   } },
  { id: "about",      label: { es: "Sobre mí",    en: "About"      } },
  { id: "approach",   label: { es: "Cómo trabajo", en: "How I work" } },
  { id: "projects",   label: { es: "Proyectos",   en: "Projects"   } },
  { id: "experience", label: { es: "Experiencia", en: "Experience" } },
  { id: "exploring",  label: { es: "Explorando",  en: "Exploring"  } },
  { id: "learning",   label: { es: "Formación",   en: "Learning"   } },
  { id: "contact",    label: { es: "Contacto",    en: "Contact"    } },
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
          {item.label[locale]}
        </button>
      ))}
    </nav>
  );
}
