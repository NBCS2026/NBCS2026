import { useday } from "@/app/[locale]/program/hooks/useday";
import { _Translator } from "next-intl";
import { useState } from "react";

interface EventProps {
  t: _Translator<Record<string, any>, "program">;
  local: string;
}

interface EventItem {
  time: string;
  place: string;
  program: string;
  theme?: string;
}

export function Events({ t, local }: EventProps) {
  const [selectedDate, setSelectedDate] = useState("2026-09-18");
  const { DAY_1, DAY_2, DAY_3 } = useday(t);

  const EVENT_DAYS: Record<string, EventItem[]> = {
    "2026-09-18": DAY_1,
    "2026-09-19": DAY_2,
    "2026-09-20": DAY_3,
  };
  const events = EVENT_DAYS[selectedDate] ?? [];

  return (
    <>
      <style jsx>{`
        .day-button-tooltip {
          position: relative;
        }
        .day-button-tooltip::before {
          content: attr(data-tooltip);
          position: absolute;
          bottom: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          background-color: rgba(0, 0, 0, 0.85);
          color: white;
          padding: 6px 10px;
          border-radius: 4px;
          font-size: 12px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.1s ease-in-out;
          z-index: 10;
        }
        .day-button-tooltip::after {
          content: "";
          position: absolute;
          bottom: calc(100% + 2px);
          left: 50%;
          transform: translateX(-50%);
          border: 4px solid transparent;
          border-top-color: rgba(0, 0, 0, 0.85);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.1s ease-in-out;
          z-index: 10;
        }
        .day-button-tooltip:hover::before,
        .day-button-tooltip:hover::after {
          opacity: 1;
        }
      `}</style>
      <section className="max-w-[1440px] mx-auto px-5 mb-12 md:mb-32 ">
        <p className="font-bold text-[24px] lg:text-[43px] text-center mb-8">
          {t("text_one")} <span className="text-light-red">{t("text_two")}</span>
        </p>

        <p className="tracking-[0.08em] max-w-[38ch] md:max-w-[68ch] mx-auto text-light-red font-medium text-[clamp(14px,1.43vw,22px)] leading-tight mb-12 ">
          {t("post_titleOne")} <br /> {t("post_titleTwo")}
        </p>
        <div className="flex flex-col lg:flex-row gap-16 justify-center">
          <div className="flex flex-row lg:flex-col gap-4 justify-center lg:justify-normal">
            <button
              className={`day-button-tooltip w-[clamp(108px,8.14vw,125px)] h-[clamp(108px,8.14vw,125px)] rounded-full border-2 ${
                selectedDate == "2026-09-18"
                  ? "bg-light-red text-white"
                  : "border-light-red text-light-red hover:bg-[#a33d61] hover:text-white hover:border-[#a33d61]"
              } cursor-pointer  `}
              onClick={() => setSelectedDate("2026-09-18")}
              data-tooltip={local == "en" ? "Click to view Day 1 schedule" : "Cliquez pour voir l'horaire du jour 1"}
            >
            <p className="font-bold text-[21px] leading-tight">DAY 1</p>
            <p className="font-medium text-[13px]">
              {local == "en" ? "Friday, September 18" : "Vendredi 18 septembre"}
            </p>
          </button>
            <button
              className={`day-button-tooltip w-[clamp(108px,8.14vw,125px)] h-[clamp(108px,8.14vw,125px)] rounded-full border-2 ${
                selectedDate == "2026-09-19"
                  ? "bg-light-red text-white"
                  : "border-light-red text-light-red hover:bg-[#a33d61] hover:text-white hover:border-[#a33d61]"
              } cursor-pointer `}
              onClick={() => setSelectedDate("2026-09-19")}
              data-tooltip={local == "en" ? "Click to view Day 2 schedule" : "Cliquez pour voir l'horaire du jour 2"}
            >
            <p className="font-bold text-[21px] leading-tight">DAY 2</p>
            <p className="font-medium text-[13px]">
              {local == "en" ? "Saturday, September 19" : "Samedi 19 septembre"}
            </p>
          </button>
            <button
              className={`day-button-tooltip w-[clamp(108px,8.14vw,125px)] h-[clamp(108px,8.14vw,125px)] rounded-full border-2 ${
                selectedDate == "2026-09-20"
                  ? "bg-light-red text-white"
                  : "border-light-red text-light-red hover:bg-[#a33d61] hover:text-white hover:border-[#a33d61]"
              } cursor-pointer `}
              onClick={() => setSelectedDate("2026-09-20")}
              data-tooltip={local == "en" ? "Click to view Day 3 schedule" : "Cliquez pour voir l'horaire du jour 3"}
            >
            <p className="font-bold text-[21px] leading-tight">DAY 3</p>
            <p className="font-medium text-[13px]">
              {local == "en" ? "Sunday, September 20" : "Dimanche 20 septembre"}
            </p>
            </button>
          </div>
        <div className="space-y-10 [&>div:not(:last-child)]:border-b">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="flex flex-col lg:flex-row gap-6 lg:gap-[60px] items-start pb-6 lg:pb-10"
            >
              <div className="lg:w-[220px] lg:flex-shrink-0">
                <p className="text-light-red font-bold text-[22px]">
                  {event.time}
                </p>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[21px]">
                  {event.program.includes('(BY INVITATION ONLY)') ? (
                    <>
                      {event.program.replace(' (BY INVITATION ONLY)', '').split('|').map((part, idx, arr) => (
                        <span key={idx}>
                          {part}
                          {idx < arr.length - 1 && <br />}
                        </span>
                      ))}
                      <br />
                      <span className="text-[16px]">(BY INVITATION ONLY)</span>
                    </>
                  ) : event.program.includes('(SUR INVITATION UNIQUEMENT)') ? (
                    <>
                      {event.program.replace(' (SUR INVITATION UNIQUEMENT)', '').split('|').map((part, idx, arr) => (
                        <span key={idx}>
                          {part}
                          {idx < arr.length - 1 && <br />}
                        </span>
                      ))}
                      <br />
                      <span className="text-[16px]">(SUR INVITATION UNIQUEMENT)</span>
                    </>
                  ) : (
                    event.program.split('|').map((part, idx, arr) => (
                      <span key={idx}>
                        {part}
                        {idx < arr.length - 1 && <br />}
                      </span>
                    ))
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
