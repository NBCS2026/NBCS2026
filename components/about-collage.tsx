const photos = [
  { src: "/nbcs-2017.jpg", caption: "2017 · Toronto" },
  { src: "/nbcs-2019.jpg", caption: "2019 · Ottawa" },
  { src: "/nbcs-2022-advertising.jpg", caption: "2022 · Halifax" },
  { src: "/nbcs-2025-speaker.jpg", caption: "2025 · Montréal" },
];
export function AboutCollage({ locale = "en" }: { locale?: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[550px]">
      <div className="grid grid-cols-2 gap-3 overflow-hidden rounded-2xl">
        {photos.map((item) => (
          <figure key={item.src} className="relative overflow-hidden">
            <img src={item.src} alt={`${locale === "fr" ? "Sommet" : "Summit"} ${item.caption}`} className="aspect-square w-full object-cover" loading="lazy" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-3 pb-3 pt-8 text-sm font-semibold text-white">{item.caption}</figcaption>
          </figure>
        ))}
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 flex aspect-square w-[44%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#8C0C3A] bg-white p-[5%] shadow-lg">
        <img src="/nbcs-logo-no-words.png" alt={locale === "fr" ? "Sommet pancanadien des communautés noires" : "National Black Canadians Summit"} className="h-full w-full object-contain" loading="lazy" />
      </div>
    </div>
  );
}
