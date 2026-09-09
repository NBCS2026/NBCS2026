const SUMMIT_VIDEO_URL =
  "https://www.facebook.com/FondationMichaelleJeanFoundation/videos/967678189449341/";
const FACEBOOK_EMBED_URL = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
  SUMMIT_VIDEO_URL,
)}&show_text=false&width=560`;

export function FeaturedSummitVideo({ locale }: { locale: string }) {
  const isFr = locale === "fr";

  return (
    <section className="bg-[#FAF6F7] px-5 py-14 sm:py-20">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-[#8C0C3A]">
            {isFr ? "Voyez le Sommet en action" : "See the Summit in action"}
          </p>
          <h2 className="mt-3 font-heading text-[clamp(30px,4vw,52px)] font-black leading-tight text-[#5D1831]">
            {isFr ? "Une communauté en mouvement" : "A community in motion"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#1E1E1E]/75 sm:text-lg">
            {isFr
              ? "Découvrez l’énergie, les voix et les rencontres qui donnent vie au Sommet pancanadien des communautés noires."
              : "Experience the energy, voices and connections that bring the National Black Canadians Summit to life."}
          </p>
          <a
            href={SUMMIT_VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-[#8C0C3A] px-6 py-3 font-bold text-white transition-colors hover:bg-[#5D1831]"
          >
            {isFr ? "Regarder sur Facebook" : "Watch on Facebook"}
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#E8D4DB] bg-white p-3 shadow-[0_18px_50px_rgba(93,24,49,0.12)] sm:p-5">
          <div className="mx-auto w-full max-w-[560px] overflow-hidden rounded-2xl bg-[#1E1E1E]">
            <iframe
              src={FACEBOOK_EMBED_URL}
              title={
                isFr
                  ? "Vidéo du Sommet sur Facebook"
                  : "Summit video on Facebook"
              }
              width="560"
              height="420"
              className="block h-[420px] w-full border-0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
