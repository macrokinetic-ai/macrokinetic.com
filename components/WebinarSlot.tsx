import Link from "next/link";
import UntilEventEnd from "@/components/UntilEventEnd";
import { webinar } from "@/lib/webinar";
import { company, hospitalityAiEvent as ev } from "@/lib/content";

// Permanent webinar slot. All states come from lib/webinar.ts; the switch at
// eventEnd happens before first paint (see UntilEventEnd), so no layout shift.

const EVENT_PATH = `/events/${ev.slug}`;

const btnDark =
  "inline-block rounded-full bg-ink px-6 py-3 text-[13px] font-medium tracking-editorial text-white transition-opacity hover:opacity-85";
const box =
  "mb-10 rounded-xl border-hair border-hairline-strong bg-paper p-5 md:mb-14 md:p-7";
const textLink = "text-[14px] font-medium text-ink underline underline-offset-4";

/** The highlight video, its caption and the full-recording link. Renders nothing until highlightVideo is set. */
export function WebinarVideo() {
  if (!webinar.highlightVideo) return null;
  return (
    <figure>
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-ink">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          controls
          playsInline
          preload="none"
          poster={webinar.highlightPoster ?? undefined}
        >
          <source src={webinar.highlightVideo} type="video/mp4" />
        </video>
      </div>
      <figcaption className="mt-3 text-[13px] leading-relaxed text-muted">
        {webinar.highlightCaption}
      </figcaption>
      {webinar.fullRecordingUrl && (
        <p className="mt-3 text-[14px]">
          <a
            href={webinar.fullRecordingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={textLink}
          >
            Watch the full recording ↗
          </a>
          <span className="mt-1 block break-all text-[12px] text-faint">{webinar.fullRecordingUrl}</span>
        </p>
      )}
    </figure>
  );
}

/** VideoObject JSON-LD for the highlight, or null until highlightVideo is set. */
export function webinarVideoSchema() {
  if (!webinar.highlightVideo) return null;
  const abs = (p: string) => (p.startsWith("http") ? p : `${company.siteUrl}${p}`);
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: `${ev.shortTitle}: highlights`,
    description: webinar.highlightCaption,
    contentUrl: abs(webinar.highlightVideo),
    ...(webinar.highlightPoster && { thumbnailUrl: [abs(webinar.highlightPoster)] }),
    uploadDate: webinar.highlightUploadDate ?? webinar.eventEnd.slice(0, 10),
    inLanguage: "en-GB",
    publisher: { "@type": "Organization", name: company.name, url: company.siteUrl },
  };
}

function RegistrationBanner() {
  return (
    <aside
      aria-label="Upcoming webinar"
      className={`${box} flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10`}
    >
      <div>
        <p className="eyebrow">Upcoming event</p>
        <h2 className="mt-3 text-[22px] font-medium leading-tight tracking-editorial text-ink md:text-[26px]">
          Free webinar: {ev.shortTitle}
        </h2>
        <p className="mt-2 text-[14px] text-graphite">{ev.shortDateLabel} · 11:00–12:15 GMT · Online</p>
        <p className="mt-1 text-[14px] text-muted">
          With {ev.speaker.name}, {ev.speaker.role}. Guest speaker to be announced.
        </p>
        <Link href={EVENT_PATH} className={`mt-3 inline-block ${textLink}`}>
          Event details and agenda →
        </Link>
      </div>
      <div className="min-w-0 shrink-0 md:max-w-[320px] md:text-right">
        <a href={webinar.eventbriteUrl} target="_blank" rel="noopener noreferrer" className={btnDark}>
          Register free
        </a>
        <p className="mt-2 break-all text-[12px] text-faint">{webinar.eventbriteUrl}</p>
      </div>
    </aside>
  );
}

function AfterEvent() {
  if (!webinar.highlightVideo) {
    return (
      <aside aria-label="Webinar" className={box}>
        <p className="eyebrow">Webinar · {ev.shortDateLabel}</p>
        <h2 className="mt-3 text-[22px] font-medium leading-tight tracking-editorial text-ink md:text-[26px]">
          {ev.shortTitle} – recording coming soon
        </h2>
        <Link href={EVENT_PATH} className={`mt-3 inline-block ${textLink}`}>
          About the event →
        </Link>
      </aside>
    );
  }
  return (
    <aside aria-label="Webinar" className={`${box} grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10`}>
      <div className="md:col-span-4">
        <p className="eyebrow">Webinar · {ev.shortDateLabel}</p>
        <h2 className="mt-3 text-[22px] font-medium leading-tight tracking-editorial text-ink md:text-[26px]">
          {ev.shortTitle}: highlights
        </h2>
        <Link href={EVENT_PATH} className={`mt-3 inline-block ${textLink}`}>
          About the event →
        </Link>
      </div>
      <div className="md:col-span-8">
        <WebinarVideo />
      </div>
    </aside>
  );
}

/** The slot at the top of /hotels. */
export default function WebinarSlot() {
  return (
    <UntilEventEnd end={webinar.eventEnd} ended={<AfterEvent />}>
      <RegistrationBanner />
    </UntilEventEnd>
  );
}
