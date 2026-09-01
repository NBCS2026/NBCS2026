export type {
  ScheduleBlock,
  SchedulePersonGroup,
  ScheduleSession,
} from "./schedule-types";
import type { ScheduleBlock } from "./schedule-types";

export const DAY1_SCHEDULE: ScheduleBlock[] = [
  {
    id: "registration",
    time: "Opens at 8:00 a.m.",
    title: "Registration and Marketplace",
    location: "Hall D",
    description:
      "Check in for the Summit and explore the marketplace as the day begins.",
  },
  {
    id: "opening-plenary",
    time: "10:00 a.m. – 10:30 a.m.",
    title: "Power of Youth Day — Opening Plenary",
    description:
      "Reflecting the creativity, diversity, and enthusiasm of the new generation, the 2026 Youth Day Kick-Off features captivating live performances by talented individuals you need to experience.",
    people: [
      {
        label: "host",
        names: [
          "Justin Holness, Artist and Humanitarian; Elected Councillor, Ocean Man First Nation",
        ],
      },
      {
        label: "remarks",
        names: [
          "Candies Kotchapaw, Founder, Organization for Economic Development and Diplomacy (OEDD)",
        ],
      },
    ],
  },
  {
    id: "break-morning",
    time: "10:30 a.m. – 11:00 a.m.",
    title: "Break",
    compact: true,
  },
  {
    id: "morning-sessions",
    time: "11:00 a.m. – 12:30 p.m.",
    title: "Morning Sessions — Power of Youth Community Projects",
    note: "Lunch served at 12:30 p.m.",
    description:
      "The Power of Youth initiative has become one of the flagship programs of the Michaëlle Jean Foundation. It emerged from the calls to action voiced by young people during the 3rd National Black Canadians Summit, held in Halifax in 2022. Rooted in the Halifax Declaration, the initiative was first brought to life through 35 youth-led projects, demonstrating that the Declaration is not only a vision, but a living and actionable framework for advancing racial equity. The Halifax Declaration calls for a national mobilization against racial discrimination and builds on the momentum of previous National Black Canadians Summits organized by the Michaëlle Jean Foundation during the first International Decade for People of African Descent (2015–2024). Today, the initiative has supported a second cohort of 25 youth-led projects from across the country. We invite you to come and discover the sessions they have co-constructed together, creating a space to share their work, reflect on their experiences, and engage in dialogue on the issues shaping their communities and futures.",
    sessions: [
      {
        id: "session-1",
        number: 1,
        title: "Leadership and Governance",
        room: "2E",
        description:
          "This session explores how Black youth are shaping change within their communities through leadership, advocacy, and governance. It opens conversations on civic engagement, representation, community accountability, and the many ways leadership is being redefined on their own terms.",
        people: [
          {
            label: "panelists",
            names: [
              "STEMBOUD — Demilade Akinleye-Abraham and Kamsiyochi Onyekere",
              "LEAD-HER-SHIP — Mabel Adesopo and Asha Jama",
              "Viola Desmond Justice Institute — Heraldo Junior Jacques and Kadene Massop",
            ],
          },
        ],
      },
      {
        id: "session-2",
        number: 2,
        title: "Innovation, Technology and Future Skills",
        room: "2F",
        description:
          "Focusing on technology, creativity, and future-oriented skills, this session examines how Black youth are engaging innovation as a tool for empowerment and community growth. It will open discussions on access, opportunity, digital equity, and the role of emerging knowledge in shaping the future.",
        people: [
          {
            label: "facilitator",
            names: [
              "Franck-Maleek Djamat-Dubois, Founder, Kids Connect Africa and FM Media",
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
        title: "Economic Development and Entrepreneurship",
        room: "2G",
        description:
          "This session looks at entrepreneurship and economic empowerment as pathways toward sustainability and self-determination. Conversations will centre on business creation, financial independence, community wealth-building, and the opportunities and barriers facing Black youth in Canada's economic landscape.",
        people: [
          {
            label: "facilitator",
            names: [
              "Drayton Mulindabigwi, Founder, The Novas Group",
            ],
          },
          {
            label: "panelists",
            names: [
              "For the culture — Souleman Baba Eya, Hidaya Tchassanti",
              "Uvusa Abalele — D-yana Andrel Bommier",
              "Maker festival — Kelvin Doe, Kiara Denee",
            ],
          },
        ],
      },
      {
        id: "session-4",
        number: 4,
        title: "Health and Empowerment",
        room: "2H",
        description:
          "Centred on wellbeing and empowerment, this session creates space for conversations on mental, physical, and community health. It will examine personal wellness, access to care, systemic barriers, and the ways youth are imagining healthier and more supportive futures for their communities.",
        people: [
          {
            label: "facilitator",
            names: [
              "Shekara Grant, Executive Leader and Founder, Weymouth Falls",
            ],
          },
          {
            label: "panelists",
            names: [
              "Expressions — Gabriela Sealy, Angel Persaud",
              "Better place — Francoise Rania Ivala, Aminata Diallo",
              "Black Aspiring Medical Professionals — Warona Folasayo Alawiye, Babatamilore Ashofor",
            ],
          },
        ],
      },
      {
        id: "session-5",
        number: 5,
        title: "Culture, Art and Narrative Memory",
        room: "Pan Am",
        description:
          "This session explores the power of culture, art, and storytelling in shaping identity, preserving memory, and strengthening belonging. It opens discussions on creative expression as a force for resistance, cultural affirmation, and the reimagining of Black youth narratives.",
        people: [
          {
            label: "facilitator",
            names: [
              "Andre Anderson, Filmmaker and 7th Grandson of the Founder of Africville, Nova Scotia",
            ],
          },
          {
            label: "panelists",
            names: [
              "Our crib uncut — Alliston Zachary Esmond Davis, Cheyenne Duff",
              "Voice Up — Abubaker Bukulu",
              "Picnic at the park — Oluchi Adesuwa, Jeremiah Brookes",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "plenary-afternoon",
    time: "1:00 p.m. – 2:00 p.m.",
    title: "Plenary Session",
    subtitle:
      "Black and Indigenous Intergenerational Dialogue: Coming Together for the Healing of the World",
    location: "Hall C",
    description:
      "This dialogue asks what becomes possible when Black and Indigenous peoples meet across generations with the courage to tell the truth and the responsibility to act upon it. Grounded in Winnipeg, on Treaty One Territory, it will honour distinct histories, lived realities, and cultural teachings while exploring the responsibilities that arise when peoples come together. The conversation will consider how memory can guide action, how relationships can be built with honesty and care, and how solidarity can become a shared commitment to justice, healing, and a future in which all our communities can flourish.",
    people: [
      {
        label: "host",
        names: ["Oyíndàmọ́lá Aláká, Director of Programs, Career Trek"],
      },
      {
        label: "panelists",
        names: [
          "The Right Honourable Michaëlle Jean, 27th Governor General and Commander-in-Chief of Canada",
          "Lisa Meeches, C.M., O.M., Executive Director, Manito Ahbee Festival",
          "Justin Holness, Artist and Humanitarian; Elected Councillor, Ocean Man First Nation",
          "Dr. Tasha Spillett, Award-winning Author, Educator and Indigenous Scholar",
        ],
      },
    ],
  },
  {
    id: "break-afternoon",
    time: "2:00 p.m. – 2:30 p.m.",
    title: "Break",
    compact: true,
  },
  {
    id: "afternoon-sessions",
    time: "2:30 p.m. – 4:00 p.m.",
    title: "Afternoon Breakout Sessions",
    sessions: [
      {
        id: "session-6",
        number: 6,
        title: "Build yourself, Build your future",
        room: "Pan Am",
        description:
          "This session explores the power of networks as a key driver of opportunity, growth, and access. It invites participants to rethink networking beyond transactions, focusing instead on authenticity, relationship-building, and navigating professional spaces with confidence. Through shared experiences and practical insights, the conversation will highlight how meaningful connections can support long-term personal and professional development.",
      },
      {
        id: "session-7",
        number: 7,
        title: "Art as an Act of Resistance",
        room: "Millennium Suite",
        description:
          "This session examines the role of art as a powerful tool for expression, resistance, and social change. It will explore how creative practices intersect with advocacy and civic engagement, and how artists use their work to challenge narratives, amplify voices, and shape collective consciousness. The conversation also creates space to reflect on the connections between Black and Indigenous artistic traditions and their shared histories of resilience.",
        people: [
          {
            label: "facilitator",
            names: [
              "Genie Baffoe, Hip Hop Performer, Community Organizer, Educator",
            ],
          },
        ],
      },
      {
        id: "session-8",
        number: 8,
        title: "Fighting Racism: From Awareness to Action",
        room: "2E",
        description:
          "This session moves beyond dialogue to focus on action. It will explore how individuals and communities can respond to racism in tangible and effective ways across different spaces, including schools, institutions, and everyday life. Participants will engage with strategies that transform awareness into impact, fostering conversations around accountability, allyship, and sustained mobilization.",
        people: [
          {
            label: "moderator",
            names: [
              "Dan Ngenzi Ya Ruty, Franco Commissioner at UOSU, Co-President at RWSA",
            ],
          },
          {
            label: "panelists",
            names: [
              "Isak Vaillaincourt, Filmmaker, multidisciplinary Artist and Co-founder and Director of BLM Sudbury",
              "Nita Omokhose Badaiki, Activist, Trained & Experienced Anti-Oppression Facilitator",
            ],
          },
        ],
      },
      {
        id: "session-9",
        number: 9,
        title: "Heal to Lead: Mental Health and Black Youth",
        room: "2F",
        description:
          "This session centers mental health as a foundation for leadership, resilience, and community wellbeing. It will open conversations on anxiety, burnout, depression, and imposter syndrome, while addressing the unique realities faced by Black youth. Emphasizing the importance of care and healing, the session highlights that sustainable change begins with individual and collective wellbeing.",
        people: [
          {
            label: "facilitators",
            names: [
              "Tracy Karuhogo, Founder of Black Girl Talk Collective and Prairies Regional Advisor at the Office of the Minister of Crown-Indigenous Relations",
              "Dr. Warren Clarke, Founder of Barbershop Talk, Founder & Director of the Afro-Caribbean Mentorship Program",
            ],
          },
        ],
      },
      {
        id: "session-10",
        number: 10,
        title: "Building Wealth Starting Today",
        room: "2G",
        description:
          "This session focuses on financial empowerment as a pathway toward independence and long-term stability. It will explore the fundamentals of financial literacy, including managing money, saving, investing, and building wealth within the Canadian context. The conversation will also address systemic barriers and highlight practical ways for young people to take control of their financial futures.",
        people: [
          {
            label: "facilitator",
            names: [
              "Andre Smith, Founder & CEO of Flip & Floss and Founder of Flip Academy",
            ],
          },
        ],
      },
      {
        id: "session-11",
        number: 11,
        title: "Our Voices Across Time",
        room: "2H",
        description:
          "Every generation inherits stories—and the responsibility to pass them on. Our Voices Across Time brings together leaders and storytellers to explore how memory, history, and lived experience strengthen Black identity, foster belonging, and shape the future. Through conversation, participants will examine the power of storytelling to preserve culture, bridge generations, and build understanding, while recognizing shared values between Black and Indigenous communities around remembrance, connection to place, and collective resilience.",
        people: [
          {
            label: "moderator",
            names: [
              "Andre Anderson, Filmmaker and 7th Grandson of the Founder of Africville, Nova Scotia",
            ],
          },
          {
            label: "panelists",
            names: [
              "Aaliyah Hotomani-Hart, Assistant Volleyball Coach and Advocate for Black and Indigenous Representation in Sport",
              "Jaelyn Jarrett, Researcher and Advocate for Black and Inuit History",
            ],
          },
        ],
      },
      {
        id: "session-12",
        number: 12,
        title: 'Your Roadmap to CBC: "How to Pitch" by CBC',
        room: "Presentation Theatre",
        description:
          '"How to Pitch" is designed to help creators, artists, and community builders who are ready to share their unique stories. Join this panel for practical, hands-on advice on crafting your story ideas, standing out in a crowded media landscape, and connecting your story with producers and the audiences who are waiting to hear it.',
        people: [
          {
            label: "moderator",
            names: [
              "Odario Williams, host of CBC's _Afterdark_, hip-hop artist, actor, DJ, and storyteller",
            ],
          },
          {
            label: "panelists",
            names: [
              "Barbara Mamabolo, Executive in Charge of Current Production, Drama, Scripted Content, CBC (_Heartland and Wild Cards_)",
              "Toni Francis, Senior Producer, _Dragons' Den_",
              "Robin Summerfield, Senior Producer, CBC Manitoba's Creator Network and _Absolutely Canadian_",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "networking",
    time: "6:00 p.m. – 7:00 p.m.",
    title: "Delegate Networking Hour",
    description:
      "Connect with fellow delegates before the Opening Ceremony.",
  },
  {
    id: "opening-ceremony",
    time: "Starting at 7:00 p.m.",
    title: "Opening Ceremony",
    description: "Opening Ceremony Program",
    segments: [
      {
        title: "Opening Ceremony Video",
        body: "Filmed by Joye Social House and Produced by 9:16 Stories",
      },
      {
        title: "Host",
        items: [
          "Odario Williams, host of CBC's _Afterdark_, hip-hop artist, actor, DJ, and storyteller",
        ],
      },
      {
        title: "Co-Host",
        items: [
          "Patricia Bitu Tshikudi, Executive Director, Centre Culturel Franco-Manitobain (CCFM)",
        ],
      },
      {
        title: "Welcome, Land Acknowledgement, Grand Entry and Opening Prayers",
      },
      {
        title: "Remarks",
        items: [
          "Dr. Niigaanwewidam Sinclair, Anishinaabe Writer, Professor of Indigenous Studies, and Governor General's Award-Winning Author",
        ],
      },
      {
        title: "Performances",
        items: [
          "National Anthem",
          "Black National Anthem: Ayosingz, Nigerian-Canadian Gospel Singer, Songwriter, Producer and Black Professionals in Music Artist at Manitoba Music",
        ],
      },
      {
        title: "Welcome to Winnipeg, Manitoba",
        items: [
          "The Honourable Anita Neville, P.C., O.M., Lieutenant Governor of Manitoba",
          "The Honourable Wab Kinew, Premier of Manitoba",
          "His Worship Scott Gillingham, Mayor of Winnipeg",
        ],
      },
      {
        title: "Poetry and Dance Performance",
        items: [
          "Chimwemwe Undi, Canada's Parliamentary Poet Laureate and Former Poet Laureate of Winnipeg; Poet, Writer and Editor",
          "Elsie Rweyemamu, Dancer and Senior-Level Student, Royal Winnipeg Ballet School — Choreography by Nicole Kepp, Principal, Recreational Division, Canada's Royal Winnipeg Ballet School",
          "Kamil Jones Strachan, Award-winning Classical Pianist",
        ],
      },
      {
        title: "Keynote remarks",
        items: [
          "TD Bank Group, Presenting Sponsor of the National Black Canadians Summit",
          "Gary Clement, Director, Government Relations, TD Bank Group",
          "The Right Honourable Michaëlle Jean, 27th Governor General and Commander-in-Chief of Canada",
        ],
      },
      {
        title: "Featured Performance",
        items: [
          "Introduction: Natalie Thiesen, Vice-President, Tourism, Tourism Winnipeg",
          "Jully Black, Award-winning singer, songwriter, actor and advocate",
        ],
      },
      {
        title: "Closing Music",
        items: ["Dr. Henry Band"],
      },
    ],
  },
];
