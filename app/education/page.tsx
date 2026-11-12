import type { Metadata } from "next";
import Link from "next/link";
import SensoryScene from "@/components/SensoryScene";
import FriendsScene from "@/components/FriendsScene";
import {
  company,
  eduOffer,
  eduPartners,
  eduFaq,
  PONYABC_EMAIL,
  PONYABC_NURSERIES,
  PONYABC_YOUTUBE,
  PONYABC_TM,
} from "@/lib/content";

const PAGE_URL = `${company.siteUrl}/education`;
const TITLE = "Education Technology — PonyABC | MacroKinetic";
const DESCRIPTION =
  "Explore MacroKinetic's early-years education work through PonyABC: talking pens, multilingual books, nursery resources, sensory learning and partnerships.";
const HERO = "https://ponyabc.co.uk/cdn/shop/files/pa-b-sensory-bg.png";
const MAIL = `mailto:${PONYABC_EMAIL}?subject=${encodeURIComponent("Education partnership enquiry")}`;
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/education" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: HERO, width: 1536, height: 1024, alt: "Nursery room with soft colour lighting" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [HERO] },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Brand",
      "@id": `${PAGE_URL}#ponyabc`,
      name: "PonyABC",
      slogan: "Learn and Play",
      url: "https://www.ponyabc.co.uk",
      sameAs: [PONYABC_YOUTUBE],
    },
    {
      "@type": "Organization",
      "@id": `${company.siteUrl}/#organization`,
      name: company.ukEntity.name,
      brand: { "@id": `${PAGE_URL}#ponyabc` },
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: eduFaq.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

const btnDark =
  "rounded-full bg-ink px-6 py-3 text-[13px] font-medium tracking-editorial text-white transition-opacity hover:opacity-85";
const btnLight =
  "rounded-full border-hair border-hairline-strong px-6 py-3 text-[13px] font-medium tracking-editorial text-ink transition-colors hover:bg-paper";

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-2xl font-medium leading-tight tracking-editorial text-ink md:text-3xl">
        {title}
      </h2>
    </>
  );
}

export default function EducationPage() {
  return (
    <>
      {/* Hero — MacroKinetic first */}
      <section className="bg-canvas pt-28 md:pt-32">
        <div className="shell pb-10 md:pb-12">
          <p className="eyebrow">Smart Education · MacroKinetic</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-6xl">
            Bringing interactive technology into early-years learning.
          </h1>
          <div className="mt-8 max-w-2xl space-y-4 text-[16px] leading-relaxed text-muted">
            <p>
              MacroKinetic has been developing intelligent, interactive
              technology since 2008. From customer service systems and digital
              signage to AI and smart lighting, our work connects people,
              information and the physical world.
            </p>
            <p>
              Today, we bring that engineering experience into early-years
              education through PonyABC, a London-designed learning brand of
              MacroKinetic MediaTech Limited — combining interactive hardware,
              multilingual content and playful learning for nurseries and young
              children.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#offer" className={btnDark}>
              What we offer
            </a>
            <a href="https://www.ponyabc.co.uk" {...ext} className={btnLight}>
              Visit PonyABC ↗
            </a>
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="shell">
          <div className="overflow-hidden rounded-xl bg-paper">
            <SensoryScene />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-canvas">
        <div className="shell grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-5">
            <SectionHead eyebrow="Our story" title="From intelligent technology to playful learning." />
          </div>
          <div className="space-y-5 text-[16px] leading-relaxed text-graphite md:col-span-7">
            <p>
              Our Hong Kong company, MacroKinetic Technology Consulting Limited,
              developed the intelligent customer service counters at Hong Kong
              International Airport together with NEC.
            </p>
            <p>
              An airport service counter and a nursery learning tool serve very
              different people. But both rest on something we understand well:
              making technology intuitive, interactive and genuinely useful.
            </p>
            <p>
              PonyABC brings that thinking into the early years, combining
              physical learning materials, audio, digital content and connected
              devices. Our approach is simple: <strong className="font-medium text-ink">Learn and Play.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* What we offer — equal cards */}
      <section id="offer" className="scroll-mt-28 hairline-t bg-paper">
        <div className="shell py-16 md:py-24">
          <SectionHead eyebrow="PonyABC" title="What we offer." />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {eduOffer.map((o) => (
              <article key={o.title} className="flex flex-col rounded-xl bg-canvas p-8">
                <h3 className="text-[17px] font-medium text-ink">{o.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{o.text}</p>
                <a href={o.link.href} {...ext} className="mt-6 text-[14px] font-medium text-ink underline-offset-4 hover:underline">
                  {o.link.label} ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Free resources + YouTube */}
      <section className="hairline-t bg-canvas">
        <div className="shell grid grid-cols-1 gap-12 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-6">
            <SectionHead eyebrow="Free resources" title="Free resources for early-years settings." />
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-graphite">
              <p>
                PonyABC offers more than 30 free printable teaching packs for
                ages 2–5, covering early learning, feelings, daily routines and
                the world around us — from Colours and Numbers 1 to 10 to
                Feelings and Emotions, Calm Corner, People Who Help Us and Wash
                Your Hands.
              </p>
              <p>
                Each pack includes A4 teaching cards, smaller activity cards,
                activity sheets and an A3 poster. The resources are also
                published on Tes, and new topics are added regularly.
              </p>
              <a href={PONYABC_NURSERIES} {...ext} className={`inline-block ${btnLight}`}>
                Browse free nursery resources ↗
              </a>
            </div>
          </div>
          <div className="md:col-span-6">
            <SectionHead eyebrow="YouTube" title="PonyABC on YouTube." />
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-graphite">
              <p>
                Our YouTube channel brings gentle nursery songs and simple
                learning videos to children aged 3–5. Produced in London in
                multiple languages, it is part of our wider approach to learning
                through music, language and play.
              </p>
              <div className="overflow-hidden rounded-xl bg-paper">
                <FriendsScene />
              </div>
              <a href={PONYABC_YOUTUBE} {...ext} className={`inline-block ${btnLight}`}>
                Visit @PonyABC ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Development */}
      <section className="hairline-t bg-paper">
        <div className="shell grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-5">
            <SectionHead eyebrow="Product development" title="Developing what comes next." />
          </div>
          <div className="space-y-5 text-[16px] leading-relaxed text-graphite md:col-span-7">
            <p>
              PonyABC is an ongoing education technology and content programme,
              not a fixed catalogue. We keep developing new learning tools,
              interactive experiences and educational content, drawing on
              MacroKinetic&rsquo;s experience in engineering, connected hardware
              and digital technology.
            </p>
            <p>
              Designed in London, our ideas are tested with real children,
              parents and nursery teams. We are also interested in research
              collaborations on interactive learning, multilingual education and
              technology in early-years and SEN settings.
            </p>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="hairline-t bg-canvas">
        <div className="shell grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-5">
            <SectionHead eyebrow="Partnerships" title="Work with us." />
          </div>
          <div className="space-y-5 text-[16px] leading-relaxed text-graphite md:col-span-7">
            <p>
              We welcome conversations with organisations that share an interest
              in practical, playful early-years learning:
            </p>
            <ul className="flex flex-wrap gap-3">
              {eduPartners.map((p) => (
                <li key={p} className="rounded-full border-hair border-hairline-strong px-4 py-2 text-[13px] text-graphite">
                  {p}
                </li>
              ))}
            </ul>
            <p>
              Whether you are exploring a product collaboration, a research
              project, a distribution opportunity or a new learning resource, we
              would be pleased to discuss the possibilities.
            </p>
            <a href={MAIL} className={`inline-block ${btnDark}`}>
              Discuss an education partnership
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="hairline-t bg-paper">
        <div className="shell grid grid-cols-1 gap-8 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <SectionHead eyebrow="FAQ" title="Education at MacroKinetic." />
          </div>
          <div className="md:col-span-8">
            <div className="border-hairline">
              {eduFaq.map(({ q, a }) => (
                <details key={q} className="group hairline-t">
                  <summary className="flex min-h-[52px] cursor-pointer list-none items-center justify-between py-4 text-[15px] font-medium text-ink [&::-webkit-details-marker]:hidden">
                    <h3 className="font-medium">{q}</h3>
                    <span className="ml-6 flex-shrink-0 text-lg leading-none text-faint transition-transform duration-200 ease-editorial group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="pb-5 pr-10 text-[15px] leading-relaxed text-muted">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hairline-t bg-ink">
        <div className="shell grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <h2 className="text-2xl font-medium leading-tight tracking-editorial text-white md:text-3xl">
              Let&rsquo;s build better learning experiences.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/70">
              Interested in PonyABC products, learning content or education
              technology partnerships? Get in touch with our London team.
            </p>
          </div>
          <div className="flex flex-col justify-end gap-4 md:col-span-5 md:items-end">
            <a href={MAIL} className="rounded-full bg-white px-6 py-3 text-[13px] font-medium tracking-editorial text-ink transition-opacity hover:opacity-85">
              {PONYABC_EMAIL}
            </a>
            <a href="https://www.ponyabc.co.uk" {...ext} className="text-[13px] text-white/70 hover:text-white">
              Visit PonyABC: www.ponyabc.co.uk ↗
            </a>
            <Link href="/hotels" className="text-[13px] text-white/50 hover:text-white">
              Also from MacroKinetic: hotel self check-in →
            </Link>
          </div>
          <p className="text-[11px] leading-relaxed text-white/45 md:col-span-12">
            PonyABC is an early-years brand of MacroKinetic MediaTech Limited,
            London. PONY ABC® is a registered UK trade mark (No. {PONYABC_TM}).
            Philips Hue and IKEA are independent third-party brands; PonyABC is
            not a partner of Philips or IKEA.
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
