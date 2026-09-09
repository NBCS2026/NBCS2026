export type ExhibitionArtist = {
  name: string;
  descriptionEn: string;
  descriptionFr: string;
  imageUrl: string;
  imageFit?: "cover" | "contain";
};

export type MarketplaceVendor = {
  name: string;
  descriptionEn: string;
  descriptionFr: string;
  daysEn: string;
  daysFr: string;
  website?: string;
  imageUrl?: string;
  imageFit?: "cover" | "contain";
};

export type Exhibitor = {
  name: string;
  logoUrls?: string[];
  logoClassName?: string;
  textMark?: string;
};

export const EXHIBITORS: Exhibitor[] = [
  {
    name: "Michaëlle Jean Foundation",
    logoUrls: [
      "https://drive.google.com/thumbnail?id=1s28LLzN-yF8tni_VBAxCJ33WZpWWyuom&sz=w800",
    ],
  },
  { name: "Zueike", logoUrls: ["/zueike.webp"] },
  {
    name: "SBCCI",
    logoUrls: ["https://sbcci.ca/images/sbcci-logo-new-w%402x.png"],
    logoClassName: "brightness-0",
  },
  {
    name: "Canadian Race Relations Foundation",
    logoUrls: ["/crrf-logo.png"],
  },
  {
    name: "Economic Development Winnipeg",
    logoUrls: ["/sponsor_3.png"],
  },
  {
    name: "MBERG — Government of Manitoba",
    logoUrls: ["/manitoba-logo.png"],
  },
  {
    name: "Bilal Community Centre",
    logoUrls: [
      "https://bilalcommunitycentre.ca/wp-content/uploads/2022/06/BCFC-logo.png",
    ],
  },
  {
    name: "Inclusion in Canadian Sports",
    logoUrls: ["/icsn-logo.svg"],
  },
  {
    name: "Canadian Labour Congress / CUPE",
    logoUrls: [
      "https://canadianlabour.ca/wp-content/themes/canadian-labour-congress/assets/img/clc-logo.svg",
      "https://cupe.ca/sites/default/files/2025-05/CUPE-logo-EN.svg",
    ],
  },
  { name: "St-Aude Advocacy", textMark: "ST-AUDE ADVOCACY" },
  {
    name: "Diversity Institute",
    logoUrls: ["/trsm-diversity-institute-logo.png"],
  },
  { name: "CBC", logoUrls: ["/cbc-logo.png"] },
  {
    name: "Communications Security Establishment",
    logoUrls: ["https://www.cse-cst.gc.ca/GCWeb/assets/sig-blk-en.svg"],
  },
  {
    name: "University of Manitoba, Faculty of Law",
    logoUrls: ["https://umanitoba.ca/themes/custom/umanitoba/images/logo.svg"],
  },
  {
    name: "Canada Council for the Arts",
    logoUrls: [
      "https://canadacouncil.ca/-/media/Images/CCA/Design_Elements/Logos/new/CAC-lockup-EN-RGB-White.svg?h=58&w=306&hash=6E540D0A4787323429A3DC2D829C6AD8",
    ],
    logoClassName: "brightness-0",
  },
];

export const EXHIBITION_ARTISTS: ExhibitionArtist[] = [
  {
    name: "Andrew Idemudia",
    descriptionEn:
      "Nigerian-born, Winnipeg-based visual artist whose oil and acrylic figurative works explore community, identity, belonging and shared experience.",
    descriptionFr:
      "Artiste visuel né au Nigéria et établi à Winnipeg, dont les œuvres figuratives à l’huile et à l’acrylique explorent la communauté, l’identité, l’appartenance et les expériences partagées.",
    imageUrl: "/exhibition-artists/andrew-idemudia.webp",
  },
  {
    name: "Anna Binta Diallo",
    descriptionEn:
      "Franco-Manitoban and Senegalese multidisciplinary artist exploring memory, migration, displacement, language and identity.",
    descriptionFr:
      "Artiste multidisciplinaire franco-manitobaine et sénégalaise qui explore la mémoire, la migration, le déplacement, la langue et l’identité.",
    imageUrl: "/exhibition-artists/anna-binta-diallo.webp",
  },
  {
    name: "Black Canadian Experience Centre",
    descriptionEn:
      "A Winnipeg community heritage initiative preserving and sharing the histories, stories and cultural heritage of Black communities in Manitoba and Canada. The Centre’s exhibition contribution includes work by Nova Scotia-born, Manitoba-based quilter Melinda Clayton-Patterson, who specializes in Underground Railroad secret-code quilts and culturally rooted storytelling.",
    descriptionFr:
      "Initiative patrimoniale communautaire de Winnipeg qui préserve et transmet les histoires, les récits et le patrimoine culturel des communautés noires du Manitoba et du Canada. La contribution du Centre à l’exposition comprend le travail de Melinda Clayton-Patterson, courtepointeuse née en Nouvelle-Écosse et établie au Manitoba, spécialisée dans les courtepointes à codes secrets du chemin de fer clandestin et les récits ancrés dans la culture.",
    imageUrl: "/black-canadian-experience-centre.webp",
    imageFit: "contain",
  },
  {
    name: "Bria Fernandes",
    descriptionEn:
      "Canadian figurative painter working in oil and acrylic to explore race, identity, vulnerability, belonging and lived experience.",
    descriptionFr:
      "Peintre figurative canadienne qui utilise l’huile et l’acrylique pour explorer la race, l’identité, la vulnérabilité, l’appartenance et l’expérience vécue.",
    imageUrl: "/exhibition-artists/bria-fernandes.webp",
  },
  {
    name: "Ebunoluwa Akinbo",
    descriptionEn:
      "Nigerian lens-based visual artist in Canada whose photography, video and immersive work explore memory, identity and migration.",
    descriptionFr:
      "Artiste visuelle nigériane établie au Canada dont la photographie, la vidéo et les œuvres immersives explorent la mémoire, l’identité et la migration.",
    imageUrl: "/exhibition-artists/ebunoluwa-akinbo.webp",
  },
  {
    name: "Habeeb Andu",
    descriptionEn:
      "Canada-based multidisciplinary artist using painting, mixed media, sculpture and installation to examine migration, inequality and social justice.",
    descriptionFr:
      "Artiste multidisciplinaire établi au Canada qui utilise la peinture, les techniques mixtes, la sculpture et l’installation pour examiner la migration, l’inégalité et la justice sociale.",
    imageUrl: "/exhibition-artists/habeeb-andu.webp",
  },
  {
    name: "Olanrewaju Victor Abiola",
    descriptionEn:
      "Nigerian multidisciplinary visual artist and architectural designer exploring domestic life, social class, spirituality and shared spaces.",
    descriptionFr:
      "Artiste visuel multidisciplinaire et designer architectural nigérian qui explore la vie quotidienne, la classe sociale, la spiritualité et les espaces partagés.",
    imageUrl: "/exhibition-artists/olanrewaju-victor-abiola.webp",
  },
  {
    name: "Opeyemi Matthew Olukotun",
    descriptionEn:
      "Nigerian-Canadian figurative painter whose expressive acrylic portraits explore identity, migration, resilience and belonging.",
    descriptionFr:
      "Peintre figuratif nigérian-canadien dont les portraits expressifs à l’acrylique explorent l’identité, la migration, la résilience et l’appartenance.",
    imageUrl: "/exhibition-artists/opeyemi-matthew-olukotun.webp",
  },
  {
    name: "PJ Anderson",
    descriptionEn:
      "Jamaican Canadian and Red River Métis ceramic artist whose internationally exhibited work connects material, culture and identity.",
    descriptionFr:
      "Artiste céramiste canado-jamaïcaine et métisse de la Rivière-Rouge dont le travail exposé à l’international relie matière, culture et identité.",
    imageUrl: "/exhibition-artists/pj-anderson.webp",
  },
];

export const MARKETPLACE_VENDORS: MarketplaceVendor[] = [
  {
    name: "Black Artists Winnipeg",
    descriptionEn:
      "Art, prints, ceramics and jewelry by Black creatives based on Treaty 1 territory.",
    descriptionFr:
      "Œuvres, estampes, céramiques et bijoux de créatrices et créateurs noirs du territoire visé par le Traité no 1.",
    daysEn: "Friday–Sunday",
    daysFr: "Vendredi–dimanche",
    website: "https://www.instagram.com/blackartistswpg/",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1PjiD_Nkl1hKnXL4u2bya-cNd64WKCseH&sz=w1000",
  },
  {
    name: "BintChem Products & Services",
    descriptionEn:
      "Small-batch, plant-based body and hair care, including soaps, oils and body butters.",
    descriptionFr:
      "Soins corporels et capillaires végétaux en petites séries, dont savons, huiles et beurres hydratants.",
    daysEn: "Friday–Saturday",
    daysFr: "Vendredi–samedi",
    website: "https://bintchem.square.site",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1tqRJMZQ-Lo5hvy6mXrbI_PHvjJAS1TH1&sz=w1000",
  },
  {
    name: "OVA AFRIQUE",
    descriptionEn:
      "Handcrafted Afrocentric bags, accessories and natural shea-butter skincare.",
    descriptionFr:
      "Sacs et accessoires afrocentriques faits à la main, ainsi que soins naturels au beurre de karité.",
    daysEn: "Friday–Saturday",
    daysFr: "Vendredi–samedi",
    website: "https://www.ovaafrique.com/",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1mq0Fjk6tIT0y6iEJ_-yqGBCm17U7GLxZ&sz=w1000",
  },
  {
    name: "Shirom Arts Collections",
    descriptionEn: "Handmade jewelry, accessories and collectible pieces.",
    descriptionFr:
      "Bijoux, accessoires et articles de collection faits à la main.",
    daysEn: "Friday–Saturday",
    daysFr: "Vendredi–samedi",
    website: "https://www.shiromarts.ca/",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1rmGDnOHd140sAbjOqDLeSqt-XsA7E7j3&sz=w1000",
  },
  {
    name: "KRISUT FASHION",
    descriptionEn:
      "Contemporary African clothing and accessories for adults and children.",
    descriptionFr:
      "Vêtements et accessoires africains contemporains pour adultes et enfants.",
    daysEn: "Saturday",
    daysFr: "Samedi",
    website: "https://krisut.com/",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1z6lznj_ApB-WbI9Xj0EXrYTqMyn50kdI&sz=w1000",
  },
  {
    name: "Clothes by Gift",
    descriptionEn:
      "Modern Afrocentric clothing for adults and children, including jackets, dresses and everyday wear.",
    descriptionFr:
      "Vêtements afrocentriques modernes pour adultes et enfants, dont vestes, robes et tenues de tous les jours.",
    daysEn: "Friday–Sunday",
    daysFr: "Vendredi–dimanche",
    website: "https://www.clothesbygift.com",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1wPrb2xr-vV_aZGT3QaeoeZq7tMABsMIv&sz=w1000",
    imageFit: "contain",
  },
  {
    name: "Sankofa Afrikan Gifts",
    descriptionEn: "African clothing, jewelry, books, dolls and gifts.",
    descriptionFr: "Vêtements, bijoux, livres, poupées et cadeaux africains.",
    daysEn: "Friday–Saturday",
    daysFr: "Vendredi–samedi",
    website: "https://www.sankofagifts.ca",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5ee7dc402595620a0590b6cf/1592268823911-WMG01G7GPFXCKBEATQ6V/sankofa-gifts.png?format=1500w",
    imageFit: "contain",
  },
  {
    name: "HEYRU",
    descriptionEn:
      "African-inspired loose-leaf teas, iced teas and body-care products made with Canadian ingredients.",
    descriptionFr:
      "Thés en feuilles, thés glacés et soins pour le corps d’inspiration africaine, composés d’ingrédients canadiens.",
    daysEn: "Friday–Saturday",
    daysFr: "Vendredi–samedi",
    website: "https://www.shopheyru.com",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1WGfuvRbzMjzuKDfC0wMYa0odYdUv2_8O&sz=w1000",
  },
  {
    name: "Sani Crochets",
    descriptionEn:
      "Youth-made crochet plush toys, keychains, coasters and custom keepsakes.",
    descriptionFr:
      "Peluches, porte-clés, sous-verres et souvenirs personnalisés au crochet, créés par une jeune artisane.",
    daysEn: "Saturday–Sunday",
    daysFr: "Samedi–dimanche",
    website: "https://sanicrochets.com",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1alOC_r63LsmCj7ZSID-IUx5bkUZpQ0se&sz=w1000",
  },
  {
    name: "Suzanna Creations",
    descriptionEn: "African paintings on canvas for sale.",
    descriptionFr: "Peintures africaines originales sur toile à vendre.",
    daysEn: "Saturday",
    daysFr: "Samedi",
    website: "https://www.instagram.com/suzieartgallery/?hl=en",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1S4MtJA-bjeOzP9ojrUluIJewXUL1UUa0&sz=w1000",
  },
  {
    name: "Koshé Inc",
    descriptionEn:
      "Manitoba-made Afro-fusion spices, marinades and oils inspired by Nigerian flavours.",
    descriptionFr:
      "Épices, marinades et huiles afro-fusion fabriquées au Manitoba et inspirées des saveurs nigérianes.",
    daysEn: "Saturday",
    daysFr: "Samedi",
    website: "https://www.koshequickmart.com",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1boVapTTho3NJs62TEcKV99477IKxNMKO&sz=w1000",
  },
  {
    name: "West Natural Good",
    descriptionEn: "Natural mocha and cacao powders.",
    descriptionFr: "Poudres naturelles au moka et au cacao.",
    daysEn: "Friday",
    daysFr: "Vendredi",
    website: "https://www.westnaturalgood.ca",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1MW8OXXM2W3-ro0pI8g31MT2e9NmBYCiG&sz=w1000",
  },
  {
    name: "Alat Food Services",
    descriptionEn:
      "Authentic African foods and drinks, including bissap, lemonades, puff-puff and popcorn.",
    descriptionFr:
      "Cuisine et boissons africaines authentiques, dont bissap, limonades, puff-puff et maïs soufflé.",
    daysEn: "Saturday",
    daysFr: "Samedi",
    website: "https://alatservices.ca",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1CozhdoOp7pqTwTKNw6MjrRwZA2LbZ_vd&sz=w1000",
  },
  {
    name: "W. Enterprises",
    descriptionEn:
      "Canada-designed Ankara sleepwear, beachwear and umbrellas inspired by the ancestors.",
    descriptionFr:
      "Vêtements de nuit, vêtements de plage et parapluies à motifs Ankara, conçus au Canada et inspirés des ancêtres.",
    daysEn: "Friday–Sunday",
    daysFr: "Vendredi–dimanche",
    website: "https://www.wokeapparel.shop",
    imageUrl:
      "https://drive.google.com/thumbnail?id=1haeFmMcC_Gh5kiYTEWrbo4BzZ786P7oE&sz=w1000",
  },
];
