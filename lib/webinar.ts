// ── Webinar slot (top of /hotels and the event page) ───────────────────────
// The single place to update the webinar. The slot is permanent; what it shows
// depends on this config and the current time:
//   1. Before eventEnd:                       registration banner (Eventbrite).
//   2. After eventEnd, highlightVideo null:   "recording coming soon".
//   3. After eventEnd, highlightVideo set:    self-hosted MP4 highlight + caption,
//      and a "Watch the full recording" link if fullRecordingUrl is set.
//
// Video files go in public/videos/ (e.g. highlightVideo: "/videos/hospitality-ai-highlights.mp4",
// highlightPoster: "/videos/hospitality-ai-highlights.jpg"). The full recording
// (for example YouTube) is only linked to, never embedded.
// Rules: exact Eventbrite URL, no tracking parameters; no prices; no "exclusive".

export type WebinarConfig = {
  /** End of the live event, ISO 8601 UTC. */
  eventEnd: string;
  eventbriteUrl: string;
  /** Path under /public, e.g. "/videos/....mp4". null until the highlight exists. */
  highlightVideo: string | null;
  /** Poster image path under /public. Use a 16:9 image. */
  highlightPoster: string | null;
  /** External link to the full recording (e.g. YouTube). Linked, not embedded. */
  fullRecordingUrl: string | null;
  /** Caption shown under the highlight video. */
  highlightCaption: string;
  /** Date the highlight was published (YYYY-MM-DD), for VideoObject JSON-LD. Defaults to the event date. */
  highlightUploadDate: string | null;
};

export const webinar: WebinarConfig = {
  eventEnd: "2026-12-10T12:15:00Z",
  eventbriteUrl: "https://www.eventbrite.co.uk/e/2004670110264",
  highlightVideo: null,
  highlightPoster: null,
  fullRecordingUrl: null,
  highlightCaption:
    "Highlights from Hospitality in the Age of AI, a free online session hosted by Trevo on 10 December 2026.",
  highlightUploadDate: null,
};
