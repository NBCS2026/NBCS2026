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
        <p className="text-[clamp(24px,2.79vw,43px)] text-black font-bold">
          {t("text_eight")}
        </p>
      </div>
      {data.map((el, idx) => (
        <div className="medium-text space-y-1" key={idx}>
          <p className="text-light-red font-bold leading-none">{el.date}</p>
          <p className="text-black font-semibold leading-none">{el.title}</p>
          <p className="leading-tight">{el.description}</p>
        </div>
      ))}
    </div>
  );
}
