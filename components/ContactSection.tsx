"use client";

import { usePathname } from "next/navigation";
import ContactForm from "./ContactForm";
import { company } from "@/lib/content";

// Shared section (rendered in the root layout). /hotels shows the UK sales
// inbox; other pages keep the general enquiry address for now.
function directEmailFor(pathname: string | null) {
  return pathname?.startsWith("/hotels") ? company.salesEmail : company.enquiryEmail;
}

export default function ContactSection({ email }: { email?: string }) {
  const pathname = usePathname();
  const directEmail = email ?? directEmailFor(pathname);
  const isHotels = pathname?.startsWith("/hotels") ?? false;
  return (
    <section id="contact" className="hairline-t bg-paper scroll-mt-20">
      <div className="shell grid grid-cols-1 gap-16 py-20 md:grid-cols-12 md:py-28">
        {/* Left — contact info */}
        <div className="md:col-span-4">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-2xl font-medium leading-tight tracking-editorial text-ink md:text-3xl">
            Brief our team.
          </h2>
          <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-muted">
            For project enquiries, partnership discussions or technical
            consultations, reach us directly or use the form.
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

          {isHotels && (
            <div className="mt-8 hairline-t pt-6">
              <p className="text-[11px] uppercase tracking-tracked text-faint">
                Prefer to talk?
              </p>
              <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-muted">
                Book a free 20-minute intro call with the Trevo UK team.
                Online, no pressure.
              </p>
              <a
                href={company.trevoIntroCallUrl}
                target="_blank"
                rel="noopener"
                className="mt-5 inline-block rounded-full border-hair border-hairline-strong px-6 py-3 text-[13px] font-medium tracking-editorial text-ink transition-colors hover:bg-canvas"
              >
                Book a 20-minute call
              </a>
            </div>
          )}
        </div>

        {/* Right — form */}
        <div className="md:col-span-8 md:pl-10 md:hairline-x">
          <ContactForm contactEmail={directEmail} />
        </div>
      </div>
    </section>
  );
}
