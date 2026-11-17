"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { getConsent } from "./CookieConsentBanner";

// Public partner ID, set per environment in Vercel. No ID = tag never loads.
const PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

/**
 * LinkedIn Insight Tag, loaded only after "marketing" consent. Withdrawing
 * consent clears our LinkedIn cookies and reloads the page (see
 * CookieConsentBanner), so the script is not running afterwards.
 * No <noscript> pixel: consent can only be given with JavaScript on.
 */
export default function LinkedInInsight() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const update = () => setConsented(getConsent()?.marketing ?? false);
    update();
    window.addEventListener("cookie-consent-changed", update);
    return () => window.removeEventListener("cookie-consent-changed", update);
  }, []);

  if (!PARTNER_ID || !/^\d+$/.test(PARTNER_ID) || !consented) return null;

  return (
    <Script id="linkedin-insight" strategy="afterInteractive">
      {`window._linkedin_partner_id = "${PARTNER_ID}";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(window._linkedin_partner_id);
(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);`}
    </Script>
  );
}
