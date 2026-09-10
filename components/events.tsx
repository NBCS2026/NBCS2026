"use client";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Day1ScheduleAccordion, Day2ScheduleAccordion, Day3ScheduleAccordion } from "@/components/day1-schedule-accordion";

export function Events({ local }: { local: string }) {
  const t = useTranslations("program");
  const [day, setDay] = useState(1);
  const panelRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const sync = () => {
      const url = new URL(window.location.href);
      const requested = Number(url.searchParams.get("day") || url.hash.match(/^#day([123])/)?.[1] || 1);
      if ([1, 2, 3].includes(requested)) setDay(requested);
    };
    sync(); window.addEventListener("popstate", sync); window.addEventListener("hashchange", sync);
    return () => { window.removeEventListener("popstate", sync); window.removeEventListener("hashchange", sync); };
  }, []);
  const days = [
    { day: 1, label: local === "fr" ? "JOUR 1" : "DAY 1", date: local === "en" ? "Friday, September 18" : "Vendredi 18 septembre", hint: local === "en" ? "Click to view Day 1 schedule" : "Cliquez pour voir l'horaire du jour 1" },
    { day: 2, label: local === "fr" ? "JOUR 2" : "DAY 2", date: local === "en" ? "Saturday, September 19" : "Samedi 19 septembre", hint: local === "en" ? "Click to view Day 2 schedule" : "Cliquez pour voir l'horaire du jour 2" },
    { day: 3, label: local === "fr" ? "JOUR 3" : "DAY 3", date: local === "en" ? "Sunday, September 20" : "Dimanche 20 septembre", hint: local === "en" ? "Click to view Day 3 schedule" : "Cliquez pour voir l'horaire du jour 3" },
  ];
  function selectDay(next: number) {
    setDay(next);
    const url = new URL(window.location.href); url.searchParams.set("day", String(next)); url.hash = "";
    window.history.replaceState(null, "", url);
    requestAnimationFrame(() => {
      const panel = panelRef.current;
      if (panel) {
        panel.style.scrollMarginTop = `${(tabsRef.current?.offsetHeight || 114) + 88}px`;
        panel.scrollIntoView({ block: "start", behavior: "instant" });
      }
    });
  }
  return (
      <section className="program-guide mx-auto max-w-[1180px] px-4 sm:px-6 mb-14 sm:mb-20">
        <h2 className="font-bold text-[24px] lg:text-[43px] text-center mb-8">
          {t("text_one")}{" "}
          <span className="text-light-red">{t("text_two")}</span>
        </h2>

        <p className="tracking-[0.08em] max-w-[38ch] md:max-w-[68ch] mx-auto text-light-red font-medium text-[clamp(14px,1.43vw,22px)] leading-tight mb-12 ">
          {t("post_titleOne")} <br /> {t("post_titleTwo")}
        </p>
        <p className="mx-auto mb-10 max-w-3xl rounded-2xl border border-[#E8D4DB] bg-[#FAF6F7] px-5 py-4 text-center font-body text-[15px] font-semibold leading-relaxed text-[#5D1831] sm:text-[17px]">
          {local === "fr"
            ? "L’interprétation simultanée et le sous-titrage en direct seront offerts pour toutes les séances officielles."
            : "Simultaneous interpretation and live captioning will be available for all formal sessions."}
        </p>
        <div ref={tabsRef} role="tablist" aria-label={local === "fr" ? "Jours du programme" : "Program days"} className="program-days sticky z-30 mb-5 grid grid-cols-3 gap-2 border-b border-[#E8D4DB] bg-white py-3">
          {days.map(item => (
            <button key={item.day} role="tab" type="button" id={`program-day-${item.day}-tab`} aria-selected={day === item.day} aria-controls="program-day-panel" tabIndex={day === item.day ? 0 : -1} title={item.hint}
              onClick={() => selectDay(item.day)}
              onKeyDown={event => {
                const next = event.key === "ArrowRight" ? item.day % 3 + 1 : event.key === "ArrowLeft" ? (item.day + 1) % 3 + 1 : event.key === "Home" ? 1 : event.key === "End" ? 3 : null;
                if (next) { event.preventDefault(); selectDay(next); document.getElementById(`program-day-${next}-tab`)?.focus(); }
              }}
              className={`min-w-0 rounded-xl border-2 px-2 py-3 text-center transition-colors ${day === item.day ? "border-[#8C0C3A] bg-[#8C0C3A] text-white" : "border-[#E8D4DB] text-[#8C0C3A] hover:bg-[#FAF6F7]"}`}>
              <span className="block font-heading text-base font-bold sm:text-xl">{item.label}</span>
              <span className="mt-1 block text-xs leading-snug sm:text-sm">{item.date}</span>
            </button>
          ))}
        </div>
        <div ref={panelRef} role="tabpanel" tabIndex={0} id="program-day-panel" aria-labelledby={`program-day-${day}-tab`}>
          {day === 1 ? <Day1ScheduleAccordion locale={local} /> : day === 2 ? <Day2ScheduleAccordion locale={local} /> : <Day3ScheduleAccordion locale={local} />}
        </div>
      </section>
  );
}
