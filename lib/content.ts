/**
 * MacroKinetic Global Hub — content layer.
 *
 * Single source of truth for all corporate copy. Figures and references were
 * synthesised from the corporate decks in /INFO (Corporate_Presentation_20250422)
 * and the briefed company facts. Edit copy here; pages stay structural.
 */

export const company = {
  name: "MacroKinetic",
  legalName: "MacroKinetic Global",
  established: 2008,
  tagline: "Engineering the interface between people and the physical world.",
  positioning:
    "Integrated intelligent technology — AI, automation & robotics, digital signage, retail technology and smart lighting — engineered end-to-end for enterprise, transit and the built environment.",
  domains: {
    ai: "https://macrokinetic.ai",
    ponyabc: "https://ponyabc.co.uk",
  },
} as const;

export type GatewayCard = {
  label: string;
  title: string;
  description: string;
  href: string;
  external: boolean;
};

export const gateways: GatewayCard[] = [
  {
    label: "AI Division",
    title: "macrokinetic.ai",
    description:
      "Computer vision, industrial inspection and applied intelligence — our research and AI product arm.",
    href: company.domains.ai,
    external: true,
  },
  {
    label: "Education & Interactive",
    title: "ponyabc.co.uk",
    description:
      "PonyABC — interactive learning, AR experiences and immersive content for the UK and European markets.",
    href: company.domains.ponyabc,
    external: true,
  },
];

export type City = {
  city: string;
  country: string;
  role: string;
  status: "operational" | "planned";
  meridian: string;
};

export const cities: City[] = [
  { city: "London", country: "United Kingdom", role: "European HQ & Commercial", status: "operational", meridian: "51.50°N" },
  { city: "Hong Kong", country: "SAR, China", role: "Asia-Pacific Operations", status: "operational", meridian: "22.32°N" },
  { city: "Shenzhen", country: "China", role: "Engineering & Manufacturing", status: "operational", meridian: "22.54°N" },
  { city: "Singapore", country: "Singapore", role: "Southeast Asia Expansion", status: "planned", meridian: "01.35°N" },
  { city: "Taiwan", country: "Taiwan", role: "Hardware Partnerships", status: "planned", meridian: "23.70°N" },
];

export type Pillar = {
  index: string;
  name: string;
  tagline: string;
  summary: string;
  capabilities: string[];
};

// Ordered by strategic priority — AI Solutions leads. This array is the single
// source of truth for the hero ticker, the homepage capability index and the
// Solutions page matrix; reorder here and every surface follows.
export const pillars: Pillar[] = [
  {
    index: "01",
    name: "AI Solutions",
    tagline: "Intelligence, Made Operational",
    summary:
      "Computer-vision inspection, NLP chatbots and avatar-driven service — applied intelligence deployed on the floor, not just in the lab.",
    capabilities: [
      "AI vision inspection for industry",
      "Multilingual NLP service chatbots",
      "Virtual avatars & video assistance",
      "Edge & back-office model deployment",
    ],
  },
  {
    index: "02",
    name: "Automation & Robotics",
    tagline: "Precision in Motion, Reliability at Scale",
    summary:
      "Service robotics, kiosks and automated fulfilment integrated into live operational environments with the safety and uptime that enterprise sites demand.",
    capabilities: [
      "Autonomous service & guidance robots",
      "Self-service & transactional kiosks",
      "Systems integration & orchestration",
      "24/7 monitoring & field maintenance",
    ],
  },
  {
    index: "03",
    name: "Digital Signage",
    tagline: "Brilliance at Every Touch, Vision in Every Pixel",
    summary:
      "Large-format LED, transparent and holographic display systems engineered for transit hubs, malls and flagship façades — from content pipeline to structural install.",
    capabilities: [
      "Fine-pitch & outdoor LED video walls",
      "Transparent and holographic display",
      "CMS & remote fleet management",
      "Structural & environmental engineering",
    ],
  },
  {
    index: "04",
    name: "Retail Technology",
    tagline: "Engage Everyone, Everywhere",
    summary:
      "Public interactive systems — wayfinding, e-concierge and intelligent service counters — that turn physical space into a responsive, measurable channel.",
    capabilities: [
      "e-Wayfinding & e-Concierge",
      "Intelligent customer-service counters",
      "Interactive tables, mirrors & projection",
      "Footfall analytics & engagement metrics",
    ],
  },
  {
    index: "05",
    name: "Smart Lighting",
    tagline: "Lighting the Future, Brightening your World",
    summary:
      "Architectural and media lighting for hotels, luxury retail and civic landmarks — design, control systems and installation under one roof.",
    capabilities: [
      "Architectural & façade media lighting",
      "Luxury retail & hospitality schemes",
      "DMX / addressable control systems",
      "Festival & landmark lighting shows",
    ],
  },
];

export type Reference = {
  slug: string;
  client: string;
  editorialTitle?: string; // story-style title, in the company's "What We Did" voice
  sector: string;
  location: string;
  scope: string;
  summary: string; // one-line intro for the index + detail header
  detail: string; // longer body for the detail page
  partner?: string;
  highlights?: string[]; // grounded figures / named venues
  relatedSolutions?: string[]; // must match pillar `name`s
  gallery: string[]; // public paths; gallery[0] doubles as thumb/hero
  featured?: boolean;
};

/**
 * Reference roster — grounded in the corporate decks (Corporate_Presentation_2025
 * 0422 / 202402) and the live macrokinetic.com "What We Did" page. Copy, figures
 * and partner names are taken from those sources; images are the decks' own project
 * photos (see public/references/<slug>/). HKIA and Elements are featured first.
 */
export const references: Reference[] = [
  {
    slug: "hkia",
    client: "Hong Kong International Airport",
    editorialTitle: "Elevating Global Travel",
    sector: "Aviation · Public Interactive",
    location: "Hong Kong",
    scope:
      "Intelligent Customer Service Counters · Interactive Food-Court Menu · Secure Video-Conference Service",
    summary:
      "Intelligent service counters and interactive systems deployed across one of the world's busiest international airports.",
    detail:
      "MacroKinetic delivered the Intelligent Customer Service Counters (ICSC) for Hong Kong International Airport with NEC — 38 units across Terminal 1, with around 50 further units planned for T2 and T3. The platform pairs a multilingual NLP chatbot and virtual avatar with a proprietary secure video-conference link to back-office service representatives, alongside a two-unit interactive food-court menu.",
    partner: "with NEC",
    highlights: [
      "38 ICSC units in Terminal 1",
      "~50 units planned for T2 & T3",
      "Multilingual NLP chatbot + virtual avatar",
      "Secure video-conference to back office",
    ],
    relatedSolutions: ["AI Solutions", "Retail Technology"],
    gallery: [
      "/references/hkia/01.jpg",
      "/references/hkia/02.jpg",
      "/references/hkia/03.jpg",
      "/references/hkia/04.jpg",
    ],
    featured: true,
  },
  {
    slug: "elements",
    client: "Elements Mall",
    editorialTitle: "Wayfinding for a Landmark Destination",
    sector: "Retail · Public Interactive",
    location: "Kowloon, Hong Kong",
    scope: "e-Wayfinding · e-Concierge · e-Carpark Redemption",
    summary:
      "An end-to-end interactive concierge and wayfinding suite for a premier Kowloon retail destination.",
    detail:
      "Across ELEMENTS, MacroKinetic deployed an integrated e-Wayfinding, e-Concierge and e-Carpark Redemption suite — store directories with 'Take Me There' routing, dining and shopping guides, and automated car-park redemption — presented through a refined, brand-aligned touch interface.",
    highlights: [
      "Interactive directory with 'Take Me There' routing",
      "e-Concierge & service information",
      "Automated car-park redemption",
    ],
    relatedSolutions: ["Retail Technology", "Digital Signage"],
    gallery: [
      "/references/elements/01.jpg",
      "/references/elements/02.jpg",
      "/references/elements/03.jpg",
      "/references/elements/04.jpg",
      "/references/elements/05.jpg",
    ],
    featured: true,
  },
  {
    slug: "tai-po",
    client: "Tai Po Music & Art Center",
    editorialTitle: "Immersive Experiences in Art & Heritage",
    sector: "Culture · Interactive Projection",
    location: "Tai Po, Hong Kong",
    scope: "Interactive Projection · Immersive Content",
    summary:
      "Immersive interactive projection blending technology with art and local heritage.",
    detail:
      "With Cyberconcept, MacroKinetic created immersive interactive projection experiences for the Tai Po Music & Art Center — unique, responsive environments that blend technology with art and local heritage.",
    partner: "with Cyberconcept",
    highlights: [
      "Interactive projection environments",
      "Art & local-heritage storytelling",
    ],
    relatedSolutions: ["Retail Technology", "AI Solutions"],
    gallery: [
      "/references/tai-po/01.jpg",
      "/references/tai-po/02.jpg",
      "/references/tai-po/03.jpg",
    ],
  },
  {
    slug: "interactive-installations",
    client: "Interactive Brand & Cultural Installations",
    editorialTitle: "Partner Projects in Public Interactive",
    sector: "Public Interactive · Partner Projects",
    location: "Hong Kong · Greater China",
    scope: "Interactive Tables · Mirrors · Gesture Games · Brand Exhibitions",
    summary:
      "Selected partner-delivered interactive installations across museums, retail and brand experiences.",
    detail:
      "A portfolio of partner projects under MacroKinetic's Public Interactive practice: interactive tables for the HSBC Museum & Archive; an AI dress-changing interactive mirror for Chow Sang Sang; gesture-driven games at Hong Kong Disneyland (Kinect); an interactive table at the BMW Showroom; an interactive exhibition for Dior Hong Kong; and an interactive game at Hong Kong Sky100.",
    highlights: [
      "HSBC Museum & Archive — interactive tables",
      "Chow Sang Sang — AI dress-changing mirror",
      "Hong Kong Disneyland — Kinect gesture games",
      "BMW Showroom · Dior Hong Kong · Sky100",
    ],
    relatedSolutions: ["Retail Technology", "AI Solutions"],
    gallery: [
      "/references/interactive-installations/01.jpg",
      "/references/interactive-installations/02.jpg",
      "/references/interactive-installations/03.jpg",
      "/references/interactive-installations/04.jpg",
      "/references/interactive-installations/05.jpg",
      "/references/interactive-installations/06.jpg",
      "/references/interactive-installations/07.jpg",
    ],
  },
  {
    slug: "macau-customs",
    client: "Macau Customs — HK·Zhuhai·Macao Bridge",
    editorialTitle: "Border Infrastructure at the HZMB",
    sector: "Government · Border Infrastructure",
    location: "Macau",
    scope: "LED Display & Kiosk Systems",
    summary:
      "Display and kiosk infrastructure for border-gate operations at a major cross-boundary crossing.",
    detail:
      "MacroKinetic supplied LED display and kiosk systems for Macau Customs at the Hong Kong–Zhuhai–Macao Bridge border gate — part of a public-infrastructure portfolio that also includes Windsor House and the Macau Sports Development Board venues.",
    highlights: [
      "HK–Zhuhai–Macao Bridge border gate",
      "Windsor House",
      "Macau Sports Development Board venues",
    ],
    relatedSolutions: ["Digital Signage"],
    gallery: [
      "/references/macau-customs/01.jpg",
      "/references/macau-customs/02.jpg",
      "/references/macau-customs/03.jpg",
      "/references/macau-customs/04.jpg",
    ],
  },
  {
    slug: "retail-led",
    client: "Landmark Retail — LED & Kiosk",
    editorialTitle: "LED & Kiosk Across Landmark Retail",
    sector: "Retail · Digital Signage",
    location: "Hong Kong",
    scope: "LED Display & Interactive Kiosks",
    summary:
      "LED display and kiosk deployments across landmark malls, fashion and hospitality venues.",
    detail:
      "A portfolio of LED display and kiosk work across landmark retail and hospitality — including K11 (Tsim Sha Tsui), Mile Shopping Mall (Tai Kok Tsui), Emporio Armani, Shatin New Town Plaza and the W Hotel front desk.",
    highlights: [
      "K11 — Tsim Sha Tsui",
      "Mile Shopping Mall — Tai Kok Tsui",
      "Emporio Armani",
      "Shatin New Town Plaza · W Hotel",
    ],
    relatedSolutions: ["Digital Signage", "Retail Technology"],
    gallery: [
      "/references/retail-led/01.jpg",
      "/references/retail-led/02.jpg",
      "/references/retail-led/03.jpg",
      "/references/retail-led/04.jpg",
    ],
  },
  {
    slug: "smart-lighting",
    client: "Architectural & Luxury-Retail Lighting",
    editorialTitle: "Lighting for Maisons, Hotels & Landmarks",
    sector: "Hospitality · Luxury Retail · Smart Lighting",
    location: "Hong Kong · Macau",
    scope: "Architectural, Façade & Retail Lighting",
    summary:
      "Architectural and retail lighting for luxury maisons, hotels and civic landmarks.",
    detail:
      "As sole Hong Kong & Macau distributor of Nicolaudie computerised DMX lighting control, MacroKinetic delivers architectural, façade and retail lighting schemes — a client roster spanning Louis Vuitton, Van Cleef & Arpels, Lancôme, Adidas, the W Hotel and the Penta / Harbour Plaza hotels, among others.",
    partner: "Nicolaudie DMX — sole HK/Macau distributor",
    highlights: [
      "Louis Vuitton · Van Cleef & Arpels · Lancôme",
      "Penta Hotel · Harbour Plaza",
      "Sole HK/Macau Nicolaudie DMX distributor",
    ],
    relatedSolutions: ["Smart Lighting"],
    gallery: [
      "/references/smart-lighting/01.jpg",
      "/references/smart-lighting/02.jpg",
      "/references/smart-lighting/03.jpg",
      "/references/smart-lighting/04.jpg",
    ],
  },
];

export function getReferenceBySlug(slug: string): Reference | undefined {
  return references.find((r) => r.slug === slug);
}

export const offices = [
  {
    city: "London",
    lines: ["European Headquarters", "Commercial & Partnerships"],
    region: "EMEA",
  },
  {
    city: "Hong Kong",
    lines: ["Asia-Pacific Operations", "Project Delivery"],
    region: "APAC",
  },
  {
    city: "Shenzhen",
    lines: ["Engineering & Manufacturing", "R&D"],
    region: "Greater China",
  },
] as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "References", href: "/references" },
] as const;
