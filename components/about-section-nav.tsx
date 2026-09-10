"use client";

import { useEffect, useRef, useState } from "react";

export function AboutSectionNav({ sections, label }: { sections: string[][]; label: string }) {
  const [active, setActive] = useState(sections[0][0]);
  const linksRef = useRef<HTMLDivElement>(null);
  const sectionIds = sections.map(([id]) => id).join(",");

  useEffect(() => {
    const elements = sectionIds.split(",").map(id => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    let frame = 0;
    const update = () => {
      frame = 0;
      const current = elements.filter(el => el.getBoundingClientRect().top <= 160).at(-1) || elements[0];
      if (current) setActive(current.id);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [sectionIds]);

  useEffect(() => {
    const row = linksRef.current;
    const link = row?.querySelector<HTMLElement>('[aria-current="location"]');
    if (!row || !link) return;
    if (link.offsetLeft < row.scrollLeft || link.offsetLeft + link.offsetWidth > row.scrollLeft + row.clientWidth) {
      row.scrollTo({ left: link.offsetLeft - row.clientWidth / 2 + link.offsetWidth / 2, behavior: "instant" });
    }
  }, [active]);

  return (
    <nav aria-label={label} className="sticky top-0 z-30 border-b border-[#E8D4DB] bg-white px-5 py-2 sm:px-8">
      <div className="mx-auto flex max-w-[1180px] items-center gap-3 sm:gap-5">
        <span className="max-w-20 shrink-0 text-xs font-bold uppercase leading-relaxed tracking-wider text-[#5D1831] sm:max-w-none">{label}</span>
        <div ref={linksRef} className="relative flex min-w-0 flex-1 gap-1 overflow-x-auto py-1">
          {sections.map(([id, text]) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} className={`flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#8C0C3A] ${active === id ? "border-[#E8D4DB] bg-[#FAF6F7] text-[#8C0C3A]" : "border-transparent text-[#5D1831] hover:border-[#E8D4DB] hover:bg-[#FAF6F7]"}`}>{text}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}
