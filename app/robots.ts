import type { MetadataRoute } from "next";

// Production canonical origin. Matches `metadataBase` in app/layout.tsx and
// BASE_URL in app/sitemap.ts. Update all three together if the domain changes.
const BASE_URL = "https://macrokinetic.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
