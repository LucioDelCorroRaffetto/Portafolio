"use client";

import { useState } from "react";
import type { Locale } from "@/types";
import type { CodeSnippet as CodeSnippetType } from "@/content/code-snippets";
import { i18n } from "@/lib/i18n";

interface CodeSnippetProps {
  snippet: CodeSnippetType;
  locale: Locale;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function tokenize(code: string): string {
  const escaped = escapeHtml(code);

  // Process line by line to handle comments correctly
  const lines = escaped.split("\n");
  const processed = lines.map((line) => {
    // Comments: // ... (whole rest of line)
    const commentMatch = line.match(/^(.*?)(\/\/.*)$/);
    if (commentMatch) {
      const before = tokenizeLine(commentMatch[1]);
      const comment = `<span class="text-slate-500 italic">${commentMatch[2]}</span>`;
      return before + comment;
    }
    return tokenizeLine(line);
  });

  return processed.join("\n");
}

function tokenizeLine(line: string): string {
  // We'll process the line left-to-right with a simple state machine approach
  // by replacing patterns in order with placeholders, then substituting back.
  // Order: strings → keywords → decorators → test globals

  // Use a segment-based approach to avoid overlapping replacements
  type Segment = { text: string; raw: boolean };
  const segments: Segment[] = [{ text: line, raw: false }];

  // Apply a replacement pass only on raw (unprocessed) segments
  function applyRegex(
    segs: Segment[],
    regex: RegExp,
    wrap: (match: string) => string
  ): Segment[] {
    const result: Segment[] = [];
    for (const seg of segs) {
      if (seg.raw) {
        result.push(seg);
        continue;
      }
      let last = 0;
      let m: RegExpExecArray | null;
      regex.lastIndex = 0;
      const r = new RegExp(regex.source, regex.flags);
      while ((m = r.exec(seg.text)) !== null) {
        if (m.index > last) {
          result.push({ text: seg.text.slice(last, m.index), raw: false });
        }
        result.push({ text: wrap(m[0]), raw: true });
        last = m.index + m[0].length;
      }
      if (last < seg.text.length) {
        result.push({ text: seg.text.slice(last), raw: false });
      }
    }
    return result;
  }

  // 1. Strings: "..." and '...' (already HTML-escaped, so quotes are literal " and ')
  let segs = applyRegex(
    segments,
    /"[^"]*"|'[^']*'/g,
    (m) => `<span class="text-amber-400">${m}</span>`
  );

  // 2. Template literal backtick strings — escaped as ` in HTML? No, backticks aren't escaped.
  segs = applyRegex(
    segs,
    /`[^`]*`/g,
    (m) => `<span class="text-amber-400">${m}</span>`
  );

  // 3. TypeScript keywords
  const keywords = [
    "const", "let", "var", "function", "async", "await", "return",
    "import", "export", "from", "class", "interface", "type", "extends",
    "implements", "new", "this", "if", "else", "try", "catch", "throw",
    "private", "public", "void", "string", "number", "boolean", "Promise",
    "true", "false", "null", "undefined", "readonly",
  ];
  const kwRegex = new RegExp(`\\b(${keywords.join("|")})\\b`, "g");
  segs = applyRegex(
    segs,
    kwRegex,
    (m) => `<span class="text-violet-400 font-medium">${m}</span>`
  );

  // 4. Decorators @word
  segs = applyRegex(
    segs,
    /@\w+/g,
    (m) => `<span class="text-pink-400">${m}</span>`
  );

  // 5. Test globals: describe, it, expect, vi
  segs = applyRegex(
    segs,
    /\b(describe|it|expect|vi)\b/g,
    (m) => `<span class="text-emerald-400">${m}</span>`
  );

  return segs.map((s) => s.text).join("");
}

export function CodeSnippet({ snippet, locale }: CodeSnippetProps) {
  const tx = i18n[locale];
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(snippet.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const highlighted = tokenize(snippet.code);

  return (
    <div className="space-y-2">
      {/* Title & description above the IDE window */}
      <p className="text-sm font-medium text-foreground">
        {snippet.title[locale]}
      </p>
      <p className="text-xs text-muted leading-relaxed">
        {snippet.description[locale]}
      </p>

      {/* IDE window */}
      <div
        className="max-w-full overflow-hidden rounded-lg border border-[color:var(--border)]"
        style={{ background: "var(--background-soft)" }}
      >
        {/* Header */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[color:var(--border)] bg-[color:var(--background-soft)] px-3 py-2">
          {/* Dot buttons */}
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-500" aria-hidden />
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-yellow-400" aria-hidden />
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-500" aria-hidden />

          {/* Filename */}
          <span className="min-w-0 flex-1 truncate text-center text-[11px] text-muted font-mono">
            {snippet.filename}
          </span>

          {/* Language badge + Copy button */}
          <div className="flex shrink-0 items-center gap-2">
            <span className="rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
              {snippet.language}
            </span>
            <button
              onClick={handleCopy}
              className="rounded px-2 py-0.5 text-[11px] font-medium transition-colors border border-[color:var(--border)] text-muted hover:text-foreground hover:border-[color:var(--accent)]"
              aria-label={copied ? tx.snippetsCopied : tx.snippetsCopy}
            >
              {copied ? "✓" : tx.snippetsCopy}
            </button>
          </div>
        </div>

        {/* Code body */}
        <pre className="overflow-x-auto p-4 text-[12px] leading-relaxed font-mono bg-[color:var(--background-soft)]">
          <code
            dangerouslySetInnerHTML={{ __html: highlighted }}
          />
        </pre>
      </div>
    </div>
  );
}
