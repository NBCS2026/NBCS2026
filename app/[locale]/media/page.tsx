"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Footer } from "@/components/footer";
import { LangSelect } from "@/components/lang-select";
import { Logo } from "@/components/logo";
import { MediaContent } from "@/components/media-content";
import { NavLink } from "@/components/nav-link";
import ToggleMenu from "@/components/toggle-menu";

export default function Page() {
  const params = useParams<{ locale: string }>();
  const t = useTranslations("media");
  const { locale } = params;
  return (
    <>
      <div className="h-screen relative bg-[linear-gradient(to_bottom,rgba(93,4,36,0.8)_0%,rgba(115,10,47,0.6)_32%,rgba(102,9,42,0.4)_66%,rgba(89,8,37,0.2)_100%),url('/media-hero.webp')] bg-cover bg-center">
        <header className="flex items-center text-white max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto pt-12 px-8 md:px-12 lg:px-16 2xl:px-20 3xl:px-16 4xl:px-24 mb-18 md:mb-52 lg:mb-18 w-full">
          <Logo />
          <NavLink className="hidden xl:block flex-1 mx-8 3xl:mx-12" />
          <ul className="xl:flex gap-5 items-center hidden ml-auto xl:mr-8 2xl:mr-20 3xl:mr-32">
            <li>
              <LangSelect />
            </li>
          </ul>
          <ToggleMenu local={locale} className="ml-auto xl:ml-0" />
        </header>
        <div className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 text-center">
          <p className="font-heading bold text-[clamp(14px,1.17vw,18px)] tracking-[0.85em] text-white max-w-[38ch] mx-auto md:max-w-full mb-5">
            {t("pretitle")}
          </p>
          <h1 className="font-heading font-black text-[clamp(36px,4.62vw,71px)] tracking-widest text-white leading-none">
            {t("title")}
          </h1>
          <p className="tracking-widest max-w-[38ch] md:max-w-[86ch] mx-auto text-white text-[clamp(14px,1.43vw,22px)] mb-7">
            {t("post_titleOne")}
            <br className="block md:hidden " />
            <br className="block md:hidden " /> {t("post_titleTwo")}
          </p>
        </div>
      </div>
      <main className="bg-white">
        <MediaContent locale={locale} />
      </main>
      <Footer />
    </>
  );
}
