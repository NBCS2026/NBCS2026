"use client";

import {
  APIProvider,
  Map as GoogleMap,
  Marker,
} from "@vis.gl/react-google-maps";
import { ExternalLink, MapPin } from "lucide-react";

type Venue = {
  id: number;
  name: string;
  address: string;
  query: string;
  position: string;
  coordinates: { lat: number; lng: number };
};

const VENUES: Venue[] = [
  {
    id: 1,
    name: "RBC Convention Centre Winnipeg",
    address: "375 York Avenue",
    query: "RBC Convention Centre Winnipeg",
    position: "left-[51%] top-[50%]",
    coordinates: { lat: 49.8899, lng: -97.1438 },
  },
  {
    id: 2,
    name: "Manitoba Legislative Assembly",
    address: "450 Broadway",
    query: "Manitoba Legislative Assembly Winnipeg",
    position: "left-[44%] top-[65%]",
    coordinates: { lat: 49.8844, lng: -97.146 },
  },
  {
    id: 3,
    name: "WAG-Qaumajuq",
    address: "300 Memorial Boulevard",
    query: "WAG-Qaumajuq Winnipeg",
    position: "left-[39%] top-[42%]",
    coordinates: { lat: 49.8892, lng: -97.1503 },
  },
  {
    id: 4,
    name: "Rainbow Resource Centre",
    address: "514 St Mary Avenue",
    query: "Rainbow Resource Centre Winnipeg",
    position: "left-[35%] top-[54%]",
    coordinates: { lat: 49.8913, lng: -97.148 },
  },
  {
    id: 5,
    name: "Canadian Museum for Human Rights",
    address: "85 Israel Asper Way",
    query: "Canadian Museum for Human Rights Winnipeg",
    position: "left-[65%] top-[46%]",
    coordinates: { lat: 49.8908, lng: -97.1317 },
  },
  {
    id: 6,
    name: "Centre culturel franco-manitobain",
    address: "340 Provencher Boulevard",
    query: "Centre culturel franco-manitobain Winnipeg",
    position: "left-[79%] top-[39%]",
    coordinates: { lat: 49.8938, lng: -97.1178 },
  },
  {
    id: 7,
    name: "Université de Saint-Boniface",
    address: "200 avenue de la Cathédrale",
    query: "Université de Saint-Boniface Winnipeg",
    position: "left-[79%] top-[58%]",
    coordinates: { lat: 49.8897, lng: -97.1201 },
  },
  {
    id: 8,
    name: "Sleeping Car Porters Memorial Garden",
    address: "799 Main Street",
    query: "Order of Sleeping Car Porters Memorial Winnipeg",
    position: "left-[61%] top-[17%]",
    coordinates: { lat: 49.9088, lng: -97.1322 },
  },
  {
    id: 9,
    name: "University of Manitoba",
    address: "Fort Garry campus",
    query: "University of Manitoba Fort Garry Campus Winnipeg",
    position: "left-[68%] top-[82%]",
    coordinates: { lat: 49.8092, lng: -97.1328 },
  },
  {
    id: 10,
    name: "The Forks — Winnipeg sign",
    address: "1 Forks Market Road",
    query: "Winnipeg sign The Forks",
    position: "left-[73%] top-[51%]",
    coordinates: { lat: 49.8875, lng: -97.1303 },
  },
];

const ALL_VENUES_URL =
  "https://www.google.com/maps/dir/?api=1&origin=RBC+Convention+Centre+Winnipeg&destination=University+of+Manitoba+Fort+Garry+Campus&waypoints=Manitoba+Legislative+Assembly+Winnipeg%7CWAG-Qaumajuq+Winnipeg%7CRainbow+Resource+Centre+Winnipeg%7CCanadian+Museum+for+Human+Rights+Winnipeg%7COrder+of+Sleeping+Car+Porters+Memorial+Winnipeg%7CCentre+culturel+franco-manitobain+Winnipeg%7CUniversit%C3%A9+de+Saint-Boniface+Winnipeg%7CWinnipeg+sign+The+Forks&travelmode=driving";
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function mapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function SummitWeekVenueMap({ locale }: { locale: string }) {
  const isFr = locale === "fr";

  return (
    <section className="bg-[#FAF6F7] px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-8 max-w-3xl">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-[#8C0C3A]">
            {isFr ? "Se déplacer à Winnipeg" : "Getting around Winnipeg"}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-black leading-tight text-[#5D1831] sm:text-4xl">
            {isFr ? "Carte des lieux" : "Venue map"}
          </h2>
          <p className="mt-4 leading-relaxed text-[#1E1E1E]/75">
            {isFr
              ? "Repérez les lieux confirmés de la semaine du Sommet. Sélectionnez un numéro ou un lieu pour l’ouvrir dans Google Maps."
              : "Locate the confirmed Summit Week venues. Select a number or venue to open it in Google Maps."}
          </p>
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-[#E8D4DB] bg-white shadow-[0_16px_45px_rgba(93,24,49,0.08)] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[480px] overflow-hidden bg-[#F2E8EC] sm:min-h-[600px] lg:min-h-[680px]">
            {GOOGLE_MAPS_API_KEY && (
              <div className="absolute inset-0 z-20">
                <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
                  <GoogleMap
                    defaultCenter={{ lat: 49.865, lng: -97.135 }}
                    defaultZoom={11}
                    gestureHandling="cooperative"
                    mapTypeControl={false}
                    streetViewControl={false}
                    fullscreenControl
                  >
                    {VENUES.map((venue) => (
                      <Marker
                        key={venue.id}
                        position={venue.coordinates}
                        title={venue.name}
                        label={String(venue.id)}
                      />
                    ))}
                  </GoogleMap>
                </APIProvider>
              </div>
            )}
            <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(#D9C7CE_1px,transparent_1px),linear-gradient(90deg,#D9C7CE_1px,transparent_1px)] [background-size:54px_54px]" />
            <svg
              viewBox="0 0 700 700"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <path
                d="M430 -20 C410 110 480 220 430 320 C385 410 430 520 390 720"
                fill="none"
                stroke="#8BB9C7"
                strokeWidth="34"
                strokeLinecap="round"
                opacity="0.85"
              />
              <path
                d="M-20 405 C160 385 270 420 430 350 C515 312 605 318 730 292"
                fill="none"
                stroke="#8BB9C7"
                strokeWidth="27"
                strokeLinecap="round"
                opacity="0.8"
              />
              <path
                d="M62 130 L612 610 M82 570 L610 95 M70 280 L625 280 M125 470 L625 470"
                fill="none"
                stroke="#C9B8BE"
                strokeWidth="7"
                strokeLinecap="round"
                opacity="0.85"
              />
            </svg>
            <div className="absolute left-6 top-6 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[#5D1831] shadow-sm">
              {isFr ? "Centre-ville" : "Downtown"}
            </div>
            <div className="absolute bottom-[5%] right-[7%] rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[#5D1831] shadow-sm">
              {isFr ? "Campus sud" : "South campus"}
            </div>
            {VENUES.map((venue) => (
              <a
                key={venue.id}
                href={mapsUrl(venue.query)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${venue.name} — ${isFr ? "ouvrir dans Google Maps" : "open in Google Maps"}`}
                className={`group absolute ${venue.position} z-10 -translate-x-1/2 -translate-y-1/2`}
              >
                <span className="flex size-10 items-center justify-center rounded-full border-2 border-white bg-[#8C0C3A] font-heading text-sm font-black text-white shadow-lg transition-transform group-hover:scale-110 group-focus-visible:scale-110 sm:size-11">
                  {venue.id}
                </span>
              </a>
            ))}
            <p className="absolute bottom-5 left-5 max-w-[220px] rounded-xl bg-white/90 px-3 py-2 text-xs leading-relaxed text-[#5D1831] shadow-sm">
              {isFr
                ? "Carte simplifiée; les positions sont indicatives et ne sont pas à l’échelle."
                : "Simplified map; positions are approximate and not to scale."}
            </p>
          </div>

          <div className="flex flex-col p-5 sm:p-7">
            <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {VENUES.map((venue) => (
                <li key={venue.id}>
                  <a
                    href={mapsUrl(venue.query)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 rounded-xl border border-transparent p-2.5 transition-colors hover:border-[#E8D4DB] hover:bg-[#FAF6F7]"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#8C0C3A] font-heading text-xs font-black text-white">
                      {venue.id}
                    </span>
                    <span>
                      <span className="block text-sm font-bold leading-tight text-[#1E1E1E] group-hover:text-[#8C0C3A]">
                        {venue.name}
                      </span>
                      <span className="mt-0.5 block text-xs text-[#1E1E1E]/65">
                        {venue.address}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ol>
            <a
              href={ALL_VENUES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#5D1831] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#8C0C3A]"
            >
              <MapPin className="size-5" aria-hidden />
              {isFr
                ? "Voir tous les lieux dans Google Maps"
                : "View all venues in Google Maps"}
              <ExternalLink className="size-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
