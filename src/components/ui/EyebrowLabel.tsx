import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowLabelProps {
  children: ReactNode;
  className?: string;
}

/** Pequeño título en mayúsculas + texto muted. Patrón reutilizable para secciones. */
export function EyebrowLabel({ children, className }: EyebrowLabelProps) {
  return <p className={cn("section-title", className)}>{children}</p>;
}
