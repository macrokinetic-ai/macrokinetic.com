import Image from "next/image";
import Link from "next/link";
import { company, offices, nav, gateways } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="hairline-t bg-paper">
      <div className="shell grid grid-cols-1 gap-px md:grid-cols-12">
        {/* Brand column */}
        <div className="py-14 md:col-span-4 md:pr-10">
          <Image
            src="/brand/wordmark-black-tight.png"
            alt="MacroKinetic"
            width={300}
            height={37}
            className="h-9 w-auto md:h-10"
          />
          <p className="mt-7 max-w-xs text-[13px] leading-relaxed text-muted">
            {company.positioning}
          </p>
          <p className="mt-8 eyebrow">Established {company.established}</p>
        </div>

        {/* Office columns */}
        <div className="grid grid-cols-1 gap-px sm:grid-cols-3 md:col-span-5">
          {offices.map((office) => (
            <div
              key={office.city}
              className="hairline-t py-14 md:border-0 md:pl-8 md:hairline-x"
            >
              <p className="eyebrow">{office.region}</p>
              <p className="mt-4 text-[15px] font-medium text-ink">
                {office.city}
              </p>
              {office.lines.map((line) => (
                <p key={line} className="mt-1 text-[13px] text-muted">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Navigation + gateways */}
        <div className="hairline-t py-14 md:col-span-3 md:border-0 md:pl-8 md:hairline-x">
          <p className="eyebrow">Index</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[13px] text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/faq"
                className="text-[13px] text-muted transition-colors hover:text-ink"
              >
                FAQ
              </Link>
            </li>
          </ul>

          <p className="mt-8 eyebrow">Network</p>
          <ul className="mt-4 space-y-2">
            {gateways.map((g) => (
              <li key={g.href}>
                <a
                  href={g.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-muted transition-colors hover:text-ink"
                >
                  {g.title} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Baseline */}
      <div className="hairline-t">
        <div className="shell flex flex-col items-start justify-between gap-2 py-6 text-[12px] text-faint sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights
            reserved.
          </p>
          <p className="tracking-editorial">
            London · Hong Kong · Shenzhen
          </p>
        </div>
      </div>
    </footer>
  );
}
