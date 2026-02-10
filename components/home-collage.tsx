import Image from "next/image";

const homeCollageItems = [
  {
    src: "/nbcs-panel-discussion.jpg",
    alt: "Audience seated in a conference room attending a panel discussion at the 2025 NBCS",
  },
  {
    src: "/nbcs-dancers.jpg",
    alt: "Deux danseuses se produisent sur scène devant un public lors du NBCS 2025",
  },
  {
    src: "/nbcs-gala-greeting.jpg",
    alt: "Two participants greet each other and chat at the 2025 NBCS Gala",
  },
  {
    src: "/nbcs-musical-performance.jpg",
    alt: "Musical performance on stage in front of an audience at the 2025 NBCS gala",
  },
];

export function HomeCollage() {
  return (
    <div className="w-full overflow-hidden px-4">
      <div className="relative w-[520px] max-w-full mx-auto scale-[clamp(0.5,80vw/520px,0.85)] md:scale-[clamp(0.5,80vw/520px,1)] origin-center">
        <div className="grid grid-cols-2 justify-items-center gap-x-[17px] gap-y-[17px]">
          {homeCollageItems.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl overflow-hidden border border-[#d9d9d9] ${
                idx === 0 ? "w-[200px] h-[200px] md:w-[230px] md:h-[230px] mt-14 ml-4" : 
                idx === 3 ? "w-[200px] h-[200px] md:w-[230px] md:h-[230px] -ml-4" : 
                "w-[240px] h-[240px] md:w-[280px] md:h-[280px]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 240px"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <div className="relative w-[199px] h-[199px] rounded-full border-4 border-light-red shadow-lg bg-gray-100 flex items-center justify-center p-6">
            <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden">
              <Image
                src="/nbcs-logo-no-words.png"
                alt="NBCS logo placeholder"
                fill
                className="object-contain"
                sizes="150px"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

