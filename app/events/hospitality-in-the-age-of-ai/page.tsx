import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import UntilEventEnd from "@/components/UntilEventEnd";
import { WebinarVideo, webinarVideoSchema } from "@/components/WebinarSlot";
import { breadcrumbSchema, ORG_ID } from "@/lib/schema";
import { webinar } from "@/lib/webinar";
import { company, hospitalityAiEvent as ev } from "@/lib/content";

const PATH = `/events/${ev.slug}`;
const PAGE_URL = `${company.siteUrl}${PATH}`;
const TITLE = "Free Hotel AI Webinar UK | 10 Dec 2026 | Trevo";
const DESCRIPTION =
  "Free UK hotel AI webinar, 10 Dec 2026, 11am GMT. Explore hotel automation, self check-in, Trevo case studies and the human touch. Register online.";
// Real-screen Trevo kiosk banner used at the top of /hotels (no separate webinar artwork exists).
const IMAGE = `${company.siteUrl}/hotels/hero-mk2-lobby.jpg`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "/og-hotels.jpg", width: 1200, height: 630, alt: "Guests checking in on a Trevo Mk2 kiosk in a hotel lobby" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og-hotels.jpg"] },
};

const EVENT_ID = `${PAGE_URL}#event`;
const { "@context": _bc, ...breadcrumb } = breadcrumbSchema([{ name: ev.shortTitle, path: PATH }]);
const videoSchema = webinarVideoSchema();
const { "@context": _vc, ...video } = videoSchema ?? { "@context": "" };

// One @graph: WebPage (published by the sitewide Organization, referenced by
// @id, not duplicated), Event, FAQPage (identical to the visible FAQ),
// breadcrumb, and the highlight VideoObject once it is set in lib/webinar.ts.
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-GB",
      isPartOf: { "@id": `${company.siteUrl}/#website` },
      publisher: { "@id": ORG_ID },
      about: { "@id": EVENT_ID },
      primaryImageOfPage: IMAGE,
    },
    {
      "@type": "Event",
      "@id": EVENT_ID,
      name: ev.title,
      description: ev.summary,
      url: PAGE_URL,
      image: [IMAGE],
      startDate: "2026-12-10T11:00:00+00:00",
      endDate: "2026-12-10T12:15:00+00:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      isAccessibleForFree: true,
      inLanguage: "en-GB",
      location: { "@type": "VirtualLocation", url: ev.registerUrl },
      organizer: { "@type": "Organization", name: ev.organizer.name, url: ev.organizer.url },
      performer: [
        {
          "@type": "Person",
          name: ev.speaker.name,
          jobTitle: ev.speaker.jobTitle,
          worksFor: { "@type": "Organization", name: ev.organizer.name, url: ev.organizer.url },
        },
        {
          "@type": "Person",
          name: ev.guestSpeaker.name,
          jobTitle: ev.guestSpeaker.jobTitle,
          worksFor: { "@type": "Organization", name: ev.guestSpeaker.org },
        },
      ],
      offers: {
        "@type": "Offer",
        url: ev.registerUrl,
        price: "0",
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
      },
      about: [
        { "@type": "Thing", name: "AI in hospitality" },
        { "@type": "Thing", name: "Hotel self check-in technology" },
        { "@type": "Thing", name: "Hotel operations automation" },
        { "@type": "Thing", name: "Hotel guest experience" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: ev.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    breadcrumb,
    ...(videoSchema ? [video] : []),
  ],
};

// Render full URLs inside text as links, keeping the URL itself as the visible text.
function withLinks(text: string) {
  return text.split(/(https:\/\/\S+)/).map((part, i) =>
    part.startsWith("https://") ? (
      <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="break-all text-ink underline underline-offset-4">
        {part}
      </a>
    ) : (
      part
    ),
  );
}

const btnDark =
  "inline-block rounded-full bg-ink px-6 py-3 text-[13px] font-medium tracking-editorial text-white transition-opacity hover:opacity-85";

const endedNote = (
  <p className="inline-block rounded-full border-hair border-hairline-strong px-5 py-2.5 text-[13px] font-medium text-graphite">
    This event has ended.
  </p>
);

// Hero after the event: the ended note, then the highlight video once it is set.
const endedHero = (
  <div>
    {endedNote}
    {webinar.highlightVideo && (
      <div className="mt-8 max-w-3xl">
        <WebinarVideo />
      </div>
    )}
  </div>
);

function RegisterButton({ ended = endedNote }: { ended?: ReactNode }) {
  return (
    <UntilEventEnd end={ev.endDate} ended={ended}>
      <a href={ev.registerUrl} target="_blank" rel="noopener noreferrer" className={btnDark}>
        Register free on Eventbrite <span aria-hidden="true">↗</span>
      </a>
      <p className="mt-3 break-all text-[12px] text-faint">{ev.registerUrl}</p>
    </UntilEventEnd>
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
          <p className="mt-6 max-w-3xl text-[17px] leading-relaxed text-graphite md:text-[18px]">{ev.summary}</p>
          <div className="mt-8">
            <RegisterButton ended={endedHero} />
          </div>
          <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-4 text-[15px] sm:grid-cols-3">
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
              <p className="mt-1 text-[14px] text-muted">{ev.speaker.note}</p>
              <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-graphite">{ev.speaker.bio}</p>
            </div>
            <div className="hairline-t pt-8">
              <h3 className="text-xl font-medium text-ink">{ev.guestSpeaker.name}</h3>
              <p className="mt-1 text-[14px] text-macro">{ev.guestSpeaker.role}</p>
              <p className="mt-1 text-[14px] text-muted">{ev.guestSpeaker.note}</p>
            </div>
            <div className="hairline-t pt-8">
              <p className="max-w-2xl text-[16px] leading-relaxed text-graphite">{ev.qaNote}</p>
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

      {/* FAQ: server-rendered, answers always visible (same wording as the FAQPage JSON-LD) */}
      <section className="hairline-t bg-paper">
        <div className="shell grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-4 text-2xl font-medium leading-tight tracking-editorial text-ink md:text-3xl">
              Frequently asked questions
            </h2>
          </div>
          <dl className="md:col-span-8">
            {ev.faqs.map((f) => (
              <div key={f.q} className="hairline-t py-6">
                <dt className="text-[17px] font-medium text-ink">{f.q}</dt>
                <dd className="mt-2 max-w-2xl text-[15px] leading-relaxed text-graphite">{withLinks(f.a)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Register + context */}
      <section className="hairline-t bg-canvas">
        <div className="shell grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-6">
            <UntilEventEnd
              end={ev.endDate}
              ended={
                <h2 className="text-2xl font-medium leading-tight tracking-editorial text-ink md:text-3xl">
                  About the organiser.
                </h2>
              }
            >
              <h2 className="text-2xl font-medium leading-tight tracking-editorial text-ink md:text-3xl">
                Join us online. It is free.
              </h2>
            </UntilEventEnd>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
              Organised by Trevo. MacroKinetic MediaTech Limited is Trevo&rsquo;s
              authorised partner for the UK and Europe, providing sales,
              installation and local support for UK hotels.
            </p>
            <p className="mt-4 text-[15px] text-graphite">
              Trevo:{" "}
              <a href={ev.organizer.url} target="_blank" rel="noopener noreferrer" className="font-medium text-ink underline underline-offset-4">
                {ev.organizer.url}
              </a>
            </p>
            <p className="mt-4 text-[15px] text-graphite">
              <Link href="/hotels" className="font-medium text-ink underline underline-offset-4">
                Trevo hotel self check-in in the UK: {company.siteUrl}/hotels
              </Link>
            </p>
          </div>
          <div className="flex flex-col justify-end md:col-span-6 md:items-end">
            <RegisterButton />
          </div>
        </div>
      </section>

      <JsonLd data={schema} />
    </>
  );
}
