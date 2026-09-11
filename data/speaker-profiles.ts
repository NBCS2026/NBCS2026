import { SPEAKER_PROFILE_SUPPLEMENTS } from "./speaker-profile-supplements";

export type SpeakerProfile = {
  name: string;
  nameFr?: string;
  displayLineEn?: string;
  bioEn?: string;
  bioFr?: string;
  imageUrl?: string;
  imagePosition?: "center" | "slight-down" | "significant-down";
  imageScale?:
    | "slight"
    | "medium"
    | "large"
    | "extra-large"
    | "huge"
    | "top-large";
  imageOffsetY?: "slight-down";
  imageFramingFr?: { scale: number; offsetY?: number };
};

const rawProfiles: SpeakerProfile[] = [
  {
    name: "Aaliyah Hotomani-Hart",
    displayLineEn:
      "Aaliyah Hotomani-Hart, Assistant Volleyball Coach and Advocate for Black and Indigenous Representation in Sport",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1taaQAvod_KcJz_IdEgUJYMf5LqMz3K-e&sz=w600",
  },
  {
    name: "Abubaker Bukulu",
    displayLineEn: "Voice Up - Abubaker Bukulu",
    imageUrl:
      "https://drive.google.com/thumbnail?id=10VVEFewfzsLeLEEZVzwuZEJTY3k4fQga&sz=w600",
  },
  {
    name: "Alice Charles",
    displayLineEn:
      "Alice Charles, Program Manager, Community Programs, Rainbow Resource Centre",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1kepoXA5CAzxdygLQQi82KlRLx7byi4jQ&sz=w600",
  },
  {
    name: "Allen Alexandre",
    displayLineEn:
      "Allen Alexandre, CEO, Montreal Afro-Canadian Cultural Centre (CCAM)",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1F7Pm9jqX7q4uiuAAnVezTS6u9t7jLJVH&sz=w600",
  },
  {
    name: "Alliance Daniels",
    displayLineEn:
      "Alliance Daniels, Manager, Government Relations (Canada), ONE Campaign",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1MMgQ9RNWCRqc38DhYY1IhjpEU8NVHClJ&sz=w600",
  },
  {
    name: "Aminata Diallo",
    displayLineEn: "Better place - Francoise Rania Ivala and Aminata Diallo",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1m1pEyvMg1XaS0bVpvrhqgbcSecI5mzHb&sz=w600",
  },
  {
    name: "Amma Gyamfowa",
    displayLineEn:
      "Amma Gyamfowa, Director of Clinical Programs and Services, The Black Women's Institute for Health",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1XUle7C0BH5C5X8BSTLXq6S4HcAyu8OaU&sz=w600",
  },
  {
    name: "Andre Anderson",
    displayLineEn:
      "Andre Anderson, Filmmaker and 7th Grandson of the Founder of Africville, Nova Scotia",
    bioEn:
      "Andre Anderson is an award-winning filmmaker, community leader and entrepreneur from Halifax (Kjipuktuk), Nova Scotia. A tenth-generation African Nova Scotian, he founded Anderson Films Inc. to create documentaries celebrating overlooked stories of Black history, leadership and community. His work has been featured by Eastlink TV, the Emerging Lens Cultural Film Festival and the Halifax Black Film Festival, and he is committed to civic engagement, youth leadership and strengthening communities through storytelling.",
    bioFr:
      "Andre Anderson est cinéaste, entrepreneur et leader communautaire primé de Halifax (Kjipuktuk), en Nouvelle-Écosse. Afro-Néo-Écossais de dixième génération, il a fondé Anderson Films Inc. afin de mettre en lumière des histoires méconnues du patrimoine, du leadership et de la résilience des communautés noires. Engagé envers le développement des jeunes, les droits de la personne et la participation citoyenne, il croit au pouvoir des récits pour rapprocher les générations et susciter des changements durables.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1_AATko62pPmJlArF2Ps7q1nKvEzXWyRR&sz=w600",
  },
  {
    name: "Andre Smith",
    displayLineEn:
      "Andre Smith, Founder & CEO, Flip & Floss; Founder, Flip Academy",
    bioEn:
      "Andre Smith is the founder of Flip & Floss, an AI-powered financial education platform helping families build generational wealth. After immigrating to Canada and transforming his own finances, he began teaching financial literacy in his community. Flip & Floss has since reached more than 30,000 students, parents and educators across North America and the Caribbean. He has been recognized among Canada’s Top 25 Immigrants and received the BMO Obsidi Entrepreneur of the Year – Technology Award.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1FztnhYih_j3iUjrHaNn8OgiX_Sj-AbNQ&sz=w600",
    imagePosition: "slight-down",
  },
  {
    name: "Angel Persaud",
    displayLineEn: "Expressions - Gabriela Sealy and Angel Persaud",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1a9UnAbR5d-uvAp_0n_qS5NUKOIsMm7gu&sz=w600",
  },
  {
    name: "Asha Jama",
    displayLineEn: "LEAD-HER-SHIP – Mabel Adesopo and Asha Jama",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1g_jv2JSgbHc0oiA2INGfuVx2PuRp9lGl&sz=w600",
  },
  {
    name: "Ashley Carruthers",
    displayLineEn:
      "Ashley Carruthers, Nurse Practitioner, University of Manitoba and Nurse Practitioner Association of Manitoba (NPAM)",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1LDpnGGXvqE980_b3ZY4O96nl7395s0Yn&sz=w600",
    imagePosition: "slight-down",
  },
  {
    name: "Babatamilore Ashofor",
    displayLineEn:
      "Black Aspiring Medical Professionals - Warona Folasayo Alawiye, Babatamilore Ashofor",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1c8rcwLBw8J61tDWqzWGNNOEYDmxjUGMG&sz=w600",
  },
  {
    name: "Barbara Mamabolo",
    displayLineEn:
      "Barbara Mamabolo, Executive in Charge of Current Production, Drama, Scripted Content, CBC (Heartland and Wild Cards)",
    bioEn:
      "Barbara Mamabolo is a Toronto-based multi-hyphenate and Executive in Charge of Current Production, Drama, on CBC’s Scripted Content team. She oversees scripted drama series including Heartland and Wild Cards. Previously at CBC she supported Emmy-nominated The Porter and Overlord and the Underwoods; she has also worked with Reelworld, SXSW, Kim’s Convenience and as a writer-director of award-winning short films.",
    bioFr:
      "Basée à Toronto, Barbara Mamabolo est une professionnelle aux multiples facettes et responsable de la production, Dramatiques, dans l’équipe du Contenu scénarisé de CBC. Elle supervise notamment Heartland et Wild Cards. Elle a auparavant soutenu The Porter et Overlord and the Underwoods, travaillé avec Reelworld et SXSW, contribué à Kim’s Convenience et signé plusieurs courts-métrages primés.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1fLZiUv0eDl4ReEVzyONSTSITPL2ATyxn&sz=w600",
  },
  {
    name: "Charline",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1Lza4y3g9pqCDaQtEbKSY-sgosjUsJaWW&sz=w600",
  },
  {
    name: "Chimwemwe Undi",
    displayLineEn:
      "Poetry and Dance Performance: Chimwemwe Undi; Elsie Rweyemamu; choreography by Nicole Kepp; Kamil Jones Strachan",
    bioEn:
      "Chimwemwe Undi is a poet, writer and editor based on Treaty 1 territory in Winnipeg, Manitoba. Her debut full-length collection, Scientific Marvel (House of Anansi Press, 2024) won the 2024 Governor General’s Literary Award in Poetry. She is Canada’s Parliamentary Poet Laureate for 2025 and 2026.",
    bioFr:
      "Chimwemwe Undi est une poète, autrice et éditrice établie sur le territoire visé par le Traité no 1, à Winnipeg, au Manitoba. Son premier recueil complet, Scientific Marvel (House of Anansi Press, 2024), a remporté le Prix littéraire du Gouverneur général 2024 dans la catégorie poésie. Elle est poète officielle du Parlement du Canada pour les années 2025 et 2026.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1ukRB3QfXKbt5NrOwISX82Pmnh8xqAXKk&sz=w600",
  },
  {
    name: "D-yana Andrel Bommier",
    displayLineEn: "Uvusa Abalele - D-yana Andrel Bommier",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1r7DFKvXCtwUWvMoaPsbh72rWALNRZh5B&sz=w600",
  },
  {
    name: "Dan Ngenzi Ya Ruty",
    displayLineEn:
      "Dan Ngenzi Ya Ruty, Franco Commissioner, UOSU; Co-President, Rwandan Student Association",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1K9FQD0qYis6jwobm84ROsgSpyCNo0ryP&sz=w600",
  },
  {
    name: "Daniel Ohaegbu",
    displayLineEn: "AccessPoint - Daniel Ohaegbu",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1wGObjrOvQyjQkeUPKsGUavg3teVYjW0r&sz=w600",
  },
  {
    name: "David Simmonds",
    displayLineEn:
      "David Simmonds, Senior Vice-President, Chief Marketing, Communications, and Sustainability Officer, Canada Life",
    bioEn:
      "David Simmonds is Senior Vice-President, Chief Marketing and Communications Officer at Canada Life, overseeing brand, marketing, communications, media relations, government relations, reputational risk management and corporate social responsibility. His career spans senior roles in corporate communications, public policy, consulting, academia and media. He has been named among Canada’s Top 100 Black Canadians and recognized with the Harry Jerome Leadership Award and as one of Canada’s Best Executives by The Globe and Mail’s Report on Business.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1DNtGJXgwAs17PzPltigY6QZYuiq7fh_0&sz=w600",
  },
  {
    name: "Demilade Akinleye-Abraham",
    displayLineEn:
      "STEMBOUD – Demilade Akinleye-Abraham and Kamsiyochi Onyekere",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1U-lFqymOcz4jH9WHtBLKrRaI_hULm6Br&sz=w600",
  },
  {
    name: "Djaka Blais",
    displayLineEn:
      "Djaka Blais, Executive Director, Advancing Racial Equity & Housing Justice",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1A1wRW3UsWS8m9vuRL9l18xpVAC8HW63J&sz=w600",
  },
  {
    name: "Dr. Gideon Christian",
    displayLineEn:
      "Dr. Gideon Christian, PhD, Associate Professor of AI and Law and University Research Chair in AI and Law, Faculty of Law, University of Calgary",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1Y_rqD2bCi_Ox5tFe9GTy9QFu2BWgYnhz&sz=w600",
  },
  {
    name: "Dr. Idrissa Beogo",
    displayLineEn:
      "Dr. Idrissa Beogo, Associate Professor, School of Nursing & Associate Director, Interdisciplinary Centre for Black Health, University of Ottawa",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1JXDmKdtBrzJjVixkB80I-9sTJV6TGDSh&sz=w600",
    imagePosition: "slight-down",
  },
  {
    name: "Dr. Josephine Etowa",
    nameFr: "Dre Josephine Etowa",
    displayLineEn:
      "Dr. Josephine Etowa, Full Professor (Tier 1), Canada Research Chair in Black Women's Health, Scientific Lead of the Interdisciplinary Centre for Black Health, University of Ottawa — Founder and Director, Collaborative Critical Research for Equity and Transformation in Health -CO-CREATH Lab",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1NO0WHcKUmyGEKbjZpwEkwIYCydB3VeEL&sz=w600",
  },
  {
    name: "Dr. Jude Mary Cénat",
    displayLineEn:
      "Dr. Jude Mary Cénat, Full Professor, School of Psychology & University Research Chair on Black Health, University of Ottawa",
    imageUrl:
      "https://drive.google.com/thumbnail?id=10oLouJbX8K0Hr0mqRqN6RDB_kK9E_Fq6&sz=w600",
    imagePosition: "slight-down",
  },
  {
    name: "Dr. Monnica Williams",
    nameFr: "Dre Monnica Williams",
    displayLineEn:
      "Dr. Monnica Williams, Professor and Canada Research Chair in Mental Health Innovation and Equity, University of Ottawa",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1ra0GKpnbZd2P3Kj4zj1lCWwRCxO1Cf6Z&sz=w600",
    imageScale: "slight",
  },
  {
    name: "Dr. Warren Clarke",
    nameFr: "Warren Clarke",
    displayLineEn:
      "Dr. Warren Clarke, Founder, Barbershop Talk; Founder & Director, Afro-Caribbean Mentorship Program",
    imageUrl:
      "https://drive.google.com/thumbnail?id=15Iv6oMz6VIpngNuBKajNDwBM4A_9L581&sz=w600",
    imagePosition: "slight-down",
  },
  {
    name: "Drayton Mulindabigwi",
    displayLineEn: "Drayton Mulindabigwi, Founder, The Novas Group",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1qf983u5RmLFy88HzzW8XMEhHhxrViplI&sz=w600",
  },
  {
    name: "El Jones",
    displayLineEn:
      "El Jones, Poet, Journalist, and Professor at Mount Saint Vincent University",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1XglAAQTcB_wEV6hnD5sFHVtn4IfTLhev&sz=w600",
  },
  {
    name: "Elsie Rweyemamu",
    displayLineEn:
      "Poetry and Dance Performance: Chimwemwe Undi; Elsie Rweyemamu; choreography by Nicole Kepp; Kamil Jones Strachan",
    bioEn:
      "Elsie Rweyemamu began dancing at age three. A student with the Royal Winnipeg Ballet School, she currently trains within the Advanced Intensive Training Program and has performed in ballet, jazz, contemporary dance and musical theatre. Outside dance, she is an Honours with Distinction student at Kelvin High School and hopes to become a teacher.",
    bioFr:
      "Elsie Rweyemamu a fait ses premiers pas en studio dès l’âge de trois ans. Élève du Royal Winnipeg Ballet School, elle poursuit sa formation au programme avancé de formation intensive et s’est produite en ballet, jazz, danse contemporaine et théâtre musical. Elle est également élève avec mention d’excellence à la Kelvin High School et aspire à devenir enseignante.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1mJt6Fe_sa7-ZENZkPvMFZoMwIGfvZAbD&sz=w600",
  },
  {
    name: "Félicia Cá",
    displayLineEn:
      "Felicia Ca, Power of Youth Alumni, Research and Project Coordinator at Relais-femmes",
    bioFr:
      "Félicia Cá est une Québécoise métissée passionnée d’innovation et d’équité sociale, particulièrement par les démarches de recherche « par, pour et avec » les communautés. Récipiendaire de Jeunesse au Pouvoir 2025-2026, elle a mené The Black Sheep Project sur les réalités de jeunes métissés et noirs adoptés ayant grandi dans des familles blanches au Québec. Diplômée de McGill en développement international, science politique et entrepreneuriat social, elle poursuit un MBA à HEC Montréal et travaille comme coordonnatrice de projets et de recherche chez Relais-femmes.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1Rs6Y8nmA9zxaedUI5im2E5ZWxIZtZlSx&sz=w600",
    imagePosition: "slight-down",
  },
  {
    name: "Flowrish",
    imageUrl:
      "https://drive.google.com/thumbnail?id=11AM1sj5NspoMheLHLmd10wyM0FKjmWnU&sz=w600",
  },
  {
    name: "Franck-Maleek Djamat-Dubois",
    displayLineEn:
      "Franck-Maleek Djamat-Dubois, Founder, Kids Connect Africa and FM Media",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1mXaFsb3v__ZkkYtIC1mW27UU63aqs1xW&sz=w600",
  },
  {
    name: "Françoise Rania Ivala",
    displayLineEn: "Better place - Francoise Rania Ivala and Aminata Diallo",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1_Ke0w9ZrIG57Mao9CnUCrs23JgW8G9i_&sz=w600",
  },
  {
    name: "Gabriela Sealy",
    displayLineEn: "Expressions - Gabriela Sealy and Angel Persaud",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1G5z7GfZKaLL2xEyvR3u9jCy_9d1XEdSn&sz=w600",
  },
  {
    name: "Genie Baffoe",
    displayLineEn:
      "Genie Baffoe, Hip Hop Performer, Community Organizer and Educator",
    imageUrl:
      "https://drive.google.com/thumbnail?id=17BE9zMqxVr9X0qE-yITzMWrOyI29dNNc&sz=w600",
  },
  {
    name: "Gode Katembo",
    displayLineEn:
      "Gode Katembo, Founder and Executive Director, Canada African Cup of Nations/Sports Without Boundaries, and Head Coach, CMU Men's Soccer",
    bioEn:
      "Gode Katembo is a social entrepreneur, community leader and advocate for youth empowerment through sport. He is Founder and CEO of the Canada African Cup of Nations Inc. and Founder of Sports Without Boundaries, using sport to build community, promote belonging and reduce barriers related to race, culture, income and access. His leadership has been recognized through awards for entrepreneurship, volunteerism, coaching, youth development and community service.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=17wtvFA3lyxlQxNN35rOAz8dbTsvv7xDB&sz=w600",
  },
  {
    name: "Harley Gervais",
    displayLineEn:
      "Harley Gervais, Founder and Principal of The G-Eight and Former Justice of the Peace",
    bioEn:
      "Harley Gervais is a bilingual conflict-resolution strategist, retired Justice of the Peace and legal voice at the intersection of justice, equity and systems change. With more than 20 years of experience across the Supreme Court of Canada, Federal Court and Ontario Court of Justice, she has presided over hundreds of cases and advised Chief Justices. As Founder and Prime Consultant of The G-Eight, her practice is trauma-informed and culturally responsive, and includes the Black Youth Justice Initiative.",
    bioFr:
      "Harley Gervais est une spécialiste bilingue en résolution de conflits, ancienne juge de paix et figure juridique à la croisée de la justice, de l’équité et du changement systémique. Forte de plus de 20 ans d’expérience à la Cour suprême du Canada, à la Cour fédérale et à la Cour de justice de l’Ontario, elle a présidé des centaines de dossiers et conseillé des juges en chef. Fondatrice et consultante principale de The G-Eight, elle adopte une approche tenant compte des traumatismes et adaptée à la culture, notamment dans le cadre de son Initiative pour la justice envers les jeunes Noirs.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1AgslJCZ8G9VMW8ribe62JkpopAMcOVqV&sz=w600",
  },
  {
    name: "Isak Vaillancourt",
    bioEn:
      "Isak Vaillancourt is an award-winning film director, multidisciplinary artist and community organizer of Somali-French ancestry. He is Co-Founder and Director of Black Lives Matter Sudbury. Through film, photography and multimedia installation, his work explores identity, Black healing, decolonization and cultural liberation. He holds an MA in Media Production from Toronto Metropolitan University, where his research focused on Black-Indigenous relations, immersive technologies and social justice.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1LpDpfybkM7FezwVuj4Rc7-uWmMjKSVFk&sz=w600",
    imagePosition: "slight-down",
  },
  {
    name: "Issac Carter",
    nameFr: "Isaac Carter",
    displayLineEn: "Issac Carter, DJ and Producer, Founder of BlkEq",
    imageUrl:
      "https://drive.google.com/thumbnail?id=16vsHJD0HS74OH_0bYgMa7scFMihaKN_X&sz=w600",
  },
  {
    name: "Iyanuoluwa Akinrinola",
    displayLineEn:
      "Iyanuoluwa Akinrinola, Researcher and policy Analyst, Canadian Teacher’s Federation (CTF/CTE);Unionist, Policy Advocate, K-12 Educator and PHD Student, Interdisciplinary Social Research Program, Trent University",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1zgfhEzMkiTDk5inQRqMs2WjScn1GcnZB&sz=w600",
  },
  {
    name: "Jaelyn Jarrett",
    displayLineEn:
      "Jaelyn Jarrett, Researcher and Advocate for Black and Inuit History",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1Zl-xVfkfuZCgPPa9uFBfokZ1MIbIJIaf&sz=w600",
    imagePosition: "significant-down",
  },
  {
    name: "Jean-René Dominique Kwilu",
    displayLineEn:
      "Jean-René Dominique Kwilu, Lawyer and President of Canadian Association of Black Lawyers, Manitoba Chapter",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1rH6-r35Dqwe17j-mRhorHe_xUu6ox3Hp&sz=w600",
    imagePosition: "slight-down",
  },
  {
    name: "Joy Loewen",
    displayLineEn:
      "Joy Loewen, Vice-President, Industry Development, Canada Media Fund",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1AoQ1dEDOaVzi7fpfyfQTC-YhV3mG8pmS&sz=w600",
    imagePosition: "slight-down",
  },
  {
    name: "Judy Williams",
    displayLineEn:
      "Judy Williams, Chair/Program Manager, The Black Canadian Experience Centre (BCEC)",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1mS9b60lMXTTxGovx2k8EIQsxsz_AYBml&sz=w600",
  },
  {
    name: "Kadene Massop",
    displayLineEn:
      "Viola Desmond Justice Institute – Heraldo Junior Jacques and Kadene Massop",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1cBdvtAfjWuNZoq-fumRFztwr5hdIstKG&sz=w600",
  },
  {
    name: "Kamsiyochi Onyekere",
    displayLineEn:
      "STEMBOUD – Demilade Akinleye-Abraham and Kamsiyochi Onyekere",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1pR0NxnxehSSym3Y4bzGq3zv8zl9YdYu1&sz=w600",
    imagePosition: "slight-down",
  },
  {
    name: "Kelvin Doe",
    displayLineEn: "Maker festival- Kelvin Doe, Kiara Denee",
    imageUrl:
      "https://drive.google.com/thumbnail?id=10HKfMO7MR3dco7RgRyBJxb39CxS_HEk3&sz=w600",
  },
  {
    name: "Kevin Junor",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1ScGsBXNQao9lfDtb53VwgRisSHNxE5IN&sz=w600",
  },
  {
    name: "Laurene Williams",
    displayLineEn:
      "Laurene Williams, Program Manager, Diversity Institute, Ted Rogers School of Management",
    bioEn:
      "Laurene Williams is an Ontario lawyer and Program Manager at the Diversity Institute, where she leads employment and entrepreneurship initiatives advancing economic inclusion for diverse communities. She works with employers, community organizations, educational institutions and governments to strengthen workforce participation and equitable pathways to opportunity. She is pursuing an LLM at Osgoode Hall Law School and brings a background in law, human resources and alternative dispute resolution.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1pF1RNifIfQFoMtte4AT1Ol9TNIB_TBNV&sz=w600",
    imagePosition: "slight-down",
  },
  {
    name: "Lerato Chondoma",
    displayLineEn:
      "Lerato Chondoma (LL.B, MBA) - Associate Vice-President EDI-AR, Acadia University and Commissioner, Nova Scotia Human Rights Commission.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=18rrvtncqhHa9oWe65norGQ3YxjZ0egfG&sz=w600",
    imagePosition: "slight-down",
  },
  {
    name: "Lisa Meeches",
    displayLineEn:
      "Lisa Meeches, C.M., O.M., Executive Director, Manito Ahbee Festival",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1fUADDRYvWnkc5p3frpz_MYz28iSvNzOa&sz=w600",
    imagePosition: "slight-down",
  },
  {
    name: "Mabel Adesopo",
    displayLineEn: "LEAD-HER-SHIP – Mabel Adesopo and Asha Jama",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1jPbAVqd0JXOLOwVFoj6Q0_vFyumA1odr&sz=w600",
    imagePosition: "slight-down",
  },
  {
    name: "Mandela Kuet",
    displayLineEn:
      "Mandela Kuet, PDG, Mark1T, Founder of Hoodfams, and Steering Committee member, Canada Black Justice Strategy",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1YeEbOqRGGSxBCgwyGqOJOT2W0QaGZIE3&sz=w600",
    imagePosition: "slight-down",
  },
  {
    name: "Mark Harrison",
    displayLineEn:
      "Mark Harrison, Founder of MH3 Collective and the Black Talent Initiative",
    bioEn:
      "Mark Harrison, who prefers to be called MH3, founded the MH3 Collective, a group matching ideas with people to drive commercial and societal impact. His work spans entrepreneurship, community leadership, marketing and advocacy for underestimated talent. He has received the Harry Jerome Award, the Association of Canadian Advertisers Gold Medal Award and hall-of-fame recognition from the American Marketing Association and Sponsorship Marketing Council of Canada. He is CBC Toronto Metro Morning’s business columnist.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1LvRBm14OoAIAsdqogc-GQUSLULhRRqP6&sz=w600",
  },
  {
    name: "Michelle Jean-Paul",
    displayLineEn:
      "Michelle Jean-Paul, Educational Leader and Community Advocate",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1wlenlKsmrhiNayKmXNMGpQHmDrTPD9bI&sz=w600",
  },
  {
    name: "Mohamed Elmi",
    nameFr: "Mohamad Elmi",
    displayLineEn:
      "Mohamed Elmi, Executive Director, Diversity Institute, Ted Rogers School of Management",
    bioEn:
      "Mohamed Elmi is Executive Director of the Diversity Institute, which conducts multidisciplinary, multi-stakeholder research on the needs of diverse Canadians, changing skills and competencies, and policies and tools that advance economic inclusion. He holds a PhD in Information Systems from the University of Cape Town, an MA in International Development Studies from Saint Mary’s University and an Honours BA in Political Science from the University of New Brunswick.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1NKahTEAeABaSABtg3d_Kml16kdMplrm0&sz=w600",
  },
  {
    name: "Nancy Mitchell",
    displayLineEn:
      "Nancy Mitchell, Director of Research Special Projects, Diversity Institute, Ted Rogers School of Management",
    bioEn:
      "Nancy Mitchell is Director, Research – Special Projects at the Diversity Institute. Her background is in gender equality and diversity, equity and inclusion, including previous work with UN Women. At the Diversity Institute she works with public, private and civil-society stakeholders to embed diversity, equity, inclusion and accessibility into organizational processes and has contributed to research and action plans on anti-Black racism, Black Muslim communities and microaggressions.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1agpwupY47fEd8DTHKscCZNodPakKKdC2&sz=w600",
  },
  {
    name: "Nicholas Marcus Thompson",
    displayLineEn:
      "Nicholas Marcus Thompson, President and CEO, Black Class Action Secretariat, and Co-Chair, National Employment Equity Council",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1cPovQjN0k2DG2f5tfraxqOGeBhvg7MzM&sz=w600",
  },
  {
    name: "Nicole Kaniki",
    displayLineEn:
      "Nicole Kaniki, Founder and Director, Senomi Solutions Inc., EDI Consulting",
    imageUrl:
      "https://drive.google.com/thumbnail?id=17CwGzZ6U0Crtto5Qv4b6jegbs03VqcCv&sz=w600",
  },
  {
    name: "Nicole Kepp",
    displayLineEn:
      "Poetry and Dance Performance: Chimwemwe Undi; Elsie Rweyemamu; choreography by Nicole Kepp; Kamil Jones Strachan",
    bioEn:
      "Nicole Kepp is a teacher, choreographer and arts administrator living in Winnipeg. As Principal of the Recreational Division for Canada’s Royal Winnipeg Ballet School, she is passionate about dance education and meaningful experiences for students in the studio and on stage. A graduate of the RWB School’s Teacher Training Program, she has created work for the Royal Winnipeg Ballet, Royal Manitoba Theatre Centre and Skylines Dance & Film Festival.",
    bioFr:
      "Nicole Kepp est enseignante, chorégraphe et administratrice des arts établie à Winnipeg. Directrice de la division récréative du Canada’s Royal Winnipeg Ballet School, elle se consacre à l’enseignement de la danse et à la création d’expériences artistiques enrichissantes. Formée au programme de formation des enseignants de l’école, elle a créé des œuvres pour le Royal Winnipeg Ballet, le Royal Manitoba Theatre Centre et le Skylines Dance & Film Festival.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=18lM02lgep44o4xM2nnLhXrrtXgfV0RzC&sz=w600",
  },
  {
    name: "Nita Omokhose Badaiki",
    displayLineEn:
      "Nita Omokhose Badaiki, Activist and Trained & Experienced Anti-Oppression Facilitator",
    bioEn:
      "Nita Omokhose Badaiki is a community organizer and advocate passionate about equity and social justice. With a background in Political Science and Criminology and training in anti-oppression and harassment facilitation, she has led conversations on anti-racism, equity, decolonization and gender-based violence. She serves as National Lead, Community Affairs at the Canadian Federation of Students, supporting student organizers and national equity and justice campaigns.",
    bioFr:
      "Nita Omokhose Badaiki est une organisatrice communautaire et une défenseure des droits passionnée par l’équité et la justice sociale. Titulaire d’une formation en science politique et en criminologie et formée en lutte contre l’oppression et en prévention du harcèlement, elle anime des échanges sur l’antiracisme, l’équité, la décolonisation et la violence fondée sur le genre. Elle est responsable nationale des affaires communautaires à la Fédération canadienne des étudiantes et étudiants.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1CZEJAmXbyNPtCL5nB3Y5yhgVRDKoWI6J&sz=w600",
  },
  {
    name: "Nonso Morah",
    displayLineEn:
      "Nonso Morah, Digital Media Coordinator at Centre for Media, Technology and Democracy.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1saXJvCAvJnTfSkuY_wEoVLE7RJkDx1NB&sz=w600",
  },
  {
    name: "Odario Williams",
    displayLineEn:
      "Odario Williams, Host of CBC’s Afterdark, Hip-Hop Artist, Actor, DJ and Storyteller",
    bioEn:
      "Odario Williams is a Canadian broadcaster, award-winning hip-hop artist, actor, DJ and storyteller. Originally from Guyana and raised in Winnipeg, he is recognized as a pioneer in Winnipeg’s hip-hop community. He studied film and theatre at the University of Winnipeg and today hosts CBC Music’s weekly program Afterdark, creating memorable musical moments on-air and on stage.",
    bioFr:
      "Odario Williams est un animateur, artiste primé de hip-hop, acteur, DJ et raconteur canadien. Originaire du Guyana et ayant grandi à Winnipeg, il fait figure de pionnier dans le milieu du hip-hop de la ville. Il a étudié le cinéma et le théâtre à l’Université de Winnipeg et anime aujourd’hui l’émission hebdomadaire Afterdark sur CBC Music.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1op7RL4yCBqbJdUDjzK_P3QtHxCwbXtCE&sz=w600",
    imagePosition: "significant-down",
    imageScale: "top-large",
    imageOffsetY: "slight-down",
  },
  {
    name: "Oluwagbotemi Dada",
    displayLineEn:
      "Oluwagbotemi Dada, Community Leader, Lawyer, and Sport-for-Social-Impact Advocate, and Director of Fund Development at Sports Without Boundaries",
    bioEn:
      "Oluwagbotemi Dada is a community leader, lawyer and sport-for-social-impact advocate. She serves as Director of Fund Development at Sports Without Boundaries and Program Development & Organizational Strategy Lead for the Canada African Cup of Nations, helping use sport as a catalyst for youth empowerment, community engagement and social inclusion. She also works in newcomer settlement and holds an MBA from the University of Manitoba.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1P6nUOB4l_wR3qqKrOqkZMN6Ys4sdvsCh&sz=w600",
  },
  {
    name: "Opemipo Mariam Balogun",
    displayLineEn: "Parole et Parcours - Opemipo Mariam Balogun",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1UbTclyKLy0d0-Jb5hIxaJNZbNSWUdBRf&sz=w600",
  },
  {
    name: "Rachel Décoste",
    displayLineEn: "Rachel Décoste, AI Ethics and Data Governance Expert",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1139aHsgesTospB2Qp0rnOs1racoHBKsC&sz=w600",
  },
  {
    name: "Richard Sharpe",
    displayLineEn:
      "Richard Sharpe, Director, Black Equity Branch, Treasury Board Secretariat",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1p4yepYiofzMrGPNNMkXNJU2jC3ZeSxWI&sz=w600",
  },
  {
    name: "Robin Summerfield",
    displayLineEn:
      "Robin Summerfield, Senior Producer, CBC Manitoba’s Creator Network and Absolutely Canadian",
    bioEn:
      "Winnipeg-based storyteller Robin Summerfield has built a career across print, digital media, radio, and television. Currently a senior producer for CBC Manitoba’s Creator Network and Absolutely Canadian, she helps local filmmakers bring their stories to a national audience. Before her broadcast work, Summerfield was a magazine editor and a features writer for the Calgary Herald. Also an accomplished food writer, she authored Winnipeg Cooks, earning the Carol Shields Winnipeg Book Award in 2016.",
    bioFr:
      "Basée à Winnipeg, la journaliste Robin Summerfield a travaillé dans la presse écrite, les médias numériques, à la radio et à la télévision. Actuellement première réalisatrice pour le réseau de créateurs de CBC Manitoba et Absolutely Canadian, elle aide les cinéastes de nos régions à faire rayonner leurs histoires partout au pays. Avant d’entrer dans l’industrie de la diffusion, elle était cheffe de rubrique et journaliste pour le Calgary Herald. Autrice culinaire accomplie, elle a publié Winnipeg Cooks, qui lui a valu le Carol Shields Winnipeg Book Award en 2016.",
    imageUrl: "/speakers/robin-summerfield.webp",
  },
  {
    name: "Russell Grosse",
    displayLineEn: "Russell Grosse, CEO, Black Cultural Centre",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1ZrVGhrAgEHt4KqkuE9YkZlOUxqzLgbhb&sz=w600",
  },
  {
    name: "Shauna Bookal",
    displayLineEn:
      "Shauna Bookal, President and CEO, Inclusion in Canadian Sports Network (ICSN)",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1rOkCCmXBkYOrvGfSJT05x5aKAlGK-MyA&sz=w600",
    imagePosition: "slight-down",
  },
  {
    name: "Sonya Williams",
    displayLineEn:
      "Measha Brueggergosman-Lee; Summit Mass Choir directed by Sonya Williams",
    bioEn:
      "Sonya Williams is a proud first-generation daughter of Jamaican parents, born and raised in Winnipeg. Singing and playing piano since age four, she holds undergraduate degrees in Arts and Education with a choral focus and spent 18 years teaching through choir and the arts. She currently serves as a vice-principal, is completing graduate research in educational leadership, and is a member of Winnipeg’s Roots in Harmony choir.",
    bioFr:
      "Sonya Williams est la fière fille de première génération de parents jamaïcains, née et élevée à Winnipeg. Elle chante et joue du piano depuis l’âge de quatre ans, détient des diplômes en arts et en éducation avec spécialisation en chant choral et a enseigné pendant 18 ans par l’entremise de la chorale et des arts. Elle est aujourd’hui directrice adjointe, poursuit des études supérieures en leadership éducatif et fait partie de la chorale Roots in Harmony.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1t4j81smTyC-lPi_QkqaqGl1oEaXkt0AP&sz=w600",
  },
  {
    name: "Souleman Baba Eya",
    displayLineEn: "For the Culture – Souleman Baba Eya and Hidaya Tchassanti",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1VFQDVxUq03Bh87vTLkkxORvD73_YXbtu&sz=w600",
  },
  {
    name: "Superintendent Darryl Dawkins",
    displayLineEn:
      "Superintendent Darryl Dawkins, Director, Royal Canadian Mounted Police Anti-Racism, Equity, Diversity and Inclusion Secretariat, and Founder, Diverse and Inclusive Pre-Cadet Experience",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1zehwFxlN_a5FvTYRyzyHE0djIfdt23md&sz=w600",
    imagePosition: "slight-down",
  },
  {
    name: "Suzanne Obiorah",
    displayLineEn:
      "Suzanne Obiorah, Chief Executive Officer, Somerset West Community Health Centre",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1N9x5X41WXkHq4ybLQygHAjEPbHteJd3v&sz=w600",
  },
  {
    name: "Sylvia Parris-Drummond",
    displayLineEn:
      "Sylvia Parris, Leader, Educator and CEO, Delmore “Buddy” Daye Learning Institute; President, SVPARRIS CONSULTING",
    bioEn:
      "Sylvia Parris-Drummond is an eighth-generation African Nova Scotian educator, leader, researcher and community advocate. She is Chief Executive Officer of the Delmore “Buddy” Daye Learning Institute and President of SVPARRIS CONSULTING, working with Black communities, governments, educational institutions and nonprofits to strengthen Africentric education, governance and strategies for dismantling anti-Black racism. A PhD candidate researching Black women in senior leadership, she centres lived experience, Black feminist and Womanist knowledge, and Ubuntu-inspired approaches to institutional transformation.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1CvgieCZye3F9-T9Khib9A2aGIkyII5Bp&sz=w600",
  },
  {
    name: "Tamara Thermitus",
    displayLineEn:
      "Tamara Thermitus, Ad.E, Special Advisor, Diversity Institute, and Boulton Senior Fellow of McGill University's Faculty of Law (2023–2025)",
    bioEn:
      "Tamara Thermitus is a Quebec lawyer and Boulton Senior Fellow at McGill University’s Faculty of Law. A former federal Department of Justice lawyer, she participated in negotiations relating to the Indian Residential Schools settlement and the mandate of the Truth and Reconciliation Commission. She later chaired the Québec Human Rights Commission and has held leadership roles addressing racial discrimination, intersectionality and human rights. She is currently a special advisor at the Diversity Institute.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1iJUK_wDtDmp8AHjypl3gleazoULr-Zsx&sz=w600",
  },
  {
    name: "The Honourable Amina Gerba",
    nameFr: "L’honorable Amina Gerba",
    displayLineEn:
      "The Honourable Amina Gerba, Senator for Quebec (Rigaud); Entrepreneur; Co-Chair, Canada-Africa Parliamentary Association",
    bioEn:
      "Senator Amina Gerba is an independent Senator for Quebec (Rigaud), entrepreneur and specialist in international marketing and business development. Before her appointment to the Senate in 2021, she spent more than 25 years building businesses and strengthening economic ties between Canada and Africa. She is co-chair of the Canada-Africa Parliamentary Association and is active in parliamentary diplomacy, official languages and international trade.",
    bioFr:
      "La sénatrice Amina Gerba est sénatrice indépendante du Québec (Rigaud), entrepreneure et spécialiste du marketing international et du développement des affaires. Avant sa nomination au Sénat en 2021, elle a consacré plus de 25 ans à l’entrepreneuriat et au renforcement des liens économiques entre le Canada et l’Afrique. Elle est coprésidente de l’Association parlementaire Canada-Afrique et s’investit en diplomatie parlementaire, en langues officielles et en commerce international.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1fblE1Ftv2sQklbrjlYfaFYZW3UQkZREN&sz=w600",
    imagePosition: "slight-down",
  },
  {
    name: "The Honourable Bernadette Clement",
    nameFr: "L’honorable Bernadette Clement",
    displayLineEn:
      "The Honourable Bernadette Clement, Senator for Ontario; Member, Independent Senators Group; Former Mayor of Cornwall; First Black Woman to Serve as a Mayor in Ontario",
    bioEn:
      "Senator Bernadette Clement is a legal-aid lawyer and former mayor of Cornwall, Ontario, where she became the first Black woman to serve as a mayor in Ontario. A bilingual advocate for linguistic plurality and marginalized communities, she continues to practise law and serves in the Senate on legal, constitutional and Indigenous issues. In May 2026 she became Chair of the Canadian African Senate Group.",
    bioFr:
      "La sénatrice Bernadette Clement est avocate de l’aide juridique et ancienne mairesse de Cornwall, en Ontario, où elle est devenue la première femme noire à exercer la fonction de mairesse dans la province. Bilingue, elle défend la pluralité linguistique et les communautés marginalisées, continue de pratiquer le droit et siège au Sénat sur des enjeux juridiques, constitutionnels et autochtones. En mai 2026, elle est devenue présidente du Groupe canado-africain du Sénat.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1JahwVj9Lb6InyDj3FOcQYkUuWrylM0Lr&sz=w600",
  },
  {
    name: "The Honourable Paulette Senior",
    nameFr: "L’honorable Paulette Senior",
    displayLineEn:
      "The Honourable Paulette Senior, Senator for Ontario; Former President and CEO, Canadian Women’s Foundation",
    bioEn:
      "Senator Paulette Senior has dedicated her career to breaking down systemic barriers and empowering women and girls. Her leadership has included serving as President and CEO of the Canadian Women’s Foundation and as CEO of YWCA Canada. She has received numerous awards for community service and leadership and brings extensive experience in gender equity, social justice and nonprofit leadership to the Senate.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1c7xBecwgkPNewYkxBs22ftinRLLILhP4&sz=w600",
    imagePosition: "slight-down",
  },
  {
    name: "The Honourable Tony Ince",
    nameFr: "L’honorable Tony Ince",
    displayLineEn:
      "The Honourable Tony Ince, Senator for Nova Scotia; Former Member of the Nova Scotia Legislative Assembly; Former Minister of African Nova Scotian Affairs; Co-Founder, Canadian Congress of Black Parliamentarians",
    bioEn:
      "Tony Ince is a former Nova Scotia MLA and lifelong advocate for social justice, equity and diversity, particularly within African Nova Scotian communities. During his time in provincial politics he held several Cabinet portfolios, including African Nova Scotian Affairs and responsibility for equity and anti-racism initiatives. He co-founded the Canadian Congress of Black Parliamentarians and has extensive community and education experience.",
    bioFr:
      "Tony Ince est un ancien député de l’Assemblée législative de la Nouvelle-Écosse et un défenseur de longue date de la justice sociale, de l’équité et de la diversité, particulièrement au sein des communautés afro-néo-écossaises. Il a occupé plusieurs portefeuilles ministériels, notamment les Affaires afro-néo-écossaises et la responsabilité des initiatives d’équité et de lutte contre le racisme. Il a cofondé le Congrès canadien des parlementaires noirs.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1DvRObHJ2Rhv2TTF1gZqgAPtzMTTEO3jY&sz=w600",
    imagePosition: "slight-down",
  },
  {
    name: "Tia Tom",
    displayLineEn: "Marteine – Tia Tom",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1FzG_2ze4Tw0YVPoyZE6EL-TqS91CPGcB&sz=w600",
  },
  {
    name: "Toni Francis",
    displayLineEn: "Toni Francis, Senior Producer, Dragons’ Den",
    bioEn:
      "Toni Francis is an award-winning Senior Producer whose career spans broadcast television, branded content and live sports entertainment. She is currently Senior Producer on CBC’s Dragons’ Den, helping shape the series from auditions through production and contributing to its editorial and digital strategy. Previously, she produced broadcast and digital content for the Toronto Raptors and Toronto FC at Maple Leaf Sports & Entertainment and worked in branded content at ET Canada.",
    bioFr:
      "Toni Francis est une première réalisatrice primée dont la carrière englobe la télévision, le contenu de marque et le divertissement sportif en direct. Elle est actuellement première réalisatrice de Dragons’ Den à CBC, où elle contribue à la série des auditions jusqu’à la production ainsi qu’à sa stratégie éditoriale et numérique. Elle a auparavant créé du contenu pour les Raptors de Toronto et le Toronto FC à Maple Leaf Sports & Entertainment et travaillé en contenu de marque à ET Canada.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1pzDTzgawUPqTHVuwcBfUrP-gVE2GcfhB&sz=w600",
  },
  {
    name: "Tracy Karuhogo",
    displayLineEn:
      "Tracy Karuhogo, Founder, Black Girl Talk Collective; Prairies Regional Advisor, Office of the Minister of Crown-Indigenous Relations",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1O0fK3n-TzRTSrcz6qNUWlXUwwRlRKxef&sz=w600",
  },
  {
    name: "Xavier McLaughlin",
    displayLineEn:
      "Xavier McLaughlin, Operations Manager and Education Systems Navigator, Parents for Black Children",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1ZCc_JcqALDCv5-LtbkWwVxZIbzH_beM1&sz=w600",
  },
  {
    name: "Zilla Jones",
    displayLineEn:
      "Zilla Jones, Lawyer, Member of the External Steering Group, and Co-Author of A Roadmap for Transformative Change: Canada's Black Justice Strategy",
    bioEn:
      "Zilla Jones is an African-Canadian lawyer who lives and works on Treaty 1 territory and the Métis homeland in Winnipeg. She practices criminal defence and human rights law, teaches at Robson Hall Faculty of Law, and has appeared at all levels of court in Manitoba and the Supreme Court of Canada. She is a co-author of Canada’s Black Justice Strategy, a member of the Black Justice Steering Group, and a recipient of the Manitoba Bar Association Access to Justice Award.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1fWGLjtABOpmdIFtCuPXyH7xVY4ITUclw&sz=w600",
  },
  {
    name: "The Honourable Michael Coteau",
    nameFr: "L’honorable Michael Coteau",
    displayLineEn: "The Honourable Michael Coteau, Closing Ceremony speaker",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1LaaO6kFMalxlmkLls_1m2Eqdi0_q1zFm&sz=w600",
    imagePosition: "slight-down",
  },
  {
    name: "Edward Matwawana",
    displayLineEn:
      "Edward Matwawana, Executive Director, Michaëlle Jean Foundation",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1_Q7Sws9shfDmJ2mTQ_tJvZ3HPPVF8g1f&sz=w600",
  },
  {
    name: "Jully Black",
    displayLineEn: "Jully Black, singer-songwriter and featured performer",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1aUd-Jy-9vppUyhqD_oR-bJLuD0Qonxim&sz=w600",
  },
  {
    name: "Dr. Niigaanwewidam Sinclair",
    displayLineEn:
      "Dr. Niigaanwewidam Sinclair, author, commentator and Professor of Indigenous Studies",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1ZXzOZnLtEKhZuS_0QAksXnTinFORL2l-&sz=w600",
  },
  {
    name: "Patricia Bitu Tshikudi",
    displayLineEn: "Patricia Bitu Tshikudi, Closing Ceremony Co-Host",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1Qo3lxqJzVGXDneGuG5sirgW8sVQI9Wzu&sz=w600",
    imagePosition: "slight-down",
  },
  {
    name: "Naomi Gichungu",
    displayLineEn:
      "Naomi Gichungu, Co-Founder, Board Chair and CEO, Inuka Community Inc.",
    imageUrl:
      "https://drive.google.com/thumbnail?id=153b__uOq-x84bWyOX1WhHJBtSzLPG2rm&sz=w600",
  },
  {
    name: "Jerome Morgan",
    displayLineEn:
      "Jerome Morgan, Manager, Centre for Advancing the Interests of Black People, Toronto Community Housing",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1330YwpcKUlACJk7odPF9iiYPFpwFSyJp&sz=w600",
  },
  {
    name: "Dr. Marlene Ruck",
    nameFr: "Dre Marlene Ruck",
    displayLineEn:
      "Dr. Marlene Ruck, Executive Operations Manager, 902 ManUp Campus",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1T-sBsXb_cboonymAHCukE3FimwzVk2rT&sz=w600",
  },
  {
    name: "Hafiz Jatto",
    displayLineEn:
      "Hafiz Jatto, Director of Programs, Sexual Education Resource Centre, Manitoba",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1e7GVd7ha_s6W4xPNNTS3pJA7wMmpIrko&sz=w600",
  },
  {
    name: "Mohamed Hashim",
    displayLineEn:
      "Mohamed Hashim, Chief Executive Officer, Canadian Race Relations Foundation",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1WgEyZnuyfrUsw-3PhIQFudxXh5JNdJHi&sz=w600",
  },
  {
    name: "Laurelle A. Harris",
    displayLineEn:
      "Laurelle A. Harris, K.C., Director, Internationally Trained Lawyer Program, Equity & Transformation, Faculty of Law",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1ZcmTiWtlFywQblW_7UCfnPuX5tSPorIm&sz=w600",
  },
  {
    name: "Dr. Felicia Masenu",
    nameFr: "Dre Felicia Masenu",
    displayLineEn:
      "Dr. Felicia Masenu, Program Director, Bilal Community Centre",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1O98Dks2D45qT_ERAoioFxe_L7hW8Zg0M&sz=w600",
    imagePosition: "slight-down",
  },
  {
    name: "Measha Brueggergosman-Lee",
    displayLineEn:
      "Measha Brueggergosman-Lee, classical singer, author, speaker and executive producer",
    imageUrl:
      "https://drive.google.com/thumbnail?id=143p4EJ2Jm12JZLbhZqE_Cbo2-YX5xwGe&sz=w600",
  },
  {
    name: "Tomiwa Omolayo (Tommyphyll)",
    displayLineEn:
      "Tomiwa Omolayo (Tommyphyll), Artist, Producer and Coordinator, Black Professionals in Music Program, Manitoba Music",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1Xlscfdg7Cra8tvNilwFOt4YfJi7_mgg4&sz=w600",
  },
  {
    name: "Alex Sannie",
    displayLineEn:
      "Alex Sannie, Manager, Industry Development and Black Professionals in Music Program, Manitoba Music",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1jWQ6EoflbR3-EQfRKxBSBEj0Q-_QCeLk&sz=w600",
  },
  {
    name: "amanuel melles",
    displayLineEn:
      "amanuel melles, Senior Nonprofit Sector Strategist, Mentor and Executive Director, Network for the Advancement of Black Communities",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1mbkHg_aTwLBehEgaVLGm7OHjeCSEwu-Z&sz=w600",
  },
  {
    name: "Angela Cassie",
    displayLineEn:
      "Angela Cassie, Interim CEO and Chief Operating Officer, Travel Manitoba",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1U-iCkyA9CLz9qK_VsbEMrtx0YVw0LRoZ&sz=w600",
  },
  {
    name: "The Honourable Nellie Kennedy Assiniboia",
    displayLineEn:
      "The Honourable Nellie Kennedy Assiniboia, Manitoba Minister of Sport, Culture, Heritage and Tourism",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1loxX7qRY6H_mdcXnoqDzCjJ9IhoDWkg5&sz=w600",
  },
  {
    name: "Andrew Brown",
    displayLineEn: "Andrew Brown, Associate Deputy Minister, Canadian Heritage",
    imageUrl:
      "https://drive.google.com/thumbnail?id=14QB8poEX-Yq7bm46vaTxkmeIUNqBT_ap&sz=w600",
  },
  {
    name: "Dr. Tasha Spillett",
    nameFr: "Dre Tasha Spillett",
    displayLineEn:
      "Dr. Tasha Spillett, award-winning author, educator and Indigenous scholar",
    imageUrl:
      "https://drive.google.com/thumbnail?id=16Pw1MRHMo9yRWNr__89xF0StS_EGGJPn&sz=w600",
    imagePosition: "slight-down",
  },
  {
    name: "The Right Honourable Michaëlle Jean",
    nameFr: "La très honorable Michaëlle Jean",
    displayLineEn:
      "The Right Honourable Michaëlle Jean, 27th Governor General and Commander-in-Chief of Canada",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1dmFNYY_GycViqPMTlIEBTm7pXXlrfyWy&sz=w600",
  },
  {
    name: "Justin Holness",
    displayLineEn:
      "Justin Holness, Artist and Humanitarian; Elected Councillor, Ocean Man First Nation",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1MLUmETF__lj4rAYsx-kCCnDKODBE4ptK&sz=w600",
  },
  {
    name: "Oyíndàmọ́lá Aláká",
    displayLineEn: "Oyíndàmọ́lá Aláká, Director of Programs, Career Trek",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1CtxMEs02ygYRn_Vo4WDd98GByH1pWyp2&sz=w600",
  },
  {
    name: "Jeremiah Brookes",
    displayLineEn:
      "Jeremiah Brookes, Power of Youth presenter, Picnic at the Park",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1mlWUQnFsIF2EDoqZrRLNKn90pmIvejUA&sz=w600",
  },
  {
    name: "Shekara Grant",
    displayLineEn:
      "Shekara Grant, Executive Leader and Founder, Weymouth Falls",
    imageUrl:
      "https://drive.google.com/thumbnail?id=10lObZ_zvj9DhF3MwqxYArd14KW5zj_5h&sz=w600",
  },
  {
    name: "Kiara Denee",
    displayLineEn: "Kiara Denee, Power of Youth presenter, Maker Festival",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1DSzE1a8QVASMCj8DpBUfWQEYVV3uZNIQ&sz=w600",
  },
  {
    name: "Carmelle Freudlyne-Amoussou",
    displayLineEn: "Carmelle Freudlyne-Amoussou, Founder, Négritude Magazine",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1ob1W2WBFqKisMg2YSkF2Pb_NaU9Nenj2&sz=w600",
  },
  {
    name: "Candies Kotchapaw",
    displayLineEn:
      "Candies Kotchapaw, Founder, Organization for Economic Development and Diplomacy (OEDD)",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1SsJaTq1xxRjjvakjr4MsrZKfxJTc6qTV&sz=w600",
  },
  {
    name: "Agapi Gessesse",
    imageUrl: "/speakers/agapi-gessesse.webp",
    imageFramingFr: { scale: 2.2, offsetY: 16 },
  },
  {
    name: "Alia Aluma",
    imageUrl: "/speakers/alia-aluma.webp",
    imageScale: "extra-large",
  },
  {
    name: "Anita Neville",
    imageUrl: "/speakers/anita-neville.webp",
  },
  {
    name: "Ayosingz",
    imageUrl: "/speakers/ayosingz.webp",
  },
  {
    name: "Bernadeth Betchi",
    imageUrl: "/speakers/bernadeth-betchi.webp",
  },
  {
    name: "Gary Clement",
    imageUrl: "/speakers/gary-clement.webp",
  },
  {
    name: "Hanaa Ali",
    imageUrl: "/speakers/hanaa-ali.webp",
  },
  {
    name: "Ige Egal",
    imageUrl: "/speakers/ige-egal.webp",
  },
  {
    name: "Jennifer Matwawana",
    imageUrl: "/speakers/jennifer-matwawana.webp",
  },
  {
    name: "Kamil Jones Strachan",
    imageUrl: "/speakers/kamil-jones-strachan.webp",
  },
  {
    name: "Kerry-Ann Spencer-Williams",
    imageUrl: "/speakers/kerry-ann-spencer-williams.webp",
    imageScale: "huge",
    imageOffsetY: "slight-down",
    imageFramingFr: { scale: 3.5 },
  },
  {
    name: "Liza Arnason",
    imageUrl: "/speakers/liza-arnason.webp",
    imageScale: "large",
  },
  {
    name: "Markus Chambers",
    imageUrl: "/speakers/marcus-chambers.webp",
    imageScale: "large",
  },
  {
    name: "Moji Akande",
    imageUrl: "/speakers/moji-akande.webp",
    imageScale: "medium",
  },
  {
    name: "Natalie Thiesen",
    imageUrl: "/speakers/natalie-thiesen.webp",
    imagePosition: "slight-down",
  },
  {
    name: "Suze Youance",
    imageUrl: "/speakers/suze-youance.webp",
  },
  {
    name: "Tony Muzira",
    imageUrl: "/speakers/tony-muzira.webp",
    imageScale: "top-large",
    imageOffsetY: "slight-down",
    imageFramingFr: { scale: 3.5 },
  },
];

function normalizeName(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

const mergedProfiles = new Map(rawProfiles.map((profile) => [normalizeName(profile.name), profile]));
for (const supplement of SPEAKER_PROFILE_SUPPLEMENTS) {
  const key = normalizeName(supplement.name);
  const existing = mergedProfiles.get(key);
  mergedProfiles.set(key, {
    ...supplement,
    ...existing,
    bioEn: existing?.bioEn || supplement.bioEn,
    bioFr: existing?.bioFr || supplement.bioFr,
    imageUrl: supplement.imageUrl || existing?.imageUrl,
  });
}

export const SPEAKER_PROFILES = Array.from(mergedProfiles.values()).map((profile) => ({
  ...profile,
  normalizedName: normalizeName(profile.name),
  normalizedNameFr: profile.nameFr ? normalizeName(profile.nameFr) : undefined,
}));

export function findSpeakerProfiles(programmeLine: string) {
  const normalizedLine = normalizeName(programmeLine);

  return SPEAKER_PROFILES.filter(
    (profile) =>
      profile.normalizedName.length > 4 &&
      (normalizedLine.includes(profile.normalizedName) ||
        (profile.normalizedNameFr !== undefined &&
          normalizedLine.includes(profile.normalizedNameFr))),
  );
}
