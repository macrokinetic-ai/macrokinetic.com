import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import Image from "next/image";
import Link from "next/link";
import WebinarSlot from "@/components/WebinarSlot";
import fs from "fs";
import path from "path";
import {
  company,
  trevoModels,
  trevoSteps,
  trevoExtras,
  trevoIntegrations,
  trevoStats,
  trevoJourney,
  trevoResults,
  trevoGuides,
  trevoHotels,
  faqs,
} from "@/lib/content";

const PAGE_URL = `${company.siteUrl}/hotels`;
const TITLE = "Hotel Self Check-In Kiosks UK | MacroKinetic";
const DESCRIPTION =
  "Trevo hotel self check-in kiosks, app-free mobile check-in and AI concierge. UK installation and support from MacroKinetic MediaTech, London.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/hotels" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/og-hotels.jpg", width: 1200, height: 630, alt: "Guests checking in on a Trevo Mk2 kiosk in a hotel lobby" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og-hotels.jpg"] },
};

const trevoFaq = faqs.find((f) => f.heading.startsWith("Trevo"));

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Trevo hotel self check-in kiosks — UK sales, installation and support",
      serviceType: "Hotel self check-in kiosk supply, installation and support",
      description:
        "MacroKinetic MediaTech Limited is Trevo's authorised UK and Europe partner and provides sales, installation and local support for UK hotels.",
      areaServed: [
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Place", name: "Europe" },
      ],
      audience: { "@type": "BusinessAudience", audienceType: "Hotels" },
      brand: { "@type": "Brand", name: "Trevo", url: company.domains.trevo },
      provider: {
        "@type": "Organization",
        "@id": `${company.siteUrl}/#organization`,
        name: company.ukEntity.name,
        url: company.siteUrl,
        email: company.salesEmail,
      },
      url: PAGE_URL,
    },
    ...(trevoFaq
      ? [
          {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            mainEntity: trevoFaq.items.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          },
        ]
      : []),
  ],
};

const btnDark =
  "rounded-full bg-ink px-6 py-3 text-[13px] font-medium tracking-editorial text-white transition-opacity hover:opacity-85";
const btnLight =
  "rounded-full border-hair border-hairline-strong px-6 py-3 text-[13px] font-medium tracking-editorial text-ink transition-colors hover:bg-paper";

function SectionHead({ eyebrow, title, dark = false }: { eyebrow: string; title: string; dark?: boolean }) {
  return (
    <>
      <p className={dark ? "text-[11px] font-medium uppercase tracking-wide2 text-white/50" : "eyebrow"}>{eyebrow}</p>
      <h2
        className={`mt-4 max-w-4xl text-3xl font-medium leading-[1.12] tracking-[-0.03em] md:text-[42px] ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
    </>
  );
}

// Real file size and page count, read from the PDFs at build time.
function pdfMeta(href: string) {
  try {
    const buf = fs.readFileSync(path.join(process.cwd(), "public", href));
    const pages = (buf.toString("latin1").match(/\/Type\s*\/Page(?!s)/g) || []).length;
    const mb = (buf.length / 1024 / 1024).toFixed(1);
    return `PDF · ${pages} pages · ${mb} MB`;
  } catch {
    return "PDF";
  }
}

const coverOf = (href: string) => href.replace("/downloads/trevo/", "/downloads/trevo/covers/").replace(".pdf", ".jpg");

export default function HotelsPage() {
  const [featured, ...guides] = trevoGuides;
  const [waterloo, fullerton, ...trevoFigures] = trevoResults;
  return (
    <>
      {/* 01 Hero */}
      <section className="bg-canvas pt-28 md:pt-32">
        <div className="shell pb-12 md:pb-16">
          {/* 00 Webinar slot: registration, then recording (lib/webinar.ts) */}
          <WebinarSlot />
          <p className="eyebrow">Hotels · United Kingdom</p>
          <h1 className="mt-6 max-w-[900px] text-[40px] font-semibold leading-[1.05] tracking-[-0.045em] text-ink md:text-[64px]">
            Hotel self check-in kiosks, with local support in London.
          </h1>
          <div className="mt-8 max-w-[610px] space-y-4 text-[16px] leading-[1.7] text-muted">
            <p>
              Guests arrive early, flights land late, and queues build just
              when reception is busiest.
            </p>
            <p>
              Trevo gives guests the choice to check in before arrival, use a
              self-service kiosk and collect their room key. Your reception
              team stays free to help guests who need them.
            </p>
            <p>
              MacroKinetic MediaTech Limited is Trevo&rsquo;s authorised UK and
              Europe partner, providing sales, installation and local support
              from London.
            </p>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#contact" className={btnDark}>
              Discuss Trevo for your hotel
            </a>
            <a href="#how-it-works" className={btnLight}>
              See how Trevo works
            </a>
          </div>
          <div className="mt-12 overflow-hidden rounded-xl bg-paper md:mt-16">
            <Image
              src="/hotels/hero-mk2-lobby.jpg?v=2"
              alt="Guests checking in on a Trevo Mk2 self check-in kiosk in a hotel lobby"
              width={1600}
              height={837}
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="aspect-[16/11] h-auto w-full object-cover md:aspect-auto"
            />
          </div>
          <p className="mt-3 text-[11px] text-faint">
            Illustrative hotel scenes featuring Trevo kiosk models.
          </p>
        </div>
      </section>

      {/* 02 Guest journey */}
      <section id="how-it-works" className="scroll-mt-28 bg-canvas">
        <div className="shell grid grid-cols-1 gap-12 py-20 md:py-28 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] xl:gap-20">
          <div>
            <SectionHead eyebrow="The guest journey" title="From arrival to room key." />
            <ol className="mt-12 border-b border-hairline">
              {trevoSteps.map((st, i) => (
                <li key={st.title} className="grid grid-cols-[48px_1fr] gap-4 border-t border-hairline py-6 md:grid-cols-[64px_1fr]">
                  <span className="font-mono text-[13px] text-macro">0{i + 1}</span>
                  <div>
                    <h3 className="text-[17px] font-medium text-ink">{st.title}</h3>
                    <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">{st.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {trevoExtras.map((x) => (
                <div key={x.title}>
                  <dt className="text-[14px] font-medium text-ink">{x.title}</dt>
                  <dd className="mt-1 text-[13px] leading-relaxed text-muted">{x.text}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-10 text-[12px] text-faint">
              Available steps depend on the kiosk model, hotel systems and agreed
              configuration. The aim is not to remove the human welcome, but to
              make routine tasks easier for guests and reception teams.
            </p>
          </div>
          <div className="lg:pt-20">
            <div className="rounded-xl bg-paper p-6 md:p-8">
              <video
                src="/hotels/m-hotel-mk2.mp4"
                poster="/hotels/m-hotel-mk2-poster.jpg"
                muted
                playsInline
                controls
                preload="metadata"
                width={544}
                height={960}
                className="mx-auto h-auto w-full max-w-[300px] rounded-lg"
                aria-label="Trevo at M Hotel: pre-arrival registration on a phone, check-in at a Trevo Mk2 kiosk and key-card collection"
              />
              <p className="mx-auto mt-4 max-w-[300px] text-[12px] leading-relaxed text-muted">
                Real Trevo installation at M Hotel Singapore: pre-arrival
                registration, kiosk check-in and key collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 Proof band */}
      <section id="track-record" className="scroll-mt-28 bg-ink text-white">
        <div className="shell py-20 md:py-28">
          <SectionHead dark eyebrow="Trevo at a glance" title="Proven in Singapore since 2014. Now supported from London." />

          <dl className="mt-14 grid grid-cols-2 border-t border-white/15 lg:grid-cols-4">
            {trevoStats.map((st, i) => (
              <div
                key={st.label}
                className={`border-white/15 py-8 pr-6 lg:py-10 ${i % 2 === 1 ? "border-l pl-6" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l lg:pl-6" : ""}`}
              >
                <dd className="text-[40px] font-semibold leading-none tracking-[-0.05em] tabular-nums md:text-[56px]">{st.value}</dd>
                <dt className="mt-4 text-[14px] text-white/60">{st.label}</dt>
              </div>
            ))}
          </dl>

          <div className="grid grid-cols-1 border-t border-white/15 md:grid-cols-3">
            {[waterloo, fullerton].map((r, i) => (
              <div key={r.label} className={`border-white/15 py-8 md:py-10 md:pr-8 ${i === 1 ? "border-t md:border-l md:border-t-0 md:pl-8" : ""}`}>
                <p className="text-[11px] font-medium uppercase tracking-wide2 text-white/50">
                  {i === 0 ? "Hotel Waterloo · Singapore" : "The Fullerton Hotel · Singapore"}
                </p>
                <p className="mt-4 text-[36px] font-semibold leading-none tracking-[-0.04em] text-macro tabular-nums">{r.value}</p>
                <p className="mt-3 text-[15px] font-medium text-white">{r.label}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-white/55">{r.source}</p>
              </div>
            ))}
            <div className="border-t border-white/15 py-8 md:border-l md:border-t-0 md:py-10 md:pl-8">
              <p className="text-[11px] font-medium uppercase tracking-wide2 text-white/50">Trevo figures</p>
              <ul className="mt-4 space-y-5">
                {trevoFigures.map((r) => (
                  <li key={r.label}>
                    <p className="text-[24px] font-semibold leading-none tracking-[-0.03em] tabular-nums">{r.value}</p>
                    <p className="mt-2 text-[14px] text-white/70">{r.label}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[12px] leading-relaxed text-white/45">Results vary by property and set-up.</p>
            </div>
          </div>

          <ol className="relative grid grid-cols-1 gap-8 border-t border-white/15 pt-10 md:grid-cols-3 md:gap-0">
            <span aria-hidden className="absolute left-0 right-[33%] top-[46px] hidden h-px bg-white/20 md:block" />
            {trevoJourney.map((j, i) => (
              <li key={j.place} className="relative md:pr-8">
                <span
                  aria-hidden
                  className={`relative z-10 block h-3 w-3 rounded-full ring-4 ring-ink ${i === trevoJourney.length - 1 ? "bg-macro" : "bg-white"}`}
                />
                <h3 className="mt-5 text-[17px] font-medium text-white">{j.place}</h3>
                <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-white/60">{j.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 border-t border-white/15 pt-8">
            <p className="text-[11px] font-medium uppercase tracking-wide2 text-white/50">Hotels using Trevo include</p>
            <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-[15px] text-white/85 md:text-[17px]">
              {trevoHotels.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <p className="mt-8 text-[12px] text-white/40">
              Figures and hotel names supplied by Trevo; Fullerton figure as cited by the Singapore Tourism Board.
            </p>
          </div>
        </div>
      </section>

      {/* 04 Range */}
      <section className="hairline-t bg-paper">
        <div className="shell py-20 md:py-28">
          <SectionHead eyebrow="The Trevo range" title="Four kiosks. Different ways to welcome guests." />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
            {trevoModels.map((m) => (
              <article key={m.name} className="flex flex-col overflow-hidden rounded-xl border border-hairline bg-canvas">
                <div className="relative aspect-[16/10] bg-paper">
                  <Image
                    src={m.image.src}
                    alt={m.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 640px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <p className="text-[12px] font-semibold uppercase tracking-wide2 text-macro">Trevo {m.name}</p>
                  <h3 className="mt-2 text-xl font-medium tracking-tight text-ink">{m.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-graphite">{m.description}</p>
                  <p className="mt-auto pt-4 text-[13px] leading-relaxed text-muted">{m.bestFor}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-[15px] text-graphite">
            Not sure which fits your lobby?{" "}
            <a href="#contact" className="font-medium text-ink underline underline-offset-4">
              We&rsquo;ll talk you through the options.
            </a>
          </p>
        </div>
      </section>

      {/* 05 Implementation */}
      <section className="bg-canvas">
        <div className="shell py-20 md:py-28">
          <SectionHead eyebrow="Implementation" title="Technology that fits the hotel you already run." />
          <div className="mt-14 grid grid-cols-1 gap-12 border-t border-hairline pt-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <h3 className="text-[17px] font-medium text-ink">System compatibility</h3>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
                Your hotel already has a property management system, room locks
                and payment arrangements. Trevo&rsquo;s integration partners
                include:
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {trevoIntegrations.map((i) => (
                  <li key={i} className="rounded-md border border-hairline bg-paper px-3 py-1.5 text-[13px] text-graphite">
                    {i}
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-xl text-[13px] leading-relaxed text-faint">
                Tell us which PMS, door locks and payment systems your hotel
                uses. We&rsquo;ll review compatibility and the available
                integration options before recommending a Trevo configuration.
              </p>
            </div>
            <div>
              <h3 className="text-[17px] font-medium text-ink">Your UK partner</h3>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
                MacroKinetic MediaTech Limited is a London-based hotel technology
                company and Trevo&rsquo;s authorised partner for the UK and
                Europe. We supply Trevo hotel self check-in kiosks and work with
                UK hotels on kiosk selection, lobby layout, installation and
                local support, whether you run a boutique hotel or several
                properties.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-hairline bg-hairline text-[13px] text-graphite">
                {["Arrival review", "Kiosk selection", "Installation", "Local UK support"].map((t) => (
                  <li key={t} className="bg-canvas px-4 py-3">{t}</li>
                ))}
              </ul>
              <p className="mt-6 text-[14px] text-muted">
                UK team:{" "}
                <a href={`mailto:${company.salesEmail}?subject=Trevo%20self%20check-in%20for%20our%20hotel`} className="text-ink underline underline-offset-4">
                  {company.salesEmail}
                </a>
                {"  ·  "}
                <a href={company.domains.trevo} target="_blank" rel="noopener noreferrer" className="text-ink underline underline-offset-4">
                  About Trevo ↗
                </a>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 06 Resources */}
      <section id="downloads" className="scroll-mt-28 hairline-t bg-paper">
        <div className="shell py-20 md:py-28">
          <SectionHead eyebrow="Resources" title="Find the right introduction for your property." />
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-[1.1fr_1fr]">
            <a
              href={featured.href}
              target="_blank"
              rel="noopener"
              className="group flex flex-col overflow-hidden rounded-xl border border-hairline bg-canvas transition-colors hover:border-hairline-strong"
            >
              <div className="relative aspect-video bg-ink">
                <Image src={coverOf(featured.href)} alt="" fill sizes="(max-width: 1024px) 100vw, 680px" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6 lg:p-8">
                <p className="text-[12px] font-semibold uppercase tracking-wide2 text-macro">Full introduction</p>
                <h3 className="mt-2 text-xl font-medium tracking-tight text-ink">{featured.title}</h3>
                <p className="mt-2 text-[15px] text-muted">The Trevo range, the guest journey and local UK support.</p>
                <div className="mt-auto flex items-center justify-between pt-6 text-[13px]">
                  <span className="text-faint">{pdfMeta(featured.href)}</span>
                  <span className="font-medium text-ink underline-offset-4 group-hover:underline">View PDF →</span>
                </div>
              </div>
            </a>
            <ul className="grid grid-cols-1 gap-3">
              {guides.map((g) => (
                <li key={g.href}>
                  <a
                    href={g.href}
                    target="_blank"
                    rel="noopener"
                    title={`${g.title} (PDF)`}
                    className="group flex h-full items-center gap-5 rounded-xl border border-hairline bg-canvas p-3 pr-5 transition-colors hover:border-hairline-strong"
                  >
                    <div className="relative aspect-video w-28 flex-shrink-0 overflow-hidden rounded-md bg-ink sm:w-36">
                      <Image src={coverOf(g.href)} alt="" fill sizes="144px" className="object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[15px] font-medium text-ink">{g.title}</h3>
                      <p className="mt-1 hidden text-[13px] text-muted sm:block">{g.text}</p>
                      <p className="mt-1 text-[12px] text-faint">{pdfMeta(g.href)}</p>
                    </div>
                    <span aria-hidden className="text-[16px] text-faint transition-colors group-hover:text-ink">↓</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 07 FAQ */}
      {trevoFaq && (
        <section className="bg-canvas">
          <div className="shell grid grid-cols-1 gap-8 py-20 md:py-28 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16">
            <div>
              <SectionHead eyebrow="FAQ" title="Questions hotels ask." />
              <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-muted">
                From system compatibility to guest registration and local
                support.
              </p>
              <p className="mt-6 max-w-xs text-[15px] leading-relaxed">
                <Link
                  href="/events/hospitality-in-the-age-of-ai"
                  className="font-medium text-ink underline underline-offset-4"
                >
                  Free UK hotel AI and automation webinar – 10 December 2026
                </Link>
              </p>
            </div>
            <div className="border-b border-hairline">
              {trevoFaq.items.map(({ q, a }) => (
                <details key={q} className="group border-t border-hairline">
                  <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between py-5 text-[16px] font-medium text-ink [&::-webkit-details-marker]:hidden">
                    <h3 className="font-medium">{q}</h3>
                    <span className="ml-6 flex-shrink-0 text-lg leading-none text-faint transition-transform duration-200 ease-editorial group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="pb-6 pr-10 text-[15px] leading-7 text-muted">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 08 Engineering reference */}
      <section className="hairline-t bg-canvas">
        <div className="shell py-16 md:py-20">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
            <div className="overflow-hidden rounded-xl bg-paper md:col-span-4">
              <Image
                src="/references/hkia/kiosk-visitors.jpg"
                alt="Visitors using a MacroKinetic customer service kiosk at Hong Kong International Airport"
                width={2560}
                height={1920}
                sizes="(max-width: 768px) 100vw, 420px"
                className="aspect-[4/3] h-auto w-full object-cover"
              />
            </div>
            <div className="md:col-span-8 md:pl-6">
              <p className="eyebrow">MacroKinetic engineering experience</p>
              <h3 className="mt-3 text-xl font-medium tracking-tight text-ink md:text-2xl">
                MacroKinetic group engineering experience since 2008.
              </h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
                Our Hong Kong company, MacroKinetic Technology Consulting
                Limited, designed and developed the Intelligent Customer Service
                Counters at Hong Kong International Airport together with NEC.
                48 units are live, with more planned.
              </p>
              <p className="mt-2 text-[12px] text-faint">
                A MacroKinetic engineering reference, not a Trevo hotel deployment.
              </p>
              <Link href="/references/hkia" className="mt-4 inline-flex text-[14px] font-medium text-ink underline-offset-4 hover:underline">
                See the airport project →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Hotels", path: "/hotels" }])} />
    </>
  );
}
