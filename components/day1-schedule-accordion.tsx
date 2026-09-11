"use client";

import { ProgramBioDialog } from "./program-bio-dialog";
import { ProgramWordlyLink } from "./program-wordly-link";
import Image from "next/image";
import "./program-guide.css";
import { ExhibitionTitleText } from "./exhibition-title-text";
import { ChevronDown } from "lucide-react";
import { useEffect, useId, useState } from "react";
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
import { PROGRAM_PORTRAIT_FRAMING, type PortraitFraming } from "@/data/program-portrait-framing";
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
    return <ExhibitionTitleText key={key} text={part} />;
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
  portraitFraming?: PortraitFraming;
  bioEn?: string;
  bioFr?: string;
  imageUrl?: string;
  fit?: "cover" | "contain";
  imagePosition?: "center" | "slight-down" | "significant-down";
  imageScale?:
    | "slight"
    | "medium"
    | "large"
    | "extra-large"
    | "huge"
    | "top-large";
  imageOffsetY?: "slight-down";
  imageFraming?: { scale: number; offsetY?: number };
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
  resourceContextMatches?: string[];
}> = [
  {
    matches: ["manito ahbee"],
    nameEn: "Manito Ahbee Festival",
    nameFr: "Festival Manito Ahbee",
    imageUrl: "/manito-ahbee.jpg",
    fit: "contain",
    resourceUrl: "https://www.manitoahbee.com/",
    resourceLabelEn: "Visit Manito Ahbee",
    resourceLabelFr: "Visiter Manito Ahbee",
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
    resourceContextMatches: ["rehearsal", "répétition"],
  },
];

function getDisplayProfiles(
  text: string,
  isFr: boolean,
  resourceContext?: string,
): DisplayProfile[] {
  const speakerProfiles = findSpeakerProfiles(text).map((profile) => ({
    ...profile,
    portraitFraming: PROGRAM_PORTRAIT_FRAMING[profile.name],
    name: isFr ? profile.nameFr ?? profile.name : profile.name,
    imageFraming: isFr ? profile.imageFramingFr : undefined,
  }));
  const normalizedText = text.toLowerCase();
  const normalizedContext = resourceContext?.toLowerCase() ?? "";
  const mediaProfiles = PROGRAMME_MEDIA.filter((item) =>
    item.matches.some((match) => normalizedText.includes(match)),
  ).map((item) => ({
    name: isFr ? item.nameFr : item.nameEn,
    imageUrl: item.imageUrl,
    fit: item.fit,
    subtitleEn: item.subtitleEn,
    subtitleFr: item.subtitleFr,
    resourceUrl:
      !item.resourceContextMatches ||
      item.resourceContextMatches.some((match) =>
        normalizedContext.includes(match),
      )
        ? item.resourceUrl
        : undefined,
    resourceLabelEn: item.resourceLabelEn,
    resourceLabelFr: item.resourceLabelFr,
  }));

  return [...speakerProfiles, ...mediaProfiles].filter(
    (profile, index, profiles) =>
      profiles.findIndex((candidate) => candidate.name === profile.name) ===
      index,
  );
}

function ProfileImage({ profile, large = false }: { profile: DisplayProfile; large?: boolean }) {
  const [isVisible, setIsVisible] = useState(true);
  const renderedWidth = Math.ceil((large ? 128 : 56) * (profile.portraitFraming ? 100 / profile.portraitFraming.width : 1));
  const thumbnailWidth = Math.min(1280, Math.max(160, renderedWidth * 2));

  if (!profile.imageUrl || !isVisible) {
    return null;
  }

  return (
    <div className={cn("program-portrait relative shrink-0 overflow-hidden bg-[#F7F3EF]", large && "program-portrait-large", profile.fit === "contain" && "program-logo")}>
      <Image
        src={profile.imageUrl.startsWith("https://drive.google.com/thumbnail") ? profile.imageUrl.replace(/sz=w\d+/, `sz=w${thumbnailWidth}`) : profile.imageUrl}
        width={large ? 256 : 128}
        height={large ? 256 : 128}
        unoptimized={!profile.imageUrl.startsWith("/")}
        sizes={`${renderedWidth}px`}
        alt={profile.name}
        loading="lazy"
        referrerPolicy="no-referrer"
        style={profile.portraitFraming ? {
          width: `${10000 / profile.portraitFraming.width}%`,
          height: "auto",
          maxWidth: "none",
          left: "50%",
          top: "50%",
          transform: `translate(-${profile.portraitFraming.x}%, -${profile.portraitFraming.y}%)`,
        } : profile.imageFraming ? {
          scale: profile.imageFraming.scale,
          translate: `0 ${profile.imageFraming.offsetY ?? 0}%`,
          transformOrigin: "center",
        } : undefined}
        className={profile.portraitFraming ? "absolute" : cn(
          "absolute inset-0 size-full",
          profile.fit === "contain"
            ? "object-contain p-1.5"
            : profile.imagePosition === "significant-down"
              ? "object-cover object-[center_25%]"
              : profile.imagePosition === "slight-down"
                ? "object-cover object-[center_40%]"
                : "object-cover object-center",
          profile.imageScale === "slight" && "scale-[1.12]",
          profile.imageScale === "medium" && "scale-[1.3]",
          profile.imageScale === "large" && "scale-[1.55]",
          profile.imageScale === "extra-large" && "scale-[1.8]",
          profile.imageScale === "huge" && "scale-[3]",
          profile.imageScale === "top-large" && "origin-top scale-[1.55]",
          profile.imageOffsetY === "slight-down" && "translate-y-[6%]",
        )}
        onError={() => setIsVisible(false)}
      />
    </div>
  );
}

function ParticipantLine({ text }: { text: string }) {
  // Keep the complete supplied line, including qualifications and punctuation.
  let depth = 0;
  let split = -1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "(") depth++;
    if (text[i] === ")") depth--;
    if (text[i] === "," && depth === 0) { split = i; break; }
  }
  return <p className="program-person-line">{split < 0 ? <strong>{renderFormattedText(text)}</strong> : <><strong>{renderFormattedText(text.slice(0, split))}</strong><span>{renderFormattedText(text.slice(split))}</span></>}</p>;
}

function ProfileCards({ text, labels, isFr, resourceContext }: {
  text: string; labels: Labels; isFr: boolean; resourceContext?: string;
}) {
  const profiles = getDisplayProfiles(text, isFr, resourceContext);
  const lead = profiles.find(p => p.fit !== "contain") || profiles[0];
  return <div className="program-person">
    {lead && <ProfileImage profile={lead} />}
    <div className="program-person-copy">
      <ParticipantLine text={text} />
      {profiles.map(profile => {
        const bio = isFr ? profile.bioFr || profile.bioEn : profile.bioEn;
        return <div key={profile.name} className="program-person-tools">
          {profile !== lead && <span className="program-extra-person"><ProfileImage profile={profile} /><span>{profile.name}</span></span>}
          {(profile.subtitleEn || profile.subtitleFr) && <p>{isFr ? profile.subtitleFr : profile.subtitleEn}</p>}
          {bio && <ProgramBioDialog name={profile.name} line={<ParticipantLine text={text} />} bio={bio} isFr={isFr} portrait={<ProfileImage profile={profile} large />} />}
          {profile.resourceUrl && <a className="program-bio-trigger" href={profile.resourceUrl} target="_blank" rel="noreferrer">{isFr ? profile.resourceLabelFr : profile.resourceLabelEn}</a>}
        </div>;
      })}
    </div>
  </div>;
}

function PeopleList({ people, labels, isFr, resourceContext }: {
  people: SchedulePersonGroup[]; labels: Labels; isFr: boolean; resourceContext?: string;
}) {
  return <div className="program-people">{people.map((group, index) => <section key={group.label + index} className="program-person-group">
    <p className="program-role-label">{personLabel(group.label, labels)}</p>
    <ul className="program-participants">{group.names.map((name, i) => <li key={i}><ProfileCards text={name} labels={labels} isFr={isFr} resourceContext={resourceContext} /></li>)}</ul>
  </section>)}</div>;
}

function SessionCard({
  session,
  day,
  open,
  onToggle,
  labels,
  isFr,
}: {
  session: ScheduleSession;
  day: string;
  open: boolean;
  onToggle: () => void;
  labels: Labels;
  isFr: boolean;
}) {
  const panelId = useId();
  return (
    <div className="program-breakout rounded-xl border border-[#E8D4DB] bg-white overflow-hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-labelledby={`${panelId}-title ${panelId}-room`}
        aria-describedby={`${panelId}-prompt`}
        onClick={onToggle}
        className="program-breakout-toggle w-full text-left"
      >
        <div className="min-w-0">
          <h4 id={`${panelId}-title`} className="program-session-title">
            {session.number != null ? `${session.number}. ` : ""}
            {session.title}
          </h4>
          <span id={`${panelId}-room`} className="program-room">{session.room}</span>
          {!open && <p className="program-description-preview">{session.description}</p>}
          {!open && session.people && <p className="program-names-preview">{session.people.flatMap(g => g.names).map(line => { const profiles = findSpeakerProfiles(line); return profiles.length ? profiles.map(p => isFr ? p.nameFr ?? p.name : p.name).join(" · ") : line; }).join(" · ")}</p>}
          <span id={`${panelId}-prompt`} className="program-detail-label">{open ? (isFr ? "Fermer les détails" : "Close details") : (isFr ? "Voir les détails" : "View details")}</span>
        </div>
        <ChevronDown
          className={cn(
            "size-5 shrink-0 mt-0.5 text-[#8C0C3A] transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      <ProgramWordlyLink day={day} sessionId={session.id} title={session.title} isFr={isFr} />
      <div
        id={panelId}
        inert={!open}
        aria-hidden={!open}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="program-breakout-details space-y-4">
            {open && <>
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
              <PeopleList people={session.people} labels={labels} isFr={isFr} resourceContext={session.title} />
            )}
            </>}
          </div>
        </div>
      </div>
    </div>
  );
}

function PowerOfYouthLogo() {
  return (
    <div className="relative h-20 w-52 shrink-0 overflow-hidden">
      <img
        src="/power-of-youth-logo.png"
        alt="Power of Youth — Jeunesse au pouvoir"
        loading="lazy"
        className="absolute left-1/2 top-1/2 h-auto w-64 max-w-none -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}

function BlockDetails({
  block,
  day,
  labels,
  activeSession,
  setActiveSession,
  isFr,
}: {
  block: ScheduleBlock;
  day: string;
  labels: Labels;
  activeSession: string | null;
  setActiveSession: (id: string | null) => void;
  isFr: boolean;
}) {
  return (
    <div className="space-y-5">
      {block.seriesLogoUrl && <PowerOfYouthLogo />}
      {block.subtitle && (
        <p className="font-heading font-bold text-[16px] sm:text-[20px] text-[#5D1831] leading-snug tracking-wide">
          {block.subtitle}
        </p>
      )}

      {block.description?.split("\n\n").map((para) => (
        <p
          key={para.slice(0, 40)}
          className="font-body text-[14px] sm:text-[16px] text-[#1E1E1E]/85 leading-relaxed"
        >
          {renderFormattedText(para)}
        </p>
      ))}

      {block.action && (
        <a
          href={block.action.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full bg-[#8C0C3A] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#5D1831] focus:outline-none focus:ring-2 focus:ring-[#8C0C3A]/30 focus:ring-offset-2"
        >
          {block.action.label}
        </a>
      )}

      {block.people && (
        <PeopleList
          people={block.people}
          labels={labels}
          isFr={isFr}
          resourceContext={block.title}
        />
      )}

      {block.sessions && block.sessions.length > 0 && (
        <div className="space-y-3">
          <p className="font-heading font-bold text-[14px] sm:text-[15px] text-[#8C0C3A] tracking-wide uppercase">
            {labels.sessions}
          </p>
          <div className="program-breakout-grid">
            {block.sessions.map((session) => (
              <SessionCard
                key={session.id}
                day={day}
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
        <ol className="program-ceremony">
          {block.segments.map((segment, segmentIndex) => (
            <li
              key={`${segmentIndex}-${segment.title}`}
              className="program-ceremony-step"
            >
              <h4 className="program-segment-title">{segment.title}</h4>
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
                      <ProfileCards text={item} labels={labels} isFr={isFr} />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
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
  const [openBlocks, setOpenBlocks] = useState<Set<string>>(() => new Set());
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

  useEffect(() => {
    const target = window.location.hash.slice(1);
    const block = blocks.find(item => `${idPrefix}-${item.id}` === target);
    if (block) setOpenBlocks(prev => new Set(prev).add(block.id));
  }, [blocks, idPrefix]);

  const toggleBlock = (id: string) => {
    setOpenBlocks(prev => { const next = new Set(prev); if (next.has(id)) next.delete(id); else next.add(id); return next; });
  };

  return (
    <div className="program-schedule w-full space-y-3">
      {blocks.map((block) => {
        if (block.compact) {
          return (
            <div
              key={block.id}
              id={`${idPrefix}-${block.id}`}
              className="program-break"
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

        const open = openBlocks.has(block.id);

        return (
          <div
            key={block.id}
            id={`${idPrefix}-${block.id}`}
            className={cn("program-block rounded-xl border border-[#E8D4DB] bg-white overflow-hidden", block.id.includes("plenary") && "program-plenary")}
          >
            <h3 className="program-block-heading"><button
              type="button"
              aria-expanded={open}
              aria-controls={`${idPrefix}-${block.id}-panel`}
              onClick={() => toggleBlock(block.id)}
              className="program-block-toggle w-full text-left"
            >
              <div className="program-block-summary">
                <p className="program-time">
                  {block.time}
                </p>
                <div className="min-w-0">
                  <p className="program-block-title">
                    {block.title}
                  </p>
                  {block.location && (
                    <p className="program-room">
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
            </button></h3>
            <ProgramWordlyLink day={idPrefix} sessionId={block.id} title={block.subtitle ? `${block.title} — ${block.subtitle}` : block.title} isFr={isFr} />

            <div
              id={`${idPrefix}-${block.id}-panel`}
              inert={!open}
              aria-hidden={!open}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="program-block-details">
                  {open && <BlockDetails
                    block={block}
                    day={idPrefix}
                    labels={labels}
                    activeSession={activeSession}
                    setActiveSession={setActiveSession}
                    isFr={isFr}
                  />}
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
