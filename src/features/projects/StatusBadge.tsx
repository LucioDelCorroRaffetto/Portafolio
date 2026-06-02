import type { Locale, ProjectStatus } from "@/types";
import { i18n } from "@/lib/i18n";

export function StatusBadge({
  status,
  locale,
}: {
  status: ProjectStatus;
  locale: Locale;
}) {
  const tx = i18n[locale];
  const label = {
    live: tx.projectStatusLive,
    professional: tx.projectStatusProfessional,
    personal: tx.projectStatusPersonal,
    academic: tx.projectStatusAcademic,
  }[status];

  return (
    <span className={`status-badge status-badge-${status}`}>
      <span className="status-dot" aria-hidden />
      {label}
    </span>
  );
}
