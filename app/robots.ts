import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL_ENV === "preview") return {rules: {userAgent: "*", disallow: "/"}};
  return { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, sitemap: ["https://www.blackcanadiansummit.ca/sitemap.xml", "https://sommetpancanadien.ca/sitemap.xml"] };
}
