import { _Translator } from "next-intl";

interface EventProps {
  t: _Translator<Record<string, any>, "program">;
}

export function useday(t: _Translator<Record<string, any>, "program">) {
  const DAY_1 = [
    {
      time: t("day_1_time_1"),
      place: "Main Venue",
      program: t("day_1_program_1"),
    },
    {
      time: t("day_1_time_2"),
      place: "Main Auditorium",
      program: t("day_1_program_2"),
    },
    {
      time: t("day_1_time_3"),
      place: "Dining Hall",
      program: t("day_1_program_3"),
    },
    {
      time: t("day_1_time_4"),
      place: "Main Auditorium",
      program: t("day_1_program_4"),
    },
    {
      time: t("day_1_time_5"),
      place: "Main Auditorium",
      program: t("day_1_program_5"),
    },
    {
      time: t("day_1_time_6"),
      place: "Various Rooms",
      program: t("day_1_program_6"),
    },
    {
      time: t("day_1_time_7"),
      place: "Performance Hall",
      program: t("day_1_program_7"),
    },
  ];

  const DAY_2 = [
    {
      time: t("day_2_time_1"),
      place: "Dining Hall",
      program: t("day_2_program_1"),
    },
    {
      time: t("day_2_time_2"),
      place: "Main Auditorium",
      program: t("day_2_program_2"),
    },
    {
      time: t("day_2_time_3"),
      place: "Various Rooms",
      program: t("day_2_program_3"),
    },
    {
      time: t("day_2_time_4"),
      place: "Dining Hall & Main Auditorium",
      program: t("day_2_program_4"),
    },
    {
      time: t("day_2_time_5"),
      place: "Various Rooms",
      program: t("day_2_program_5"),
    },
    {
      time: t("day_2_time_6"),
      place: "VIP Lounge",
      program: t("day_2_program_6"),
    },
  ];
  const DAY_3 = [
    {
      time: t("day_3_time_1"),
      place: "Dining Hall",
      program: t("day_3_program_1"),
    },
    {
      time: t("day_3_time_2"),
      place: "Main Auditorium",
      program: t("day_3_program_2"),
    },
    {
      time: t("day_3_time_3"),
      place: "Main Auditorium",
      program: t("day_3_program_3"),
    },
  ];
  return { DAY_1, DAY_2, DAY_3 };
}
