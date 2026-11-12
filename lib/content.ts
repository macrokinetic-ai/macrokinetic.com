/**
 * MacroKinetic Global Hub — content layer.
 *
 * Single source of truth for all corporate copy. Figures and references were
 * synthesised from the corporate decks in /INFO (Corporate_Presentation_20250422)
 * and the briefed company facts. Edit copy here; pages stay structural.
 */

export const company = {
  name: "MacroKinetic",
  // Real legal entities (shown in the footer; UK Companies Act disclosure).
  legalName: "MacroKinetic MediaTech Limited",
  ukEntity: {
    name: "MacroKinetic MediaTech Limited",
    number: "16420643",
    office: "128 City Road, London EC1V 2NX",
  },
  hkEntity: "MacroKinetic Technology Consulting Limited",
  siteUrl: "https://www.macrokinetic.com",
  salesEmail: "accounts@macrokinetic.com",
  established: 2008,
  tagline: "Engineering the interface between people and the physical world.",
  positioning:
    "Integrated intelligent technology — AI, automation & robotics, digital signage, retail technology, smart lighting and smart education — engineered end-to-end for enterprise, transit and the built environment.",
  domains: {
    ai: "https://macrokinetic.ai",
    ponyabc: "https://ponyabc.co.uk",
    trevo: "https://www.trevo.ai",
  },
  linkedin: {
    uk: "https://www.linkedin.com/company/macrokinetic-mediatech",
    group: "https://www.linkedin.com/company/macrokinetic",
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
      "PonyABC — our London-designed early-years learning brand: multilingual talking pens, learning materials, digital content and connected technology.",
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
      "Monitoring, maintenance & technical support",
    ],
    link: {
      label: "UK Hotels",
      href: "/hotels",
      note: "Trevo hotel self check-in kiosks — authorised UK & Europe partner.",
    },
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
      "Through PonyABC, our London-based early-years brand, MacroKinetic brings together interactive learning hardware, multilingual content, digital media and connected technology — talking pens, learning materials, sensory colour experiences, free nursery resources and new education product development.",
    capabilities: [
      "Multilingual talking pens, cards & books",
      "Sensory Colour Learning System (winter 2026)",
      "Songs, videos & free nursery teaching resources",
      "Education product development & partnerships",
    ],
    link: {
      label: "Education",
      href: "/education",
      note: "MacroKinetic in early-years education, through PonyABC.",
    },
  },
];

// Native intrinsic dimensions are stored so layouts can respect each image's true
// orientation (portrait vs landscape) instead of cropping to a fixed ratio.
export type GalleryImage = { src: string; w: number; h: number; alt: string };

export type Reference = {
  slug: string;
  client: string;
  seoTitle?: string; // <=45 chars; used as <title> when client name is long
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
    seoTitle: "HKIA Intelligent Customer Service Counters",
    editorialTitle: "Elevating Global Travel",
    sector: "Aviation · Public Interactive",
    location: "Hong Kong",
    scope:
      "Intelligent Customer Service Counters (ICSC) · Interactive Wayfinding · Live Video Support",
    summary:
      "Intelligent Customer Service Counters designed and developed with NEC for one of the world's busiest airports — 48 units live.",
    detail:
      "Together with NEC, and for the Hong Kong Airport Authority (HKAA), MacroKinetic designed and developed the Intelligent Customer Service Counters (ICSC) at Hong Kong International Airport — 48 units are live, with more planned. MacroKinetic is the developer; it does not operate the counters. The solution offers passengers comprehensive airport and flight information, intuitive wayfinding (on-kiosk and bring-to-mobile), boarding-pass details, live video support from customer-service agents, and an AI LLM chatbot for 24/7 assistance.",
    partner: "with HKAA & NEC",
    highlights: [
      "48 ICSC units live",
      "More units planned",
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
    seoTitle: "HKIA Interactive Food Court Menu — Case Study",
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
    lines: ["European Headquarters", "Trevo Partner, UK & Europe"],
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
  { label: "Hotels", href: "/hotels" },
  { label: "Education", href: "/education" },
  { label: "Solutions", href: "/solutions" },
  { label: "References", href: "/references" },
] as const;

export type FaqSection = { heading: string; items: { q: string; a: string }[] };

// Bump both fields whenever FAQ content changes. Leave untouched for unrelated site edits.
// Format: date = YYYY-MM-DD, id = v<YYYY>.<MM>.<DD>-<revision> (increment revision if
// multiple FAQ edits happen on the same day).
export const faqVersion = {
  date: "2026-11-12",
  id: "v2026.11.12-1",
};

export const faqs: FaqSection[] = [
  {
    heading: "Trevo — Hotel Self Check-in (UK)",
    items: [
      {
        q: "Who is MacroKinetic, and what is your relationship with Trevo?",
        a: "Trevo is a Singapore hotel technology company. MacroKinetic MediaTech Limited, based in London, is Trevo's authorised partner for the UK and Europe, providing sales, installation and local support for UK hotels.",
      },
      {
        q: "Can MacroKinetic supply and install Trevo self check-in kiosks for our hotel in the UK?",
        a: "Yes. MacroKinetic MediaTech Limited, based in London, is Trevo's authorised UK and Europe partner. We provide sales, installation and local support for UK hotels considering Trevo self check-in technology, and discuss kiosk options, lobby requirements, PMS and door-lock integration and the installation process before recommending a solution.",
      },
      {
        q: "Is MacroKinetic the manufacturer of Trevo kiosks?",
        a: "No. Trevo is a Singapore hospitality technology company that makes the kiosks and software. MacroKinetic MediaTech Limited is Trevo's authorised UK and Europe partner for sales, installation and local support.",
      },
      {
        q: "Will Trevo work with our existing PMS, room locks and payments?",
        a: "Trevo's integration partners include Oracle OPERA, Infor HMS, Cloudbeds, SALTO, VingCard, Stripe and Adyen. Compatibility depends on your particular systems, versions and configuration, so we review the requirements with you before making a recommendation.",
      },
      {
        q: "Do guests have to use a kiosk?",
        a: "No. Hotels can keep assisted check-in alongside Trevo's self-service options, and guests can also use app-free mobile and web check-in.",
      },
      {
        q: "What if a guest's room is not ready?",
        a: "Trevo supports auto-resume, so an unfinished check-in can continue later rather than starting again. We can review how this fits your hotel's room-status process.",
      },
      {
        q: "Does Trevo replace our reception team?",
        a: "No. It is designed to handle routine check-in tasks, not the personal welcome. Your reception team remains important for hospitality, exceptions and guests who prefer assistance.",
      },
      {
        q: "Can Trevo support UK guest-registration requirements?",
        a: "Trevo offers identity capture and digital registration features that may support parts of a hotel's guest-record process. What is collected, how long it is kept and how it fits the hotel's UK legal and data-protection obligations are reviewed as part of each project. Using a kiosk does not by itself make a hotel compliant.",
      },
      {
        q: "How do we get started?",
        a: "Email accounts@macrokinetic.com or use the enquiry form to request an initial 20-minute conversation. Tell us a little about your property and the systems you use, and we will discuss your priorities and suitable next steps.",
      },
    ],
  },
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
        a: "MacroKinetic operates from three locations: London, United Kingdom (European headquarters), Hong Kong (Asia-Pacific operations and project delivery), and Shenzhen, China (engineering, manufacturing, and R&D). A Singapore hub is planned.",
      },
      {
        q: "What is MacroKinetic MediaTech Limited?",
        a: "MacroKinetic MediaTech Limited is MacroKinetic's London company, registered in England and Wales (company number 16420643). It is Trevo's authorised partner for the UK and Europe, providing sales, installation and local support for Trevo hotel self check-in kiosks, and it is the company behind the PonyABC education brand.",
      },
      {
        q: "What is MacroKinetic Technology Consulting Limited?",
        a: "MacroKinetic Technology Consulting Limited is MacroKinetic's Hong Kong company, working since 2008. It designed and developed the Intelligent Customer Service Counters at Hong Kong International Airport together with NEC.",
      },
      {
        q: "What is the relationship between macrokinetic.com, macrokinetic.ai, and ponyabc.co.uk?",
        a: "macrokinetic.com is the corporate hub for the MacroKinetic group. macrokinetic.ai is the company's industrial AI division, focused on computer vision inspection and compliance monitoring for manufacturers. ponyabc.co.uk is the website of PonyABC, the London-designed early-years learning brand of MacroKinetic MediaTech Limited (talking pens, learning cards and books, songs, free nursery resources and the Sensory Colour Learning System).",
      },
      {
        q: "Does MacroKinetic handle the full project lifecycle?",
        a: "Yes. MacroKinetic manages the delivery chain — from solution design and hardware supply through to installation, content management and ongoing field maintenance — working with selected hardware and software partners on each project.",
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
        a: "An ICSC is a self-service kiosk that provides passengers or visitors with venue and flight information, interactive wayfinding with bring-to-mobile capability, live video support from human agents, and an AI LLM chatbot for 24/7 assistance. MacroKinetic designed and developed the ICSC at Hong Kong International Airport together with NEC: 48 units are live, with more planned. MacroKinetic is the developer and does not operate the counters.",
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
        a: "MacroKinetic's AI division (macrokinetic.ai) designs and deploys computer vision systems for manufacturing operations — covering quality inspection and defect detection, SOP compliance monitoring, safety and PPE surveillance, and MES integration. It is a division of MacroKinetic MediaTech Limited, UK.",
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
        a: "PonyABC (\"Learn and Play\") is an early-years learning brand of MacroKinetic MediaTech Limited, London, for children aged 3 and over. It develops multilingual talking pens, learning cards, songs and the PonyABC Sensory Colour Learning System for nursery settings. Products are sold through ponyabc.co.uk; institutional enquiries go to marketing@ponyabc.co.uk.",
      },
      {
        q: "What products does PonyABC sell?",
        a: "PonyABC offers the P5 talking pen, multilingual talking books and flash cards, PVC learning cards, children's songs and videos, free printable early-years teaching packs and 3D-printed learning toys (Makerplace). The PonyABC Sensory Colour Learning System for nursery settings is coming in winter 2026. See ponyabc.co.uk for the current range.",
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


// ── Trevo hotel self check-in (UK) — /hotels landing page ──────────────────
// Copy mirrors the MacroKinetic MediaTech LinkedIn page overview (Nov 2026).
// Rules: say "authorised partner", never "exclusive"; no prices; no customer
// names; images must show real Trevo models only.
export type TrevoModel = {
  name: string;
  title: string;
  description: string;
  bestFor: string;
  image: GalleryImage;
};

export const trevoModels: TrevoModel[] = [
  {
    name: "Mk0",
    title: "Built into your counter",
    description:
      "Compact touchscreen check-in stations built into the hotel's own reception furniture.",
    bestFor: "For hotels planning a new counter or adapting an existing one.",
    image: { src: "/hotels/mk0.jpg", w: 1600, h: 837, alt: "Trevo Mk0 touchscreen check-in stations built into a hotel reception counter" },
  },
  {
    name: "Mk1",
    title: "Tabletop key-card collection",
    description:
      "A portable touchscreen kiosk with automatic key-card encoding and dispensing, including QR-based key collection.",
    bestFor: "For hotels adding self-service key collection without redesigning the reception desk.",
    image: { src: "/hotels/mk1.jpg", w: 1600, h: 837, alt: "Guest checking in on a Trevo Mk1 tabletop kiosk in a hotel lobby" },
  },
  {
    name: "Mk2",
    title: "Passport, payment and keys",
    description:
      "A portable check-in kiosk with passport and ID scanning, a selfie camera with liveness checking, payment and key-card collection.",
    bestFor: "For hotels wanting more of the arrival handled at one self-service station.",
    image: { src: "/hotels/mk2.jpg", w: 1600, h: 837, alt: "Guest scanning a passport on a Trevo Mk2 self check-in kiosk" },
  },
  {
    name: "Mk3",
    title: "Compact self check-in",
    description:
      "A compact self check-in kiosk for properties where reception space is limited.",
    bestFor: "For smaller lobbies, side counters and layouts where a larger kiosk would not fit.",
    image: { src: "/hotels/mk3.jpg", w: 1600, h: 837, alt: "Trevo Mk3 compact self check-in kiosk" },
  },
];

export const trevoSteps = [
  { title: "Check in before arriving", text: "Guests can start registration on their own phone through a web link. No app download needed." },
  { title: "Complete the necessary checks", text: "Depending on the kiosk and configuration, Trevo supports passport or ID scanning, selfie matching with liveness checking, and payment." },
  { title: "Collect a room key", text: "Guests collect an encoded key card from a supported Trevo kiosk, connected to the hotel's systems." },
  { title: "Continue when the room is ready", text: "If a room is not ready, auto-resume lets check-in continue later instead of starting again." },
];

export const trevoExtras = [
  { title: "App-free mobile check-in", text: "Guests complete supported registration steps through a web link on their phone, without installing an app." },
  { title: "AI virtual concierge", text: "A screen-based virtual concierge answers everyday guest questions, in 52 major languages." },
  { title: "52 kiosk languages", text: "Kiosk screens are available in 52 languages for international guests." },
];

export const trevoIntegrations = [
  "Oracle OPERA",
  "Infor HMS",
  "Cloudbeds",
  "SALTO",
  "VingCard",
  "Stripe",
  "Adyen",
];

// ── PonyABC / Education (/education) ───────────────────────────────────────
// Enterprise copy drafted with ChatGPT (12 Nov 2026). Rules: no prices, no
// certification claims, no "sensory-safe"/therapeutic claims, Philips/IKEA/
// TrimUI named as third-party products only (no partnership or endorsement).
export const PONYABC_SENSORY_URL = "https://ponyabc.co.uk/pages/sensory-colour-system";
export const PONYABC_EMAIL = "marketing@ponyabc.co.uk";

export const PONYABC_SHOP = "https://ponyabc.co.uk/collections/all";
export const PONYABC_NURSERIES = "https://ponyabc.co.uk/pages/faq?view=nurseries";
export const PONYABC_YOUTUBE = "https://www.youtube.com/@PonyABC";
export const PONYABC_TM = "UK00004423033";

export const eduOffer: { title: string; text: string; link: { label: string; href: string } }[] = [
  {
    title: "Talking pens and learning cards",
    text: "The PonyABC P5 talking pen works offline, bringing multilingual audio to physical learning materials. Durable PVC phonics and colour cards support hands-on early-years activities.",
    link: { label: "Explore pens and cards", href: PONYABC_SHOP },
  },
  {
    title: "Multilingual talking books",
    text: "Interactive books support language exploration through audio and physical reading. The range includes a trilingual Cantonese, Mandarin and English encyclopedia and pen set.",
    link: { label: "Explore learning books", href: PONYABC_SHOP },
  },
  {
    title: "Sensory Colour Learning System",
    text: "Coming winter 2026. Children tap a colour card with a talking pen, hear the colour name and see connected room lights change to match. Works with supported third-party Philips Hue or IKEA lighting.",
    link: { label: "Explore the system", href: PONYABC_SENSORY_URL },
  },
  {
    title: "3D-printed learning toys",
    text: "The PonyABC Makerplace range includes small learning toys made in the UK, bringing physical play and creative design together.",
    link: { label: "Explore Makerplace", href: PONYABC_SHOP },
  },
  {
    title: "Songs and learning videos",
    text: "Gentle nursery songs and simple learning videos help young children explore language and everyday concepts through music and familiar characters.",
    link: { label: "PonyABC on YouTube", href: PONYABC_YOUTUBE },
  },
];

export const eduPartners = [
  "Nursery groups and early-years settings",
  "Universities and early-years researchers",
  "SEN specialists",
  "Education distributors",
  "Technology partners",
  "Chinese schools developing teaching materials",
];

export const eduFaq: { q: string; a: string }[] = [
  { q: "What is MacroKinetic's role in education?", a: "MacroKinetic brings its experience in interactive systems, connected hardware and digital technology into early-years education through PonyABC, a brand of its London company, MacroKinetic MediaTech Limited." },
  { q: "What does PonyABC offer?", a: "PonyABC develops multilingual talking pens and learning cards, interactive books, sensory colour learning technology, UK-made 3D-printed toys, nursery songs, learning videos and free teaching resources. Some products, including the Sensory Colour Learning System, are still in development." },
  { q: "Are PonyABC's nursery teaching resources free?", a: "Yes. PonyABC provides more than 30 free printable teaching packs for ages 2–5, also available on Tes. New topics are released regularly." },
  { q: "Can organisations collaborate with MacroKinetic on education projects?", a: "Yes. We welcome discussions with nursery groups, universities and researchers, SEN specialists, education distributors, technology partners and Chinese schools developing learning materials. Contact marketing@ponyabc.co.uk." },
];
