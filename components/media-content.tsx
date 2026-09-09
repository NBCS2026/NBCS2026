import { ExternalLink } from "lucide-react";
import { FeaturedSummitVideo } from "@/components/featured-summit-video";
import { MediaContributionForm } from "@/components/media-contribution-form";

const PHOTOS = [
  {
    src: "/media-gallery-youth.webp",
    altEn: "Young delegates celebrating together at the Summit",
    altFr: "Jeunes déléguées et délégués célébrant ensemble au Sommet",
  },
  {
    src: "/nbcs-2025-jean-lafond.jpg",
    altEn: "National Black Canadians Summit gathering",
    altFr: "Rassemblement du Sommet pancanadien des communautés noires",
  },
  {
    src: "/nbcs-2025-power-of-youth.jpg",
    altEn: "Power of Youth participants",
    altFr: "Personnes participantes à la Journée jeunesse au pouvoir",
  },
  {
    src: "/nbcs-2025-speakers.jpg",
    altEn: "Summit speakers on stage",
    altFr: "Personnes conférencières sur scène",
  },
  {
    src: "/nbcs-panel-discussion.jpg",
    altEn: "Panel discussion at the Summit",
    altFr: "Table ronde au Sommet",
  },
  {
    src: "/nbcs-dancers.jpg",
    altEn: "Dance performance at the Summit",
    altFr: "Spectacle de danse au Sommet",
  },
  {
    src: "/nbcs-musical-performance.jpg",
    altEn: "Musical performance at the Summit",
    altFr: "Prestation musicale au Sommet",
  },
  {
    src: "/nbcs-gala-greeting.jpg",
    altEn: "Delegates greeting each other at the Summit gala",
    altFr: "Personnes déléguées au gala du Sommet",
  },
  {
    src: "/nbcs-2025-speaker.jpg",
    altEn: "Speaker addressing Summit delegates",
    altFr: "Personne s’adressant aux déléguées et délégués du Sommet",
  },
];

const SOCIALS = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/michaellej_fdn/",
    handle: "@michaellej_fdn",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/FondationMichaelleJeanFoundation/",
    handle: "Michaëlle Jean Foundation",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/fondationmjfoundation/",
    handle: "Michaëlle Jean Foundation",
  },
];

export function MediaContent({ locale }: { locale: string }) {
  const isFr = locale === "fr";

  return (
    <>
      <section className="px-5 pb-4 pt-14 text-center sm:pt-20">
        <div className="mx-auto max-w-3xl">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-[#8C0C3A]">
            {isFr
              ? "Regarder · Découvrir · Partager"
              : "Watch · Explore · Share"}
          </p>
          <h2 className="mt-3 font-heading text-[clamp(30px,4vw,52px)] font-black leading-tight text-[#5D1831]">
            {isFr ? "Le Sommet en images" : "The Summit in motion"}
          </h2>
          <p className="mt-4 leading-relaxed text-[#1E1E1E]/75 sm:text-lg">
            {isFr
              ? "Découvrez les vidéos, les photos et les conversations qui relient la communauté du Sommet partout au Canada."
              : "Explore video, photography and social conversations connecting the Summit community across Canada."}
          </p>
        </div>
      </section>

      <FeaturedSummitVideo locale={locale} />

      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-8 text-center">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-[#8C0C3A]">
              {isFr ? "Suivez la conversation" : "Follow the conversation"}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-black text-[#5D1831] sm:text-4xl">
              {isFr ? "Réseaux sociaux" : "Social media"}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-32 flex-col justify-between rounded-2xl border border-[#E8D4DB] bg-[#FAF6F7] p-5 transition-colors hover:border-[#8C0C3A]"
              >
                <span className="flex items-center justify-between font-heading text-xl font-black text-[#5D1831]">
                  {social.name}
                  <ExternalLink className="size-5" aria-hidden />
                </span>
                <span className="mt-5 text-sm font-semibold text-[#1E1E1E]/65">
                  {social.handle}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#5D1831] px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-8 max-w-3xl text-white">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-[#FFB6C8]">
              {isFr ? "Galerie de photos" : "Photo gallery"}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-black sm:text-4xl">
              {isFr ? "Moments du Sommet" : "Summit moments"}
            </h2>
          </div>
          <div className="grid auto-rows-[210px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PHOTOS.map((photo, index) => (
              <figure
                key={photo.src}
                className={`overflow-hidden rounded-2xl ${index === 0 || index === 5 ? "sm:col-span-2" : ""}`}
              >
                <img
                  src={photo.src}
                  alt={isFr ? photo.altFr : photo.altEn}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <MediaContributionForm locale={locale} />
    </>
  );
}
