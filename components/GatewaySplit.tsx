import { gateways } from "@/lib/content";

export default function GatewaySplit() {
  return (
    <section className="hairline-t bg-paper">
      <div className="shell py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">The Network</p>
          <h2 className="mt-4 text-2xl font-medium leading-tight tracking-editorial text-ink md:text-3xl">
            One group, two specialised gateways.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[13px] leading-relaxed text-muted">
            Choose your route into the MacroKinetic network — applied
            intelligence, or interactive education.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px border-hairline md:grid-cols-2">
          {gateways.map((g) => (
            <a
              key={g.href}
              href={g.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-canvas p-10 transition-colors duration-500 ease-editorial hover:bg-paper md:p-14"
            >
              <p className="eyebrow">{g.label}</p>
              <div className="mt-8 flex items-baseline justify-between">
                <h3 className="text-xl font-medium tracking-editorial text-ink md:text-2xl">
                  {g.title}
                </h3>
                <span className="text-lg text-faint transition-all duration-500 ease-editorial group-hover:translate-x-1 group-hover:text-ink">
                  ↗
                </span>
              </div>
              <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-muted">
                {g.description}
              </p>
              <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-ink transition-transform duration-500 ease-editorial group-hover:scale-x-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
