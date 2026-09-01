export type SchedulePersonGroup = {
  label:
    | "host"
    | "animatrice"
    | "hosts"
    | "facilitator"
    | "facilitators"
    | "animation"
    | "panelists"
    | "moderator"
    | "moderatrice"
    | "moderation"
    | "speakers"
    | "intervenants"
    | "keynote"
    | "remarks"
    | "motOuverture"
    | "allocution"
    | "performances"
    | "featured"
    | "closing"
    | "introduction";
  names: string[];
};

export type ScheduleSession = {
  id: string;
  number?: number;
  title: string;
  room: string;
  description: string;
  note?: string;
  people?: SchedulePersonGroup[];
};

export type ScheduleBlock = {
  id: string;
  time: string;
  title: string;
  subtitle?: string;
  location?: string;
  description?: string;
  note?: string;
  /** Simple blocks (e.g. breaks) — no expandable details needed */
  compact?: boolean;
  people?: SchedulePersonGroup[];
  sessions?: ScheduleSession[];
  /** Ordered ceremony / program segments */
  segments?: {
    title: string;
    body?: string;
    people?: SchedulePersonGroup[];
    items?: string[];
  }[];
};
