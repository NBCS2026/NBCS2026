export function SummitWeekVenueMap({ locale }: { locale: string }) {
  const isFr = locale === "fr";
  const mapUrl = "https://www.google.com/maps/d/embed?mid=1r-B7HyiL4j1NG_MT20rrLDryXixkk-4&ehbc=2E312F&ll=49.85475771986099%2C-97.13056175000003&z=12";
  return (
    <section className="bg-[#FAF6F7] px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="mb-4 font-heading text-3xl font-black text-[#5D1831] sm:text-4xl">
          {isFr ? "Carte des lieux" : "Venue map"}
        </h2>
        <p className="mb-6 text-[#1E1E1E]/75">
          {isFr ? "Explorez les lieux de la semaine du Sommet. Sélectionnez un repère pour voir le lieu et zoomez pour explorer le centre-ville." : "Explore the Summit Week venues. Select a numbered pin for venue details and zoom in to explore downtown."}
        </p>
        <div className="overflow-hidden rounded-3xl border border-[#E8D4DB] bg-white">
          <iframe
            src={`${mapUrl}&hl=${isFr ? "fr" : "en"}`}
            title={isFr ? "Google Maps — lieux de la semaine du Sommet" : "Google Maps — Summit Week venues"}
            className="h-[640px] w-full border-0 sm:h-[760px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <a href="https://www.google.com/maps/d/viewer?mid=1r-B7HyiL4j1NG_MT20rrLDryXixkk-4" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex font-semibold text-[#8C0C3A] underline underline-offset-4">
          {isFr ? "Agrandir la carte dans Google Maps" : "Open full map in Google Maps"}
        </a>
      </div>
    </section>
  );
}
