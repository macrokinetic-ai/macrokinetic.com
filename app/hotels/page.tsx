import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import Image from "next/image";
import Link from "next/link";
import {
  company,
  trevoModels,
  trevoSteps,
  trevoExtras,
  trevoIntegrations,
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

export default function HotelsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-canvas pt-28 md:pt-32">
        <div className="shell pb-10 md:pb-12">
          <p className="eyebrow">Hotels · United Kingdom</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-6xl">
            Hotel self check-in kiosks, with local support in London.
          </h1>
          <div className="mt-8 max-w-2xl space-y-4 text-[16px] leading-relaxed text-muted">
            <p>
              Hotel arrivals rarely happen one at a time. There is the early
              guest, the late flight, the coach party and the queue that
              appears just as reception gets busy.
            </p>
            <p>
              Trevo gives guests another way to check in, collect their key
              card and get on with their stay, while your team has more time
              for the welcome. MacroKinetic MediaTech Limited is Trevo&rsquo;s
              authorised partner for the UK and Europe, providing sales,
              installation and local support for UK hotels.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className={btnDark}>
              Discuss your hotel
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
              src="/hotels/hero-mk2-lobby.jpg"
              alt="Guests checking in on a Trevo Mk2 self check-in kiosk in a hotel lobby"
              width={1600}
              height={837}
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="h-auto w-full"
            />
          </div>
          <p className="mt-3 text-[11px] text-faint">
            Illustrative hotel scenes. The kiosks shown are real Trevo models.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-28 bg-canvas">
        <div className="shell py-16 md:py-24">
          <SectionHead eyebrow="How it works" title="From arrival to room key." />
          <ol className="mt-10 grid grid-cols-1 gap-px border-hairline sm:grid-cols-2 lg:grid-cols-4">
            {trevoSteps.map((st, i) => (
              <li key={st.title} className="hairline-t bg-canvas py-6 pr-6">
                <p className="font-mono text-[13px] text-macro">0{i + 1}</p>
                <h3 className="mt-3 text-[16px] font-medium text-ink">{st.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{st.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-[12px] text-faint">
            Available steps depend on the kiosk model, hotel systems and agreed
            configuration.
          </p>
        </div>
      </section>

      {/* Range */}
      <section className="hairline-t bg-paper">
        <div className="shell py-16 md:py-24">
          <SectionHead
            eyebrow="The Trevo range"
            title="Four kiosks. Different ways to welcome guests."
          />
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {trevoModels.map((m) => (
              <article key={m.name} className="flex flex-col overflow-hidden rounded-xl bg-canvas">
                <Image
                  src={m.image.src}
                  alt={m.image.alt}
                  width={m.image.w}
                  height={m.image.h}
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="h-auto w-full"
                />
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="text-xl font-medium text-ink">
                    <span className="text-macro">Trevo {m.name}</span> — {m.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-graphite">
                    {m.description}
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted">
                    {m.bestFor}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-[15px] text-graphite">
            Not sure which model fits?{" "}
            <a href="#contact" className="font-medium text-ink underline underline-offset-4">
              Discuss your lobby
            </a>
          </p>
        </div>
      </section>

      {/* Beyond the kiosk */}
      <section className="hairline-t bg-canvas">
        <div className="shell grid grid-cols-1 gap-12 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7">
            <SectionHead
              eyebrow="Beyond the kiosk"
              title="Check-in does not have to begin at reception."
            />
            <dl className="mt-10 border-hairline">
              {trevoExtras.map((x) => (
                <div key={x.title} className="hairline-t py-5">
                  <dt className="text-[16px] font-medium text-ink">{x.title}</dt>
                  <dd className="mt-1 text-[15px] leading-relaxed text-muted">{x.text}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-[15px] leading-relaxed text-graphite">
              The aim is not to remove the human welcome. It is to make
              routine tasks easier for guests and reception teams.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-xl bg-paper">
              <video
                src="/hotels/m-hotel-mk2.mp4"
                poster="/hotels/m-hotel-mk2-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                width={544}
                height={960}
                className="mx-auto h-auto max-h-[680px] w-auto"
                aria-label="Trevo at M Hotel: pre-arrival registration on a phone, check-in at a Trevo Mk2 kiosk and key-card collection"
              />
            </div>
            <p className="mt-3 text-[12px] text-faint">
              Real Trevo installation at M Hotel: pre-arrival registration,
              kiosk check-in and key collection.
            </p>
          </div>
        </div>
      </section>

      {/* Systems */}
      <section className="hairline-t bg-paper">
        <div className="shell grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <SectionHead eyebrow="For hotel IT" title="Built around your hotel systems." />
          </div>
          <div className="md:col-span-8">
            <p className="max-w-2xl text-[16px] leading-relaxed text-graphite">
              Your hotel already has a property management system, room locks
              and payment arrangements. A new check-in system needs to work
              with them. Trevo&rsquo;s integration partners include:
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {trevoIntegrations.map((i) => (
                <li
                  key={i}
                  className="rounded-full border-hair border-hairline-strong bg-canvas px-4 py-2 text-[13px] text-graphite"
                >
                  {i}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted">
              Compatibility depends on your hotel&rsquo;s systems, versions and
              project requirements. We check these before recommending a
              configuration.
            </p>
            <a href="#contact" className={`mt-8 inline-block ${btnLight}`}>
              Discuss your existing systems
            </a>
          </div>
        </div>
      </section>

      {/* UK support */}
      <section className="hairline-t bg-canvas">
        <div className="shell grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <SectionHead eyebrow="Your UK partner" title="Hotel self check-in kiosk supplier, installation and support in the UK." />
          </div>
          <div className="space-y-5 text-[16px] leading-relaxed text-graphite md:col-span-8">
            <p>
              MacroKinetic MediaTech Limited is a London-based hotel technology
              company and Trevo&rsquo;s authorised partner for the UK and
              Europe. We supply Trevo hotel self check-in kiosks and work with
              UK hotels on kiosk selection, lobby layout, installation and
              local support.
            </p>
            <p>
              We discuss the guest arrival process and check the requirements
              of your property management system (PMS), door locks and payment
              systems before recommending a configuration. Whether you operate
              a boutique hotel or manage several properties, we can help you
              explore a suitable approach.
            </p>
            <p className="text-[15px] text-muted">
              Trevo is a Singapore hospitality technology company with hotel
              deployments in more than eight countries; the first UK
              installations are being prepared.{" "}
              <a href={company.domains.trevo} target="_blank" rel="noopener noreferrer" className="text-ink underline underline-offset-4">
                Trevo — Singapore hotel technology provider ↗
              </a>
            </p>
            <a href="#contact" className={`inline-block ${btnDark}`}>
              Discuss your hotel
            </a>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="hairline-t bg-paper">
        <div className="shell grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <SectionHead
              eyebrow="Experience beyond hotel check-in"
              title="Intelligent self-service engineering since 2008."
            />
          </div>
          <div className="space-y-5 text-[16px] leading-relaxed text-graphite md:col-span-8">
            <p>
              Our Hong Kong company, MacroKinetic Technology Consulting
              Limited, designed and developed the Intelligent Customer Service
              Counters at Hong Kong International Airport together with NEC.
              48 units are live, with more planned.
            </p>
            <p className="text-[14px] text-muted">
              This is a MacroKinetic engineering reference, not a Trevo hotel
              deployment.
            </p>
            <Link
              href="/references/hkia"
              className="inline-flex text-[14px] font-medium text-ink underline-offset-4 hover:underline"
            >
              See the airport project →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {trevoFaq && (
        <section className="hairline-t bg-canvas">
          <div className="shell grid grid-cols-1 gap-8 py-16 md:grid-cols-12 md:py-24">
            <div className="md:col-span-4">
              <SectionHead eyebrow="FAQ" title="Questions hotels ask." />
            </div>
            <div className="md:col-span-8">
              <div className="border-hairline">
                {trevoFaq.items.map(({ q, a }) => (
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
      )}

      {/* Final CTA */}
      <section className="hairline-t bg-ink">
        <div className="shell grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-6">
            <h2 className="text-2xl font-medium leading-tight tracking-editorial text-white md:text-3xl">
              Let&rsquo;s look at your hotel.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/70">
              You do not need to know which Trevo model you want before
              contacting us. In a first 20-minute conversation we can discuss:
            </p>
            <ul className="mt-4 space-y-2 text-[15px] text-white/85">
              <li>— Your property and current arrival process</li>
              <li>— Your PMS, room locks and payment systems</li>
              <li>— Your lobby layout and suitable kiosk options</li>
              <li>— Installation and UK support</li>
            </ul>
          </div>
          <div className="flex flex-col justify-end gap-4 md:col-span-6 md:items-end">
            <a href="#contact" className="rounded-full bg-white px-6 py-3 text-[13px] font-medium tracking-editorial text-ink transition-opacity hover:opacity-85">
              Discuss your hotel
            </a>
            <p className="text-[13px] text-white/70">
              Or email our UK team:{" "}
              <a
                href={`mailto:${company.salesEmail}?subject=Trevo%20self%20check-in%20for%20our%20hotel`}
                className="text-white underline underline-offset-4"
              >
                {company.salesEmail}
              </a>
            </p>
            <p className="text-[13px] text-white/50">
              <a href={company.domains.trevo} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                About Trevo: www.trevo.ai ↗
              </a>
              {"  ·  "}
              <a href={company.linkedin.uk} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Follow us on LinkedIn ↗
              </a>
            </p>
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
