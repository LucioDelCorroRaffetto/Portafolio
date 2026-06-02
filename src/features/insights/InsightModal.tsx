"use client";

import { useEffect } from "react";
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4 pt-16 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative w-full max-w-2xl rounded-xl border border-[color:var(--border)] bg-[color:var(--background)] p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-base font-semibold text-foreground leading-snug">
              {title}
            </h2>
            <p className="mt-1 text-[11px] text-muted">
              {formattedDate} · {t.insightsMinRead(post.readingTime)}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label={t.insightsClose}
            className="shrink-0 rounded-md p-1 text-muted transition hover:bg-[color:var(--background-soft)] hover:text-foreground"
          >
            <span aria-hidden="true" className="text-lg leading-none">×</span>
          </button>
        </div>

        {/* Body */}
        <div className="space-y-3">
          {paragraphs.map((para, idx) => (
            <p key={idx} className="text-sm text-muted leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <Chip key={tag} className="text-[11px]">
                {tag}
              </Chip>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
