const photos = [
  { src: "/nbcs-2025-speakers.jpg", en: "Conversations at the 2025 Summit", fr: "Échanges au Sommet de 2025" },
  { src: "/nbcs-2025-power-of-youth.jpg", en: "The first Power of Youth cohort, 2025", fr: "La première cohorte de La jeunesse au pouvoir, 2025" },
  { src: "/nbcs-2025-jean-lafond.jpg", en: "Michaëlle Jean and Jean-Daniel Lafond, 2025", fr: "Michaëlle Jean et Jean-Daniel Lafond, 2025" },
  { src: "/Panel discussion at the 2025 NBCS with community leaders on stage.jpg", en: "Community dialogue at the Summit, 2025", fr: "Dialogue communautaire au Sommet, 2025" },
];
export function AboutSpeakersCollage({ locale = "en", placement = "gallery" }: { locale?: string; placement?: "gallery" | "below" }) {
  const photo = (index: number) => {
    const item = photos[index];
    const caption = locale === "fr" ? item.fr : item.en;
    return (
      <figure key={item.src}>
        {index === 3 ? (
          <div className="overflow-hidden rounded-xl" style={{ aspectRatio: "472 / 201.6" }}>
            <img src={item.src} alt={caption} className="h-full w-full object-cover object-center" loading="lazy" />
          </div>
        ) : <img src={item.src} alt={caption} className="h-auto w-full rounded-xl" loading="lazy" />}
        {index !== 3 && <figcaption className="mt-2 text-xs italic leading-relaxed text-[#5D1831]">{caption}</figcaption>}
      </figure>
    );
  };
  if (placement === "below") {
    return <div className="mx-auto mt-8 w-full max-w-3xl">{photo(3)}</div>;
  }
  return (
    <div className="mx-auto mt-8 grid w-full max-w-4xl grid-cols-1 items-start gap-6 sm:grid-cols-3">
      {photo(0)}{photo(1)}{photo(2)}
    </div>
  );
}
