import type { Metadata } from "next";
import { references } from "@/lib/content";

export const metadata: Metadata = {
  title: "Flagship References",
  description:
    "Selected enterprise deployments — Hong Kong International Airport, Hong Kong Disneyland, Elements Mall, BMW and luxury retail lighting.",
};

export default function ReferencesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-canvas pt-28 md:pt-32">
        <div className="shell pb-16 md:pb-24">
          <p className="eyebrow">Flagship References</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-6xl">
            Deployed where reliability is non-negotiable.
          </h1>
          <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted">
            A selected archive of enterprise and civic deployments across
            aviation, transit, luxury retail and entertainment.
          </p>
        </div>
      </section>

      {/* Reference archive */}
      <section className="hairline-t bg-canvas">
        <div className="border-hairline">
          {references.map((r, i) => (
            <article
              key={r.client}
              className="group relative overflow-hidden hairline-t first:border-t-0 transition-colors duration-500 ease-editorial hover:bg-paper"
            >
              {/* Schematic fade-in layer */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-editorial group-hover:opacity-100"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(17,17,17,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.045) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none font-mono text-[160px] font-semibold leading-none text-ink/[0.03] opacity-0 transition-all duration-700 ease-editorial group-hover:opacity-100 lg:block"
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="shell relative grid grid-cols-1 gap-6 py-12 md:grid-cols-12 md:py-16">
                <div className="md:col-span-1">
                  <span className="font-mono text-[12px] text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="md:col-span-4">
                  <h2 className="text-xl font-medium tracking-editorial text-ink md:text-2xl">
                    {r.client}
                  </h2>
                  {r.partner && (
                    <p className="mt-2 text-[12px] uppercase tracking-tracked text-macro">
                      {r.partner}
                    </p>
                  )}
                  <p className="mt-3 text-[12px] uppercase tracking-tracked text-faint">
                    {r.location}
                  </p>
                </div>

                <div className="md:col-span-3">
                  <p className="text-[11px] uppercase tracking-tracked text-faint">
                    Sector
                  </p>
                  <p className="mt-2 text-[14px] text-graphite">{r.sector}</p>
                  <p className="mt-5 text-[11px] uppercase tracking-tracked text-faint">
                    Scope
                  </p>
                  <p className="mt-2 text-[14px] text-graphite">{r.scope}</p>
                </div>

                <div className="md:col-span-4 md:hairline-x md:pl-8">
                  <p className="max-w-md text-[14px] leading-relaxed text-muted">
                    {r.detail}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[12px] uppercase tracking-tracked text-ink opacity-0 transition-all duration-500 ease-editorial group-hover:opacity-100">
                    View schematic
                    <span className="transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </article>
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
