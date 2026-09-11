import { DAY1_SCHEDULE } from "./day1-schedule";
import { DAY1_SCHEDULE_FR } from "./day1-schedule-fr";
import { DAY2_SCHEDULE } from "./day2-schedule";
import { DAY2_SCHEDULE_FR } from "./day2-schedule-fr";
import { DAY3_SCHEDULE } from "./day3-schedule";
import { DAY3_SCHEDULE_FR } from "./day3-schedule-fr";
import type { ScheduleBlock, ScheduleSession } from "./schedule-types";

export type ProgramDay = 1 | 2 | 3;
export type ProgramLocale = "en" | "fr";
export type ProgramEntryKind =
  | "youth-session"
  | "session"
  | "ceremony"
  | "logistics";

/** Internal day numbers are permanent URL IDs, not public Summit day numbers. */
export function getProgramDays(locale: string) {
  const fr = locale === "fr";
  return [
    {
      day: 1,
      label: fr ? "La jeunesse au pouvoir" : "Power of Youth Day",
      date: fr ? "Vendredi 18 septembre" : "Friday, September 18",
      shortDate: fr ? "Ven. 18" : "Fri 18",
      nav: fr
        ? "Ven. 18 — Journée La jeunesse au pouvoir"
        : "Fri 18 — Power of Youth Day",
    },
    {
      day: 2,
      label: fr ? "Jour 1" : "Day 1",
      date: fr ? "Samedi 19 septembre" : "Saturday, September 19",
      shortDate: fr ? "Sam. 19" : "Sat 19",
      nav: fr ? "Sam. 19 — Jour 1" : "Sat 19 — Day 1",
    },
    {
      day: 3,
      label: fr ? "Jour 2" : "Day 2",
      date: fr ? "Dimanche 20 septembre" : "Sunday, September 20",
      shortDate: fr ? "Dim. 20" : "Sun 20",
      nav: fr ? "Dim. 20 — Jour 2" : "Sun 20 — Day 2",
    },
  ] as const;
}

/** Shared block metadata applies equally to the English and French records. */
const PROGRAM_BLOCK_TYPES: Record<string, ProgramEntryKind> = {
  "day1:opening-plenary": "youth-session",
  "day1:morning-sessions": "youth-session",
  "day1:plenary-afternoon": "youth-session",
  "day1:afternoon-sessions": "youth-session",
  "day1:opening-ceremony": "ceremony",
  "day3:closing-ceremony": "ceremony",
  "day1:registration": "logistics",
  "day1:networking": "logistics",
  "day1:exhibition-artists-meet-greet": "logistics",
  "day2:registration": "logistics",
  "day2:sponsors-reception": "logistics",
  "day2:in-circle": "logistics",
};
export type ProgramEntry = {
  id: string;
  anchor: string;
  day: ProgramDay;
  kind: ProgramEntryKind;
  blockId: string;
  sessionId?: string;
  title: string;
  subtitle?: string;
  time: string;
  source: ScheduleBlock | ScheduleSession;
};

/** Existing bilingual schedules remain the source of all official program copy. */
export function getSchedule(day: ProgramDay, locale: string): ScheduleBlock[] {
  const schedules =
    locale === "fr"
      ? [DAY1_SCHEDULE_FR, DAY2_SCHEDULE_FR, DAY3_SCHEDULE_FR]
      : [DAY1_SCHEDULE, DAY2_SCHEDULE, DAY3_SCHEDULE];
  return schedules[day - 1];
}

export function getProgramEntries(locale: string): ProgramEntry[] {
  return ([1, 2, 3] as const).flatMap((day) =>
    getSchedule(day, locale).flatMap<ProgramEntry>((block) => {
      if (block.compact) return [];
      const kind = PROGRAM_BLOCK_TYPES[`day${day}:${block.id}`] ?? "session";
      if (block.sessions?.length)
        return block.sessions.map((session) => ({
          id: `day${day}:${session.id}`,
          anchor: `day${day}-${session.id}`,
          day,
          kind:
            session.id === "summit-mass-choir-rehearsal" ? "logistics" : kind,
          blockId: block.id,
          sessionId: session.id,
          title: session.title,
          time: block.time,
          source: session,
        }));
      return [
        {
          id: `day${day}:${block.id}`,
          anchor: `day${day}-${block.id}`,
          day,
          kind,
          blockId: block.id,
          title: block.title,
          subtitle: block.subtitle,
          time: block.time,
          source: block,
        },
      ];
    }),
  );
}

export function resolveProgramAnchor(anchor: string, locale = "en") {
  return getProgramEntries(locale).find((entry) => entry.anchor === anchor);
}

export function programDayFromUrl(url: URL): ProgramDay {
  // The exact anchor wins over a stale day query on a shared link.
  const anchorDay = /^#day([123])(?:-|$)/.exec(url.hash)?.[1];
  const day = Number(anchorDay || url.searchParams.get("day") || 1);
  return day === 2 || day === 3 ? day : 1;
}

export function getOpeningCeremony(locale: string) {
  return getSchedule(1, locale).find(
    (block) => block.id === "opening-ceremony",
  );
}
