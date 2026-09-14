import type { Metadata } from "next";
export const SITE_ORIGINS = { en: "https://www.blackcanadiansummit.ca", fr: "https://sommetpancanadien.ca" };
export const SEARCH_PAGES = [{"path": "", "en": "Home", "fr": "Accueil"}, {"path": "/about", "en": "About", "fr": "À propos"}, {"path": "/program", "en": "Programme", "fr": "Programme"}, {"path": "/summit-week", "en": "Side Events", "fr": "Événements parallèles"}, {"path": "/exhibitors", "en": "Exhibitors, Marketplace & Art Exhibition", "fr": "Exposants, marché et exposition d’art"}, {"path": "/media", "en": "Media", "fr": "Médias"}, {"path": "/ticket", "en": "Registration", "fr": "Inscription"}, {"path": "/info", "en": "Plan Your Visit", "fr": "Planifiez votre visite"}, {"path": "/partners", "en": "Sponsors & Partners", "fr": "Commanditaires et partenaires"}, {"path": "/contact", "en": "Contact", "fr": "Contact"}, {"path": "/feedback", "en": "Share Your Feedback", "fr": "Partagez vos commentaires"}] as const;
export function pageMetadata(locale: string, path = ""): Metadata {
  const lang = locale === "fr" ? "fr" : "en";
  const page = SEARCH_PAGES.find(p => p.path === path) ?? SEARCH_PAGES[0];
  const site = lang === "fr" ? "Sommet pancanadien des communautés noires 2026" : "National Black Canadians Summit 2026";
  const title = path ? `${page[lang]} | ${site}` : site;
  const description = lang === "fr" ? `${page.fr} — Sommet pancanadien des communautés noires, du 18 au 20 septembre 2026 à Winnipeg, au Manitoba.` : `${page.en} — National Black Canadians Summit, September 18–20, 2026 in Winnipeg, Manitoba.`;
  const url = `${SITE_ORIGINS[lang]}/${lang}${path}`;
  return { title, description, alternates: { canonical: url, languages: { "en-CA": `${SITE_ORIGINS.en}/en${path}`, "fr-CA": `${SITE_ORIGINS.fr}/fr${path}`, "x-default": `${SITE_ORIGINS.en}/en${path}` } },
    openGraph: { title, description, url, siteName: site, type: "website", locale: lang === "fr" ? "fr_CA" : "en_CA", alternateLocale: lang === "fr" ? "en_CA" : "fr_CA", images: [{url: `${SITE_ORIGINS[lang]}/program-hero-394A4674.jpg`, alt: site}] },
    twitter: { card: "summary_large_image", title, description, images: [`${SITE_ORIGINS[lang]}/program-hero-394A4674.jpg`] },
    ...(process.env.VERCEL_ENV === "preview" ? { robots: { index: false, follow: false } } : {})
  };
}
