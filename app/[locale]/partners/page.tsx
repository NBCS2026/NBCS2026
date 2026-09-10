"use client";

import { useLocale, useTranslations } from "next-intl";
import { Footer } from "@/components/footer";
import { LangSelect } from "@/components/lang-select";
import { Logo } from "@/components/logo";
import { NavLink } from "@/components/nav-link";
import { SponsorDirectory } from "@/components/sponsor-directory";
import ToggleMenu from "@/components/toggle-menu";

export default function Page() {
  const t = useTranslations("partners");
  const locale = useLocale();

  return (
    <>
      <div className="relative h-screen bg-[linear-gradient(to_bottom,rgba(93,4,36,0.8)_0%,rgba(115,10,47,0.6)_22%,rgba(102,9,42,0.4)_56%,rgba(89,8,37,0.2)_90%),url('/sponsor_main.webp')] bg-cover bg-center">
        <header className="mx-auto mb-18 flex w-full max-w-[1440px] items-center px-8 pt-12 text-white md:mb-52 md:px-12 lg:mb-18 lg:px-16 2xl:max-w-[1600px] 2xl:px-20 3xl:max-w-[1800px] 3xl:px-16 4xl:max-w-[2400px] 4xl:px-24">
          <Logo />
          <NavLink className="mx-8 hidden flex-1 xl:block 3xl:mx-12" />
          <ul className="ml-auto hidden items-center gap-5 xl:mr-8 xl:flex 2xl:mr-20 3xl:mr-32">
            <li>
              <LangSelect />
            </li>
          </ul>
          <ToggleMenu local={locale} className="ml-auto xl:ml-0" />
        </header>
        <div className="mx-auto max-w-[1440px] px-5 text-center 2xl:max-w-[1600px] 2xl:px-8 3xl:max-w-[1800px] 3xl:px-16 4xl:max-w-[2400px] 4xl:px-24">
          <h1
            className={`mb-2 font-heading text-[clamp(30px,5.53vw,85px)] font-black tracking-[0.089em] text-white ${
              locale === "en" ? "leading-normal" : "leading-none"
            }`}
          >
            {t("title")}
          </h1>
        </div>
      </div>
      <main id="main-content" tabIndex={-1} className="rounded-t-2xl bg-[#FFFDFC] px-5 pb-20 pt-14 sm:px-8 sm:pb-28">
        <section className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="text-[clamp(24px,4vw,62px)] font-bold">
            {t("text_seven")}
          </h2>
          <div className="mt-4 space-y-4 font-medium text-light-red">
            <p className="mx-auto max-w-[62ch] text-[clamp(16px,1.5vw,24px)] leading-tight">
              <span>{t("text_four")}</span> {t("text_five")}
            </p>
            <p className="mx-auto max-w-[62ch] text-[clamp(16px,1.5vw,24px)] leading-tight">
              {t("text_six")}
            </p>
          </div>
        </section>
        <SponsorDirectory locale={locale} />
      </main>
      <Footer showSponsors={false} />
    </>
  );
}
