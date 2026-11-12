import { company } from "@/lib/content";

const ORG_ID = `${company.siteUrl}/#organization`;
const HK_ID = `${company.siteUrl}/#organization-hk`;

// Sitewide entity graph: Organization (UK company, with the HK company as a
// sub-organisation) + WebSite. Rendered once per page from the root layout.
export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      // UK company — runs this website, Trevo's authorised UK & Europe partner,
      // owner of the PonyABC brand. Subsidiary of the Hong Kong company.
      "@type": "Organization",
      "@id": ORG_ID,
      name: company.ukEntity.name,
      alternateName: "MacroKinetic",
      legalName: company.ukEntity.name,
      url: company.siteUrl,
      logo: `${company.siteUrl}/brand/wordmark-black-tight.png`,
      email: company.salesEmail,
      foundingDate: "2025",
      description:
        "MacroKinetic MediaTech Limited is a London technology company. It is Trevo's authorised UK & Europe partner, providing sales, installation and local support for Trevo hotel self check-in kiosks, and it runs the PonyABC early-years education brand.",
      identifier: {
        "@type": "PropertyValue",
        propertyID: "Companies House (England and Wales)",
        value: company.ukEntity.number,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "128 City Road",
        addressLocality: "London",
        postalCode: "EC1V 2NX",
        addressCountry: "GB",
      },
      areaServed: ["GB", "Europe"],
      knowsAbout: [
        "Hotel self check-in kiosks",
        "Self-service kiosks",
        "Early-years education technology",
      ],
      brand: { "@type": "Brand", name: "PonyABC", url: company.domains.ponyabc },
      parentOrganization: { "@id": HK_ID },
      sameAs: [company.linkedin.uk, company.domains.ponyabc],
    },
    {
      // Hong Kong head company — the group's engineering history since 2008
      // (incl. the HKIA intelligent customer service counters with NEC).
      "@type": "Organization",
      "@id": HK_ID,
      name: company.hkEntity,
      alternateName: "MacroKinetic",
      legalName: company.hkEntity,
      foundingDate: String(company.established),
      address: { "@type": "PostalAddress", addressLocality: "Hong Kong", addressCountry: "HK" },
      areaServed: ["HK", "CN"],
      knowsAbout: [
        "Intelligent customer service counters",
        "Self-service kiosks",
        "Digital signage",
        "Applied AI",
        "Smart lighting",
      ],
      subOrganization: { "@id": ORG_ID },
      sameAs: [company.linkedin.group, company.domains.ai],
    },
    {
      "@type": "WebSite",
      "@id": `${company.siteUrl}/#website`,
      url: company.siteUrl,
      name: "MacroKinetic",
      inLanguage: "en-GB",
      publisher: { "@id": ORG_ID },
    },
  ],
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${company.siteUrl}${it.path === "/" ? "" : it.path}`,
    })),
  };
}

export { ORG_ID, HK_ID };
