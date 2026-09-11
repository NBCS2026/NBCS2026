"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Events } from "@/components/events";
import { Footer } from "@/components/footer";
import { LangSelect } from "@/components/lang-select";
import { Logo } from "@/components/logo";
import { NavLink } from "@/components/nav-link";
import ToggleMenu from "@/components/toggle-menu";
import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/navigation";

export default function Page() {
  const params = useParams<{ locale: string }>();
  const t = useTranslations("program");
  const { locale } = params;
  const router = useRouter();

  return (
    <>
      <div className="site-hero min-h-[100svh] flex flex-col relative bg-[url('/gradiant_hero_program.png'),url('/program-hero-394A4674.jpg')] bg-cover bg-center">
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
        <div className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 text-center mt-20 sm:mt-32 md:mt-40 lg:mt-48">
          <p className="font-heading bold text-[clamp(14px,1.17vw,18px)] tracking-[0.96em] text-white max-w-[38ch] 3xl:max-w-[75ch] 4xl:max-w-[85ch] mx-auto md:max-w-full">
            {t("pretitle")}
          </p>
          <h1 className="font-heading text-[clamp(30px,5.53vw,85px)] font-black leading-tight tracking-[0.04em] text-white sm:tracking-[0.089em]">
            {t("title")}
          </h1>
        </div>
      </div>
      <main id="main-content" tabIndex={-1} className="bg-white rounded-t-2xl pt-14">
        <Events local={locale} />
        <section className="mx-auto mb-14 max-w-[1180px] px-5 sm:mb-20">
          <div className="flex flex-col items-center justify-between gap-5 rounded-3xl bg-[#5D1831] px-6 py-8 text-center text-white sm:px-10 md:flex-row md:text-left">
            <div>
              <h2 className="font-heading text-2xl font-black sm:text-3xl">
                {locale === "fr"
                  ? "Partagez vos commentaires"
                  : "Share your feedback"}
              </h2>
              <p className="mt-2 max-w-2xl text-white/80">
                {locale === "fr"
                  ? "Réagissez à une séance ou à un sujet en particulier. Nous voulons vous entendre."
                  : "Respond to a specific session or topic. We want to hear from you."}
              </p>
            </div>
            <Button
              onClick={() => router.push("/feedback")}
              className="h-auto shrink-0 rounded-full bg-white px-6 py-3 font-bold text-[#5D1831] hover:bg-[#FAF6F7]"
            >
              {locale === "fr" ? "Donner mon avis" : "Give feedback"}
            </Button>
          </div>
        </section>
        <section className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 mb-12 md:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="w-full relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/Audience during a panel discussion at the 2025 NBCS.jpg"
                alt="Audience during a panel discussion at the 2025 NBCS"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={90}
              />
            </div>
            <div className="w-full relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/Panel discussion at the 2025 NBCS with community leaders on stage.jpg"
                alt="Panel discussion at the 2025 NBCS with community leaders on stage"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={90}
              />
            </div>
            <div className="w-full relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/Members of the public actively participating during a speech delivered at the 2025 SPCN.jpg"
                alt="Members of the public actively participating during a speech delivered at the 2025 SPCN"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={90}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
