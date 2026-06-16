"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { getConsentCookie } from "./CookieConsentBanner";

const GA_ID = "G-5DWEDYDC6N";

export default function Analytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    if (getConsentCookie() === "accepted") setConsented(true);

    function onConsentChange() {
      setConsented(getConsentCookie() === "accepted");
    }
    window.addEventListener("cookie-consent-changed", onConsentChange);
    return () =>
      window.removeEventListener("cookie-consent-changed", onConsentChange);
  }, []);

  if (!consented) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
