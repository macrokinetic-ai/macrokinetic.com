import { cities } from "@/lib/content";

export default function CityFootprint() {
  return (
    <section className="hairline-t bg-canvas">
      <div className="shell py-20 md:py-28">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Global Footprint</p>
            <h2 className="mt-4 max-w-xl text-2xl font-medium leading-tight tracking-editorial text-ink md:text-3xl">
              Three operational hubs. Two markets in motion.
            </h2>
          </div>
          <p className="max-w-sm text-[13px] leading-relaxed text-muted">
            From engineering in Shenzhen to delivery across Asia-Pacific and
            Europe, MacroKinetic operates where its clients build.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px border-hairline sm:grid-cols-2 lg:grid-cols-5">
          {cities.map((c) => (
            <div
              key={c.city}
              className="group relative bg-canvas p-6 hairline-t lg:hairline-x lg:border-t-0"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-faint">
                  {c.meridian}
                </span>
                <span
                  className={[
                    "h-1.5 w-1.5 rounded-full",
                    c.status === "operational"
                      ? "bg-macro"
                      : "bg-faint ring-1 ring-faint",
                  ].join(" ")}
                  aria-hidden
                />
              </div>
              <p className="mt-10 text-lg font-medium text-ink">{c.city}</p>
              <p className="text-[12px] text-faint">{c.country}</p>
              <p className="mt-4 text-[13px] leading-snug text-muted">
                {c.role}
              </p>
              <p className="mt-6 text-[10px] uppercase tracking-tracked text-faint">
                {c.status === "operational" ? "Operational" : "Planned"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
