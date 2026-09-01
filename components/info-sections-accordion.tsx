"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type InfoSectionId =
  | "accommodation"
  | "porter"
  | "via-rail"
  | "westjet"
  | "venue";

const SECTION_IDS: InfoSectionId[] = [
  "accommodation",
  "porter",
  "via-rail",
  "westjet",
  "venue",
];

function isInfoSectionId(value: string): value is InfoSectionId {
  return SECTION_IDS.includes(value as InfoSectionId);
}

function AccordionSection({
  id,
  title,
  open,
  onToggle,
  children,
  contentClassName,
}: {
  id: InfoSectionId;
  title: string;
  open: boolean;
  onToggle: (id: InfoSectionId) => void;
  children: ReactNode;
  contentClassName?: string;
}) {
  return (
    <section
      id={id}
      className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 mb-6 sm:mb-8 md:mb-10 scroll-mt-24"
    >
      <div
        className="rounded-2xl sm:rounded-3xl lg:rounded-[40px] overflow-hidden"
        style={{
          background:
            "linear-gradient(163.81deg, #5D1831 15.12%, #1C040D 88.75%)",
          border: "1px solid #5D1831",
        }}
      >
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={() => onToggle(id)}
          className="w-full flex items-center justify-between gap-4 px-4 sm:px-6 md:px-8 lg:px-12 py-5 sm:py-6 md:py-7 text-left cursor-pointer transition-colors hover:bg-white/5"
          id={`${id}-trigger`}
        >
          <h2 className="font-heading text-white text-[clamp(22px,3.2vw,40px)] font-black tracking-widest">
            {title}
          </h2>
          <ChevronDown
            className={cn(
              "size-7 sm:size-8 shrink-0 text-white transition-transform duration-300",
              open && "rotate-180"
            )}
            aria-hidden
          />
        </button>

        <div
          id={`${id}-panel`}
          role="region"
          aria-labelledby={`${id}-trigger`}
          className={cn(
            "grid transition-[grid-template-rows] duration-300 ease-out",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <div
              className={cn(
                "px-4 sm:px-6 md:px-8 lg:px-12 pb-6 sm:pb-8 md:pb-10 lg:pb-12 pt-1",
                contentClassName
              )}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationCard() {
  const tHome = useTranslations("home");

  return (
    <div className="flex flex-col items-start p-4 sm:p-6 md:p-8 lg:p-10 gap-6 md:gap-8 rounded-2xl sm:rounded-3xl lg:rounded-[32px] border border-[#8C0C3A] bg-black/10">
      <h3 className="font-heading text-white text-[clamp(28px,3.5vw,40px)] font-black tracking-widest w-full text-center">
        {tHome("location_title")}
      </h3>
      <div className="w-full flex flex-col gap-6">
        <div className="text-white">
          <h4 className="font-heading text-[clamp(20px,2.5vw,28px)] font-bold mb-2">
            {tHome("location_venue")}
          </h4>
          <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
            {tHome("location_address")}
          </p>
        </div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=375+York+Ave,+Winnipeg,+MB+R3C+3J3,+Canada"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-xl sm:rounded-2xl lg:rounded-[32px] overflow-hidden block cursor-pointer transition-opacity hover:opacity-90"
        >
          <img
            src="/rbc-convention-centre-map.png"
            alt="RBC Convention Centre Winnipeg Location Map - Click to open in Google Maps"
            className="w-full h-auto object-cover"
          />
        </a>
      </div>
    </div>
  );
}

function VenueDetails() {
  const t = useTranslations("info");

  return (
    <>
      <div className="mb-8 lg:mb-10 text-center md:text-left">
        <p className="font-medium text-[15px] lg:text-[21px] text-[#FFB6C8] mb-4 md:mb-6">
          {t("text_one")}
        </p>
        <h3 className="font-bold text-[24px] lg:text-[43px] text-white mb-3">
          {t("text_two")}
        </h3>
        <p className="tracking-widest max-w-[38ch] md:max-w-[86ch] mx-auto md:mx-0 text-[#FFB6C8] font-medium text-[clamp(14px,1.43vw,22px)]">
          {t("post_title")}
        </p>
      </div>
      <div className="space-y-2 mb-7 text-white">
        <p className="font-medium text-[15px] lg:text-[21px] opacity-90">
          <span className="font-bold text-white">{t("text_three")}</span>{" "}
          {t("text_four")}
        </p>
        <p className="font-medium text-[15px] lg:text-[21px] opacity-90">
          <span className="font-bold text-white">{t("text_five")}</span>{" "}
          {t("text_six")}
        </p>
        <p className="font-medium text-[15px] lg:text-[21px] opacity-90">
          <span className="font-bold text-white">{t("text_seven")}</span>{" "}
          {t("text_eight")}
        </p>
      </div>
      <div className="space-y-2 text-white">
        <p className="font-medium text-[15px] lg:text-[21px] text-[#FFB6C8]">
          {t("text_eleven")}
        </p>
        <p className="font-medium text-[15px] lg:text-[21px] opacity-90">
          <span className="font-bold text-white">{t("text_twelve")}</span>{" "}
          {t("text_thirteen")}
        </p>
        <p className="font-medium text-[15px] lg:text-[21px] opacity-90">
          <span className="font-bold text-white">{t("text_fourteen")}</span>{" "}
          {t("text_fifteen")}
        </p>
        <p className="font-medium text-[15px] lg:text-[21px] opacity-90">
          <span className="font-bold text-white">{t("text_sixteen")}</span>{" "}
          {t("text_seventeen")}
        </p>
      </div>
    </>
  );
}

function VenuePanel({ open }: { open: boolean }) {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (!open) {
      setAnimateIn(false);
      return;
    }

    setAnimateIn(false);
    const timer = window.setTimeout(() => setAnimateIn(true), 60);
    return () => window.clearTimeout(timer);
  }, [open]);

  return (
    <>
      {/* Mobile: location first, then details fade in */}
      <div className="md:hidden space-y-6">
        <div
          className={cn(
            "transition-opacity duration-500 ease-out",
            open ? "opacity-100" : "opacity-0"
          )}
        >
          <LocationCard />
        </div>
        <div
          className={cn(
            "transition-opacity duration-700 ease-out delay-300",
            animateIn ? "opacity-100" : "opacity-0"
          )}
        >
          <VenueDetails />
        </div>
      </div>

      {/* Desktop: location appears left, slides right; venue details fade in */}
      <div className="relative hidden md:block min-h-[520px]">
        <div className="grid grid-cols-2 items-start gap-6 lg:gap-10 2xl:gap-12">
          <div
            className={cn(
              "transition-opacity duration-700 ease-out delay-[450ms]",
              animateIn ? "opacity-100" : "opacity-0"
            )}
          >
            <VenueDetails />
          </div>
          <div aria-hidden className="invisible">
            <LocationCard />
          </div>
        </div>

        <div
          className={cn(
            "absolute top-0 left-0 w-[calc(50%-0.75rem)] lg:w-[calc(50%-1.25rem)] 2xl:w-[calc(50%-1.5rem)] transition-all duration-700 ease-out",
            animateIn
              ? "translate-x-[calc(100%+1.5rem)] lg:translate-x-[calc(100%+2.5rem)] 2xl:translate-x-[calc(100%+3rem)]"
              : "translate-x-0"
          )}
        >
          <LocationCard />
        </div>
      </div>
    </>
  );
}

export function InfoSectionsAccordion({ locale }: { locale: string }) {
  const t = useTranslations("info");
  const [activeSection, setActiveSection] = useState<InfoSectionId | null>(
    null
  );

  const scrollSectionIntoView = useCallback((id: InfoSectionId) => {
    // Wait for the expand transition so scroll accounts for open height
    window.setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      // Center when it fits; otherwise pin near the top so the title stays in view
      const targetTop =
        rect.height <= viewportHeight * 0.9
          ? window.scrollY + rect.top - (viewportHeight - rect.height) / 2
          : window.scrollY + rect.top - viewportHeight * 0.12;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: "smooth",
      });
    }, 320);
  }, []);

  const openFromHash = useCallback(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!isInfoSectionId(hash)) return;

    setActiveSection(hash);
    scrollSectionIntoView(hash);
  }, [scrollSectionIntoView]);

  useEffect(() => {
    // Defer so client navigation hash is available after mount
    const immediate = window.setTimeout(openFromHash, 0);
    window.addEventListener("hashchange", openFromHash);
    return () => {
      window.clearTimeout(immediate);
      window.removeEventListener("hashchange", openFromHash);
    };
  }, [openFromHash]);

  const toggleSection = (id: InfoSectionId) => {
    setActiveSection((prev) => {
      const next = prev === id ? null : id;
      if (next) scrollSectionIntoView(next);
      return next;
    });
  };

  return (
    <div className="pb-8 sm:pb-12 md:pb-16 lg:pb-24">
      <div className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 mb-10 sm:mb-12 md:mb-16 text-center">
        <p className="font-bold text-[24px] lg:text-[43px] mb-4 sm:mb-6">
          {t("intro_heading_one")}{" "}
          <span className="text-light-red">{t("intro_heading_two")}</span>
        </p>
        <p className="tracking-[0.06em] max-w-[38ch] md:max-w-[72ch] mx-auto text-light-red font-medium text-[clamp(14px,1.43vw,22px)] leading-relaxed mb-4 sm:mb-5">
          {t("post_title")}
        </p>
        <p className="max-w-[38ch] md:max-w-[68ch] mx-auto text-[#1E1E1E]/80 font-body font-medium text-[clamp(15px,1.35vw,18px)] leading-relaxed mb-3">
          {t("intro_body")}
        </p>
        <p className="max-w-[38ch] md:max-w-[60ch] mx-auto text-[#5D1831]/70 font-body text-[13px] sm:text-[14px] leading-relaxed">
          {t("intro_hint")}
        </p>
      </div>

      <AccordionSection
        id="accommodation"
        title={t("delta_title")}
        open={activeSection === "accommodation"}
        onToggle={toggleSection}
      >
        <div className="w-full flex flex-col gap-8 relative">
          <div className="w-full text-white space-y-4 border border-[#8C0C3A] rounded-2xl sm:rounded-3xl lg:rounded-[32px] px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 md:py-7 lg:py-8 bg-black/10">
            {locale === "fr" ? (
              <>
                <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
                  Nous invitons tous les participants au Sommet pancanadien des
                  communautés noires à séjourner au Delta Hotels Winnipeg, notre
                  hôtel officiel pour le 5e Sommet pancanadien des communautés
                  noires !
                </p>
                <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
                  Situé au cœur du centre-ville de Winnipeg, le Delta offre un
                  hébergement confortable et pratique, à quelques pas des
                  activités du Sommet. Rejoignez-nous dans ce cadre idéal pour
                  rencontrer les autres participants tout au long de la semaine.
                </p>
                <div className="mt-4">
                  <h3 className="font-heading text-[clamp(20px,2.5vw,28px)] font-bold mb-2">
                    Adresse de l&apos;hôtel :
                  </h3>
                  <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
                    350 St Mary Ave,
                    <br />
                    Winnipeg, MB R3C 3J2
                  </p>
                </div>
                <div className="mt-6">
                  <h3 className="font-heading text-[clamp(20px,2.5vw,28px)] font-bold mb-2">
                    Tarif de groupe préférentiel
                  </h3>
                  <p className="text-[clamp(16px,1.8vw,20px)] opacity-90 mb-2">
                    Un tarif de groupe spécial est proposé exclusivement aux
                    participants au Sommet, dans la limite des chambres
                    disponibles.
                  </p>
                  <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
                    <span className="font-bold">Tarif de groupe :</span>{" "}
                    229&nbsp;$ CAD par nuit
                    <br />
                    <span className="font-bold">Dates du séjour :</span> du 15
                    au 22 septembre 2026
                    <br />
                    <span className="font-bold">
                      Date limite de réservation :
                    </span>{" "}
                    vendredi 21 août 2026
                  </p>
                  <p className="text-[clamp(16px,1.8vw,20px)] opacity-90 mt-4">
                    Nous encourageons nos clients à réserver tôt afin de
                    profiter de ce tarif spécial et de séjourner au cœur de
                    l&apos;expérience du Sommet.
                  </p>
                </div>
                <div className="mt-6 flex flex-col items-start gap-3">
                  <Button
                    onClick={() =>
                      window.open(
                        "https://www.marriott.com/event-reservations/reservation-link.mi?id=1747239523588&key=GRP&guestreslink2=true&app=resvlink",
                        "_blank"
                      )
                    }
                    className="bg-[#8C0C3A] hover:bg-[#5D1831] text-white border border-[#8C0C3A] transition-colors cursor-pointer rounded-full h-[50px] px-8 py-6 text-[18px] font-semibold"
                  >
                    Réservez ici
                  </Button>
                  <p className="text-white text-[14px] opacity-90">
                    ou composez le 1-800-268-1133 et mentionnez le code de
                    bloc&nbsp;: BLC
                  </p>
                </div>
              </>
            ) : (
              <>
                <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
                  We invite all National Black Canadians Summit attendees to
                  stay at Delta Hotels Winnipeg, our official supporting hotel
                  for the 5th National Black Canadians Summit!
                </p>
                <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
                  Located in the heart of downtown Winnipeg, the Delta offers a
                  comfortable and convenient place to stay, just steps away from
                  Summit activities. Join us in this ideal setting to connect
                  with fellow attendees throughout the week.
                </p>
                <div className="mt-4">
                  <h3 className="font-heading text-[clamp(20px,2.5vw,28px)] font-bold mb-2">
                    Hotel Address:
                  </h3>
                  <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
                    350 St Mary Ave,
                    <br />
                    Winnipeg, MB R3C 3J2
                  </p>
                </div>
                <div className="mt-6">
                  <h3 className="font-heading text-[clamp(20px,2.5vw,28px)] font-bold mb-2">
                    Preferred Group Rate
                  </h3>
                  <p className="text-[clamp(16px,1.8vw,20px)] opacity-90 mb-2">
                    A special group rate is available exclusively for Summit
                    participants, while rooms last.
                  </p>
                  <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
                    <span className="font-bold">Group rate:</span> $229 CAD per
                    night
                    <br />
                    <span className="font-bold">Stay dates:</span> September
                    15–22, 2026
                    <br />
                    <span className="font-bold">Booking deadline:</span> Friday,
                    August 21, 2026
                  </p>
                  <p className="text-[clamp(16px,1.8vw,20px)] opacity-90 mt-4">
                    We encourage our guests to book early to take advantage of
                    this special rate and to stay close to the heart of the
                    Summit experience.
                  </p>
                </div>
                <div className="mt-6 flex flex-col items-start gap-3">
                  <Button
                    onClick={() =>
                      window.open(
                        "https://www.marriott.com/event-reservations/reservation-link.mi?id=1747239523588&key=GRP&guestreslink2=true&app=resvlink",
                        "_blank"
                      )
                    }
                    className="bg-[#8C0C3A] hover:bg-[#5D1831] text-white border border-[#8C0C3A] transition-colors cursor-pointer rounded-full h-[50px] px-8 py-6 text-[18px] font-semibold"
                  >
                    Book Now
                  </Button>
                  <p className="text-white text-[14px] opacity-90">
                    or call 1-800-268-1133 and reference block code: BLC
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl lg:rounded-[24px] overflow-hidden"
              >
                <Image
                  src={`/delta-hotel-${num}.png`}
                  alt={`Delta Hotels by Marriott Winnipeg - Image ${num}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end pt-2">
            <Image
              src="/delta-hotels-logo.png"
              alt="Delta Hotels by Marriott Winnipeg Logo"
              width={120}
              height={72}
              className="object-contain opacity-90"
            />
          </div>
        </div>
      </AccordionSection>

      <AccordionSection
        id="porter"
        title={t("porter_title")}
        open={activeSection === "porter"}
        onToggle={toggleSection}
      >
        <div className="w-full border border-[#8C0C3A] rounded-2xl sm:rounded-3xl lg:rounded-[32px] px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 md:py-7 lg:py-8 bg-black/10 space-y-7 text-white">
          <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
            {t("porter_intro")}
          </p>
          <div className="space-y-1 text-[clamp(16px,1.8vw,20px)] opacity-90">
            <p>{t("porter_booking_period")}</p>
            <p className="mt-2 font-bold">{t("porter_travel_dates_label")}</p>
            <p>{t("porter_travel_to")}</p>
            <p>{t("porter_travel_from")}</p>
          </div>
          <div className="space-y-1 text-[clamp(16px,1.8vw,20px)] opacity-90">
            <p className="font-bold">{t("porter_how_title")}</p>
            <p>
              {t("porter_online_prefix")}
              <a
                href={
                  locale === "fr"
                    ? "https://www.flyporter.com/fr-ca/?promocode=NBCS26"
                    : "https://www.flyporter.com/en-ca/?promocode=NBCS26"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 text-white hover:opacity-90"
              >
                {t("porter_online_link")}
              </a>
            </p>
            <p>{t("porter_agent")}</p>
          </div>
          <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
            {t("porter_body_one")}
          </p>
          <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
            {t("porter_body_two")}
          </p>
          <p className="text-[clamp(16px,1.8vw,20px)] opacity-90 font-semibold">
            {t("porter_cta")}
          </p>
        </div>
      </AccordionSection>

      <AccordionSection
        id="via-rail"
        title={t("via_title")}
        open={activeSection === "via-rail"}
        onToggle={toggleSection}
      >
        <div className="w-full border border-[#8C0C3A] rounded-2xl sm:rounded-3xl lg:rounded-[32px] px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 md:py-7 lg:py-8 bg-black/10 space-y-7 text-white">
          <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
            {t("via_intro")}
          </p>
          <div className="space-y-1 text-[clamp(16px,1.8vw,20px)] opacity-90">
            <p>{t("via_travel_dates")}</p>
            <p>{t("via_stations")}</p>
          </div>
          <div className="space-y-1 text-[clamp(16px,1.8vw,20px)] opacity-90">
            <p className="font-bold">{t("via_how_title")}</p>
            <p>{t("via_how_body")}</p>
          </div>
          <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
            {t("via_routes_prefix")}
            <a
              href="https://www.viarail.ca/en"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 text-white hover:opacity-90"
            >
              {t("via_routes_link")}
            </a>
          </p>
        </div>
      </AccordionSection>

      <AccordionSection
        id="westjet"
        title={t("westjet_title")}
        open={activeSection === "westjet"}
        onToggle={toggleSection}
      >
        <div className="w-full border border-[#8C0C3A] rounded-2xl sm:rounded-3xl lg:rounded-[32px] px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 md:py-7 lg:py-8 bg-black/10 space-y-7 text-white">
          <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
            {t("westjet_intro")}
          </p>
          <div className="space-y-1 text-[clamp(16px,1.8vw,20px)] opacity-90">
            <p className="font-bold">{t("westjet_discount_title")}</p>
            <p>{t("westjet_discount_econo")}</p>
            <p>{t("westjet_discount_econoflex")}</p>
          </div>
          <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
            {t("westjet_validity")}
          </p>
          <div className="space-y-1 text-[clamp(16px,1.8vw,20px)] opacity-90">
            <p className="font-bold">{t("westjet_travel_dates_label")}</p>
            <p>{t("westjet_travel_dates")}</p>
            <p className="mt-2 font-bold">{t("westjet_destination_label")}</p>
            <p>{t("westjet_destination")}</p>
          </div>
          <div className="space-y-1 text-[clamp(16px,1.8vw,20px)] opacity-90">
            <p className="font-bold">{t("westjet_how_title")}</p>
            <p>
              {t("westjet_how_body")}{" "}
              <a
                href="https://www.westjet.com/en-ca/flights/conventions?p=1&discount=enter.code"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 text-white hover:opacity-90"
              >
                {t("westjet_book_link")}
              </a>
            </p>
            <p className="mt-2 font-semibold">{t("westjet_coupon")}</p>
            <p className="font-semibold">{t("westjet_gds")}</p>
          </div>
          <p className="text-[clamp(15px,1.6vw,18px)] opacity-80">
            {t("westjet_note")}
          </p>
        </div>
      </AccordionSection>

      <AccordionSection
        id="venue"
        title={t("venue_title")}
        open={activeSection === "venue"}
        onToggle={toggleSection}
        contentClassName="pt-4"
      >
        <VenuePanel open={activeSection === "venue"} />
      </AccordionSection>
    </div>
  );
}
