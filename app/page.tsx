import Link from "next/link";
import CityFootprint from "@/components/CityFootprint";
import GatewaySplit from "@/components/GatewaySplit";
import { company, pillars } from "@/lib/content";

// Organisation structured data — homepage only. The homepage is the canonical
// entity page for MacroKinetic, so the Organization graph belongs here rather
// than sitewide. Mirrors the corporate facts in lib/content + the FAQ source.
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MacroKinetic",
  alternateName: "MacroKinetic Global",
  legalName: "MacroKinetic Mediatech Limited",
  url: "https://macrokinetic.com",
  foundingDate: "2008",
  description:
    "MacroKinetic designs, deploys, and maintains integrated intelligent technology systems — digital signage, interactive kiosks and wayfinding, service automation, smart lighting, and applied AI — for enterprise, government, and transit clients across Asia-Pacific and the United Kingdom.",
  address: [
    { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
    { "@type": "PostalAddress", addressLocality: "Hong Kong", addressCountry: "HK" },
    { "@type": "PostalAddress", addressLocality: "Shenzhen", addressCountry: "CN" },
  ],
  sameAs: [company.domains.ai, company.domains.ponyabc],
};

export default function HomePage() {
  return (
    <>
      {/* ───────────────── Hero ───────────────── */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/brand/wordmark-white.png"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>

        {/* Tonal scrim for editorial legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

        <div className="relative flex h-full flex-col">
          <div className="shell flex flex-1 flex-col justify-center pt-24">
            <p className="text-[11px] font-medium uppercase tracking-wide2 text-white/70 animate-fade-up">
              Intelligent Technology Solutions
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white animate-fade-up sm:text-6xl md:text-7xl">
              Engineering the interface between people and the physical world.
            </h1>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-white/75 animate-fade-up">
              {company.positioning}
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4 animate-fade-up">
              <Link
                href="/solutions"
                className="rounded-full bg-white px-6 py-3 text-[13px] font-medium tracking-editorial text-ink transition-opacity hover:opacity-85"
              >
                Explore Solutions
              </Link>
              <Link
                href="/references"
                className="rounded-full border-hair border-white/40 px-6 py-3 text-[13px] font-medium tracking-editorial text-white transition-colors hover:bg-white/10"
              >
                Flagship References
              </Link>
            </div>
            <p className="mt-8 text-[11px] uppercase tracking-wide2 text-white/55 animate-fade-up">
              Established {company.established} · London · Hong Kong · Shenzhen
            </p>
          </div>

          {/* Hero baseline ticker — each label links to its section on /solutions */}
          <div className="shell hidden items-center justify-between border-t border-white/15 py-5 text-[10px] tracking-tracked text-white/60 md:flex lg:text-[11px]">
            {pillars.map((p) => (
              <Link
                key={p.index}
                href={`/solutions#${p.slug}`}
                className="uppercase transition-colors duration-200 hover:text-white/90"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── Capability index ───────────────── */}
      <section className="bg-canvas">
        <div className="shell py-20 md:py-28">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow">Capabilities</p>
              <h2 className="mt-4 text-2xl font-medium leading-tight tracking-editorial text-ink md:text-3xl">
                Six disciplines, one integrated practice.
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="border-hairline">
                {pillars.map((p) => (
                  <Link
                    key={p.index}
                    href={`/solutions#${p.slug}`}
                    className="group flex items-baseline gap-6 py-6 hairline-t transition-colors hover:bg-paper md:px-4"
                  >
                    <span className="font-mono text-[12px] text-faint">
                      {p.index}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="text-lg font-medium text-ink">
                          {p.name}
                        </h3>
                        <span className="text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-ink">
                          →
                        </span>
                      </div>
                      <p className="mt-1 text-[13px] text-muted">
                        {p.tagline}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CityFootprint />
      <GatewaySplit />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
    </>
  );
}
