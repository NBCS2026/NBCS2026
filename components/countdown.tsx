import { _Translator } from "next-intl";
import { useEffect, useState } from "react";

interface CountdownProps {
  t: _Translator<Record<string, any>, "home">;
}

const targetDate = new Date("September 18, 2026 00:00:00").getTime();
export function CountDown({ t }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        days = hours = minutes = seconds = 0;
      }

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2.5 md:gap-4 relative [&>div]:w-[clamp(71px,9.89vw,152px)] [&>div]:h-[clamp(57px,8vw,123px)] [&>span]:text-[clamp(25px,3.25vw,50px)] [&>div]:justify-center justify-center">
      <div className="flex flex-col items-center bg-[#EFECED] rounded-xl [&>span]:leading-none gap-1">
        <span className="font-semibold text-[clamp(26px,3.71vw,57px)]">
          {String(timeLeft.days).padStart(2, "0")}
        </span>
        <span className="text-[8px] lg:text-[14px]">{t("count_day")}</span>
      </div>
      <span className="-translate-y-1">:</span>
      <div className="flex flex-col items-center bg-[#EFECED] rounded-xl [&>span]:leading-none gap-1">
        <span className="font-semibold text-[clamp(26px,3.71vw,57px)]">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="text-[8px] lg:text-[14px]">{t("count_hour")}</span>
      </div>
      <span className="-translate-y-1">:</span>
      <div className="flex flex-col items-center bg-[#EFECED] rounded-xl [&>span]:leading-none gap-1">
        <span className="font-semibold text-[clamp(26px,3.71vw,57px)]">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="text-[8px] lg:text-[14px]">{t("count_min")}</span>
      </div>
      <span className="-translate-y-1">:</span>
      <div className="flex flex-col items-center bg-[#EFECED] rounded-xl [&>span]:leading-none gap-1">
        <span className="tabular-nums font-semibold text-[clamp(26px,3.71vw,57px)]">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
        <span className="text-[8px] lg:text-[14px]">{t("count_sec")}</span>
      </div>
    </div>
  );
}
