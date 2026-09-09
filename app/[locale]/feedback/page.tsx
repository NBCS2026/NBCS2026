"use client";

import { useLocale } from "next-intl";
import { FeedbackForm } from "@/components/feedback-form";
import { Footer } from "@/components/footer";
import { LangSelect } from "@/components/lang-select";
import { Logo } from "@/components/logo";
import { NavLink } from "@/components/nav-link";
import ToggleMenu from "@/components/toggle-menu";

export default function FeedbackPage() {
  const locale = useLocale();
  const isFr = locale === "fr";

  return (
    <>
      <div className="relative min-h-[64vh] bg-[linear-gradient(to_bottom,rgba(42,4,18,0.9),rgba(93,24,49,0.64)),url('/nbcs-panel-discussion.jpg')] bg-cover bg-center">
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
        <div className="mx-auto flex min-h-[46vh] max-w-[1180px] flex-col items-center justify-center px-5 pb-16 pt-20 text-center text-white">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.4em] sm:text-base">
            NBCS 2026 · SPCN 2026
          </p>
          <h1 className="mt-5 font-heading text-[clamp(40px,6vw,82px)] font-black leading-[0.98] tracking-wide">
            {isFr ? "COMMENTAIRES" : "FEEDBACK"}
          </h1>
        </div>
      </div>
      <main>
        <FeedbackForm locale={locale} />
      </main>
      <Footer />
    </>
  );
}
