export type SummitWeekEvent = {
  id: string;
  date?: string;
  startTime?: string;
  endTime?: string;
  titleEn: string;
  titleFr: string;
  descriptionEn: string;
  descriptionFr: string;
  hostEn: string;
  hostFr: string;
  venue: string;
  address?: string;
  accessEn: string;
  accessFr: string;
  registrationUrl?: string;
  registrationLabelEn?: string;
  registrationLabelFr?: string;
  noteEn?: string;
  noteFr?: string;
  image: string;
};

const AMFM_DESCRIPTION_EN =
  "Now in its ninth edition, the African Movie Festival in Manitoba celebrates African and diasporic cinema through films, discussions, networking, youth programming and community gatherings.";
const AMFM_DESCRIPTION_FR =
  "Pour sa neuvième édition, le Festival du film africain du Manitoba célèbre le cinéma africain et diasporique avec des films, des discussions, du réseautage, une programmation jeunesse et des activités communautaires.";

export const SUMMIT_WEEK_EVENTS: SummitWeekEvent[] = [
  {
    id: "amfm-september-14",
    date: "2026-09-14",
    startTime: "18:00",
    endTime: "22:00",
    titleEn: "African Movie Festival in Manitoba (AM-FM 2026)",
    titleFr: "Festival du film africain du Manitoba (AM-FM 2026)",
    descriptionEn: AMFM_DESCRIPTION_EN,
    descriptionFr: AMFM_DESCRIPTION_FR,
    hostEn: "African Movie Festival in Manitoba",
    hostFr: "Festival du film africain du Manitoba",
    venue: "University of Manitoba",
    accessEn: "Public — ticket required",
    accessFr: "Public — billet requis",
    registrationUrl: "https://am-fm2026.eventive.org/pass/buy",
    registrationLabelEn: "Get festival pass",
    registrationLabelFr: "Obtenir un laissez-passer",
    noteEn: "Summit delegate pass: $30 (regularly $60) with code NBCS2026.",
    noteFr:
      "Laissez-passer pour les personnes déléguées : 30 $ (prix régulier de 60 $) avec le code NBCS2026.",
    image: "/summit-week-amfm.webp",
  },
  {
    id: "amfm-september-15",
    date: "2026-09-15",
    startTime: "15:30",
    endTime: "23:00",
    titleEn: "African Movie Festival in Manitoba (AM-FM 2026)",
    titleFr: "Festival du film africain du Manitoba (AM-FM 2026)",
    descriptionEn: AMFM_DESCRIPTION_EN,
    descriptionFr: AMFM_DESCRIPTION_FR,
    hostEn: "African Movie Festival in Manitoba",
    hostFr: "Festival du film africain du Manitoba",
    venue: "Centre culturel franco-manitobain",
    accessEn: "Public — ticket required",
    accessFr: "Public — billet requis",
    registrationUrl: "https://am-fm2026.eventive.org/pass/buy",
    registrationLabelEn: "Get festival pass",
    registrationLabelFr: "Obtenir un laissez-passer",
    noteEn: "Summit delegate pass: $30 (regularly $60) with code NBCS2026.",
    noteFr:
      "Laissez-passer pour les personnes déléguées : 30 $ (prix régulier de 60 $) avec le code NBCS2026.",
    image: "/summit-week-amfm.webp",
  },
  {
    id: "amfm-september-16",
    date: "2026-09-16",
    startTime: "15:00",
    endTime: "22:00",
    titleEn: "African Movie Festival in Manitoba (AM-FM 2026)",
    titleFr: "Festival du film africain du Manitoba (AM-FM 2026)",
    descriptionEn: AMFM_DESCRIPTION_EN,
    descriptionFr: AMFM_DESCRIPTION_FR,
    hostEn: "African Movie Festival in Manitoba",
    hostFr: "Festival du film africain du Manitoba",
    venue: "Université de Saint-Boniface",
    accessEn: "Public — ticket required",
    accessFr: "Public — billet requis",
    registrationUrl: "https://am-fm2026.eventive.org/pass/buy",
    registrationLabelEn: "Get festival pass",
    registrationLabelFr: "Obtenir un laissez-passer",
    noteEn: "Summit delegate pass: $30 (regularly $60) with code NBCS2026.",
    noteFr:
      "Laissez-passer pour les personnes déléguées : 30 $ (prix régulier de 60 $) avec le code NBCS2026.",
    image: "/summit-week-amfm.webp",
  },
  {
    id: "ancestors-exhibit-opening",
    date: "2026-09-17",
    startTime: "11:00",
    titleEn: "At the Knees of Our Ancestors — Exhibit Opening",
    titleFr: "Aux pieds de nos ancêtres — ouverture de l’exposition",
    descriptionEn:
      "The first phase of the Canadian Museum for Human Rights’ Ancestors Project, an ongoing initiative enriching Black content, programming and community engagement throughout the Museum.",
    descriptionFr:
      "Première étape du Projet des ancêtres du Musée canadien pour les droits de la personne, cette exposition enrichit les contenus, la programmation et l’engagement communautaire liés aux réalités noires.",
    hostEn: "Canadian Museum for Human Rights",
    hostFr: "Musée canadien pour les droits de la personne",
    venue: "Canadian Museum for Human Rights — Level 2 Gallery",
    address: "85 Israel Asper Way, Winnipeg, MB R3C 0L5",
    accessEn: "Public — free; registration required",
    accessFr: "Public — gratuit; inscription requise",
    noteEn: "Contact: alia.aluma@humanrights.ca",
    noteFr: "Contact : alia.aluma@humanrights.ca",
    image: "/summit-week-cmhr.jpg",
  },
  {
    id: "afroproud",
    date: "2026-09-17",
    startTime: "12:00",
    endTime: "13:00",
    titleEn: "AfroProud: Imagining Black Queer Audacity in Winnipeg",
    titleFr: "AfroProud : imaginer l’audace queer noire à Winnipeg",
    descriptionEn:
      "A panel discussion on the future of Black queer life in Manitoba, including barriers, progress, audacity, joy, self-determination and collective action.",
    descriptionFr:
      "Une discussion sur l’avenir des vies queer noires au Manitoba : obstacles, progrès, audace, joie, autodétermination et action collective.",
    hostEn: "Rainbow Resource Centre",
    hostFr: "Rainbow Resource Centre",
    venue: "Rainbow Resource Centre",
    address: "514 St Mary Avenue, Winnipeg, MB",
    accessEn: "Public — free",
    accessFr: "Public — gratuit",
    noteEn: "RSVP link to come. Contact: ralphb@rainbowresourcecentre.org",
    noteFr:
      "Lien d’inscription à venir. Contact : ralphb@rainbowresourcecentre.org",
    image: "/summit-week-rainbow.png",
  },
  {
    id: "amfm-september-17",
    date: "2026-09-17",
    startTime: "16:30",
    endTime: "22:30",
    titleEn: "African Movie Festival in Manitoba (AM-FM 2026)",
    titleFr: "Festival du film africain du Manitoba (AM-FM 2026)",
    descriptionEn: AMFM_DESCRIPTION_EN,
    descriptionFr: AMFM_DESCRIPTION_FR,
    hostEn: "African Movie Festival in Manitoba",
    hostFr: "Festival du film africain du Manitoba",
    venue: "WAG-Qaumajuq",
    address: "300 Memorial Boulevard, Winnipeg, MB",
    accessEn: "Public — ticket required",
    accessFr: "Public — billet requis",
    registrationUrl: "https://am-fm2026.eventive.org/pass/buy",
    registrationLabelEn: "Get festival pass",
    registrationLabelFr: "Obtenir un laissez-passer",
    noteEn: "Summit delegate pass: $30 (regularly $60) with code NBCS2026.",
    noteFr:
      "Laissez-passer pour les personnes déléguées : 30 $ (prix régulier de 60 $) avec le code NBCS2026.",
    image: "/summit-week-amfm.webp",
  },
  {
    id: "sleeping-car-porters-memorial",
    date: "2026-09-18",
    startTime: "11:00",
    titleEn: "Order of Sleeping Car Porters Memorial Garden",
    titleFr: "Jardin commémoratif de l’Ordre des porteurs de wagons-lits",
    descriptionEn:
      "A gathering at the Memorial Garden honouring the Black railway porters who established the Order of Sleeping Car Porters in Winnipeg in 1917 and their contribution to labour rights, human rights and racial equality in Canada.",
    descriptionFr:
      "Un rassemblement au jardin commémoratif en hommage aux porteurs de wagons-lits noirs qui ont fondé leur ordre à Winnipeg en 1917 et à leur contribution aux droits du travail, aux droits de la personne et à l’égalité raciale.",
    hostEn: "Black Manitobans Chamber of Commerce",
    hostFr: "Chambre de commerce des Manitobains noirs",
    venue: "Memorial Garden",
    address: "799 Main Street, Winnipeg, MB",
    accessEn: "Attendance by confirmation",
    accessFr: "Présence sur confirmation",
    noteEn: "Contact the host to confirm: info@bmbcc.ca",
    noteFr: "Communiquez avec l’organisme hôte pour confirmer : info@bmbcc.ca",
    image: "/summit-week-bmcc.png",
  },
  {
    id: "amfm-september-18",
    date: "2026-09-18",
    startTime: "16:30",
    endTime: "22:00",
    titleEn: "African Movie Festival in Manitoba (AM-FM 2026)",
    titleFr: "Festival du film africain du Manitoba (AM-FM 2026)",
    descriptionEn: AMFM_DESCRIPTION_EN,
    descriptionFr: AMFM_DESCRIPTION_FR,
    hostEn: "African Movie Festival in Manitoba",
    hostFr: "Festival du film africain du Manitoba",
    venue: "WAG-Qaumajuq",
    address: "300 Memorial Boulevard, Winnipeg, MB",
    accessEn: "Public — ticket required",
    accessFr: "Public — billet requis",
    registrationUrl: "https://am-fm2026.eventive.org/pass/buy",
    registrationLabelEn: "Get festival pass",
    registrationLabelFr: "Obtenir un laissez-passer",
    noteEn: "Summit delegate pass: $30 (regularly $60) with code NBCS2026.",
    noteFr:
      "Laissez-passer pour les personnes déléguées : 30 $ (prix régulier de 60 $) avec le code NBCS2026.",
    image: "/summit-week-amfm.webp",
  },
  {
    id: "amfm-september-19",
    date: "2026-09-19",
    startTime: "12:00",
    endTime: "20:00",
    titleEn: "African Movie Festival in Manitoba (AM-FM 2026)",
    titleFr: "Festival du film africain du Manitoba (AM-FM 2026)",
    descriptionEn: AMFM_DESCRIPTION_EN,
    descriptionFr: AMFM_DESCRIPTION_FR,
    hostEn: "African Movie Festival in Manitoba",
    hostFr: "Festival du film africain du Manitoba",
    venue: "WAG-Qaumajuq",
    address: "300 Memorial Boulevard, Winnipeg, MB",
    accessEn: "Public — ticket required",
    accessFr: "Public — billet requis",
    registrationUrl: "https://am-fm2026.eventive.org/pass/buy",
    registrationLabelEn: "Get festival pass",
    registrationLabelFr: "Obtenir un laissez-passer",
    noteEn: "Summit delegate pass: $30 (regularly $60) with code NBCS2026.",
    noteFr:
      "Laissez-passer pour les personnes déléguées : 30 $ (prix régulier de 60 $) avec le code NBCS2026.",
    image: "/summit-week-amfm.webp",
  },
  {
    id: "partners-reception",
    date: "2026-09-19",
    startTime: "17:00",
    endTime: "19:00",
    titleEn: "Sponsors & Partners Reception",
    titleFr: "Réception des commanditaires et des partenaires",
    descriptionEn:
      "An evening reception bringing together sponsors, partners, speakers and invited guests to celebrate collaboration and continue conversations in an informal setting.",
    descriptionFr:
      "Une réception réunissant commanditaires, partenaires, conférencières, conférenciers et personnes invitées afin de souligner les collaborations et de poursuivre les échanges dans une ambiance conviviale.",
    hostEn: "National Black Canadians Summit",
    hostFr: "Sommet pancanadien des communautés noires",
    venue: "Venue to be confirmed",
    accessEn: "By invitation only",
    accessFr: "Sur invitation seulement",
    image: "/winnipeg-event-photographer-01.jpg",
  },
  {
    id: "in-circle",
    date: "2026-09-19",
    startTime: "18:30",
    endTime: "22:30",
    titleEn: "IN CIRCLE: Black Women Proudly Powerful",
    titleFr: "EN CERCLE : Femmes noires, fières et puissantes",
    descriptionEn:
      "An intimate, invitation-only evening gathering centred on conversation, connection, storytelling and reflection among Black women.",
    descriptionFr:
      "Une rencontre intime sur invitation, consacrée à la conversation, aux liens, aux récits et à la réflexion entre femmes noires.",
    hostEn: "The Right Honourable Michaëlle Jean and the Honourable Marci Ien",
    hostFr: "La très honorable Michaëlle Jean et l’honorable Marci Ien",
    venue: "Manitoba Legislative Assembly",
    address: "450 Broadway, Winnipeg, MB R3C 3L6",
    accessEn: "By invitation only",
    accessFr: "Sur invitation seulement",
    noteEn: "Contact: jen@awlpartners.com",
    noteFr: "Contact : jen@awlpartners.com",
    image: "/winnipeg-event-photographer-01.jpg",
  },
  {
    id: "bpm-wag",
    date: "2026-09-19",
    startTime: "19:30",
    endTime: "22:00",
    titleEn: "BPM x WAG-Qaumajuq: Concert + Mixer",
    titleFr: "BPM x WAG-Qaumajuq : concert et rencontre",
    descriptionEn:
      "A special concert and community mixer featuring INGIA, Konfam and DJ Zuki, followed by connections among Black music makers and industry professionals.",
    descriptionFr:
      "Un concert spécial et une rencontre communautaire avec INGIA, Konfam et DJ Zuki, suivis d’un moment de réseautage entre artistes et professionnel·le·s de l’industrie musicale noire.",
    hostEn: "WAG-Qaumajuq and Manitoba Music",
    hostFr: "WAG-Qaumajuq et Manitoba Music",
    venue: "WAG-Qaumajuq — Main Hall",
    address: "300 Memorial Boulevard, Winnipeg, MB",
    accessEn: "Public — free",
    accessFr: "Public — gratuit",
    registrationUrl: "https://www.wag.ca/event/bpm-x-wag-qaumajuq-5/",
    registrationLabelEn: "Event details",
    registrationLabelFr: "Détails de l’événement",
    noteEn:
      "Doors open at 7:30 p.m.; live music and mixer run from 8:00–10:00 p.m.",
    noteFr:
      "Ouverture des portes à 19 h 30; musique et rencontre de 20 h à 22 h.",
    image: "/summit-week-bpm-wag.jpg",
  },
  {
    id: "amfm-september-20",
    date: "2026-09-20",
    startTime: "11:30",
    endTime: "22:00",
    titleEn: "African Movie Festival in Manitoba (AM-FM 2026)",
    titleFr: "Festival du film africain du Manitoba (AM-FM 2026)",
    descriptionEn: AMFM_DESCRIPTION_EN,
    descriptionFr: AMFM_DESCRIPTION_FR,
    hostEn: "African Movie Festival in Manitoba",
    hostFr: "Festival du film africain du Manitoba",
    venue: "WAG-Qaumajuq",
    address: "300 Memorial Boulevard, Winnipeg, MB",
    accessEn: "Public — ticket required",
    accessFr: "Public — billet requis",
    registrationUrl: "https://am-fm2026.eventive.org/pass/buy",
    registrationLabelEn: "Get festival pass",
    registrationLabelFr: "Obtenir un laissez-passer",
    noteEn: "Summit delegate pass: $30 (regularly $60) with code NBCS2026.",
    noteFr:
      "Laissez-passer pour les personnes déléguées : 30 $ (prix régulier de 60 $) avec le code NBCS2026.",
    image: "/summit-week-amfm.webp",
  },
  {
    id: "pegcity-steppers",
    titleEn: "Pegcity Steppers — details to come",
    titleFr: "Pegcity Steppers — détails à venir",
    descriptionEn: "Event details will be posted once confirmed.",
    descriptionFr:
      "Les détails de l’événement seront publiés dès qu’ils seront confirmés.",
    hostEn: "Pegcity Steppers",
    hostFr: "Pegcity Steppers",
    venue: "To be confirmed",
    accessEn: "To be confirmed",
    accessFr: "À confirmer",
    image: "/summit-week-pegcity.jpg",
  },
];
