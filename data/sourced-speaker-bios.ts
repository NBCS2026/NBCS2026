import type { SpeakerProfile } from "./speaker-profiles";

// Short biographies paraphrased from the linked sources, added with approval
// September 11, 2026. Historical roles are described in the past tense.
// These fill missing biographies only; supplied biographies take precedence.
export const SOURCED_SPEAKER_BIOS: (SpeakerProfile & { sources: string[] })[] = [
  {
    name: "Justin Holness",
    bioEn: "Justin Holness, known artistically as Jah’kota, is an Afro-Indigenous musician and entrepreneur raised in Winnipeg. His Jamaican and Nakota/Assiniboine roots inform a creative practice centred on culture, resilience and community. Through music and his work in entrepreneurship and financial empowerment, he encourages people to build opportunities grounded in their identities and strengths.",
    bioFr: "Justin Holness, connu sous le nom artistique Jah’kota, est un musicien et entrepreneur afro-autochtone qui a grandi à Winnipeg. Ses racines jamaïcaines et nakotas/assiniboines nourrissent une démarche axée sur la culture, la résilience et la communauté. Sa musique et son travail en entrepreneuriat et en autonomisation financière encouragent chacun à créer des possibilités à partir de son identité et de ses forces.",
    sources: ["https://www.jahkotamusic.com/"],
  },
  {
    name: "Candies Kotchapaw",
    bioEn: "Candies Kotchapaw is an entrepreneur and community advocate whose work connects social policy, equity and leadership development. With a background in social work, she has created pathways for Black young professionals to participate in public policy and diplomacy. Her work has received national recognition, including selection among Canada’s Top 25 Women of Influence.",
    bioFr: "Candies Kotchapaw est une entrepreneure et une militante communautaire dont le travail relie politiques sociales, équité et développement du leadership. Issue du travail social, elle a créé des possibilités de participation aux politiques publiques et à la diplomatie pour de jeunes professionnels noirs. Son engagement lui a notamment valu une place parmi les 25 femmes d’influence au Canada.",
    sources: ["https://casafoundation.ca/candies-kotchapaw/"],
  },
  {
    name: "Kadene Massop",
    bioEn: "Kadene Massop founded the Viola Desmond Justice Institute. A social worker from Montréal, she holds a master’s degree in social work and has studied criminology, criminal justice and law. Her work includes training in Impact of Race and Culture Assessments and supporting access to this expertise in both French and English.",
    bioFr: "Kadene Massop a fondé l’Institut de justice Viola Desmond. Travailleuse sociale originaire de Montréal, elle détient une maîtrise en travail social et a étudié la criminologie, la justice pénale et le droit. Son travail comprend la formation aux évaluations de l’incidence de l’origine ethnique et culturelle et l’accès à cette expertise en français et en anglais.",
    sources: ["https://violadesmondjustice.ca/vdji-team"],
  },
  {
    name: "Shekara Grant",
    bioEn: "Shekara Grant founded the Weymouth Falls Community Land Trust and became its first Executive Lead in June 2026. An eighth-generation descendant of Weymouth Falls, she works to preserve African Nova Scotian heritage and strengthen community stewardship of land. Her leadership supports climate resilience and opportunities for present and future generations.",
    bioFr: "Shekara Grant a fondé le Weymouth Falls Community Land Trust et en est devenue la première responsable exécutive en juin 2026. Descendante de huitième génération de Weymouth Falls, elle œuvre à la préservation du patrimoine afro-néo-écossais et à la gestion communautaire des terres. Son engagement soutient la résilience climatique et les possibilités offertes aux générations présentes et futures.",
    sources: ["https://www.weymouthfalls.ca/weymouth-falls-community-land-trust-announces-appointment-of-shekara-grant-as-executive-lead/"],
  },
  {
    name: "Oyíndàmọ́lá Aláká",
    bioEn: "Oyíndàmọ́lá Aláká is a Nigerian-born community organizer and creative strategist with a degree in women’s and gender studies from the University of Manitoba. She co-founded NOIR Professionals to build connections and opportunities for Black professionals in Canada. Her community work earned the Manitoba Human Rights Commission’s Sybil Shack Human Rights Youth Award in 2019.",
    bioFr: "Oyíndàmọ́lá Aláká est une organisatrice communautaire et stratège créative née au Nigeria, diplômée en études des femmes et du genre de l’Université du Manitoba. Elle a cofondé NOIR Professionals pour créer des liens et des possibilités pour les professionnels noirs au Canada. Son engagement lui a valu le prix jeunesse Sybil-Shack de la Commission des droits de la personne du Manitoba en 2019.",
    sources: ["https://manitobabookawards.ca/wp-content/uploads/2023/06/MBA-Jury-Bios-2023.pdf"],
  },
  {
    name: "The Right Honourable Michaëlle Jean",
    bioEn: "The Right Honourable Michaëlle Jean served as Canada’s 27th Governor General from 2005 to 2010, following a career in journalism and broadcasting in French and English. In 2010, she and Jean-Daniel Lafond established the Michaëlle Jean Foundation. The Foundation supports young people facing exclusion through the arts, civic engagement and community action.",
    bioFr: "La très honorable Michaëlle Jean a été la 27e gouverneure générale du Canada, de 2005 à 2010, après une carrière en journalisme et en radiodiffusion en français et en anglais. En 2010, elle et Jean-Daniel Lafond ont créé la Fondation Michaëlle Jean. La Fondation soutient les jeunes confrontés à l’exclusion par les arts, l’engagement citoyen et l’action communautaire.",
    sources: ["https://www.michaellejean.ca/biographie-mjean"],
  },
  {
    name: "Dr. Tasha Spillett",
    bioEn: "Dr. Tasha Spillett is a Cree and Trinidadian author, educator and scholar. Her books include the Surviving the City graphic novel series and the New York Times bestseller I Sang You Down from the Stars. Her writing, research and teaching centre Indigenous women, children and communities, connecting storytelling with education and collective liberation.",
    bioFr: "La Dre Tasha Spillett est une autrice, pédagogue et chercheuse d’ascendance crie et trinidadienne. Elle a notamment signé la série de romans graphiques Surviving the City et I Sang You Down from the Stars, un succès de librairie du New York Times. Son écriture, ses recherches et son enseignement placent les femmes, les enfants et les communautés autochtones au cœur d’une démarche reliant récit, éducation et libération collective.",
    sources: ["https://tashaspillett.com/about/"],
  },
  {
    name: "Patricia Bitu Tshikudi",
    bioEn: "Patricia Bitu Tshikudi became Executive Director of the Centre culturel franco-manitobain in July 2025. Originally from the Democratic Republic of the Congo and raised in Montréal, she studied journalism and communications at UQAM. Her broadcasting career in Winnipeg included cultural reporting, television news and radio production, reflecting her commitment to francophone cultural life.",
    bioFr: "Patricia Bitu Tshikudi est devenue directrice générale du Centre culturel franco-manitobain en juillet 2025. Originaire de la République démocratique du Congo, elle a grandi à Montréal et étudié le journalisme et les communications à l’UQAM. Sa carrière médiatique à Winnipeg comprend le journalisme culturel, la présentation de nouvelles télévisées et la production radiophonique, témoignant de son engagement envers la vie culturelle francophone.",
    sources: ["https://nac-cna.ca/en/bio/patricia-bitu-tshikudi"],
  },
  {
    name: "Dr. Niigaanwewidam Sinclair",
    bioEn: "Dr. Niigaanwewidam Sinclair is an Anishinaabe scholar, writer and editor based in Winnipeg. A professor of Indigenous studies at the University of Manitoba, he has also led the department and contributed a regular newspaper column. His public scholarship addresses education, politics and reconciliation, bringing Indigenous perspectives into classrooms and public discussion.",
    bioFr: "Le Dr Niigaanwewidam Sinclair est un universitaire, écrivain et éditeur anishinaabe établi à Winnipeg. Professeur d’études autochtones à l’Université du Manitoba, il a également dirigé le département et signé une chronique régulière dans la presse. Ses interventions sur l’éducation, la politique et la réconciliation font connaître les perspectives autochtones dans l’enseignement et le débat public.",
    sources: ["https://www.queensu.ca/principal/inaugural-chancellor-emeritus-murray-sinclair-commemorative-lecture-and-portrait-unveiling", "https://umanitoba.ca/sites/default/files/2023-10/dr-niigaan-sinclair-transcript.pdf"],
  },
  {
    name: "Anita Neville",
    bioEn: "Anita Neville is Manitoba’s Lieutenant Governor. Born and raised in Winnipeg, she has a long record of public service in education and government. She served as a Winnipeg School Division trustee and board chair before representing Winnipeg South Centre in Parliament from 2000 to 2011, including service as Parliamentary Secretary for Canadian Heritage and Status of Women.",
    bioFr: "Anita Neville est lieutenante-gouverneure du Manitoba. Née et élevée à Winnipeg, elle possède une longue expérience de service public en éducation et au gouvernement. Elle a été commissaire et présidente du conseil de la Division scolaire de Winnipeg avant de représenter Winnipeg-Centre-Sud au Parlement de 2000 à 2011, notamment comme secrétaire parlementaire pour le Patrimoine canadien et la Condition féminine.",
    sources: ["https://manitobalg.ca/role/biography-of-lieutenant-governor/"],
  },
  {
    name: "Markus Chambers",
    bioEn: "Markus Chambers represents St. Norbert–Seine River on Winnipeg City Council and served as Deputy Mayor from 2018 to 2020. His earlier public-service work supported marginalized youth, employment assistance and immigration through Manitoba’s Provincial Nominee Program. He has also volunteered extensively in community sport, parks, the United Way and human rights initiatives.",
    bioFr: "Markus Chambers représente Saint-Norbert–Rivière-Seine au conseil municipal de Winnipeg et a été maire adjoint de 2018 à 2020. Auparavant, son travail dans la fonction publique portait sur les jeunes marginalisés, l’aide à l’emploi et l’immigration, notamment au Programme des candidats du Manitoba. Il s’est également engagé bénévolement dans le sport communautaire, les parcs, Centraide et les droits de la personne.",
    sources: ["https://markuschambers.ca/about-markus/"],
  },
  {
    name: "Kamil Jones Strachan",
    bioEn: "Kamil Jones Strachan is a Winnipeg singer and pianist who has performed with the Winnipeg Boys’ Choir. His musical achievements were recognized in the Manitoba Legislature in 2023, including the Stewart M. Thomson trophy for young vocalists and selection as a finalist in the Royal Conservatory’s Music Lights the Way Piano Festival.",
    bioFr: "Kamil Jones Strachan est un chanteur et pianiste de Winnipeg qui a chanté avec le Winnipeg Boys’ Choir. Ses réalisations musicales ont été soulignées à l’Assemblée législative du Manitoba en 2023, notamment le trophée Stewart-M.-Thomson pour jeunes chanteurs et sa sélection comme finaliste du festival de piano Music Lights the Way du Conservatoire royal.",
    sources: ["https://www.gov.mb.ca/legislature/hansard/42nd_5th/vol_29/h29.html"],
  },
  {
    name: "Gary Clement",
    bioEn: "Gary Clement is a government relations professional at TD, which he joined in 2003. His experience spans banking and public service, including advisory roles in Ontario’s provincial government and work with federal institutions. He holds a degree in political studies from the University of Guelph and brings experience connecting public policy with business priorities.",
    bioFr: "Gary Clement travaille en relations gouvernementales à TD, où il est entré en 2003. Son parcours conjugue secteur bancaire et service public, notamment des fonctions de conseil au gouvernement de l’Ontario et auprès d’institutions fédérales. Diplômé en études politiques de l’Université de Guelph, il possède une expérience des liens entre politiques publiques et priorités des entreprises.",
    sources: ["https://cabc.co/wp-content/uploads/2025/09/CABCBOD_Bios_2025_09.pdf"],
  },
  {
    name: "Jully Black",
    bioEn: "Jully Black is a Canadian singer and songwriter whose career spans R&B, soul and pop. A Juno and Gemini Award recipient, she has released platinum-selling music and written for other major recording artists. Inducted into Canada’s Walk of Fame in 2021, she also brings her voice to philanthropic and community causes in Canada and internationally.",
    bioFr: "Jully Black est une chanteuse et autrice-compositrice canadienne dont le parcours traverse le R&B, la soul et la pop. Lauréate de prix Juno et Gemini, elle a réalisé des enregistrements certifiés platine et écrit pour d’autres artistes de premier plan. Intronisée à l’Allée des célébrités canadiennes en 2021, elle soutient aussi des causes philanthropiques et communautaires au Canada et à l’étranger.",
    sources: ["https://www.canadaswalkoffame.com/inductees/jully-black/"],
  },
  {
    name: "Andrew Brown",
    bioEn: "Andrew Brown became Associate Deputy Minister of Canadian Heritage in May 2024. He previously held senior positions at Employment and Social Development Canada, working on early learning and child care and initiatives supporting Black communities. His federal career also includes the Privy Council Office and immigration policy. He holds a doctorate in physics from the University of Alberta.",
    bioFr: "Andrew Brown est devenu sous-ministre délégué du Patrimoine canadien en mai 2024. Il a auparavant occupé des postes de direction à Emploi et Développement social Canada, notamment dans l’apprentissage et la garde des jeunes enfants et les initiatives destinées aux communautés noires. Son parcours fédéral comprend aussi le Bureau du Conseil privé et les politiques d’immigration. Il détient un doctorat en physique de l’Université de l’Alberta.",
    sources: ["https://www.canada.ca/en/canadian-heritage/corporate/organization-structure/associate-deputy-minister.html"],
  },
  {
    name: "Dr. Bukola Salami",
    bioEn: "Dr. Bukola Salami is a professor in the University of Calgary’s Department of Community Health Sciences and holds a Canada Research Chair in Black and Racialized Peoples’ Health. Trained in nursing, she researches the health of Black and immigrant populations. She previously taught at the University of Alberta and earned her doctorate in nursing at the University of Toronto.",
    bioFr: "La Dre Bukola Salami est professeure au Département des sciences de la santé communautaire de l’Université de Calgary et titulaire d’une Chaire de recherche du Canada sur la santé des personnes noires et racisées. Formée en sciences infirmières, elle étudie la santé des populations noires et immigrantes. Elle a auparavant enseigné à l’Université de l’Alberta et obtenu son doctorat en sciences infirmières à l’Université de Toronto.",
    sources: ["https://profiles.ucalgary.ca/oluwabukola-salami"],
  },
  {
    name: "Suze Youance",
    bioEn: "Suze Youance is a civil engineer, educator and researcher appointed to the Senate of Canada in 2024. Originally from Haiti, she has worked in infrastructure and environmental projects and taught at Montréal’s École de technologie supérieure. She holds a doctorate in construction engineering and has supported women in engineering and Montréal’s Haitian community through volunteer leadership.",
    bioFr: "Suze Youance est une ingénieure civile, enseignante et chercheuse nommée au Sénat du Canada en 2024. Originaire d’Haïti, elle a travaillé sur des projets d’infrastructure et d’environnement et enseigné à l’École de technologie supérieure de Montréal. Titulaire d’un doctorat en génie de la construction, elle a aussi soutenu bénévolement les femmes en génie et la communauté haïtienne de Montréal.",
    sources: ["https://www.pm.gc.ca/en/news/backgrounders/2024/09/25/suze-youance", "https://www.pm.gc.ca/en/news/news-releases/2024/09/25/prime-minister-announces-appointment-senator"],
  },
  {
    name: "Dr. Felicia Masenu",
    bioEn: "Dr. Felicia Masenu is a social researcher whose experience spans qualitative and quantitative research, program evaluation and community development. She has worked across academic, policy and nonprofit settings in Ghana, Canada and Europe. She holds a doctorate in anthropology from the University of Manitoba and a master’s degree in comparative social research.",
    bioFr: "La Dre Felicia Masenu est une chercheuse en sciences sociales dont l’expérience couvre la recherche qualitative et quantitative, l’évaluation de programmes et le développement communautaire. Elle a travaillé dans les milieux universitaires, les politiques publiques et les organismes sans but lucratif au Ghana, au Canada et en Europe. Elle détient un doctorat en anthropologie de l’Université du Manitoba et une maîtrise en recherche sociale comparative.",
    sources: ["https://marketresearch.com.gh/zt_team/f-masenu/"],
  },
  {
    name: "Liza Arnason",
    bioEn: "Liza Arnason founded the ASE Community Foundation for Black Canadians with Disabilities. An educator, administrator and consultant with extensive experience in equity work, she connects research, policy and advocacy. Her approach draws on Black feminist thought and disability justice, examining how race, gender and disability shape access, participation and belonging.",
    bioFr: "Liza Arnason a fondé l’ASE Community Foundation for Black Canadians with Disabilities. Éducatrice, administratrice et consultante possédant une vaste expérience en équité, elle relie recherche, politiques et défense des droits. Sa démarche s’appuie sur le féminisme noir et la justice pour les personnes handicapées, en examinant les liens entre race, genre, handicap, accès, participation et appartenance.",
    sources: ["https://www.dal.ca/about/mission-vision-values/equity-diversity-inclusion-and-accessibility/about-office-equity-inclusion/events-campaigns-speaker-series/human-rights-and-equity-conference.html"],
  },
  {
    name: "Hafiz Jatto",
    bioEn: "Hafiz Jatto joined the Sexuality Education Resource Centre as Director of Programs in May 2026. With more than a decade of experience across community organizations, nonprofits and government in Winnipeg, Hafiz has worked on program design, partnerships and community investment. Previous roles include work with the Social Planning Council of Winnipeg and the Occupational Health Centre.",
    bioFr: "Hafiz Jatto a rejoint le Sexuality Education Resource Centre à la direction des programmes en mai 2026. Son parcours de plus de dix ans dans les milieux communautaires, les organismes sans but lucratif et le gouvernement à Winnipeg comprend la conception de programmes, les partenariats et l’investissement communautaire. Hafiz a notamment travaillé au Social Planning Council of Winnipeg et à l’Occupational Health Centre.",
    sources: ["https://serc.mb.ca/serc-welcomes-hafiz-jatto-as-director-of-programs/"],
  },
  {
    name: "Laurelle A. Harris",
    bioEn: "Laurelle A. Harris, KC, is a lawyer and the inaugural director of the Internationally Trained Lawyer Program and Equity Transformation at the University of Manitoba’s law faculty. Her work includes litigation, equity reviews, investigations and organizational policy. She led the systemic racism review at the Canadian Museum for Human Rights and was appointed King’s Counsel in 2023.",
    bioFr: "Laurelle A. Harris, c.r., est avocate et première directrice du programme pour juristes formés à l’étranger et de la transformation en matière d’équité à la Faculté de droit de l’Université du Manitoba. Son travail comprend le contentieux, les examens d’équité, les enquêtes et les politiques organisationnelles. Elle a dirigé l’examen du racisme systémique au Musée canadien pour les droits de la personne et a été nommée conseillère du Roi en 2023.",
    sources: ["https://umanitoba.ca/law/faculty-staff/laurelle-harris"],
  },
  {
    name: "Mohamed Hashim",
    bioEn: "Hashim leads the Canadian Race Relations Foundation and brings more than two decades of experience in human rights advocacy. His work spans civil society, government and the labour movement, with a focus on confronting racism and hate. He has helped build partnerships and public-policy responses that support inclusion, community trust and collective action.",
    bioFr: "Hashim dirige la Fondation canadienne des relations raciales et possède plus de vingt ans d’expérience dans la défense des droits de la personne. Son parcours traverse la société civile, le gouvernement et le mouvement syndical, avec un engagement contre le racisme et la haine. Il contribue à des partenariats et à des réponses publiques favorisant l’inclusion, la confiance communautaire et l’action collective.",
    sources: ["https://crrf-fcrr.ca/people/mohammed-hashim/"],
  },
  {
    name: "Harun Kibirige",
    bioEn: "Harun Kibirige is Assistant Vice President, Global Investments, at Canada Life. A CPA, CA, he joined Canada Life in 2013 after working with Deloitte and BDO. His community service has included leadership and financial stewardship with immigrant-serving organizations and the Manitoba Museum. CPA Manitoba recognized his volunteer contributions with its Distinguished Service Award in 2024.",
    bioFr: "Harun Kibirige est vice-président adjoint, Investissements mondiaux, à Canada Life. CPA, CA, il a rejoint Canada Life en 2013 après avoir travaillé chez Deloitte et BDO. Son engagement communautaire comprend des responsabilités de direction et de gestion financière auprès d’organismes au service des immigrants et du Musée du Manitoba. CPA Manitoba a reconnu son bénévolat par son prix pour services distingués en 2024.",
    sources: ["https://cpamb.ca/common/Uploaded%20files/Members/Member%20Recognition%20Program/2024-Member-Recognition-Program-Spotlight.pdf"],
  },
  {
    name: "Angela Cassie",
    bioEn: "Angela Cassie is a cultural leader with experience in national museums, public administration and francophone community organizations. She served as interim Director and CEO of the National Gallery of Canada in 2022–2023, following senior roles there and at the Canadian Museum for Human Rights. Her earlier career included leadership at Canadian Heritage in the Prairies and North.",
    bioFr: "Angela Cassie est une dirigeante du secteur culturel dont l’expérience comprend les musées nationaux, l’administration publique et les organismes communautaires francophones. Elle a été directrice générale intérimaire du Musée des beaux-arts du Canada en 2022–2023, après des fonctions de direction dans ce musée et au Musée canadien pour les droits de la personne. Elle a aussi occupé des fonctions de direction à Patrimoine canadien dans les Prairies et le Nord.",
    sources: ["https://www.gallery.ca/sites/default/files/upload/ngc_annual_report_2022-23_en.pdf"],
  },
  {
    name: "Kevin Junor",
    bioEn: "Kevin Junor is a Canadian Army veteran whose reserve service with the Toronto Scottish Regiment spanned several decades. Born in the United Kingdom and raised in Jamaica before moving to Canada, he served from 1980 to 2014 and returned from 2018 to 2023. His account in the Canadian War Museum’s oral-history project reflects on military service, leadership and belonging.",
    bioFr: "Kevin Junor est un ancien militaire de l’Armée canadienne dont le service dans la réserve au Toronto Scottish Regiment s’étend sur plusieurs décennies. Né au Royaume-Uni et élevé en Jamaïque avant d’arriver au Canada, il a servi de 1980 à 2014, puis de 2018 à 2023. Son témoignage dans le projet d’histoire orale du Musée canadien de la guerre porte sur le service militaire, le leadership et l’appartenance.",
    sources: ["https://www.museedelaguerre.ca/in-their-own-voices/kevin-junor/"],
  },
  {
    name: "Tomiwa Omolayo (Tommyphyll)",
    bioEn: "Tomiwa Omolayo, known as Tommyphyll, is an independent artist and producer born and raised in Lagos and now based in Canada. His music combines Afrobeats with synth-pop and classical influences in a style he calls Afrodiem. Drawing on his Yoruba heritage, he began releasing music professionally in 2018 and produced his debut album in 2020.",
    bioFr: "Tomiwa Omolayo, connu sous le nom de Tommyphyll, est un artiste et producteur indépendant né et élevé à Lagos, aujourd’hui établi au Canada. Sa musique associe Afrobeats, synth-pop et influences classiques dans un style qu’il nomme Afrodiem. Nourri par son héritage yoruba, il a commencé à publier professionnellement en 2018 et a produit son premier album en 2020.",
    sources: ["https://www.manitobamusic.com/tommyphyll"],
  },
  {
    name: "Measha Brueggergosman-Lee",
    bioEn: "Measha Brueggergosman-Lee is an internationally acclaimed soprano whose career encompasses opera, orchestral performance and recital. She has appeared on major stages including Carnegie Hall, the Kennedy Center and Wigmore Hall. Her repertoire ranges from Mozart and Offenbach to contemporary opera, reflecting a wide-ranging artistic practice across concert halls, festivals and theatrical productions.",
    bioFr: "Measha Brueggergosman-Lee est une soprano de renommée internationale dont le parcours comprend l’opéra, les concerts avec orchestre et le récital. Elle s’est produite sur de grandes scènes, notamment au Carnegie Hall, au Kennedy Center et au Wigmore Hall. Son répertoire va de Mozart et Offenbach à l’opéra contemporain, dans les salles de concert, les festivals et les productions lyriques.",
    sources: ["https://www.vancouversymphony.ca/artist/measha-brueggergosman/"],
  },
  {
    name: "The Honourable Michael Coteau",
    bioEn: "The Honourable Michael Coteau has served in municipal education governance, Ontario’s legislature and Canada’s Parliament. His provincial responsibilities included children and youth services, anti-racism, citizenship and immigration, and tourism, culture and sport. Before entering provincial politics, he was a Toronto school trustee and led AlphaPlus, an organization supporting literacy through technology.",
    bioFr: "L’honorable Michael Coteau a exercé des responsabilités dans la gouvernance scolaire, à l’Assemblée législative de l’Ontario et au Parlement du Canada. Ses portefeuilles provinciaux comprenaient les services à l’enfance et à la jeunesse, la lutte contre le racisme, la citoyenneté et l’immigration, ainsi que le tourisme, la culture et le sport. Auparavant, il était commissaire scolaire à Toronto et dirigeait AlphaPlus, organisme favorisant l’alphabétisation par la technologie.",
    sources: ["https://www.canada.ca/fr/patrimoine-canadien/organisation/transparence/gouvernement-ouvert/comite-permanent/ministre-rodriguez-29-mai-2023/biographies.html"],
  },
  {
    name: "Edward Matwawana",
    bioEn: "Edward Matwawana is Executive Director of the Michaëlle Jean Foundation. His career connects community economic development, social justice, youth engagement and the arts. He has held leadership roles with African Nova Scotian organizations and worked in immigrant employment and settlement in Ottawa, bringing experience in entrepreneurship and community partnerships to the Foundation’s work.",
    bioFr: "Edward Matwawana est directeur général de la Fondation Michaëlle Jean. Son parcours relie développement économique communautaire, justice sociale, engagement des jeunes et arts. Il a occupé des fonctions de direction dans des organismes afro-néo-écossais et travaillé dans l’emploi et l’établissement des personnes immigrantes à Ottawa. Il apporte à la Fondation une expérience de l’entrepreneuriat et des partenariats communautaires.",
    sources: ["https://www.ctf-fce.ca/wp-content/uploads/2024/11/Edward-Matwawana-Biographie-FR-2.pdf"],
  },
  {
    name: "Nellie Kennedy",
    bioEn: "Nellie Kennedy represents Assiniboia in the Manitoba Legislature and serves as Minister of Sport, Culture, Heritage and Tourism. Before entering provincial politics, she worked in Community Living disABILITY Services. She also co-founded the Postpartum Depression Association of Manitoba, bringing experience supporting mental health, families and community wellbeing to public service.",
    bioFr: "Nellie Kennedy représente Assiniboia à l’Assemblée législative du Manitoba et est ministre du Sport, de la Culture, du Patrimoine et du Tourisme. Avant son entrée en politique provinciale, elle travaillait aux Services d’intégration communautaire des personnes handicapées. Elle a également cofondé la Postpartum Depression Association of Manitoba, apportant au service public son expérience en santé mentale et en soutien aux familles et aux communautés.",
    sources: ["https://www.yourmanitoba.ca/assiniboia"],
  },
];
