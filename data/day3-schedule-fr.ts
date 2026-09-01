import type { ScheduleBlock } from "./schedule-types";

export const DAY3_SCHEDULE_FR: ScheduleBlock[] = [
  {
    id: "closing-ceremony",
    time: "10 h 00 – 12 h 00",
    title: "Cérémonie de clôture",
    location: "Hall C",
    description: "Programme de la cérémonie de clôture",
    segments: [
      {
        title: "Animation",
        items: [
          "Odario Williams, animateur d'_Afterdark_ à CBC, artiste hip-hop, acteur, DJ et raconteur",
        ],
      },
      {
        title: "Présentation des résolutions du Sommet",
        items: [
          "Angela Cassie, présidente du Sommet pancanadien des communautés noires 2026",
        ],
      },
      {
        title: "Allocutions",
        items: [
          "L'honorable Michael Coteau, député",
          "Edward Matwawana, directeur général, Fondation Michaëlle Jean",
        ],
      },
      {
        title: "Passage du flambeau à Calgary",
        items: [
          "Dr Charles Odame-Ankrah, directeur général, Calgary African Community Collective",
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
          "Measha Brueggergosman-Lee et la grande chorale du Sommet, dirigée par Sonya Williams",
        ],
      },
      {
        title: "Prières de clôture",
      },
    ],
  },
];
