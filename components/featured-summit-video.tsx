import { ExternalLink, Play } from "lucide-react";

const SUMMIT_VIDEO_URL = "https://www.facebook.com/reel/4408083889518516";

export function FeaturedSummitVideo({ locale }: { locale: string }) {
  const isFr = locale === "fr";

  return (
    <section className="bg-white px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-[1180px]">
        <a
          href={SUMMIT_VIDEO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mx-auto block aspect-video max-w-4xl overflow-hidden rounded-3xl bg-[#1E1E1E] shadow-[0_18px_50px_rgba(93,24,49,0.16)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C0C3A]"
        >
          <img
            src="/media-gallery-youth.webp"
            alt=""
            className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex size-20 items-center justify-center rounded-full bg-white/95 text-[#8C0C3A] shadow-xl transition-transform group-hover:scale-105">
              <Play className="ml-1 size-9 fill-current" aria-hidden />
            </span>
          </span>
          <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-5 text-white sm:p-7">
            <span className="font-heading text-xl font-black sm:text-2xl">
              {isFr ? "Voir la vidéo du Sommet" : "Watch the Summit video"}
            </span>
            <ExternalLink className="size-5 shrink-0" aria-hidden />
          </span>
        </a>
      </div>
    </section>
  );
}
