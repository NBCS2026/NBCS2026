export function AboutSpeakersCollage({ locale = "en" }: { locale?: string }) {
  const caption = locale === "fr" ? "Échanges au Sommet de 2025" : "Conversations at the 2025 Summit";
  return (
    <figure className="mx-auto mt-8 w-full max-w-3xl">
      <img src="/nbcs-2025-speakers.jpg" alt={caption} className="h-auto w-full rounded-xl" loading="lazy" />
      <figcaption className="mt-2 text-xs italic leading-relaxed text-[#5D1831]">{caption}</figcaption>
    </figure>
  );
}
