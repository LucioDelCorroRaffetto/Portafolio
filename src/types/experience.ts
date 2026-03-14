export interface ExperienceItem {
  id: string;
  company: string;
  role: { es: string; en: string };
  period: { es: string; en: string };
  description: { es: string; en: string };
  highlights: { es: string[]; en: string[] };
}
