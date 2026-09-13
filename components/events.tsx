"use client";
import { ProgramThemeExplorer } from "./program-theme-explorer";
import { ProgramNavigation } from "./program-navigation";
import {
  programDayFromUrl,
  getProgramDays,
  type ProgramDay,
} from "@/data/program";
import { navigateProgram } from "@/lib/program-navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import {
  Day1ScheduleAccordion,
  Day2ScheduleAccordion,
  Day3ScheduleAccordion,
} from "@/components/day1-schedule-accordion";

export function Events({ local }: { local: string }) {
  const t = useTranslations("program");
  const [day, setDay] = useState<ProgramDay>(1);
  useEffect(() => {
    const sync = () => {
      const url = new URL(window.location.href);
      const selectedDay = programDayFromUrl(url);
      setDay(selectedDay);
      // Canonicalize a shared cross-day link so later section-only anchors keep
      // the displayed day instead of reverting to an outdated query parameter.
      if (
        /^#day[123](?:-|$)/.test(url.hash) &&
        url.searchParams.get("day") !== String(selectedDay)
      ) {
        url.searchParams.set("day", String(selectedDay));
        window.history.replaceState(null, "", url);
      }
    };
    sync();
    window.addEventListener("popstate", sync);
    window.addEventListener("hashchange", sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("hashchange", sync);
    };
  }, []);
  const days = getProgramDays(local);
  function selectDay(next: ProgramDay) {
    navigateProgram(next, `day${next}`);
  }
  return (
    <>
      <ProgramNavigation locale={local} day={day} />
      <section
        id="program-schedule"
        className="program-guide mx-auto max-w-[1180px] px-4 sm:px-6 mb-14 sm:mb-20"
      >
        <h2 className="font-bold text-[24px] lg:text-[43px] text-center mb-5">
          {t("text_one")}{" "}
          <span className="text-light-red">{t("text_two")}</span>
        </h2>

        {(t("post_titleOne").trim() || t("post_titleTwo").trim()) && (
          <p className="tracking-[0.08em] max-w-[38ch] md:max-w-[68ch] mx-auto text-light-red font-medium text-[clamp(14px,1.43vw,22px)] leading-tight mb-6">
            {t("post_titleOne")}
            {t("post_titleOne").trim() && t("post_titleTwo").trim() && <br />}
            {t("post_titleTwo")}
          </p>
        )}
        <div
          role="tablist"
          aria-label={local === "fr" ? "Jours du programme" : "Program days"}
          className="program-days mb-5 grid grid-cols-3 gap-2 border-b border-[#E8D4DB] bg-white py-3"
        >
          {days.map((item) => (
            <button
              key={item.day}
              role="tab"
              type="button"
              id={`program-day-${item.day}-tab`}
              aria-selected={day === item.day}
              aria-controls="program-day-panel"
              tabIndex={day === item.day ? 0 : -1}
              onClick={() => selectDay(item.day)}
              onKeyDown={(event) => {
                const next =
                  event.key === "ArrowRight"
                    ? (item.day % 3) + 1
                    : event.key === "ArrowLeft"
                      ? ((item.day + 1) % 3) + 1
                      : event.key === "Home"
                        ? 1
                        : event.key === "End"
                          ? 3
                          : null;
                if (next) {
                  event.preventDefault();
                  selectDay(next as ProgramDay);
                  document.getElementById(`program-day-${next}-tab`)?.focus();
                }
              }}
              className={`min-w-0 rounded-xl border-2 px-2 py-3 text-center transition-colors ${day === item.day ? "border-[#5D1831] bg-[#5D1831] text-white" : "border-[#E8D4DB] text-[#8C0C3A] hover:bg-[#FAF6F7]"}`}
            >
              <span className="sr-only">
                {item.label} — {item.date}
              </span>
              <span
                aria-hidden="true"
                className="block font-heading text-base font-bold sm:text-xl"
              >
                {item.shortDate}
              </span>
              <span
                aria-hidden="true"
                className="mt-1 block text-[11px] leading-snug sm:text-xs"
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
        {/* biome-ignore lint/a11y/noNoninteractiveTabindex: A focusable tabpanel is the keyboard destination for the day tabs. */}
        <div
          role="tabpanel"
          tabIndex={0}
          id="program-day-panel"
          aria-labelledby={`program-day-${day}-tab`}
        >
          <div id={`day${day}`} tabIndex={-1}>
            {day === 1 ? (
              <Day1ScheduleAccordion locale={local} />
            ) : day === 2 ? (
              <Day2ScheduleAccordion locale={local} />
            ) : (
              <Day3ScheduleAccordion locale={local} />
            )}
          </div>
        </div>
      </section>
      <ProgramThemeExplorer locale={local} />
    </>
  );
}
