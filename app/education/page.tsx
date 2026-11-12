import type { Metadata } from "next";
import Image from "next/image";
import {
  company,
  eduSteps,
  eduBenefits,
  eduComponents,
  eduPartners,
  eduFaq,
  PONYABC_SENSORY_URL,
  PONYABC_EMAIL,
} from "@/lib/content";

const PAGE_URL = `${company.siteUrl}/education`;
const TITLE = "PonyABC Sensory Colour Learning System | MacroKinetic";
const DESCRIPTION =
  "PonyABC sensory colour learning for nurseries and early-years SEN settings. Explore multilingual play, room lighting and institutional partnerships.";
const HERO = "https://ponyabc.co.uk/cdn/shop/files/pa-b-sensory-bg.png";
const GATEWAY = "https://ponyabc.co.uk/cdn/shop/files/pa-gw-pony-hug.png";
const VIDEO =
  "https://ponyabc.co.uk/cdn/shop/videos/c/vp/b3d5c15c2e294203904994fa03548e14/b3d5c15c2e294203904994fa03548e14.HD-1080p-2.5Mbps-100163783.mp4";
const MAIL_INTEREST = `mailto:${PONYABC_EMAIL}?subject=${encodeURIComponent("Sensory Colour Learning System - institutional interest")}`;
const MAIL_PARTNER = `mailto:${PONYABC_EMAIL}?subject=${encodeURIComponent("PonyABC partnership enquiry")}`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/education" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: HERO, width: 1536, height: 1024, alt: "Nursery room with soft colour lighting" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [HERO] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Brand",
      "@id": `${PAGE_URL}#ponyabc`,
      name: "PonyABC",
      slogan: "Learn and Play",
      url: "https://www.ponyabc.co.uk",
    },
    {
      "@type": "Product",
      "@id": `${PAGE_URL}#sensory-colour-system`,
      name: "PonyABC Sensory Colour Learning System",
      description:
        "A child-led sensory colour system for nurseries and early-years SEN settings: a child taps a PonyABC colour card with the P5 talking pen, hears the colour name in multiple languages, and the room lights change to match. Coming winter 2026.",
      brand: { "@id": `${PAGE_URL}#ponyabc` },
      manufacturer: {
        "@type": "Organization",
        "@id": `${company.siteUrl}/#organization`,
        name: company.ukEntity.name,
      },
      audience: { "@type": "EducationalAudience", educationalRole: "Early years settings" },
      url: PONYABC_SENSORY_URL,
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: eduFaq.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

const btnDark =
  "rounded-full bg-ink px-6 py-3 text-[13px] font-medium tracking-editorial text-white transition-opacity hover:opacity-85";
const btnLight =
  "rounded-full border-hair border-hairline-strong px-6 py-3 text-[13px] font-medium tracking-editorial text-ink transition-colors hover:bg-paper";

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-2xl font-medium leading-tight tracking-editorial text-ink md:text-3xl">
        {title}
      </h2>
    </>
  );
}

export default function EducationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-canvas pt-28 md:pt-32">
        <div className="shell pb-10 md:pb-12">
          <p className="eyebrow">Education · Early Years · United Kingdom</p>
          <p className="mt-4 inline-block rounded-full bg-paper px-3 py-1 text-[11px] uppercase tracking-tracked text-macro">
            Coming winter 2026 · Register interest
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-6xl">
            PonyABC Sensory Colour Learning System for early-years settings.
          </h1>
          <div className="mt-8 max-w-2xl space-y-4 text-[16px] leading-relaxed text-muted">
            <p>
              A child taps a colour card. The talking pen says the colour in
              their chosen language. The room lights respond — a simple,
              child-led way to bring interactive colour learning into everyday
              nursery spaces.
            </p>
            <p>
              PonyABC is an early-years learning brand of MacroKinetic MediaTech
              Limited, London. We develop playful learning tools for nursery
              settings, with opportunities for institutional buyers, education
              partners and researchers.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={MAIL_INTEREST} className={btnDark}>
              Register your interest
            </a>
            <a href="#how-it-works" className={btnLight}>
              See how it works
            </a>
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="shell">
          <div className="overflow-hidden rounded-xl bg-paper">
            <Image
              src={HERO}
              alt="Nursery room with soft colour lighting, cushions and a rainbow rug"
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="h-auto w-full"
            />
          </div>
          <p className="mt-3 text-[11px] text-faint">Illustration.</p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-28 bg-canvas">
        <div className="shell py-16 md:py-24">
          <SectionHead eyebrow="How it works" title="A simple action. A room that responds." />
          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <ol className="border-hairline lg:col-span-5">
              {eduSteps.map((st, i) => (
                <li key={st.title} className="hairline-t py-6">
                  <p className="font-mono text-[13px] text-macro">0{i + 1}</p>
                  <h3 className="mt-2 text-[17px] font-medium text-ink">{st.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted">{st.text}</p>
                </li>
              ))}
              <li className="hairline-t pt-6 text-[15px] font-medium text-ink">
                The child leads the activity. The technology responds.
              </li>
            </ol>
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-xl bg-ink">
                <video
                  controls
                  preload="none"
                  playsInline
                  poster={HERO}
                  className="h-auto w-full"
                  aria-label="PonyABC Sensory Colour Learning System introduction video"
                >
                  <source src={VIDEO} type="video/mp4" />
                </video>
              </div>
              <p className="mt-3 text-[12px] text-faint">
                Introduction video (81 seconds).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Everyday spaces */}
      <section className="hairline-t bg-paper">
        <div className="shell py-16 md:py-24">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionHead
                eyebrow="For nursery settings"
                title="Bringing interactive colour into everyday nursery spaces."
              />
              <p className="mt-6 text-[16px] leading-relaxed text-graphite">
                Not every setting has a dedicated sensory room. PonyABC is
                designed to bring responsive colour lighting into ordinary
                nursery rooms and early-years SEN environments, without the
                complexity of a fixed sensory-room fit-out.
              </p>
            </div>
            <dl className="grid grid-cols-1 gap-px sm:grid-cols-2 md:col-span-7">
              {eduBenefits.map((b) => (
                <div key={b.title} className="hairline-t py-5 sm:pr-6">
                  <dt className="text-[16px] font-medium text-ink">{b.title}</dt>
                  <dd className="mt-1 text-[15px] leading-relaxed text-muted">{b.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="hairline-t bg-canvas">
        <div className="shell grid grid-cols-1 gap-12 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7">
            <SectionHead eyebrow="The system" title="Four components. One connected experience." />
            <div className="mt-10 border-hairline">
              {eduComponents.map((c) => (
                <div key={c.title} className="hairline-t py-5">
                  <h3 className="text-[16px] font-medium text-ink">{c.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted">{c.text}</p>
                </div>
              ))}
            </div>
            <a href={PONYABC_SENSORY_URL} target="_blank" rel="noopener noreferrer" className={`mt-8 inline-block ${btnLight}`}>
              Explore the full system ↗
            </a>
          </div>
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-xl bg-paper">
              <Image
                src={GATEWAY}
                alt="Pony character beside a TrimUI Smart Pro showing the PonyABC gateway app"
                width={900}
                height={600}
                sizes="(max-width: 768px) 100vw, 560px"
                className="h-auto w-full"
              />
            </div>
            <p className="mt-3 text-[12px] text-faint">
              The PonyABC gateway app on TrimUI Smart Pro.
            </p>
          </div>
        </div>
      </section>

      {/* Configurations */}
      <section className="hairline-t bg-paper">
        <div className="shell grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-5">
            <SectionHead eyebrow="Configurations" title="Start with one room. Explore what comes next." />
          </div>
          <div className="space-y-5 text-[16px] leading-relaxed text-graphite md:col-span-7">
            <p>
              The starter configuration brings together a P5 talking pen,
              colour cards, the PonyABC gateway and a choice of supported
              lighting setup. Additional lights, lamps, card sets and pens can
              be added for different nursery requirements.
            </p>
            <p>
              We welcome discussions with individual settings, nursery groups
              and multi-site education operators about suitable configurations.
            </p>
            <a href={MAIL_INTEREST} className={`inline-block ${btnDark}`}>
              Discuss your setting
            </a>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="hairline-t bg-canvas">
        <div className="shell grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-5">
            <SectionHead eyebrow="Research & partnerships" title="Built for exploration. Open to collaboration." />
          </div>
          <div className="space-y-5 text-[16px] leading-relaxed text-graphite md:col-span-7">
            <p>
              The system is built around a straightforward idea: a
              child&rsquo;s physical action can produce an immediate,
              understandable response in the learning environment.
            </p>
            <p>
              The IKEA DIRIGERA hub supports Matter, creating possibilities to
              explore future room responses beyond colour lighting. These are
              development and research opportunities, not features of the
              current release.
            </p>
            <p>We welcome conversations with:</p>
            <ul className="space-y-2">
              {eduPartners.map((p) => (
                <li key={p} className="hairline-t pt-2 text-[15px] text-ink">
                  {p}
                </li>
              ))}
            </ul>
            <p>
              PonyABC develops and tests ideas with children, parents and
              nursery teams, and we are interested in practical collaboration
              that helps shape future early-years learning.
            </p>
            <a href={MAIL_PARTNER} className={`inline-block ${btnLight}`}>
              Explore a partnership
            </a>
          </div>
        </div>
      </section>

      {/* More from PonyABC */}
      <section className="hairline-t bg-paper">
        <div className="shell grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <SectionHead eyebrow="More from PonyABC" title="Learn and Play." />
          </div>
          <div className="space-y-5 text-[16px] leading-relaxed text-graphite md:col-span-7">
            <p>
              Beyond the Sensory Colour Learning System, PonyABC offers
              multilingual talking books and flash cards, children&rsquo;s
              songs and videos, free printable early-years teaching resources,
              and small 3D-printed learning toys through Makerplace.
            </p>
            <a href="https://www.ponyabc.co.uk" target="_blank" rel="noopener noreferrer" className="inline-flex text-[14px] font-medium text-ink underline-offset-4 hover:underline">
              Visit PonyABC: www.ponyabc.co.uk ↗
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="hairline-t bg-canvas">
        <div className="shell grid grid-cols-1 gap-8 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <SectionHead eyebrow="FAQ" title="Questions education partners ask." />
          </div>
          <div className="md:col-span-8">
            <div className="border-hairline">
              {eduFaq.map(({ q, a }) => (
                <details key={q} className="group hairline-t">
                  <summary className="flex min-h-[52px] cursor-pointer list-none items-center justify-between py-4 text-[15px] font-medium text-ink [&::-webkit-details-marker]:hidden">
                    <h3 className="font-medium">{q}</h3>
                    <span className="ml-6 flex-shrink-0 text-lg leading-none text-faint transition-transform duration-200 ease-editorial group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="pb-5 pr-10 text-[15px] leading-relaxed text-muted">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hairline-t bg-ink">
        <div className="shell grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <h2 className="text-2xl font-medium leading-tight tracking-editorial text-white md:text-3xl">
              Let&rsquo;s explore what could work for your setting.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/70">
              Whether you are planning a nursery learning space, reviewing
              provision across several sites or exploring a research or
              commercial partnership, we would like to hear from you.
            </p>
          </div>
          <div className="flex flex-col justify-end gap-4 md:col-span-5 md:items-end">
            <div className="flex flex-wrap gap-3">
              <a href={MAIL_INTEREST} className="rounded-full bg-white px-6 py-3 text-[13px] font-medium tracking-editorial text-ink transition-opacity hover:opacity-85">
                Register institutional interest
              </a>
              <a href={MAIL_PARTNER} className="rounded-full border-hair border-white/40 px-6 py-3 text-[13px] font-medium tracking-editorial text-white transition-colors hover:bg-white/10">
                Discuss a partnership
              </a>
            </div>
            <p className="text-[13px] text-white/70">
              Email:{" "}
              <a href={`mailto:${PONYABC_EMAIL}`} className="text-white underline underline-offset-4">
                {PONYABC_EMAIL}
              </a>
            </p>
          </div>
          <p className="text-[11px] leading-relaxed text-white/45 md:col-span-12">
            PonyABC is a brand of MacroKinetic MediaTech Limited, London. PONY
            ABC® is a registered UK trade mark. For ages 3+ with adult
            supervision. Philips Hue, IKEA and TrimUI are independent
            third-party brands; PonyABC does not manufacture their hardware and
            has no partnership or endorsement arrangement with Philips or IKEA.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
