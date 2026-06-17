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
    "Integrated intelligent technology — AI, automation & robotics, digital signage, retail technology, smart lighting and smart education — engineered end-to-end for enterprise, transit and the built environment.",
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
    label: "Smart Education",
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
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  capabilities: string[];
  // Optional referral to a satellite destination in the MacroKinetic ecosystem
  // (e.g. AI Solutions → macrokinetic.ai, Smart Education → ponyabc.co.uk).
  link?: { label: string; href: string; note?: string };
};

// Ordered by strategic priority — AI Solutions leads. This array is the single
// source of truth for the hero ticker, the homepage capability index and the
// Solutions page matrix; reorder here and every surface follows.
export const pillars: Pillar[] = [
  {
    index: "01",
    slug: "ai-solutions",
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
    link: {
      label: "AI Division",
      href: company.domains.ai,
      note: "Industrial vision & applied-AI operations, in depth.",
    },
  },
  {
    index: "02",
    slug: "automation-robotics",
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
    slug: "digital-signage",
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
    slug: "retail-technology",
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
    slug: "smart-lighting",
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
  {
    index: "06",
    slug: "smart-education",
    name: "Smart Education",
    tagline: "Learning, Made Interactive",
    summary:
      "Interactive and AR-assisted learning experiences — MacroKinetic's education-technology practice, delivered to the UK through PonyABC.",
    capabilities: [
      "Interactive & multi-sensory learning systems",
      "AR-assisted learning (e.g. AR Magic Tangram)",
      "Early-years & classroom multimedia",
      "UK education range via PonyABC",
    ],
    link: {
      label: "UK Initiative",
      href: company.domains.ponyabc,
      note: "Interactive & AR learning for the UK.",
    },
  },
];

// Native intrinsic dimensions are stored so layouts can respect each image's true
// orientation (portrait vs landscape) instead of cropping to a fixed ratio.
export type GalleryImage = { src: string; w: number; h: number; alt: string };

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
  gallery: GalleryImage[]; // gallery[0] = detail hero; see coverImage() for the index thumb
  cover?: GalleryImage; // explicit index-thumbnail override (portrait projects, etc.)
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
    client: "Hong Kong International Airport - Intelligent Customer Service Counter",
    editorialTitle: "Elevating Global Travel",
    sector: "Aviation · Public Interactive",
    location: "Hong Kong",
    scope:
      "Intelligent Customer Service Counters (ICSC) · Interactive Wayfinding · Live Video Support",
    summary:
      "Intelligent Customer Service Counters deployed with the Hong Kong Airport Authority across one of the world's busiest airports.",
    detail:
      "In collaboration with the Hong Kong Airport Authority (HKAA) and NEC, MacroKinetic deployed its Intelligent Customer Service Counters (ICSC) at Hong Kong International Airport — 38 units in Terminal 1, with further installations planned for Terminals 2 and 3. The solution offers passengers comprehensive airport and flight information, intuitive wayfinding (on-kiosk and bring-to-mobile), boarding-pass details, live video support from customer-service agents, and an AI LLM chatbot for 24/7 assistance.",
    partner: "with HKAA & NEC",
    highlights: [
      "38 ICSC units in Terminal 1",
      "Further units planned for T2 & T3",
      "Wayfinding: on-kiosk + bring-to-mobile",
      "Live video support + AI LLM chatbot, 24/7",
    ],
    relatedSolutions: ["AI Solutions", "Retail Technology"],
    gallery: [
      { src: "https://static.wixstatic.com/media/66d5ca_da638972f5224936994f70ad383622fa~mv2.jpeg/v1/fill/w_1979,h_1484,al_c,q_90/66d5ca_da638972f5224936994f70ad383622fa~mv2.webp", w: 1979, h: 1484, alt: "HKIA Intelligent Customer Service Counter terminal installed by MacroKinetic at Hong Kong International Airport" },
      { src: "/references/hkia/02.jpg", w: 1600, h: 898, alt: "Terminal 1 interactive wayfinding map on an HKIA service kiosk" },
      { src: "/references/hkia/03.jpg", w: 1600, h: 900, alt: "Live video customer-service support on an HKIA Intelligent Service Counter" },
    ],
    featured: true,
  },
  {
    slug: "hkia-food-court",
    client: "Hong Kong International Airport - Interactive Food Court Menu",
    editorialTitle: "Dining Navigation at the Airport",
    sector: "Aviation · Public Interactive",
    location: "Hong Kong",
    scope: "Interactive Food Court Menu · Vertical & Horizontal Kiosks",
    summary:
      "An interactive food court menu helping travellers browse dining and restaurants at Hong Kong International Airport.",
    detail:
      "A separate deployment from the service counters: MacroKinetic installed two interactive food court menu units at Hong Kong International Airport — a free-standing vertical kiosk and a horizontal menu board — letting travellers browse restaurants and dishes with a bilingual touch interface.",
    highlights: [
      "2 units installed in the HKIA food court",
      "Free-standing vertical kiosk + horizontal menu board",
      "Bilingual restaurant & dish browsing",
    ],
    relatedSolutions: ["Retail Technology", "Digital Signage"],
    gallery: [
      { src: "/references/hkia-food-court/01.jpg", w: 1600, h: 1199, alt: "Interactive food court menu board at Hong Kong International Airport" },
      { src: "/references/hkia-food-court/02.jpg", w: 1200, h: 1600, alt: "Free-standing interactive food court kiosk at HKIA Terminal 1" },
    ],
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
    cover: { src: "https://static.wixstatic.com/media/66d5ca_b8d7d0c9487943d3a2f94953ee3890a5~mv2.jpg/v1/fill/w_738,h_975,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/66d5ca_b8d7d0c9487943d3a2f94953ee3890a5~mv2.jpg", w: 738, h: 975, alt: "ELEMENTS mall interactive e-Wayfinding directory kiosk" },
    gallery: [
      { src: "https://static.wixstatic.com/media/66d5ca_b8d7d0c9487943d3a2f94953ee3890a5~mv2.jpg/v1/fill/w_738,h_975,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/66d5ca_b8d7d0c9487943d3a2f94953ee3890a5~mv2.jpg", w: 738, h: 975, alt: "ELEMENTS mall interactive e-Wayfinding directory with 'Take Me There' routing" },
      { src: "https://static.wixstatic.com/media/66d5ca_a510723a2af24033a58cb5d6d4bbff0a~mv2.jpg/v1/fill/w_738,h_975,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/66d5ca_a510723a2af24033a58cb5d6d4bbff0a~mv2.jpg", w: 738, h: 975, alt: "ELEMENTS mall e-Wayfinding kiosk — store directory and concierge interface" },
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
      { src: "/references/tai-po/01.jpg", w: 1600, h: 900, alt: "Interactive projection experience at Tai Po Music & Art Center" },
      { src: "/references/tai-po/02.jpg", w: 900, h: 1600, alt: "Immersive interactive wall at Tai Po Music & Art Center" },
      { src: "/references/tai-po/03.jpg", w: 1600, h: 738, alt: "Visitors engaging with interactive projection at Tai Po Music & Art Center" },
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
      { src: "/references/interactive-installations/01.jpg", w: 1600, h: 1096, alt: "Interactive touch table at the HSBC Museum & Archive" },
      { src: "/references/interactive-installations/02.jpg", w: 1600, h: 1312, alt: "Interactive heritage table installation, HSBC Museum & Archive" },
      { src: "/references/interactive-installations/03.jpg", w: 906, h: 1600, alt: "AI dress-changing interactive mirror for Chow Sang Sang" },
      { src: "/references/interactive-installations/04.jpg", w: 1600, h: 1088, alt: "Gesture-driven interactive game at Hong Kong Disneyland" },
      { src: "/references/interactive-installations/05.jpg", w: 1600, h: 951, alt: "Interactive brand installation — partner project (BMW Showroom · Dior Hong Kong · Sky100)" },
      { src: "/references/interactive-installations/06.jpg", w: 1600, h: 1239, alt: "Interactive exhibition installation — partner project" },
      { src: "/references/interactive-installations/07.jpg", w: 1600, h: 852, alt: "Interactive game installation — partner project" },
    ],
  },
  {
    slug: "macau-customs",
    client: "Government Projects",
    editorialTitle: "Public Sector Deployments",
    sector: "Government · Public Infrastructure",
    location: "Hong Kong · Macau",
    scope: "Customs Kiosks · Border Infrastructure · Sports Facilities",
    summary:
      "Selected public-sector deployments including customs lane kiosks, the Hong Kong–Zhuhai–Macao Bridge (Macau section), and government stadium and sports hall installations.",
    detail:
      "MacroKinetic's government and public-sector portfolio spans border infrastructure, civic display systems and sports facilities: customs lane kiosk systems; LED displays and infrastructure at the Hong Kong–Zhuhai–Macao Bridge (Macau section); and technology installations across government stadiums and sports halls under the Macau Sports Development Board.",
    highlights: [
      "Customs lane kiosk systems",
      "HK–Zhuhai–Macao Bridge (Macau section)",
      "Government stadiums and sports halls — Macau Sports Development Board",
    ],
    relatedSolutions: ["Digital Signage", "Retail Technology"],
    cover: { src: "/references/macau-customs/04.jpg", w: 1600, h: 1199, alt: "LED display at a government sports hall, Macau" },
    // Note: macau-customs/01.jpg (border customs-lane kiosk) is intentionally
    // omitted from display — it shows a sensitive border checkpoint. The section
    // still documents customs work in copy; visuals stay on the non-sensitive
    // government sports-facility installations (04 hero, 03).
    gallery: [
      { src: "/references/macau-customs/04.jpg", w: 1600, h: 1199, alt: "LED display at a government sports hall, Macau" },
      { src: "/references/macau-customs/03.jpg", w: 1600, h: 1199, alt: "Government sports facility installation — Macau Sports Development Board" },
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
      "A portfolio of LED display and kiosk work across landmark retail and hospitality — including K11 (Tsim Sha Tsui), Mile Shopping Mall (Tai Kok Tsui), Emporio Armani, Windsor House (Causeway Bay), Shatin New Town Plaza and the W Hotel front desk.",
    highlights: [
      "K11 — Tsim Sha Tsui",
      "Mile Shopping Mall — Tai Kok Tsui",
      "Windsor House — Causeway Bay",
      "Shatin New Town Plaza · W Hotel",
    ],
    relatedSolutions: ["Digital Signage", "Retail Technology"],
    cover: { src: "/references/macau-customs/02.jpg", w: 1600, h: 1201, alt: "LED display and kiosk at Windsor House, Causeway Bay" },
    gallery: [
      { src: "/references/macau-customs/02.jpg", w: 1600, h: 1201, alt: "LED display and kiosk at Windsor House, Causeway Bay" },
      { src: "/references/retail-led/01.jpg", w: 1600, h: 979, alt: "LED display at K11, Tsim Sha Tsui" },
      { src: "/references/retail-led/02.jpg", w: 1600, h: 791, alt: "Retail LED signage at a landmark Hong Kong mall" },
      { src: "/references/retail-led/03.jpg", w: 1200, h: 1600, alt: "Outdoor LED display, Hong Kong retail installation" },
      { src: "/references/retail-led/04.jpg", w: 1200, h: 1600, alt: "Building exterior LED installation, Hong Kong" },
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
      { src: "/references/smart-lighting/01.jpg", w: 1600, h: 1128, alt: "Architectural façade media lighting" },
      { src: "/references/smart-lighting/02.jpg", w: 1577, h: 1600, alt: "Luxury retail lighting scheme" },
      { src: "/references/smart-lighting/03.jpg", w: 1068, h: 1600, alt: "Hotel architectural lighting" },
      { src: "/references/smart-lighting/04.jpg", w: 1066, h: 1600, alt: "Landmark lighting installation" },
    ],
  },
];

export function getReferenceBySlug(slug: string): Reference | undefined {
  return references.find((r) => r.slug === slug);
}

// Index thumbnails: honour an explicit cover override first, then pick the first
// landscape image, falling back to gallery[0] if the project is portrait-only.
export function coverImage(ref: Reference): GalleryImage {
  if (ref.cover) return ref.cover;
  return ref.gallery.find((g) => g.w >= g.h) ?? ref.gallery[0];
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

export type FaqSection = { heading: string; items: { q: string; a: string }[] };

// Bump both fields whenever FAQ content changes. Leave untouched for unrelated site edits.
// Format: date = YYYY-MM-DD, id = v<YYYY>.<MM>.<DD>-<revision> (increment revision if
// multiple FAQ edits happen on the same day).
export const faqVersion = {
  date: "2026-06-17",
  id: "v2026.06.17-1",
};

export const faqs: FaqSection[] = [
  {
    heading: "Company & Operations",
    items: [
      {
        q: "What does MacroKinetic do?",
        a: "MacroKinetic designs, deploys, and maintains integrated intelligent technology systems — digital signage, interactive kiosks and wayfinding, service automation, smart lighting, and applied AI — for enterprise, government, and transit clients across Asia-Pacific and the United Kingdom.",
      },
      {
        q: "When was MacroKinetic founded?",
        a: "MacroKinetic was founded in 2008.",
      },
      {
        q: "Where does MacroKinetic operate?",
        a: "MacroKinetic operates from three locations: Hong Kong (Asia-Pacific operations and project delivery), London, United Kingdom (European headquarters and commercial), and Shenzhen, China (engineering, manufacturing, and R&D). A Singapore hub is planned.",
      },
      {
        q: "What is MacroKinetic Mediatech Limited?",
        a: "MacroKinetic Mediatech Limited is the UK-registered legal entity for MacroKinetic's European operations, established in London to serve EMEA commercial and partnership requirements.",
      },
      {
        q: "What is the relationship between macrokinetic.com, macrokinetic.ai, and ponyabc.co.uk?",
        a: "macrokinetic.com is the corporate hub for MacroKinetic Global. macrokinetic.ai is the company's industrial AI division, focused on computer vision inspection and compliance monitoring for manufacturers. ponyabc.co.uk is MacroKinetic's UK education technology brand, selling interactive and AR learning products for children.",
      },
      {
        q: "Does MacroKinetic handle the full project lifecycle?",
        a: "Yes. MacroKinetic owns the complete delivery chain — from solution design and hardware supply through to installation, content management, and ongoing field maintenance — without subcontracting core work to third parties.",
      },
    ],
  },
  {
    heading: "Services & Capabilities",
    items: [
      {
        q: "What types of digital signage does MacroKinetic supply and install?",
        a: "MacroKinetic supplies and installs fine-pitch indoor LED video walls, outdoor LED displays, transparent LED panels, holographic invisible-screen displays, 3D kinetic LED, and retail shelf LED — managing the full chain from content pipeline through to structural installation.",
      },
      {
        q: "What is an Intelligent Customer Service Counter (ICSC)?",
        a: "An ICSC is a self-service kiosk that provides passengers or visitors with venue and flight information, interactive wayfinding with bring-to-mobile capability, live video support from human agents, and an AI LLM chatbot for 24/7 assistance. MacroKinetic deployed 38 ICSC units at Hong Kong International Airport Terminal 1 in collaboration with the Hong Kong Airport Authority and NEC, with further units planned for Terminals 2 and 3.",
      },
      {
        q: "What is e-Wayfinding and where has MacroKinetic deployed it?",
        a: "e-Wayfinding is an interactive directory system with touch-based routing and \"Take Me There\" step-by-step navigation. MacroKinetic deployed an integrated e-Wayfinding, e-Concierge, and e-Carpark Redemption suite at ELEMENTS mall in Kowloon, Hong Kong.",
      },
      {
        q: "What is MacroKinetic's role in architectural lighting?",
        a: "MacroKinetic is the sole Hong Kong and Macau distributor of Nicolaudie computerised DMX lighting control systems. The company designs and installs architectural, façade, and retail lighting for luxury brands including Louis Vuitton, Van Cleef & Arpels, and Lancôme, and for hospitality venues including the W Hotel and Harbour Plaza Hotels.",
      },
      {
        q: "What public-sector and government projects has MacroKinetic delivered?",
        a: "MacroKinetic has delivered customs lane kiosk systems, LED displays and infrastructure at the Hong Kong–Zhuhai–Macao Bridge (Macau section), and technology installations across government stadiums and sports halls under the Macau Sports Development Board.",
      },
    ],
  },
  {
    heading: "MacroKinetic AI — Industrial AI",
    items: [
      {
        q: "What is MacroKinetic's industrial AI division?",
        a: "MacroKinetic's AI division (macrokinetic.ai) designs and deploys computer vision systems for manufacturing operations — covering quality inspection and defect detection, SOP compliance monitoring, safety and PPE surveillance, and MES integration. It is a division of MacroKinetic Mediatech Limited, UK.",
      },
      {
        q: "What industries does MacroKinetic AI serve?",
        a: "Confirmed deployments span automotive manufacturing (wire harness SOP compliance and inspection), precision engineering (hydraulic cylinder inspection), and food manufacturing (hygiene entry SOP and safety compliance). The same capabilities apply to warehousing, logistics, and other regulated environments.",
      },
      {
        q: "How accurate is the automated defect detection?",
        a: "MacroKinetic's computer vision systems detect surface scratches from 0.1mm width and sand holes from 0.1mm diameter, operating at full production line speed across every shift without fatigue or operator variability. In one deployment, QC staffing was reduced from 14 to 3 with no reduction in detection accuracy.",
      },
      {
        q: "What is SOP compliance monitoring?",
        a: "SOP compliance monitoring uses hand-tracking AI to verify that each assembly or inspection step is performed in the correct sequence. If a step is skipped or non-compliant, the system triggers an immediate alert — preventing non-conforming product from leaving the line and creating a full video record for review and training.",
      },
      {
        q: "How does MacroKinetic AI support food safety compliance?",
        a: "The system monitors each hygiene entry step individually — lint-roller use, shoe sole cleaning, and handwashing — raising an alert if any step is missed before a person enters a production area. PPE compliance, stairway handrail usage, and zone access are monitored continuously, with timestamped logs supporting BRC audit requirements.",
      },
      {
        q: "Does the AI system replace human QC workers?",
        a: "No. MacroKinetic's systems work alongside the existing workforce. AI handles repetitive, fatiguing inspection tasks so human operators can focus on judgement, investigation, and process improvement. The goal is higher operational effectiveness and a safer environment, not headcount reduction.",
      },
    ],
  },
  {
    heading: "PonyABC — UK Education",
    items: [
      {
        q: "What is PonyABC?",
        a: "PonyABC is MacroKinetic's UK education technology brand, offering interactive and augmented-reality (AR) learning products for children aged 3 and above. Products are sold through ponyabc.co.uk and target UK and European families, including bilingual and trilingual households.",
      },
      {
        q: "What products does PonyABC sell?",
        a: "PonyABC currently offers three products: the AR Magic Tangram (£29.90), the Time-Capsule Voice Sticker in a Hug Hug Dinosaur Special Edition (£39.90), and the Trilingual Early Learning Encyclopedia and Smart Talking Pen Set covering Cantonese, Mandarin, and English with 5,000+ knowledge points across 29 themes (£59.90).",
      },
      {
        q: "What is the AR Magic Tangram?",
        a: "The AR Magic Tangram combines a traditional 7-piece silicone tangram puzzle with augmented reality. A free app (iOS and Android) detects the physical pieces using a smartphone or tablet camera, generating real-time AR interactions across more than 20 theme types and thousands of shape combinations. It is designed to develop spatial reasoning and coordination in children aged 3 and above.",
      },
      {
        q: "Does PonyABC support multilingual learning?",
        a: "Yes. The Trilingual Early Learning Encyclopedia and Smart Talking Pen Set supports Cantonese, Mandarin, and English — covering 5,000+ knowledge points across 29 themes, with authentic Cantonese expressions and a progressive trilingual curriculum for early learners.",
      },
      {
        q: "Does PonyABC ship to the UK?",
        a: "Yes. PonyABC ships within the United Kingdom, with free shipping on orders over £50.",
      },
    ],
  },
];

