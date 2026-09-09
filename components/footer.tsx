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
    <footer className="bg-[#5D1831]">
      {showSponsors && <SponsorFooterBand locale={locale} />}
      <div className="pt-8 sm:pt-12 md:pt-16 lg:pt-[65px] pb-8 sm:pb-10 md:pb-12 lg:pb-[50px]">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] px-4 sm:px-5 2xl:px-8 3xl:px-16 4xl:px-24 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-9 2xl:gap-12 3xl:gap-16 4xl:gap-20">
          <div className="flex flex-col gap-6 sm:gap-8 justify-between md:gap-12 lg:gap-20">
            <div className="sm:space-y-2 text-left">
              <p className="text-white">{t("text_one")}</p>
              <p className="text-[#9D989A]">{t("text_two")}</p>
            </div>
            <div className="flex flex-col items-start justify-between">
              {/* <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
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
            </div> */}

              <div className="mb-16 lg:mb-32 w-full flex flex-col items-center md:items-start">
                <p className="text-[13px] text-white font-extralight mb-2 text-center md:text-left">
                  {t("text_ten")}
                </p>
                <div className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px]">
                  <Foundation className="w-full h-auto" />
                </div>
              </div>
              <div className="self-start">
                <p className="text-[#9D989A] text-[12px] md:text-[16px]">
                  {t("text_four")}
                </p>
                <p className="text-[#9D989A] text-[12px] md:text-[16px] text-left">
                  {t("text_five")}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center order-first md:order-none">
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
          <div>
            <FooterNav />
            {/* <div className="mb-6 lg:mb-14">
            <p className="text-[13px] text-white font-extralight">{t("text_ten")}</p>
            <Foundation />
          </div> */}
            <div className="mb-8">
              <p className="text-white font-medium">{t("text_six")}</p>
              <p className="text-[#8F9FA3]">+1 (613)-562-9393</p>
              <a className="text-[#8F9FA3]" href="mailto:nbcs-spcn@fmjf.ca">
                nbcs-spcn@fmjf.ca
              </a>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-2.5">
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
            <div className="flex justify-between">
              <div>
                <p className="text-white font-medium">{t("text_seven")}</p>
                <p className="text-[#8F9FA3]">{t("text_eight")}</p>
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
      <ul className="flex text-[#8F9FA3] gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8 lg:mb-14 flex-wrap gap-y-2.5">
        {Links.map((link) => (
          <Link key={link.url} href={link.url}>
            {link.title}
          </Link>
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
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    }
  };
  return (
    <div className="space-x-3">
      <button
        type="button"
        onClick={() => switchLang("en")}
        className={`${
          locale === "en" ? "text-white" : "text-[#8F9FA3]"
        } cursor-pointer`}
      >
        EN
      </button>
      <span className="text-white">|</span>
      <button
        type="button"
        onClick={() => switchLang("fr")}
        className={`${
          locale === "fr" ? "text-white" : "text-[#8F9FA3]"
        } cursor-pointer`}
      >
        FR
      </button>
    </div>
  );
}
