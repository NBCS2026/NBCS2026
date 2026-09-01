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
        title: "Host",
        items: [
          "Odario Williams, Host of CBC's _Afterdark_, Hip-Hop Artist, Actor, DJ and Storyteller",
        ],
      },
      {
        title: "Summary of Summit Resolutions",
        items: [
          "Angela Cassie, Chair, 2026 National Black Canadians Summit",
        ],
      },
      {
        title: "Remarks",
        items: [
          "The Honourable Michael Coteau, Member of Parliament",
          "Edward Matwawana, Executive Director, Michaëlle Jean Foundation",
        ],
      },
      {
        title: "Passing of the Baton to Calgary",
        items: [
          "Dr. Charles Odame-Ankrah, Executive Director, Calgary African Community Collective",
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
          "Measha Brueggergosman-Lee and Summit Mass Choir, Directed by Sonya Williams",
        ],
      },
      {
        title: "Closing Prayers",
      },
    ],
  },
];
