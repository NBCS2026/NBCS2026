import Image from "next/image";

const collageItems = [
  {
    src: "/travel-manitoba-2.jpg",
    alt: "Winnipeg skyline and CMHR exterior",
  },
  {
    src: "/canadian-museum-human-rights.jpg",
    alt: "Canadian Museum for Human Rights interior",
  },
  {
    src: "/oodena-celebration-circle.jpg",
    alt: "Oodena Celebration Circle at The Forks, Winnipeg",
  },
  {
    src: "/travel-manitoba.jpg",
    alt: "Winnipeg street mural scene",
  },
];

export function CollagePlaceholder() {
  return (
    <div className="w-full overflow-hidden px-4">
      <div className="relative w-[520px] max-w-full mx-auto scale-[clamp(0.5,80vw/520px,0.85)] md:scale-[clamp(0.5,80vw/520px,1)] origin-center">
      <div className="grid grid-cols-2 justify-items-center gap-x-[17px] gap-y-[17px]">
        {collageItems.map((item, idx) => (
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

