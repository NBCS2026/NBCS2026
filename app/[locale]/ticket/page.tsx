"use client";

import { Footer } from "@/components/footer";
import { Logo } from "@/components/logo";
import { NavLink } from "@/components/nav-link";
import { LangSelect } from "@/components/lang-select";
import ToggleMenu from "@/components/toggle-menu";
import { CustomTicketWidget } from "@/components/custom-ticket-widget";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const BIZZABO_EVENT_ID = process.env.NEXT_PUBLIC_BIZZABO_EVENT_ID || "792278";

export default function Page() {
  const params = useParams<{ locale: string }>();
  const t = useTranslations("home");
  const { locale } = params;

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section with Background Image and Gradient Overlay */}
        <section className="relative min-h-screen flex flex-col">
          {/* Background Image with Gradient Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/ticket-hero-gradient.png'), url('/ticket-hero-image.png')`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex-1 flex flex-col">
            {/* Dark Header */}
            <header className="flex items-center text-white max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto pt-12 px-8 md:px-12 lg:px-16 2xl:px-20 3xl:px-16 4xl:px-24 w-full">
              <Logo />
              <NavLink className="hidden md:block flex-1 mx-8 3xl:mx-12 text-white" />
              <ul className="md:flex gap-5 items-center hidden ml-auto md:mr-8 lg:mr-12 2xl:mr-20 3xl:mr-32">
                <li>
                  <LangSelect />
                </li>

              </ul>
              <ToggleMenu local={locale as string} className="ml-auto md:ml-0" />
            </header>

            {/* Hero Content */}
            <div className="flex-1 flex items-center justify-center">
              <div className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 text-center text-white w-full">
                <p
                  className="font-heading font-light text-[20px] tracking-[0.95em] mb-4 text-white"
                >
                  {t("ticket_registration")}
                </p>
                <h1
                  className="font-heading font-black text-[clamp(36px,5.5vw,85px)] tracking-[0.1em] leading-none mb-6 text-white"
                >
                  {t("ticket_title")}
                </h1>

              </div>
            </div>


          </div>
        </section>

        {/* Registration Intro + Heading above Bizzabo */}
        <section className="bg-white py-8 sm:py-10 md:py-12">
          <div className="max-w-[1568px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-5 2xl:px-8">
            <h2 className="text-center text-[clamp(24px,3vw,36px)] font-bold tracking-[0.2em] mb-6">
              <span className="uppercase text-[#1E1E1E]">{t("seat_title_part1")} </span>
              <span className="uppercase text-[#8C0C3A]">{t("seat_title_part2")}</span>
            </h2>

            {locale !== "fr" && (
              <div className="max-w-3xl mx-auto space-y-4 text-center">
                <p className="font-body text-[15px] lg:text-[22px] text-[#1E1E1EB2] font-medium leading-relaxed">
                  Join leaders, artists, elders, youth, policymakers, and change-makers from across Canada for three days of connection, dialogue, creativity, and action.
                </p>
                <p className="font-body text-[15px] lg:text-[22px] text-[#1E1E1EB2] font-medium leading-relaxed">
                  The National Black Canadians Summit brings communities together to celebrate Black culture, amplify lived experiences, and collectively shape a more just and inclusive future for a better Canada.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Custom Bizzabo Registration Widget */}
        <section className="bg-[#F5F5F5] py-8 sm:py-12 md:py-16">
          <div className="max-w-[1568px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-5 2xl:px-8">
            {/* French Content - Only show for French locale */}
            {locale === "fr" && (
              <div className="mb-8 md:mb-12 text-center max-w-4xl mx-auto">
                <p className="font-body text-[15px] lg:text-[22px] text-[#1e1e1eb2] font-medium mb-4 leading-relaxed">
                  Joignez-vous à des leaders, des artistes, des aînés, des jeunes, des décideurs politiques et des acteurs du changement de partout au Canada pour trois jours de rencontres, de dialogue, de créativité et d'action.
                </p>
                <p className="font-body text-[15px] lg:text-[22px] text-[#1e1e1eb2] font-medium mb-8 leading-relaxed">
                  Le Sommet pancanadien des communautés noires rassemble les communautés pour célébrer la culture noire, amplifier les expériences vécues et façonner collectivement un avenir plus juste et plus inclusif pour un Canada meilleur.
                </p>
              </div>
            )}
            
            {/* Custom Ticket Widget Container */}
            <div
              className="flex flex-col items-start p-4 sm:p-6 md:p-8 lg:p-12 gap-6 md:gap-8 lg:gap-12 rounded-2xl sm:rounded-3xl lg:rounded-[40px]"
              style={{
                background:
                  "linear-gradient(163.81deg, #5D1831 15.12%, #1C040D 88.75%)",
                border: "1px solid #5D1831",
              }}
            >
              {/* Widget Container */}
              <div
                className="flex flex-col justify-center items-start p-4 sm:p-5 md:p-6 gap-6 md:gap-8 lg:gap-12 w-full rounded-xl sm:rounded-2xl lg:rounded-[32px] relative"
                style={{
                  background:
                    "linear-gradient(163.81deg, #5D1831 15.12%, #1C040D 88.75%)",
                  border: "1px solid #8C0C3A",
                }}
              >
                {/* Custom Ticket Widget */}
                <CustomTicketWidget locale={locale} eventId={BIZZABO_EVENT_ID} />
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
