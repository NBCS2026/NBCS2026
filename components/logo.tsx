import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export function Logo() {
  const isFr = useLocale() === "fr";
  return (
    <Link
      href="/"
      aria-label={isFr ? "Accueil — Sommet pancanadien des communautés noires" : "National Black Canadians Summit home"}
      className="w-[132px] flex-shrink-0 sm:w-[150px] md:w-[166px] lg:w-[184px] xl:w-[200px]"
    >
      <img
        src="/nbcs-logo-full.svg"
        alt={isFr ? "Sommet pancanadien des communautés noires (SPCN)" : "National Black Canadians Summit (NBCS)"}
        className="h-auto w-full object-contain brightness-0 invert"
      />
    </Link>
  );
}
