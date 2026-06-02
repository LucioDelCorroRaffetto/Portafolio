"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { InsightPost } from "@/content/insights";
import type { Locale } from "@/types";
import { i18n } from "@/lib/i18n";
import { Chip } from "@/components/ui/Chip";

interface InsightModalProps {
  post: InsightPost;
  locale: Locale;
  onClose: () => void;
}

export function InsightModal({ post, locale, onClose }: InsightModalProps) {
  const t = i18n[locale];

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const title = locale === "es" ? post.title.es : post.title.en;
  const body = locale === "es" ? post.body.es : post.body.en;
  const paragraphs = body.split("\n\n");

  const formattedDate = new Date(post.date).toLocaleDateString(
    locale === "es" ? "es-AR" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-sm"
      style={{ animation: "sm-fade-in 180ms ease both" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--background-soft)] shadow-2xl"
        style={{ animation: "sm-scale-in 200ms ease both", maxHeight: "min(720px, 90vh)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[color:var(--border)] px-6 py-5">
          <div className="min-w-0">
            <h2 className="text-base font-semibold leading-snug text-foreground">
              {title}
            </h2>
            <p className="mt-1 text-[11px] text-muted-soft">
              {formattedDate} · {t.insightsMinRead(post.readingTime)}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label={t.insightsClose}
            className="ml-2 shrink-0 rounded-lg p-1.5 text-muted transition hover:bg-[color:var(--accent-soft)] hover:text-foreground focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          <div className="space-y-3.5">
            {paragraphs.map((para, idx) => (
              <p key={idx} className="text-sm leading-relaxed text-muted">
                {para}
              </p>
            ))}
          </div>

          {post.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-[color:var(--border)]/60 pt-4">
              {post.tags.map((tag) => (
                <Chip key={tag} className="text-[11px]">
                  {tag}
                </Chip>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
