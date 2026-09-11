const TREEMONISHA_URL =
  "https://mbopera.ca/whats-on/scott-joplins-treemonisha-a-musical-reimagining/";

export function TreemonishaFeature({ locale }: { locale: string }) {
  const isFr = locale === "fr";
  return (
    <article
      id="treemonisha"
      aria-labelledby="treemonisha-title"
      className="h-full scroll-mt-44 overflow-hidden rounded-2xl border border-[#E8D4DB] bg-white shadow-sm"
    >
      <a
        href={TREEMONISHA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-labelledby="treemonisha-title treemonisha-link-label"
        className="group flex h-full flex-col focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-[#8C0C3A]"
      >
        <img
          src="/treemonisha-2026.jpg"
          width="1200"
          height="600"
          alt="Scott Joplin’s Treemonisha — A Musical Reimagining"
          loading="lazy"
          className="aspect-[2/1] h-auto w-full object-contain"
        />
        <div className="flex flex-1 flex-col items-start gap-6 p-6 sm:p-7">
          <div>
            <p className="mb-2 text-sm font-semibold text-[#8C0C3A]">
              Manitoba Opera
            </p>
            <h3
              id="treemonisha-title"
              className="font-heading text-2xl font-bold leading-tight text-[#5D1831] sm:text-3xl"
            >
              Scott Joplin’s <em>Treemonisha</em>
            </h3>
            <p className="mt-3 text-sm text-[#5D1831] sm:text-base">
              {isFr
                ? "Les 21, 25 et 27 novembre 2026"
                : "November 21, 25 & 27, 2026"}{" "}
              · Centennial Concert Hall
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#1E1E1E]/78">
              {isFr
                ? "Inspirées par la vision de Joplin, des femmes artistes noires extraordinaires ont réinventé Treemonisha selon leur propre perspective du XXIe siècle."
                : "Inspired by Joplin’s vision, a group of extraordinary Black women artists have reimagined Treemonisha from their own 21st century viewpoint."}
            </p>
          </div>
          <span
            id="treemonisha-link-label"
            className="mt-auto inline-flex min-h-11 items-center gap-3 rounded-full bg-[#8C0C3A] px-5 py-3 text-sm font-bold text-white transition-colors group-hover:bg-[#5D1831] motion-reduce:transition-none"
          >
            {isFr ? "Détails et billets" : "Details & tickets"}
            <span aria-hidden="true">↗</span>
          </span>
        </div>
      </a>
    </article>
  );
}
