"use client";
import { useEffect, useRef, useState } from "react";
import { getProgramDays, type ProgramDay } from "@/data/program";
import { navigateProgram } from "@/lib/program-navigation";
import { PageNavIndicator } from "./page-nav-indicator";

export function ProgramNavigation({
  locale,
  day,
}: {
  locale: string;
  day: ProgramDay;
}) {
  const isFr = locale === "fr";
  const [section, setSection] = useState("program-schedule");
  const rail = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const threshold = Math.max(
        208,
        (rail.current?.getBoundingClientRect().bottom || 140) + 64,
      );
      const ids = [
        "program-schedule",
        `day${day}`,
        ...(day === 1 ? ["day1-opening-ceremony"] : []),
        "program-themes",
        "program-feedback",
      ];
      setSection(
        ids
          .filter(
            (id) =>
              (document.getElementById(id)?.getBoundingClientRect().top ??
                Infinity) <= threshold,
          )
          .at(-1) || ids[0],
      );
    };
    const queue = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", queue);
      window.removeEventListener("resize", queue);
    };
  }, [day]);
  // biome-ignore lint/correctness/useExhaustiveDependencies: Reposition the rail after aria-current changes.
  useEffect(() => {
    const row = rail.current;
    const link = row?.querySelector<HTMLElement>('[aria-current="location"]');
    if (
      row &&
      link &&
      (link.offsetLeft < row.scrollLeft ||
        link.offsetLeft + link.offsetWidth > row.scrollLeft + row.clientWidth)
    ) {
      row.scrollTo({
        left: link.offsetLeft - (row.clientWidth - link.offsetWidth) / 2,
        behavior: "instant",
      });
    }
  }, [section]);
  const days = getProgramDays(locale);
  const links: { id: string; label: string; day?: ProgramDay }[] = [
    {
      id: "program-schedule",
      label: isFr ? "Programme du Sommet" : "Summit Programme",
    },
    { id: "day1", day: 1, label: days[0].nav },
    {
      id: "day1-opening-ceremony",
      day: 1,
      label: isFr ? "Cérémonie d’ouverture" : "Opening Ceremony",
    },
    { id: "day2", day: 2, label: days[1].nav },
    { id: "day3", day: 3, label: days[2].nav },
    {
      id: "program-themes",
      label: isFr ? "Explorer par thème" : "Explore by Theme",
    },
    { id: "program-feedback", label: isFr ? "Commentaires" : "Feedback" },
  ];
  return (
    <nav
      aria-label={isFr ? "Navigation du programme" : "Programme navigation"}
      className="program-page-nav sticky z-30 border-b border-[#E8D4DB] bg-white px-4 py-2"
    >
      <div
        ref={rail}
        className="page-nav-rail relative mx-auto flex max-w-[1180px] gap-1 overflow-x-auto py-1"
      >
        <PageNavIndicator rail={rail} active={section} />
        {links.map((item) => (
          <a
            key={item.id}
            href={item.day ? `?day=${item.day}#${item.id}` : `#${item.id}`}
            aria-current={section === item.id ? "location" : undefined}
            onClick={(event) => {
              if (
                !item.day ||
                event.ctrlKey ||
                event.metaKey ||
                event.shiftKey ||
                event.altKey
              )
                return;
              event.preventDefault();
              navigateProgram(item.day, item.id);
            }}
            className={`flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold ${section === item.id ? "bg-[#8C0C3A] text-white" : "text-[#5D1831] hover:bg-[#FAF6F7]"}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
