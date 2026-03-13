"use client";

import { Arrow } from "@/components/arrow";
import { CountDown } from "@/components/countdown";
import { Footer } from "@/components/footer";
import { LangSelect } from "@/components/lang-select";
import { Logo } from "@/components/logo";
import { NavLink } from "@/components/nav-link";
import { Art } from "@/components/svg/art";
import { CollagePlaceholder } from "@/components/collage-placeholder";
import { HomeCollage } from "@/components/home-collage";
import Meet from "@/components/svg/meet";
import { Mic } from "@/components/svg/mic";
import { Workshop } from "@/components/svg/workshop";
import ToggleMenu from "@/components/toggle-menu";
import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const SECTION2_EN = {
  prefix: "The statement ",
  quote: "\"Moving forward together\"",
  p1: " expresses the collective commitment we must pursue in our determined march toward progress. Across Canada, communities of African descent are moving forward with determination in a struggle that has become unavoidable: the struggle to eradicate racial discrimination.",
  p2: "Carried out with pride, this effort is deeply rooted in our history, our shared aspirations, and the strength of our collective actions. Together, we are forging lasting alliances and broadening the scope of our initiatives in solidarity with all racialized communities.",
  p3: "We also recognize with respect our Indigenous sisters and brothers. We salute their leadership, their presence, and their courageous quest for sovereignty in Winnipeg, across Manitoba, and far beyond. In this spirit, we are working to intentionally create a platform that promotes meaningful dialogue with First Nations, who also face persistent systemic racism and the profound consequences of colonization.",
  p4Quote: "Moving forward together",
  p4Rest: " toward justice also means embarking on paths of healing. It means strengthening our collective capacities for resistance, resilience, and self-determination.",
};

const SECTION2_FR = {
  prefix: "L'affirmation ",
  quote: "« Ensemble, allons de l'avant »",
  p1: " exprime l'engagement collectif que nous devons poursuivre dans notre marche résolue vers le progrès. À travers le Canada, les communautés afrodescendantes avancent avec détermination dans une lutte devenue incontournable : celle pour l'éradication de la discrimination raciale.",
  p2: "Portée avec fierté, cette démarche s'inscrit profondément dans notre histoire, dans nos aspirations communes et dans la force de nos actions collectives. Ensemble, nous forgeons des alliances durables et élargissons le champ de nos initiatives en solidarité avec l'ensemble des communautés racialisées.",
  p3: "Nous reconnaissons également avec respect nos sœurs et nos frères autochtones. Nous saluons leur leadership, leur présence et leur quête courageuse de souveraineté à Winnipeg, à travers le Manitoba et bien au-delà. Dans cet esprit, nous travaillons à la création intentionnelle d'une plateforme favorisant un dialogue significatif avec les Premières Nations, elles aussi confrontées à la persistance du racisme systémique et aux conséquences profondes de la colonisation.",
  p4Quote: "Avancer ensemble",
  p4Rest: " vers la justice, c'est aussi emprunter des chemins de guérison. C'est renforcer nos capacités collectives de résistance, de résilience et d'autodétermination.",
};

export default function Page() {
  const params = useParams<{ locale: string }>();
  const t = useTranslations("home");
  const { locale } = params;
  const router = useRouter();
  const s2 = locale === "fr" ? SECTION2_FR : SECTION2_EN;

  return (
    <>
      <div className="min-h-screen relative bg-[url('/rectangle-2.png'),url('/rectangle-3.png')] bg-cover bg-center pb-20">

        <header
          className="flex items-center text-white max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto pt-12 px-8 md:px-12 lg:px-16 2xl:px-20 3xl:px-16 4xl:px-24 mb-18 md:mb-52 lg:mb-18 w-full"
        >
          <Logo />
          <NavLink className="hidden md:block flex-1 mx-8 3xl:mx-8 4xl:mx-16" />
          <ul className="md:flex gap-5 items-center hidden ml-auto md:mr-8 lg:mr-12 2xl:mr-20 3xl:mr-16 4xl:mr-24">
            <li>
              <LangSelect />
            </li>

          </ul>
          <ToggleMenu local={locale} className="ml-auto md:ml-0" />
        </header>
        <div className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] px-5 2xl:px-8 3xl:px-16 4xl:px-24 text-center mx-auto mt-12 sm:mt-20 md:mt-32 lg:mt-40 xl:mt-48 hero-content">
          <p
            className={`font-heading font-light text-[clamp(12px,1.2vw,22px)] tracking-[0.95em] bg-gradient-to-t from-gray-400 to-white bg-clip-text text-transparent mb-4 ${
              locale === "en" ? "max-w-[38ch] 3xl:max-w-[75ch] 4xl:max-w-[85ch]" : ""
            } mx-auto md:max-w-full`}
          >
            {t("pretitle")}
          </p>
          <h1
            className={`font-heading font-black text-[clamp(28px,4vw,85px)] tracking-[0.1em] bg-gradient-to-t from-gray-400 to-white bg-clip-text text-transparent leading-none mb-4 lg:mb-5 3xl:max-w-[90ch] 4xl:max-w-[100ch] mx-auto ${
              locale === "fr" ? "lg:text-[clamp(28px,3.5vw,75px)] xl:text-[clamp(28px,3.2vw,68px)]" : ""
            }`}
          >
            {t("title")}
          </h1>
          <p className="font-heading font-light tracking-[0.95em] max-w-[38ch] md:max-w-[65ch] 2xl:max-w-[75ch] 3xl:max-w-[75ch] 4xl:max-w-[85ch] mx-auto bg-gradient-to-t from-gray-400 to-white bg-clip-text text-transparent text-[clamp(14px,1.43vw,22px)] leading-relaxed mb-7">
            {t("post_titleOne")} <br />
            {t("post_titleTwo")}
          </p>
          <Button
            onClick={() => router.push("/ticket")}
            className="text-[#FBFAFA] bg-transparent border hover:bg-white hover:text-light-red transition-colors cursor-pointer rounded-full h-[44px] sm:h-[50px] px-6 sm:px-8 py-[18px] sm:py-[21px] text-[16px] sm:text-[18px] backdrop-blur-xs group hero-button"
          >
            {t("title_button")}
            <Arrow className="group-hover:text-light-red" />
          </Button>
        </div>
      </div>
      <main className="bg-white rounded-t-2xl pt-14">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] px-5 2xl:px-8 3xl:px-16 4xl:px-24 mx-auto justify-between items-center mb-16 sm:mb-24 md:mb-32 lg:mb-36 gap-6 md:gap-8 2xl:gap-12 3xl:gap-16 4xl:gap-20">
          <div className="text-[clamp(16px,1.82vw,28px)] text-center xl:text-start text-light-gray ">
            <p className="text-light-red font-bold">{t("count_lineOne")}</p>
            <p className="leading-[1.10]">{t("count_lineTwo")}</p>
          </div>
          <CountDown t={t} />
        </section>
        <section className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 mb-16 sm:mb-24 md:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-14 2xl:gap-16 3xl:gap-16 4xl:gap-20">
            <div className="space-y-4">
              <div className="space-y-4">
                <p className="text-[clamp(16px,1.82vw,28px)] text-[#1E1E1EB2] font-medium leading-tight">
                  {s2.prefix}
                  <span className="text-[#8C0C3A] font-semibold">{s2.quote}</span>
                  {s2.p1}
                </p>
                <p className="text-[clamp(16px,1.82vw,28px)] text-[#1E1E1EB2] font-medium leading-tight">
                  {s2.p2}
                </p>
                <p className="text-[clamp(16px,1.82vw,28px)] text-[#1E1E1EB2] font-medium leading-tight">
                  {s2.p3}
                </p>
                <p className="text-[clamp(16px,1.82vw,28px)] text-[#1E1E1EB2] font-medium leading-tight">
                  {s2.p4Quote}{s2.p4Rest}
                </p>
              </div>
              <Button
                className="text-black bg-transparent border hover:bg-transparent cursor-pointer rounded-full px-7 text-[16px] h-14 font-semibold"
                onClick={() => window.open("https://www.tourismwinnipeg.com/", "_blank")}
              >
                {t("section2_button")}
                <Arrow className="text-black h-7 w-7" />
              </Button>
            </div>
            <div className="justify-self-center w-full max-w-full">
              <CollagePlaceholder />
            </div>
          </div>
        </section>
        <section className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 mb-12 sm:mb-16 md:mb-24 lg:mb-[87px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-14 2xl:gap-16 3xl:gap-16 4xl:gap-20">
            <div className="justify-self-center w-full max-w-full">
              <HomeCollage />
            </div>
            <div className="space-y-8 md:space-y-12 lg:space-y-16">
              <div className="space-y-4">
                <p className="text-[clamp(16px,1.82vw,28px)] text-[#1E1E1EB2] font-medium leading-tight">
                  <span className="text-light-red font-semibold">
                    {t("about_lineRed")}
                  </span>{" "}
                  {t("about_lineOne")}
                </p>
                <p className="text-[clamp(16px,1.82vw,28px)] text-[#1E1E1EB2] font-medium leading-tight">
                  {t("about_lineTwo")}
                </p>
                <p className="text-[clamp(16px,1.82vw,28px)] text-[#1E1E1EB2] font-medium leading-tight">
                  {t("about_lineThree")}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-y-9">
                <div className="flex gap-2 items-center">
                  <Meet className="w-[38px] h-[38px] md:w-[72px] md:h-[72px]" />
                  <p className="text-[clamp(12px,1.82vw,28px)] font-medium">
                    {t("meet_iconText")}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <Mic className="w-[38px] h-[38px] md:w-[72px] md:h-[72px]" />
                  <p className="text-[clamp(12px,1.82vw,28px)] font-medium">
                    {t("mic_iconText")}
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <Art className="w-[38px] h-[38px] md:w-[72px] md:h-[72px]" />
                  <p className="text-[clamp(12px,1.82vw,28px)] font-medium">
                    {t("art_iconText")}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <Workshop className="w-[38px] h-[38px] md:w-[72px] md:h-[72px]" />
                  <p className="text-[clamp(12px,1.82vw,28px)] font-medium">
                    {t("connect_iconText")}
                  </p>
                </div>
              </div>
              <Button
                className="text-black bg-transparent border hover:bg-transparent cursor-pointer rounded-full px-7 text-[16px] h-14 font-semibold"
                onClick={() => router.push("about")}
              >
                {t("discover_button")}
                <Arrow className="text-black h-7 w-7" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
