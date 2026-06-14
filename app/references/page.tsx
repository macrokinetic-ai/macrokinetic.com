import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { references, coverImage } from "@/lib/content";

export const metadata: Metadata = {
  title: "What We Did — Selected Work",
  description:
    "Selected MacroKinetic deployments — Hong Kong International Airport, Elements Mall, interactive installations, border infrastructure, landmark retail LED and architectural lighting.",
};

export default function ReferencesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-canvas pt-28 md:pt-32">
        <div className="shell pb-16 md:pb-24">
          <p className="eyebrow">What We Did</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-6xl">
            Deployed where reliability is non-negotiable.
          </h1>
          <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted">
            A selected archive of enterprise and civic deployments across aviation,
            transit, luxury retail and culture. Open any project for images and a
            short overview.
          </p>
        </div>
      </section>

      {/* Project archive */}
      <section className="hairline-t bg-canvas">
        <div className="border-hairline">
          {references.map((r, i) => (
            <Link
              key={r.slug}
              href={`/references/${r.slug}`}
              className="group block hairline-t first:border-t-0 transition-colors duration-500 ease-editorial hover:bg-paper"
            >
              <div className="shell grid grid-cols-1 items-center gap-6 py-10 md:grid-cols-12 md:py-12">
                <div className="hidden md:col-span-1 md:block">
                  <span className="font-mono text-[12px] text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Thumbnail — fixed height + fixed col-width so every row is identical */}
                <div className="relative h-44 overflow-hidden rounded-lg bg-paper md:col-span-3 md:h-52">
                  <Image
                    src={coverImage(r).src}
                    alt={coverImage(r).alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                  />
                </div>

                {/* Title + meta */}
                <div className={r.featured ? "md:col-span-4" : "md:col-span-4"}>
                  {r.featured && (
                    <p className="mb-2 text-[10px] uppercase tracking-tracked text-kinetic/80">
                      Featured
                    </p>
                  )}
                  <h2 className="text-xl font-medium tracking-editorial text-ink md:text-2xl">
                    {r.client}
                  </h2>
                  {r.partner && (
                    <p className="mt-2 text-[12px] uppercase tracking-tracked text-macro">
                      {r.partner}
                    </p>
                  )}
                  <p className="mt-3 text-[12px] uppercase tracking-tracked text-faint">
                    {r.location} · {r.sector}
                  </p>
                </div>

                {/* Summary + CTA */}
                <div className="md:col-span-3 md:pl-2">
                  <p className="max-w-md text-[14px] leading-relaxed text-muted">
                    {r.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[12px] uppercase tracking-tracked text-ink">
                    View case study
                    <span className="transition-transform duration-500 ease-editorial group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="hairline-t bg-paper">
        <div className="shell flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <h2 className="max-w-lg text-xl font-medium leading-snug tracking-editorial text-ink md:text-2xl">
            Full case studies and schematics available under NDA.
          </h2>
          <a
            href="#contact"
            className="rounded-full bg-ink px-6 py-3 text-[13px] font-medium tracking-editorial text-white transition-opacity hover:opacity-80"
          >
            Request the dossier
          </a>
        </div>
      </section>
    </>
  );
}
