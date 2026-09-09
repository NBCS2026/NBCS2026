import Image from "next/image";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Facebook } from "./svg/facebook";
import { Foundation } from "./svg/foundation";
import { Instagram } from "./svg/instagram";
import { LinkedIn } from "./svg/LinkedIn";

export function Footer() {
  const t = useTranslations("footer");
  const params = useParams<{ locale: string }>();
  const { locale } = params;
  return (
    <footer className="bg-[#5D1831]">
      <SponsorFooterBand locale={locale} />
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
                src="/africandescent-emblem.jpg"
                alt="International Decade for People of African Descent 2015-2024"
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
  const partners = [
    { src: "/sponsor_2.png", alt: "Travel Manitoba", className: "max-h-9" },
    {
      src: locale === "fr" ? "/sponsor_6.jpg" : "/sponsor_5.jpg",
      alt: "Canada Life",
      className: "max-h-11",
    },
    { src: "/sponsor_4.png", alt: "Tourism Winnipeg", className: "max-h-12" },
    {
      src: "/sponsor_3.png",
      alt: "Economic Development Winnipeg",
      className: "max-h-9",
    },
    {
      src: "/manitoba-logo.png",
      alt: "Province of Manitoba",
      className: "max-h-9",
    },
    { src: "/porter-logo.png", alt: "Porter Airlines", className: "max-h-12" },
    {
      src: locale === "fr" ? "/sponsor_7.png" : "/encore-logo-en.png",
      alt: "Encore",
      className: "max-h-9",
    },
    {
      src: "/crrf-logo.png",
      alt: "Canadian Race Relations Foundation",
      className: "max-h-10",
    },
    {
      src: "/sponsor_8.png",
      alt: "Delta Hotels Winnipeg",
      className: "max-h-14",
    },
    {
      src: "/asper-foundation-logo.png",
      alt: "The Asper Foundation",
      className: "max-h-10",
    },
    {
      src: "/shelter-canadian-logo.png",
      alt: "Shelter Canadian Properties Limited",
      className: "max-h-8",
    },
    {
      src: "/winnipeg-foundation-logo.png",
      alt: "The Winnipeg Foundation",
      className: "max-h-9",
    },
    {
      src: "/trsm-diversity-institute-logo.png",
      alt: "Diversity Institute",
      className: "max-h-9",
    },
    {
      src: "/black-manitoba-network-logo.png",
      alt: "Black Manitoba Network",
      className: "max-h-12",
    },
  ];

  return (
    <section
      className="border-t border-[#E8D4DB] bg-white px-5 py-10 sm:py-12"
      aria-label={
        locale === "fr"
          ? "Commanditaires et partenaires"
          : "Sponsors and partners"
      }
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-9 flex flex-col items-center gap-4 border-b border-[#E8D4DB] pb-9">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-[#5D1831]">
            {locale === "fr" ? "Commanditaire principal" : "Presenting Sponsor"}
          </p>
          <img
            src="/sponsor_1.png"
            alt="TD Bank Group"
            className="h-24 w-28 object-contain"
            loading="lazy"
          />
        </div>
        <div className="mb-9 grid gap-4 border-b border-[#E8D4DB] pb-9 sm:grid-cols-3">
          <div className="flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl bg-[#FAF6F7] p-5 text-center">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.12em] text-[#5D1831]">
              {locale === "fr" ? "Partenaire média" : "Media Partner"}
            </p>
            <img
              src="/cbc-logo.png"
              alt="CBC"
              className="max-h-10 max-w-[180px] object-contain"
              loading="lazy"
            />
          </div>
          <div className="flex min-h-32 flex-col items-center justify-center gap-2 rounded-2xl bg-[#FAF6F7] p-5 text-center">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.12em] text-[#5D1831]">
              {locale === "fr"
                ? "Partenaire et champion de la jeunesse"
                : "Youth Delegate Champion"}
            </p>
            <p className="font-heading text-xl font-black text-[#1E1E1E]">
              John Beck
            </p>
          </div>
          <div className="flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl bg-[#FAF6F7] p-5 text-center">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.12em] text-[#5D1831]">
              {locale === "fr"
                ? "Commanditaire du Cercle des femmes noires"
                : "In-Circle Women’s Gathering Sponsor"}
            </p>
            <img
              src="/walrus-logo.png"
              alt="The Walrus"
              className="max-h-8 max-w-[180px] object-contain"
              loading="lazy"
            />
          </div>
        </div>
        <p className="mb-7 text-center font-heading text-sm font-bold uppercase tracking-[0.16em] text-[#5D1831]">
          {locale === "fr"
            ? "Avec le soutien de nos partenaires"
            : "With support from our partners"}
        </p>
        <div className="grid grid-cols-2 items-center justify-items-center gap-x-7 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {partners.map((partner) => (
            <img
              key={partner.alt}
              src={partner.src}
              alt={partner.alt}
              className={`max-w-[150px] object-contain ${partner.className}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
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
