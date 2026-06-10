"use client";

import { Footer } from "@/components/footer";
import { LangSelect } from "@/components/lang-select";
import { Logo } from "@/components/logo";
import { NavLink } from "@/components/nav-link";
import ToggleMenu from "@/components/toggle-menu";
import { Button } from "@/components/ui/button";
import { useTranslations, useLocale } from "next-intl";
import { useParams, useRouter } from "next/navigation";

export default function page() {
  const params = useParams<{ locale: string }>();
  const t = useTranslations("partners");
  const locale = useLocale();
  const router = useRouter();
  return (
    <>
      <div className="h-screen relative bg-[linear-gradient(to_bottom,rgba(93,4,36,0.8)_0%,rgba(115,10,47,0.6)_22%,rgba(102,9,42,0.4)_56%,rgba(89,8,37,0.2)_90%),url('/sponsor_main.webp')] bg-cover bg-center">
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
          <h1
            className={`font-heading font-black text-[clamp(30px,5.53vw,85px)] tracking-[0.089em] text-white ${
              locale == "en" ? "leading-normal" : "leading-none"
            } mb-2`}
          >
            {t("title")}
          </h1>
        </div>
      </div>
      <main className="bg-white rounded-t-2xl pt-14">
        <section className="mb-8 sm:mb-10 md:mb-12 px-5">
          <h1 className="text-[clamp(24px,4vw,85px)] font-bold text-center">
            {t("text_seven")}
          </h1>

          <div className="space-y-4 text-light-red text-center font-medium">
            <p className="text-[clamp(16px,1.822vw,28px)] max-w-[62ch] mx-auto leading-tight">
              <span>{t("text_four")}</span> {t("text_five")}
            </p>
            <p className="text-[clamp(16px,1.822vw,28px)] max-w-[62ch] mx-auto leading-tight">
              {t("text_six")}
            </p>
          </div>
        </section>
        <section className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 mb-20 sm:mb-24 md:mb-32 lg:mb-40 xl:mb-48 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-28">
          <div>
            <h1 className="text-[clamp(28px,3.5vw,45px)] font-bold text-center mb-0">
              {t("text_eight")}
            </h1>

            <div className="flex justify-center mt-[100px] mb-[200px]">
              <picture className="block w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px]">
                <img src="/sponsor_1.png" alt="alt" className="w-full h-auto" />
              </picture>
            </div>
          </div>

          <div className="-mb-6 sm:-mb-8 md:-mb-10 lg:-mb-14">
            <h1 className="text-[clamp(28px,3.5vw,45px)] font-bold text-center mb-[12px] md:mb-[16px]">
              {t("text_nine")}
            </h1>
            <div className="flex justify-center my-8 sm:my-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-center justify-items-center">
                <picture className="max-w-[318.1px]">
                  <img src="/sponsor_2.png" alt="alt" className="w-full h-auto" />
              </picture>

                <picture className="max-w-[298px]">
                <img
                  src={locale == "en" ? "/sponsor_5.jpg" : "/sponsor_6.jpg"}
                  alt="alt"
                    className="w-full h-auto"
                />
              </picture>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8 mb-0 sm:mb-0">
            <div className="flex justify-center my-16 sm:my-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-center justify-items-center">
                <picture className="max-w-[241px]">
                  <img src="/sponsor_4.png" alt="alt" className="w-full h-auto" />
              </picture>
                <picture className="max-w-[320px]">
                  <img src="/sponsor_3.png" alt="alt" className="w-full h-auto" />
              </picture>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="flex justify-center mb-[170px]">
              <picture className="block max-w-[315px]">
                <img src="/manitoba-logo.png" alt="Manitoba Government Logo" className="w-full h-auto" />
              </picture>
            </div>
            <h1 className="text-[clamp(28px,3.5vw,45px)] font-bold text-center mb-[74px] md:mb-[82px]">
              {t("text_eleven")}
            </h1>
            <div className="flex justify-center my-16 sm:my-12 md:my-16 lg:my-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-6 xl:gap-6 items-center justify-items-center w-full max-w-[900px]">
                <div className="flex flex-col items-center sm:items-start">
                  <picture className="max-w-[290px] ml-0 sm:ml-6 md:ml-8">
                    <img src={locale === "en" ? "/encore-logo-en.png" : "/sponsor_7.png"} alt="Encore logo" className="w-full h-auto" />
                  </picture>
                  <a href="https://www.cbc.ca/experiences/" target="_blank" rel="noopener noreferrer" className="block max-w-[700px] sm:max-w-[750px] md:max-w-[800px] lg:max-w-[850px] xl:max-w-[900px] mt-28 md:mt-32">
                    <picture className="block w-full">
                      <img src="/cbc-logo.png" alt="cbc-logo" className="w-full h-auto" />
                    </picture>
                  </a>
                </div>
                <picture className="max-w-[190px] mt-8 sm:-mt-28 md:-mt-32 sm:-ml-6 md:-ml-8">
                  <img src="/sponsor_8.png" alt="alt" className="w-full h-auto" />
                </picture>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
