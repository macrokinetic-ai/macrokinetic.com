import type { Metadata } from "next";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about MacroKinetic — the company, its services, industrial AI division, and PonyABC education brand.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap(({ items }) =>
    items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <section className="bg-canvas pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="shell">
          <p className="eyebrow">FAQ</p>
          <h1 className="mt-4 max-w-2xl text-3xl font-medium leading-tight tracking-editorial text-ink md:text-4xl">
            Common Questions
          </h1>
          <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-muted">
            Answers about MacroKinetic, its services, industrial AI division,
            and PonyABC UK education brand.
          </p>
        </div>
      </section>

      {faqs.map(({ heading, items }) => (
        <section key={heading} className="hairline-t bg-canvas">
          <div className="shell py-10 md:py-14">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <p className="eyebrow">{heading}</p>
              </div>
              <div className="md:col-span-8">
                <div className="border-hairline">
                  {items.map(({ q, a }) => (
                    <details key={q} className="group hairline-t">
                      <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[13px] font-medium text-ink [&::-webkit-details-marker]:hidden">
                        {q}
                        <span className="ml-6 flex-shrink-0 text-base leading-none text-faint transition-transform duration-200 ease-editorial group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="pb-5 pr-10 text-[13px] leading-relaxed text-muted">
                        {a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
