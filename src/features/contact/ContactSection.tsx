"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/types";
import { Chip } from "@/components/ui/Chip";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

interface ContactSectionProps {
  locale: Locale;
}

export function ContactSection({ locale }: ContactSectionProps) {
  return (
    <section id="contact" className="section">
      <div className="container-page">
        <EyebrowLabel>
          {locale === "es" ? "Contacto" : "Contact"}
        </EyebrowLabel>
        <h2 className="section-heading">
          {locale === "es" ? "Hablemos" : "Let's talk"}
        </h2>
        <p className="section-description">
          {locale === "es"
            ? "Busco nuevas experiencias, formar parte de proyectos y ser de ayuda. Si te interesa lo que viste y crees que puedo sumar a tu equipo o proyecto, estoy abierto a escucharte."
            : "I'm looking for new experiences, to be part of projects and to be helpful. If you like what you see and think I can add value to your team or project, I'd be happy to talk."}
        </p>

        <p className="mt-4 text-sm font-medium text-foreground">
          {locale === "es" ? "Disponible para:" : "Available for:"}
        </p>
        <ul className="mt-1 flex flex-wrap gap-2 text-sm text-muted">
          <li>
            <Chip>
              {locale === "es" ? "Posiciones full-stack" : "Full-stack positions"}
            </Chip>
          </li>
          <li>
            <Chip>
              {locale === "es" ? "Proyectos freelance" : "Freelance projects"}
            </Chip>
          </li>
          <li>
            <Chip>
              {locale === "es"
                ? "Colaboración en productos early-stage"
                : "Early-stage product collaboration"}
            </Chip>
          </li>
        </ul>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-3 text-sm text-muted">
            <p>
              {locale === "es"
                ? "Prefiero conversaciones honestas sobre el problema que quieren resolver, el contexto del producto y cómo podemos trabajar juntos para llegar a una buena solución técnica y de experiencia."
                : "I prefer honest conversations about the problem you're trying to solve, the product context and how we can work together towards a good technical and UX solution."}
            </p>
            <p className="text-xs text-muted">
              {locale === "es"
                ? "Email, LinkedIn o un mensaje directo funcionan perfecto como primer contacto."
                : "Email, LinkedIn or a direct message work great as a first contact."}
            </p>
          </div>
          <div className="space-y-3 text-sm text-foreground">
            <p>
              <span className="text-muted">
                {locale === "es" ? "Email" : "Email"}
              </span>
              <br />
              <a
                href={`mailto:${siteConfig.email}`}
                className="link text-foreground underline-offset-4"
              >
                {siteConfig.email}
              </a>
            </p>
            <p>
              <span className="text-muted">LinkedIn</span>
              <br />
              <Link
                href={siteConfig.linkedin}
                target="_blank"
                className="link text-foreground underline-offset-4"
              >
                /in/luciodelcorroraffetto
              </Link>
            </p>
            <p>
              <span className="text-muted">GitHub</span>
              <br />
              <Link
                href={siteConfig.github}
                target="_blank"
                className="link text-foreground underline-offset-4"
              >
                github.com/LucioDelCorroRaffetto
              </Link>
            </p>
            <p>
              <span className="text-muted">
                {locale === "es" ? "Teléfono" : "Phone"}
              </span>
              <br />
              <span className="text-foreground">{siteConfig.phone}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
