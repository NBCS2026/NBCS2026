const SUMMIT_VIDEO_URL = "https://www.facebook.com/reel/4408083889518516";
const FACEBOOK_EMBED_URL = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
  SUMMIT_VIDEO_URL,
)}&show_text=false&width=420`;

export function FeaturedSummitVideo({ locale }: { locale: string }) {
  const isFr = locale === "fr";

  return (
    <section className="bg-white px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-[470px] overflow-hidden rounded-3xl border border-[#E8D4DB] bg-white p-3 shadow-[0_18px_50px_rgba(93,24,49,0.12)] sm:p-5">
          <div className="mx-auto aspect-[9/16] w-full max-w-[420px] overflow-hidden rounded-2xl bg-[#1E1E1E]">
            <iframe
              src={FACEBOOK_EMBED_URL}
              title={
                isFr
                  ? "Vidéo du Sommet sur Facebook"
                  : "Summit video on Facebook"
              }
              width="420"
              height="747"
              className="block h-full w-full border-0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <a
            href={SUMMIT_VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-4 block w-fit text-sm font-bold text-[#8C0C3A] underline underline-offset-4"
          >
            {isFr ? "Ouvrir dans Facebook" : "Open in Facebook"}
          </a>
        </div>
      </div>
    </section>
  );
}
