"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type {
  ScheduleBlock,
  SchedulePersonGroup,
  ScheduleSession,
} from "@/data/schedule-types";
import { DAY1_SCHEDULE } from "@/data/day1-schedule";
import { DAY1_SCHEDULE_FR } from "@/data/day1-schedule-fr";
import { DAY2_SCHEDULE } from "@/data/day2-schedule";
import { DAY2_SCHEDULE_FR } from "@/data/day2-schedule-fr";
import { DAY3_SCHEDULE } from "@/data/day3-schedule";
import { DAY3_SCHEDULE_FR } from "@/data/day3-schedule-fr";

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
  room: string;
  sessions: string;
  note: string;
};

/** Renders `**bold**` and `_italic_` markers in schedule copy. */
function renderFormattedText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|_[^_]+_)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("_") && part.endsWith("_")) {
      return (
        <em key={index} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }
    return part;
  });
}

function personLabel(
  label: SchedulePersonGroup["label"],
  labels: Labels
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
    default:
      return label;
  }
}

function PeopleList({
  people,
  labels,
}: {
  people: SchedulePersonGroup[];
  labels: Labels;
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
                  className="font-body text-[14px] sm:text-[15px] text-[#1E1E1E]/90 leading-relaxed pl-3 border-l-2 border-[#E8D4DB]"
                >
                  <span>{renderFormattedText(name)}</span>
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
}: {
  session: ScheduleSession;
  open: boolean;
  onToggle: () => void;
  labels: Labels;
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
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 pt-1 space-y-4 border-t border-[#E8D4DB]">
            <p className="font-body text-[14px] sm:text-[15px] text-[#1E1E1E]/85 leading-relaxed">
              {session.description}
            </p>
            {session.note && (
              <p className="font-body text-[13px] sm:text-[14px] text-[#5D1831]/70 italic leading-relaxed">
                {session.note}
              </p>
            )}
            {session.people && (
              <PeopleList people={session.people} labels={labels} />
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
}: {
  block: ScheduleBlock;
  labels: Labels;
  activeSession: string | null;
  setActiveSession: (id: string | null) => void;
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

      {block.people && <PeopleList people={block.people} labels={labels} />}

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
                    activeSession === session.id ? null : session.id
                  )
                }
                labels={labels}
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
              {segment.items && (
                <ul className="mt-2 space-y-1.5">
                  {segment.items.map((item) => (
                    <li
                      key={item}
                      className="font-body text-[14px] sm:text-[15px] text-[#1E1E1E]/85 leading-relaxed pl-3 border-l-2 border-[#E8D4DB]"
                    >
                      {renderFormattedText(item)}
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
        room: "Salle",
        sessions: "Séances",
        note: "Note",
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
        room: "Room",
        sessions: "Sessions",
        note: "Note",
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
                  open && "rotate-180"
                )}
              />
            </button>

            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-[#E8D4DB]">
                  <BlockDetails
                    block={block}
                    labels={labels}
                    activeSession={activeSession}
                    setActiveSession={setActiveSession}
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
