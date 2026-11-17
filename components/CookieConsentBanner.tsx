"use client";

import { useEffect, useState } from "react";

const COOKIE_NAME = "cookie_consent";
const MAX_AGE = 60 * 60 * 24 * 365; // 1 year

/** Optional cookie categories. Both default OFF until the visitor opts in. */
export type Consent = { analytics: boolean; marketing: boolean };

/**
 * Read the visitor's choice. Stored as `a1m0` style (analytics, marketing).
 * Legacy values from before the marketing category: "accepted" = analytics
 * only, "declined" = nothing. Returns null when no choice has been made.
 */
export function getConsent(): Consent | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${COOKIE_NAME}=`));
  if (!match) return null;
  const val = match.split("=")[1];
  if (val === "accepted") return { analytics: true, marketing: false };
  if (val === "declined") return { analytics: false, marketing: false };
  const m = /^a([01])m([01])$/.exec(val);
  return m ? { analytics: m[1] === "1", marketing: m[2] === "1" } : null;
}

const GA_ID = "G-5DWEDYDC6N";

function deleteCookies(match: (name: string) => boolean) {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  document.cookie.split("; ").forEach((c) => {
    const name = c.split("=")[0];
    if (match(name)) {
      domains.forEach((d) => {
        document.cookie = `${name}=; max-age=0; path=/${d ? `; domain=${d}` : ""}`;
      });
    }
  });
}

// Remove Google Analytics cookies and stop further tracking on this page.
function clearAnalytics() {
  (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = true;
  deleteCookies((n) => n === "_ga" || n.startsWith("_ga_") || n === "_gid");
}

// First-party LinkedIn cookies we can remove. Cookies LinkedIn sets on its own
// domains (bcookie, lidc, UserMatchHistory, AnalyticsSyncHistory) can only be
// cleared by the visitor or LinkedIn.
const LINKEDIN_FIRST_PARTY = ["li_fat_id", "li_sugr", "li_giant", "_li_dcdm_c", "lms_ads", "lms_analytics", "_guid", "liap"];
function clearMarketing() {
  deleteCookies((n) => LINKEDIN_FIRST_PARTY.includes(n));
}

/** Reopen the cookie banner so a visitor can change their choice. */
export function openCookieSettings() {
  window.dispatchEvent(new Event("open-cookie-settings"));
}

function saveConsent(next: Consent) {
  const prev = getConsent();
  document.cookie = `${COOKIE_NAME}=a${next.analytics ? 1 : 0}m${next.marketing ? 1 : 0}; max-age=${MAX_AGE}; path=/; SameSite=Lax`;
  if (!next.analytics) clearAnalytics();
  else (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = false;
  if (!next.marketing) clearMarketing();
  window.dispatchEvent(new Event("cookie-consent-changed"));
  // The LinkedIn script has no off switch once running; reload so it is gone.
  if (prev?.marketing && !next.marketing) window.location.reload();
}

function Toggle({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 border-t border-gray-200 py-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 shrink-0 accent-gray-900"
      />
      <span className="text-[13px] leading-relaxed text-gray-600">
        <span className="font-medium text-gray-900">{label}</span>
        {" — "}
        {description}
      </span>
    </label>
  );
}

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [manage, setManage] = useState(false);
  const [choice, setChoice] = useState<Consent>({ analytics: false, marketing: false });

  useEffect(() => {
    if (getConsent() === null) setVisible(true);
    const open = () => {
      setChoice(getConsent() ?? { analytics: false, marketing: false });
      setManage(true);
      setVisible(true);
    };
    window.addEventListener("open-cookie-settings", open);
    return () => window.removeEventListener("open-cookie-settings", open);
  }, []);

  if (!visible) return null;

  function choose(value: Consent) {
    saveConsent(value);
    setVisible(false);
    setManage(false);
  }

  const btnLight =
    "rounded-full border border-gray-300 px-5 py-2 text-[12px] font-medium text-gray-600 transition-colors hover:bg-gray-50";
  const btnDark =
    "rounded-full bg-gray-900 px-5 py-2 text-[12px] font-medium text-white transition-opacity hover:opacity-85";

  return (
    <div
      role="dialog"
      aria-label="Cookie settings"
      className="fixed bottom-0 left-0 right-0 z-50 max-h-[90vh] overflow-y-auto border-t border-gray-200 bg-white/95 px-6 py-5 shadow-lg backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] leading-relaxed text-gray-600">
          We use essential cookies to run this site and, only if you accept,
          optional analytics and marketing cookies. You can change your choice
          at any time with &ldquo;Cookie settings&rdquo; in the footer.{" "}
          <a href="/privacy" className="underline underline-offset-2">
            Privacy notice
          </a>
        </p>
        <div className="flex shrink-0 flex-wrap gap-3">
          {!manage && (
            <button onClick={() => setManage(true)} className={btnLight}>
              Manage choices
            </button>
          )}
          <button
            onClick={() => choose({ analytics: false, marketing: false })}
            className={btnLight}
          >
            Only essential
          </button>
          <button
            onClick={() => choose({ analytics: true, marketing: true })}
            className={btnDark}
          >
            Accept all
          </button>
        </div>
      </div>

      {manage && (
        <div className="mx-auto mt-4 max-w-6xl">
          <Toggle
            label="Analytics"
            description="Google Analytics 4: helps us understand how the site is used."
            checked={choice.analytics}
            onChange={(analytics) => setChoice((c) => ({ ...c, analytics }))}
          />
          <Toggle
            label="Marketing"
            description="LinkedIn Insight Tag: measures visits from our LinkedIn ads and lets us show relevant ads to people who visited this site."
            checked={choice.marketing}
            onChange={(marketing) => setChoice((c) => ({ ...c, marketing }))}
          />
          <div className="border-t border-gray-200 pt-3">
            <button onClick={() => choose(choice)} className={btnDark}>
              Save choices
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
