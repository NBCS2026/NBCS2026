import type { ScheduleBlock } from "./schedule-types";

export const DAY3_SCHEDULE: ScheduleBlock[] = [
  {
    id: "closing-ceremony",
    time: "10:10 a.m. – 12:00 p.m.",
    title: "Closing Ceremony",
    location: "Hall C",
    description: "Closing Ceremony Program",
    action: {
      label: "Let your voice be heard",
      url: "/en/feedback?type=general#feedback-form",
    },
    segments: [
      {
        title: "Opening Choir Performance",
        items: [
          "Summit Choir, including members from Roots in Harmony",
        ],
      },
      {
        title: "Welcome from the Co-Hosts",
        items: [
          "Odario Williams, Host of CBC's _Afterdark_, Hip-Hop Artist, Actor, DJ and Storyteller",
          "Patricia Bitu Tshikudi, Executive Director, Centre Culturel Franco-Manitobain (CCFM)",
        ],
      },
      {
        title: "Summary of Summit Resolutions",
        items: [
          "Angela Cassie, Chair, 2026 National Black Canadians Summit, and Board Director, Michaëlle Jean Foundation",
        ],
      },
      {
        title: "Remarks",
        items: [
          "The Honourable Greg Fergus, Member of Parliament for Hull—Aylmer",
          "Ms. Tatiana Auguste, Member of Parliament for Terrebonne",
        ],
      },
      {
        title: "Remarks",
        items: [
          "Edward Matwawana, Executive Director, Michaëlle Jean Foundation",
        ],
      },
      {
        title: "Remarks",
        items: [
          "The Honourable Michael Coteau, Member of Parliament, The Canadian Congress of Black Politicians",
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
          "Measha Brueggergosman-Lee, internationally acclaimed soprano",
          "Stephen Lee",
        ],
      },
      {
        title: "Closing Prayers",
      },
      {
        title: "African Drumming and Farewell",
        items: ["Drummers From Home"],
      },
    ],
  },
];
