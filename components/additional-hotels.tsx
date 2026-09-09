import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const HOTELS = [
  {
    name: "Birchwood Inn, BW Premier Collection",
    url: "https://www.bestwestern.com/en_US/book/hotels-in-winnipeg/birchwood-inn-bw-premier-collection/propertyCode.63023.html",
  },
  {
    name: "Hilton Winnipeg Airport Suites",
    url: "https://www.hilton.com/en/hotels/ywgwihf-hilton-winnipeg-airport-suites/",
  },
  {
    name: "Holiday Inn & Suites Winnipeg-Downtown",
    url: "https://www.ihg.com/holidayinn/hotels/us/en/winnipeg/ywgcs/hoteldetail",
  },
  {
    name: "Radisson Hotel Winnipeg Downtown",
    url: "https://www.choicehotels.com/manitoba/winnipeg/radisson-hotels/cnc33",
  },
  {
    name: "Victoria Inn Hotel & Convention Centre Winnipeg",
    url: "https://winnipeg.vicinn.com/",
  },
  {
    name: "Wyndham Garden Winnipeg Airport",
    url: "https://www.wyndhamhotels.com/wyndham-garden/winnipeg-manitoba/wyndham-garden-winnipeg-airport/overview",
  },
];

export function AdditionalHotels({
  isFr,
  tone = "dark",
}: {
  isFr: boolean;
  tone?: "dark" | "light";
}) {
  const isDark = tone === "dark";

  return (
    <section
      className={cn(
        "rounded-2xl border p-5 sm:p-6",
        isDark
          ? "border-white/25 bg-white/10 text-white"
          : "border-[#E8D4DB] bg-white text-[#1E1E1E]",
      )}
    >
      <h3
        className={cn(
          "font-heading text-xl font-black sm:text-2xl",
          isDark ? "text-white" : "text-[#5D1831]",
        )}
      >
        {isFr
          ? "Autres options d’hébergement"
          : "Additional accommodation options"}
      </h3>
      <p
        className={cn(
          "mt-2 text-sm leading-relaxed sm:text-base",
          isDark ? "text-white/80" : "text-[#1E1E1E]/70",
        )}
      >
        {isFr
          ? "Le bloc de chambres du Delta est complet. Vérifiez directement les disponibilités et les tarifs auprès de ces hôtels de Winnipeg."
          : "The Delta room block is sold out. Check current availability and rates directly with these Winnipeg hotels."}
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {HOTELS.map((hotel) => (
          <a
            key={hotel.name}
            href={hotel.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex min-h-20 items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm font-bold leading-snug transition-colors",
              isDark
                ? "border-white/25 bg-[#5D1831]/35 text-white hover:bg-white/15"
                : "border-[#E8D4DB] bg-[#FAF6F7] text-[#5D1831] hover:border-[#8C0C3A]",
            )}
          >
            <span>{hotel.name}</span>
            <ExternalLink className="size-4 shrink-0" aria-hidden />
          </a>
        ))}
      </div>
    </section>
  );
}
