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
  client: string;
  sector: string;
  location: string;
  scope: string;
  detail: string;
  partner?: string;
};

export const references: Reference[] = [
  {
    client: "Hong Kong International Airport",
    sector: "Aviation · Wayfinding",
    location: "Hong Kong",
    scope: "Intelligent Customer Service Counters & e-Wayfinding",
    detail:
      "38 intelligent service counters deployed across Terminal 1, with ~50 further units planned for T2 and T3. Secure video-conference service with NLP chatbot and avatar fallback to back-office representatives.",
    partner: "with NEC",
  },
  {
    client: "Hong Kong Disneyland",
    sector: "Entertainment · Interactive Retail",
    location: "Hong Kong",
    scope: "Interactive Retail & Gesture Experiences",
    detail:
      "Gesture-driven interactive retail and game installations bringing physical play into the guest journey.",
    partner: "Kinect integration",
  },
  {
    client: "Elements Mall",
    sector: "Retail · Public Interactive",
    location: "Hong Kong",
    scope: "e-Wayfinding · e-Concierge · e-Carpark Redemption",
    detail:
      "End-to-end interactive concierge and wayfinding suite, including automated carpark redemption, across a premier Kowloon retail destination.",
  },
  {
    client: "BMW Showroom",
    sector: "Automotive · Brand Experience",
    location: "Greater China",
    scope: "Immersive Showroom Display Systems",
    detail:
      "High-fidelity display and interactive configuration experiences engineered for a flagship automotive brand environment.",
  },
  {
    client: "Louis Vuitton · Van Cleef & Arpels",
    sector: "Luxury Retail · Smart Lighting",
    location: "Hong Kong · Macau",
    scope: "Architectural & Retail Lighting Schemes",
    detail:
      "Precision architectural lighting for maison-grade luxury retail, part of a portfolio spanning Lancôme, Four Seasons and StarWorld Macau.",
  },
  {
    client: "Macau Customs — HK·Zhuhai·Macao Bridge",
    sector: "Government · Border Infrastructure",
    location: "Macau",
    scope: "LED Display & Kiosk Systems",
    detail:
      "Display and kiosk infrastructure for border-gate operations at one of the region's most significant cross-boundary crossings.",
  },
  {
    client: "K11 Shopping Mall",
    sector: "Retail · Display",
    location: "Tsim Sha Tsui, Hong Kong",
    scope: "LED Display & Smart Lighting",
    detail:
      "Integrated display and architectural lighting within a landmark art-and-retail destination.",
  },
  {
    client: "HSBC Museum & Archive",
    sector: "Culture · Interactive",
    location: "Hong Kong",
    scope: "Interactive Table Installations",
    detail:
      "Touch-driven interactive tables presenting heritage archives through an engaging, exploratory interface.",
  },
];

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
