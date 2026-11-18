"use client";

import { usePathname } from "next/navigation";
import ContactForm from "./ContactForm";
import { company } from "@/lib/content";

// Shared section (rendered in the root layout). /hotels shows the UK sales
// inbox; other pages keep the general enquiry address for now.
function directEmailFor(pathname: string | null) {
  return isHotelsPath(pathname) ? company.salesEmail : company.enquiryEmail;
}

function isHotelsPath(pathname: string | null) {
  return pathname?.startsWith("/hotels") ?? false;
}

// /hotels gets its own heading, intro and submit label; every other page
// keeps the default copy.
const copy = {
  default: {
    heading: "Brief our team.",
    intro:
      "For project enquiries, partnership discussions or technical consultations, reach us directly or use the form.",
    submit: "Send Enquiry",
  },
  hotels: {
    heading: "Let\u2019s talk about your hotel.",
    intro:
      "Tell us a little about your property and what you\u2019d like to improve. We can discuss your check-in process, existing systems and which Trevo kiosk might suit your hotel.",
    submit: "Request a 20-minute conversation",
  },
};

export default function ContactSection({ email }: { email?: string }) {
  const pathname = usePathname();
  const directEmail = email ?? directEmailFor(pathname);
  const text = isHotelsPath(pathname) ? copy.hotels : copy.default;
  return (
    <section id="contact" className="hairline-t bg-paper scroll-mt-20">
      <div className="shell grid grid-cols-1 gap-16 py-20 md:grid-cols-12 md:py-28">
        {/* Left — contact info */}
        <div className="md:col-span-4">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-2xl font-medium leading-tight tracking-editorial text-ink md:text-3xl">
            {text.heading}
          </h2>
          <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-muted">
            {text.intro}
          </p>

          <div className="mt-8 hairline-t pt-6">
            <p className="text-[11px] uppercase tracking-tracked text-faint">
              Direct contact
            </p>
            <a
              href={`mailto:${directEmail}`}
              className="mt-3 inline-block text-[15px] tracking-editorial text-ink transition-colors hover:text-kinetic"
            >
              {directEmail}
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div className="md:col-span-8 md:pl-10 md:hairline-x">
          <ContactForm contactEmail={directEmail} submitLabel={text.submit} />
        </div>
      </div>
    </section>
  );
}
