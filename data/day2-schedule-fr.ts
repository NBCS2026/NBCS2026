import type { ScheduleBlock } from "./schedule-types";

export const DAY2_SCHEDULE_FR: ScheduleBlock[] = [
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
    title: "Plénière d’ouverture",
    subtitle:
      "Canada et la deuxième Décennie internationale pour les personnes d’ascendance africaine",
    location: "Hall C",
    description:
      "La deuxième Décennie internationale des personnes d’ascendance africaine offre une nouvelle occasion de faire le lien entre les engagements internationaux du Canada et des mesures concrètes au pays. En s’appuyant sur la participation du Canada au Forum permanent des Nations Unies sur les personnes d’ascendance africaine, cette session explorera comment les priorités internationales peuvent nourrir les politiques de lutte contre le racisme, la mémoire collective, la reddition de comptes des institutions ainsi que des partenariats durables avec les communautés noires et les jeunes.",
    people: [
      {
        label: "keynote",
        names: [
          "Andrew Brown, sous-ministre adjoint, Patrimoine canadien",
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
    title: "Séances simultanées du matin",
    note: "La pause déjeuner est servie à partir de 12 h 30.",
    sessions: [
      {
        id: "d2-am-1",
        number: 1,
        title:
          "Racisme anti-Noirs dans les systèmes de santé : racisme structurel et inégalités en santé",
        room: "2H",
        description:
          "Cette session examine comment le racisme anti-Noirs se manifeste dans les systèmes de santé, y compris les disparités de traitement, les obstacles à l'accès et les inégalités systémiques qui influencent les résultats de santé. Elle explore l'importance des soins culturellement adaptés, de la représentation dans le domaine médical, ainsi que le rôle des données et de la responsabilisation dans la mise en place de systèmes plus équitables.",
        people: [
          {
            label: "moderator",
            names: [
              "Dr Idrissa Beogo, professeur agrégé à l’École des sciences infirmières et directeur associé du Centre Interdisciplinaire pour la santé des Noir.e.s, Université d’Ottawa",
            ],
          },
          {
            label: "panelists",
            names: [
              "Dr Jude Mary Cénat, professeur titulaire à l’École de psychologie et titulaire de la Chaire de recherche de l’Université sur la santé des Noir∙e∙s, Université d’Ottawa",
              "Dre Monnica Williams, professeure et titulaire de la Chaire de recherche du Canada sur l’innovation et l’équité en santé mentale, Université d’Ottawa",
              "Dre Josephine Etowa, professeure titulaire (niveau 1), titulaire de la Chaire de recherche du Canada sur la santé des femmes noires, responsable scientifique du Centre Interdisciplinaire pour la santé des Noir∙e∙s de l’Université d’Ottawa, fondatrice et directrice du CO-CREATH lab.",
              "Ashley Carruthers, infirmière praticienne, Université du Manitoba et Association des infirmières praticiennes du Manitoba (NPAM)",
            ],
          },
        ],
      },
      {
        id: "d2-am-2",
        number: 2,
        title:
          "Souveraineté narrative : les infrastructures culturelles noires et le pouvoir du récit",
        room: "2F",
        description:
          "Cette session explore comment la narration, l'art et la production culturelle contribuent à préserver la mémoire, à résister aux effacements et à affirmer les identités. Elle examine l'importance d’édifier des infrastructures culturelles durables et de garantir que les récits des communautés noires demeurent visibles, autonomes et pérennes.",
        people: [
          {
            label: "moderatrice",
            names: [
              "Dre Tasha Spillett, auteure, éducatrice et chercheuse",
            ],
          },
          {
            label: "panelists",
            names: [
              "Alia Aluma, conservatrice, Musée canadien des droits de la personne et réalisatrice",
              "Judy Williams, présidente/Gestionnaire de programme, The Black Canadian Experience Centre (BCEC)",
              "Allen Alexandre, PDG du Centre culturel afro-canadien de Montréal (CCAM)",
              "Russell Grosse, directeur exécutif du Black Cultural Centre",
            ],
          },
        ],
      },
      {
        id: "d2-am-3",
        number: 3,
        title:
          "Moderniser l'équité en emploi avec Le Groupe canado-africain du Sénat",
        room: "Théâtre de présentation",
        description:
          "Cette table ronde dirigée par le Sénat réunira des sénateurs du Groupe du Sénat afro-canadien pour examiner la nécessité urgente de moderniser la Loi sur l'équité en matière d'emploi. La session explorera comment la législation actuelle peut mieux refléter les réalités et les expériences des Canadiens noirs, des peuples autochtones, des personnes en situation de handicap, des femmes et d'autres communautés méritant l'équité. Les intervenants discuteront de l'importance de mettre à jour le langage obsolète, de remédier aux limites de la catégorie des « minorités visibles » et d'appliquer une analyse intersectionnelle tenant compte des expériences des communautés 2SLGBTQIA+. La session mettra en lumière la nécessité d'une action législative concrète à la suite de l'examen de la Loi sur l'équité en matière d'emploi de 2023 du gouvernement du Canada et insistera sur la nécessité de progrès concrets vers l'équité en milieu de travail.",
        people: [
          {
            label: "moderator",
            names: [
              "L’honorable Tony Ince, sénateur de la Nouvelle-Écosse, ancien député à l’Assemblée législative de la Nouvelle-Écosse, ancien ministre des Affaires afro-néo-écossaises et cofondateur du Canadian Congress of Black Parliamentarians",
            ],
          },
          {
            label: "panelists",
            names: [
              "L’honorable Paulette Senior, sénatrice de l’Ontario et ancienne présidente-directrice générale de la Fondation canadienne des femmes",
              "L’honorable Bernadette Clement, sénatrice de l’Ontario, membre du Groupe des sénateurs indépendants, ancienne mairesse de Cornwall et première femme noire à avoir exercé la fonction de maire en Ontario",
              "L’honorable Amina Gerba, sénatrice du Québec (Rigaud), entrepreneure et coprésidente de l’Association parlementaire Canada-Afrique",
              "L’honorable Suze Youance, sénatrice du Québec (Lauzon), ingénieure civile, éducatrice et chercheuse",
            ],
          },
        ],
      },
      {
        id: "d2-am-4",
        number: 4,
        title:
          "Réforme de la justice, responsabilité juridique et sécurité communautaire au-delà de la police",
        room: "2G",
        description:
          "Cette session examine des solutions de rechange aux modèles policiers traditionnels et explore comment la responsabilité juridique et les modèles de sécurité portés par les communautés peuvent réduire les préjudices. Elle met en lumière des approches qui placent la prévention, les soins et la dignité au cœur de leur approche tout en intégrant les perspectives noires et autochtones sur la justice et la réforme systémique.",
        people: [
          {
            label: "moderatrice",
            names: [
              "Harley Gervais, fondateur et directeur de The G-Eight et ancien juge de paix",
            ],
          },
          {
            label: "panelists",
            names: [
              "El Jones, poète, journaliste et professeure à l'Université Mount Saint Vincent",
              "Surintendant Darryl Dawkins, directeur du Secrétariat de la GRC sur la lutte contre le racisme, l’équité, la diversité et l’inclusion, et fondateur du programme DICE",
              "Jean-René Dominique Kwilu, avocat et président de l’Association canadienne des avocats noirs (CABL), section du Manitoba",
              "Mandela Kuet, PDG de Mark1T, fondateur de Hoodfams et membre du comité directeur de la Stratégie canadienne en matière de justice pour les personnes noires (CJBS)",
              "Dre Felicia Masenu, directrice de programme, Bilal Community Center",
            ],
          },
        ],
      },
      {
        id: "d2-am-5",
        number: 5,
        title:
          "Femmes, filles noires, personnes et communautés de diverses identités de genre : sécurité, leadership et équité",
        room: "Pan Am",
        description:
          "Cette session explore les réalités vécues des femmes, filles noires, personnes et communautés de diverses identités de genre, en se concentrant sur les obstacles intersectionnels à la sécurité, au leadership et aux possibilités économiques. Elle met en lumière des moyens de renforcer l’équité, la protection et la représentation.",
        people: [
          {
            label: "moderator",
            names: [
              "Jennifer Matwawana, M.S.S., T.S.A., cofondatrice de All Women Lead",
            ],
          },
          {
            label: "panelists",
            names: [
              "Liza Arnason, fondatrice et présidente de la Ase Community Foundation for Black Canadians with Disabilities",
              "Alice Charles, gestionnaire des programmes communautaires, Rainbow Resource Centre",
              "Félicia Cà, ancienne participante de La jeunesse au pouvoir, coordonnatrice de la recherche et des projets chez Relais-femmes",
              "Bernadeth Betchi, chercheure décoloniale et intersectionnelle en santé mentale maternelle des personnes Noires et militante des droits de la personne",
            ],
          },
        ],
      },
      {
        id: "d2-am-6",
        number: 6,
        title:
          "Solutions de logement portées par les communautés noires : abordabilité, stabilité et appartenance",
        room: "2E",
        description:
          "Cette session explore des solutions de logement conçues et portées par les communautés noires qui privilégient l'accessibilité financière, l’entraide collectifs et la stabilité à long terme. Elle met en lumière des modèles tels que les coopératives et les approches enracinées dans les réalités culturelles et s’attaquent à l’insécurité résidentielle dans les communautés noires.",
        people: [
          {
            label: "moderator",
            names: [
              "Hafiz Jatto, directeur des programmes, SERC MB",
            ],
          },
          {
            label: "panelists",
            names: [
              "amanuel melles, stratège principal du secteur sans but lucratif, mentor et directeur général du Network for the Advancement of Black Communities",
              "Djaka Blais, directrice générale, Advancing Racial Equity & Housing Justice",
              "Dre Marlene Ruck, gestionnaire principale des opérations, 902 ManUp Campus",
              "Hanaa Ali, gestionnaire principale, Planification et recherche, Black Planning Project",
              "Jerome Morgan, gestionnaire, Centre for Advancing the Interests of Black People, Toronto Community Housing",
            ],
          },
        ],
      },
      {
        id: "d2-am-7",
        number: 7,
        title:
          "Racisme anti-Noirs dans l’Intelligence Artificielle et l’espace public numérique",
        room: "Suite Millennium",
        description:
          "Cette session examine comment les biais anti-Noirs se trouvent dans l'intelligence artificielle et les systèmes numériques. Elle explore l'impact des décisions algorithmiques sur l'accès, la visibilité et les debouchés, tout en abordant la reddition de compte, encadrement et la nécessité d'un avenir numérique plus équitable.",
        people: [
          {
            label: "moderator",
            names: [
              "Nonso Morah, défenseure de la jeunesse et coordonnatrice des médias numériques, CMTD; ancienne participante au programme jeunesse GenZAI",
            ],
          },
          {
            label: "panelists",
            names: [
              "Rachel Décoste, experte en éthique de l’intelligence artificielle et en gouvernance des données",
              "Dr Gideon Christian, Ph. D., professeur agrégé en intelligence artificielle et en droit et titulaire de la Chaire de recherche universitaire en intelligence artificielle et en droit, Faculté de droit, Université de Calgary",
              "Agapi Gessesse, directrice générale, Coalition of Innovation Leaders Advancing Respect (CILAR)",
              "Kerry-Ann Spencer-Williams, directrice, responsable de portefeuille en science des données, IGM Financial; directrice des partenariats, Black Manitoba Network",
              "Tony Muzira, cofondateur et directeur général, African Canadian Centre for Innovation, STEM and Artificial Intelligence (ACHIST)",
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
    subtitle: "Faire avancer la justice noire: stratégies d'action",
    location: "Hall C",
    description:
      "Cette séance porte sur les priorités politiques, la responsabilisation et le changement systémique à long terme. S'appuyant sur les initiatives de justice portées par les communautés, l'élaboration de stratégies nationales, les efforts de réforme provinciale et les modèles de justice ancrés dans des approches autochtones, cette discussion examinera comment les priorités de justice pour les Noirs peuvent passer de la revendication à la mise en œuvre concrète. Elle aidera à situer la justice noire dans un ensemble plus vaste de réformes en mettant en lumière des possibilités de collaboration, de responsabilisation et de développement de systèmes plus aptes à répondre au besoins.",
    people: [
      {
        label: "animatrice",
        names: [
          "Laurelle A. Harris, C.R., directrice du Programme pour les juristes formés à l’étranger, Équité et transformation, Faculté de droit, et responsable du curriculum en professionnalisme, plaidoirie et lutte contre le racisme, Max Rady College of Medicine",
        ],
      },
      {
        label: "keynote",
        names: [
          "Mohamed Hashim, président-directeur général, Fondation canadienne des relations raciales",
        ],
      },
      {
        label: "intervenants",
        names: [
          "Zilla Jones, avocate, membre du Groupe directeur externe et coauteure de A Roadmap for Transformative Change: Canada's Black Justice Strategy",
          "L’honorable Bernadette Clement, sénatrice de l’Ontario, avocate et facilitatrice adjointe du Groupe des sénateurs indépendants",
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
    title: "Séances simultanées de l’après-midi",
    sessions: [
      {
        id: "d2-pm-1",
        number: 1,
        title: "Racisme anti-Noirs et équité éducative à travers le Canada",
        room: "2E",
        description:
          "Cette session examine les obstacles systémiques au sein des systèmes éducatifs à travers le Canada, notamment les lacunes dans les programmes, la sous-représentation et l'accès inégal aux opportunités. Elle explore les tendances nationales d'exclusion et met en avant les réformes nécessaires pour soutenir la réussite des élèves noirs à tous les niveaux d'éducation.",
        people: [
          {
            label: "moderator",
            names: [
              "Iyanuoluwa Akinrinola, éducatrice, défenseure et écrivaine",
            ],
          },
          {
            label: "panelists",
            names: [
              "Sylvia Parris, leader, éducatrice et PDG du Delmore « Buddy » Daye Learning Institute",
              "Michelle Jean-Paul, leader en éducation et militante communautaire",
              "Xavier McLaughlin, gestionnaire des opérations et navigateur des systèmes d’éducation, Parents for Black Children",
            ],
          },
        ],
      },
      {
        id: "d2-pm-2",
        number: 2,
        title: "Au-delà du siège : Leadership, influence et pouvoir",
        room: "Théâtre de présentation",
        description:
          "Cette session explore comment le racisme environnemental touche de manière disproportionnée les communautés noires, y compris l'exposition à des environnements nuisibles et les disparités sanitaires qui en résultent. Elle présente la justice climatique comme une question de justice raciale et met en lumière les voies de plaidoyer, de réforme des politiques et de solutions portés par la communauté.",
        people: [
          {
            label: "panelists",
            names: [
              "David Simmonds, vice-président principal, Canada Vie",
              "Mark Harrison, fondateur du collectif MH3 et de l'Initiative des talents noirs",
              "Angela Cassie, directrice générale intérimaire et directrice des opérations, Travel Manitoba",
            ],
          },
        ],
      },
      {
        id: "d2-pm-3",
        number: 3,
        title:
          "Soins de santé mentale destinés aux communautés noires : de l'investissement et de l'action au changement systémique",
        room: "2H",
        description:
          "Axée sur la santé mentale, cette session explore les lacunes dans les soins culturellement adaptés, notamment l'accès aux professionnels noirs de la santé mentale, la stigmatisation et les obstacles systémiques. Elle met en lumière l'importance d'un investissement soutenu dans les services communautaires de santé mentale et examine des solutions de rechange aux interventions de crise traditionnelles qui placent les soins, la dignité et la sécurité communautaire au cœur de l'intervention.",
        people: [
          {
            label: "moderator",
            names: [
              "Dr Jude Mary Cénat, titulaire de la Chaire de recherche de l'Université d'Ottawa sur la santé des Noirs, directeur du Centre interdisciplinaire pour la santé des Noirs",
            ],
          },
          {
            label: "panelists",
            names: [
              "Amma Gyamfowa, directrice des programmes et services cliniques, Black Women's Institute for Health",
              "Suzanne Obiorah, directrice générale, Somerset West Community Health Centre",
              "Dre Monnica Williams, professeure et directrice clinique des cliniques de bien-être comportemental",
              "Nicole Kaniki, fondatrice et directrice de Senomi Solutions Inc., conseil en EDI",
              "Isaac Carter, DJ et producteur, fondateur de BlkEq",
            ],
          },
        ],
      },
      {
        id: "d2-pm-4",
        number: 4,
        title:
          "Faire évoluer les politiques et renforcer la reddition de comptes des gouvernements envers les communautés noires",
        room: "2F",
        description:
          "Cette session examine comment les communautés peuvent obliger les gouvernements à rendre compte de leurs engagements en matière d'équité et des cadres politiques. Elle explore des stratégies pour transformer les revendications en mesures concrètes en actions et inscrire changement systémique dans la durée.",
        people: [
          {
            label: "moderatrice",
            names: [
              "Alliance B Daniel, directeur, Relations gouvernementales (Canada), ONE Campaign",
            ],
          },
          {
            label: "panelists",
            names: [
              "amanuel melles, stratège principal du secteur associatif (ONG), mentor et directeur général",
              "Richard Sharpe, directeur, Direction de l'équité pour les noirs, Secrétariat du Conseil du Trésor",
              "Nicholas Marcus Thompson, président et directeur général du Secrétariat des actions collectives noires et défenseur des droits de la personne",
              "Lerato Chondoma, leader, conteuse et secrétaire du conseil d'administration du Réseau canadien de politique noire",
              "Kevin Junor, directeur général, KRJ Corporation et ancien sous-surintendant, ministère du Solliciteur général de l’Ontario",
            ],
          },
        ],
      },
      {
        id: "d2-pm-5",
        number: 5,
        title:
          "Lutte contre le racisme dans le sport : équité, représentation et reddition de comptes",
        room: "Pan Am",
        description:
          "Cette session examine comment le racisme anti-Noirs se manifeste au sein des milieux et des structures sportives, du sport communautaire au sport professionnel — à travers des inégalités d’accès aux possibilités, des stéréotypes raciaux, une sous-représentation dans les postes de direction et des obstacles systémiques enracinés au sein des institutions. Elle explorera comment le racisme touche les athlètes hors du terrain, y compris les expériences de discrimination, d'exploitation et d'exclusion.",
        people: [
          {
            label: "moderator",
            names: ["Ige Egal, fondateur et PDG de Play for Dignity"],
          },
          {
            label: "panelists",
            names: [
              "Shauna Bookal, bâtisseuse communautaire et militante pour l’inclusion dans le sport canadien",
              "Gode Katembo, dirigeant, spécialiste du développement du sport jeunesse et conférencier",
              "Moji Akande, gestionnaire de programme, campagne Anti Racism in Sports Winnipeg",
            ],
          },
        ],
      },
      {
        id: "d2-pm-6",
        number: 6,
        title:
          "Arts et culture au Canada : de la survie à l’épanouissement",
        room: "Millennium Suite",
        description:
          "Comment pouvons-nous travailler ensemble pour nous assurer que les artistes de demain font plus que s’en sortir et deviennent de véritables leaders dans leur art? Des décennies durant, les incroyables créateurs et créatrices de Winnipeg – des pionniers du jazz et du blues aux danseurs et acteurs qui sont aujourd’hui sous les projecteurs – ont fait entrer leur ville dans la culture canadienne. Bien que des lois visant à protéger la musique canadienne soient en place depuis 1971, nous savons que, pour bon nombre de créatrices et créateurs noirs, cet objectif a souvent semblé hors de portée. Dans cette optique, la question s’impose : la législation actuelle permet-elle vraiment à une danseuse de ballet ou à un dramaturge noirs de réaliser leur plein potentiel? Le temps est peut-être venu d’ouvrir une nouvelle voie, axée sur le financement, la reconnaissance et le soutien que méritent les créatrices et créateurs noirs, ici même au cœur de l’Amérique du Nord.",
        note: "Veuillez prendre note que cette activité se déroulera en anglais.",
        people: [
          {
            label: "moderator",
            names: [
              "Odario Williams, animateur d’_Afterdark_ à CBC, artiste hip-hop, acteur, DJ et raconteur",
            ],
          },
          {
            label: "panelists",
            names: [
              "Alex Sannie, gestionnaire, développement de l’industrie, Manitoba Music",
              "Tomiwa Omolayo (Tommyphyll), artiste, producteur, gestionnaire, programme Black Professionals in Music de Manitoba Music",
              "Joy Loewen, vice-présidente du développement de l’industrie, Fonds des médias du Canada",
              "Measha Brueggergosman-Lee, chanteuse classique, auteure, conférencière et productrice exécutive",
            ],
          },
        ],
      },
      {
        id: "d2-pm-7",
        number: 7,
        title:
          "Voies vers la réussite : soutien à l’emploi et à l’entrepreneuriat pour les jeunes noirs",
        room: "2G",
        description:
          "La Déclaration d’Halifax : Manifeste pour l'éradication de la discrimination raciale appelle à une action concertée pour lutter contre les inégalités structurelles touchant la jeunesse noire au Canada, notamment le taux de chômage élevé et les obstacles à un emploi de qualité et à des possibilités réelles d’entrepreneuriat. S'appuyant sur le rapport sur l'état de l'économie noire, cette table ronde examinera des voies concrètes vers l'emploi et le travail autonome grâce au développement des compétences, à l'expérience professionnelle, aux réseaux professionnels, à la formation à l'entrepreneuriat et à des programmes tels que l'ADaPT. La discussion s'inspirera également de l’étude à paraître du Diversity Institute sur les expériences des peuples autochtones en matière d'emploi, de discrimination au travail, de formation, d'intelligence artificielle et de progression professionnelle. Les panélistes examineront les similitudes et les différences entre les expériences d'emploi des jeunes noirs et autochtones et dégageront les enseignements à tirer des engagements pris en matière de vérité et de réconciliation pour construire des marchés du travail plus inclusifs et équitables.",
        people: [
          {
            label: "moderatrice",
            names: [
              "Tamara Thermitus, conseillère spéciale, Institut sur les droits de la personne et le pluralisme juridique",
            ],
          },
          {
            label: "panelists",
            names: [
              "Mohamad Elmi, directeur exécutif, Diversity Institute, Ted Rogers School of Management",
              "Laurene Williams, responsable de programme, Diversity Institute, Ted Rogers School of Management",
              "Nancy Mitchell, directrice des projets spéciaux de recherche, Diversity Institute, Ted Rogers School of Management",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "sponsors-reception",
    time: "17 h 00 – 19 h 00",
    title: "Réception des commanditaires et des partenaires",
    description:
      "**Uniquement sur invitation.** Cette réception réunira partenaires, commanditaires et personnes invitées afin de resserrer les liens, de souligner les collaborations et de poursuivre les échanges dans une ambiance conviviale.",
  },
];
