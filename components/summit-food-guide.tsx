import { ExternalLink, Footprints, MapPin, Navigation } from "lucide-react";
import { FOOD_MAP_ID, SUMMIT_FOOD_BUSINESSES, foodDirectionsUrl } from "@/data/summit-food";

export function SummitFoodGuide({ locale, open }: { locale: string; open: boolean }) {
  const isFr = locale === "fr";
  const mapUrl = `https://www.google.com/maps/d/embed?mid=${FOOD_MAP_ID}&ehbc=2E312F&ll=49.88813%2C-97.14424&z=13&hl=${isFr ? "fr" : "en"}`;
  const actionClass = "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C0C3A]";

  return (
    <div className="min-w-0 space-y-6">
      <p className="max-w-4xl text-[15px] leading-relaxed text-white sm:text-base">
        {isFr
          ? "Découvrez des restaurants, cafés et commerces alimentaires appartenant à des personnes noires à proximité du Centre des congrès RBC. Consultez la carte ou parcourez la liste ci-dessous pour trouver où manger tout en soutenant la communauté entrepreneuriale noire de Winnipeg."
          : "Discover Black-owned restaurants, cafés and food businesses near the RBC Convention Centre. Explore the map or browse the list below to find places to eat while supporting Winnipeg’s Black business community."}
      </p>
      <div className="overflow-hidden rounded-2xl border border-[#E8D4DB] bg-[#FAF6F7] sm:rounded-3xl">
        {open && <iframe
          src={mapUrl}
          title={isFr ? "Google Maps — commerces alimentaires près du Sommet et Centre des congrès RBC" : "Google Maps — Black-owned food near the Summit and RBC Convention Centre"}
          className="block h-[380px] w-full border-0 md:h-[480px]"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />}
        <a href={`https://www.google.com/maps/d/viewer?mid=${FOOD_MAP_ID}&hl=${isFr ? "fr" : "en"}`} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center justify-center gap-2 px-4 py-3 text-center text-sm font-semibold text-[#5D1831] underline underline-offset-4">
          {isFr ? "Agrandir la carte dans Google Maps" : "Open full map in Google Maps"}<ExternalLink className="size-4 shrink-0" aria-hidden />
        </a>
      </div>
      <ul className="grid min-w-0 gap-4 md:grid-cols-2">
        {SUMMIT_FOOD_BUSINESSES.map(business => (
          <li key={business.id} className="min-w-0">
            <article className="flex h-full min-w-0 flex-col rounded-2xl border border-[#E8D4DB] bg-white p-5 text-[#1E1E1E] sm:p-6" aria-labelledby={`food-${business.id}`}>
              <h3 id={`food-${business.id}`} className="font-heading text-lg font-bold leading-snug text-[#5D1831] sm:text-xl">{business.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1E1E1E]/75">{isFr ? business.typeFr : business.typeEn}</p>
              <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed"><MapPin className="mt-0.5 size-4 shrink-0 text-[#8C0C3A]" aria-hidden /><span>{business.address}</span></p>
              <p className="mb-4 mt-2 flex items-start gap-2 text-sm font-semibold leading-relaxed text-[#5D1831]"><Footprints className="mt-0.5 size-4 shrink-0" aria-hidden /><span>{business.walkMinutes
                ? (isFr ? `Environ ${business.walkMinutes} minutes à pied` : `About a ${business.walkMinutes}-minute walk`)
                : (isFr ? "À quelques minutes du Sommet en voiture" : "Short ride from the Summit")}</span></p>
              <div className="mt-auto grid grid-cols-1 gap-2 sm:grid-cols-2">
                {business.website && <a href={business.website} target="_blank" rel="noopener noreferrer" aria-label={`${isFr ? "Site Web / Menu" : "Website / Menu"} — ${business.name}`} className={`${actionClass} border border-[#E8D4DB] bg-[#FAF6F7] text-[#5D1831] hover:bg-[#E8D4DB]`}><ExternalLink className="size-4 shrink-0" aria-hidden />{isFr ? "Site Web / Menu" : "Website / Menu"}</a>}
                <a href={foodDirectionsUrl(business)} target="_blank" rel="noopener noreferrer" aria-label={isFr ? `Itinéraire vers ${business.name} depuis le Centre des congrès RBC` : `Directions to ${business.name} from RBC Convention Centre`} className={`${actionClass} bg-[#8C0C3A] text-white hover:bg-[#5D1831]`}><Navigation className="size-4 shrink-0" aria-hidden />{isFr ? "Itinéraire" : "Directions"}</a>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
