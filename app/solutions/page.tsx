import type { Metadata } from "next";
import { pillars } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions & Capabilities",
  description:
    "Five core pillars — Digital Signage, Retail Technology, Automation & Robotics, AI Solutions and Smart Lighting — delivered as one integrated practice.",
};

export default function SolutionsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-canvas pt-28 md:pt-32">
        <div className="shell pb-16 md:pb-24">
          <p className="eyebrow">Solutions &amp; Capabilities</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-6xl">
            Five disciplines, engineered to operate as one.
          </h1>
          <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted">
            From pixel to structure, from model to maintenance — MacroKinetic
            owns the full delivery chain across each of its core pillars.
          </p>
        </div>
      </section>

      {/* Asymmetric pillar matrix */}
      <section className="hairline-t bg-canvas">
        {pillars.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={p.index}
              className="group hairline-t first:border-t-0"
            >
              <div className="shell grid grid-cols-1 gap-px py-14 md:grid-cols-12 md:py-20">
                {/* Index + name */}
                <div
                  className={[
                    "md:col-span-4",
                    flip ? "md:order-3 md:pl-10" : "md:order-1",
                  ].join(" ")}
                >
                  <div className="flex items-start gap-5">
                    <span className="font-mono text-[13px] text-faint">
                      {p.index}
                    </span>
                    <div>
                      <h2 className="text-2xl font-medium tracking-editorial text-ink md:text-3xl">
                        {p.name}
                      </h2>
                      <p className="mt-3 text-[13px] uppercase tracking-tracked text-kinetic/80">
                        {p.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div
                  className={[
                    "mt-8 md:mt-0 md:col-span-5",
                    flip
                      ? "md:order-2 md:px-10 md:hairline-x"
                      : "md:order-2 md:px-10 md:hairline-x",
                  ].join(" ")}
                >
                  <p className="max-w-md text-[15px] leading-relaxed text-graphite">
                    {p.summary}
                  </p>
                </div>

                {/* Capabilities */}
                <div
                  className={[
                    "mt-8 md:mt-0 md:col-span-3",
                    flip ? "md:order-1 md:pr-10" : "md:order-3 md:pl-2",
                  ].join(" ")}
                >
                  <ul className="space-y-3">
                    {p.capabilities.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-3 text-[13px] text-muted"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-faint" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Closing band */}
      <section className="hairline-t bg-paper">
        <div className="shell flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <h2 className="max-w-lg text-xl font-medium leading-snug tracking-editorial text-ink md:text-2xl">
            Every deployment is engineered, installed and maintained in-house.
          </h2>
          <a
            href="#contact"
            className="rounded-full bg-ink px-6 py-3 text-[13px] font-medium tracking-editorial text-white transition-opacity hover:opacity-80"
          >
            Brief our team
          </a>
        </div>
      </section>
    </>
  );
}
