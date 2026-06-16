"use client";

import { useEffect, useState } from "react";

const COOKIE_NAME = "cookie_consent";
const MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export function getConsentCookie(): "accepted" | "declined" | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${COOKIE_NAME}=`));
  if (!match) return null;
  const val = match.split("=")[1];
  return val === "accepted" || val === "declined" ? val : null;
}

function setConsentCookie(value: "accepted" | "declined") {
  document.cookie = `${COOKIE_NAME}=${value}; max-age=${MAX_AGE}; path=/; SameSite=Lax`;
  window.dispatchEvent(new Event("cookie-consent-changed"));
}

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsentCookie() === null) setVisible(true);
  }, []);

  if (!visible) return null;

  function choose(value: "accepted" | "declined") {
    setConsentCookie(value);
    setVisible(false);
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 px-6 py-5 shadow-lg backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] leading-relaxed text-gray-600">
          We use cookies for essential functionality and analytics (Google
          Analytics 4). You can accept all cookies or decline non-essential
          ones. Your choice is stored for one year.{" "}
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => choose("declined")}
            className="rounded-full border border-gray-300 px-5 py-2 text-[12px] font-medium text-gray-600 transition-colors hover:bg-gray-50"
          >
            Only essential
          </button>
          <button
            onClick={() => choose("accepted")}
            className="rounded-full bg-gray-900 px-5 py-2 text-[12px] font-medium text-white transition-opacity hover:opacity-85"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
