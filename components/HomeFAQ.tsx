const faqs = [
  {
    q: "What does MacroKinetic do?",
    a: "MacroKinetic designs, deploys, and maintains integrated intelligent technology systems — digital signage, interactive kiosks and wayfinding, service automation, smart lighting, and applied AI — for enterprise, government, and transit clients across Asia-Pacific and the United Kingdom.",
  },
  {
    q: "Where does MacroKinetic operate?",
    a: "MacroKinetic operates from three locations: Hong Kong (Asia-Pacific operations and project delivery), London, United Kingdom (European headquarters), and Shenzhen, China (engineering and manufacturing). The company was established in 2008.",
  },
  {
    q: "What types of clients has MacroKinetic worked with?",
    a: "MacroKinetic has worked with international airports, landmark shopping malls, government authorities, luxury retail brands, and hospitality groups — including Hong Kong International Airport, Elements Mall, the Macau Sports Development Board, and brands such as Louis Vuitton and Lancôme.",
  },
  {
    q: "What is the difference between macrokinetic.com, macrokinetic.ai, and ponyabc.co.uk?",
    a: "macrokinetic.com is the corporate hub for MacroKinetic Global. macrokinetic.ai is the company's industrial AI division, focused on computer vision inspection and compliance monitoring for manufacturers. ponyabc.co.uk is MacroKinetic's UK education technology brand, selling interactive and AR learning products for children.",
  },
  {
    q: "Does MacroKinetic handle full project delivery?",
    a: "Yes. MacroKinetic owns the complete delivery chain — from solution design and hardware supply through to installation, content management, and ongoing field maintenance — without subcontracting core work to third parties.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function HomeFAQ() {
  return (
    <section className="hairline-t bg-canvas">
      <div className="shell py-14 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Common Questions</p>
          </div>
          <div className="md:col-span-8">
            <div className="border-hairline">
              {faqs.map(({ q, a }) => (
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
