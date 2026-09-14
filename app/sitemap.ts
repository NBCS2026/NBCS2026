import type { MetadataRoute } from "next";
import { SEARCH_PAGES, SITE_ORIGINS } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  return SEARCH_PAGES.flatMap(page => (["en", "fr"] as const).map(locale => ({
    url: `${SITE_ORIGINS[locale]}/${locale}${page.path}`,
    alternates: { languages: { "en-CA": `${SITE_ORIGINS.en}/en${page.path}`, "fr-CA": `${SITE_ORIGINS.fr}/fr${page.path}` } }
  })));
}
