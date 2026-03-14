"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";
import type { SectionId } from "@/types";
import { siteConfig } from "@/config/site";

interface InteractiveTerminalProps {
  locale: Locale;
  scrollToSection: (id: SectionId) => void;
}

type Line = { type: "input" | "output"; text: string };

const PROMPT = "~ $ ";

function runCommand(
  cmd: string,
  locale: Locale
): { output: string; scroll?: SectionId } {
  const c = cmd.trim().toLowerCase();
  const args = cmd.trim().split(/\s+/);
  const cmdName = args[0]?.toLowerCase() ?? "";

  if (c === "help") {
    return {
      output:
        locale === "es"
          ? `Comandos disponibles:
  whoami     Quién soy
  ls         Listar secciones
  cat <sec>  Ver about, projects, experience, contact
  projects   Ir a Proyectos
  contact   Ir a Contacto
  clear     Limpiar pantalla
  help      Esta ayuda`
          : `Available commands:
  whoami     Who I am
  ls         List sections
  cat <sec>  View about, projects, experience, contact
  projects   Go to Projects
  contact   Go to Contact
  clear     Clear screen
  help      This help`,
    };
  }

  if (c === "whoami") {
    return {
      output:
        locale === "es"
          ? `${siteConfig.name}
${siteConfig.role} · ${siteConfig.location}
${siteConfig.locationNote}

"Construyo productos cuidando código, UX y arquitectura."
Stack: TypeScript, React, Node.js, PostgreSQL, TDD.`
          : `${siteConfig.name}
${siteConfig.role} · ${siteConfig.location}
${siteConfig.locationNote}

"I build products caring about code, UX and architecture."
Stack: TypeScript, React, Node.js, PostgreSQL, TDD.`,
    };
  }

  if (c === "ls") {
    return {
      output:
        locale === "es"
          ? "about  approach  experience  exploring  learning  projects  contact"
          : "about  approach  experience  exploring  learning  projects  contact",
    };
  }

  if (cmdName === "cat" && args[1]) {
    const sec = args[1].toLowerCase();
    const snippets: Record<string, { es: string; en: string }> = {
      about: {
        es: "Sobre mí: presentación profesional y grid de stack (Frontend, Backend, DB, DevOps).",
        en: "About: professional intro and stack grid (Frontend, Backend, DB, DevOps).",
      },
      projects: {
        es: "Proyectos destacados + listado con filtros. Casos de diseño y arquitectura.",
        en: "Featured projects + list with filters. Design and architecture cases.",
      },
      experience: {
        es: "Timeline: empresa, rol, período, impacto técnico.",
        en: "Timeline: company, role, period, technical impact.",
      },
      contact: {
        es: "Disponibilidad y datos de contacto (email, LinkedIn, GitHub, teléfono).",
        en: "Availability and contact (email, LinkedIn, GitHub, phone).",
      },
      approach: {
        es: "Cómo trabajo: arquitectura, TDD, componentes, UX, comunicación.",
        en: "How I work: architecture, TDD, components, UX, communication.",
      },
      exploring: {
        es: "Qué estoy explorando: temas en investigación.",
        en: "What I'm exploring: topics under research.",
      },
      learning: {
        es: "Formación: institución, programa, período.",
        en: "Learning: institution, program, period.",
      },
    };
    const block = snippets[sec] ?? snippets.about;
    return { output: locale === "es" ? block.es : block.en };
  }

  if (c === "projects") {
    return { output: locale === "es" ? "→ Proyectos" : "→ Projects", scroll: "projects" };
  }

  if (c === "contact") {
    return { output: locale === "es" ? "→ Contacto" : "→ Contact", scroll: "contact" };
  }

  if (c === "clear") {
    return { output: "\0" };
  }

  if (!c) return { output: "" };

  return {
    output:
      locale === "es"
        ? `Comando no encontrado: ${args[0]}. Escribe 'help' para ver comandos.`
        : `Command not found: ${args[0]}. Type 'help' for commands.`,
  };
}

export function InteractiveTerminal({ locale, scrollToSection }: InteractiveTerminalProps) {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      setLines([
        {
          type: "output",
          text:
            locale === "es"
              ? "Terminal del portfolio. Escribe 'help' para empezar."
              : "Portfolio terminal. Type 'help' to get started.",
        },
      ]);
    }
  }, [open, locale]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    outputRef.current?.scrollTo(0, outputRef.current.scrollHeight);
  }, [lines]);

  const run = (raw: string) => {
    const result = runCommand(raw, locale);
    if (result.output === "\0") {
      setLines([]);
      setInput("");
      return;
    }
    setLines((prev) => [
      ...prev,
      { type: "input", text: PROMPT + raw },
      ...(result.output ? [{ type: "output" as const, text: result.output }] : []),
    ]);
    setHistory((h) => [...h.slice(-49), raw]);
    setHistoryIndex(-1);
    if (result.scroll) {
      scrollToSection(result.scroll);
      setTimeout(() => setOpen(false), 400);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const raw = input.trim();
    setInput("");
    if (raw) run(raw);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const next = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(next);
      setInput(history[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const next = historyIndex + 1;
      if (next >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(next);
        setInput(history[next] ?? "");
      }
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--background-soft)] px-4 py-2.5 text-xs font-medium text-foreground shadow-lg transition hover:border-[color:var(--accent)] hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
        aria-label={locale === "es" ? "Abrir terminal interactivo" : "Open interactive terminal"}
      >
        <span className="font-mono text-[color:var(--accent)]">&gt;_</span>
        <span className="hidden sm:inline">
          {locale === "es" ? "Terminal" : "Terminal"}
        </span>
      </button>

      {open && (
        <div
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center p-4",
            isLight ? "bg-black/40" : "bg-black/60"
          )}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-label={locale === "es" ? "Terminal interactivo" : "Interactive terminal"}
        >
          <div
            className={cn(
              "flex h-[min(24rem,80vh)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border shadow-2xl",
              isLight
                ? "border-slate-200 bg-[#f6f8fa]"
                : "border-[color:var(--border)] bg-[#0d1117]"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={cn(
                "flex items-center justify-between border-b px-4 py-2",
                isLight
                  ? "border-slate-200 bg-[#eaeef2] text-slate-600"
                  : "border-[color:var(--border)] bg-[#161b22] text-muted"
              )}
            >
              <span className="flex items-center gap-2 font-mono text-[11px]">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                <span className="h-2 w-2 rounded-full bg-red-500/80" />
                portfolio — bash
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className={isLight ? "hover:text-slate-900" : "hover:text-foreground"}
                aria-label={locale === "es" ? "Cerrar" : "Close"}
              >
                ✕
              </button>
            </div>
            <div
              ref={outputRef}
              className="flex-1 overflow-y-auto px-4 py-3 font-mono text-[13px] leading-relaxed"
            >
              {lines.map((line, i) => (
                <div key={i} className="mb-1 whitespace-pre-wrap">
                  {line.type === "input" ? (
                    <span className={isLight ? "text-slate-500" : "text-muted"}>
                      {line.text}
                    </span>
                  ) : (
                    <span className={isLight ? "text-emerald-700" : "text-[#7ee787]"}>
                      {line.text}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <form
              onSubmit={handleSubmit}
              className={cn(
                "flex border-t px-4 py-2",
                isLight
                  ? "border-slate-200 bg-[#eaeef2]"
                  : "border-[color:var(--border)] bg-[#161b22]"
              )}
            >
              <span className="mr-2 font-mono text-[color:var(--accent)]">{PROMPT}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className={cn(
                  "flex-1 bg-transparent font-mono text-[13px] outline-none",
                  isLight
                    ? "text-slate-900 placeholder:text-slate-500"
                    : "text-foreground placeholder:text-muted"
                )}
                placeholder={locale === "es" ? "Escribe un comando..." : "Type a command..."}
                autoComplete="off"
                spellCheck={false}
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
