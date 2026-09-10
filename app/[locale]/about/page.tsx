"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { AboutCollage } from "@/components/about-collage";
import { AboutSpeakersCollage } from "@/components/about-speakers-collage";
import { Footer } from "@/components/footer";
import { LangSelect } from "@/components/lang-select";
import { Logo } from "@/components/logo";
import { NavLink } from "@/components/nav-link";
import ToggleMenu from "@/components/toggle-menu";
import { WelcomeMessages } from "@/components/welcome-messages";
import { SUMMIT_HISTORY } from "@/data/summit-history";
import { Timeline } from "./components/timeline";

export default function Page() {
  const params = useParams<{ locale: string }>();
  const t = useTranslations("about");
  const { locale } = params;
  const isFr = locale === "fr";
  const history = isFr ? SUMMIT_HISTORY.fr : SUMMIT_HISTORY.en;
  const sections = [["summit-history", isFr ? "Histoire" : "History"], ["summit-timeline", isFr ? "Chronologie" : "Timeline"], ["welcome-messages", isFr ? "Messages" : "Messages"], ["summit-voices", isFr ? "Témoignages" : "Voices"], ["summit-highlights", isFr ? "Faits saillants" : "Highlights"]];

  return (
    <>
      <div className="h-screen relative bg-[linear-gradient(to_bottom,rgba(93,4,36,0.8)_0%,rgba(115,10,47,0.6)_32%,rgba(102,9,42,0.4)_66%,rgba(89,8,37,0.2)_100%),url('/about-hero.webp')] bg-cover bg-center">
        <header className="flex items-center text-white max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto pt-12 px-8 md:px-12 lg:px-16 2xl:px-20 3xl:px-16 4xl:px-24 mb-18 md:mb-52 lg:mb-18 w-full">
          <Logo />
          <NavLink className="hidden xl:block flex-1 mx-8 3xl:mx-8 4xl:mx-16" />
          <ul className="xl:flex gap-5 items-center hidden ml-auto xl:mr-8 2xl:mr-20 3xl:mr-16 4xl:mr-24">
            <li>
              <LangSelect />
            </li>
          </ul>
          <ToggleMenu local={locale} className="ml-auto xl:ml-0" />
        </header>
        <div className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] px-5 2xl:px-8 3xl:px-16 4xl:px-24 text-center mx-auto">
          <p className="font-heading bold text-[clamp(14px,1.82vw,28px)] tracking-[0.40em] text-white max-w-[38ch] 3xl:max-w-[75ch] 4xl:max-w-[85ch] mx-auto md:max-w-full">
            {t("pretitle")}
          </p>
          <h1 className="font-heading font-black text-[clamp(30px,5.60vw,71px)] tracking-[0.089em] text-white leading-tight mb-2.5 lg:mb-auto">
            {t("title")}
          </h1>
        </div>
      </div>
      <main className="bg-white rounded-t-2xl">
        <nav aria-label={isFr ? "Sur cette page" : "On this page"} className="sticky top-0 z-30 mb-10 border-b border-[#E8D4DB] bg-white/95 px-5 py-3 backdrop-blur">
          <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-2">
            <span className="mr-2 text-xs font-bold uppercase tracking-wider text-[#5D1831]">{isFr ? "Sur cette page" : "On this page"}</span>
            {sections.map(([id, label]) => <a key={id} href={`#${id}`} className="rounded-full border border-[#E8D4DB] px-3 py-2 text-sm font-semibold text-[#5D1831] transition hover:bg-[#FAF6F7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C0C3A]">{label}</a>)}
          </div>
        </nav>
        <section id="summit-history" className="scroll-mt-36 max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 mb-12 sm:mb-16 md:mb-24 lg:mb-[87px]">
          <div className="mb-6 text-center lg:text-start">
            <p className="text-[clamp(16px,1.82vw,22px)] font-medium text-light-red">{t("text_one")}</p>
            <h2 className="text-[clamp(24px,2.79vw,43px)] font-bold text-black">{isFr ? "Histoire du Sommet" : "Summit History"}</h2>
          </div>
          <p className="max-w-4xl text-base leading-relaxed text-[#1E1E1E]/80 sm:text-lg">{history[0]}</p>
          <details className="group mt-5">
            <summary className="w-fit cursor-pointer rounded-full border border-[#E8D4DB] px-5 py-3 text-sm font-bold text-[#8C0C3A] focus-visible:outline-2 focus-visible:outline-offset-2">
              <span className="group-open:hidden">{isFr ? "Lire la suite" : "Read more"}</span>
              <span className="hidden group-open:inline">{isFr ? "Réduire l’histoire" : "Show less history"}</span>
            </summary>
            <div className="mt-6 flow-root">
              <div className="mb-8 w-full lg:float-right lg:mb-6 lg:ml-10 lg:w-[43%]">
                <AboutSpeakersCollage locale={locale} />
              </div>
              <div className="space-y-6 text-base leading-relaxed text-[#1E1E1E]/80 sm:text-lg">
                {history.slice(1).map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </details>
          <AboutSpeakersCollage locale={locale} placement="below" />
        </section>
        <section id="summit-timeline" className="scroll-mt-36 max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 mb-12 sm:mb-16 md:mb-24 lg:mb-[87px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 lg:gap-14">
            <div className="w-full min-w-0 lg:sticky lg:top-8 lg:self-start">
              <AboutCollage locale={locale} />
            </div>
            <Timeline t={t} />
          </div>
        </section>

        <WelcomeMessages locale={locale} />

        {/* Testimonial Section */}
        <section id="summit-voices" className="scroll-mt-36 max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 mb-32">
          <div className="text-center lg:text-start mb-16">
            <p className="text-[clamp(16px,1.82vw,22px)] font-medium text-light-red">
              {t("testimonial_title")}
            </p>
            <p className="text-[clamp(24px,2.79vw,43px)] text-black font-bold">
              {t("testimonial_subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="w-full min-h-[240px] md:h-60 lg:h-auto lg:min-h-[280px] xl:h-60 bg-white rounded-lg border border-[#D9D9D9] shadow-sm p-4 md:p-6 flex flex-col justify-between">
              <div className="flex flex-row items-start h-32 lg:h-auto lg:min-h-[120px] xl:h-32 shrink-0">
                <p className="text-[#5D0424] text-opacity-80 font-semibold text-[16px] leading-[140%] wrap-break-word">
                  {t("testimonial_1")}
                </p>
              </div>
              <div className="p-2 lg:mt-6 xl:mt-0 shrink-0">
                <p className="font-semibold text-[16px] leading-[140%] text-[#8F9FA3] text-left wrap-break-word">
                  Cleche Kokolo
                  <br />
                  Advocate & Panel Host
                </p>
              </div>
            </div>
            <div className="w-full h-60 lg:h-auto lg:min-h-[280px] xl:h-60 bg-white rounded-lg border border-[#D9D9D9] shadow-sm p-6 flex flex-col justify-between">
              <div className="flex flex-row items-start h-32 lg:h-auto lg:min-h-[120px] xl:h-32 shrink-0">
                <p className="text-[#5D0424] text-opacity-80 font-semibold text-[16px] leading-[140%] wrap-break-word">
                  {t("testimonial_2")}
                </p>
              </div>
              <div className="p-2 lg:mt-6 xl:mt-0 shrink-0">
                <p className="font-semibold text-[16px] leading-[140%] text-[#8F9FA3] text-left wrap-break-word">
                  Healthy Minds
                  <br />
                  Mental health cooperative
                </p>
              </div>
            </div>
            <div className="w-full h-60 lg:h-auto lg:min-h-[280px] xl:h-60 bg-white rounded-lg border border-[#D9D9D9] shadow-sm p-6 flex flex-col justify-between">
              <div className="flex flex-row items-start h-32 lg:h-auto lg:min-h-[120px] xl:h-32 shrink-0">
                <p className="text-[#5D0424] text-opacity-80 font-semibold text-[16px] leading-[140%] wrap-break-word">
                  {t("testimonial_3")}
                </p>
              </div>
              <div className="p-2 lg:mt-6 xl:mt-0 shrink-0">
                <p className="font-semibold text-[16px] leading-[140%] text-[#8F9FA3] text-left wrap-break-word">
                  Claire Venance
                  <br />
                  Change Management Consultant
                </p>
              </div>
            </div>
            <div className="w-full h-60 lg:h-auto lg:min-h-[280px] xl:h-60 bg-white rounded-lg border border-[#D9D9D9] shadow-sm p-6 flex flex-col justify-between">
              <div className="flex flex-row items-start h-32 lg:h-auto lg:min-h-[120px] xl:h-32 shrink-0">
                <p className="text-[#5D0424] text-opacity-80 font-semibold text-[16px] leading-[140%] wrap-break-word">
                  {t("testimonial_4")}
                </p>
              </div>
              <div className="p-2 lg:mt-6 xl:mt-0 shrink-0">
                <p className="font-semibold text-[16px] leading-[140%] text-[#8F9FA3] text-left wrap-break-word">
                  Bridget Andam
                  <br />
                  Award-Winning Educational Consultant
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="summit-highlights" className="scroll-mt-36 max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 mb-32">
          <div className="text-center lg:text-start mb-16">
            <p className="text-[clamp(16px,1.82vw,22px)] font-medium text-light-red">
              {t("news_title")}
            </p>
            <p className="text-[clamp(24px,2.79vw,43px)] text-black font-bold">
              {t("news_subtitle")}
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full h-[250px] sm:h-[300px] bg-white rounded-lg border border-[#D9D9D9] shadow-sm overflow-hidden">
                <a
                  href="https://www.youtube.com/watch?v=w_pZDBOxB7o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <img
                    src="/news-card-1.png"
                    alt="Summit Highlights"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
              <div className="w-full h-[250px] sm:h-[300px] bg-white rounded-lg border border-[#D9D9D9] shadow-sm overflow-hidden">
                <a
                  href="https://vimeo.com/1173038507?share=copy&fl=sv&fe=ci"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <img
                    src="/news-card-2.png"
                    alt="Recap: 4th National Black Canadians Summit"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
