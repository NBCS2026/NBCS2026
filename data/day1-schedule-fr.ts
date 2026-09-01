import type { ScheduleBlock } from "./schedule-types";

export const DAY1_SCHEDULE_FR: ScheduleBlock[] = [
  {
    id: "registration",
    time: "Ouverture à 8 h",
    title: "Inscription générale et Marché",
    location: "Hall D",
    description:
      "Inscrivez-vous au Sommet et explorez le marché dès le début de la journée.",
  },
  {
    id: "opening-plenary",
    time: "10 h 00 – 10 h 30",
    title: "La jeunesse au pouvoir – Plénière d'ouverture",
    description:
      "Reflétant la créativité, la diversité et l'enthousiasme de la nouvelle génération, le lancement de la Journée de la jeunesse au pouvoir 2026 met à l'honneur, par des présentations en direct, des talents de la nouvelle génération à découvrir.",
    people: [
      {
        label: "host",
        names: [
          "Justin Holness, artiste et humanitaire, conseiller élu de la Première Nation Ocean Man",
        ],
      },
      {
        label: "allocution",
        names: [
          "Candies Kotchapaw, fondatrice de l'Organization for Economic Development and Diplomacy (OEDD)",
        ],
      },
    ],
  },
  {
    id: "break-morning",
    time: "10 h 30 – 11 h 00",
    title: "Pause",
    compact: true,
  },
  {
    id: "morning-sessions",
    time: "11 h 00 – 12 h 30",
    title: "Séances du matin — Projets communautaires de la jeunesse au pouvoir",
    note: "Le dîner sera servi à partir de 12 h 30.",
    description:
      "L'initiative La jeunesse au pouvoir est devenue l'un des programmes phares de la Fondation Michaëlle Jean. Elle est née des appels à l'action lancés par les jeunes lors du 3e Sommet pancanadien des communautés noires, tenu à Halifax en 2022. Ancrée dans la Déclaration d'Halifax, l'initiative a d'abord pris forme dans 35 projets dirigés par des jeunes, démontrant que la Déclaration n'est pas seulement une vision, mais un cadre vivant et concret pour faire progresser l'équité raciale. La Déclaration d'Halifax appelle à une mobilisation nationale contre la discrimination raciale et s'appuie sur l'élan des précédents Sommets pancanadiens des communautés noires (SPCN) organisés par la Fondation Michaëlle Jean lors de la première Décennie internationale pour les personnes d'ascendance africaine (2015–2024). L'initiative soutient aujourd'hui une deuxième cohorte de 25 projets, dirigés par des jeunes de partout au pays. Nous vous invitons à venir découvrir les séances qu'ils ont conçues ensemble, qui offrent un espace où présenter leur travail, réfléchir à leurs expériences et échanger un dialogue sur les enjeux qui façonnent leurs communautés et leur avenir.",
    sessions: [
      {
        id: "session-1",
        number: 1,
        title: "Leadership et gouvernance",
        room: "2E",
        description:
          "Cette séance explore la manière dont les jeunes Noirs agissent comme moteurs de changement au sein de leurs communautés par leur leadership, leur action de sensibilisation et leur engagement dans la gouvernance. Les échanges porteront sur l'engagement civique, la représentation, la responsabilisation communautaire et les nombreuses façons dont le leadership est redéfini selon leurs propre conceptions et priorités.",
        people: [
          {
            label: "panelists",
            names: [
              "STEMBOUD — Demilade Akinleye-Abraham, Kamsiyochi Onyekere",
              "Lead-Her-ship — Mabel Adesopo, Asha Jama",
              "Institut de justice Viola Desmond — Heraldo Junior Jacques et Kadene Massop",
            ],
          },
        ],
      },
      {
        id: "session-2",
        number: 2,
        title: "Innovation, technologie et compétences futures",
        room: "2F",
        description:
          "Axée sur la technologie, la créativité et les compétences d'avenir, cette session examine comment les jeunes Noirs mettent l'innovation au service de leur autonomie et de développement communautaire. Elle ouvrira des discussions sur l'accès, les possiblités, l'équité numérique et le rôle des connaissances émergentes dans façonner l'avenir.",
        people: [
          {
            label: "moderator",
            names: [
              "Franck-Maleek Djamat-Dubois — Fondateur de Kids Connect Africa et de FM Media",
            ],
          },
          {
            label: "panelists",
            names: [
              "AccessPoint — Daniel Ohaegbu",
              "Parole et Parcours — Opemipo Mariam Balogun",
              "Marteine — Tia Tom",
            ],
          },
        ],
      },
      {
        id: "session-3",
        number: 3,
        title: "Développement économique et entrepreneuriat",
        room: "2G",
        description:
          "Cette session aborde l'entrepreneuriat et l'autonomisation économique comme voies vers la durabilité et l'autodétermination. Les discussions porteront sur la création d'entreprises, l'indépendance financière, la création de richesse au sein des communautés, ainsi que les possibilités et obstacles auxquels sont confrontés les jeunes Noirs dans le paysage économique canadien.",
        people: [
          {
            label: "facilitator",
            names: [
              "Drayton Mulindabigwi — Fondateur de The Novas Group",
            ],
          },
          {
            label: "panelists",
            names: [
              "For the Culture — Souleman Baba Eya, Hidaya Tchassanti",
              "Uvusa Abalele — D-yana Andrel Bommier",
              "Maker Festival — Kelvin Doe, Kiara Denee",
            ],
          },
        ],
      },
      {
        id: "session-4",
        number: 4,
        title: "Santé et autonomisation",
        room: "2H",
        description:
          "Centrée sur le bien-être et l'autonomisation, cette session ouvre un espace d'échange sur la santé mentale, physique et communautaire. Elle examinera le bien-être personnel, l'accès aux soins, les obstacles systémiques et les façons dont les jeunes imaginent des avenirs plus sains et plus solidaires pour leurs communautés.",
        people: [
          {
            label: "moderatrice",
            names: [
              "Shekara Grant — Leader exécutive et fondatrice de Weymouth Falls",
            ],
          },
          {
            label: "panelists",
            names: [
              "Expressions — Gabriela Sealy, Angel Persaud",
              "Better Place — Françoise Rania Ivala, Aminata Diallo",
              "Black Aspiring Medical Professionals (BAMP) — Warona Folasayo Alawiye, Babatamilore Ashofor",
            ],
          },
        ],
      },
      {
        id: "session-5",
        number: 5,
        title: "Culture, arts et mémoire narrative",
        room: "Pan Am",
        description:
          "Cette session explore le pouvoir de la culture, de l'art et du récit dans la formation de l'identité, la préservation de la mémoire et le renforcement de l'appartenance. Elle invite à réfléchir sur l'expression créative comme force de résistance, d'affirmation culturelle et de réinvention des récits de la jeunesse noire.",
        people: [
          {
            label: "moderator",
            names: [
              "Andre Anderson — Réalisateur et 7e descendant du fondateur d'Africville, en Nouvelle-Écosse",
            ],
          },
          {
            label: "panelists",
            names: [
              "Voice Up — Abubaker Bukulu",
              "Picnic in the park — Oluchi Adesuwa, Jeremiah Brookes",
              "Our crib Uncut — Alliston Zachary Esmond Davis, Cheyenne Duff",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "plenary-afternoon",
    time: "13 h 00 – 14 h 00",
    title: "Séance plénière",
    subtitle:
      "Dialogue intergénérationnel entre communautés noires et autochtones : se rassembler pour contribuer à la guérison du monde",
    location: "Hall C",
    description:
      "Ce dialogue interroge ce qui devient possible lorsque les peuples noirs et autochtones se rencontrent d'une génération à une autre avec le courage de dire la vérité et la responsabilité d'agir en conséquence. Enraciné à Winnipeg, en territoire visé par le Traité no 1, cet échange reconnaîtra et honorera des histoires distinctes, des réalités vécues et des enseignements culturels tout en explorant les responsabilités qui naissent de leur rencontre. La conversation abordera comment la mémoire peut guider l'action, comment bâtir des relations fondées sur l'honnêteté et l'attention portée à l'autre, et comment la solidarité peut devenir un engagement partagé envers la justice, la guérison et un avenir où toutes nos communautés pourront s'épanouir.",
    people: [
      {
        label: "animatrice",
        names: ["Oyíndàmọ́lá Aláká, directrice des programmes, Career Trek"],
      },
      {
        label: "panelists",
        names: [
          "La très honorable Michaëlle Jean, 27e gouverneure générale et commandante en chef du Canada",
          "Lisa Meeches, C.M., O.M., directrice générale, Festival Manito Ahbee",
          "Justin Holness, artiste et humanitaire, conseiller élu de la Première Nation Ocean Man",
          "Dre Tasha Spillett, auteure primée, éducatrice et chercheuse autochtone",
        ],
      },
    ],
  },
  {
    id: "break-afternoon",
    time: "14 h 00 – 14 h 30",
    title: "Pause",
    compact: true,
  },
  {
    id: "afternoon-sessions",
    time: "14 h 30 – 16 h 00",
    title: "Séances simultanées de l'après-midi",
    sessions: [
      {
        id: "session-6",
        number: 6,
        title: "Se construire pour bâtir son avenir",
        room: "Pan Am",
        description:
          "Cette session explore le rôle déterminant des réseaux dans l'accès aux possibilités et le développement. Elle invite les participants à repenser le réseautage au-delà des transactions, en se concentrant plutôt sur l'authenticité, le développement de relations et la capacité d'évoluer avec assurance dans les milieux professionnels. En s'appuyant sur des expériences vécues et des conseils concrets, la conversation mettra en lumière comment des relations solides peuvent soutenir le développement personnel et professionnel à long terme.",
      },
      {
        id: "session-7",
        number: 7,
        title: "L'art comme acte de résistance",
        room: "Suite Millennium",
        description:
          "Cette session examine le rôle de l'art comme outil puissant d'expression, de résistance et de changement social. Elle explorera comment les pratiques créatives se conjuguent à l'engagement citoyen et à la défense de causes et l'engagement civique, et comment les artistes utilisent leur travail pour remettre en question les récits, faire entendre les voix et façonner la conscience collective. La conversation crée également un espace pour réfléchir aux liens entre les traditions artistiques noires et autochtones et leurs histoires communes de résilience.",
        people: [
          {
            label: "host",
            names: [
              "Genie Baffoe, artiste hip-hop, organisateur communautaire, éducateur",
            ],
          },
        ],
      },
      {
        id: "session-8",
        number: 8,
        title: "Lutter contre le racisme : de la sensibilisation à l'action",
        room: "2E",
        description:
          "Cette séance entend dépasser le constat pour passer à l'action. Elle explorera comment les individus et les communautés peuvent agir contre le racisme de manière tangible et efficace dans différents domaines, y compris les écoles, les institutions et la vie quotidienne. Les participants s'engageront dans des stratégies qui transforment la prise de conscience en action concrète, favorisant des discussions autour de l'obligation de rendre compte, de la solidarité active et de la mobilisation durable.",
        people: [
          {
            label: "moderator",
            names: [
              "Dan Ngenzi Ya Ruty, commissaire aux affaires francophones de l'UOSU, co-président de la RWSA",
            ],
          },
          {
            label: "panelists",
            names: [
              "Isak Vaillaincourt, cinéaste, artiste multidisciplinaire et cofondateur et directeur de BLM Sudbury",
              "Nita Omokhose Badaiki, militante et animatrice chevronnée en matière d'anti-oppression",
            ],
          },
        ],
      },
      {
        id: "session-9",
        number: 9,
        title: "Guérir pour diriger : santé mentale et jeunesse noire",
        room: "2F",
        description:
          "Cette session place la santé mentale au fondement du leadership, de la résilience et du bien-être communautaire. Elle abordera l'anxiété, l'épuisement, la dépression et le syndrome de l'imposteur, tout en abordant les réalités particulières auxquelles sont confrontés les jeunes Noirs. En insistant sur l'importance des soins et de la guérison, la séance souligne que le changement durable commence par le bien-être individuel et collectif.",
        people: [
          {
            label: "facilitators",
            names: [
              "Tracy Karuhogo, fondatrice du Black Girl Talk Collective et conseillère régionale des Prairies au bureau du ministre des Relations entre la Couronne et les Autochtones",
              "Warren Clarke, fondateur de Barbershop Talk, fondateur et directeur du programme de mentorat afro-caribéen",
            ],
          },
        ],
      },
      {
        id: "session-10",
        number: 10,
        title: "Commencer dès aujourd'hui à bâtir son patrimoine",
        room: "2G",
        description:
          "Cette session se concentre sur l'autonomisation financière comme voie vers l'indépendance et la stabilité à long terme. Elle explorera les notions fondamentales de la littératie financière, notamment la gestion de l'argent, l'épargne, l'investissement et la constitution de patrimoine dans le contexte canadien. La discussion abordera également les obstacles systémiques et mettra en avant des moyens pratiques pour que les jeunes prennent leur avenir financier en main.",
        people: [
          {
            label: "facilitator",
            names: [
              "Andre Smith, fondateur et PDG de Flip & Floss et fondateur de Flip Academy",
            ],
          },
        ],
      },
      {
        id: "session-11",
        number: 11,
        title: "Nos voix, d'une génération à l'autre",
        room: "2H",
        description:
          "Cette session explore l'importance de la mémoire, du dialogue intergénérationnel et de la continuité culturelle au sein des communautés noires. Elle crée un espace pour réfléchir à des histoires partagées, des réalités présentes et des aspirations futures, tout en mettant l'accent sur le rôle de la narration dans la préservation de l'identité et de l'appartenance. La conversation mettra également en lumière les liens avec les perspectives autochtones sur la mémoire, la terre et la communauté.",
        people: [
          {
            label: "moderator",
            names: [
              "Andre Anderson, cinéaste et descendant à la septième génération du fondateur d'Africville, Nouvelle-Écosse",
            ],
          },
          {
            label: "panelists",
            names: [
              "Aaliyah Hotomani-Hart, entraîneuse adjointe de volley-ball et défenseure de la représentation noire et autochtone dans le sport",
              "Jaelyn Jarrett, chercheuse en études noires et défenseure de l'histoire inuite",
            ],
          },
        ],
      },
      {
        id: "session-12",
        number: 12,
        title: "Votre feuille de route vers CBC : comment présenter une idée",
        room: "Théâtre de présentation",
        description:
          "La table ronde « En route vers CBC : comment présenter votre histoire » vise à aider les créateurs et créatrices, les artistes et les personnes engagées dans leur communauté à raconter leur histoire unique. Venez faire le plein de conseils pratiques sur la façon de mettre votre histoire en récit, de vous démarquer dans un paysage médiatique foisonnant, et de présenter votre projet à des producteurs et à des auditoires qui auront envie d'entendre votre histoire.",
        note: "Veuillez prendre note que cette activité se déroulera en anglais.",
        people: [
          {
            label: "moderator",
            names: [
              "Odario Williams, animateur d'_Afterdark_ à CBC, artiste hip-hop, acteur, DJ et raconteur",
            ],
          },
          {
            label: "panelists",
            names: [
              "Barbara Mamabolo, responsable de la production, Dramatiques, dans l'équipe du Contenu scénarisé de CBC (_Heartland et Wild Cards_)",
              "Toni Francis, première réalisatrice, _Dragons' Den_",
              "Robin Summerfield, première réalisatrice pour le réseau de créateurs de CBC Manitoba et _Absolutely Canadian_",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "networking",
    time: "18 h – 19 h",
    title: "Période de réseautage des personnes délégué·e·s",
    description:
      "Échangez avec les autres délégué·e·s avant la cérémonie d'ouverture.",
  },
  {
    id: "opening-ceremony",
    time: "À partir de 19 h",
    title: "Cérémonie d'ouverture",
    location: "Hall C",
    description: "Programme",
    segments: [
      {
        title:
          "Vidéo d'ouverture du Sommet — Réalisée par Joye Social House et produite par 9:16 Stories",
      },
      {
        title: "Animation",
        items: [
          "Odario Williams, animateur radio, musicien et animateur de l'émission Afterdark sur CBC Music",
        ],
      },
      {
        title:
          "Mot de bienvenue, reconnaissance du territoire, entrée officielle et prières d'ouverture",
      },
      {
        title: "Allocution",
        items: [
          "Dr Niigaanwewidam Sinclair, écrivain anishinaabe, professeur d'études autochtones et lauréat du Prix du Gouverneur général",
        ],
      },
      {
        title: "Prestations",
        items: [
          "Hymne national",
          "Hymne national noir (Lift Every Voice and Sing) — Ayosingz, chanteur, auteur-compositeur et producteur gospel canado-nigérian, et des artistes du programme Black Professionals in Music de Manitoba Music",
        ],
      },
      {
        title: "Bienvenue à Winnipeg, Manitoba",
        items: [
          "L'honorable Anita Neville, P.C., O.M., lieutenante-gouverneure du Manitoba",
          "L'honorable Wab Kinew, premier ministre du Manitoba",
          "Son Honneur le maire Scott Gillingham",
        ],
      },
      {
        title: "Poésie et prestation de danse",
        items: [
          "Chimwemwe Undi, poète lauréat parlementaire du Canada et ancien poète officiel de Winnipeg; poète, écrivain et rédacteur",
          "Elsie Rweyemamu, danseuse et élève de la division récréative de l'école Royal Winnipeg Ballet — Chorégraphie par Nicole Kepp, directrice de la division récréative de la Royal Winnipeg Ballet School du Canada",
          "Kamil Jones Strachan, pianiste classique primé",
        ],
      },
      {
        title: "Allocution principale",
        items: [
          "Introduction – TD Bank Group, commanditaire principal du Sommet pancanadien des communautés noires - Gary Clement, directeur des relations gouvernementales, Groupe Banque TD",
          "La très honorable Michaëlle Jean, 27e gouverneure générale et commandante en chef du Canada",
        ],
      },
      {
        title: "Prestation vedette",
        items: [
          "Présentation — Natalie Thiesen, vice-présidente au tourisme, Tourisme Winnipeg",
          "Jully Black, artiste primée et militante",
        ],
      },
      {
        title: "Musique de clôture",
        items: ["Dr. Henry Band"],
      },
    ],
  },
];
