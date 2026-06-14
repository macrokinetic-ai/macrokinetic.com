# MacroKinetic Global Hub — Build Log

## Task
Premium pure-white, Japanese-grid, Apple/Tesla/OpenAI-inspired multi-page
Next.js corporate site for macrokinetic.com.

## Plan (completed)
- [x] Deep research: confirm hero video, extract corporate copy from /INFO decks
- [x] Scaffold Next.js 14 (App Router) + TypeScript + Tailwind v3
- [x] Global pure-white editorial design system + 0.5px hairline grid tokens
- [x] Universal components: FloatingNav (glass) + multi-column Footer
- [x] Homepage: hero video bg, capability index, city footprint, gateway split
- [x] Solutions: 5-pillar asymmetric line-matrix
- [x] References: flagship archive with hover schematic fade-in
- [x] Install deps, patch security advisory, verify build + runtime

## Critical asset routing
- Source (untouched): `INFO/6月4日.mp4`
- Served from: `public/media/hero.mp4` → `/media/hero.mp4`
- Verified: HTTP 206 range/streaming, content-type video/mp4

## Research sources
- `Corporate_Presentation_20250422.pptx` (slide XML) — pillar taglines + references
- Wordmark: `google_MK_black.png` → `public/brand/wordmark-black.png`

## Review / Results
- `npm run build`: ✓ compiled, types valid, 6 routes static-prerendered
- Runtime: / 200 · /solutions 200 · /references 200 · video 206 · wordmark 200
- Next.js bumped 14.2.5 → 14.2.35 (security patch). Remaining audit item is a
  transitive postcss advisory that only resolves via a Next.js major bump
  (out of scope).

## Follow-ups (optional, not blocking)
- Add real schematic imagery per reference (currently elegant CSS schematic reveal)
- Consider a generated still-frame poster for the hero (currently wordmark-white)
- Wire the "Connect / Brief our team" CTAs to a real contact endpoint

---

# Homepage Refinement — 2026-06-14
Plan: ~/.claude/plans/you-are-helping-me-sharded-nygaard.md

## Changes
- [x] `lib/content.ts` — reordered `pillars` AI-first, renumbered 01–05, renamed
      "Smart Lighting Solutions"→"Smart Lighting", rewrote `company.positioning`
      to name the five domains.
- [x] `app/page.tsx` — eyebrow now leads with brand + category
      ("MacroKinetic · Intelligent Technology Solutions"); Est./cities moved to a
      thin secondary meta line; hero ticker refactored to map over `pillars`
      (single source) at `text-[10px] lg:text-[11px]` to avoid md wrapping.
- [x] `components/FloatingNav.tsx` — logo 22px → `h-[26px] sm:h-[30px]` (intrinsic
      180×36), trimmed logo-link padding; added conditional `overHero` top scrim
      (`from-black/35`) for contrast over bright video frames.

## Verification (all ✓)
- `npm run build`: compiled, types valid, 6 routes static.
- Playwright screenshots @ 1440 / 820 / 390 + /solutions; console errors: none.
- Ticker + capability index + Solutions matrix all show
  AI · Automation & Robotics · Digital Signage · Retail Technology · Smart Lighting,
  numbered 01–05.
- Tablet (820px): ticker fits one line, no wrap. Mobile (390px): logo + Connect
  no crowding; ticker correctly hidden.
- Note: cleared a stale `.next` (build→dev artifact collision, not a code bug).

## Known limitation (pre-existing, out of scope)
- No mobile nav menu — small screens show only logo + Connect.

---

# Header v3 — Split Brand/Nav Layout — 2026-06-14
Plan: ~/.claude/plans/you-are-helping-me-sharded-nygaard.md

## Root cause (why v2 logo still looked small)
- Wordmark PNGs were 320×132 but the glyph occupied only **28% of canvas height**
  → at `h-[30px]` the actual letters were ~8px tall. The asset padding, not the
  CSS, was the real problem.

## Changes
- [x] Trimmed wordmark assets → `public/brand/wordmark-{white,black}-tight.png`
      (300×37, pure glyph); originals kept.
- [x] `components/FloatingNav.tsx` — reworked from centered pill to **split header**:
      free-floating brand top-left (`h-[32px] md:h-[40px] lg:h-[44px]`, intrinsic
      300×37), nav in a floating **glass pill** top-right, taller top gradient
      (`h-28 md:h-32`). Added a **mobile hamburger + dropdown menu** (links + Connect)
      that closes on link tap, outside click, Esc, and route change. Reused existing
      `overHero`/`scrolled` logic, `.glass`, and `nav` from content.
- [x] `app/page.tsx` — dropped the now-redundant "MacroKinetic ·" token from the
      eyebrow (header brand carries it); H1 unchanged.

## Verification (all ✓)
- `npm run build`: clean, 6 routes static.
- Playwright @ 1440 / 390 / inner; console errors: **none**.
- Desktop logo measured **44px tall × 357px** — now all glyph (~5× the prior
  effective size).
- Mobile menu: `aria-expanded` toggles; panel link routes to /solutions and closes;
  Esc closes; no crowding at 390px.
- Inner page (white): black wordmark + dark nav pill, active underline, no scrim.
- Resolves the prior "no mobile nav menu" limitation.

---

# Header v4 — Two-Mode System (Home vs Inner) — 2026-06-14
Plan: ~/.claude/plans/you-are-helping-me-sharded-nygaard.md

## Root system flaw (why v3 felt heavy/competing)
- Header was full-width (`px-6 md:px-10`) but content lives in a centered
  `max-w-editorial` (1400px) `.shell`. On screens > 1400px the logo pinned to the
  window edge while content was inset/centered → logo never shared a left edge with
  the H1. That misalignment (not size) caused "competing" (home) and "on top of
  content" (inner).

## Changes
- [x] `components/FloatingNav.tsx` — refactored into a **two-mode** header with
      shared brand-DNA parts (`BrandLogo`, `NavLinks`, `ConnectCTA`, mobile menu):
      - Both modes wrap their row in `.shell` → logo aligns to the content column.
      - **Home (expressive):** transparent + top gradient, logo `40px`, nav glass
        pill right, glass-on-scroll. (Logo dialed 44→40.)
      - **Inner (restrained):** contained `bg-white/80 backdrop-blur` bar with a
        `hairline-b` rule, logo `28px` ink, inline nav right.
- [x] `app/solutions/page.tsx` + `app/references/page.tsx` — top padding
      `pt-32 md:pt-40` → `pt-28 md:pt-32` for the slimmer bar.
- [x] `components/Footer.tsx` — `scroll-mt-24` on `#contact` so the fixed bar never
      clips the anchor target.

## Verification (all ✓)
- `npm run build`: clean, 6 routes static. Console errors: **none**.
- **Alignment proven by measurement** (the core fix):
  - HOME  @1440 logo.left=60=h1.left · @1920 logo.left=300=h1.left
  - INNER @1440 logo.left=60=eyebrow.left · @1920 logo.left=300=eyebrow.left
- Prominence hierarchy: home logo 40px vs inner 28px; inner bar bg = rgba(255,255,255,0.8) + hairline.
- Shared DNA across modes: same wordmark, nav labels, CTA, active underline, mobile dropdown.
- Inner mobile: contained bar + hamburger dropdown opens/closes; no console errors.
