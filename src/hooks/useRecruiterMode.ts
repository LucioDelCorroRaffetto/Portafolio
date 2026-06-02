"use client";

import { useEffect, useState, useCallback } from "react";

const PARAM = "recruiter";

function readParam(): boolean {
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).get(PARAM) === "1";
}

export function useRecruiterMode(): {
  isRecruiterMode: boolean;
  toggle: () => void;
} {
  const [isRecruiterMode, setIsRecruiterMode] = useState<boolean>(false);

  // Sync from URL on mount (and handle browser back/forward)
  useEffect(() => {
    setIsRecruiterMode(readParam());

    const onPopState = () => setIsRecruiterMode(readParam());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const toggle = useCallback(() => {
    const next = !isRecruiterMode;
    const url = new URL(window.location.href);
    if (next) {
      url.searchParams.set(PARAM, "1");
    } else {
      url.searchParams.delete(PARAM);
    }
    window.history.pushState({}, "", url.toString());
    setIsRecruiterMode(next);
  }, [isRecruiterMode]);

  return { isRecruiterMode, toggle };
}
