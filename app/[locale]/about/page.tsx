"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { AboutSpeakersCollage } from "@/components/about-speakers-collage";
import { Footer } from "@/components/footer";
import { LangSelect } from "@/components/lang-select";
import { Logo } from "@/components/logo";
import { NavLink } from "@/components/nav-link";
import ToggleMenu from "@/components/toggle-menu";
import { WelcomeMessages } from "@/components/welcome-messages";
import { SUMMIT_HISTORY } from "@/data/summit-history";
import { Timeline } from "./components/timeline";
import { AboutSectionNav } from "@/components/about-section-nav";
import styles from "./about.module.css";

export default function Page() {
  const params = useParams<{ locale: string }>();
  const t = useTranslations("about");
  const { locale } = params;
  const isFr = locale === "fr";
  const history = isFr ? SUMMIT_HISTORY.fr : SUMMIT_HISTORY.en;
  const sections = [["summit-history", isFr ? "Histoire" : "History"], ["summit-timeline", isFr ? "Chronologie" : "Timeline"], ["welcome-messages", isFr ? "Messages" : "Messages"], ["summit-voices", isFr ? "Témoignages" : "Voices"], ["summit-highlights", isFr ? "Faits saillants" : "Highlights"]];

  return (
    <div className={styles.page}>
      <div className="site-hero min-h-[100svh] flex flex-col relative bg-[linear-gradient(to_bottom,rgba(93,4,36,0.8)_0%,rgba(115,10,47,0.6)_32%,rgba(102,9,42,0.4)_66%,rgba(89,8,37,0.2)_100%),url('/about-hero.webp')] bg-cover bg-center">
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
      <main id="main-content" tabIndex={-1} className="bg-white rounded-t-2xl">
        <AboutSectionNav sections={sections} label={isFr ? "Sur cette page" : "On this page"} />
        <section id="summit-history" className={`${styles.section} ${styles.history}`}>
          <div className="mb-6 text-center lg:text-start">
            <p className="text-[clamp(16px,1.82vw,22px)] font-medium text-light-red">{isFr ? "AUX ORIGINES DU SOMMET" : t("text_one")}</p>
            <h2 className="text-[clamp(24px,2.79vw,43px)] font-bold text-black">{isFr ? "Histoire du Sommet" : "Summit History"}</h2>
          </div>
          <p className="max-w-4xl text-base leading-relaxed text-[#1E1E1E]/80 sm:text-lg">{isFr ? history[0].split(/(4e Mur : Rendre l’invisible visible|Décennie internationale des personnes d’ascendance africaine)/g).map((part, index) => index % 2 ? <strong key={index}>{part}</strong> : part) : history[0]}</p>
          <details className="group mt-5">
            <summary className="w-fit cursor-pointer rounded-full border border-[#E8D4DB] px-5 py-3 text-sm font-bold text-[#8C0C3A] focus-visible:outline-2 focus-visible:outline-offset-2">
              <span className="group-open:hidden">{isFr ? "Lire la suite" : "Read more"}</span>
              <span className="hidden group-open:inline">{isFr ? "Réduire l’histoire" : "Show less history"}</span>
            </summary>
            <div className="mt-6 flow-root">
              <div className="space-y-6 text-base leading-relaxed text-[#1E1E1E]/80 sm:text-lg">
                {history.slice(1).map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </details>
          <AboutSpeakersCollage locale={locale} />
        </section>
        <section id="summit-timeline" className={`${styles.section} ${styles.timeline}`}>
          <div className="mx-auto max-w-[900px]">
            <Timeline t={t} />
          </div>
        </section>

        <WelcomeMessages locale={locale} />

        {/* Testimonial Section */}
        <section id="summit-voices" className={`${styles.section} ${styles.voices}`}>
          <div className="text-center lg:text-start mb-16">
            <p className="text-[clamp(16px,1.82vw,22px)] font-medium text-light-red">
              {t("testimonial_title")}
            </p>
            <h2 className="text-[clamp(24px,2.79vw,43px)] text-black font-bold">
              {t("testimonial_subtitle")}
            </h2>
          </div>
          <div className={styles.quotes}>
            <figure className={styles.quote}>
              <blockquote>{t("testimonial_1")}</blockquote>
              <figcaption><span className="font-semibold">Cleche Kokolo</span><br />Advocate & Panel Host</figcaption>
            </figure>
            <figure className={styles.quote}>
              <blockquote>{t("testimonial_2")}</blockquote>
              <figcaption><span className="font-semibold">Healthy Minds</span><br />Mental health cooperative</figcaption>
            </figure>
            <figure className={styles.quote}>
              <blockquote>{t("testimonial_3")}</blockquote>
              <figcaption><span className="font-semibold">Claire Venance</span><br />Change Management Consultant</figcaption>
            </figure>
            <figure className={styles.quote}>
              <blockquote>{t("testimonial_4")}</blockquote>
              <figcaption><span className="font-semibold">Bridget Andam</span><br />Award-Winning Educational Consultant</figcaption>
            </figure>
          </div>
        </section>

        {/* News Section */}
        <section id="summit-highlights" className={`${styles.section} ${styles.highlights}`}>
          <div className="text-center lg:text-start mb-16">

            <h2 className="text-[clamp(24px,2.79vw,43px)] text-black font-bold">
              {t("news_subtitle")}
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full h-[250px] sm:h-[300px] bg-white rounded-lg border border-[#D9D9D9] shadow-sm overflow-hidden">
                <a
                  href="https://www.youtube.com/watch?v=w_pZDBOxB7o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full cursor-pointer hover:opacity-90 transition-opacity motion-reduce:transition-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-[#8C0C3A]"
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
                  className="block w-full h-full cursor-pointer hover:opacity-90 transition-opacity motion-reduce:transition-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-[#8C0C3A]"
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
    </div>
  );
}
