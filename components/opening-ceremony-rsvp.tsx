import { getOpeningCeremony } from "@/data/program";

import { GalaWaitlistDialog } from "./gala-waitlist-dialog";

export function OpeningCeremonyRsvp({ locale }: { locale: string }) {
  const isFr = locale === "fr";
  const ceremony = getOpeningCeremony(locale);
  if (!ceremony) return null;
  const title = isFr ? "Liste d’attente — Gala de la cérémonie d’ouverture" : "Opening Ceremony Gala — Waitlist";
  return <section id="opening-ceremony-rsvp" tabIndex={-1} className="scroll-mt-32 rounded-2xl border-2 border-[#8E0C3A] bg-white p-4 sm:p-8">
    <h2 className="font-heading text-2xl font-bold text-[#8E0C3A]">{title}</h2>
    <p className="mt-3 font-semibold text-[#8E0C3A]">{isFr ? "Vendredi 18 septembre 2026" : "Friday, September 18, 2026"} · {ceremony.time}</p>
    {ceremony.location && <p className="mt-1">{ceremony.location}</p>}
    <GalaWaitlistDialog isFr={isFr} title={title} />
  </section>;
}

