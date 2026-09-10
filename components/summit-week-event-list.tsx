"use client";

import { Fragment } from "react";
import { ExhibitionTitleText } from "./exhibition-title-text";
import { CalendarDays, MapPin, Ticket, UserRound } from "lucide-react";
import { SummitWeekVenueMap } from "@/components/summit-week-venue-map";
import { SUMMIT_WEEK_EVENTS } from "@/data/summit-week-events";

function formatDate(date: string | undefined, locale: string) {
  if (!date) {
    return locale === "fr" ? "Date à confirmer" : "Date to be confirmed";
  }

  return new Intl.DateTimeFormat(locale === "fr" ? "fr-CA" : "en-CA", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}

function formatTime(time: string, locale: string) {
  const [hour, minute] = time.split(":").map(Number);
  if (locale === "fr") {
    return minute === 0
      ? `${hour} h`
      : `${hour} h ${String(minute).padStart(2, "0")}`;
  }

  return new Intl.DateTimeFormat("en-CA", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(2026, 0, 1, hour, minute)));
}

function dateAndTime(
  date: string | undefined,
  startTime: string | undefined,
  endTime: string | undefined,
  locale: string,
) {
  const dateLabel = formatDate(date, locale);
  if (!startTime) {
    return dateLabel;
  }

  const range = endTime
    ? `${formatTime(startTime, locale)}–${formatTime(endTime, locale)}`
    : formatTime(startTime, locale);
  return `${dateLabel} · ${range}`;
}

export function SummitWeekEventList({ locale }: { locale: string }) {
  const isFr = locale === "fr";
  const festivalEvents = SUMMIT_WEEK_EVENTS.filter(event => event.id.startsWith("amfm-"));
  const events = SUMMIT_WEEK_EVENTS.filter(event => !event.id.startsWith("amfm-"));
  const festival = festivalEvents[0];

  return (
    <>
      <section className="mx-auto max-w-[1180px] px-5 py-14 sm:py-20">
        <div className="mb-10 max-w-3xl">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-[#8C0C3A]">
            {isFr ? "Du 14 au 20 septembre 2026" : "September 14–20, 2026"}
          </p>
          <h2 className="mt-3 font-heading text-[clamp(30px,4vw,52px)] font-black leading-tight text-[#1E1E1E]">
            {isFr
              ? "Découvrez Winnipeg pendant la semaine du Sommet"
              : "Experience Winnipeg during Summit Week"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#1E1E1E]/75 sm:text-lg">
            {isFr
              ? "Consultez les activités communautaires, artistiques et culturelles organisées avant et pendant le Sommet. Les heures de début et de fin sont présentées ensemble pour faciliter la planification."
              : "Explore community, arts and cultural events taking place before and during the Summit. Start and end times are shown together to make planning easier."}
          </p>
        </div>

        <article id="week-amfm" aria-labelledby="week-amfm-title" className="my-8 overflow-hidden rounded-2xl border border-[#E8D4DB] bg-white">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="bg-[#FAF6F7] p-6 sm:p-8">
              <img src={festival.image} alt="" className="mb-6 max-h-28 max-w-full object-contain" loading="lazy" />
              <h2 id="week-amfm-title" className="font-heading text-2xl font-black leading-tight text-[#5D1831]">{isFr ? festival.titleFr : festival.titleEn}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#1E1E1E]/78">{isFr ? festival.descriptionFr : festival.descriptionEn}</p>
              <p className="mt-5 text-sm text-[#1E1E1E]/78"><span className="font-bold">{isFr ? "Accès : " : "Access: "}</span>{isFr ? festival.accessFr : festival.accessEn}</p>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-[#5D1831]">{isFr ? festival.noteFr : festival.noteEn}</p>
              <a href={festival.registrationUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center rounded-full bg-[#8C0C3A] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#5D1831]">{isFr ? festival.registrationLabelFr : festival.registrationLabelEn}</a>
            </div>
            <ul className="divide-y divide-[#E8D4DB] px-6 sm:px-8">
              {festivalEvents.map(event => {
                const venue = isFr ? event.venueFr || event.venue : event.venue;
                return <li id={event.id} key={event.id} className="py-5">
                  <h3 className="font-heading text-base font-bold text-[#8C0C3A]">{dateAndTime(event.date, event.startTime, event.endTime, locale)}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#1E1E1E]">{venue}{event.address && ` — ${event.address}`}</p>
                  {event.id === "amfm-september-20" && <p className="mt-2 text-sm font-semibold leading-relaxed text-[#5D1831]">{isFr ? "Les personnes déléguées peuvent y assister après la cérémonie de clôture du Sommet, qui se termine à midi." : "Summit delegates can attend after the closing ceremony ends at noon."}</p>}
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address || venue)}`} target="_blank" rel="noopener noreferrer" aria-label={`${isFr ? "Itinéraire" : "Directions"} — ${formatDate(event.date, locale)} — ${venue}`} className="mt-1 inline-flex min-h-11 items-center text-sm font-semibold text-[#8C0C3A] underline underline-offset-4">{isFr ? "Itinéraire" : "Directions"}</a>
                </li>;
              })}
            </ul>
          </div>
        </article>
        <div className="grid gap-6 lg:grid-cols-2">
          {events.map((event, index) => {
            const title = isFr ? event.titleFr : event.titleEn;
            const description = isFr
              ? event.descriptionFr
              : event.descriptionEn;
            const host = isFr ? event.hostFr : event.hostEn;
            const venue = isFr ? event.venueFr || event.venue : event.venue;
            const access = isFr ? event.accessFr : event.accessEn;
            const note = isFr ? event.noteFr : event.noteEn;
            const directionsQuery = event.address || venue;

            return (
              <Fragment key={event.id}>
              {(index === 0 || events[index - 1].date !== event.date) && <h2 id={`week-${event.date || "tbc"}`} className="scroll-mt-44 pt-8 font-heading text-xl font-bold text-[#5D1831] lg:col-span-2">{formatDate(event.date, locale)}</h2>}
              <article
                key={event.id}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#E8D4DB] bg-white shadow-sm"
              >
                <div className="flex min-h-40 items-center justify-center bg-[#FAF6F7] p-7">
                  <img
                    src={event.image}
                    alt={host}
                    className="max-h-28 max-w-[85%] object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="flex items-start gap-2 font-semibold text-[#8C0C3A]">
                    <CalendarDays
                      className="mt-0.5 size-5 shrink-0"
                      aria-hidden
                    />
                    <span>
                      {dateAndTime(
                        event.date,
                        event.startTime,
                        event.endTime,
                        locale,
                      )}
                    </span>
                  </p>
                  <h3 className="mt-3 font-heading text-2xl font-black leading-tight text-[#5D1831]">
                    {title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#1E1E1E]/78">
                    <ExhibitionTitleText text={description} />
                  </p>
                  <dl className="mt-5 space-y-3 text-sm text-[#1E1E1E]/78">
                    <div className="flex items-start gap-2">
                      <UserRound
                        className="mt-0.5 size-4 shrink-0 text-[#8C0C3A]"
                        aria-hidden
                      />
                      <div>
                        <dt className="sr-only">
                          {isFr ? "Organisme hôte" : "Host"}
                        </dt>
                        <dd>
                          <span className="font-bold text-[#1E1E1E]">
                            {isFr ? "Organisme hôte : " : "Host: "}
                          </span>
                          {host}
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin
                        className="mt-0.5 size-4 shrink-0 text-[#8C0C3A]"
                        aria-hidden
                      />
                      <div>
                        <dt className="sr-only">{isFr ? "Lieu" : "Venue"}</dt>
                        <dd>
                          <span className="font-bold text-[#1E1E1E]">
                            {isFr ? "Lieu : " : "Venue: "}
                          </span>
                          {venue}
                          {event.address && ` — ${event.address}`}
                        </dd>
                      </div>
                    </div>
                    {access && (
                      <div className="flex items-start gap-2">
                        <Ticket
                          className="mt-0.5 size-4 shrink-0 text-[#8C0C3A]"
                          aria-hidden
                        />
                        <div>
                          <dt className="sr-only">
                            {isFr ? "Accès" : "Access"}
                          </dt>
                          <dd>
                            <span className="font-bold text-[#1E1E1E]">
                              {isFr ? "Accès : " : "Access: "}
                            </span>
                            {access}
                          </dd>
                        </div>
                      </div>
                    )}
                  </dl>
                  {note && (
                    <p className="mt-5 rounded-xl bg-[#FAF6F7] px-4 py-3 text-sm font-semibold leading-relaxed text-[#5D1831]">
                      {note}
                    </p>
                  )}
                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    {event.registrationUrl && (
                      <a
                        href={event.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-[#8C0C3A] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#5D1831]"
                      >
                        {isFr
                          ? event.registrationLabelFr || "S’inscrire"
                          : event.registrationLabelEn || "Register"}
                      </a>
                    )}
                    {directionsQuery &&
                      !directionsQuery.toLowerCase().includes("confirm") && (
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(directionsQuery)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-[#8C0C3A] px-5 py-2.5 text-sm font-bold text-[#8C0C3A] transition-colors hover:bg-[#FAF6F7]"
                        >
                          {isFr ? "Itinéraire" : "Directions"}
                        </a>
                      )}
                  </div>
                </div>
              </article>
              </Fragment>
            );
          })}
        </div>
      </section>

      <SummitWeekVenueMap locale={locale} />
    </>
  );
}
