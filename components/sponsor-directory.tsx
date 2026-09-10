type SponsorLogo = {
  src: string;
  alt: string;
  className?: string;
};

type SponsorEntry = {
  name: string;
  roleEn?: string;
  roleFr?: string;
  logos?: SponsorLogo[];
  website?: string;
  showRole?: boolean;
};

const champions: SponsorEntry[] = [
  {
    name: "Winnipeg Economic Development & Tourism",
    logos: [
      {
        src: "/sponsor_3.png",
        alt: "Economic Development Winnipeg",
        className: "max-h-20 max-w-[300px]",
      },
      {
        src: "/sponsor_4.png",
        alt: "Tourism Winnipeg",
        className: "max-h-20 max-w-[220px]",
      },
    ],
  },
  {
    name: "Canada Life",
    logos: [
      {
        src: "/sponsor_5.jpg",
        alt: "Canada Life",
        className: "max-h-36 max-w-[280px] w-full",
      },
    ],
  },
  {
    name: "Province of Manitoba / Travel Manitoba",
    logos: [
      {
        src: "/manitoba-logo.png",
        alt: "Province of Manitoba",
        className: "max-h-16 max-w-[190px]",
      },
      {
        src: "/sponsor_2.png",
        alt: "Travel Manitoba",
        className: "max-h-14 max-w-[220px]",
      },
    ],
  },
];

const advocates: SponsorEntry[] = [
  {
    name: "The Winnipeg Foundation",
    logos: [
      {
        src: "/winnipeg-foundation-logo.png",
        alt: "The Winnipeg Foundation",
        className: "max-h-16 max-w-[250px]",
      },
    ],
  },
  {
    name: "Canadian Race Relations Foundation",
    logos: [
      {
        src: "/crrf-logo.png",
        alt: "Canadian Race Relations Foundation",
        className: "max-h-16 max-w-[260px]",
      },
    ],
  },
];

const partners: SponsorEntry[] = [
  {
    name: "CBC",
    website: "https://www.cbc.ca/",
    showRole: true,
    roleEn: "Media Partner",
    roleFr: "Partenaire média",
    logos: [
      {
        src: "/cbc-logo.png",
        alt: "CBC",
        className: "max-h-14 max-w-[220px]",
      },
    ],
  },
  {
    name: "Encore Global",
    roleEn: "Production Partner",
    roleFr: "Partenaire de production",
    logos: [
      {
        src: "/encore-logo-en.png",
        alt: "Encore Global",
        className: "max-h-14 max-w-[230px]",
      },
    ],
  },
  {
    name: "Delta Hotels",
    roleEn: "Hospitality Partner",
    roleFr: "Partenaire hôtelier",
    logos: [
      {
        src: "/sponsor_8.png",
        alt: "Delta Hotels by Marriott Winnipeg",
        className: "max-h-20 max-w-[160px]",
      },
    ],
  },
  {
    name: "Porter Airlines",
    roleEn: "Official Travel Partner",
    roleFr: "Partenaire de voyage officiel",
    logos: [
      {
        src: "/porter-logo.png",
        alt: "Porter Airlines",
        className: "max-h-14 max-w-[190px]",
      },
    ],
  },
  {
    name: "Zueike",
    roleEn: "Merchandise Partner",
    roleFr: "Partenaire de produits dérivés",
    logos: [
      {
        src: "/zueike.webp",
        alt: "Zueike",
        className: "max-h-24 max-w-[240px]",
      },
    ],
  },
];

const friends: SponsorEntry[] = [
  {
    name: "Shelter Canadian Properties Limited",
    roleEn: "Mobilizer",
    roleFr: "Mobilisateur",
    logos: [
      {
        src: "/shelter-canadian-logo.png",
        alt: "Shelter Canadian Properties Limited",
        className: "max-h-12 max-w-[290px]",
      },
    ],
  },
  {
    name: "Diversity Institute",
    roleEn: "Mobilizer",
    roleFr: "Mobilisateur",
    logos: [
      {
        src: "/trsm-diversity-institute-logo.png",
        alt: "Ted Rogers School of Management and Diversity Institute",
        className: "max-h-14 max-w-[300px]",
      },
    ],
  },
  {
    name: "Black Manitoba Network",
    roleEn: "Amplifier",
    roleFr: "Amplificateur",
    logos: [
      {
        src: "/black-manitoba-network-logo.png",
        alt: "Black Manitoba Network",
        className: "max-h-20 max-w-[220px]",
      },
    ],
  },
];

const inCircleSponsors: SponsorEntry[] = [
  {
    name: "The Walrus",
    roleEn: "In-Circle Women’s Gathering",
    roleFr: "Rassemblement En Cercle des femmes",
    logos: [
      {
        src: "/walrus-logo.png",
        alt: "The Walrus",
        className: "max-h-12 max-w-[220px]",
      },
    ],
  },
];

const donors: SponsorEntry[] = [
  {
    name: "John Beck",
    roleEn: "Youth Delegate Sponsor",
    roleFr: "Commanditaire des jeunes délégués",
  },
  {
    name: "The Asper Foundation",
    logos: [
      {
        src: "/asper-foundation-logo.png",
        alt: "The Asper Foundation",
        className: "max-h-16 max-w-[230px]",
      },
    ],
  },
];

const communityPartners: SponsorEntry[] = [
  {
    name: "Côte-des-Neiges Black Community Association (CDNBCA)",
    website: "https://www.cdnbca.org/",
    logos: [{ src: "/cdnbca-logo.png", alt: "Côte-des-Neiges Black Community Association (CDNBCA)", className: "max-h-28 max-w-[260px]" }],
  },
  {
    name: "Afro-Caribbean Association of Manitoba",
    website: "https://afrocaribbean.org/",
    logos: [{ src: "/acam-logo.png", alt: "Afro-Caribbean Association of Manitoba", className: "max-h-28 max-w-[260px]" }],
  },
  {
    name: "Sexuality Education Resource Centre MB",
    website: "https://serc.mb.ca/",
    logos: [{ src: "/serc-logo.svg", alt: "Sexuality Education Resource Centre MB", className: "max-h-28 max-w-[260px]" }],
  },
  {
    name: "Black Artists Winnipeg",
    logos: [{ src: "/black-artists-winnipeg.jpg", alt: "Black Artists Winnipeg", className: "max-h-28 max-w-[260px]" }],
  },
  {
    name: "AFRICANADIAN SEARCHERS",
  },
  {
    name: "Regroupement des Haïtiens du Manitoba (RDHM)",
  },
  {
    name: "Congress of Black Women of Manitoba",
    website: "https://cobwmanitoba.com/",
    logos: [{ src: "/congress-black-women-logo.jpg", alt: "Congress of Black Women of Manitoba", className: "max-h-28 max-w-[260px]" }],
  },

  {
    name: "Black Cultural Centre for Nova Scotia (BCC)",
    website: "https://bccns.com/",
    logos: [{ src: "/bcc-logo.jpg", alt: "Black Cultural Centre for Nova Scotia", className: "max-h-28 max-w-[185px]" }],
  },


  {
    name: "Manito Ahbee Festival",
    logos: [
      {
        src: "/manito-ahbee.jpg",
        alt: "Manito Ahbee Festival",
        className: "max-h-20 max-w-[250px]",
      },
    ],
  },
  {
    name: "Centre culturel franco-manitobain (CCFM)",
    logos: [
      {
        src: "/ccfm-logo.svg",
        alt: "Centre culturel franco-manitobain",
        className: "max-h-24 max-w-[230px]",
      },
    ],
  },
  {
    name: "Network for the Advancement of Black Communities (NABC)",
    logos: [
      {
        src: "/nabc.webp",
        alt: "Network for the Advancement of Black Communities",
        className: "!h-[100px] !w-[300px] !max-h-none max-w-full !object-cover",
      },
    ],
  },
  {
    name: "Black History Manitoba",
    logos: [
      {
        src: "/black-history-manitoba.webp",
        alt: "Black History Manitoba",
        className: "max-h-20 max-w-[260px]",
      },
    ],
  },
  {
    name: "Delmore “Buddy” Daye Learning Institute",
    logos: [
      {
        src: "/dbdli.webp",
        alt: "Delmore Buddy Daye Learning Institute",
        className: "max-h-28 max-w-[300px]",
      },
    ],
  },
  {
    name: "Nigerian Association of Manitoba",
    logos: [
      {
        src: "/nigerian-association-manitoba-white.webp",
        alt: "Nigerian Association of Manitoba",
        className: "max-h-32 max-w-[280px]",
      },
    ],
  },
  {
    name: "Federation of Black Canadians",
    logos: [
      {
        src: "/federation-black-canadians.webp",
        alt: "Federation of Black Canadians",
        className: "max-h-28 max-w-[300px]",
      },
    ],
  },
  {
    name: "All Women L.E.A.D.",
    logos: [
      {
        src: "/all-women-lead.webp",
        alt: "All Women L.E.A.D.",
        className: "max-h-28 max-w-[230px]",
      },
    ],
  },
  {
    name: "Caribbean African Canadian Social Services (CAFCAN)",
    logos: [
      {
        src: "/cafcan.webp",
        alt: "Caribbean African Canadian Social Services",
        className: "max-h-20 max-w-[270px]",
      },
    ],
  },
  {
    name: "Canadian Museum for Human Rights",
    logos: [
      {
        src: "/summit-week-cmhr.jpg",
        alt: "Canadian Museum for Human Rights",
        className: "max-h-24 max-w-[240px]",
      },
    ],
  },
  {
    name: "BPM x WAG-Qaumajuq",
    logos: [
      {
        src: "/summit-week-bpm-wag.jpg",
        alt: "BPM x WAG-Qaumajuq",
        className: "max-h-24 max-w-[210px]",
      },
    ],
  },
  {
    name: "Graffiti Art Programming",
    logos: [
      {
        src: "/graffiti-art-programming-logo.jpg",
        alt: "Graffiti Art Programming",
        className: "max-h-20 max-w-[250px]",
      },
    ],
  },
  {
    name: "Rainbow Resource Centre",
    logos: [
      {
        src: "/rainbow-resource-centre.webp",
        alt: "Rainbow Resource Centre",
        className: "max-h-24 max-w-[190px]",
      },
    ],
  },
  {
    name: "Pegcity Steppers",
    logos: [
      {
        src: "/summit-week-pegcity.jpg",
        alt: "Pegcity Steppers",
        className: "max-h-24 max-w-[190px]",
      },
    ],
  },
  {
    name: "Black Canadian Experience Centre",
    logos: [
      {
        src: "/black-canadian-experience-centre.webp",
        alt: "Black Canadian Experience Centre",
        className: "max-h-24 max-w-[250px]",
      },
    ],
  },
  {
    name: "Black Manitobans Chamber of Commerce",
    logos: [
      {
        src: "/bmcc-logo-white.webp",
        alt: "Black Manitobans Chamber of Commerce",
        className: "max-h-32 max-w-[280px]",
      },
    ],
  },
  {
    name: "African Movie Festival in Manitoba",
    logos: [
      {
        src: "/summit-week-amfm.webp",
        alt: "African Movie Festival in Manitoba",
        className: "max-h-20 max-w-[240px]",
      },
    ],
  },
  {
    name: "ACOMI (African Communities of Manitoba Inc.)",
    roleEn: "Community Partner",
    roleFr: "Partenaire communautaire",
    logos: [
      {
        src: "/acomi.jpg",
        alt: "ACOMI — African Communities of Manitoba Inc.",
        className: "max-h-16 max-w-[250px]",
      },
    ],
  },
  {
    name: "Organization for Economic Development and Diplomacy (OEDD)",
    website: "https://oedd.ca/",
    logos: [{ src: "/oedd-logo.svg", alt: "Organization for Economic Development and Diplomacy (OEDD)", className: "max-h-28 max-w-[260px]" }],
  },
  {
    name: "African Nova Scotian Decade for People of African Descent Coalition (ANSDPAD)",
    website: "https://ansdpad.ca/",
    logos: [{ src: "/ansdpad-logo.png", alt: "African Nova Scotian Decade for People of African Descent Coalition (ANSDPAD)", className: "max-h-28 max-w-[260px]" }],
  },
];

function SponsorCard({
  entry,
  locale,
  prominence = "standard",
  compact,
}: {
  entry: SponsorEntry;
  locale: string;
  prominence?: "champion" | "paid" | "standard" | "community";
  compact: boolean;
}) {
  const role = locale === "fr" ? entry.roleFr || entry.roleEn : entry.roleEn;
  const height = compact
    ? prominence === "champion"
      ? "min-h-40"
      : prominence === "paid"
        ? "min-h-36"
        : "min-h-32"
    : prominence === "champion"
      ? "min-h-60"
      : prominence === "paid"
        ? "min-h-52"
        : prominence === "community"
          ? "min-h-44"
          : "min-h-48";

  return (
    <article
      className={`flex ${height} w-full ${entry.name === "CBC" ? "flex-row flex-wrap" : "flex-col"} items-center justify-center gap-4 rounded-2xl border border-[#E8D4DB] bg-white text-center shadow-[0_10px_35px_rgba(93,24,49,0.06)] ${prominence === "champion" || prominence === "paid" ? "p-6 [&_img]:scale-[1.06]" : "p-5"}`}
    >
      {entry.logos && (
        <div className="flex min-h-16 flex-wrap items-center justify-center gap-4">
          {entry.logos.map((logo) => (
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              className={`h-auto w-auto max-w-full object-contain ${entry.name === "CBC" ? "max-h-14 max-w-[80px]" : logo.className || "max-h-16 max-w-[240px]"}`}
              loading="lazy"
            />
          ))}
        </div>
      )}
      {entry.showRole && role && (
        entry.website ? (
          <a href={entry.website} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#8C0C3A] underline underline-offset-4">
            {role}
          </a>
        ) : <p className="text-sm font-bold text-[#8C0C3A]">{role}</p>
      )}
      {!entry.logos && (
        <div>
          <p
            className={`font-heading font-bold leading-snug text-[#1E1E1E] ${prominence === "champion" && !compact ? "text-xl" : prominence === "paid" && !compact ? "text-base sm:text-lg" : "text-sm sm:text-base"}`}
          >
            {entry.name}
          </p>
          {role && (
            <p
              className={`${entry.logos ? "" : "mt-1.5"} text-xs font-semibold uppercase tracking-[0.09em] text-[#8C0C3A]`}
            >
              {role}
            </p>
          )}
        </div>
      )}
    </article>
  );
}

function Tier({
  titleEn,
  titleFr,
  entries,
  locale,
  prominence = "standard",
  compact,
}: {
  titleEn: string;
  titleFr: string;
  entries: SponsorEntry[];
  locale: string;
  prominence?: "champion" | "paid" | "standard" | "community";
  compact: boolean;
}) {
  const columns =
    entries.length === 1
      ? "mx-auto max-w-md grid-cols-1"
      : entries.length === 2
        ? "mx-auto max-w-3xl sm:grid-cols-2"
        : entries.length === 3
          ? "md:grid-cols-3"
          : prominence === "community"
            ? "sm:grid-cols-2 lg:grid-cols-3"
            : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section className={compact ? "mb-10" : "mb-14 sm:mb-16"}>
      <h2 className="mb-6 text-center font-heading text-sm font-black uppercase tracking-[0.16em] text-[#5D1831] sm:text-base">
        {locale === "fr" ? titleFr : titleEn}
      </h2>
      <div className={`grid gap-5 ${columns}`}>
        {entries.map((entry) => (
          <SponsorCard
            key={entry.name}
            entry={entry}
            locale={locale}
            prominence={prominence}
            compact={compact}
          />
        ))}
      </div>
    </section>
  );
}

export function SponsorDirectory({
  locale,
  compact = false,
}: {
  locale: string;
  compact?: boolean;
}) {
  return (
    <div className="mx-auto w-full max-w-[1180px]">
      <section
        className={`flex flex-col items-center justify-center rounded-[2rem] border-2 border-[#8C0C3A]/20 bg-[#FAF6F7] px-6 text-center shadow-[0_18px_60px_rgba(93,24,49,0.09)] ${compact ? "mb-14 py-10" : "mb-20 py-16 sm:mb-24 sm:py-20"}`}
      >
        <h2 className="mb-7 font-heading text-sm font-black uppercase tracking-[0.18em] text-[#5D1831] sm:text-base">
          {locale === "fr" ? "Présenté par" : "Presented by"}
        </h2>
        <img
          src="/sponsor_1.png"
          alt="TD Bank Group"
          className={`${compact ? "h-28 w-36" : "h-36 w-44 sm:h-44 sm:w-56"} object-contain`}
          loading="lazy"
        />
      </section>

      <Tier
        titleEn="Champions"
        titleFr="Champions"
        entries={champions}
        locale={locale}
        prominence="champion"
        compact={compact}
      />
      <Tier
        titleEn="Advocates"
        titleFr="Défenseurs"
        entries={advocates}
        locale={locale}
        prominence="paid"
        compact={compact}
      />
      <Tier
        titleEn="Friends of the Summit"
        titleFr="Amis du Sommet"
        entries={friends}
        locale={locale}
        prominence="paid"
        compact={compact}
      />
      <Tier
        titleEn="Donors"
        titleFr="Donateurs"
        entries={donors}
        locale={locale}
        compact={compact}
      />
      <Tier
        titleEn="Partners"
        titleFr="Partenaires"
        entries={partners}
        locale={locale}
        compact={compact}
      />
      <Tier
        titleEn="In-Circle Women’s Gathering"
        titleFr="Rassemblement En Cercle des femmes"
        entries={inCircleSponsors}
        locale={locale}
        compact={compact}
      />
      <Tier
        titleEn="In-Circle Women’s Gathering Host"
        titleFr="Hôte du rassemblement En Cercle des femmes"
        entries={[{ name: "Province of Manitoba", logos: [{ src: "/manitoba-logo.png", alt: locale === "fr" ? "Province du Manitoba" : "Province of Manitoba", className: "max-h-20 max-w-[240px]" }] }]}
        locale={locale}
        compact={compact}
      />
      <Tier
        titleEn="Community Partners"
        titleFr="Partenaires communautaires"
        entries={communityPartners}
        locale={locale}
        prominence="community"
        compact={compact}
      />
    </div>
  );
}
