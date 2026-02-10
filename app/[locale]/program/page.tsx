"use client";


import { Events } from "@/components/events";
import { Footer } from "@/components/footer";
import { LangSelect } from "@/components/lang-select";
import { Logo } from "@/components/logo";
import { NavLink } from "@/components/nav-link";
import ToggleMenu from "@/components/toggle-menu";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useRouter } from "@/i18n/navigation";
import Image from "next/image";

export default function Page() {
  const params = useParams<{ locale: string }>();
  const t = useTranslations("program");
  const { locale } = params;
  const router = useRouter();

  return (
    <>
      <div className="h-screen relative bg-[url('/gradiant_hero_program.png'),url('/DSC01108.jpg')] bg-cover bg-center">
        <header className="flex items-center text-white max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto pt-12 px-8 md:px-12 lg:px-16 2xl:px-20 3xl:px-16 4xl:px-24 mb-18 md:mb-52 lg:mb-18 w-full">
          <Logo />
          <NavLink className="hidden md:block flex-1 mx-8 3xl:mx-8 4xl:mx-16" />
          <ul className="md:flex gap-5 items-center hidden ml-auto md:mr-8 lg:mr-12 2xl:mr-20 3xl:mr-16 4xl:mr-24">
            <li>
              <LangSelect />
            </li>

          </ul>
          <ToggleMenu local={locale} className="ml-auto md:ml-0" />
        </header>
        <div className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 text-center mt-20 sm:mt-32 md:mt-40 lg:mt-48">
          <p
            className="font-heading bold text-[clamp(14px,1.17vw,18px)] tracking-[0.96em] text-white max-w-[38ch] 3xl:max-w-[75ch] 4xl:max-w-[85ch] mx-auto md:max-w-full"
          >
            {t("pretitle")}
          </p>
          <h1
            className="font-heading font-black text-[clamp(30px,5.53vw,85px)] tracking-[0.089em] text-white leading-tight"
          >
            {t("title")}
          </h1>
        </div>
      </div>
      <main className="bg-white rounded-t-2xl pt-14">
        <Events t={t} local={locale} />
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
