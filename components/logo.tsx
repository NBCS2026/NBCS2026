import { Link } from "@/i18n/navigation";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="National Black Canadians Summit home"
      className="w-[132px] sm:w-[150px] md:w-[166px] lg:w-[184px] xl:w-[200px] flex-shrink-0 rounded-xl bg-white/95 p-2 shadow-sm"
    >
      <img
        src="/nbcs-logo-full.svg"
        alt="National Black Canadians Summit / Sommet pancanadien des communautés noires"
        className="h-auto w-full object-contain"
      />
    </Link>
  );
}
