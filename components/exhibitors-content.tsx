"use client";

import { AboutSectionNav } from "./about-section-nav";
import { BiographyDisclosure } from "./biography-disclosure";
import { ExhibitionTitleText } from "./exhibition-title-text";
import { CalendarDays, ExternalLink, MapPin } from "lucide-react";
import {
  EXHIBITION_ARTISTS,
  EXHIBITORS,
  MARKETPLACE_VENDORS,
} from "@/data/exhibitors";

const CURATORS = [
  {
    name: "Gabriel Bell-Gam",
    roleEn: "Curator, Together in Motion 2026 Exhibition",
    roleFr: "Commissaire de l’exposition En mouvement ensemble 2026",
    bioEn:
      "Gabriel Bell-Gam is a Nigerian-Canadian curator and cultural heritage practitioner based in Winnipeg. His practice sits at the intersection of contemporary art, cultural memory, archives and digital technology, with a focus on Black and African cultural heritage, representation and belonging.",
    bioFr:
      "Gabriel Bell-Gam est un commissaire et praticien du patrimoine culturel nigérian-canadien établi à Winnipeg. Sa pratique se situe au croisement de l’art contemporain, de la mémoire culturelle, des archives et des technologies numériques, avec un intérêt particulier pour le patrimoine culturel noir et africain, la représentation et l’appartenance.",
    image: "/gabriel-bell-gam.jpg",
  },
  {
    name: "Allison Yearwood",
    roleEn: "Senior Advisor and Mentor",
    roleFr: "Conseillère principale et mentore",
    bioEn:
      "Allison Yearwood is a cultural strategist, curator, executive leader and founder of BREATH. For the Summit exhibition, she supports curator Gabriel Bell-Gam and the Graffiti Art Programming production team in bringing the exhibition’s artistic vision into public life.",
    bioFr:
      "Allison Yearwood est stratège culturelle, commissaire, dirigeante et fondatrice de BREATH. Pour l’exposition du Sommet, elle accompagne le commissaire Gabriel Bell-Gam et l’équipe de production de Graffiti Art Programming afin de donner vie à la vision artistique de l’exposition.",
    image: "/allison-yearwood.jpg",
  },
];

function SectionHeading({
  title,
  description,
  dark = false,
}: {
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <h2
        className={`font-heading text-[clamp(30px,4vw,52px)] font-black leading-tight ${dark ? "text-white" : "text-[#5D1831]"}`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-white/80" : "text-[#1E1E1E]/75"}`}
      >
        <ExhibitionTitleText text={description} />
      </p>
    </div>
  );
}

export function ExhibitorsContent({ locale }: { locale: string }) {
  const isFr = locale === "fr";

  return (
    <>
      <AboutSectionNav label={isFr ? "Navigation des expositions et du marché" : "Exhibitors and marketplace navigation"} sections={[
        ["youth-art-exhibition", isFr ? "Exposition d’art jeunesse" : "Youth Art Exhibition"],
        ["exhibitors", isFr ? "Exposants" : "Exhibitors"],
        ["marketplace", isFr ? "Marché" : "Marketplace"],
      ]} />
      <section tabIndex={-1} id="youth-art-exhibition" className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            title={isFr ? "Exposition d’art jeunesse" : "Youth Art Exhibition"}
            description={
              isFr
                ? "En mouvement ensemble 2026 réunit des artistes et des organismes qui explorent l’identité, la mémoire, la migration, la résilience et l’appartenance. L’exposition est présentée au hall D du 18 au 20 septembre."
                : "Together in Motion 2026 brings artists and organizations together to explore identity, memory, migration, resilience and belonging. The exhibition is presented in Hall D from September 18–20."
            }
          />

          <div className="mb-10 grid gap-6 rounded-3xl border border-[#E8D4DB] bg-[#FAF6F7] p-6 sm:p-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div className="flex min-h-36 items-center justify-center rounded-2xl bg-white p-6">
              <img
                src="/graffiti-art-programming-logo.jpg"
                alt="Graffiti Art Programming Inc."
                className="max-h-28 w-full object-contain"
              />
            </div>
            <div>
              <p className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-[#8C0C3A]">
                {isFr ? "Partenaire principal" : "Lead partner"}
              </p>
              <h3 className="mt-2 font-heading text-2xl font-black text-[#5D1831]">
                Graffiti Art Programming Inc.
              </h3>
              <p className="mt-3 leading-relaxed text-[#1E1E1E]/75">
                <ExhibitionTitleText text={isFr
                  ? "Graffiti Art Programming accompagne l’équipe de commissariat et de production de l’exposition En mouvement ensemble 2026."
                  : "Graffiti Art Programming supports the curatorial and production team behind the Together in Motion 2026 exhibition."} />
              </p>
            </div>
          </div>

          <div id="curators" tabIndex={-1} className="mb-12 grid gap-6 md:grid-cols-2">
            {CURATORS.map((curator) => (
              <article
                key={curator.name}
                className="grid gap-5 rounded-3xl border border-[#E8D4DB] bg-white p-5 shadow-sm sm:grid-cols-[132px_1fr]"
              >
                <img
                  src={curator.image}
                  alt={curator.name}
                  className="aspect-square w-[132px] rounded-2xl object-cover"
                />
                <div>
                  <h3 className="font-heading text-xl font-black text-[#5D1831]">
                    {curator.name}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-[#8C0C3A]">
                    <ExhibitionTitleText text={isFr ? curator.roleFr : curator.roleEn} />
                  </p>
                  <BiographyDisclosure label={isFr ? "Lire la biographie" : "Read biography"} text={isFr ? curator.bioFr : curator.bioEn} name={curator.name} />
                </div>
              </article>
            ))}
          </div>

          <div id="exhibition-artists" tabIndex={-1} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EXHIBITION_ARTISTS.map((artist) => (
              <article
                key={artist.name}
                className="overflow-hidden rounded-3xl border border-[#E8D4DB] bg-white shadow-sm"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#FAF6F7]">
                  <img
                    src={artist.imageUrl}
                    alt={artist.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className={`size-full ${artist.imageFit === "contain" ? "object-contain p-6" : "object-cover"}`}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-xl font-black text-[#5D1831]">
                    {artist.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#1E1E1E]/75">
                    {isFr ? artist.descriptionFr : artist.descriptionEn}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="exhibitors"
        tabIndex={-1}
        className="bg-[#5D1831] px-5 py-14 text-white sm:py-20"
      >
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            title={isFr ? "Exposants" : "Exhibitors"}
            dark
            description={
              isFr
                ? "Rencontrez les organismes participants dans l’espace des exposants au hall D."
                : "Meet participating organizations in the Hall D exhibitor area."
            }
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {EXHIBITORS.map((exhibitor) => (
              <article
                key={exhibitor.name}
                className="flex min-h-48 flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-3"
              >
                <div
                  className={`flex min-h-28 flex-1 items-center justify-center gap-4 rounded-xl px-5 py-4 ${exhibitor.darkLogoBackground ? "bg-[#161616]" : "bg-white"}`}
                >
                  {exhibitor.logoUrls?.map((logoUrl) => (
                    <img
                      key={logoUrl}
                      src={logoUrl}
                      alt={isFr ? exhibitor.logoAltFr ?? exhibitor.logoAlt ?? "" : exhibitor.logoAlt ?? ""}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className={`h-20 w-auto ${exhibitor.logoUrls?.length === 1 ? "max-w-full" : "max-w-[45%]"} min-w-0 object-contain object-center ${exhibitor.logoClassName ?? ""}`}
                    />
                  ))}
                  {exhibitor.textMark && (
                    <span className="font-heading text-xl font-black tracking-[0.08em] text-[#161616]">
                      {exhibitor.textMark}
                    </span>
                  )}
                </div>
                <h3 className="px-2 pb-2 pt-3 text-center font-heading text-sm font-bold leading-snug text-white">
                  {isFr ? exhibitor.nameFr ?? exhibitor.name : exhibitor.name}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section tabIndex={-1} id="marketplace" className="bg-[#FAF6F7] px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading
            title={isFr ? "Marché des entreprises" : "Marketplace Vendors"}
            description={
              isFr
                ? "Découvrez des entreprises et des artistes noirs offrant mode, art, cadeaux, bien-être, aliments et créations artisanales au hall D."
                : "Discover Black-owned businesses and artists offering fashion, art, gifts, wellness products, food and handmade goods in Hall D."
            }
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MARKETPLACE_VENDORS.map((vendor) => (
              <article
                key={vendor.name}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#E8D4DB] bg-white shadow-sm"
              >
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-black text-[#5D1831]">
                    {vendor.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#1E1E1E]/75">
                    {isFr ? vendor.descriptionFr : vendor.descriptionEn}
                  </p>
                  <p className="mt-5 flex items-center gap-2 text-sm font-bold text-[#8C0C3A]">
                    <CalendarDays className="size-4" aria-hidden />
                    {isFr ? vendor.daysFr : vendor.daysEn}
                  </p>
                  {vendor.website && (
                    <a
                      href={vendor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#5D1831] underline underline-offset-2"
                    >
                      {isFr ? "Visiter" : "Visit"}
                      <ExternalLink className="size-4" aria-hidden />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 flex items-center justify-center gap-2 text-center font-bold text-[#5D1831]">
            <MapPin className="size-5" aria-hidden />
            {isFr
              ? "Marché et exposition : hall D, Centre des congrès RBC"
              : "Marketplace and exhibition: Hall D, RBC Convention Centre"}
          </p>
        </div>
      </section>
    </>
  );
}
