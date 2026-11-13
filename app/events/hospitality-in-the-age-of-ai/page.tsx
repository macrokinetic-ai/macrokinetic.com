import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { company, hospitalityAiEvent as ev } from "@/lib/content";

const PATH = `/events/${ev.slug}`;
const PAGE_URL = `${company.siteUrl}${PATH}`;
const TITLE = `${ev.shortTitle} — Free Online Event, 10 December 2026 | MacroKinetic`;
const DESCRIPTION = `${ev.title}. ${ev.dateLabel}, ${ev.timeLabel}, online and free. Speaker: ${ev.speaker.name}, ${ev.speaker.role}.`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/og-hotels.jpg", width: 1200, height: 630, alt: "Guests checking in on a Trevo Mk2 kiosk in a hotel lobby" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og-hotels.jpg"] },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": `${PAGE_URL}#event`,
  name: ev.title,
  description: ev.summary,
  url: PAGE_URL,
  image: [`${company.siteUrl}/og-hotels.jpg`],
  startDate: ev.startDate,
  endDate: ev.endDate,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  location: { "@type": "VirtualLocation", url: ev.registerUrl },
  isAccessibleForFree: true,
  inLanguage: "en-GB",
  offers: {
    "@type": "Offer",
    url: ev.registerUrl,
    price: 0,
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
  },
  organizer: { "@type": "Organization", name: ev.organizer.name, url: ev.organizer.url },
  performer: {
    "@type": "Person",
    name: ev.speaker.name,
    jobTitle: ev.speaker.jobTitle,
    worksFor: { "@type": "Organization", name: ev.organizer.name, url: ev.organizer.url },
  },
};

const btnDark =
  "inline-block rounded-full bg-ink px-6 py-3 text-[13px] font-medium tracking-editorial text-white transition-opacity hover:opacity-85";

function RegisterButton() {
  return (
    <div>
      <a href={ev.registerUrl} target="_blank" rel="noopener noreferrer" className={btnDark}>
        Register free on Eventbrite ↗
      </a>
      <p className="mt-3 break-all text-[12px] text-faint">{ev.registerUrl}</p>
    </div>
  );
}

export default function HospitalityAiEventPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-canvas pt-28 md:pt-32">
        <div className="shell pb-12 md:pb-16">
          <p className="eyebrow">Free online event · Hotels</p>
          <h1 className="mt-6 max-w-4xl text-3xl font-semibold leading-[1.1] tracking-tight text-ink md:text-5xl">
            {ev.title}
          </h1>
          <dl className="mt-8 grid max-w-2xl grid-cols-1 gap-4 text-[15px] sm:grid-cols-3">
            <div>
              <dt className="text-[12px] uppercase tracking-wide2 text-faint">Date</dt>
              <dd className="mt-1 text-ink">{ev.dateLabel}</dd>
            </div>
            <div>
              <dt className="text-[12px] uppercase tracking-wide2 text-faint">Time</dt>
              <dd className="mt-1 text-ink">{ev.timeLabel}</dd>
            </div>
            <div>
              <dt className="text-[12px] uppercase tracking-wide2 text-faint">Where</dt>
              <dd className="mt-1 text-ink">{ev.format} · {ev.priceLabel}</dd>
            </div>
          </dl>
          <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-muted">{ev.summary}</p>
          <div className="mt-10">
            <RegisterButton />
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="hairline-t bg-paper">
        <div className="shell grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="eyebrow">Speakers</p>
            <h2 className="mt-4 text-2xl font-medium leading-tight tracking-editorial text-ink md:text-3xl">
              Who you will hear from.
            </h2>
          </div>
          <div className="space-y-10 md:col-span-8">
            <div>
              <h3 className="text-xl font-medium text-ink">{ev.speaker.name}</h3>
              <p className="mt-1 text-[14px] text-macro">{ev.speaker.role}</p>
              <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-graphite">{ev.speaker.bio}</p>
            </div>
            <div className="hairline-t pt-8">
              <p className="text-[16px] text-graphite">{ev.guestSpeaker}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="hairline-t bg-canvas">
        <div className="shell grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="eyebrow">Agenda</p>
            <h2 className="mt-4 text-2xl font-medium leading-tight tracking-editorial text-ink md:text-3xl">
              75 minutes, online.
            </h2>
          </div>
          <ol className="border-hairline md:col-span-8">
            {ev.agenda.map((item, i) => (
              <li key={item} className="hairline-t flex items-baseline gap-6 py-5">
                <span className="font-mono text-[13px] text-macro">0{i + 1}</span>
                <span className="text-[16px] text-ink">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Register + context */}
      <section className="hairline-t bg-paper">
        <div className="shell grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-6">
            <h2 className="text-2xl font-medium leading-tight tracking-editorial text-ink md:text-3xl">
              Join us online. It is free.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
              Organised by Trevo. MacroKinetic MediaTech Limited is Trevo&rsquo;s
              authorised partner for the UK and Europe, providing sales,
              installation and local support for UK hotels.
            </p>
            <p className="mt-4 text-[15px] text-graphite">
              <Link href="/hotels" className="font-medium text-ink underline underline-offset-4">
                Trevo hotel self check-in in the UK: www.macrokinetic.com/hotels
              </Link>
            </p>
          </div>
          <div className="flex flex-col justify-end md:col-span-6 md:items-end">
            <RegisterButton />
          </div>
        </div>
      </section>

      <JsonLd data={schema} />
      <JsonLd
        data={breadcrumbSchema([{ name: ev.shortTitle, path: PATH }])}
      />
    </>
  );
}
