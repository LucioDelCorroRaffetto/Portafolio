"use client";

import type { Locale } from "@/types";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { StatsBlock } from "@/components/ui/StatsBlock";

interface HeroSectionProps {
  locale: Locale;
  scrollToProjects: () => void;
  scrollToContact: () => void;
}

export function HeroSection({
  locale,
  scrollToProjects,
  scrollToContact,
}: HeroSectionProps) {
  return (
    <section id="hero" className="section">
      <div className="container-page grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)] lg:items-start">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
            {locale === "es"
              ? "Developer Ownership · Product Mindset"
              : "Developer Ownership · Product Mindset"}
          </p>
          <h1 className="hero-title text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {locale === "es" ? (
              <>
                Construyo productos cuidando{" "}
                <span className="highlight">código, UX y arquitectura.</span>
              </>
            ) : (
              <>
                I build products caring about{" "}
                <span className="highlight">code, UX and architecture.</span>
              </>
            )}
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            {locale === "es"
              ? "Full Stack Developer con foco en TypeScript, React, Node.js y bases de datos relacionales. Me muevo cómodo entre frontend, backend y diseño de experiencias, aplicando TDD, arquitectura limpia y una mirada de producto."
              : "Full Stack Developer focused on TypeScript, React, Node.js and relational databases. I move comfortably between frontend, backend and UX design, applying TDD, clean architecture and a strong product mindset."}
          </p>

          <div className="rounded-lg border border-[color:var(--border)] surface-soft p-3 text-xs text-muted">
            <p className="font-medium text-foreground">
              {locale === "es"
                ? "Me interesa construir productos que realmente se usen."
                : "I care about building products that people actually use."}
            </p>
            <p className="mt-1.5">
              {locale === "es"
                ? "No solo escribir código, sino entender: el problema del usuario, el flujo de la experiencia y la mantenibilidad del sistema."
                : "Not just writing code—understanding the user problem, the experience flow, and system maintainability."}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              onClick={scrollToProjects}
              variant="primary"
              className="group px-5 py-2.5 text-xs uppercase tracking-[0.2em]"
              aria-label={locale === "es" ? "Ir a la sección Proyectos" : "Go to Projects section"}
            >
              {locale === "es" ? "Explorar proyectos" : "Explore projects"}
              <span className="ml-2 inline-block transition-transform group-hover:translate-y-0.5" aria-hidden>↓</span>
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              aria-label={locale === "es" ? "Ir a la sección Contacto" : "Go to Contact section"}
            >
              {locale === "es" ? "Contactar" : "Contact"}
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-muted">
            <Chip>TypeScript · React · Node.js</Chip>
            <Chip>Node.js · PostgreSQL</Chip>
            <Chip>TDD · Clean Architecture · UX/UI</Chip>
          </div>

          <StatsBlock locale={locale} className="mt-8 pt-6 border-t border-[color:var(--border)]" />
        </div>

        <aside>
          <Card className="space-y-3 p-4 text-sm" hover>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-soft">
              {locale === "es" ? "Actividad reciente" : "Recent activity"}
            </p>
            <ul className="space-y-2 text-[11px] text-muted">
              {[
                {
                  check: "✔",
                  title: "AMIA · Recruiting Platform",
                  desc: "Monorepo · TDD · Clean Architecture · multi-tenant.",
                  tag: "Fullstack",
                  tagClass: "bg-emerald-500/10 text-emerald-300",
                },
                {
                  check: "✔",
                  title: "ContactShip · Leads + IA",
                  desc: "NestJS · Redis · Bull · Hugging Face · testing 80%+.",
                  tag: "Backend",
                  tagClass: "bg-sky-500/10 text-sky-300",
                },
                {
                  check: "✔",
                  title: "El Impostor · PWA Game",
                  desc: "React · Vite · Tailwind · Framer Motion · offline ready.",
                  tag: "Frontend",
                  tagClass: "bg-violet-500/10 text-violet-300",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start justify-between gap-2 rounded-md surface-soft p-2"
                >
                  <span
                    className={`mt-0.5 shrink-0 ${item.check === "✔" ? "text-emerald-400" : "text-amber-400"}`}
                    aria-hidden
                  >
                    {item.check}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="text-muted">{item.desc}</p>
                  </div>
                  <span
                    className={`mt-1 shrink-0 rounded-full px-2 py-0.5 text-[10px] ${item.tagClass}`}
                  >
                    {item.tag}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-muted">
              {locale === "es"
                ? "Este portfolio funciona como mi pequeño product lab: los proyectos se cuentan como casos de diseño y arquitectura."
                : "This portfolio works as my small product lab: projects are told as design and architecture cases."}
            </p>
          </Card>
        </aside>
      </div>
    </section>
  );
}
