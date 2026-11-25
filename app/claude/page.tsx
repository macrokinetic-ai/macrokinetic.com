import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, ORG_ID } from "@/lib/schema";
import { company } from "@/lib/content";

// Claude services page. Wording rules: plain UK English; never "official",
// "partner" (except in the required disclaimer), "certified"; no Anthropic or
// Claude logos; only clients in Anthropic-supported regions.

const PATH = "/claude";
const PAGE_URL = `${company.siteUrl}${PATH}`;
const SUPPORTED_URL = "https://www.anthropic.com/supported-countries";
const TITLE = "Claude AI Setup and Project Help";
const DESCRIPTION =
  "Help choosing and setting up Claude plans, turning business tasks into Claude and Claude Code projects, workflow automation and hands-on training for small teams.";

export const metadata: Metadata = {
  alternates: { canonical: PATH },
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: `${TITLE} | MacroKinetic`, description: DESCRIPTION, url: PAGE_URL },
  twitter: { title: `${TITLE} | MacroKinetic`, description: DESCRIPTION },
};

const services = [
  {
    name: "Choosing and setting up Claude plans",
    text: "We help you pick the right Claude plan for you or your team and get it set up.",
  },
  {
    name: "Turning a business task into a Claude project",
    text: "We take a real task from your business and turn it into a Claude or Claude Code project.",
  },
  {
    name: "Workflow automation",
    text: "For example email triage, documents, reports and websites.",
  },
  {
    name: "Hands-on training for small teams",
    text: "Practical sessions so your team can use Claude in their daily work.",
  },
];

const steps = [
  { n: "01", title: "Tell us about your project", text: "Use the enquiry form below to describe the task or workflow you have in mind." },
  { n: "02", title: "We plan the setup", text: "We suggest the Claude plan and the project or automation that fits the task." },
  { n: "03", title: "We set it up with you", text: "We build it with your team and run hands-on training so you can keep using it." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: TITLE,
  serviceType: "Claude AI setup, project help, workflow automation and training",
  description: DESCRIPTION,
  url: PAGE_URL,
  provider: { "@id": ORG_ID },
  areaServed: {
    "@type": "Place",
    name: "Countries and regions supported by Anthropic",
    url: SUPPORTED_URL,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Claude services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, description: s.text },
    })),
  },
};

const btnDark =
  "inline-block rounded-full bg-ink px-6 py-3 text-[13px] font-medium tracking-editorial text-white transition-opacity hover:opacity-80";

export default function ClaudePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-canvas pt-28 md:pt-32">
        <div className="shell pb-16 md:pb-24">
          <p className="eyebrow">Claude services</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-6xl">
            Claude AI setup and project help.
          </h1>
          <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted">
            Benny and the team use Claude every day to run our own businesses:
            Claude.ai, Claude Code, connectors and automations. Many people ask
            us how to use Claude for their projects. This is how we can help.
          </p>
          <a href="#contact" className={`mt-10 ${btnDark}`}>
            Send an enquiry
          </a>
        </div>
      </section>

      {/* What we do */}
      <section className="hairline-t bg-canvas">
        <div className="shell grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-4">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-4 text-2xl font-medium tracking-editorial text-ink md:text-3xl">
              Four ways we help.
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-px sm:grid-cols-2 md:col-span-8">
            {services.map((s) => (
              <li key={s.name} className="hairline-t py-6 sm:pr-8">
                <h3 className="text-[16px] font-medium tracking-editorial text-ink">{s.name}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who it's for */}
      <section className="hairline-t bg-paper">
        <div className="shell grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-4">
            <p className="eyebrow">Who it&rsquo;s for</p>
          </div>
          <div className="md:col-span-8">
            <p className="max-w-2xl text-[16px] leading-relaxed text-graphite">
              Businesses and small teams that want to use Claude for their own
              projects, in countries and regions supported by Anthropic.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="hairline-t bg-canvas">
        <div className="shell py-16 md:py-20">
          <p className="eyebrow">How it works</p>
          <ol className="mt-8 grid grid-cols-1 gap-px md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="hairline-t py-6 md:pr-10">
                <span className="font-mono text-[13px] text-faint">{s.n}</span>
                <h3 className="mt-3 text-[16px] font-medium tracking-editorial text-ink">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Supported regions notice */}
      <section className="hairline-t bg-paper">
        <div className="shell py-16 md:py-20">
          <div className="max-w-3xl rounded-xl border-hair border-hairline-strong bg-canvas p-6 md:p-8">
            <p className="eyebrow">Supported regions</p>
            <p className="mt-4 text-[16px] font-medium leading-relaxed text-ink">
              We only provide Claude services to clients in countries and regions
              supported by Anthropic.
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-muted">
              See the list at{" "}
              <a
                href={SUPPORTED_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-ink underline underline-offset-4"
              >
                {SUPPORTED_URL}
              </a>
              . Clients outside these regions (for example Hong Kong and mainland
              China) cannot be served with Claude.
            </p>
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="hairline-t bg-canvas">
        <div className="shell flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <h2 className="max-w-lg text-xl font-medium leading-snug tracking-editorial text-ink md:text-2xl">
            Have a task you&rsquo;d like to hand to Claude? Tell us about it.
          </h2>
          <a href="#contact" className={btnDark}>
            Send an enquiry
          </a>
        </div>
        {/* Small-print disclaimer */}
        <div className="shell pb-12">
          <p className="max-w-3xl text-[11px] leading-relaxed text-faint">
            {company.ukEntity.name} is an independent company and is not
            affiliated with, endorsed by, or a partner of Anthropic. Claude is a
            trademark of Anthropic, PBC.
          </p>
        </div>
      </section>

      <JsonLd data={schema} />
      <JsonLd data={breadcrumbSchema([{ name: "Claude services", path: PATH }])} />
    </>
  );
}
