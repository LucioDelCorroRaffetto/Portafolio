"use client";

import { useEffect, useState, useCallback } from "react";

const RADIUS = 420;
const OPACITY = 0.12;

export function CursorSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(true);

  const handleMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsPointer(mediaQuery.matches);
    const handler = () => setIsPointer(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);

    if (mediaQuery.matches) {
      window.addEventListener("mousemove", handleMove, { passive: true });
    }
    return () => {
      mediaQuery.removeEventListener("change", handler);
      window.removeEventListener("mousemove", handleMove);
    };
  }, [handleMove]);

  if (!mounted || !isPointer) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
    >
      <div
        className="absolute h-[var(--spotlight-size)] w-[var(--spotlight-size)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[var(--spotlight-opacity)]"
        style={{
          left: position.x,
          top: position.y,
          width: RADIUS * 2,
          height: RADIUS * 2,
          background: `radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0.08) 35%, transparent 70%)`,
          opacity: OPACITY,
        }}
      />
    </div>
  );
}
