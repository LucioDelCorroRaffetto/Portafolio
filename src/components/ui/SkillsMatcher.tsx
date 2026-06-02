"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { i18n } from "@/lib/i18n";
import { matchSkills } from "@/lib/skill-matcher";
import type { Locale } from "@/types";

interface SkillsMatcherProps {
  locale: Locale;
}

export function SkillsMatcher({ locale }: SkillsMatcherProps) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [result, setResult] = useState<{
    matched: string[];
    missing: string[];
    percentage: number;
  } | null>(null);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const tx = i18n[locale];

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleAnalyze = () => {
    if (!text.trim()) return;
    setResult(matchSkills(text));
  };

  const handleReset = () => {
    setText("");
    setResult(null);
  };

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) handleClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, handleClose]);

  // Focus textarea when modal opens
  useEffect(() => {
    if (open && !result) {
      setTimeout(() => textareaRef.current?.focus(), 60);
    }
  }, [open, result]);

  const percentageColor =
    result === null
      ? ""
      : result.percentage >= 70
      ? "text-emerald-500"
      : result.percentage >= 40
      ? "text-[color:var(--accent)]"
      : "text-amber-500";

  return (
    <>
      {/* Floating trigger button — bottom-left to avoid collision with Terminal (bottom-right) */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--background-soft)] px-4 py-2.5 text-xs font-medium text-foreground shadow-lg transition hover:border-[color:var(--accent)] hover:shadow-[0_0_20px_rgba(45,212,191,0.18)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
        aria-label={tx.skillsMatcherBtn}
      >
        <span className="text-[color:var(--accent)] text-sm leading-none">✦</span>
        <span className="hidden sm:inline">{tx.skillsMatcherBtn}</span>
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          style={{
            animation: "sm-fade-in 180ms ease both",
          }}
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label={tx.skillsMatcherTitle}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl border border-[color:var(--border)] bg-[color:var(--background-soft)] shadow-2xl flex flex-col overflow-hidden"
            style={{
              animation: "sm-scale-in 200ms ease both",
              maxHeight: "min(680px, 90vh)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[color:var(--border)] px-5 py-4">
              <div>
                <h2 className="text-sm font-semibold text-foreground leading-tight">
                  {tx.skillsMatcherTitle}
                </h2>
                <p className="mt-0.5 text-xs text-muted leading-snug">
                  {tx.skillsMatcherDescription}
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="ml-4 shrink-0 rounded-lg p-1.5 text-muted transition hover:bg-[color:var(--accent-soft)] hover:text-foreground focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                aria-label={tx.skillsMatcherClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {!result ? (
                /* Input state */
                <div className="flex flex-col gap-3">
                  <textarea
                    ref={textareaRef}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder={tx.skillsMatcherPlaceholder}
                    rows={9}
                    className="w-full resize-none rounded-xl border border-[color:var(--border)] bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-[color:var(--accent)] focus:outline-none focus:ring-1 focus:ring-[color:var(--accent)] transition"
                  />
                  <button
                    type="button"
                    onClick={handleAnalyze}
                    disabled={!text.trim()}
                    className="btn-primary w-full disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {tx.skillsMatcherAnalyze}
                  </button>
                </div>
              ) : (
                /* Result state */
                <div className="flex flex-col gap-5">
                  {/* Big percentage */}
                  <div className="text-center">
                    <p
                      className={`text-6xl font-bold tabular-nums leading-none ${percentageColor}`}
                    >
                      {result.percentage}%
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      {tx.skillsMatcherResult(result.percentage)}
                    </p>
                    {/* Visual bar */}
                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[color:var(--border)]">
                      <div
                        className="h-full rounded-full bg-[color:var(--accent)] transition-all duration-700"
                        style={{ width: `${result.percentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Matched skills */}
                  {result.matched.length > 0 && (
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                        {tx.skillsMatcherMatched}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {result.matched.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-500"
                          >
                            <span className="text-[10px]">✓</span>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Job requirements not covered */}
                  {result.missing.length > 0 && (
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                        {tx.skillsMatcherMissing}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {result.missing.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-500"
                          >
                            <span className="text-[10px]">○</span>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2 pt-1">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="btn-outline flex-1 text-xs"
                    >
                      {locale === "es" ? "Analizar otro" : "Analyze another"}
                    </button>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="btn-primary flex-1 text-xs"
                    >
                      {tx.skillsMatcherClose}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Keyframe animations injected once via a style tag */}
      <style>{`
        @keyframes sm-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes sm-scale-in {
          from { opacity: 0; transform: scale(0.95) translateY(8px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);   }
        }
      `}</style>
    </>
  );
}
