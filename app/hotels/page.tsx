import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  company,
  trevoModels,
  trevoExtras,
  trevoIntegrations,
  faqs,
} from "@/lib/content";

const PAGE_URL = `${company.siteUrl}/hotels`;
const TITLE = "Hotel Self Check-in Kiosks UK — Trevo Partner";
const DESCRIPTION =
  "Trevo hotel self check-in kiosks, mobile check-in and AI virtual concierge for UK hotels. MacroKinetic MediaTech, London — Trevo's authorised UK & Europe partner for sales, installation and local support.";

export const metadata: Metadata = {
  title: TITLE,
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
      description: DESCRIPTION,
      areaServed: [
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Place", name: "Europe" },
      ],
      audience: { "@type": "BusinessAudience", audienceType: "Hotels" },
      brand: { "@type": "Brand", name: "Trevo", url: company.domains.trevo },
      provider: { "@id": `${company.siteUrl}/#organization` },
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

export default function HotelsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-canvas pt-28 md:pt-32">
        <div className="shell pb-12 md:pb-16">
          <p className="eyebrow">Hotels · United Kingdom</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-6xl">
            Hotel self check-in kiosks, with local support in London.
          </h1>
          <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-muted">
            Hotel arrivals don&rsquo;t always happen neatly. Guests arrive
            early, late, in groups and after long journeys. MacroKinetic
            MediaTech is Trevo&rsquo;s authorised UK &amp; Europe partner: we
            help hotels add self check-in kiosks, mobile check-in and an AI
            virtual concierge, without losing the human welcome.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${company.salesEmail}?subject=Trevo%20self%20check-in%20for%20our%20hotel`}
              className="rounded-full bg-ink px-6 py-3 text-[13px] font-medium tracking-editorial text-white transition-opacity hover:opacity-85"
            >
              Book a 20-minute chat
            </a>
            <a
              href={company.linkedin.uk}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-hair border-hairline-strong px-6 py-3 text-[13px] font-medium tracking-editorial text-ink transition-colors hover:bg-paper"
            >
              Follow us on LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="shell">
          <div className="overflow-hidden rounded-xl bg-paper">
            <Image
              src="/hotels/hero-mk2-lobby.jpg"
              alt="Guests checking in on a Trevo Mk2 self check-in kiosk in a London hotel lobby"
              width={1600}
              height={837}
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-canvas">
        <div className="shell grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-4 text-2xl font-medium leading-tight tracking-editorial text-ink md:text-3xl">
              Sales, installation and local support for UK hotels.
            </h2>
          </div>
          <div className="space-y-5 text-[15px] leading-relaxed text-graphite md:col-span-8">
            <p>
              We are the local UK point of contact for hotels that want a faster
              arrival for guests and more time at reception for the guests who
              need a person. We look at your reception, your guests and your
              systems, and help you choose the Trevo set-up that fits.
            </p>
            <p>
              Trevo takes routine admin off the desk: forms, passport and ID
              capture, payment and key cards. Your team keeps the welcome.
            </p>
          </div>
        </div>
      </section>

      {/* Range */}
      <section className="hairline-t bg-paper">
        <div className="shell py-16 md:py-24">
          <p className="eyebrow">The Trevo range</p>
          <h2 className="mt-4 max-w-2xl text-2xl font-medium leading-tight tracking-editorial text-ink md:text-3xl">
            Four kiosks, one guest journey.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {trevoModels.map((m) => (
              <article key={m.name} className="overflow-hidden rounded-xl bg-canvas">
                <Image
                  src={m.image.src}
                  alt={m.image.alt}
                  width={m.image.w}
                  height={m.image.h}
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="h-auto w-full"
                />
                <div className="p-8">
                  <p className="font-mono text-[12px] text-macro">{m.name}</p>
                  <h3 className="mt-2 text-lg font-medium text-ink">{m.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">
                    {m.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Extras + concierge */}
      <section className="hairline-t bg-canvas">
        <div className="shell grid grid-cols-1 gap-12 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7">
            <p className="eyebrow">Beyond the kiosk</p>
            <h2 className="mt-4 text-2xl font-medium leading-tight tracking-editorial text-ink md:text-3xl">
              Mobile check-in and an AI virtual concierge.
            </h2>
            <dl className="mt-10 border-hairline">
              {trevoExtras.map((x) => (
                <div key={x.title} className="hairline-t py-5">
                  <dt className="text-[15px] font-medium text-ink">{x.title}</dt>
                  <dd className="mt-1 text-[14px] leading-relaxed text-muted">{x.text}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-xl bg-paper">
              <Image
                src="/hotels/ai-concierge.jpg"
                alt="Trevo AI virtual concierge on a kiosk screen"
                width={464}
                height={832}
                sizes="(max-width: 768px) 100vw, 460px"
                className="mx-auto h-auto max-h-[640px] w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="hairline-t bg-paper">
        <div className="shell grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="eyebrow">For hotel IT</p>
            <h2 className="mt-4 text-2xl font-medium leading-tight tracking-editorial text-ink md:text-3xl">
              Works with your PMS, locks and payments.
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul className="flex flex-wrap gap-3">
              {trevoIntegrations.map((i) => (
                <li
                  key={i}
                  className="rounded-full border-hair border-hairline-strong bg-canvas px-4 py-2 text-[13px] text-graphite"
                >
                  {i}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-xl text-[14px] leading-relaxed text-muted">
              Integration partners include the systems above. Compatibility
              depends on each hotel&rsquo;s property management, door-lock and
              payment systems and on the project&rsquo;s requirements, so we
              check it with your team on the first call.
            </p>
          </div>
        </div>
      </section>

      {/* Track record */}
      <section className="hairline-t bg-canvas">
        <div className="shell grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="eyebrow">Our track record</p>
            <h2 className="mt-4 text-2xl font-medium leading-tight tracking-editorial text-ink md:text-3xl">
              Self-service technology since 2008.
            </h2>
          </div>
          <div className="space-y-5 text-[15px] leading-relaxed text-graphite md:col-span-8">
            <p>
              Our Hong Kong company, MacroKinetic Technology Consulting Limited,
              designed and developed the Intelligent Customer Service Counters
              at Hong Kong International Airport together with NEC: 48 units are
              live, with more planned.
            </p>
            <Link
              href="/references/hkia"
              className="inline-flex text-[13px] font-medium text-ink underline-offset-4 hover:underline"
            >
              See the airport project →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {trevoFaq && (
        <section className="hairline-t bg-paper">
          <div className="shell grid grid-cols-1 gap-8 py-16 md:grid-cols-12 md:py-24">
            <div className="md:col-span-4">
              <h2 className="eyebrow">Questions hotels ask</h2>
            </div>
            <div className="md:col-span-8">
              <div className="border-hairline">
                {trevoFaq.items.map(({ q, a }) => (
                  <details key={q} className="group hairline-t">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[14px] font-medium text-ink [&::-webkit-details-marker]:hidden">
                      {q}
                      <span className="ml-6 flex-shrink-0 text-base leading-none text-faint transition-transform duration-200 ease-editorial group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="pb-5 pr-10 text-[14px] leading-relaxed text-muted">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="hairline-t bg-ink">
        <div className="shell py-16 md:py-20">
          <h2 className="max-w-2xl text-2xl font-medium leading-tight tracking-editorial text-white md:text-3xl">
            Boutique hotel or larger property — let&rsquo;s talk about what
            could work for your guests and team.
          </h2>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${company.salesEmail}?subject=Trevo%20self%20check-in%20for%20our%20hotel`}
              className="rounded-full bg-white px-6 py-3 text-[13px] font-medium tracking-editorial text-ink transition-opacity hover:opacity-85"
            >
              {company.salesEmail}
            </a>
            <a
              href={company.domains.trevo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-white/70 transition-colors hover:text-white"
            >
              About Trevo: www.trevo.ai ↗
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
