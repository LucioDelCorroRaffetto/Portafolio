"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";

export function MobileHeader() {
  return (
    <header className="border-b border-[color:var(--border)] px-4 py-3 md:hidden">
      <div className="flex items-center gap-3">
        <div className="relative h-9 w-9 overflow-hidden rounded-full border border-[color:var(--border)] bg-[color:var(--background-soft)]">
          <Image
            src="/lucio-profile.jpg"
            alt={`${siteConfig.name} profile`}
            fill
            sizes="36px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-muted">
            {siteConfig.role}
          </p>
          <p className="text-sm font-semibold text-foreground">
            {siteConfig.name}
          </p>
        </div>
      </div>
    </header>
  );
}
