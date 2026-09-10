import { _Translator } from "next-intl";

export function Timeline({
  t,
}: {
  t: _Translator<Record<string, any>, "about">;
}) {
  const data = [
    {
      date: t("text_nine"),
      title: t("text_ten"),
      description: t("text_eleven"),
    },
    {
      date: t("text_twelve"),
      title: t("text_thirteen"),
      description: t("text_fourteen"),
    },
    {
      date: t("text_fifteen"),
      title: t("text_sixteen"),
      description: t("text_seventeen"),
    },
    {
      date: t("text_eighteen"),
      title: t("text_nineteen"),
      description: t("text_twenty"),
    },
    {
      date: t("text_twentyOne"),
      title: t("text_twentyTwo"),
      description: t("text_twentyThree"),
    },
  ];
  return (
    <div className="space-y-8 [&>p]:leading-tight">
      <div className="text-center lg:text-start">
        <p className="text-[clamp(16px,1.82vw,22px)] font-medium text-light-red">
          {t("text_seven")}
        </p>
        <h2 className="text-[clamp(24px,2.79vw,43px)] text-black font-bold">
          {t("text_eight")}
        </h2>
      </div>
      <ol className="ml-2 border-l border-[#E8D4DB]">
        {data.map((el, idx) => (
          <li className="relative pb-9 pl-7 last:pb-0 sm:pl-8" key={idx}>
            <span aria-hidden="true" className="absolute -left-[6px] top-2 size-[11px] rounded-full bg-[#8C0C3A] ring-4 ring-white" />
            <p className="font-heading text-sm font-bold tracking-wide text-light-red">{el.date}</p>
            <h3 className="mt-2 text-lg font-semibold leading-snug text-black sm:text-xl">{el.title}</h3>
            <p className="mt-3 max-w-[65ch] text-base leading-[1.75] text-[#1E1E1E]/80">{el.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
