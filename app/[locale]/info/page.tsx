"use client";

import { Footer } from "@/components/footer";
import { LangSelect } from "@/components/lang-select";
import { NavLink } from "@/components/nav-link";
import ToggleMenu from "@/components/toggle-menu";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import { Logo } from "@/components/logo";
import Image from "next/image";

export default function Page() {
  const params = useParams<{ locale: string }>();
  const t = useTranslations("info");
  const tHome = useTranslations("home");
  const { locale } = params;
  const router = useRouter();
  return (
    <>
      <div className="h-screen relative bg-[linear-gradient(to_bottom,rgba(93,4,36,0.8)_0%,rgba(115,10,47,0.6)_32%,rgba(102,9,42,0.4)_66%,rgba(89,8,37,0.2)_100%),url('/6062F_HR-cityroom.jpg')] bg-cover bg-center">
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
        <div className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 text-center pt-16 md:pt-24 lg:pt-32 xl:pt-40">
          <p
            className="font-heading bold text-[clamp(14px,1.82vw,28px)] tracking-[0.40em] text-white max-w-[38ch] mx-auto md:max-w-full mb-5"
          >
            {t("pretitle")}
          </p>
          <h1
            className="font-heading font-black text-[clamp(36px,4.62vw,71px)] tracking-widest text-white leading-none"
          >
            {t("title")}
          </h1>
        </div>
      </div>
      <main className="bg-white rounded-t-2xl pt-14">
        <section className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-6 md:gap-8 lg:gap-10 2xl:gap-12 mb-12 sm:mb-16 md:mb-24 lg:mb-[142px]">
          <div>
            <div className="mb-8 lg:mb-10 text-center md:text-start">
              <p className="font-medium text-[15px] lg:text-[21px] text-light-red mb-8">
                {t("text_one")}
              </p>
              <h2 className="font-bold text-[24px] lg:text-[43px]">
                {t("text_two")}
              </h2>

              <p className="tracking-widest max-w-[38ch] md:max-w-[86ch] mx-auto text-light-red font-medium text-[clamp(14px,1.43vw,22px)]">
                {t("post_title")}
              </p>
            </div>
            <div className="space-y-2 mb-7">
              <p className="font-medium text-[15px] lg:text-[21px] text-dark-gray">
                <span className="text-black font-bold">{t("text_three")}</span>{" "}
                {t("text_four")}
              </p>
              <p className="font-medium text-[15px] lg:text-[21px] text-dark-gray">
                <span className="text-black font-bold">{t("text_five")}</span>{" "}
                {t("text_six")}
              </p>
              <p className="font-medium text-[15px] lg:text-[21px] text-dark-gray">
                <span className="text-black font-bold">{t("text_seven")}</span>{" "}
                {t("text_eight")}
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-[15px] lg:text-[21px] text-light-red">
                {t("text_eleven")}
              </p>
              <p className="font-medium text-[15px] lg:text-[21px] text-dark-gray">
                <span className="text-black font-bold">{t("text_twelve")}</span>{" "}
                {t("text_thirteen")}
              </p>
              <p className="font-medium text-[15px] lg:text-[21px] text-dark-gray">
                <span className="text-black font-bold">
                  {t("text_fourteen")}
                </span>{" "}
                {t("text_fifteen")}
              </p>
              <p className="font-medium text-[15px] lg:text-[21px] text-dark-gray">
                <span className="text-black font-bold">
                  {t("text_sixteen")}
                </span>{" "}
                {t("text_seventeen")}
              </p>
            </div>
          </div>
          <div className="w-full">
            <div
              className="flex flex-col items-start p-4 sm:p-6 md:p-8 lg:p-12 gap-6 md:gap-8 rounded-2xl sm:rounded-3xl lg:rounded-[40px]"
              style={{
                background:
                  "linear-gradient(163.81deg, #5D1831 15.12%, #1C040D 88.75%)",
                border: "1px solid #5D1831",
              }}
            >
              <h2
                className="font-heading text-white text-[clamp(32px,4vw,48px)] font-black tracking-widest"
              >
                {tHome("location_title")}
              </h2>
              <div className="w-full flex flex-col gap-6">
                <div className="text-white">
                  <h3 className="font-heading text-[clamp(20px,2.5vw,28px)] font-bold mb-2">
                    {tHome("location_venue")}
                  </h3>
                  <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
                    {tHome("location_address")}
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=375+York+Ave,+Winnipeg,+MB+R3C+3J3,+Canada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-xl sm:rounded-2xl lg:rounded-[32px] overflow-hidden block cursor-pointer transition-opacity hover:opacity-90"
                >
                  <img
                    src="/rbc-convention-centre-map.png"
                    alt="RBC Convention Centre Winnipeg Location Map - Click to open in Google Maps"
                    className="w-full h-auto object-cover"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 mb-12 sm:mb-16 md:mb-24 lg:mb-[142px]">
          <div
            className="flex flex-col items-start p-4 sm:p-6 md:p-8 lg:p-12 gap-6 md:gap-8 lg:gap-12 rounded-2xl sm:rounded-3xl lg:rounded-[40px] relative min-h-[600px] lg:min-h-[700px]"
            style={{
              background:
                "linear-gradient(163.81deg, #5D1831 15.12%, #1C040D 88.75%)",
              border: "1px solid #5D1831",
            }}
          >
            <h2 className="font-heading text-white text-[clamp(32px,4vw,48px)] font-black tracking-widest">
              {t("delta_title")}
            </h2>
            <div className="w-full flex flex-col gap-6">
              <div className="text-white space-y-4">
                {locale === "fr" ? (
                  <>
                    <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
                      Nous invitons tous les participants au Sommet pancanadien des communautés noires à séjourner au Delta Hotels Winnipeg, notre hôtel officiel pour le 5e Sommet pancanadien des communautés noires !
                    </p>
                    <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
                      Situé au cœur du centre-ville de Winnipeg, le Delta offre un hébergement confortable et pratique, à quelques pas des activités du Sommet. Rejoignez-nous dans ce cadre idéal pour rencontrer les autres participants tout au long de la semaine.
                    </p>
                    <div className="mt-4">
                      <h3 className="font-heading text-[clamp(20px,2.5vw,28px)] font-bold mb-2">
                        Adresse de l&apos;hôtel :
                      </h3>
                      <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
                        350 St Mary Ave,<br />
                        Winnipeg, MB R3C 3J2
                      </p>
                    </div>
                    <div className="mt-6">
                      <h3 className="font-heading text-[clamp(20px,2.5vw,28px)] font-bold mb-2">
                        Tarif de groupe préférentiel
                      </h3>
                      <p className="text-[clamp(16px,1.8vw,20px)] opacity-90 mb-2">
                        Un tarif de groupe spécial est proposé exclusivement aux participants au Sommet, dans la limite des chambres disponibles.
                      </p>
                      <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
                        <span className="font-bold">Tarif de groupe :</span> 229&nbsp;$ CAD par nuit<br />
                        <span className="font-bold">Dates du séjour :</span> du 15 au 22 septembre 2026<br />
                        <span className="font-bold">Date limite de réservation :</span> vendredi 21 août 2026
                      </p>
                      <p className="text-[clamp(16px,1.8vw,20px)] opacity-90 mt-4">
                        Nous encourageons nos clients à réserver tôt afin de profiter de ce tarif spécial et de séjourner au cœur de l&apos;expérience du Sommet.
                      </p>
                    </div>
                    <div className="mt-6 flex flex-col items-start gap-3">
                      <Button
                        onClick={() =>
                          window.open(
                            "https://www.marriott.com/event-reservations/reservation-link.mi?id=1747239523588&key=GRP&guestreslink2=true&app=resvlink",
                            "_blank"
                          )
                        }
                        className="bg-[#8C0C3A] hover:bg-[#5D1831] text-white border border-[#8C0C3A] transition-colors cursor-pointer rounded-full h-[50px] px-8 py-6 text-[18px] font-semibold"
                      >
                        Réservez ici
                      </Button>
                      <p className="text-white text-[14px] opacity-90">
                        ou composez le 1-800-268-1133 et mentionnez le code de bloc&nbsp;: BLC
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
                      We invite all National Black Canadians Summit attendees to stay at Delta Hotels Winnipeg, our official supporting hotel for the 5th National Black Canadians Summit!
                    </p>
                    <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
                      Located in the heart of downtown Winnipeg, the Delta offers a comfortable and convenient place to stay, just steps away from Summit activities. Join us in this ideal setting to connect with fellow attendees throughout the week.
                    </p>
                    <div className="mt-4">
                      <h3 className="font-heading text-[clamp(20px,2.5vw,28px)] font-bold mb-2">
                        Hotel Address:
                      </h3>
                      <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
                        350 St Mary Ave,<br />
                        Winnipeg, MB R3C 3J2
                      </p>
                    </div>
                    <div className="mt-6">
                      <h3 className="font-heading text-[clamp(20px,2.5vw,28px)] font-bold mb-2">
                        Preferred Group Rate
                      </h3>
                      <p className="text-[clamp(16px,1.8vw,20px)] opacity-90 mb-2">
                        A special group rate is available exclusively for Summit participants, while rooms last.
                      </p>
                      <p className="text-[clamp(16px,1.8vw,20px)] opacity-90">
                        <span className="font-bold">Group rate:</span> $229 CAD per night<br />
                        <span className="font-bold">Stay dates:</span> September 15–22, 2026<br />
                        <span className="font-bold">Booking deadline:</span> Friday, August 21, 2026
                      </p>
                      <p className="text-[clamp(16px,1.8vw,20px)] opacity-90 mt-4">
                        We encourage our guests to book early to take advantage of this special rate and to stay close to the heart of the Summit experience.
                      </p>
                    </div>
                    <div className="mt-6 flex flex-col items-start gap-3">
                      <Button
                        onClick={() =>
                          window.open(
                            "https://www.marriott.com/event-reservations/reservation-link.mi?id=1747239523588&key=GRP&guestreslink2=true&app=resvlink",
                            "_blank"
                          )
                        }
                        className="bg-[#8C0C3A] hover:bg-[#5D1831] text-white border border-[#8C0C3A] transition-colors cursor-pointer rounded-full h-[50px] px-8 py-6 text-[18px] font-semibold"
                      >
                        Book Now
                      </Button>
                      <p className="text-white text-[14px] opacity-90">
                        or call 1-800-268-1133 and reference block code: BLC
                      </p>
                    </div>
                  </>
                )}
              </div>
              <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-2xl">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div
                    key={num}
                    className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl lg:rounded-[24px] overflow-hidden"
                  >
                    <Image
                      src={`/delta-hotel-${num}.png`}
                      alt={`Delta Hotels by Marriott Winnipeg - Image ${num}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Delta Hotels Logo - Bottom Right */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8">
              <Image
                src="/delta-hotels-logo.png"
                alt="Delta Hotels by Marriott Winnipeg Logo"
                width={120}
                height={72}
                className="object-contain opacity-90"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
