import Image from "next/image";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { SponsorDirectory } from "./sponsor-directory";
import { Facebook } from "./svg/facebook";
import { Foundation } from "./svg/foundation";
import { Instagram } from "./svg/instagram";
import { LinkedIn } from "./svg/LinkedIn";

export function Footer({ showSponsors = true }: { showSponsors?: boolean }) {
  const t = useTranslations("footer");
  const params = useParams<{ locale: string }>();
  const { locale } = params;
  return (
    <footer className="bg-[#5D0826]">
      {showSponsors && <SponsorFooterBand locale={locale} />}
      <div className="py-10 sm:py-12 lg:py-14">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] px-4 sm:px-5 2xl:px-8 3xl:px-16 4xl:px-24 mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 lg:gap-x-12 items-start">
          <div className="flex flex-col gap-7">
            <div className="space-y-2 text-left leading-relaxed">
              <p className="text-white">{t("text_one")}</p>
              <p className="text-[#D4C7CD]">{t("text_two")}</p>
            </div>
            <div className="flex flex-col items-start gap-6">

              <div className="w-full flex flex-col items-start gap-2">
                <p className="text-[13px] text-white font-extralight text-left">
                  {t("text_ten")}
                </p>
                <div className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px]">
                  <Foundation className="w-full h-auto" />
                </div>
              </div>
              <div className="self-start">
                <p className="text-[#D4C7CD] text-[12px] md:text-[16px]">
                  {t("text_four")}
                </p>
                <p className="text-[#D4C7CD] text-[12px] md:text-[16px] text-left">
                  {t("text_five")}
                </p>
              </div>
            </div>
          <div className="flex items-start justify-start">
            <div className="relative w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] aspect-[3.21/1]">
              <Image
                src="/africandescent-emblem.png"
                alt="Second International Decade for People of African Descent 2025–2034"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, 320px"
              />
            </div>
          </div>
          </div>
          <div>
            <FooterNav />
            <div className="mt-7 space-y-1.5">
              <p className="text-white font-medium">{t("text_six")}</p>
              <p className="text-[#D4C7CD]">+1 (613)-562-9393</p>
              <a className="text-[#D4C7CD]" href="mailto:nbcs-spcn@fmjf.ca">
                nbcs-spcn@fmjf.ca
              </a>

              <div className="flex items-center gap-4 pt-3">
                <Link
                  href="https://www.instagram.com/michaellej_fdn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram — michaellej_fdn"
                >
                  <Instagram />
                </Link>
                <Link
                  href="https://www.facebook.com/FondationMichaelleJeanFoundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook — Fondation Michaëlle Jean Foundation"
                >
                  <Facebook />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/fondationmjfoundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn — Fondation Michaëlle Jean Foundation"
                  className="bg-white rounded-full size-9 flex items-center justify-center"
                >
                  <LinkedIn width={18} height={18} className="text-dark-red" />
                </Link>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-10 gap-y-5">
              <div>
                <p className="text-white font-medium">{t("text_seven")}</p>
                <p className="text-[#D4C7CD]">{t("text_eight")}</p>
              </div>
              <div>
                <p className="text-white">{t("text_nine")}</p>
                <Switcher locale={locale} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SponsorFooterBand({ locale }: { locale: string }) {
  return (
    <section
      className="border-t border-[#E8D4DB] bg-[#FFFDFC] px-5 py-10 sm:px-8 sm:py-14"
      aria-label={
        locale === "fr"
          ? "Commanditaires et partenaires"
          : "Sponsors and partners"
      }
    >
      <SponsorDirectory locale={locale} compact />
    </section>
  );
}

function FooterNav() {
  const t = useTranslations("footer");
  const Links = [
    {
      title: t("home"),
      url: "/",
    },
    {
      title: t("about"),
      url: "/about",
    },
    {
      title: t("program"),
      url: "/program",
    },
    {
      title: t("summit_week"),
      url: "/summit-week",
    },
    {
      title: t("exhibitors"),
      url: "/exhibitors",
    },
    {
      title: t("feedback"),
      url: "/feedback",
    },
    {
      title: t("registration"),
      url: "/ticket",
    },
    {
      title: t("partners"),
      url: "/partners",
    },
    {
      title: t("info"),
      url: "/info",
    },
    {
      title: t("contact"),
      url: "/contact",
    },
  ];
  return (
    <nav>
      <ul className="grid grid-cols-2 text-[#D4C7CD] gap-x-6 gap-y-1">
        {Links.map((link) => (
          <li key={link.url}>
            <Link href={link.url} className="inline-flex min-h-11 items-center py-2 leading-snug">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Switcher({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLang = (newLocale: string) => {
    if (newLocale !== locale) {
      const params = new URLSearchParams(window.location.search);
      params.delete("lang");
      const query = params.toString();
      router.replace(`${pathname}${query ? `?${query}` : ""}${window.location.hash}`, { locale: newLocale });
    }
  };
  return (
    <div className="space-x-3">
      <button
        type="button"
        onClick={() => switchLang("en")}
        className={`${
          locale === "en" ? "text-white" : "text-[#D4C7CD]"
        } cursor-pointer`}
      >
        EN
      </button>
      <span className="text-white">|</span>
      <button
        type="button"
        onClick={() => switchLang("fr")}
        className={`${
          locale === "fr" ? "text-white" : "text-[#D4C7CD]"
        } cursor-pointer`}
      >
        FR
      </button>
    </div>
  );
}
