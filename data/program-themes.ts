import type { ProgramEntry } from "./program";

export const PROGRAM_THEMES = [
  {
    "id": "justice",
    "en": "Justice, Rights & Systemic Change",
    "fr": "Justice, droits et changement systémique",
    "color": "#870636",
    "foreground": "#FFFFFF"
  },
  {
    "id": "health",
    "en": "Health, Wellness & Community",
    "fr": "Santé, bien-être et communauté",
    "color": "#8FC535",
    "foreground": "#271620"
  },
  {
    "id": "education",
    "en": "Education, Youth & Leadership",
    "fr": "Éducation, jeunesse et leadership",
    "color": "#0090BB",
    "foreground": "#171717"
  },
  {
    "id": "economy",
    "en": "Economic Power & the Future of Work",
    "fr": "Pouvoir économique et avenir du travail",
    "color": "#FE9919",
    "foreground": "#271620"
  },
  {
    "id": "arts",
    "en": "Arts, Culture & Storytelling",
    "fr": "Arts, culture et récits",
    "color": "#FC413D",
    "foreground": "#271620"
  }
] as const;
export type ProgramTheme = (typeof PROGRAM_THEMES)[number]["id"];

/** One primary theme per substantive session. Titles stay in the schedules.
 * Ceremonies, receptions, rehearsals and operational blocks are intentionally absent.
 * Removed sessions are never reintroduced by this discovery mapping.
 */
export const SESSION_THEMES: Readonly<Record<string, ProgramTheme>> = {
  "day1:session-1": "education",
  "day1:session-2": "economy",
  "day1:session-3": "economy",
  "day1:session-4": "health",
  "day1:session-5": "arts",
  "day1:plenary-afternoon": "education",
  "day1:session-7": "arts",
  "day1:session-8": "justice",
  "day1:session-9": "health",
  "day1:session-10": "economy",
  "day1:session-11": "arts",
  "day1:session-12": "arts",
  "day2:opening-plenary": "justice",
  "day2:d2-am-1": "health",
  "day2:d2-am-2": "arts",
  "day2:d2-am-3": "economy",
  "day2:d2-am-4": "justice",
  "day2:d2-am-5": "health",
  "day2:d2-am-6": "justice",
  "day2:d2-am-7": "economy",
  "day2:plenary-afternoon": "justice",
  "day2:d2-pm-1": "education",
  "day2:d2-pm-2": "education",
  "day2:d2-pm-3": "health",
  "day2:d2-pm-4": "justice",
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
