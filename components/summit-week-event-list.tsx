"use client";

import { CalendarDays, MapPin, Ticket, UserRound } from "lucide-react";
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

        <div className="grid gap-6 lg:grid-cols-2">
          {SUMMIT_WEEK_EVENTS.map((event) => {
            const title = isFr ? event.titleFr : event.titleEn;
            const description = isFr
              ? event.descriptionFr
              : event.descriptionEn;
            const host = isFr ? event.hostFr : event.hostEn;
            const access = isFr ? event.accessFr : event.accessEn;
            const note = isFr ? event.noteFr : event.noteEn;
            const directionsQuery = event.address || event.venue;

            return (
              <article
                key={event.id}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#E8D4DB] bg-white shadow-[0_16px_45px_rgba(93,24,49,0.08)]"
              >
                <div className="flex min-h-52 items-center justify-center bg-[#FAF6F7] p-7">
                  <img
                    src={event.image}
                    alt={host}
                    className="max-h-40 max-w-[85%] object-contain"
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
                    {description}
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
                          {event.venue}
                          {event.address && ` — ${event.address}`}
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Ticket
                        className="mt-0.5 size-4 shrink-0 text-[#8C0C3A]"
                        aria-hidden
                      />
                      <div>
                        <dt className="sr-only">{isFr ? "Accès" : "Access"}</dt>
                        <dd>
                          <span className="font-bold text-[#1E1E1E]">
                            {isFr ? "Accès : " : "Access: "}
                          </span>
                          {access}
                        </dd>
                      </div>
                    </div>
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
            );
          })}
        </div>
      </section>

      <section className="bg-[#FAF6F7] px-5 py-14 sm:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-[#E8D4DB] bg-white shadow-sm">
            <iframe
              title={
                isFr
                  ? "Carte des lieux du Sommet à Winnipeg"
                  : "Map of Summit locations in Winnipeg"
              }
              src="https://www.google.com/maps?q=RBC+Convention+Centre+Winnipeg&z=13&output=embed"
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-[#8C0C3A]">
              {isFr ? "Se déplacer à Winnipeg" : "Getting around Winnipeg"}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-black leading-tight text-[#5D1831] sm:text-4xl">
              {isFr ? "Carte des lieux" : "Venue map"}
            </h2>
            <p className="mt-4 leading-relaxed text-[#1E1E1E]/75">
              {isFr
                ? "La carte est centrée sur le Centre des congrès RBC. Utilisez le bouton Itinéraire de chaque activité pour ouvrir son emplacement exact."
                : "The map is centred on the RBC Convention Centre. Use each event’s Directions button to open its exact location."}
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=RBC+Convention+Centre+Winnipeg"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#5D1831] px-5 py-3 font-bold text-white"
            >
              <MapPin className="size-5" aria-hidden />
              {isFr ? "Ouvrir la carte" : "Open map"}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
