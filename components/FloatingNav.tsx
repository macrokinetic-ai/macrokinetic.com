"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/lib/content";

/* ──────────────────────────────────────────────────────────────────────────
   Two-mode header, one brand DNA.
   • Home  → expressive: transparent + top gradient over the hero, larger logo,
             nav in a floating glass pill (glass-on-scroll).
   • Inner → restrained: a slim white contained bar with a hairline bottom rule,
             smaller logo, inline nav.
   Both modes align to the content `.shell`, share the wordmark, nav items, CTA,
   active-underline and the mobile dropdown. Only container / scale / colour vary.
   ────────────────────────────────────────────────────────────────────────── */

const LOGO = { white: "/brand/wordmark-white-tight.png", black: "/brand/wordmark-black-tight.png" };

function BrandLogo({ invert, className }: { invert: boolean; className: string }) {
  return (
    <Link
      href="/"
      aria-label="MacroKinetic home"
      className="pointer-events-auto inline-flex items-center"
    >
      <Image
        src={invert ? LOGO.white : LOGO.black}
        alt="MacroKinetic"
        width={300}
        height={37}
        priority
        className={className}
      />
    </Link>
  );
}

function NavLinks({
  invert,
  isActive,
}: {
  invert: boolean;
  isActive: (href: string) => boolean;
}) {
  return (
    <ul className="flex items-center">
      {nav.map((item) => {
        const active = isActive(item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={[
                "relative rounded-full px-4 py-1.5 text-[13px] tracking-editorial transition-colors duration-300",
                invert
                  ? active
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                  : active
                    ? "text-ink"
                    : "text-muted hover:text-ink",
              ].join(" ")}
            >
              {item.label}
              {active && (
                <span
                  className={[
                    "absolute inset-x-4 -bottom-0.5 h-px",
                    invert ? "bg-white" : "bg-ink",
                  ].join(" ")}
                />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function ConnectCTA({ invert }: { invert: boolean }) {
  return (
    <a
      href="#contact"
      className={[
        "rounded-full px-4 py-1.5 text-[13px] font-medium tracking-editorial transition-opacity duration-300 hover:opacity-80",
        invert ? "bg-white text-ink" : "bg-ink text-white",
      ].join(" ")}
    >
      Connect
    </a>
  );
}

export default function FloatingNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Collapse the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // While open, close on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Light (inverted) treatment only over the dark hero before scroll.
  const overHero = isHome && !scrolled;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      {/* Brand-contrast gradient — home hero top only. */}
      {overHero && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/40 via-black/10 to-transparent md:h-32"
        />
      )}

      {/* Inner pages get a contained white bar with a hairline rule; the homepage
          stays transparent (its nav pill carries its own glass). */}
      <div
        className={[
          "relative transition-colors duration-300",
          isHome ? "" : "hairline-b bg-white/80 backdrop-blur",
        ].join(" ")}
      >
        <div
          className={[
            "shell flex items-center justify-between",
            isHome ? "py-4 md:py-5" : "py-3 md:py-3.5",
          ].join(" ")}
        >
          {/* ── Brand (shared DNA, scaled per mode) ── */}
          <BrandLogo
            invert={overHero}
            className={
              isHome
                ? "h-[32px] w-auto md:h-[38px] lg:h-[40px]"
                : "h-[24px] w-auto md:h-[28px]"
            }
          />

          {/* ── Desktop nav ── */}
          {isHome ? (
            <nav
              className={[
                "pointer-events-auto hidden items-center rounded-full px-2 py-2 transition-all duration-500 ease-editorial md:flex",
                scrolled
                  ? "glass border-hair border-hairline shadow-[0_8px_30px_rgba(17,17,17,0.06)]"
                  : "border-hair border-white/15 bg-white/10 backdrop-blur-md",
              ].join(" ")}
            >
              <NavLinks invert={overHero} isActive={isActive} />
              <div
                className={[
                  "mx-1 h-5 w-px",
                  overHero ? "bg-white/25" : "bg-hairline",
                ].join(" ")}
              />
              <ConnectCTA invert={overHero} />
            </nav>
          ) : (
            <nav className="pointer-events-auto hidden items-center gap-1 md:flex">
              <NavLinks invert={false} isActive={isActive} />
              <div className="mx-2 h-5 w-px bg-hairline" />
              <ConnectCTA invert={false} />
            </nav>
          )}

          {/* ── Mobile menu (shared) ── */}
          <div ref={menuRef} className="pointer-events-auto relative md:hidden">
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={[
                "flex h-10 w-10 items-center justify-center rounded-full border-hair transition-colors",
                scrolled
                  ? "glass border-hairline"
                  : overHero
                    ? "border-white/20 bg-white/10 backdrop-blur-md"
                    : "border-hairline bg-white/70 backdrop-blur",
              ].join(" ")}
            >
              <span className="relative block h-3 w-4">
                {[
                  open ? "top-1.5 rotate-45" : "top-0",
                  open ? "top-1.5 opacity-0" : "top-1.5 opacity-100",
                  open ? "top-1.5 -rotate-45" : "top-3",
                ].map((pos, i) => (
                  <span
                    key={i}
                    className={[
                      "absolute left-0 block h-px w-4 transition-all duration-300",
                      overHero ? "bg-white" : "bg-ink",
                      pos,
                    ].join(" ")}
                  />
                ))}
              </span>
            </button>

            {open && (
              <div className="absolute right-0 top-12 w-56 origin-top-right animate-fade-up rounded-2xl border-hair border-hairline bg-white/90 p-2 shadow-[0_12px_40px_rgba(17,17,17,0.12)] backdrop-blur-xl">
                <ul>
                  {nav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={[
                          "block rounded-xl px-4 py-2.5 text-[14px] tracking-editorial transition-colors",
                          isActive(item.href)
                            ? "bg-paper text-ink"
                            : "text-graphite hover:bg-paper",
                        ].join(" ")}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 block rounded-xl bg-ink px-4 py-2.5 text-center text-[14px] font-medium tracking-editorial text-white transition-opacity hover:opacity-85"
                >
                  Connect
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
