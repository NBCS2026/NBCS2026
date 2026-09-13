"use client";

import { ArrowUpDown, ExternalLink, MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";

function Room({
  children,
  emphasis = false,
}: {
  children: React.ReactNode;
  emphasis?: boolean;
}) {
  return (
    <div
      className={`flex min-h-20 items-center justify-center rounded-xl border-2 px-3 py-4 text-center font-heading text-sm font-black sm:text-base ${
        emphasis
          ? "border-[#5D1831] bg-[#5D1831] text-white"
          : "border-[#D8C1C9] bg-white text-[#5D1831]"
      }`}
    >
      {children}
    </div>
  );
}

export function WayfindingGuide({ locale }: { locale: string }) {
  const isFr = locale === "fr";

  return (
    <section className="bg-[#FAF6F7] px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-[#8C0C3A]">
            {isFr
              ? "Repérage au Centre des congrès RBC"
              : "RBC Convention Centre wayfinding"}
          </p>
          <h2 className="mt-3 font-heading text-[clamp(30px,4vw,52px)] font-black leading-tight text-[#5D1831]">
            {isFr ? "Trouvez rapidement votre salle" : "Find your room quickly"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#1E1E1E]/75 sm:text-lg">
            {isFr
              ? "Ces plans simplifiés mettent en évidence les espaces utilisés par le Sommet. Suivez la signalisation à l’intérieur du Centre des congrès RBC ou demandez l’aide d’un membre du personnel ou de l’équipe bénévole."
              : "These simplified plans highlight the spaces used by the Summit. Follow signage inside the RBC Convention Centre or ask a staff member or volunteer for help locating your room."}
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-3">
          <article className="rounded-3xl border border-[#E8D4DB] bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#8C0C3A]">
                  {isFr ? "Niveau 1" : "Level 1"}
                </p>
                <h3 className="font-heading text-2xl font-black text-[#5D1831]">
                  {isFr ? "Arrivée et inscription" : "Arrival & registration"}
                </h3>
              </div>
              <MapPin className="size-8 text-[#8C0C3A]" aria-hidden />
            </div>
            <div className="rounded-2xl bg-[#FAF6F7] p-4">
              <Room emphasis>
                {isFr
                  ? "ENTRÉE PRINCIPALE · avenue York"
                  : "MAIN ENTRANCE · York Avenue"}
              </Room>
              <div className="mx-auto h-7 w-px border-l-2 border-dashed border-[#8C0C3A]" />
              <div className="grid grid-cols-2 gap-3">
                <Room>
                  {isFr
                    ? "Inscription des commanditaires"
                    : "Sponsor registration"}
                </Room>
                <Room>{isFr ? "Salle des médias" : "Media room"}</Room>
              </div>
              <p className="mt-4 text-center text-xs font-semibold leading-relaxed text-[#5D1831]/75">
                {isFr
                  ? "Les deux services se trouvent au rez-de-chaussée."
                  : "Both services are on the ground floor."}
              </p>
            </div>
          </article>

          <article className="rounded-3xl border border-[#E8D4DB] bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#8C0C3A]">
                  {isFr ? "Niveau 2" : "Level 2"}
                </p>
                <h3 className="font-heading text-2xl font-black text-[#5D1831]">
                  {isFr ? "Séances en petits groupes" : "Breakout sessions"}
                </h3>
              </div>
              <ArrowUpDown className="size-8 text-[#8C0C3A]" aria-hidden />
            </div>
            <div className="rounded-2xl bg-[#FAF6F7] p-4">
              <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-[#5D1831]/70">
                {isFr ? "Corridor principal" : "Main concourse"}
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Room emphasis>2E</Room>
                <Room emphasis>2F</Room>
                <Room emphasis>2G</Room>
                <Room emphasis>2H</Room>
              </div>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <Room>
                  {isFr ? "Théâtre de présentation" : "Presentation Theatre"}
                </Room>
                <Room>{isFr ? "Salle Pan Am" : "Pan Am Room"}</Room>
                <Room>{isFr ? "Suite Millennium" : "Millennium Suite"}</Room>
              </div>
              <div className="mx-auto mt-4 max-w-xs rounded-full border border-dashed border-[#8C0C3A] bg-white px-4 py-2 text-center text-xs font-bold text-[#8C0C3A]">
                {isFr
                  ? "Passerelle vers le bâtiment sud · halls C et D"
                  : "Skywalk to South Building · Halls C and D"}
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-[#E8D4DB] bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#8C0C3A]">
                  {isFr ? "Bâtiment sud" : "South Building"}
                </p>
                <h3 className="font-heading text-2xl font-black text-[#5D1831]">
                  {isFr ? "Halls C et D" : "Halls C & D"}
                </h3>
              </div>
              <ArrowUpDown className="size-8 text-[#8C0C3A]" aria-hidden />
            </div>
            <div className="rounded-2xl bg-[#FAF6F7] p-4">
              <div className="grid gap-3 sm:grid-cols-[1.25fr_0.75fr]">
                <Room emphasis>
                  {isFr
                    ? "HALL C · Plénières · Cérémonies d’ouverture et de clôture"
                    : "HALL C · Plenaries · Opening & Closing Ceremonies"}
                </Room>
                <Room emphasis>
                  {isFr
                    ? "HALL D · Marché · Exposition · Exposants"
                    : "HALL D · Marketplace · Exhibition · Exhibitors"}
                </Room>
              </div>
              <div className="mt-4 rounded-full border border-dashed border-[#8C0C3A] bg-white px-4 py-2 text-center text-xs font-bold text-[#8C0C3A]">
                {isFr
                  ? "Depuis le niveau 2, traversez la passerelle vers le bâtiment sud pour accéder aux halls C et D."
                  : "From Level 2, cross the skywalk to the South Building for Halls C and D."}
              </div>
            </div>
          </article>
        </div>

        <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-relaxed text-[#1E1E1E]/70">
          {isFr
            ? "Ces schémas servent uniquement au repérage et ne sont pas à l’échelle. Consultez les plans officiels du Centre des congrès RBC pour obtenir le plan détaillé du bâtiment."
            : "These diagrams are for orientation only and are not to scale. Refer to the RBC Convention Centre’s official floor plans for the detailed building layout."}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="https://www.wcc.mb.ca/venue/floorplans/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#8C0C3A] bg-white px-5 py-3 font-bold text-[#8C0C3A]"
          >
            <ExternalLink className="size-4" aria-hidden />
            {isFr ? "Plans officiels du Centre" : "Official venue floor plans"}
          </a>
          <Link
            href="/summit-week"
            className="inline-flex items-center gap-2 rounded-full bg-[#5D1831] px-5 py-3 font-bold text-white"
          >
            <MapPin className="size-4" aria-hidden />
            {isFr
              ? "Carte des événements de la semaine"
              : "Summit Week venue map"}
          </Link>
        </div>
      </div>
    </section>
  );
}
