import type { ScheduleBlock } from "./schedule-types";

export const DAY3_SCHEDULE: ScheduleBlock[] = [
  {
    id: "closing-ceremony",
    time: "10:00 a.m. – 12:00 p.m.",
    title: "Closing Ceremony",
    location: "Hall C",
    description: "Closing Ceremony Program",
    segments: [
      {
        title: "Co-Hosts",
        items: [
          "Odario Williams, Host of CBC's _Afterdark_, Hip-Hop Artist, Actor, DJ and Storyteller",
          "Patricia Bitu Tshikudi, Executive Director, Centre Culturel Franco-Manitobain (CCFM)",
        ],
      },
      {
        title: "Summary of Summit Resolutions",
        items: ["Angela Cassie, Chair, 2026 National Black Canadians Summit"],
      },
      {
        title: "Remarks",
        items: [
          "The Honourable Michael Coteau, Member of Parliament",
          "Edward Matwawana, Executive Director, Michaëlle Jean Foundation",
        ],
      },
      {
        title: "Closing Remarks",
        items: [
          "The Right Honourable Michaëlle Jean, 27th Governor General and Commander-in-Chief of Canada",
        ],
      },
      {
        title: "Performance",
        items: [
          "Measha Brueggergosman-Lee",
          "Summit Mass Choir, including Roots in Harmony Choir, directed by Sonya Williams",
        ],
      },
      {
        title: "Closing Prayers",
      },
    ],
  },
];
