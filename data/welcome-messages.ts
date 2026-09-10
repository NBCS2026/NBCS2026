export type WelcomeMessage = {
  id: string;
  labelEn: string;
  labelFr: string;
  titleEn: string;
  titleFr: string;
  paragraphsEn: string[];
  paragraphsFr: string[];
  signatureEn: string[];
  signatureFr: string[];
  image?: string;
  portrait?: boolean;
  logo?: string;
  logoAltEn?: string;
  logoAltFr?: string;
  imageAltEn?: string;
  imageAltFr?: string;
};

export const WELCOME_MESSAGES: WelcomeMessage[] = [
  {
    id: "cofounders",
    logo: "foundation",
    labelEn: "A message from the Co-founders",
    labelFr: "Un mot des cofondateurs",
    titleEn: "Coming Together, Stronger Than Ever",
    titleFr: "De toutes nos forces rassemblées",
    paragraphsEn: [
      "What moves us so deeply, from one National Black Canadians Summit to the next, is the unfolding of so many voices, carrying the weight of experience, history and lived realities in all their diversity. At every gathering, stories emerge and intersect: stories of communities with roots in Canada reaching back generations; journeys of immigration, the wrenching experience of exile and more recent arrivals. In the cadence of these voices and the force of their words echo centuries of resistance, struggles for emancipation and an unrelenting fight against racism, which remains — as we will never cease to say and denounce — one of the most persistent and devastating forms of exclusion.",
      "Nowhere can we afford to lower our guard against racism, whether overt or insidious, as it finds its way everywhere: into the all-too-frequent abuses of police authority, the workings of the criminal justice system, public institutions and private enterprise, workplaces, deeply held perceptions and unspoken assumptions, attitudes and behaviours. To name these realities, document them and confront them is to refuse their normalization. We demand that dignity, equality and equity no longer remain promises deferred.",
      "The 5th National Black Canadians Summit for the Eradication of Racial Discrimination, taking place in Winnipeg from September 18 to 20, 2026, comes at the urging and invitation of Manitoba Premier the Honourable Wab Kinew, to whom, along with his government, we extend our warmest thanks. Once again, the Summit will bring together an extraordinary mobilization of people, expertise, energy and collective strength, bound by a profound spirit of solidarity.",
      "Leaders from Indigenous communities, themselves deeply affected by racism, by the enduring consequences of radical dispossession and by the persistent ideology of white supremacy over the rest of humanity, will make their voices heard. Their presence matters. Our histories are not the same, but they teach us that recognition, justice and dignity require us to stand, with purpose and by example, alongside one another.",
      "For the first time, Black women from across the country, from all walks of life and across generations — proud, strong and determined — will open a circle for dialogue. What begins here in Winnipeg is filled with promise: a space whose voices, insights and shared experiences may lead us in directions we have yet to imagine. We are convinced that what takes shape here will have meaning and value well beyond this Summit and deserves to be carried forward.",
      "On the very first day, more than 600 young people will once again launch the Summit in their own way and set its tone, with all the energy we know they bring. Their sense of urgency is palpable. Their impatience challenges us. Their ideas compel us to look further ahead. Young people are the beating heart of this movement, and it is for them, and with them, that we must quicken our pace.",
      "We extend our warmest thanks to the Honourable Uzoma Asagwara and the Honourable Jamie Moses, who, together with their teams, have provided unwavering support for the Summit. We are equally grateful to Councillor Markus Chambers, Deputy Mayor of Winnipeg, whose support has been invaluable. Our deepest gratitude goes to Angela Cassie, who has led the remarkable local organizing committee with exceptional insight, and to Winnipeg’s entire Black community, English- and French-speaking alike, whose commitment and tremendous efforts to welcome this Summit we warmly acknowledge.",
      "The program you hold in your hands is rich with vital issues to explore, experiences to share and strategies for action — some already underway, others we must envision and build together. Workshops, plenaries, working sessions, presentations and artistic performances expressing the magnificent power of art as a force for social change are the fruit of meticulous and sustained research, fruitful consultations, proposals received, heard and discussed, and recommendations carefully considered.",
      "Behind this program, above all, is a small and deeply committed team that listened closely, shaped its vision and brought every element together with remarkable care and sustained effort. We salute the extraordinarily dedicated and creative team of the Michaëlle Jean Foundation. The work accomplished has been monumental and speaks to a conviction that has guided us since the very first Summit: nothing concerning Black communities should be done without them. Beyond bearing witness to the realities they face, our communities hold a wealth of knowledge and expertise, solutions grounded in experience and a remarkable capacity to act, to transform and to shape what comes next.",
      "And so, in Winnipeg, we carry the work forward. We come with our memories, our scars and our victories; with the experience of those who came before us and the audacity of those who stand up and claim their place. We come to open up dialogue, challenge ideas, strengthen our networks, deepen our alliances and turn commitments into action.",
      "For nothing we seek is for ourselves alone. Eradicating racial discrimination serves the common good. It speaks to the society we want to build together, to the quality of our democracy, to expanding opportunities and initiatives for development and to our capacity to fully honour the humanity and the values we all share.",
      "Here we are in Winnipeg, united and determined.",
      "Recognition. Justice. Development.",
      "The movement is underway. We will not back down.",
    ],
    paragraphsFr: [
      "Ce qui nous saisit grandement, profondément, d’une édition à l’autre du Sommet pancanadien des communautés noires, c’est le déroulement de la parole, la charge de tant d’expériences, d’histoires, de réalités, dans toute leur pluralité. Surgissent et se croisent dans chacun de nos rassemblements des témoignages d’implantations et d’enracinements plusieurs fois centenaires au Canada; des parcours d’immigration, de déchirements dans l’exil ou d’arrivées plus récentes. Dans le timbre des voix et la force des mots résonnent des siècles de résistance, de luttes d’émancipation et de combats incessants contre le racisme qui demeure — nous ne cesserons de le dire et de le dénoncer — l’une des formes les plus persistantes et dévastatrices d’exclusion.",
      "Nulle part nous ne pouvons baisser la garde devant ces agressions, manifestes ou insidieuses, qui s’infiltrent partout, jusque dans les dérives fréquentes des forces de police, dans le fonctionnement du système de justice pénale, dans les institutions publiques comme dans les entreprises privées, dans les milieux de travail, les mentalités, les perceptions, les non-dits, les attitudes et les comportements. Les nommer, les documenter, les combattre, c’est refuser leur banalisation. Nous exigeons que la dignité, l’égalité et l’équité cessent d’être des promesses différées.",
      "Ce 5e Sommet pancanadien des communautés noires pour l’éradication de la discrimination raciale, qui se tient à Winnipeg du 18 au 20 septembre 2026, à l’invitation pressante du premier ministre du Manitoba, l’honorable Wab Kinew, que nous remercions chaleureusement ainsi que son gouvernement, sera de nouveau le lieu d’une impressionnante mobilisation de forces vives, d’expertises solides, d’énergies et de synergies portées par un profond esprit de solidarité.",
      "Des leaders des communautés autochtones, elles aussi durement frappées par le racisme, par les séquelles d’une dépossession radicale et par l’idéologie persistante de la suprématie de la race blanche sur le reste de l’humanité, feront entendre leurs voix. Leur présence compte. Nos histoires ne sont pas identiques, mais elles nous enseignent combien la reconnaissance, la justice et la dignité exigent que nous sachions nous tenir, de manière exemplaire, les uns aux côtés des autres.",
      "Pour la première fois également, des femmes noires de tout le pays, de tous les horizons et de toutes les générations, fières, fortes et déterminées, ouvriront un cercle de parole. Cette initiative, qui prend son envol à Winnipeg avec cœur et dans une vive attente de ce qu’elle fera naître, saura nous surprendre. Ce qu’elle produira, nous en sommes convaincus, méritera de s’inscrire dans la durée.",
      "Plus de 600 jeunes, dès la première journée, donneront de nouveau à leur façon le coup d’envoi du Sommet et en établiront le ton, avec cette vigueur que nous leur connaissons. Leur sentiment d’urgence est palpable. Leurs impatiences nous interpellent. Leurs idées nous obligent à regarder plus loin. La jeunesse est le cœur battant du mouvement, et c’est aussi pour elle, avec elle, que nous devons accélérer le pas.",
      "Nous tenons à remercier très chaleureusement l’honorable Uzoma Asagwara et l’honorable Jamie Moses qui, avec leurs équipes, ont accordé un soutien indéfectible au Sommet. Toute notre reconnaissance va également au conseiller municipal Markus Chambers, adjoint au maire de Winnipeg, dont l’appui a été des plus précieux. Nous disons toute notre gratitude à Angela Cassie, qui a présidé avec une remarquable perspicacité le formidable comité local d’organisation, ainsi qu’à toute la communauté noire de Winnipeg, anglophone et francophone, dont nous saluons l’engagement et l’immense travail entrepris pour accueillir ce Sommet.",
      "Le programme que vous tenez entre vos mains abonde en sujets de réflexion essentiels, en expériences à partager, en stratégies d’action, certaines déjà à l’œuvre, d’autres qu’il nous faudra envisager et construire collectivement. Ateliers, plénières, séances de travail, prises de parole et performances artistiques, qui expriment ce magnifique pouvoir de l’art comme force de changement social, sont le fruit de recherches minutieuses et incessantes, de consultations fécondes, de propositions reçues, entendues et discutées et de recommandations retenues.",
      "Derrière ce programme, il y a surtout une petite équipe profondément engagée, qui a imaginé, écouté, organisé et su tout coordonner avec une application remarquable, au prix d’efforts soutenus. Nous voulons saluer ainsi la très vaillante et créative équipe de la Fondation Michaëlle Jean. Le travail accompli est monumental et témoigne d’une conviction qui nous anime depuis le premier Sommet : rien de ce qui concerne les communautés noires ne doit se faire sans elles, car, au-delà des constats, elles sont riches de savoirs, d’expertises, de solutions et d’une formidable capacité d’action et de transformation.",
      "À Winnipeg, nous poursuivons donc le chemin. Nous venons avec nos mémoires, nos blessures et nos victoires; avec l’expérience de celles et ceux qui nous ont précédés et l’audace de celles et ceux qui arrivent, toujours debout. Nous venons pour faire circuler la parole, confronter les idées, renforcer nos réseaux, consolider nos alliances et transformer les engagements en actions.",
      "Car rien de ce que nous réclamons n’est que pour nous-mêmes. L’éradication de la discrimination raciale relève du bien commun. Elle touche à la société que nous voulons bâtir ensemble, à la qualité de notre démocratie, à l’élargissement de nos possibilités et de nos initiatives de développement et à notre capacité de faire pleinement droit à cette humanité et à ces valeurs que nous avons en partage.",
      "Nous voici donc à Winnipeg, rassemblés, déterminés.",
      "Reconnaissance. Justice. Développement.",
      "Le mouvement est en marche. Nous ne reculerons pas.",
    ],
    signatureEn: [
      "The Right Honourable Michaëlle Jean and Jean-Daniel Lafond",
      "Co-founders and Co-Chairs of the Michaëlle Jean Foundation",
    ],
    signatureFr: [
      "La très honorable Michaëlle Jean et Jean-Daniel Lafond",
      "Cofondateurs et coprésidents de la Fondation Michaëlle Jean",
    ],
    image: "/cofounders-DSC03857.webp",
    imageAltEn:
      "Michaëlle Jean and Jean-Daniel Lafond together at the National Black Canadians Summit",
    imageAltFr:
      "Michaëlle Jean et Jean-Daniel Lafond ensemble au Sommet pancanadien des communautés noires",
  },
  {
    id: "host-committee-chair",
    image: "/angela-cassie.jpg",
    portrait: true,
    imageAltEn: "Angela Cassie",
    imageAltFr: "Angela Cassie",
    labelEn: "A message from the Summit Chair",
    labelFr: "Un mot de la présidente du Sommet",
    titleEn:
      "A Message from the Chair of the 5th National Black Canadians Summit",
    titleFr:
      "Un mot de la présidente du 5e Sommet pancanadien des communautés noires",
    paragraphsEn: [
      "On behalf of the Manitoba Host Committee, welcome to the 5th National Black Canadians Summit for the Elimination of Racial Discrimination.",
      "Why Manitoba, and why now?",
      "Wînipêk—Winnipeg, Manitoba has long been a meeting place. For thousands of years, Indigenous Peoples gathered where the Red and Assiniboine rivers meet for trade and the exchange of knowledge. Today, people from across Canada and around the world continue to meet here, bringing different histories, cultures and perspectives.",
      "People of African descent have been part of Manitoba’s story for generations. In the face of racism, exclusion and systemic barriers, we have built families, businesses and faith communities; enriched arts and culture; and strengthened public institutions. We have organized, resisted and fought for justice and equality, helping shape this province. Manitoba’s human rights history shows that progress is possible when people speak with courage and act together. Yet, the work remains unfinished.",
      "We honour those who came before us by carrying their courage, wisdom and aspirations into the future.",
      "The Manifesto for the Eradication of Racial Discrimination: Halifax Declaration gives that journey a clear direction: Recognition. Justice. Development. These principles invite us to imagine a Canada in which every person can live a life with dignity, safety, opportunity and belonging and challenge us to build it.",
      "May this Summit be a place of honest dialogue, connection and determined action. Together, let us learn from the past, strengthen our collective voice and shape the legacy we will leave for generations to come.",
      "Welcome. Join the movement. Let us move forward together.",
    ],
    paragraphsFr: [
      "Au nom du comité hôte du Manitoba, bienvenue au 5e Sommet pancanadien des communautés noires pour l’élimination de la discrimination raciale.",
      "Pourquoi le Manitoba, et pourquoi maintenant?",
      "Wînipêk—Winnipeg, au Manitoba, est depuis longtemps un lieu de rencontre. Pendant des milliers d’années, les peuples autochtones se sont rassemblés au confluent des rivières Rouge et Assiniboine pour commercer et échanger des connaissances. Aujourd’hui, des personnes venues de partout au Canada et dans le monde continuent de s’y rencontrer, porteuses d’histoires, de cultures et de perspectives différentes.",
      "Les personnes d’ascendance africaine font partie de l’histoire du Manitoba depuis des générations. Face au racisme, à l’exclusion et aux obstacles systémiques, nous avons fondé des familles, des entreprises et des communautés de foi; enrichi les arts et la culture; et renforcé les institutions publiques. Nous nous sommes organisés, nous avons résisté et lutté pour la justice et l’égalité, contribuant ainsi à façonner cette province. L’histoire des droits de la personne au Manitoba montre que le progrès est possible lorsque les gens parlent avec courage et agissent ensemble. Pourtant, le travail demeure inachevé.",
      "Nous honorons celles et ceux qui nous ont précédés en portant leur courage, leur sagesse et leurs aspirations vers l’avenir.",
      "Le Manifeste pour l’éradication de la discrimination raciale : Déclaration d’Halifax donne une orientation claire à ce parcours : Reconnaissance. Justice. Développement. Ces principes nous invitent à imaginer un Canada où chaque personne peut vivre dans la dignité, la sécurité, avec des possibilités et un sentiment d’appartenance, et nous mettent au défi de le bâtir.",
      "Puisse ce Sommet être un lieu de dialogue franc, de rapprochement et d’action déterminée. Ensemble, tirons les leçons du passé, renforçons notre voix collective et façonnons l’héritage que nous laisserons aux générations à venir.",
      "Bienvenue. Joignez-vous au mouvement. Allons de l’avant ensemble.",
    ],
    signatureEn: ["Angela J. Cassie", "Chair, Manitoba Host Committee"],
    signatureFr: ["Angela J. Cassie", "Présidente, comité hôte du Manitoba"],
  },
  {
    id: "mayor",
    image: "/mayor-scott-gillingham.png",
    portrait: true,
    imageAltEn: "Mayor Scott Gillingham",
    imageAltFr: "Le maire Scott Gillingham",
    logo: "/city-winnipeg-logo.jpg",
    logoAltEn: "City of Winnipeg",
    logoAltFr: "Ville de Winnipeg",
    labelEn: "A message from the Mayor of Winnipeg",
    labelFr: "Un mot du maire de Winnipeg",
    titleEn: "A Message from the Mayor of Winnipeg",
    titleFr: "Un mot du maire de Winnipeg",
    paragraphsEn: [
      "On behalf of the City of Winnipeg, it is my pleasure to welcome delegates from across Canada to the National Black Canadians Summit.",
      "Winnipeg is proud of the many Black communities, leaders, entrepreneurs, artists, students, families, and organizations that contribute to the life of our city. Their contributions have made Winnipeg a stronger, more vibrant, and welcoming city.",
      "This Summit is a perfect opportunity to recognize the many contributions of Black Canadians, share experiences and ideas, and talk about the work that still needs to be done. I hope you have a meaningful Summit and enjoy your time in Winnipeg.",
    ],
    paragraphsFr: [
      "Au nom de la Ville de Winnipeg, j’ai le plaisir d’accueillir au Sommet pancanadien des communautés noires les personnes déléguées venues de partout au Canada.",
      "Winnipeg est fière de ses nombreuses communautés noires et des leaders, entrepreneurs, artistes, étudiantes et étudiants, familles et organismes qui contribuent à la vie de notre ville. Leurs contributions font de Winnipeg une ville plus forte, plus dynamique et plus accueillante.",
      "Ce Sommet est une occasion privilégiée de reconnaître les nombreuses contributions des communautés noires du Canada, d’échanger des expériences et des idées et de discuter du travail qui reste à accomplir. Je vous souhaite un Sommet riche de sens et un agréable séjour à Winnipeg.",
    ],
    signatureEn: ["Scott Gillingham", "Mayor, City of Winnipeg"],
    signatureFr: ["Scott Gillingham", "Maire, Ville de Winnipeg"],
  },
  {
    id: "province",
    image: "https://www.gov.mb.ca/legislature/img/mla/moses.jpg",
    portrait: true,
    imageAltEn: "Minister Jamie Moses",
    imageAltFr: "Le ministre Jamie Moses",
    logo: "/manitoba-logo.png",
    logoAltEn: "Province of Manitoba",
    logoAltFr: "Province du Manitoba",
    labelEn: "A message from the Province of Manitoba",
    labelFr: "Un mot de la Province du Manitoba",
    titleEn: "A message On behalf of the Province of Manitoba - Minister Jamie Moses",
    titleFr: "Un mot au nom de la Province du Manitoba - Le ministre Jamie Moses",
    paragraphsEn: [
      "On behalf of Premier Wab Kinew and the Province of Manitoba, it is my great pleasure to welcome you to Winnipeg for the 2026 National Black Canadians Summit.",
      "For decades, Black Canadians have made extraordinary contributions to our province and our country as entrepreneurs, artists, educators, community leaders, public servants, innovators and so much more. Their leadership has strengthened our communities and helps drive our collective future.",
      "Here in Manitoba, we are committed to working together with our vibrant and diverse Black community to ensure those contributions are recognized and supported by real opportunities to succeed. This means confronting systemic barriers. It means supporting Black-owned and Black-led businesses, creating pathways to good jobs, and investing in young people. This means ensuring more voices are represented wherever decisions are made.",
      "These priorities are central to this year’s theme, “Moving Forward Together,” which is an important call to action reminding us that progress is strongest when it includes universal participation. That spirit of shared participation and progress has continually reflected itself in the many contributions Black Canadians have made, and continue to make, across our province and country.",
      "It’s especially inspiring to see this Summit place young people, economic empowerment, and culture and dialogue at the heart of its program. It is our hope that the collaborative conversations at this year’s Summit lead to meaningful partnerships, and that those partnerships lead to lasting progress for all of us in Canada.",
      "Thank you to the Michaëlle Jean Foundation, the organizers, volunteers, speakers and delegates who have brought this national gathering to Manitoba.",
      "Welcome to Winnipeg. We wish you a memorable and fruitful Summit.",
    ],
    paragraphsFr: [
      "Au nom du premier ministre Wab Kinew et de la Province du Manitoba, j’ai le grand plaisir de vous accueillir à Winnipeg à l’occasion du Sommet pancanadien des communautés noires 2026.",
      "Depuis des décennies, les communautés noires du Canada apportent des contributions extraordinaires à notre province et à notre pays comme entrepreneures et entrepreneurs, artistes, membres du personnel enseignant, leaders communautaires, fonctionnaires, innovatrices et innovateurs, et bien plus encore. Leur leadership renforce nos communautés et contribue à façonner notre avenir collectif.",
      "Ici, au Manitoba, nous nous engageons à travailler avec notre communauté noire, dynamique et diversifiée, afin que ces contributions soient reconnues et soutenues par de véritables possibilités de réussite. Cela signifie affronter les obstacles systémiques, soutenir les entreprises appartenant à des personnes noires et dirigées par elles, créer des voies d’accès à de bons emplois et investir dans la jeunesse. Cela signifie aussi veiller à ce qu’un plus grand nombre de voix soient représentées partout où les décisions sont prises.",
      "Ces priorités sont au cœur du thème de cette année, « Ensemble, allons de l’avant », un important appel à l’action qui nous rappelle que le progrès est plus solide lorsqu’il repose sur la participation de toutes et de tous. Cet esprit de participation et de progrès partagés se reflète depuis toujours dans les nombreuses contributions que les communautés noires du Canada ont apportées, et continuent d’apporter, partout dans notre province et notre pays.",
      "Il est particulièrement inspirant de voir ce Sommet placer la jeunesse, l’autonomisation économique, la culture et le dialogue au cœur de son programme. Nous espérons que les conversations collaboratives de cette année donneront naissance à des partenariats porteurs et que ces partenariats contribueront à des progrès durables pour nous toutes et tous au Canada.",
      "Merci à la Fondation Michaëlle Jean, aux organisatrices et organisateurs, aux bénévoles, aux conférencières et conférenciers ainsi qu’aux personnes déléguées qui ont rendu possible ce rassemblement national au Manitoba.",
      "Bienvenue à Winnipeg. Nous vous souhaitons un Sommet mémorable et fructueux.",
    ],
    signatureEn: ["Province of Manitoba"],
    signatureFr: ["Province du Manitoba"],
  },
];
