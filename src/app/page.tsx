"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { scrollToSection } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import type { SectionId } from "@/types";
import type { Locale } from "@/types";
import { siteConfig } from "@/config/site";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { CursorSpotlight } from "@/components/effects/CursorSpotlight";
import { InteractiveTerminal } from "@/components/layout/InteractiveTerminal";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { HeroSection } from "@/features/hero/HeroSection";
import { AboutSection } from "@/features/about/AboutSection";
import { ApproachSection } from "@/features/approach/ApproachSection";
import { ProjectsSection } from "@/features/projects/ProjectsSection";
import { ExperienceSection } from "@/features/experience/ExperienceSection";
import { ExploringSection } from "@/features/exploring/ExploringSection";
import { LearningSection } from "@/features/learning/LearningSection";
import { ContactSection } from "@/features/contact/ContactSection";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("es");
  const [projectFilterType, setProjectFilterType] = useState<string>("all");
  const [projectFilterTech, setProjectFilterTech] = useState<string>("all");
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();
  const activeSection = useScrollSpy();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-section", activeSection);
    return () => document.body.removeAttribute("data-section");
  }, [activeSection]);

  const handleScrollTo = (id: SectionId) => () => scrollToSection(id);

  return (
    <div className="relative flex h-[100dvh] bg-background text-foreground">
      <CursorSpotlight />
      <div className="relative z-10 flex w-full flex-1">
      <Sidebar
        locale={locale}
        setLocale={setLocale}
        theme={theme}
        setTheme={setTheme ?? (() => {})}
        mounted={mounted}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <div className="flex-1">
        <MobileHeader />

        <main className="scrollbar-hide h-full overflow-y-auto">
          <AnimatedSection>
            <HeroSection
              locale={locale}
              scrollToProjects={handleScrollTo("projects")}
              scrollToContact={handleScrollTo("contact")}
            />
          </AnimatedSection>
          <AnimatedSection delay={50}>
            <AboutSection locale={locale} />
          </AnimatedSection>
          <AnimatedSection delay={80}>
            <ApproachSection locale={locale} />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <ProjectsSection
              locale={locale}
              filterType={projectFilterType}
              setFilterType={setProjectFilterType}
              filterTech={projectFilterTech}
              setFilterTech={setProjectFilterTech}
            />
          </AnimatedSection>
          <AnimatedSection delay={80}>
            <ExperienceSection locale={locale} />
          </AnimatedSection>
          <AnimatedSection delay={80}>
            <ExploringSection locale={locale} />
          </AnimatedSection>
          <AnimatedSection delay={80}>
            <LearningSection locale={locale} />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <ContactSection locale={locale} />
          </AnimatedSection>

          <footer className="border-t border-[color:var(--border)]">
            <div className="container-page flex flex-col gap-2 py-4 text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} {siteConfig.name}.</p>
              <p>
                {locale === "es"
                  ? "Construido como product lab con TypeScript y Tailwind CSS."
                  : "Built as a small product lab with TypeScript and Tailwind CSS."}
              </p>
            </div>
          </footer>
        </main>
      </div>

      <InteractiveTerminal locale={locale} scrollToSection={scrollToSection} />
      </div>
    </div>
  );
}
