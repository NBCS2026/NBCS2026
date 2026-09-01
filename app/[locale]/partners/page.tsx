"use client";

import { Footer } from "@/components/footer";
import { LangSelect } from "@/components/lang-select";
import { Logo } from "@/components/logo";
import { NavLink } from "@/components/nav-link";
import ToggleMenu from "@/components/toggle-menu";
import { useTranslations, useLocale } from "next-intl";

function SponsorLogo({
  src,
  alt,
  className = "w-full h-auto",
  maxWidth,
  href,
}: {
  src: string;
  alt: string;
  className?: string;
  maxWidth?: string;
  href?: string;
}) {
  const image = (
    <img
      src={src}
      alt={alt}
      className={className}
      style={maxWidth ? { maxWidth } : undefined}
    />
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        style={maxWidth ? { maxWidth } : undefined}
      >
        {image}
      </a>
    );
  }

  return image;
}

function LabelText({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-heading font-bold text-[14px] sm:text-[16px] md:text-[18px] text-[#1E1E1E] leading-snug whitespace-pre-line text-center">
      {children}
    </p>
  );
}

function LogoRow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center justify-items-center ${className}`}
    >
      {children}
    </div>
  );
}

function LogoCell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center w-full px-2 ${className}`}
    >
      {children}
    </div>
  );
}

export default function page() {
  const t = useTranslations("partners");
  const locale = useLocale();

  return (
    <>
      <div className="h-screen relative bg-[linear-gradient(to_bottom,rgba(93,4,36,0.8)_0%,rgba(115,10,47,0.6)_22%,rgba(102,9,42,0.4)_56%,rgba(89,8,37,0.2)_90%),url('/sponsor_main.webp')] bg-cover bg-center">
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

        <section className="max-w-[980px] mx-auto px-5 sm:px-8 pb-20 sm:pb-24 md:pb-32 lg:pb-40 space-y-10 sm:space-y-12 md:space-y-14">
          {/* Presenting Sponsor */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-14 pb-8 sm:pb-10 border-b border-[#1E1E1E]">
            <LabelText>{t("text_eight")}</LabelText>
            <SponsorLogo
              src="/sponsor_1.png"
              alt={t("text_eight")}
              maxWidth="180px"
            />
          </div>

          {/* Media Partner */}
          <div className="flex flex-col items-center justify-center gap-4 py-2">
            <LabelText>{t("text_twelve")}</LabelText>
            <SponsorLogo
              src="/cbc-logo.png"
              alt={t("text_twelve")}
              href="https://www.cbc.ca/experiences/"
              maxWidth="220px"
            />
          </div>

          {/* Champion / partner grid */}
          <LogoRow>
            <LogoCell>
              <SponsorLogo
                src="/sponsor_2.png"
                alt="Travel Manitoba"
                maxWidth="300px"
              />
            </LogoCell>
            <LogoCell>
              <SponsorLogo
                src={locale === "en" ? "/sponsor_5.jpg" : "/sponsor_6.jpg"}
                alt="Canada Life"
                maxWidth="280px"
              />
            </LogoCell>
          </LogoRow>

          <LogoRow>
            <LogoCell>
              <SponsorLogo
                src="/sponsor_4.png"
                alt="City of Winnipeg"
                maxWidth="220px"
              />
            </LogoCell>
            <LogoCell>
              <SponsorLogo
                src="/sponsor_3.png"
                alt="Economic Development Winnipeg"
                maxWidth="300px"
              />
            </LogoCell>
          </LogoRow>

          <LogoRow>
            <LogoCell>
              <SponsorLogo
                src="/manitoba-logo.png"
                alt="Province of Manitoba"
                maxWidth="240px"
              />
            </LogoCell>
            <LogoCell>
              <SponsorLogo
                src="/porter-logo.png"
                alt="Porter Airlines"
                maxWidth="200px"
              />
            </LogoCell>
          </LogoRow>

          <LogoRow>
            <LogoCell>
              <SponsorLogo
                src={
                  locale === "en" ? "/encore-logo-en.png" : "/sponsor_7.png"
                }
                alt="Encore"
                maxWidth="260px"
              />
            </LogoCell>
            <LogoCell>
              <SponsorLogo
                src="/crrf-logo.png"
                alt="Canadian Race Relations Foundation"
                maxWidth="280px"
              />
            </LogoCell>
          </LogoRow>

          {/* Delta | Youth Champion | Asper */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-center justify-items-center">
            <LogoCell>
              <SponsorLogo
                src="/sponsor_8.png"
                alt="Delta Hotels Marriott Winnipeg"
                maxWidth="200px"
              />
            </LogoCell>
            <LogoCell className="px-4">
              <LabelText>{t("youth_delegate_champion")}</LabelText>
            </LogoCell>
            <LogoCell>
              <SponsorLogo
                src="/asper-foundation-logo.png?v=2"
                alt="The Asper Foundation"
                maxWidth="200px"
              />
            </LogoCell>
          </div>

          {/* Shelter Canadian — centered */}
          <div className="flex justify-center py-2">
            <SponsorLogo
              src="/shelter-canadian-logo.png?v=2"
              alt="Shelter Canadian Properties Limited"
              maxWidth="420px"
            />
          </div>

          {/* Winnipeg Foundation — centered */}
          <div className="flex justify-center py-2">
            <SponsorLogo
              src="/winnipeg-foundation-logo.png?v=3"
              alt="Winnipeg Foundation"
              maxWidth="340px"
            />
          </div>

          {/* Walrus sponsor */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 items-center justify-items-center">
            <LogoCell className="sm:justify-end sm:pr-4">
              <LabelText>{t("in_circle_sponsor")}</LabelText>
            </LogoCell>
            <LogoCell className="sm:justify-start sm:pl-4">
              <SponsorLogo
                src="/walrus-logo.png?v=4"
                alt="The Walrus"
                maxWidth="220px"
              />
            </LogoCell>
          </div>

          {/* TRSM / Diversity Institute | Black Manitoba Network */}
          <LogoRow>
            <LogoCell>
              <SponsorLogo
                src="/trsm-diversity-institute-logo.png"
                alt="Ted Rogers School of Management and Diversity Institute"
                maxWidth="360px"
              />
            </LogoCell>
            <LogoCell>
              <SponsorLogo
                src="/black-manitoba-network-logo.png?v=3"
                alt="Black Manitoba Network"
                maxWidth="260px"
              />
            </LogoCell>
          </LogoRow>
        </section>
      </main>
      <Footer />
    </>
  );
}
