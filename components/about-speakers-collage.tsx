const photos = [
  { src: "/nbcs-2025-speakers.jpg", en: "Conversations at the 2025 Summit", fr: "Échanges au Sommet de 2025" },
  { src: "/nbcs-2025-power-of-youth.jpg", en: "The first Power of Youth cohort, 2025", fr: "La première cohorte de La jeunesse au pouvoir, 2025" },
  { src: "/nbcs-2025-jean-lafond.jpg", en: "Michaëlle Jean and Jean-Daniel Lafond, 2025", fr: "Michaëlle Jean et Jean-Daniel Lafond, 2025" },
  { src: "/Audience during a panel discussion at the 2025 NBCS.jpg", en: "Listening and learning together, 2025", fr: "Écouter et apprendre ensemble, 2025" },
  { src: "/Panel discussion at the 2025 NBCS with community leaders on stage.jpg", en: "Community dialogue at the Summit, 2025", fr: "Dialogue communautaire au Sommet, 2025" },
  { src: "/Members of the public actively participating during a speech delivered at the 2025 SPCN.jpg", en: "Making space for community voices, 2025", fr: "Faire place aux voix de la communauté, 2025" },
];
export function AboutSpeakersCollage({ locale = "en", placement = "beside" }: { locale?: string; placement?: "beside" | "below" | "additional" }) {
  const photo = (index: number) => {
    const item = photos[index];
    const caption = locale === "fr" ? item.fr : item.en;
    return (
      <figure key={item.src}>
        <img src={item.src} alt={caption} className="h-auto w-full rounded-xl" loading="lazy" />
        {index !== 4 && <figcaption className="mt-2 text-xs italic leading-relaxed text-[#5D1831]">{caption}</figcaption>}
      </figure>
    );
  };
  if (placement === "additional") {
    return <div className="mx-auto mt-8 w-full max-w-3xl">{photo(5)}</div>;
  }
  if (placement === "below") {
    return <div className="mx-auto mt-8 w-full max-w-3xl">{photo(4)}</div>;
  }
  return (
    <div className="mx-auto w-full max-w-[550px] space-y-6">
      <div className="grid grid-cols-2 items-center gap-4 sm:gap-6">
        <div className="space-y-6">{photo(0)}{photo(1)}</div>
        {photo(2)}
      </div>
      {photo(3)}
    </div>
  );
}
