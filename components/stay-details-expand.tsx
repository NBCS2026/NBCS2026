"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type StayTone = "light" | "dark";
type SectionId =
  | "accommodation"
  | "porter"
  | "via"
  | "westjet"
  | "venue";

type StayDetailsExpandProps = {
  isFr: boolean;
  tone?: StayTone;
  className?: string;
  align?: "center" | "left";
  showHeading?: boolean;
};

const HOTEL_BOOK_URL =
  "https://www.marriott.com/event-reservations/reservation-link.mi?id=1747239523588&key=GRP&guestreslink2=true&app=resvlink";
const PORTER_URL_EN = "https://www.flyporter.com/en-ca/?promocode=NBCS26";
const PORTER_URL_FR = "https://www.flyporter.com/fr-ca/?promocode=NBCS26";
const VIA_URL = "https://www.viarail.ca/en";
const WESTJET_URL =
  "https://www.westjet.com/en-ca/flights/conventions?p=1&discount=enter.code";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=375+York+Ave,+Winnipeg,+MB+R3C+3J3,+Canada";

function CtaButton({
  href,
  children,
  isDark,
  external = true,
}: {
  href: string;
  children: ReactNode;
  isDark: boolean;
  external?: boolean;
}) {
  const className = cn(
    "inline-flex items-center justify-center rounded-full h-11 px-6 text-[15px] sm:text-[16px] font-semibold transition-colors cursor-pointer w-full sm:w-auto",
    isDark
      ? "bg-white text-[#5D1831] hover:bg-[#F5E9EE] border border-white"
      : "bg-[#8C0C3A] text-white hover:bg-[#5D1831] border border-[#8C0C3A]"
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function SectionCard({
  id,
  title,
  open,
  onToggle,
  isDark,
  children,
}: {
  id: SectionId;
  title: string;
  open: boolean;
  onToggle: (id: SectionId) => void;
  isDark: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border overflow-hidden",
        isDark ? "border-white/20 bg-white/5" : "border-[#E8D4DB] bg-white"
      )}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => onToggle(id)}
        className={cn(
          "w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left font-heading font-bold text-[15px] sm:text-[17px] tracking-wide cursor-pointer transition-colors",
          isDark
            ? "text-[#FFD6E0] hover:bg-white/5"
            : "text-[#5D1831] hover:bg-[#FAF6F7]"
        )}
      >
        <span>{title}</span>
        <ChevronDown
          className={cn(
            "size-5 shrink-0 transition-transform duration-200",
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
          <div
            className={cn(
              "px-4 pb-4 pt-1 space-y-3 border-t",
              isDark ? "border-white/15" : "border-[#E8D4DB]"
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function BodyText({
  isDark,
  children,
}: {
  isDark: boolean;
  children: ReactNode;
}) {
  return (
    <p
      className={cn(
        "font-body text-[14px] sm:text-[15px] font-medium leading-relaxed",
        isDark ? "text-[#F5E9EE]" : "text-[#1E1E1EB2]"
      )}
    >
      {children}
    </p>
  );
}

function PageLink({
  href,
  isDark,
  children,
}: {
  href: string;
  isDark: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-block underline underline-offset-2 font-semibold text-[13px] sm:text-[14px]",
        isDark ? "text-[#FFB6C8]" : "text-[#8C0C3A]"
      )}
    >
      {children}
    </Link>
  );
}

export function StayDetailsExpand({
  isFr,
  tone = "light",
  className,
  align = "center",
  showHeading = false,
}: StayDetailsExpandProps) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId | null>(
    "accommodation"
  );
  const isDark = tone === "dark";
  const textAlign = align === "left" ? "lg:text-left" : "text-center";
  const itemsAlign = align === "left" ? "lg:items-start" : "items-center";

  const toggleSection = (id: SectionId) => {
    setActiveSection((prev) => (prev === id ? null : id));
  };

  return (
    <div className={cn("space-y-4", className)}>
      {showHeading && (
        <p
          className={cn(
            "font-heading text-[18px] sm:text-[22px] font-bold tracking-wide",
            isDark ? "text-[#FFD6E0]" : "text-[#5D1831]",
            textAlign
          )}
        >
          {isFr ? "Hébergement et lieu" : "Accommodation & Location"}
        </p>
      )}

      <p
        className={cn(
          "font-body text-[15px] lg:text-[18px] font-medium leading-relaxed",
          isDark
            ? "text-[#F8F0F3] [&>span]:text-[#FFB6C8]"
            : "text-[#1E1E1EB2] [&>span]:text-[#8C0C3A]",
          textAlign
        )}
      >
        {isFr ? (
          <>
            Consultez les détails{" "}
            <span className="font-semibold">Hébergement et transport</span> pour
            trouver des hôtels recommandés, des conseils de voyage et tout ce
            dont vous avez besoin pour planifier votre séjour.
          </>
        ) : (
          <>
            Explore{" "}
            <span className="font-semibold">
              accommodation and transportation
            </span>{" "}
            details to find recommended hotels, travel tips, and everything you
            need to plan your stay.
          </>
        )}
      </p>

      <div className={cn("flex flex-col gap-3", itemsAlign)}>
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className={cn(
            "inline-flex items-center justify-center gap-2 font-semibold underline underline-offset-4 transition-opacity hover:opacity-80 cursor-pointer text-[15px] lg:text-[17px]",
            isDark ? "text-[#FFB6C8]" : "text-[#8C0C3A]"
          )}
        >
          {open
            ? isFr
              ? "Afficher moins"
              : "Show less"
            : isFr
              ? "En savoir plus sur l'hébergement et le transport"
              : "Learn more about accommodation & transportation"}
          <ChevronDown
            className={cn(
              "size-5 transition-transform duration-200",
              open && "rotate-180"
            )}
          />
        </button>

        <div
          className={cn(
            "grid w-full transition-[grid-template-rows] duration-300 ease-out",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <div
              className={cn(
                "mt-2 space-y-3 rounded-xl px-3 sm:px-4 py-4 text-left",
                isDark
                  ? "bg-white/10 border border-white/20"
                  : "bg-[#FAF6F7] border border-[#E8D4DB]"
              )}
            >
              <p
                className={cn(
                  "font-body text-[13px] sm:text-[14px] font-medium px-1",
                  isDark ? "text-[#FFD6E0]" : "text-[#5D1831]"
                )}
              >
                {isFr
                  ? "Choisissez une section pour voir les détails et réserver :"
                  : "Choose a section to view details and book:"}
              </p>

              {/* Accommodation */}
              <SectionCard
                id="accommodation"
                title={
                  isFr
                    ? "Hébergement recommandé — Delta Hotels"
                    : "Recommended Accommodation — Delta Hotels"
                }
                open={activeSection === "accommodation"}
                onToggle={toggleSection}
                isDark={isDark}
              >
                <BodyText isDark={isDark}>
                  {isFr
                    ? "Hôtel officiel du 5e Sommet pancanadien des communautés noires, au centre-ville de Winnipeg, à quelques pas des activités du Sommet."
                    : "Official supporting hotel for the 5th National Black Canadians Summit — downtown Winnipeg, steps from Summit activities."}
                </BodyText>
                <BodyText isDark={isDark}>
                  <span className="font-bold">
                    {isFr ? "Adresse :" : "Address:"}
                  </span>{" "}
                  350 St Mary Ave, Winnipeg, MB R3C 3J2
                </BodyText>
                <BodyText isDark={isDark}>
                  <span className="font-bold">
                    {isFr ? "Tarif de groupe :" : "Group rate:"}
                  </span>{" "}
                  $229 CAD {isFr ? "par nuit" : "per night"}
                  <br />
                  <span className="font-bold">
                    {isFr ? "Dates du séjour :" : "Stay dates:"}
                  </span>{" "}
                  {isFr ? "du 15 au 22 septembre 2026" : "September 15–22, 2026"}
                  <br />
                  <span className="font-bold">
                    {isFr ? "Date limite :" : "Booking deadline:"}
                  </span>{" "}
                  {isFr ? "vendredi 21 août 2026" : "Friday, August 21, 2026"}
                  <br />
                  <span className="font-bold">
                    {isFr ? "Code de bloc :" : "Block code:"}
                  </span>{" "}
                  BLC ({isFr ? "ou" : "or"} 1-800-268-1133)
                </BodyText>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1">
                  <CtaButton href={HOTEL_BOOK_URL} isDark={isDark}>
                    {isFr ? "Réserver l'hôtel" : "Book hotel"}
                  </CtaButton>
                </div>
                <PageLink href="/info#accommodation" isDark={isDark}>
                  {isFr
                    ? "Voir la section complète sur la page Hébergement"
                    : "View full section on Accommodation page"}
                </PageLink>
              </SectionCard>

              {/* Porter */}
              <SectionCard
                id="porter"
                title={
                  isFr
                    ? "Porter Airlines — Envolez-Vous Pour Le SPCN 2026"
                    : "Porter Airlines — Fly To The 2026 NBCS"
                }
                open={activeSection === "porter"}
                onToggle={toggleSection}
                isDark={isDark}
              >
                <BodyText isDark={isDark}>
                  {isFr
                    ? "Jusqu'à 15 % de réduction sur les tarifs de base disponibles (sauf la classe la plus basse lors des ventes publiques)."
                    : "Up to 15% off available base fares (except the lowest class fare during public seat sales)."}
                </BodyText>
                <BodyText isDark={isDark}>
                  <span className="font-bold">
                    {isFr ? "Période de réservation :" : "Booking period:"}
                  </span>{" "}
                  {isFr
                    ? "du 25 février au 23 septembre 2026"
                    : "February 25 – September 23, 2026"}
                  <br />
                  <span className="font-bold">
                    {isFr ? "Vers Winnipeg (YWG) :" : "To Winnipeg (YWG):"}
                  </span>{" "}
                  {isFr ? "du 15 au 20 septembre 2026" : "September 15–20, 2026"}
                  <br />
                  <span className="font-bold">
                    {isFr ? "Depuis Winnipeg (YWG) :" : "From Winnipeg (YWG):"}
                  </span>{" "}
                  {isFr ? "du 18 au 23 septembre 2026" : "September 18–23, 2026"}
                  <br />
                  <span className="font-bold">
                    {isFr ? "Code promo :" : "Promo code:"}
                  </span>{" "}
                  NBCS26
                </BodyText>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1">
                  <CtaButton
                    href={isFr ? PORTER_URL_FR : PORTER_URL_EN}
                    isDark={isDark}
                  >
                    {isFr ? "Réserver avec Porter" : "Book with Porter"}
                  </CtaButton>
                </div>
                <PageLink href="/info#porter" isDark={isDark}>
                  {isFr
                    ? "Voir la section complète sur la page Hébergement"
                    : "View full section on Accommodation page"}
                </PageLink>
              </SectionCard>

              {/* VIA Rail */}
              <SectionCard
                id="via"
                title={
                  isFr
                    ? "Rabais VIA Rail pour le Sommet pancanadien des communautés noires"
                    : "VIA Rail Discount"
                }
                open={activeSection === "via"}
                onToggle={toggleSection}
                isDark={isDark}
              >
                <BodyText isDark={isDark}>
                  {isFr
                    ? "VIA Rail Canada est heureuse de vous aider à vous rendre au Sommet pancanadien des communautés noires et à en revenir en vous proposant une réduction de 10 % sur le meilleur tarif disponible."
                    : "10% off the best available fare for travel to and from the Summit."}
                </BodyText>
                <BodyText isDark={isDark}>
                  <span className="font-bold">
                    {isFr ? "Dates de voyage :" : "Travel dates:"}
                  </span>{" "}
                  {isFr
                    ? "du 10 au 30 septembre 2026"
                    : "September 10th — 30th, 2026"}
                  <br />
                  {isFr
                    ? "Toutes les gares du réseau VIA vers Winnipeg et retour."
                    : "All stations throughout VIA system to Winnipeg and return."}
                  <br />
                  <span className="font-bold">
                    {isFr ? "Comment réserver :" : "How to book:"}
                  </span>{" "}
                  {isFr
                    ? "sélectionnez « tarifs conférence » dans le champ du code de réduction et entrez le code 16142 pour bénéficier dès aujourd'hui de votre réduction de 10 %."
                    : 'select "conference fares" and enter code 16142.'}
                </BodyText>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1">
                  <CtaButton href={VIA_URL} isDark={isDark}>
                    {isFr ? "Réserver avec VIA Rail" : "Book with VIA Rail"}
                  </CtaButton>
                </div>
                <PageLink href="/info#via-rail" isDark={isDark}>
                  {isFr
                    ? "Voir la section complète sur la page Hébergement"
                    : "View full section on Accommodation page"}
                </PageLink>
              </SectionCard>

              {/* WestJet */}
              <SectionCard
                id="westjet"
                title={
                  isFr
                    ? "Économisez sur votre vol vers Winnipeg avec WestJet"
                    : "WestJet Flight Discount"
                }
                open={activeSection === "westjet"}
                onToggle={toggleSection}
                isDark={isDark}
              >
                <BodyText isDark={isDark}>
                  {isFr
                    ? "WestJet a le plaisir d'offrir des réductions sur ses tarifs aériens aux délégués participant au 5e Sommet pancanadien des communautés noires à Winnipeg."
                    : "Preferred airfare discounts for Summit delegates (within Canada and Canada–U.S.)."}
                </BodyText>
                <BodyText isDark={isDark}>
                  <span className="font-bold">
                    {isFr ? "Offre promotionnelle :" : "Discount offer:"}
                  </span>
                  <br />
                  {isFr
                    ? "5 % de réduction sur les tarifs de base Econo*"
                    : "5% off Econo base fares*"}
                  <br />
                  {isFr
                    ? "10 % de réduction sur les tarifs de base EconoFlex et Premium"
                    : "10% off EconoFlex and Premium base fares"}
                  <br />
                  {isFr
                    ? "Cette offre est valable pour les voyages à l'intérieur du Canada et entre le Canada et les États-Unis."
                    : "This offer is valid for travel within Canada and between Canada and the United States."}
                  <br />
                  <span className="font-bold">
                    {isFr ? "Dates de voyage :" : "Travel dates:"}
                  </span>{" "}
                  {isFr
                    ? "Du 11 au 27 septembre 2026"
                    : "September 11–27, 2026"}
                  <br />
                  <span className="font-bold">
                    {isFr ? "Destination :" : "Destination:"}
                  </span>{" "}
                  Winnipeg, Manitoba
                  <br />
                  <span className="font-bold">
                    {isFr ? "Code de réduction :" : "Coupon code:"}
                  </span>{" "}
                  5C9Q3WQ
                  <br />
                  <span className="font-bold">
                    {isFr
                      ? "Code promotionnel GDS pour les agents de voyage :"
                      : "Travel agent GDS code:"}
                  </span>{" "}
                  YBE62
                </BodyText>
                <BodyText isDark={isDark}>
                  {isFr
                    ? "*Veuillez noter que la réduction ne s'applique pas aux tarifs UltraBasic ou en classe Affaires. Les taxes, frais et autres charges sont en sus. D'autres conditions générales peuvent s'appliquer."
                    : "*Does not apply to UltraBasic or Business class. Taxes and fees extra."}
                </BodyText>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1">
                  <CtaButton href={WESTJET_URL} isDark={isDark}>
                    {isFr ? "Réserver avec WestJet" : "Book with WestJet"}
                  </CtaButton>
                </div>
                <PageLink href="/info#westjet" isDark={isDark}>
                  {isFr
                    ? "Voir la section complète sur la page Hébergement"
                    : "View full section on Accommodation page"}
                </PageLink>
              </SectionCard>

              {/* Venue + Map */}
              <SectionCard
                id="venue"
                title={
                  isFr
                    ? "Lieu, carte et transport"
                    : "Venue, Map & Transportation"
                }
                open={activeSection === "venue"}
                onToggle={toggleSection}
                isDark={isDark}
              >
                <BodyText isDark={isDark}>
                  <span className="font-bold">
                    {isFr ? "Lieu :" : "Venue:"}
                  </span>{" "}
                  RBC Convention Centre Winnipeg
                  <br />
                  <span className="font-bold">
                    {isFr ? "Adresse :" : "Address:"}
                  </span>{" "}
                  375 York Ave, Winnipeg, MB R3C 3J3
                  <br />
                  <span className="font-bold">
                    {isFr ? "Dates :" : "Date:"}
                  </span>{" "}
                  {isFr
                    ? "18 – 20 septembre 2026"
                    : "September 18 – 20, 2026"}
                </BodyText>
                <BodyText isDark={isDark}>
                  <span className="font-bold">
                    {isFr ? "Gare la plus proche :" : "Nearest station:"}
                  </span>{" "}
                  {isFr
                    ? "Service VIA Rail vers la gare Union de Winnipeg"
                    : "VIA Rail service to Winnipeg Union Station"}
                  <br />
                  <span className="font-bold">
                    {isFr ? "Aéroport :" : "Closest airport:"}
                  </span>{" "}
                  {isFr
                    ? "Aéroport international James Armstrong Richardson de Winnipeg"
                    : "Winnipeg James Armstrong Richardson International Airport"}
                  <br />
                  <span className="font-bold">
                    {isFr ? "Transport en commun :" : "Closest transit:"}
                  </span>{" "}
                  {isFr
                    ? "Broadway en direction ouest à Edmonton"
                    : "Westbound Broadway at Edmonton"}
                </BodyText>
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl overflow-hidden border border-[#8C0C3A]/30 hover:opacity-90 transition-opacity"
                >
                  <img
                    src="/rbc-convention-centre-map.png"
                    alt={
                      isFr
                        ? "Carte du RBC Convention Centre Winnipeg"
                        : "RBC Convention Centre Winnipeg map"
                    }
                    className="w-full h-auto object-cover"
                  />
                </a>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1">
                  <CtaButton href={MAP_URL} isDark={isDark}>
                    {isFr ? "Ouvrir dans Google Maps" : "Open in Google Maps"}
                  </CtaButton>
                </div>
                <PageLink href="/info#venue" isDark={isDark}>
                  {isFr
                    ? "Voir la section complète sur la page Hébergement"
                    : "View full section on Accommodation page"}
                </PageLink>
              </SectionCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
