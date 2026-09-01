"use client";

import { BizzaboRegistrationWidget } from "@/components/bizzabo-registration-widget";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/logo";
import { NavLink } from "@/components/nav-link";
import { LangSelect } from "@/components/lang-select";
import { StayDetailsExpand } from "@/components/stay-details-expand";
import ToggleMenu from "@/components/toggle-menu";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Link } from "@/i18n/navigation";

const GRADIENT_BG =
  "linear-gradient(163.81deg, #5D1831 15.12%, #1C040D 88.75%)";

export default function Page() {
  const params = useParams<{ locale: string }>();
  const t = useTranslations("home");
  const { locale } = params;
  const isFr = locale === "fr";

  const registerHint = isFr
    ? "Inscrivez-vous ci-dessous via notre portail sécurisé."
    : "Register below through our secure registration portal.";

  return (
    <>
      <div className="min-h-screen">
        <section className="relative min-h-screen flex flex-col">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/ticket-hero-gradient.png'), url('/ticket-hero-image.png')`,
            }}
          />

          <div className="relative z-10 flex-1 flex flex-col">
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

            <div className="flex-1 flex items-center justify-center">
              <div className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 text-center text-white w-full">
                <p className="font-heading font-light text-[20px] tracking-[0.95em] mb-4 text-white">
                  {t("ticket_registration")}
                </p>
                <h1 className="font-heading font-black text-[clamp(36px,5.5vw,85px)] tracking-[0.1em] leading-none mb-6 text-white">
                  {t("ticket_title")}
                </h1>
              </div>
            </div>
          </div>
        </section>

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

        <section className="bg-[#F5F5F5] py-8 sm:py-12 md:py-16">
          <div className="max-w-[1568px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-5 2xl:px-8">
            {locale === "fr" && (
              <div className="mb-8 md:mb-12 text-center max-w-4xl mx-auto">
                <p className="font-body text-[15px] lg:text-[22px] text-[#1e1e1eb2] font-medium mb-4 leading-relaxed">
                  Joignez-vous à des leaders, des artistes, des aînés, des jeunes, des décideurs politiques et des acteurs du changement de partout au Canada pour trois jours de rencontres, de dialogue, de créativité et d&apos;action.
                </p>
                <p className="font-body text-[15px] lg:text-[22px] text-[#1e1e1eb2] font-medium mb-8 leading-relaxed">
                  Le Sommet pancanadien des communautés noires rassemble les communautés pour célébrer la culture noire, amplifier les expériences vécues et façonner collectivement un avenir plus juste et plus inclusif pour un Canada meilleur.
                </p>
              </div>
            )}

            <div
              className="rounded-2xl sm:rounded-3xl lg:rounded-[40px] p-3 sm:p-4 md:p-5 lg:p-6"
              style={{ background: GRADIENT_BG, border: "1px solid #5D1831" }}
            >
              <div className="rounded-xl sm:rounded-2xl lg:rounded-[32px] bg-white p-4 sm:p-6 md:p-8 lg:p-10 space-y-8">
                <div className="space-y-4">
                  <p className="font-body text-[15px] lg:text-[18px] text-[#1E1E1EB2] font-medium leading-relaxed text-center">
                    {registerHint}
                  </p>
                  <BizzaboRegistrationWidget key={`bizzabo-${locale}`} />
                </div>
                <div className="rounded-xl sm:rounded-2xl lg:rounded-[28px] border border-[#E8D4DB] bg-[#FAF6F7] px-5 sm:px-8 py-6 sm:py-8 space-y-4">
                  <p className="font-heading text-[16px] sm:text-[20px] font-bold tracking-[0.12em] uppercase text-[#8C0C3A] text-center">
                    {isFr ? "Prochaine étape" : "Next step"}
                  </p>
                  <StayDetailsExpand isFr={isFr} tone="light" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-10 sm:py-14 md:py-16 mb-8 sm:mb-12">
          <div className="max-w-[1568px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-5 2xl:px-8">
            <h2 className="text-center text-[clamp(24px,3vw,36px)] font-bold tracking-[0.2em] mb-6 sm:mb-8">
              {isFr ? (
                <>
                  <span className="uppercase text-[#1E1E1E]">Soutenir l&apos;accès au</span>
                  <br />
                  <span className="uppercase text-[#8C0C3A]">
                    Sommet pancanadien des communautés noires
                  </span>
                </>
              ) : (
                <>
                  <span className="uppercase text-[#1E1E1E]">
                    Supporting Access to the
                  </span>
                  <br />
                  <span className="uppercase text-[#8C0C3A]">
                    National Black Canadians Summit
                  </span>
                </>
              )}
            </h2>

            <div className="max-w-4xl mx-auto space-y-6 text-center">
              {isFr ? (
                <>
                  <p className="font-body text-[15px] lg:text-[22px] text-[#1E1E1EB2] font-medium leading-relaxed">
                    Le Sommet pancanadien des communautés noires est un événement
                    subventionné à 90&nbsp;%. L&apos;inscription comprend
                    l&apos;accès à toutes les sessions du Sommet, aux repas, aux
                    cérémonies d&apos;ouverture et de clôture, ainsi qu&apos;à
                    des occasions de réseautage.
                  </p>
                  <p className="font-body text-[15px] lg:text-[22px] text-[#1E1E1EB2] font-medium leading-relaxed">
                    Nous tenons à remercier chaleureusement nos partenaires,
                    dont l&apos;engagement a permis de réduire les obstacles à
                    la participation au Sommet pancanadien des communautés
                    noires. Pour en savoir plus sur leur générosité, veuillez
                    consulter notre page{" "}
                    <Link
                      href="/partners"
                      className="underline underline-offset-2 text-[#8C0C3A] font-semibold hover:opacity-80 transition-opacity"
                    >
                      Partenaires
                    </Link>
                    .
                  </p>
                  <p className="font-body text-[15px] lg:text-[22px] text-[#1E1E1EB2] font-medium leading-relaxed">
                    Vous ne pouvez pas assister au 5e Sommet pancanadien des
                    communautés noires&nbsp;? Envisagez de soutenir le Fonds
                    d&apos;accessibilité du Sommet pancanadien des communautés
                    noires, qui contribue au financement des frais
                    d&apos;inscription des délégués au Sommet. Chaque don
                    contribue à l&apos;organisation du Sommet et à faciliter
                    l&apos;accès à ce rassemblement national.
                  </p>
                </>
              ) : (
                <>
                  <p className="font-body text-[15px] lg:text-[22px] text-[#1E1E1EB2] font-medium leading-relaxed">
                    The National Black Canadians Summit is an event subsidized
                    at 90%. Registration includes access to all Summit sessions,
                    meals, opening and closing sessions, and networking
                    opportunities.
                  </p>
                  <p className="font-body text-[15px] lg:text-[22px] text-[#1E1E1EB2] font-medium leading-relaxed">
                    We would like to extend our heartfelt thanks to our
                    supporters, whose commitment has lowered the barrier to
                    participating at the National Black Canadians Summit. To
                    learn more about their generosity, please visit our{" "}
                    <Link
                      href="/partners"
                      className="underline underline-offset-2 text-[#8C0C3A] font-semibold hover:opacity-80 transition-opacity"
                    >
                      Partners
                    </Link>{" "}
                    page.
                  </p>
                  <p className="font-body text-[15px] lg:text-[22px] text-[#1E1E1EB2] font-medium leading-relaxed">
                    Unable to attend the 5th National Black Canadians Summit?
                    Consider supporting the National Black Canadians Summit
                    Accessibility Fund, which provides support for the
                    subsidization of registration for Summit delegates. Every
                    donation goes toward delivering the Summit and supporting
                    access to this National Convening.
                  </p>
                </>
              )}

              <div className="pt-2">
                <a
                  href="https://www.canadahelps.org/en/dn/141226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-body text-[15px] lg:text-[22px] text-[#8C0C3A] font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity tracking-[0.08em] uppercase"
                >
                  {isFr ? "Faites un don dès aujourd'hui" : "Donate Today"}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
