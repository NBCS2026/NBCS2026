import { getOpeningCeremony } from "@/data/program";

const WAITLIST_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSdA7IngPvWkjKfkwx89RaB0Klt9iJKugT9CQX6yUIbCrk6hfA/viewform";

export function OpeningCeremonyRsvp({ locale }: { locale: string }) {
  const isFr = locale === "fr";
  const ceremony = getOpeningCeremony(locale);
  if (!ceremony) return null;
  const title = isFr ? "Liste d’attente — Gala de la cérémonie d’ouverture" : "Opening Ceremony Gala — Waitlist";
  return <section id="opening-ceremony-rsvp" tabIndex={-1} className="scroll-mt-32 rounded-2xl border-2 border-[#8E0C3A] bg-white p-4 sm:p-8">
    <h2 className="font-heading text-2xl font-bold text-[#8E0C3A]">{title}</h2>
    <p className="mt-3 font-semibold text-[#8E0C3A]">{isFr ? "Vendredi 18 septembre 2026" : "Friday, September 18, 2026"} · {ceremony.time}</p>
    {ceremony.location && <p className="mt-1">{ceremony.location}</p>}
    <iframe
      src={`${WAITLIST_FORM}?embedded=true&hl=${isFr ? "fr" : "en"}`}
      title={title}
      className="mt-6 block h-[1550px] w-full border-0 sm:h-[1300px]"
      loading="lazy"
    />
    <a href={`${WAITLIST_FORM}?hl=${isFr ? "fr" : "en"}`} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center font-semibold text-[#8E0C3A] underline underline-offset-4">
      {isFr ? "Ouvrir le formulaire dans un nouvel onglet" : "Open the form in a new tab"}
    </a>
  </section>;
}
