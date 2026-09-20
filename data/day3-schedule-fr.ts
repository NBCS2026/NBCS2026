import type { ScheduleBlock } from "./schedule-types";

export const DAY3_SCHEDULE_FR: ScheduleBlock[] = [
  {
    id: "closing-ceremony",
    time: "10 h 10 – 12 h 00",
    title: "Cérémonie de clôture",
    location: "Hall C",
    description: "Programme de la cérémonie de clôture",
    action: {
      label: "Faites entendre votre voix",
      url: "/fr/feedback?type=general#feedback-form",
    },
    segments: [
      {
        title: "Prestation d’ouverture de la chorale",
        items: [
          "La grande chorale du Sommet, avec la participation de membres de Roots in Harmony",
        ],
      },
      {
        title: "Mot de bienvenue des coanimateurs",
        items: [
          "Odario Williams, animateur d'_Afterdark_ à CBC, artiste hip-hop, acteur, DJ et raconteur",
          "Patricia Bitu Tshikudi, directrice générale, Centre culturel franco-manitobain (CCFM)",
        ],
      },
      {
        title: "Présentation des résolutions du Sommet",
        items: [
          "Angela Cassie, présidente du Sommet pancanadien des communautés noires 2026 et administratrice de la Fondation Michaëlle Jean",
        ],
      },
      {
        title: "Allocutions",
        items: [
          "L’honorable Greg Fergus, député de Hull—Aylmer",
          "Madame Tatiana Auguste, députée de Terrebonne",
        ],
      },
      {
        title: "Allocution",
        items: [
          "Edward Matwawana, directeur général, Fondation Michaëlle Jean",
        ],
      },
      {
        title: "Allocution",
        items: [
          "L'honorable Michael Coteau, député, The Canadian Congress of Black Politicians",
        ],
      },
      {
        title: "Mot de clôture",
        items: [
          "La très honorable Michaëlle Jean, 27e gouverneure générale et commandante en chef du Canada (2005–2010)",
        ],
      },
      {
        title: "Prestation",
        items: [
          "Measha Brueggergosman-Lee, soprano de renommée internationale",
          "Stephen Lee",
        ],
      },
      {
        title: "Prières de clôture",
      },
      {
        title: "Tambours africains et départ",
        items: ["Drummers From Home"],
      },
    ],
  },
];
