import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { privacySections, PRIVACY_UPDATED } from "./content";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "How MacroKinetic MediaTech Limited collects, uses and protects personal data on macrokinetic.com, including enquiries, webinars, cookies and your rights.",
  alternates: { canonical: "/privacy" },
};

function linkify(text: string) {
  const parts = text.split(/(https:\/\/\S+?)(?=[.,]?(?:\s|$))|([a-z]+@[a-z.]+\.(?:com|co\.uk))/g);
  return parts.map((p, i) => {
    if (!p) return null;
    if (p.startsWith("https://"))
      return (
        <a key={i} href={p} target="_blank" rel="noopener noreferrer" className="text-ink underline underline-offset-4">
          {p}
        </a>
      );
    if (/^[a-z]+@/.test(p))
      return (
        <a key={i} href={`mailto:${p}`} className="text-ink underline underline-offset-4">
          {p}
        </a>
      );
    return <span key={i}>{p}</span>;
  });
}

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-canvas pt-28 md:pt-32">
        <div className="shell pb-10">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-5xl">
            Privacy notice
          </h1>
          <p className="mt-6 text-[14px] text-muted">Last updated: {PRIVACY_UPDATED}</p>
        </div>
      </section>
      <section className="bg-canvas">
        <div className="shell max-w-3xl pb-24">
          {privacySections.map((s) => (
            <div key={s.heading} className="hairline-t py-8">
              <h2 className="text-xl font-medium tracking-editorial text-ink">{s.heading}</h2>
              {s.paras?.slice(0, s.items ? 1 : undefined).map((p) => (
                <p key={p} className="mt-4 text-[15px] leading-relaxed text-graphite">{linkify(p)}</p>
              ))}
              {s.items && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-graphite">
                  {s.items.map((it) => (
                    <li key={it}>{linkify(it)}</li>
                  ))}
                </ul>
              )}
              {s.items &&
                s.paras?.slice(1).map((p) => (
                  <p key={p} className="mt-4 text-[15px] leading-relaxed text-graphite">{linkify(p)}</p>
                ))}
            </div>
          ))}
        </div>
      </section>
      <JsonLd data={breadcrumbSchema([{ name: "Privacy notice", path: "/privacy" }])} />
    </>
  );
}
