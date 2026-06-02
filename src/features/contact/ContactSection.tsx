"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/types";
import { i18n } from "@/lib/i18n";
import { Chip } from "@/components/ui/Chip";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

interface ContactSectionProps {
  locale: Locale;
}

export function ContactSection({ locale }: ContactSectionProps) {
  const tx = i18n[locale];
  return (
    <section id="contact" className="section">
      <div className="container-page">
        <EyebrowLabel>{tx.contactEyebrow}</EyebrowLabel>
        <h2 className="section-heading">{tx.contactHeading}</h2>
        <p className="section-description">{tx.contactDescription}</p>

        <p className="mt-4 text-sm font-medium text-foreground">
          {tx.contactAvailableFor}
        </p>
        <ul className="mt-1 flex flex-wrap gap-2 text-sm text-muted">
          <li><Chip>{tx.contactChipFullstack}</Chip></li>
          <li><Chip>{tx.contactChipFreelance}</Chip></li>
          <li><Chip>{tx.contactChipEarlyStage}</Chip></li>
        </ul>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-3 text-sm text-muted">
            <p>{tx.contactConversations}</p>
            <p className="text-xs text-muted">{tx.contactFirstContact}</p>
          </div>
          <div className="space-y-3 text-sm text-foreground">
            <p>
              <span className="text-muted">{tx.contactEmailLabel}</span>
              <br />
              <a
                href={`mailto:${siteConfig.email}`}
                className="link break-all text-foreground underline-offset-4"
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
                className="link break-all text-foreground underline-offset-4"
              >
                github.com/LucioDelCorroRaffetto
              </Link>
            </p>
            <p>
              <span className="text-muted">{tx.contactPhoneLabel}</span>
              <br />
              <span className="text-foreground">{siteConfig.phone}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
