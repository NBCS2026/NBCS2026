"use client";

import { Footer } from "@/components/footer";
import { LangSelect } from "@/components/lang-select";
import { Logo } from "@/components/logo";
import { NavLink } from "@/components/nav-link";
import { NewSwiper } from "@/components/news-swiper";
import ToggleMenu from "@/components/toggle-menu";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "@/i18n/navigation";

export default function Page() {
  const params = useParams<{ locale: string }>();
  const t = useTranslations("media");
  const { locale } = params;
  const router = useRouter();
  return (
    <>
      <div className="h-screen relative bg-[linear-gradient(to_bottom,rgba(93,4,36,0.8)_0%,rgba(115,10,47,0.6)_32%,rgba(102,9,42,0.4)_66%,rgba(89,8,37,0.2)_100%),url('/media_main.webp')] bg-cover bg-center">
        <header
          className="flex items-center text-white max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto pt-12 px-8 md:px-12 lg:px-16 2xl:px-20 3xl:px-16 4xl:px-24 mb-18 md:mb-52 lg:mb-18 w-full"
        >
          <Logo />
          <NavLink className="hidden md:block flex-1 mx-8 3xl:mx-12" />
          <ul className="md:flex gap-5 items-center hidden ml-auto md:mr-8 lg:mr-12 2xl:mr-20 3xl:mr-32">
            <li>
              <LangSelect />
            </li>

          </ul>
          <ToggleMenu local={locale} className="ml-auto md:ml-0" />
        </header>
        <div className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 text-center">
          <p
            className="font-heading bold text-[clamp(14px,1.17vw,18px)] tracking-[0.85em] text-white max-w-[38ch] mx-auto md:max-w-full mb-5"
          >
            {t("pretitle")}
          </p>
          <h1
            className="font-heading font-black text-[clamp(36px,4.62vw,71px)] tracking-widest text-white leading-none"
          >
            {t("title")}
          </h1>
          <p className="tracking-widest max-w-[38ch] md:max-w-[86ch] mx-auto text-white text-[clamp(14px,1.43vw,22px)] mb-7">
            {t("post_titleOne")}
            <br className="block md:hidden " />
            <br className="block md:hidden " /> {t("post_titleTwo")}
          </p>
        </div>
      </div>
      <main className="bg-white rounded-t-2xl pt-14">
        <section className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-[50px] 2xl:gap-16 3xl:gap-16 4xl:gap-20 items-center mb-12 sm:mb-16 md:mb-24 lg:mb-[142px]">
          <div>
            <div className="mb-8 lg:mb-14 text-center md:text-start">
              <p className="font-medium text-[15px] lg:text-[21px] text-light-red">
                {t("text_one")}
              </p>
              <h2
                className={`font-bold text-[24px] ${
                  locale === "en" ? "lg:text-[43px]" : "lg:text-[48px]"
                } leading-[1.2]`}
              >
                {t("text_two")}
              </h2>
            </div>
            <div className="space-y-6 mb-7 [&>p]:leading-tight">
              <p className="medium-text">{t("text_three")}</p>
              <p className="medium-text">{t("text_four")}</p>
              <p className="medium-text">{t("text_five")}</p>
            </div>
          </div>
          <div className="justify-self-center">
            <picture>
              <img src="/about_image.webp" alt="about image" />
            </picture>
          </div>
        </section>
        <section className="section space-y-4 lg:space-y-6">
          <h2 className="text-[24px] lg:text-[43px] font-bold text-center">
            {t("text_six")}{" "}
            <span className="font-bold text-light-red">{t("text_seven")}</span>
          </h2>
          <p className="text-[15px] lg:text-[28.48px] text-dark-gray text-center mb-[71px]">
            {t("text_eight")}{" "}
            <span className="font-bold text-light-red">{t("text_nine")}</span>
          </p>
          <NewSwiper />
        </section>
      </main>
      <Footer />
    </>
  );
}
