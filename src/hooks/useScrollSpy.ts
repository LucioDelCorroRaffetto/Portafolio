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
  "insights",
  "contact",
];

export function useScrollSpy(): SectionId {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");

  useEffect(() => {
    // Track which sections are currently intersecting
    const intersecting = new Set<SectionId>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id as SectionId;
          if (entry.isIntersecting) {
            intersecting.add(id);
          } else {
            intersecting.delete(id);
          }
        });

        if (intersecting.size === 0) return;

        // Pick the section whose top edge is closest to (but above) the viewport center.
        // This ensures the active item tracks what the user is actually reading,
        // and avoids the "stuck on first" issue when sections are very tall.
        const viewportMid = window.innerHeight / 2;
        let best: SectionId | null = null;
        let bestDistance = Infinity;

        for (const id of SECTION_IDS) {
          if (!intersecting.has(id)) continue;
          const el = document.getElementById(id);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          // Distance from the element's top to the viewport midpoint.
          // We prefer sections whose top is at or above the midpoint (rect.top <= viewportMid).
          const distance = Math.abs(rect.top - viewportMid);
          if (best === null || distance < bestDistance) {
            bestDistance = distance;
            best = id;
          }
        }

        if (best !== null) {
          setActiveSection(best);
        }
      },
      {
        // Observe a wide band so multiple sections can be "intersecting" at once
        rootMargin: "-10% 0px -10% 0px",
        threshold: 0,
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
