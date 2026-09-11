import type { ProgramEntry } from "./program";

export const PROGRAM_THEMES = [
  {
    id: "justice",
    en: "Justice, Rights & Community Safety",
    fr: "Justice, droits et sécurité communautaire",
    color: "#762541",
  },
  {
    id: "health",
    en: "Health, Wellness & Community Care",
    fr: "Santé, bien-être et soutien communautaire",
    color: "#416A63",
  },
  {
    id: "education",
    en: "Education, Leadership & Representation",
    fr: "Éducation, leadership et représentation",
    color: "#805338",
  },
  {
    id: "economy",
    en: "Economic Power, Work & Housing",
    fr: "Pouvoir économique, travail et logement",
    color: "#705B24",
  },
  {
    id: "technology",
    en: "Technology, Media & Future Skills",
    fr: "Technologie, médias et compétences futures",
    color: "#465875",
  },
  {
    id: "arts",
    en: "Arts, Culture & Narrative",
    fr: "Arts, culture et récits",
    color: "#8C3C57",
  },
  {
    id: "policy",
    en: "Policy, Governance & Collective Action",
    fr: "Politiques, gouvernance et action collective",
    color: "#645074",
  },
] as const;
export type ProgramTheme = (typeof PROGRAM_THEMES)[number]["id"];

/** One primary theme per substantive session. Titles stay in the schedules.
 * Ceremonies, receptions, rehearsals and operational blocks are intentionally absent.
 * Removed sessions are never reintroduced by this discovery mapping.
 */
export const SESSION_THEMES: Readonly<Record<string, ProgramTheme>> = {
  "day1:session-1": "education",
  "day1:session-2": "technology",
  "day1:session-3": "economy",
  "day1:session-4": "health",
  "day1:session-5": "arts",
  "day1:plenary-afternoon": "policy",
  "day1:session-7": "arts",
  "day1:session-8": "justice",
  "day1:session-9": "health",
  "day1:session-10": "economy",
  "day1:session-11": "arts",
  "day1:session-12": "technology",
  "day2:opening-plenary": "policy",
  "day2:d2-am-1": "health",
  "day2:d2-am-2": "arts",
  "day2:d2-am-3": "economy",
  "day2:d2-am-4": "justice",
  "day2:d2-am-5": "education",
  "day2:d2-am-6": "economy",
  "day2:d2-am-7": "technology",
  "day2:plenary-afternoon": "justice",
  "day2:d2-pm-1": "education",
  "day2:d2-pm-2": "education",
  "day2:d2-pm-3": "health",
  "day2:d2-pm-4": "policy",
  "day2:d2-pm-5": "justice",
  "day2:d2-pm-6": "arts",
  "day2:d2-pm-7": "economy",
};

export function getThemeSessionTitle(entry: ProgramEntry, locale: string) {
  const title = entry.subtitle
    ? `${entry.title} — ${entry.subtitle}`
    : entry.title;
  if (entry.kind !== "youth-session") return title;
  const prefix =
    locale === "fr" ? "Journée La jeunesse au pouvoir" : "Power of Youth Day";
  return `${prefix}: ${title.replace(/^(Power of Youth Day|(?:Journée )?(?:La )?jeunesse au pouvoir)\s*[—–:-]\s*/i, "")}`;
}
