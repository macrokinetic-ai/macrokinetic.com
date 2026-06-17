import type { MetadataRoute } from "next";
import { references } from "@/lib/content";

// Production canonical origin. Matches `metadataBase` in app/layout.tsx.
// If the production domain changes, update it in both places.
const BASE_URL = "https://macrokinetic.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/solutions`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/references`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/faq`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];

  const referenceRoutes: MetadataRoute.Sitemap = references.map((ref) => ({
    url: `${BASE_URL}/references/${ref.slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...referenceRoutes];
}
