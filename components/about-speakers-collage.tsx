import Image from "next/image";

const speakersCollageItems = [
  {
    src: "/nbcs-2025-speakers.jpg",
    alt: "Speakers at the 2025 NBCS",
    width: 369,
    height: 246,
    x: -20,
    y: 43,
  },
  {
    src: "/nbcs-2025-jean-lafond.jpg",
    alt: "The Right Honorable Michaëlle Jean and Jean-Daniel Lafond on stage at the 2025 NBCS",
    width: 314.81,
    height: 495.82,
    x: 382.26,
    y: 126.34,
  },
  {
    src: "/nbcs-2025-power-of-youth.jpg",
    alt: "First cohort of Power of Youth on stage at 2025 NBCS",
    width: 351.88,
    height: 351.88,
    x: 13,
    y: 323,
  },
];

export function AboutSpeakersCollage() {
  const baseSize = 697;
  const smallScale = 0.55;   // 55% for small screens (below 787px) - more contained
  const mediumScale = 0.6;   // 60% for medium screens (787px-1213px) - more contained
  const largeScale = 0.75;   // 75% for large screens (above 1213px) - more contained
  const gap = 2;
  
  // Calculate sizes for all breakpoints
  const smallScaledSize = baseSize * smallScale;
  const mediumScaledSize = baseSize * mediumScale;
  const largeScaledSize = baseSize * largeScale;
  
  // Calculate adjusted scales (accounting for 2px gap on each side)
  const smallContentSize = smallScaledSize - (gap * 2);
  const mediumContentSize = mediumScaledSize - (gap * 2);
  const largeContentSize = largeScaledSize - (gap * 2);
  const smallAdjustedScale = smallContentSize / baseSize;
  const mediumAdjustedScale = mediumContentSize / baseSize;
  const largeAdjustedScale = largeContentSize / baseSize;
  
  return (
    <>
      <style jsx global>{`
        .about-speakers-collage-container {
          width: ${smallScaledSize}px;
          max-width: calc(100vw - 64px);
        }
        @media (min-width: 640px) {
          .about-speakers-collage-container {
            max-width: calc(100vw - 80px);
          }
        }
        @media (min-width: 787px) and (max-width: 1213px) {
          .about-speakers-collage-container {
            width: ${mediumScaledSize}px !important;
            max-width: calc(100vw - 96px) !important;
          }
          .about-speakers-collage-inner {
            max-width: ${mediumScaledSize}px !important;
            max-height: ${mediumScaledSize}px !important;
          }
        }
        @media (min-width: 1214px) {
          .about-speakers-collage-container {
            width: ${largeScaledSize}px !important;
          }
          .about-speakers-collage-inner {
            max-width: ${largeScaledSize}px !important;
            max-height: ${largeScaledSize}px !important;
          }
        }
      `}</style>
      <div className="w-full overflow-hidden px-8 sm:px-10 md:px-12">
        <div className="about-speakers-collage-container relative max-w-[calc(100vw-64px)] sm:max-w-[calc(100vw-80px)] md:max-w-[calc(100vw-96px)] lg:max-w-full mx-auto transition-all duration-300">
          <div 
            className="about-speakers-collage-inner relative overflow-hidden aspect-square w-full"
            style={{
              maxWidth: `${smallScaledSize}px`,
              maxHeight: `${smallScaledSize}px`,
            }}
          >
            {speakersCollageItems.map((item, idx) => {
              // Calculate for small scale (base/default)
              const smallWidth = item.width * smallAdjustedScale;
              const smallHeight = item.height * smallAdjustedScale;
              const smallLeft = (item.x * smallAdjustedScale) + gap;
              const smallTop = (item.y * smallAdjustedScale) + gap;
              
              // Convert to percentages (will scale automatically with container)
              const widthPercent = (smallWidth / smallScaledSize) * 100;
              const heightPercent = (smallHeight / smallScaledSize) * 100;
              const leftPercent = (smallLeft / smallScaledSize) * 100;
              const topPercent = (smallTop / smallScaledSize) * 100;
              
              return (
                <div
                  key={idx}
                  className="absolute rounded-xl overflow-hidden border border-[#d9d9d9]"
                  style={{
                    width: `${widthPercent}%`,
                    height: `${heightPercent}%`,
                    left: `${leftPercent}%`,
                    top: `${topPercent}%`,
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 350px"
                    priority={idx === 0}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

