export function FeaturedSummitVideo({ locale }: { locale: string }) {
  const isFr = locale === "fr";

  return (
    <section className="bg-white px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-[1180px]">
        <video
          controls
          playsInline
          preload="metadata"
          poster="/summit-2026-video-poster.jpg"
          aria-label={isFr ? "Vidéo du Sommet 2026" : "2026 Summit video"}
          className="mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-3xl bg-[#1E1E1E] object-cover shadow-[0_18px_50px_rgba(93,24,49,0.16)]"
        >
          <source src="/summit-2026-video.mp4" type="video/mp4" />
          <track
            kind="subtitles"
            src="/captions/summit-2026-fr.vtt"
            srcLang="fr"
            label="Français (traduction)"
          />
          {isFr
            ? "Votre navigateur ne prend pas en charge la lecture vidéo."
            : "Your browser does not support video playback."}
        </video>
      </div>
    </section>
  );
}
