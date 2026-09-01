import type { ScheduleBlock } from "./schedule-types";

export const DAY2_SCHEDULE: ScheduleBlock[] = [
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
    title: "Opening Plenary",
    subtitle: "Canada and the Second International Decade for People of African Descent",
    location: "Hall C",
    description:
      "The Second International Decade for People of African Descent provides a renewed opportunity to connect Canada's international commitments with meaningful action at home. Drawing on Canada's engagement with the United Nations Permanent Forum on People of African Descent, this session will explore how international priorities can inform anti-racism policy, public memory, institutional accountability and sustained partnership with Black communities and young people.",
    people: [
      {
        label: "keynote",
        names: [
          "Andrew Brown, Associate Deputy Minister, Canadian Heritage",
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
    title: "Morning Breakout Sessions",
    note: "Lunch starting at 12:30 p.m.",
    sessions: [
      {
        id: "d2-am-1",
        number: 1,
        title:
          "Anti-Black Racism in Healthcare: Structural Racism and Health Inequities",
        room: "2H",
        description:
          "This session examines how anti-Black racism operates across healthcare systems, including disparities in treatment, barriers to access, and systemic inequities that shape health outcomes. It explores the importance of culturally responsive care, representation in the medical field, and the role of data and accountability in advancing equitable health systems.",
        people: [
          {
            label: "moderator",
            names: [
              "Dr. Idrissa Beogo, Associate Professor, School of Nursing & Associate Director, Interdisciplinary Centre for Black Health, University of Ottawa",
            ],
          },
          {
            label: "panelists",
            names: [
              "Dr. Jude Mary Cénat, Full Professor, School of Psychology & University Research Chair on Black Health, University of Ottawa",
              "Dr. Monnica Williams, Professor and Canada Research Chair in Mental Health Innovation and Equity, University of Ottawa",
              "Dr. Josephine Etowa, Full Professor (Tier 1), Canada Research Chair in Black Women's Health, Scientific Lead of the Interdisciplinary Centre for Black Health, University of Ottawa — Founder and Director, CO-CREATH Lab",
              "Ashley Carruthers, Nurse Practitioner, University of Manitoba and Nurse Practitioner Association of Manitoba (NPAM)",
            ],
          },
        ],
      },
      {
        id: "d2-am-2",
        number: 2,
        title:
          "Narrative Sovereignty: Black Cultural Infrastructure and the Power of Story",
        room: "2F",
        description:
          "This session explores how storytelling, art, and cultural production serve as tools for preservation, resistance, and identity. It examines the importance of building sustainable cultural infrastructure and ensuring that Black narratives remain visible, self-determined, and enduring.",
        people: [
          {
            label: "moderator",
            names: [
              "Dr. Tasha Spillett, Author, Educator and Researcher",
            ],
          },
          {
            label: "panelists",
            names: [
              "Alia Aluma, Curator, Canadian Museum for Human Rights, and Filmmaker",
              "Judy Williams, Chair/Program Manager, The Black Canadian Experience Centre (BCEC)",
              "Allen Alexandre, CEO, Montreal Afro-Canadian Cultural Centre (CCAM)",
              "Russell Grosse, CEO, Black Cultural Centre",
            ],
          },
        ],
      },
      {
        id: "d2-am-3",
        number: 3,
        title:
          "Modernizing Employment Equity with the African-Canadian Senate Group",
        room: "Presentation Theatre",
        description:
          "This Senate-led panel discussion will bring together Senators from the African-Canadian Senate Group to examine the urgent need to modernize Canada's Employment Equity Act. The session will explore how current legislation can better reflect the realities and experiences of Black Canadians, Indigenous Peoples, persons with disabilities, women, and other equity-deserving communities. Panelists will discuss the importance of updating outdated language, addressing the limitations of the “visible minorities” category, and applying an intersectional lens that includes the experiences of 2SLGBTQIA+ communities. The session will highlight the need for concrete legislative action following the Government of Canada's 2023 Employment Equity Act review and call for meaningful progress toward equity in the workplace.",
        people: [
          {
            label: "moderator",
            names: [
              "The Honourable Tony Ince, Senator for Nova Scotia, Former Member of the Nova Scotia Legislative Assembly, Former Minister of African Nova Scotian Affairs and Co-Founder of the Canadian Congress of Black Parliamentarians",
            ],
          },
          {
            label: "panelists",
            names: [
              "The Honourable Paulette Senior, Senator for Ontario and Former President and CEO of the Canadian Women's Foundation",
              "The Honourable Bernadette Clement, Senator for Ontario, Member of the Independent Senators Group, Former Mayor of Cornwall and First Black Woman to Serve as a Mayor in Ontario",
              "The Honourable Amina Gerba, Senator for Quebec (Rigaud), Entrepreneur and Co-Chair of the Canada-Africa Parliamentary Association",
              "The Honourable Suze Youance, Senator for Quebec (Lauzon), Civil Engineer, Educator and Researcher",
            ],
          },
        ],
      },
      {
        id: "d2-am-4",
        number: 4,
        title:
          "Justice Reform, Legal Accountability, and Community Safety Beyond Policing",
        room: "2G",
        description:
          "This session examines alternatives to traditional policing and explores how legal accountability and community-led safety models can reduce harm. It highlights approaches that center prevention, care, and dignity, while integrating both Black and Indigenous perspectives on justice and systemic reform.",
        people: [
          {
            label: "moderator",
            names: [
              "Harley Gervais, Founder and Principal of The G-Eight and Former Justice of the Peace",
            ],
          },
          {
            label: "panelists",
            names: [
              "El Jones, Poet, Journalist, and Professor at Mount Saint Vincent University",
              "Superintendent Darryl Dawkins, Director, RCMP Anti-Racism, Equity, Diversity and Inclusion Secretariat, and Founder, DICE Program",
              "Jean-René Dominique Kwilu, Lawyer and President of CABL (MB)",
              "Mandela Kuet, CEO, Mark1T, Founder of Hoodfams, and Member of the Steering Committee, Canada Black Justice Strategy (CBJS)",
              "Dr. Felicia Masenu, Program Director, Bilal Community Centre",
            ],
          },
        ],
      },
      {
        id: "d2-am-5",
        number: 5,
        title:
          "Black Women, Girls, and Gender-Diverse Communities: Safety, Leadership, and Equity",
        room: "Pan Am",
        description:
          "This session explores the lived realities of Black women, girls, and gender-diverse communities, focusing on intersectional barriers to safety, leadership, and economic opportunity. It highlights pathways toward greater equity, protection, and representation.",
        people: [
          {
            label: "moderator",
            names: [
              "Jennifer Matwawana, MSW, RSW, Co-founder of All Women Lead",
            ],
          },
          {
            label: "panelists",
            names: [
              "Liza Arnason, Founder and Chair of the Ase Community Foundation for Black Canadians with Disabilities",
              "Alice Charles, Program Manager, Community Programs, Rainbow Resource Centre",
              "Felicia Ca, Power of Youth Alumni, Research and Project Coordinator at Relais-femmes",
              "Bernadeth Betchi, PhD Candidate at the University of Ottawa, Decolonial and Intersectional Researcher in Black Maternal Mental Health and Human Rights Advocate",
            ],
          },
        ],
      },
      {
        id: "d2-am-6",
        number: 6,
        title:
          "Black-Led Housing Solutions: Affordability, Stability, and Belonging",
        room: "2E",
        description:
          "This session explores community-driven housing solutions that prioritize affordability, collective care, and long-term stability. It highlights models such as co-operatives and culturally grounded approaches that strengthen belonging and address housing insecurity in Black communities.",
        people: [
          {
            label: "moderator",
            names: [
              "Hafiz Jatto, Director of Programs, SERC MB",
            ],
          },
          {
            label: "panelists",
            names: [
              "amanuel melles, Senior Nonprofit Sector Strategist, Mentor and Executive Director, Network for the Advancement of Black Communities",
              "Djaka Blais, Executive Director, Advancing Racial Equity & Housing Justice",
              "Dr. Marlene Ruck, Executive Operations Manager, 902 ManUp Campus",
              "Hanaa Ali, Senior Manager, Planning and Research, Black Planning Project",
            ],
          },
        ],
      },
      {
        id: "d2-am-7",
        number: 7,
        title: "Anti-Blackness in AI and the Digital Public Sphere",
        room: "Millennium Suite",
        description:
          "This session examines how anti-Black bias is embedded in artificial intelligence and digital systems. It explores the impact of algorithmic decision-making on access, visibility, and opportunity, while discussing accountability, regulation, and the need for more equitable digital futures.",
        people: [
          {
            label: "moderator",
            names: [
              "Nonso Morah, Youth Advocate & Digital Media Coordinator, CMTD; Former GenZAI Youth Fellow",
            ],
          },
          {
            label: "panelists",
            names: [
              "Rachel Décoste, AI Ethics and Data Governance Expert",
              "Dr. Gideon Christian, PhD, Associate Professor of AI and Law and University Research Chair in AI and Law, Faculty of Law, University of Calgary",
              "Agapi Gessesse, CEO, Coalition of Innovation Leaders Advancing Respect (CILAR)",
              "Kerry-Ann Spencer-Williams, Director, Pod Owner Data Science, IGM Financial; Partnerships Director, Black Manitoba Network",
              "Tony Muzira, Co-Founder & Executive Director, African Canadian Centre for Innovation, STEM and Artificial Intelligence (ACHIST)",
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
    subtitle: "Black Justice Strategies",
    location: "Hall C",
    description:
      "This session examines how Black justice priorities can move from advocacy to implementation through stronger policy, accountability and systemic reform, drawing on community-led action, national and provincial strategies, and justice models rooted in Indigenous approaches. It will help situate Black justice within a broader ecosystem of reform by highlighting opportunities for collaboration, accountability, and the development of more responsive and transformative systems.",
    people: [
      {
        label: "host",
        names: [
          "Laurelle A. Harris, K.C., Director, Internationally Trained Lawyer Program, Equity & Transformation, Faculty of Law, and Curriculum Lead for Professionalism, Advocacy & Anti-Racism, Max Rady College of Medicine",
        ],
      },
      {
        label: "keynote",
        names: [
          "Mohamed Hashim, Chief Executive Officer, Canadian Race Relations Foundation",
        ],
      },
      {
        label: "speakers",
        names: [
          "Zilla Jones, Lawyer, Member of the External Steering Group, and Co-Author of A Roadmap for Transformative Change: Canada's Black Justice Strategy",
          "The Honourable Bernadette Clement, Senator for Ontario, Lawyer and Deputy Facilitator of the Independent Senators Group",
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
        id: "d2-pm-1",
        number: 1,
        title: "Anti-Black Racism and Educational Equity Across Canada",
        room: "2E",
        description:
          "This session examines systemic barriers within education systems across Canada, including curriculum gaps, underrepresentation, and inequitable access to opportunities. It explores national patterns of exclusion and highlights reforms needed to support Black student success across all levels of education.",
        people: [
          {
            label: "moderator",
            names: [
              "Iyanuoluwa Akinrinola, Researcher and Policy Analyst, Canadian Teacher's Federation (CTF/CTE); Unionist, Policy Advocate, K-12 Educator and PhD Student, Interdisciplinary Social Research Program, Trent University",
            ],
          },
          {
            label: "panelists",
            names: [
              'Sylvia Parris, Leader, Educator and CEO, Delmore "Buddy" Daye Learning Institute; President, SVPARRIS CONSULTING',
              "Michelle Jean-Paul, Educational Leader and Community Advocate",
              "Xavier McLaughlin, Operations Manager and Education Systems Navigator, Parents for Black Children",
            ],
          },
        ],
      },
      {
        id: "d2-pm-2",
        number: 2,
        title: "Beyond the Seat: Leadership, Influence and Power",
        room: "Presentation Theatre",
        description:
          "This session explores how environmental racism disproportionately impacts Black communities, including exposure to harmful environments and resulting health disparities. It frames climate justice as a racial justice issue and highlights pathways for advocacy, policy reform, and community-led solutions.",
        people: [
          {
            label: "panelists",
            names: [
              "David Simmonds, Senior Vice-President, Chief Marketing, Communications, and Sustainability Officer, Canada Life",
              "Mark Harrison, Founder of MH3 Collective and the Black Talent Initiative",
              "Angela Cassie, Interim CEO and Chief Operating Officer, Travel Manitoba",
            ],
          },
        ],
      },
      {
        id: "d2-pm-3",
        number: 3,
        title:
          "Black Mental Health Care: From Investment and Action to Systemic Change",
        room: "2H",
        description:
          "Focusing on mental health, this session explores the gaps in culturally responsive care, including access to Black practitioners, stigma, and systemic barriers. It highlights the importance of sustained investment in community-based mental health systems and examines alternatives to crisis response that center care, dignity, and community safety.",
        people: [
          {
            label: "moderator",
            names: [
              "Dr. Jude Mary Cénat, Full Professor, School of Psychology & University Research Chair on Black Health, University of Ottawa",
            ],
          },
          {
            label: "panelists",
            names: [
              "Amma Gyamfowa, Director of Clinical Programs and Services, The Black Women's Institute for Health",
              "Suzanne Obiorah, Chief Executive Officer, Somerset West Community Health Centre",
              "Dr. Monnica Williams, Professor and Canada Research Chair in Mental Health Innovation and Equity, University of Ottawa",
              "Nicole Kaniki, Founder and Director, Senomi Solutions Inc., EDI Consulting",
              "Issac Carter, DJ and Producer, Founder of BlkEq",
            ],
          },
        ],
      },
      {
        id: "d2-pm-4",
        number: 4,
        title:
          "Policy Change and Government Accountability for Black Communities",
        room: "2F",
        description:
          "This session examines how communities can hold governments accountable to equity commitments and policy frameworks. It explores strategies for translating advocacy into action and sustaining long-term systemic change.",
        people: [
          {
            label: "moderator",
            names: [
              "Alliance B. Daniel, Manager, Government Relations (Canada), ONE Campaign",
            ],
          },
          {
            label: "panelists",
            names: [
              "amanuel melles, Senior Nonprofit Sector Strategist, Mentor and Executive Director",
              "Richard Sharpe, Director, Black Equity Branch, Treasury Board Secretariat",
              "Nicholas Marcus Thompson, President and CEO of Black Class Action Secretariat and Human Rights Advocate",
              "Lerato Chondoma, Leader, Storyteller, and Board Secretary of the Canadian Black Policy Network",
              "Kevin Junor, Executive Director, KRJ Corporation, and Former Deputy Superintendent, Ontario Ministry of the Solicitor General",
            ],
          },
        ],
      },
      {
        id: "d2-pm-5",
        number: 5,
        title: "Anti-racism in sport: Equity, Representation and Accountability",
        room: "Pan Am Room",
        description:
          "This session examines how anti-Black racism manifests within sports systems, from grassroots to professional levels — through unequal access to opportunities, racial stereotyping, underrepresentation in leadership, and systemic barriers embedded in institutions. It will explore how racism impacts athletes both on and off the field, including experiences of discrimination, exploitation, and exclusion.",
        people: [
          {
            label: "moderator",
            names: ["Ige Egal, Founder and CEO of Play for Dignity"],
          },
          {
            label: "panelists",
            names: [
              "Shauna Bookal, President and CEO, Inclusion in Canadian Sports Network (ICSN)",
              "Gode Katembo, Founder and Executive Director, Canada African Cup of Nations/Sports Without Boundaries, and Head Coach, CMU Men's Soccer",
              "Oluwagbotemi Dada, Community Leader, Lawyer, and Sport-for-Social-Impact Advocate, and Director of Fund Development at Sports Without Boundaries",
              "Moji Akande, Program Manager, Anti-Racism in Sport Canada",
            ],
          },
        ],
      },
      {
        id: "d2-pm-6",
        number: 6,
        title:
          "The Arts & Culture Scene in Canada: Shifting from Surviving to Thriving",
        room: "Millennium Suite",
        description:
          "How can we work together to ensure the next generation of artists doesn't just get by, but truly leads and owns their craft? For decades, Winnipeg's incredible creators—from jazz and blues pioneers to today's inspiring dancers and actors—have built this city into a heart of Canadian culture. While regulations since 1971 have aimed to protect Canadian music, we know that for many Black creators, these goals haven't always felt within reach. It's important to ask: do current mandates really support a Black playwright or ballerina in reaching their full potential? Maybe it's time to create a new path—one that focuses on providing the funding, recognition, and support Black creators deserve, right here in the heart of the continent.",
        note: "Please note this panel will be in English.",
        people: [
          {
            label: "moderator",
            names: [
              "Odario Williams, Host of CBC's _Afterdark_, Hip-Hop Artist, Actor, DJ, and Storyteller",
            ],
          },
          {
            label: "panelists",
            names: [
              "Alex Sannie, Manager, Industry Development, and Manager, Black Professionals in Music Program at Manitoba Music",
              "Tomiwa Omolayo (Tommyphyll), Artist, Producer, and Coordinator, Black Professionals in Music Program at Manitoba Music",
              "Joy Loewen, Vice-President of Industry Development at Canada Media Fund",
              "Measha Brueggergosman-Lee, Classical Singer, Author, Speaker, and Executive Producer",
            ],
          },
        ],
      },
      {
        id: "d2-pm-7",
        number: 7,
        title:
          "Pathways to Success: Employment and Entrepreneurship supports for Black Youth",
        room: "2G",
        description:
          "The Halifax Declaration: Manifesto for the Eradication of Racial Discrimination calls for coordinated action to address structural inequities affecting Black youth in Canada, including high unemployment and barriers to meaningful work and entrepreneurship. Drawing on the State of Black Economics Report, this panel will explore practical pathways to employment and self-employment through skills development, work experience, professional networks, entrepreneurship training, and programs such as ADaPT. The discussion will also draw on DI's forthcoming study on Indigenous Peoples' experiences with employment, workplace discrimination, training, artificial intelligence, and career advancement. Panelists will examine similarities and differences between Black and Indigenous youth employment experiences and identify lessons from Truth and Reconciliation commitments for building more inclusive and equitable labour market systems.",
        people: [
          {
            label: "moderator",
            names: [
              "Tamara Thermitus, Ad.E, Special Advisor, Diversity Institute, and Boulton Senior Fellow of McGill University's Faculty of Law (2023–2025)",
            ],
          },
          {
            label: "panelists",
            names: [
              "Mohamed Elmi, Executive Director, Diversity Institute, Ted Rogers School of Management",
              "Laurene Williams, Program Manager, Diversity Institute, Ted Rogers School of Management",
              "Nancy Mitchell, Director of Research Special Projects, Diversity Institute, Ted Rogers School of Management",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "sponsors-reception",
    time: "5:00 p.m. – 7:00 p.m.",
    title: "Sponsors & Partners Reception",
    description:
      "**By invitation only.** An evening reception bringing together partners, sponsors and speakers to strengthen relationships, celebrate collaboration, and continue conversations in an informal setting.",
  },
];
