"use client";

import { Footer } from "@/components/footer";
import { LangSelect } from "@/components/lang-select";
import { NavLink } from "@/components/nav-link";
import ToggleMenu from "@/components/toggle-menu";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Logo } from "@/components/logo";
import { InfoSectionsAccordion } from "@/components/info-sections-accordion";

export default function Page() {
  const params = useParams<{ locale: string }>();
  const t = useTranslations("info");
  const { locale } = params;

  return (
    <>
      <div className="h-screen relative bg-[linear-gradient(to_bottom,rgba(93,4,36,0.8)_0%,rgba(115,10,47,0.6)_32%,rgba(102,9,42,0.4)_66%,rgba(89,8,37,0.2)_100%),url('/6062F_HR-cityroom.jpg')] bg-cover bg-center">
        <header className="flex items-center text-white max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto pt-12 px-8 md:px-12 lg:px-16 2xl:px-20 3xl:px-16 4xl:px-24 mb-18 md:mb-52 lg:mb-18 w-full">
          <Logo />
          <NavLink className="hidden md:block flex-1 mx-8 3xl:mx-12" />
          <ul className="md:flex gap-5 items-center hidden ml-auto md:mr-8 lg:mr-12 2xl:mr-20 3xl:mr-32">
            <li>
              <LangSelect />
            </li>
          </ul>
          <ToggleMenu local={locale} className="ml-auto md:ml-0" />
        </header>
        <div className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 text-center pt-16 md:pt-24 lg:pt-32 xl:pt-40">
          <p className="font-heading bold text-[clamp(14px,1.82vw,28px)] tracking-[0.40em] text-white max-w-[38ch] mx-auto md:max-w-full mb-5">
            {t("pretitle")}
          </p>
          <h1 className="font-heading font-black text-[clamp(36px,4.62vw,71px)] tracking-widest text-white leading-none">
            {t("title")}
          </h1>
        </div>
      </div>
      <main className="bg-white rounded-t-2xl pt-14">
        <InfoSectionsAccordion locale={locale} />
      </main>
      <Footer />
    </>
  );
}
