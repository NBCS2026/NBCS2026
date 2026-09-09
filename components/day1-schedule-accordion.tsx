"use client";

import { Check, ChevronDown, Copy, Share2 } from "lucide-react";
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
  imagePosition?: "center" | "slight-down" | "significant-down";
  imageScale?:
    | "slight"
    | "medium"
    | "large"
    | "extra-large"
    | "huge"
    | "top-large";
  imageOffsetY?: "slight-down";
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
  const speakerProfiles = findSpeakerProfiles(text);
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

function ProfileCards({
  text,
  labels,
  isFr,
  resourceContext,
}: {
  text: string;
  labels: Labels;
  isFr: boolean;
  resourceContext?: string;
}) {
  const profiles = getDisplayProfiles(text, isFr, resourceContext);
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
  resourceContext,
}: {
  people: SchedulePersonGroup[];
  labels: Labels;
  isFr: boolean;
  resourceContext?: string;
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
                <ProfileCards
                  text={name}
                  labels={labels}
                  isFr={isFr}
                  resourceContext={resourceContext}
                />
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

function DelegateConnect({ isFr }: { isFr: boolean }) {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [expertise, setExpertise] = useState("");
  const [contribution, setContribution] = useState("");
  const [contact, setContact] = useState("");
  const [copied, setCopied] = useState(false);

  const introduction = isFr
    ? [
        `Bonjour, je m’appelle ${name || "…"}${organization ? ` — ${organization}` : ""}.`,
        expertise ? `Mon expertise : ${expertise}` : "",
        contribution ? `Ma contribution : ${contribution}` : "",
        contact ? `Pour me joindre : ${contact}` : "",
      ]
        .filter(Boolean)
        .join("\n")
    : [
        `Hi, I’m ${name || "…"}${organization ? ` — ${organization}` : ""}.`,
        expertise ? `My expertise: ${expertise}` : "",
        contribution ? `I can contribute: ${contribution}` : "",
        contact ? `Connect with me: ${contact}` : "",
      ]
        .filter(Boolean)
        .join("\n");

  const copyIntroduction = async () => {
    await navigator.clipboard.writeText(introduction);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const shareIntroduction = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: isFr ? "Ma présentation" : "My delegate introduction",
          text: introduction,
        });
        return;
      }
      await copyIntroduction();
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      await copyIntroduction();
    }
  };

  return (
    <section className="rounded-2xl border border-[#D9B8C4] bg-[#FAF6F7] p-4 sm:p-5">
      <div className="max-w-2xl">
        <p className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-[#8C0C3A]">
          {isFr ? "Connexion entre délégué·e·s" : "Delegate Connect"}
        </p>
        <h3 className="mt-2 font-heading text-xl font-black text-[#5D1831]">
          {isFr
            ? "Créez une présentation rapide"
            : "Create a quick introduction"}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#1E1E1E]/75">
          {isFr
            ? "Préparez une courte carte à montrer, copier ou partager avec les personnes que vous rencontrez. Vos renseignements restent sur votre appareil."
            : "Prepare a short card to show, copy or share with people you meet. Your information stays on your device."}
        </p>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-bold text-[#5D1831]">
          {isFr ? "Nom" : "Name"}
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-1.5 w-full rounded-xl border border-[#D9B8C4] bg-white px-3 py-2.5 text-base font-normal text-[#1E1E1E] outline-none focus:border-[#8C0C3A] focus:ring-2 focus:ring-[#8C0C3A]/15"
          />
        </label>
        <label className="text-sm font-bold text-[#5D1831]">
          {isFr ? "Organisation ou communauté" : "Organization or community"}
          <input
            value={organization}
            onChange={(event) => setOrganization(event.target.value)}
            className="mt-1.5 w-full rounded-xl border border-[#D9B8C4] bg-white px-3 py-2.5 text-base font-normal text-[#1E1E1E] outline-none focus:border-[#8C0C3A] focus:ring-2 focus:ring-[#8C0C3A]/15"
          />
        </label>
        <label className="text-sm font-bold text-[#5D1831]">
          {isFr ? "Expertise" : "Expertise"}
          <input
            value={expertise}
            onChange={(event) => setExpertise(event.target.value)}
            placeholder={
              isFr
                ? "p. ex. politiques, arts, recherche"
                : "e.g. policy, arts, research"
            }
            className="mt-1.5 w-full rounded-xl border border-[#D9B8C4] bg-white px-3 py-2.5 text-base font-normal text-[#1E1E1E] outline-none placeholder:text-[#1E1E1E]/40 focus:border-[#8C0C3A] focus:ring-2 focus:ring-[#8C0C3A]/15"
          />
        </label>
        <label className="text-sm font-bold text-[#5D1831]">
          {isFr ? "Ce que je peux apporter" : "What I can contribute"}
          <input
            value={contribution}
            onChange={(event) => setContribution(event.target.value)}
            className="mt-1.5 w-full rounded-xl border border-[#D9B8C4] bg-white px-3 py-2.5 text-base font-normal text-[#1E1E1E] outline-none focus:border-[#8C0C3A] focus:ring-2 focus:ring-[#8C0C3A]/15"
          />
        </label>
        <label className="text-sm font-bold text-[#5D1831] sm:col-span-2">
          {isFr
            ? "Coordonnée à partager — courriel, LinkedIn ou site Web"
            : "Contact to share — email, LinkedIn or website"}
          <input
            value={contact}
            onChange={(event) => setContact(event.target.value)}
            inputMode="url"
            className="mt-1.5 w-full rounded-xl border border-[#D9B8C4] bg-white px-3 py-2.5 text-base font-normal text-[#1E1E1E] outline-none focus:border-[#8C0C3A] focus:ring-2 focus:ring-[#8C0C3A]/15"
          />
        </label>
      </div>

      {name && (
        <div className="mt-5 rounded-2xl bg-[#5D1831] p-4 text-white">
          <p className="whitespace-pre-line text-sm leading-relaxed">
            {introduction}
          </p>
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={shareIntroduction}
          disabled={!name}
          className="inline-flex items-center gap-2 rounded-full bg-[#8C0C3A] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#5D1831] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Share2 className="size-4" aria-hidden />
          {isFr ? "Partager ma présentation" : "Share my introduction"}
        </button>
        <button
          type="button"
          onClick={copyIntroduction}
          disabled={!name}
          className="inline-flex items-center gap-2 rounded-full border border-[#8C0C3A] bg-white px-4 py-2.5 text-sm font-bold text-[#5D1831] transition-colors hover:bg-[#F3E9EC] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {copied ? (
            <Check className="size-4" aria-hidden />
          ) : (
            <Copy className="size-4" aria-hidden />
          )}
          {copied ? (isFr ? "Copié" : "Copied") : isFr ? "Copier" : "Copy"}
        </button>
      </div>
    </section>
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

      {block.id === "networking" && <DelegateConnect isFr={isFr} />}

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
