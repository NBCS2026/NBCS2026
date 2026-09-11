"use client";

import { useLocale } from "next-intl";
import { Footer } from "@/components/footer";
import { LangSelect } from "@/components/lang-select";
import { Logo } from "@/components/logo";
import { NavLink } from "@/components/nav-link";
import { SummitWeekEventList } from "@/components/summit-week-event-list";
import ToggleMenu from "@/components/toggle-menu";

export default function SummitWeekPage() {
  const locale = useLocale();
  const isFr = locale === "fr";

  return (
    <>
      <div className="relative flex min-h-[100svh] flex-col bg-[linear-gradient(to_bottom,rgba(42,4,18,0.88),rgba(93,24,49,0.58)),url('/summit-week-hero-394A4974.jpg')] bg-cover bg-[center_40%]">
        <header className="mx-auto flex w-full max-w-[1440px] items-center px-8 pt-12 text-white md:px-12 lg:px-16 2xl:max-w-[1600px] 2xl:px-20 3xl:max-w-[1800px] 3xl:px-16 4xl:max-w-[2400px] 4xl:px-24">
          <Logo />
          <NavLink className="mx-8 hidden flex-1 xl:block 3xl:mx-8 4xl:mx-16" />
          <ul className="ml-auto hidden items-center gap-5 xl:mr-8 xl:flex 2xl:mr-20 3xl:mr-16 4xl:mr-24">
            <li>
              <LangSelect />
            </li>
          </ul>
          <ToggleMenu local={locale} className="ml-auto xl:ml-0" />
        </header>
        <div className="mx-auto flex w-full max-w-[1180px] flex-1 flex-col items-center justify-center px-5 py-16 text-center text-white">
          <h1 className="font-heading text-[clamp(38px,6vw,82px)] font-black uppercase leading-[0.98] tracking-wide">
            <span className="mb-5 block text-sm font-bold tracking-[0.4em] sm:text-base">{isFr ? "SPCN 2026" : "NBCS 2026"}</span>{" "}
            {isFr ? "Événements parallèles" : "Side Events"}
          </h1>
        </div>
      </div>
      <main id="main-content" tabIndex={-1}>
        <SummitWeekEventList locale={locale} />
      </main>
      <Footer />
    </>
  );
}
