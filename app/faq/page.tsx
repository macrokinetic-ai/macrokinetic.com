import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about MacroKinetic — the company, its services, industrial AI division, and PonyABC education brand.",
};

const sections = [
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

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sections.flatMap(({ items }) =>
    items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <section className="bg-canvas pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="shell">
          <p className="eyebrow">FAQ</p>
          <h1 className="mt-4 max-w-2xl text-3xl font-medium leading-tight tracking-editorial text-ink md:text-4xl">
            Common Questions
          </h1>
          <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-muted">
            Answers about MacroKinetic, its services, industrial AI division,
            and PonyABC UK education brand.
          </p>
        </div>
      </section>

      {sections.map(({ heading, items }) => (
        <section key={heading} className="hairline-t bg-canvas">
          <div className="shell py-10 md:py-14">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <p className="eyebrow">{heading}</p>
              </div>
              <div className="md:col-span-8">
                <div className="border-hairline">
                  {items.map(({ q, a }) => (
                    <details key={q} className="group hairline-t">
                      <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[13px] font-medium text-ink [&::-webkit-details-marker]:hidden">
                        {q}
                        <span className="ml-6 flex-shrink-0 text-base leading-none text-faint transition-transform duration-200 ease-editorial group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="pb-5 pr-10 text-[13px] leading-relaxed text-muted">
                        {a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
