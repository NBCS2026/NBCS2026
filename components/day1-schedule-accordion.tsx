"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { DAY1_SCHEDULE } from "@/data/day1-schedule";
import { DAY1_SCHEDULE_FR } from "@/data/day1-schedule-fr";
import { DAY2_SCHEDULE } from "@/data/day2-schedule";
import { DAY2_SCHEDULE_FR } from "@/data/day2-schedule-fr";
import { DAY3_SCHEDULE } from "@/data/day3-schedule";
import { DAY3_SCHEDULE_FR } from "@/data/day3-schedule-fr";
import type {
  ScheduleBlock,
  SchedulePersonGroup,
  ScheduleSession,
} from "@/data/schedule-types";
import { findSpeakerProfiles } from "@/data/speaker-profiles";
import { cn } from "@/lib/utils";

type Labels = {
  host: string;
  animatrice: string;
  hosts: string;
  facilitator: string;
  facilitators: string;
  animation: string;
  panelists: string;
  moderator: string;
  moderatrice: string;
  moderation: string;
  speakers: string;
  intervenants: string;
  keynote: string;
  remarks: string;
  motOuverture: string;
  allocution: string;
  performances: string;
  featured: string;
  closing: string;
  introduction: string;
  room: string;
  sessions: string;
  note: string;
  biography: string;
};

/** Renders `**bold**` and `_italic_` markers in schedule copy. */
function renderFormattedText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|_[^_]+_)/g);
  let offset = 0;
  return parts.map((part) => {
    const key = `${offset}:${part}`;
    offset += part.length;
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={key} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("_") && part.endsWith("_")) {
      return (
        <em key={key} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }
    return part;
  });
}

function personLabel(
  label: SchedulePersonGroup["label"],
  labels: Labels,
): string {
  switch (label) {
    case "host":
      return labels.host;
    case "animatrice":
      return labels.animatrice;
    case "hosts":
      return labels.hosts;
    case "facilitator":
      return labels.facilitator;
    case "facilitators":
      return labels.facilitators;
    case "animation":
      return labels.animation;
    case "panelists":
      return labels.panelists;
    case "moderator":
      return labels.moderator;
    case "moderatrice":
      return labels.moderatrice;
    case "moderation":
      return labels.moderation;
    case "speakers":
      return labels.speakers;
    case "intervenants":
      return labels.intervenants;
    case "keynote":
      return labels.keynote;
    case "remarks":
      return labels.remarks;
    case "motOuverture":
      return labels.motOuverture;
    case "allocution":
      return labels.allocution;
    case "performances":
      return labels.performances;
    case "featured":
      return labels.featured;
    case "closing":
      return labels.closing;
    case "introduction":
      return labels.introduction;
    default:
      return label;
  }
}

type DisplayProfile = {
  name: string;
  bioEn?: string;
  bioFr?: string;
  imageUrl?: string;
  fit?: "cover" | "contain";
  imagePosition?: "center" | "slight-down";
  subtitleEn?: string;
  subtitleFr?: string;
  resourceUrl?: string;
  resourceLabelEn?: string;
  resourceLabelFr?: string;
};

const PROGRAMME_MEDIA: Array<{
  matches: string[];
  nameEn: string;
  nameFr: string;
  imageUrl: string;
  fit?: "cover" | "contain";
  subtitleEn?: string;
  subtitleFr?: string;
  resourceUrl?: string;
  resourceLabelEn?: string;
  resourceLabelFr?: string;
}> = [
  {
    matches: ["manito ahbee"],
    nameEn: "Manito Ahbee Festival",
    nameFr: "Festival Manito Ahbee",
    imageUrl: "/manito-ahbee.jpg",
    fit: "contain",
  },
  {
    matches: ["acomi", "african communities of manitoba"],
    nameEn: "ACOMI and Drummers From Home",
    nameFr: "ACOMI et Drummers From Home",
    imageUrl: "/acomi.jpg",
    fit: "contain",
  },
  {
    matches: ["dr. henry band", "dr henry band"],
    nameEn: "Dr. Henry Band",
    nameFr: "Dr. Henry Band",
    imageUrl: "/dr-henry-band.jpg",
  },
  {
    matches: [
      "roots in harmony",
      "summit mass choir",
      "grande chorale du sommet",
    ],
    nameEn: "Summit Mass Choir, including Roots in Harmony Choir",
    nameFr: "Grande chorale du Sommet, avec Roots in Harmony",
    imageUrl: "/roots-in-harmony.webp",
    subtitleEn: "Directed by Sonya Williams",
    subtitleFr: "Sous la direction de Sonya Williams",
    resourceUrl:
      "https://drive.google.com/drive/folders/1lD8I6jPbW9WXT8tbA1PKCzLuipjTNYbR?usp=sharing",
    resourceLabelEn: "Learning parts and scores",
    resourceLabelFr: "Parties d’apprentissage et partitions",
  },
];

function getDisplayProfiles(text: string, isFr: boolean): DisplayProfile[] {
  const speakerProfiles = findSpeakerProfiles(text);
  const normalizedText = text.toLowerCase();
  const mediaProfiles = PROGRAMME_MEDIA.filter((item) =>
    item.matches.some((match) => normalizedText.includes(match)),
  ).map((item) => ({
    name: isFr ? item.nameFr : item.nameEn,
    imageUrl: item.imageUrl,
    fit: item.fit,
    subtitleEn: item.subtitleEn,
    subtitleFr: item.subtitleFr,
    resourceUrl: item.resourceUrl,
    resourceLabelEn: item.resourceLabelEn,
    resourceLabelFr: item.resourceLabelFr,
  }));

  return [...speakerProfiles, ...mediaProfiles].filter(
    (profile, index, profiles) =>
      profiles.findIndex((candidate) => candidate.name === profile.name) ===
      index,
  );
}

function ProfileImage({ profile }: { profile: DisplayProfile }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!profile.imageUrl || !isVisible) {
    return null;
  }

  return (
    <div className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-[#F7F3EF]">
      <img
        src={profile.imageUrl}
        alt={profile.name}
        loading="lazy"
        referrerPolicy="no-referrer"
        className={cn(
          "absolute inset-0 size-full",
          profile.fit === "contain"
            ? "object-contain p-1.5"
            : profile.imagePosition === "slight-down"
              ? "object-cover object-[center_40%]"
              : "object-cover object-center",
        )}
        onError={() => setIsVisible(false)}
      />
    </div>
  );
}

function ProfileCards({
  text,
  labels,
  isFr,
}: {
  text: string;
  labels: Labels;
  isFr: boolean;
}) {
  const profiles = getDisplayProfiles(text, isFr);
  const visibleProfiles = profiles.filter(
    (profile) => profile.imageUrl || profile.bioEn || profile.bioFr,
  );

  if (visibleProfiles.length === 0) {
    return null;
  }

  return (
    <div className="mt-3 grid gap-3 sm:grid-cols-2">
      {visibleProfiles.map((profile) => {
        const bio = isFr ? profile.bioFr || profile.bioEn : profile.bioEn;

        return (
          <article
            key={profile.name}
            className="flex gap-3 rounded-xl border border-[#E8D4DB] bg-white p-3"
          >
            <ProfileImage profile={profile} />
            <div className="min-w-0 flex-1">
              <p className="font-heading font-bold leading-snug text-[#5D1831]">
                {profile.name}
              </p>
              {(profile.subtitleEn || profile.subtitleFr) && (
                <p className="mt-1 text-[13px] font-semibold leading-snug text-[#1E1E1E]/75">
                  {isFr ? profile.subtitleFr : profile.subtitleEn}
                </p>
              )}
              {profile.resourceUrl && (
                <a
                  href={profile.resourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex rounded-full bg-[#8C0C3A] px-3 py-1.5 text-[12px] font-bold text-white transition-colors hover:bg-[#5D1831] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C0C3A]"
                >
                  {isFr ? profile.resourceLabelFr : profile.resourceLabelEn}
                </a>
              )}
              {bio && (
                <details className="group mt-1.5">
                  <summary className="cursor-pointer list-none text-[13px] font-semibold text-[#8C0C3A] underline underline-offset-2">
                    {labels.biography}
                  </summary>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#1E1E1E]/80">
                    {bio}
                  </p>
                </details>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}

function PeopleList({
  people,
  labels,
  isFr,
}: {
  people: SchedulePersonGroup[];
  labels: Labels;
  isFr: boolean;
}) {
  return (
    <div className="space-y-4">
      {people.map((group) => (
        <div key={group.label + group.names[0]}>
          <p className="font-heading font-bold text-[14px] sm:text-[15px] text-[#8C0C3A] tracking-wide uppercase mb-1.5">
            {personLabel(group.label, labels)}
          </p>
          <ul className="space-y-1.5">
            {group.names.map((name) => (
              <li
                key={name}
                className="border-l-2 border-[#E8D4DB] pl-3 font-body text-[14px] leading-relaxed text-[#1E1E1E]/90 sm:text-[15px]"
              >
                <p>{renderFormattedText(name)}</p>
                <ProfileCards text={name} labels={labels} isFr={isFr} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function SessionCard({
  session,
  open,
  onToggle,
  labels,
  isFr,
}: {
  session: ScheduleSession;
  open: boolean;
  onToggle: () => void;
  labels: Labels;
  isFr: boolean;
}) {
  return (
    <div className="rounded-xl border border-[#E8D4DB] bg-white overflow-hidden">
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-3 px-4 py-3.5 text-left cursor-pointer hover:bg-[#FAF6F7] transition-colors"
      >
        <div className="min-w-0">
          <p className="font-heading font-bold text-[15px] sm:text-[16px] text-[#5D1831] leading-snug">
            {session.number != null ? `${session.number}. ` : ""}
            {session.title}
          </p>
          <p className="mt-1 text-[13px] sm:text-[14px] text-[#8C0C3A] font-semibold">
            {labels.room}: {session.room}
          </p>
        </div>
        <ChevronDown
          className={cn(
            "size-5 shrink-0 mt-0.5 text-[#8C0C3A] transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 pt-1 space-y-4 border-t border-[#E8D4DB]">
            <p className="font-body text-[14px] sm:text-[15px] text-[#1E1E1E]/85 leading-relaxed">
              {session.description}
            </p>
            {session.presentedBy && (
              <div className="inline-flex items-center gap-3 rounded-xl border border-[#E8D4DB] bg-[#FAF6F7] px-4 py-3">
                <span className="font-heading text-[12px] font-bold uppercase tracking-[0.12em] text-[#8C0C3A]">
                  {isFr ? "Présenté par" : "Presented by"}
                </span>
                <img
                  src={session.presentedBy.logoUrl}
                  alt={session.presentedBy.name}
                  loading="lazy"
                  className="h-9 w-auto max-w-36 object-contain"
                />
              </div>
            )}
            {session.note && (
              <p className="font-body text-[13px] sm:text-[14px] text-[#5D1831]/70 italic leading-relaxed">
                {session.note}
              </p>
            )}
            {session.people && (
              <PeopleList people={session.people} labels={labels} isFr={isFr} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function BlockDetails({
  block,
  labels,
  activeSession,
  setActiveSession,
  isFr,
}: {
  block: ScheduleBlock;
  labels: Labels;
  activeSession: string | null;
  setActiveSession: (id: string | null) => void;
  isFr: boolean;
}) {
  return (
    <div className="space-y-5">
      {block.location && (
        <p className="inline-flex items-center rounded-full bg-[#FAF6F7] border border-[#E8D4DB] px-3 py-1 text-[13px] sm:text-[14px] font-semibold text-[#5D1831]">
          {labels.room}: {block.location}
        </p>
      )}

      {block.subtitle && (
        <p className="font-heading font-bold text-[16px] sm:text-[20px] text-[#5D1831] leading-snug tracking-wide">
          {block.subtitle}
        </p>
      )}

      {block.description &&
        block.description.split("\n\n").map((para) => (
          <p
            key={para.slice(0, 40)}
            className="font-body text-[14px] sm:text-[16px] text-[#1E1E1E]/85 leading-relaxed"
          >
            {renderFormattedText(para)}
          </p>
        ))}

      {block.people && (
        <PeopleList people={block.people} labels={labels} isFr={isFr} />
      )}

      {block.sessions && block.sessions.length > 0 && (
        <div className="space-y-3">
          <p className="font-heading font-bold text-[14px] sm:text-[15px] text-[#8C0C3A] tracking-wide uppercase">
            {labels.sessions}
          </p>
          <div className="space-y-2">
            {block.sessions.map((session) => (
              <SessionCard
                key={session.id}
                session={session}
                open={activeSession === session.id}
                onToggle={() =>
                  setActiveSession(
                    activeSession === session.id ? null : session.id,
                  )
                }
                labels={labels}
                isFr={isFr}
              />
            ))}
          </div>
        </div>
      )}

      {block.segments && (
        <div className="space-y-4">
          {block.segments.map((segment) => (
            <div
              key={segment.title}
              className="rounded-xl border border-[#E8D4DB] bg-[#FAF6F7] px-4 py-3.5"
            >
              <p className="font-heading font-bold text-[15px] sm:text-[16px] text-[#5D1831] mb-1">
                {segment.title}
              </p>
              {segment.body && (
                <p className="font-body text-[14px] sm:text-[15px] text-[#1E1E1E]/80 leading-relaxed">
                  {segment.body}
                </p>
              )}
              {segment.people && (
                <div className="mt-3">
                  <PeopleList
                    people={segment.people}
                    labels={labels}
                    isFr={isFr}
                  />
                </div>
              )}
              {segment.items && (
                <ul className="mt-2 space-y-1.5">
                  {segment.items.map((item) => (
                    <li
                      key={item}
                      className="font-body text-[14px] sm:text-[15px] text-[#1E1E1E]/85 leading-relaxed pl-3 border-l-2 border-[#E8D4DB]"
                    >
                      {renderFormattedText(item)}
                      <ProfileCards text={item} labels={labels} isFr={isFr} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {block.note && (
        <p className="rounded-xl bg-[#8C0C3A]/8 border border-[#8C0C3A]/20 px-4 py-3 font-semibold text-[14px] sm:text-[15px] text-[#5D1831]">
          {labels.note}: {block.note}
        </p>
      )}
    </div>
  );
}

function ScheduleDayAccordion({
  locale,
  blocks,
  idPrefix,
}: {
  locale: string;
  blocks: ScheduleBlock[];
  idPrefix: string;
}) {
  const [activeBlock, setActiveBlock] = useState<string | null>(null);
  const [activeSession, setActiveSession] = useState<string | null>(null);
  const isFr = locale === "fr";

  const labels: Labels = isFr
    ? {
        host: "Animateur",
        animatrice: "Animatrice",
        hosts: "Animateurs",
        facilitator: "Facilitateur",
        facilitators: "Facilitateurs",
        animation: "Animation",
        panelists: "Panélistes",
        moderator: "Modérateur",
        moderatrice: "Modératrice",
        moderation: "Modération",
        speakers: "Conférenciers",
        intervenants: "Intervenants",
        keynote: "Allocution principale",
        remarks: "Remarques",
        motOuverture: "Mot d'ouverture",
        allocution: "Allocution",
        performances: "Prestations",
        featured: "Prestation vedette",
        closing: "Clôture",
        introduction: "Présentation",
        room: "Salle",
        sessions: "Séances",
        note: "Note",
        biography: "Biographie",
      }
    : {
        host: "Host",
        animatrice: "Host",
        hosts: "Hosts",
        facilitator: "Facilitator",
        facilitators: "Facilitators",
        animation: "Host",
        panelists: "Panelists",
        moderator: "Moderator",
        moderatrice: "Moderator",
        moderation: "Moderation",
        speakers: "Speakers",
        intervenants: "Speakers",
        keynote: "Keynote address",
        remarks: "Remarks",
        motOuverture: "Opening remarks",
        allocution: "Remarks",
        performances: "Performances",
        featured: "Featured performance",
        closing: "Closing",
        introduction: "Introduction",
        room: "Room",
        sessions: "Sessions",
        note: "Note",
        biography: "Biography",
      };

  const toggleBlock = (id: string) => {
    setActiveBlock((prev) => {
      const next = prev === id ? null : id;
      if (next) {
        window.setTimeout(() => {
          document.getElementById(`${idPrefix}-${next}`)?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }, 280);
      }
      return next;
    });
    setActiveSession(null);
  };

  return (
    <div className="w-full max-w-3xl space-y-3">
      {blocks.map((block) => {
        if (block.compact) {
          return (
            <div
              key={block.id}
              id={`${idPrefix}-${block.id}`}
              className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-4 py-3.5 rounded-xl border border-dashed border-[#E8D4DB] bg-[#FAF6F7]/60"
            >
              <p className="text-light-red font-bold text-[15px] sm:text-[16px] sm:w-[200px] shrink-0">
                {block.time}
              </p>
              <p className="font-semibold text-[16px] sm:text-[18px] text-[#1E1E1E]/70">
                {block.title}
              </p>
            </div>
          );
        }

        const open = activeBlock === block.id;

        return (
          <div
            key={block.id}
            id={`${idPrefix}-${block.id}`}
            className="rounded-xl border border-[#E8D4DB] bg-white overflow-hidden shadow-[0_1px_0_rgba(93,24,49,0.04)] scroll-mt-24"
          >
            <button
              type="button"
              aria-expanded={open}
              onClick={() => toggleBlock(block.id)}
              className="w-full flex items-start justify-between gap-4 px-4 sm:px-5 py-4 text-left cursor-pointer hover:bg-[#FAF6F7] transition-colors"
            >
              <div className="min-w-0 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                <p className="text-light-red font-bold text-[15px] sm:text-[17px] sm:w-[200px] shrink-0">
                  {block.time}
                </p>
                <div className="min-w-0">
                  <p className="font-heading font-bold text-[16px] sm:text-[19px] text-[#1E1E1E] leading-snug tracking-wide">
                    {block.title}
                  </p>
                  {block.location && (
                    <p className="mt-1 text-[13px] sm:text-[14px] text-[#8C0C3A] font-medium">
                      {block.location}
                    </p>
                  )}
                </div>
              </div>
              <ChevronDown
                className={cn(
                  "size-5 sm:size-6 shrink-0 mt-1 text-[#8C0C3A] transition-transform duration-200",
                  open && "rotate-180",
                )}
              />
            </button>

            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-[#E8D4DB]">
                  <BlockDetails
                    block={block}
                    labels={labels}
                    activeSession={activeSession}
                    setActiveSession={setActiveSession}
                    isFr={isFr}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function Day1ScheduleAccordion({ locale }: { locale: string }) {
  return (
    <ScheduleDayAccordion
      locale={locale}
      blocks={locale === "fr" ? DAY1_SCHEDULE_FR : DAY1_SCHEDULE}
      idPrefix="day1"
    />
  );
}

export function Day2ScheduleAccordion({ locale }: { locale: string }) {
  return (
    <ScheduleDayAccordion
      locale={locale}
      blocks={locale === "fr" ? DAY2_SCHEDULE_FR : DAY2_SCHEDULE}
      idPrefix="day2"
    />
  );
}

export function Day3ScheduleAccordion({ locale }: { locale: string }) {
  return (
    <ScheduleDayAccordion
      locale={locale}
      blocks={locale === "fr" ? DAY3_SCHEDULE_FR : DAY3_SCHEDULE}
      idPrefix="day3"
    />
  );
}
