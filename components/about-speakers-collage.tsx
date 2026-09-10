const photos = [
  { src: "/nbcs-2025-speakers.jpg", en: "Conversations at the 2025 Summit", fr: "Échanges au Sommet de 2025" },
  { src: "/nbcs-2025-power-of-youth.jpg", en: "The first Power of Youth cohort, 2025", fr: "La première cohorte de La jeunesse au pouvoir, 2025" },
  { src: "/nbcs-2025-jean-lafond.jpg", en: "Michaëlle Jean and Jean-Daniel Lafond, 2025", fr: "Michaëlle Jean et Jean-Daniel Lafond, 2025" },
];
export function AboutSpeakersCollage({ locale = "en" }: { locale?: string }) {
  const photo = (index: number) => {
    const item = photos[index];
    const caption = locale === "fr" ? item.fr : item.en;
    return (
      <figure key={item.src}>
        <img src={item.src} alt={caption} className="h-auto w-full rounded-xl" loading="lazy" />
        <figcaption className="mt-2 text-sm leading-relaxed text-[#5D1831]">{caption}</figcaption>
      </figure>
    );
  };
  return (
    <div className="mx-auto grid w-full max-w-[550px] grid-cols-2 items-center gap-4 sm:gap-6">
      <div className="space-y-6">{photo(0)}{photo(1)}</div>
      {photo(2)}
    </div>
  );
}
