import { ArticlePreviewCard } from "./article-preview-card";
import { ExternalLink } from "lucide-react";
import { MediaContributionForm } from "@/components/media-contribution-form";

const INSTAGRAM_POSTS = [
  {
    "url": "https://www.instagram.com/reel/DSYgt5mAP14/",
    "embedUrl": "https://www.instagram.com/reel/DSYgt5mAP14/embed/",
    "titleEn": "One month to the 5th National Black Canadians Summit — @uzomachioma",
    "titleFr": "À un mois du 5e Sommet pancanadien des communautés noires — @uzomachioma"
  },
  {
    "url": "https://www.instagram.com/reel/DV9ZiVYjj0D/",
    "embedUrl": "https://www.instagram.com/reel/DV9ZiVYjj0D/embed/",
    "titleEn": "Learn more about NBCS 2026",
    "titleFr": "Découvrez le SPCN 2026"
  },
  {
    "url": "https://www.instagram.com/p/DdFmiF5DHlZ/",
    "embedUrl": "https://www.instagram.com/p/DdFmiF5DHlZ/embed/",
    "titleEn": "View post on Instagram",
    "titleFr": "Voir la publication sur Instagram"
  },
  {
    "url": "https://www.instagram.com/p/DchYoAJI0EI/",
    "embedUrl": "https://www.instagram.com/p/DchYoAJI0EI/embed/",
    "titleEn": "View post on Instagram",
    "titleFr": "Voir la publication sur Instagram"
  },
  {
    "url": "https://www.instagram.com/p/DbHKH1Ukbp_/",
    "embedUrl": "https://www.instagram.com/p/DbHKH1Ukbp_/embed/",
    "titleEn": "View post on Instagram",
    "titleFr": "Voir la publication sur Instagram"
  },
  {
    "url": "https://www.instagram.com/p/DbTvLAUmqk9/",
    "embedUrl": "https://www.instagram.com/p/DbTvLAUmqk9/embed/",
    "titleEn": "View post on Instagram",
    "titleFr": "Voir la publication sur Instagram"
  }
];

type CoverageItem = {
  title: string;
  source: string;
  date: string;
  url: string;
  summaryEn: string;
  summaryFr: string;
};

const CURRENT_COVERAGE: CoverageItem[] = [
{
  "title": "National Black Canadians Summit 2026",
  "source": "CBC Manitoba",
  "date": "2026",
  "url": "https://www.cbc.ca/news/canada/manitoba/community/national-black-canadians-summit-2026-9.7307806",
  "summaryEn": "Read CBC Manitoba’s coverage of the 2026 Summit.",
  "summaryFr": "Découvrez la couverture du Sommet 2026 par CBC Manitoba."
},
  {
    title: "Winnipeg Welcomes National Black Canadians Summit",
    source: "The Caribbean Camera",
    date: "September 2026",
    url: "https://thecaribbeancamera.com/winnipeg-welcomes-national-black-canadians-summit/",
    summaryEn:
      "A preview of the fifth Summit and the Black leaders, youth and advocates gathering in Winnipeg.",
    summaryFr:
      "Un aperçu du cinquième Sommet et des leaders, jeunes et personnes militantes noires qui se réuniront à Winnipeg.",
  },
  {
    title: "Join the National Black Canadians Summit 2026",
    source: "Foundation for Black Communities",
    date: "August 2026",
    url: "https://www.fbec-cefn.ca/join-the-national-black-canadians-summit-2026/",
    summaryEn:
      "A national community invitation highlighting dialogue, collective action and the 2026 theme, Moving Forward Together.",
    summaryFr:
      "Une invitation communautaire nationale qui met en valeur le dialogue, l’action collective et le thème 2026, Ensemble, allons de l’avant.",
  },
  {
    title: "Apply to Attend the National Black Canadians Summit",
    source: "PSAC British Columbia",
    date: "July 2026",
    url: "https://psacbc.com/apply-to-attend-the-national-black-canadians-summit/",
    summaryEn:
      "Coverage of sponsored participation for Prairie-region labour activists attending the Winnipeg Summit.",
    summaryFr:
      "Présentation d’une initiative de participation commanditée destinée aux personnes militantes du mouvement syndical qui assisteront au Sommet de Winnipeg.",
  },
];

const PAST_COVERAGE: CoverageItem[] = [
{
  "title": "Black summit in Halifax connects communities across Canada",
  "source": "CBC News",
  "date": "2022",
  "url": "https://www.cbc.ca/news/canada/nova-scotia/black-summit-in-halifax-connects-communities-across-canada-1.6537390",
  "summaryEn": "CBC coverage of the Halifax Summit and connections across Black communities in Canada.",
  "summaryFr": "La couverture de CBC sur le Sommet d’Halifax et les liens entre les communautés noires du Canada."
},
{
  "title": "The Halifax Declaration at the conclusion of the Black summit",
  "source": "CBC News",
  "date": "2022",
  "url": "https://www.cbc.ca/news/canada/nova-scotia/black-summit-halifax-declaration-conclusion-1.6537820",
  "summaryEn": "Read CBC’s coverage of the Halifax Declaration and the conclusion of the Summit.",
  "summaryFr": "Découvrez la couverture de CBC sur la Déclaration d’Halifax et la conclusion du Sommet."
},
{
  "title": "Representation matters: Black youth and the power of connection",
  "source": "CBC Nova Scotia",
  "date": "2022",
  "url": "https://www.cbc.ca/news/canada/nova-scotia/community/representation-matters-black-youth-power-of-connection-1.6577664",
  "summaryEn": "A CBC feature on representation, Black youth and the power of connection.",
  "summaryFr": "Un article de CBC sur la représentation, les jeunes Noirs et le pouvoir des liens."
},
  {
    title: "Eradicating structural racism for Black Canadians",
    source: "Policy Options",
    date: "April 2019",
    url: "https://policyoptions.irpp.org/2019/04/eradicating-structural-racism-for-black-canadians/",
    summaryEn:
      "An examination of the national action agenda that emerged from early Summit organizing and community dialogue.",
    summaryFr:
      "Une analyse du programme d’action national issu des premiers Sommets et du dialogue communautaire.",
  },
  {
    title: "Federation of Black Canadians launched at national summit",
    source: "Ron Fanfair",
    date: "December 2017",
    url: "https://www.ronfanfair.com/home/2017/12/13/federation-of-black-canadians-launched-at-national-summit",
    summaryEn:
      "Coverage of the inaugural Summit and the launch of the Federation of Black Canadians.",
    summaryFr:
      "Reportage sur le Sommet inaugural et le lancement de la Fédération des Canadiens noirs.",
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
      <section aria-label={isFr ? "Partenaire média officiel" : "Official Media Partner"} className="px-5 pt-12">
        <a href="https://www.cbc.ca/" target="_blank" rel="noopener noreferrer" className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-6 rounded-2xl border border-[#E8D4DB] bg-white px-6 py-8 text-[#5D1831]">
          <img src="/cbc-logo.png" alt="CBC" className="h-16 w-auto max-w-[180px] object-contain" />
          <span className="font-heading text-lg font-bold underline underline-offset-4">{isFr ? "Partenaire média officiel" : "Official Media Partner"}</span>
        </a>
      </section>
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
              ? "Découvrez les conversations qui relient la communauté du Sommet partout au Canada."
              : "Explore conversations connecting the Summit community across Canada."}
          </p>
        </div>
      </section>

      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-8 text-center">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-[#8C0C3A]">
              {isFr ? "Publications à découvrir" : "Featured posts"}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-black text-[#5D1831] sm:text-4xl">
              Instagram
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {INSTAGRAM_POSTS.map((post) => (
              <article
                key={post.url}
                className="overflow-hidden rounded-3xl border border-[#E8D4DB] bg-white shadow-sm"
              >
                <iframe
                  src={post.embedUrl}
                  title={isFr ? post.titleFr : post.titleEn}
                  className="h-[600px] w-full border-0"
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 border-t border-[#E8D4DB] p-4 text-sm font-bold text-[#5D1831]"
                >
                  {isFr ? post.titleFr : post.titleEn}
                  <ExternalLink className="size-4 shrink-0" aria-hidden />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

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

      <CoverageSection
        locale={locale}
        eyebrowEn="NBCS 2026"
        eyebrowFr="SPCN 2026"
        titleEn="In the news"
        titleFr="Dans l’actualité"
        items={CURRENT_COVERAGE}
      />

      <CoverageSection
        locale={locale}
        titleEn="Coverage from past Summits"
        titleFr="Articles sur les Sommets précédents"
        items={PAST_COVERAGE}
        muted
      />

      <MediaContributionForm locale={locale} />
    </>
  );
}

function CoverageSection({
  locale,
  eyebrowEn,
  eyebrowFr,
  titleEn,
  titleFr,
  items,
  muted = false,
}: {
  locale: string;
  eyebrowEn?: string;
  eyebrowFr?: string;
  titleEn: string;
  titleFr: string;
  items: CoverageItem[];
  muted?: boolean;
}) {
  const isFr = locale === "fr";

  return (
    <section
      className={`${muted ? "bg-[#FAF6F7]" : "bg-white"} px-5 py-14 sm:py-20`}
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-8 max-w-3xl">
          {(isFr ? eyebrowFr : eyebrowEn) && <p className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-[#8C0C3A]">
            {isFr ? eyebrowFr : eyebrowEn}
          </p>}
          <h2 className="mt-3 font-heading text-3xl font-black text-[#5D1831] sm:text-4xl">
            {isFr ? titleFr : titleEn}
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <ArticlePreviewCard key={item.url} item={item} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
