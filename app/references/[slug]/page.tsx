import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { references, getReferenceBySlug } from "@/lib/content";

export function generateStaticParams() {
  return references.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const ref = getReferenceBySlug(params.slug);
  if (!ref) return { title: "Case Study" };
  return {
    title: `${ref.client} — Case Study`,
    description: ref.summary,
  };
}

export default function ReferenceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const ref = getReferenceBySlug(params.slug);
  if (!ref) notFound();

  const [hero, ...rest] = ref.gallery;

  return (
    <>
      {/* Header */}
      <section className="bg-canvas pt-28 md:pt-32">
        <div className="shell pb-10 md:pb-14">
          <Link
            href="/references"
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-tracked text-muted transition-colors hover:text-ink"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            What We Did
          </Link>

          {ref.editorialTitle && (
            <p className="mt-10 eyebrow">{ref.editorialTitle}</p>
          )}
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.08] tracking-tight text-ink md:text-5xl">
            {ref.client}
          </h1>
          {ref.partner && (
            <p className="mt-4 text-[12px] uppercase tracking-tracked text-macro">
              {ref.partner}
            </p>
          )}
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-canvas">
        <div className="shell">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-paper">
            <Image
              src={hero}
              alt={ref.client}
              fill
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Meta + summary */}
      <section className="bg-canvas">
        <div className="shell grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-20">
          {/* Meta column */}
          <div className="md:col-span-4">
            <dl className="space-y-6">
              {[
                ["Location", ref.location],
                ["Sector", ref.sector],
                ["Scope", ref.scope],
              ].map(([k, v]) => (
                <div key={k} className="hairline-t pt-4">
                  <dt className="text-[11px] uppercase tracking-tracked text-faint">
                    {k}
                  </dt>
                  <dd className="mt-2 text-[14px] leading-relaxed text-graphite">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Body column */}
          <div className="md:col-span-8 md:pl-8 md:hairline-x">
            <p className="max-w-2xl text-[17px] leading-relaxed text-ink md:text-[19px]">
              {ref.summary}
            </p>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-graphite">
              {ref.detail}
            </p>

            {ref.highlights && ref.highlights.length > 0 && (
              <ul className="mt-10 grid grid-cols-1 gap-px border-hairline sm:grid-cols-2">
                {ref.highlights.map((h) => (
                  <li
                    key={h}
                    className="bg-canvas p-5 hairline-t text-[13px] leading-snug text-graphite"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            )}

            {ref.relatedSolutions && ref.relatedSolutions.length > 0 && (
              <div className="mt-10">
                <p className="text-[11px] uppercase tracking-tracked text-faint">
                  Related solutions
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {ref.relatedSolutions.map((s) => (
                    <Link
                      key={s}
                      href="/solutions"
                      className="rounded-full border-hair border-hairline px-4 py-1.5 text-[12px] tracking-editorial text-graphite transition-colors hover:bg-paper hover:text-ink"
                    >
                      {s}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {rest.length > 0 && (
        <section className="hairline-t bg-paper">
          <div className="shell py-16 md:py-20">
            <p className="eyebrow">Gallery</p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {rest.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[16/10] overflow-hidden rounded-lg bg-canvas"
                >
                  <Image
                    src={src}
                    alt={`${ref.client} — image ${i + 2}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section className="hairline-t bg-canvas">
        <div className="shell flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <h2 className="max-w-lg text-xl font-medium leading-snug tracking-editorial text-ink md:text-2xl">
            Planning a deployment like this?
          </h2>
          <a
            href="#contact"
            className="rounded-full bg-ink px-6 py-3 text-[13px] font-medium tracking-editorial text-white transition-opacity hover:opacity-80"
          >
            Get in touch
          </a>
        </div>
      </section>
    </>
  );
}
