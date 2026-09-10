const photos = [
  { src: "/nbcs-2017.jpg", caption: "2017 · Toronto" },
  { src: "/nbcs-2019.jpg", caption: "2019 · Ottawa" },
  { src: "/nbcs-2022-advertising.jpg", caption: "2022 · Halifax" },
  { src: "/nbcs-2025-speaker.jpg", caption: "2025 · Montréal" },
];
export function AboutCollage({ locale = "en" }: { locale?: string }) {
  return (
    <div className="mx-auto grid w-full max-w-[550px] grid-cols-2 gap-4 sm:gap-6">
      {photos.map((item) => (
        <figure key={item.src} className="overflow-hidden rounded-xl border border-[#E8D4DB] bg-white">
          <img src={item.src} alt={`${locale === "fr" ? "Sommet" : "Summit"} ${item.caption}`} className="aspect-square w-full object-contain" loading="lazy" />
          <figcaption className="border-t border-[#E8D4DB] px-3 py-3 text-sm font-semibold text-[#5D1831]">{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
