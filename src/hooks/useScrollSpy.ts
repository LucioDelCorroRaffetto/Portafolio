"use client";

import { useEffect, useState } from "react";
import type { SectionId } from "@/types";

const SECTION_IDS: SectionId[] = [
  "hero",
  "about",
  "approach",
  "projects",
  "experience",
  "exploring",
  "learning",
  "contact",
];

export function useScrollSpy(): SectionId {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0.1 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
