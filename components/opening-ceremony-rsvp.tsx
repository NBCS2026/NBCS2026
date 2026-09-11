import { getOpeningCeremony } from "@/data/program";

export function OpeningCeremonyRsvp({ locale }: { locale: string }) {
  const isFr = locale === "fr";
  const ceremony = getOpeningCeremony(locale);
  if (!ceremony) return null;
  return <section id="opening-ceremony-rsvp" className="rounded-2xl border-2 border-[#8C0C3A] bg-white p-5 sm:p-8">
    <h2 className="font-heading text-2xl font-bold text-[#5D1831]">{isFr ? "RSVP — Cérémonie d’ouverture" : "Opening Ceremony RSVP"}</h2>
    <p className="mt-3 font-semibold text-[#5D1831]">{isFr ? "Vendredi 18 septembre 2026" : "Friday, September 18, 2026"} · {ceremony.time}</p>
    {ceremony.location && <p className="mt-1">{ceremony.location}</p>}
    <p className="mt-4 max-w-2xl leading-relaxed">{isFr
      ? "Vous êtes déjà inscrit·e au Sommet ? Confirmez votre présence à la cérémonie d’ouverture à l’aide du formulaire RSVP."
      : "Already registered for the Summit? Confirm your attendance at the Opening Ceremony using the RSVP form."}</p>
    {ceremony.action && <a href={ceremony.action.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#8C0C3A] px-6 py-3 text-center font-bold text-white hover:bg-[#5D1831]">{ceremony.action.label}</a>}
  </section>;
}
