/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
    ],
  },

  // ── 301 redirect map: legacy Wix URLs → new Next.js routes ──────────────────
  // Sources are the exact live paths from macrokinetic.com's own sitemap
  // (blog-posts / pages / store). Each maps to the most relevant new route to
  // preserve SEO and inbound links; none resolve to a 404. statusCode 301 issues
  // a true permanent redirect (not Next's default 308). www→non-www and host
  // canonicalisation are handled at the Vercel domain level, not here.
  async redirects() {
    return [
      // Blog ("What We Did") index → case-study archive
      { source: "/blog", destination: "/references", statusCode: 301 },

      // Individual posts → their case study (or the archive where no 1:1 page)
      {
        source:
          "/post/elevating-global-travel-macrokinetic-s-intelligent-service-counters-at-hong-kong-international-airp",
        destination: "/references/hkia",
        statusCode: 301,
      },
      {
        source:
          "/post/smart-dining-navigation-macrokinetic-s-intelligent-food-court-kiosks-at-hong-kong-international-air",
        destination: "/references/hkia-food-court",
        statusCode: 301,
      },
      {
        source: "/post/smart-kiosks-at-elements-mall",
        destination: "/references/elements",
        statusCode: 301,
      },
      {
        source:
          "/post/immersive-experiences-by-macrokinetic-the-tai-po-music-art-center-interactive-project",
        destination: "/references/tai-po",
        statusCode: 301,
      },
      {
        source: "/post/elevating-luxury-dior-hong-kong-pop-up-experience",
        destination: "/references/interactive-installations",
        statusCode: 301,
      },
      {
        source:
          "/post/local-support-interactive-tech-at-source-fashion-london-olypmia",
        destination: "/references",
        statusCode: 301,
      },
      {
        source: "/post/success-at-childcare-education-expo-uk-midland",
        destination: "/solutions#smart-education",
        statusCode: 301,
      },

      // Core pages
      { source: "/what-we-do", destination: "/solutions", statusCode: 301 },
      { source: "/who-we-are", destination: "/", statusCode: 301 },
      { source: "/get-in-touch", destination: "/#contact", statusCode: 301 },

      // Product / brand sub-pages — no 1:1 page; nearest solution section
      {
        source: "/kioskidea",
        destination: "/solutions#retail-technology",
        statusCode: 301,
      },
      {
        source: "/muxwave",
        destination: "/solutions#digital-signage",
        statusCode: 301,
      },
      {
        source: "/sindrax",
        destination: "/solutions#smart-education",
        statusCode: 301,
      },
      {
        source: "/copy-of-sindrax",
        destination: "/solutions#smart-education",
        statusCode: 301,
      },
      { source: "/zonepro", destination: "/solutions", statusCode: 301 },
      {
        source: "/zoneprocasestudies",
        destination: "/references",
        statusCode: 301,
      },

      // Store (PonyABC products now live at ponyabc.co.uk; keep on-site to the
      // education section rather than bouncing users off-domain)
      {
        source: "/product-page/ar-tangram",
        destination: "/solutions#smart-education",
        statusCode: 301,
      },
      {
        source: "/category/all-products",
        destination: "/solutions#smart-education",
        statusCode: 301,
      },
    ];
  },
};

module.exports = nextConfig;
