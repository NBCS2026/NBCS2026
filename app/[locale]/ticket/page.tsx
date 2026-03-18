"use client";

import { useEffect } from "react";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/logo";
import { NavLink } from "@/components/nav-link";
import { LangSelect } from "@/components/lang-select";
import { Button } from "@/components/ui/button";
import ToggleMenu from "@/components/toggle-menu";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Link, useRouter } from "@/i18n/navigation";

const BIZZABO_EVENT_ID = process.env.NEXT_PUBLIC_BIZZABO_EVENT_ID || "792278";

export default function Page() {
  const params = useParams<{ locale: string }>();
  const t = useTranslations("home");
  const { locale } = params;
  const router = useRouter();

  useEffect(() => {
    // Verify and set language parameter for Bizzabo (fallback check)
    const langValue = locale === "fr" ? "fr-ca" : "en";
    const url = new URL(window.location.href);
    const currentLang = url.searchParams.get('lang');
    
    // Verify URL parameter is set correctly (defensive check)
    if (currentLang !== langValue) {
      url.searchParams.set('lang', langValue);
      window.history.replaceState({}, '', url.toString());
    }

    // Cleanup function to remove existing Bizzabo elements
    const cleanup = () => {
      // Remove all Bizzabo widgets
      const existingWidgets = document.querySelectorAll('.bz-widget-tickets-inline, .bz-widget-popup');
      existingWidgets.forEach(widget => {
        widget.innerHTML = '';
      });

      // Remove existing scripts if they exist
      const existingTicketsScript = document.getElementById(
        "bz-inline-registration-script-952c7914-98bb-4958-8add-066e946ee763"
      );
      const existingPopupScript = document.getElementById(
        "bz-popup-registration-script-952c7914-98bb-4958-8add-066e946ee763"
      );
      
      if (existingTicketsScript) existingTicketsScript.remove();
      if (existingPopupScript) existingPopupScript.remove();

      // Remove any Bizzabo iframes or other elements
      const bizzaboElements = document.querySelectorAll('[id*="bizzabo"], [class*="bz-"]');
      bizzaboElements.forEach(el => {
        if (el.tagName === 'SCRIPT' || el.id.includes('bizzabo') || el.className.includes('bz-widget')) {
          // Keep widget containers, only remove scripts and iframes
          if (el.tagName === 'SCRIPT' || el.tagName === 'IFRAME') {
            el.remove();
          }
        }
      });
    };

    // Clean up first
    cleanup();

    // Load scripts when DOM is ready
    const loadScripts = () => {
      // Determine language code for Bizzabo widget
      const langCode = locale === "fr" ? "fr-ca" : "en";
      const localeValue = locale === "fr" ? "fr-ca" : "en";
      
      // --- Inline Tickets Script ---
      const ticketsScript = document.createElement("script");
      ticketsScript.type = "text/javascript";
      ticketsScript.async = true;
      ticketsScript.src =
        `https://organizer.bizzabo.com/widgets/flows/tickets/ticketsSelect.js?lang=${langCode}`;
      ticketsScript.id =
        "bz-inline-registration-script-952c7914-98bb-4958-8add-066e946ee763";
      ticketsScript.setAttribute("data-event-id", BIZZABO_EVENT_ID);
      ticketsScript.setAttribute("data-locale", localeValue);
      
      // Error handling for script loading
      ticketsScript.onerror = () => {
        // Script loading error - handled silently
      };

      // --- Popup Registration Script ---
      const popupScript = document.createElement("script");
      popupScript.type = "text/javascript";
      popupScript.async = true;
      popupScript.src =
        `https://organizer.bizzabo.com/widgets/flows/popup/registrationPopup.js?lang=${langCode}`;
      popupScript.id =
        "bz-popup-registration-script-952c7914-98bb-4958-8add-066e946ee763";
      popupScript.setAttribute("data-event-id", BIZZABO_EVENT_ID);
      popupScript.setAttribute("data-registration-proxy", "true");
      popupScript.setAttribute("data-unique-name", BIZZABO_EVENT_ID);
      popupScript.setAttribute(
        "data-flow-id",
        "952c7914-98bb-4958-8add-066e946ee763"
      );
      popupScript.setAttribute("data-inline-widget", "true");
      popupScript.setAttribute("data-locale", localeValue);
      
      // Error handling for script loading
      popupScript.onerror = () => {
        // Script loading error - handled silently
      };

      document.body.appendChild(ticketsScript);
      document.body.appendChild(popupScript);
    };

    // Load scripts when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadScripts);
    } else {
      // DOM already ready, load immediately
      loadScripts();
    }

    return () => {
      cleanup();
    };
  }, [locale]);

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

        {/* French Warning Section */}
        {locale === "fr" && (
          <section className="w-full" style={{ backgroundColor: "#FFAC04" }}>
            <div className="max-w-[1568px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-5 2xl:px-8 py-6 md:py-8">
              <div className="flex items-start gap-3 mb-4">
                <h3 className="text-[#1E1E1E] font-bold text-[clamp(20px,2.5vw,28px)] uppercase tracking-wide">
                  AVIS
                </h3>
                <img
                  src="/alert-triangle.png"
                  alt="Alerte"
                  className="w-[clamp(20px,2.5vw,28px)] h-[clamp(20px,2.5vw,28px)] object-contain"
                />
              </div>
              <p className="text-[#1E1E1E] font-body text-[clamp(14px,1.8vw,18px)] leading-relaxed">
                En raison d'un problème technique, l'inscription en français peut s'afficher partiellement en anglais sur les navigateurs Chrome, Microsoft Edge, Safari, Opera et Vivaldi. Veuillez utiliser le navigateur Firefox pour accéder à la version complète en français.
              </p>
            </div>
          </section>
        )}

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

        {/* Bizzabo Registration Widget */}
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
            
            {/* Embedded Bizzabo widget for all locales */}
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
                  {/* Bizzabo Widget */}
                  <div
                    className="w-full"
                    style={{ display: "inline-flex", width: "100%" }}
                    key={`bizzabo-widget-${locale}`}
                  >
                    <div
                      className="bz-widget-tickets-inline w-full"
                      data-flow-id="952c7914-98bb-4958-8add-066e946ee763"
                      data-event-id={BIZZABO_EVENT_ID}
                      data-registration-proxy="true"
                      data-locale={locale === "fr" ? "fr-ca" : "en"}
                      lang={locale === "fr" ? "fr-ca" : locale}
                    />
                  </div>
                </div>
              </div>
          </div>
        </section>

        {/* Accommodation & Location CTA */}
        <section className="bg-white py-10 sm:py-12 mt-16 mb-16">
          <div className="max-w-[1568px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-5 2xl:px-8 text-center">
            <p className="font-body text-[15px] lg:text-[22px] text-[#1E1E1EB2] font-medium leading-relaxed">
              {locale === "fr" ? (
                <>
                  Consultez notre page{" "}
                  <span className="text-[#8C0C3A] font-semibold">
                    Hébergement et lieu
                  </span>{" "}
                  pour trouver des hôtels recommandés,
                  <br />
                  des conseils de voyage et tout ce dont vous avez besoin pour
                  planifier votre séjour.
                </>
              ) : (
                <>
                  Explore our{" "}
                  <span className="text-[#8C0C3A] font-semibold">
                    Accommodation &amp; Location
                  </span>{" "}
                  page to find recommended hotels,
                  <br />
                  travel tips, and everything you need to plan your stay.
                </>
              )}
            </p>

            <div className="mt-6">
              <Link
                href="/info"
                className="inline-flex items-center justify-center bg-[#8C0C3A] hover:bg-[#5D1831] text-white border border-[#8C0C3A] transition-colors cursor-pointer rounded-full h-[44px] sm:h-[50px] px-8 text-[18px] font-semibold w-full sm:w-[420px] max-w-[420px] mx-auto"
              >
                {locale === "fr" ? "Planifiez votre séjour" : "Plan Your Stay"}
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <style jsx global>{`
        /* Style Bizzabo Widget to match design */
        .bz-widget-tickets-inline {
          width: 100% !important;
        }
        .bz-widget-tickets-inline * {
          color: #FAFAFA !important;
          font-family: 'Instrument Sans', sans-serif !important;
        }
        .bz-widget-tickets-inline button,
        .bz-widget-tickets-inline .bz-button {
          background: #8C0C3A !important;
          border: 1px solid #8C0C3A !important;
          border-radius: 12px !important;
          color: #FFFFFF !important;
          padding: 12px 24px !important;
          font-weight: 600 !important;
        }
        .bz-widget-tickets-inline button:hover,
        .bz-widget-tickets-inline .bz-button:hover {
          background: #5D1831 !important;
        }
        .bz-widget-tickets-inline input,
        .bz-widget-tickets-inline select {
          background: radial-gradient(93.99% 52.1% at 14.02% 32.06%, rgba(140, 12, 58, 0.2) 0%, rgba(140, 12, 58, 0) 100%), rgba(10, 12, 17, 0.1) !important;
          border: 1px solid rgba(140, 12, 58, 0.5) !important;
          border-radius: 12px !important;
          color: #FFFFFF !important;
          padding: 12px !important;
        }
        .bz-widget-tickets-inline .bz-ticket-option {
          background: transparent !important;
          border: 2px solid #8C0C3A !important;
          border-radius: 12px !important;
          padding: 12px 24px !important;
        }
        .bz-widget-tickets-inline .bz-ticket-option.selected {
          background: #8C0C3A !important;
          border-color: #8C0C3A !important;
        }
        .bz-widget-tickets-inline label {
          color: #FAFAFA !important;
        }

      `}</style>
    </>
  );
}
