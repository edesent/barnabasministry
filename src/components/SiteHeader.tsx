"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/config/site";
import Logo from "./Logo";

export default function SiteHeader({
  overHero = "light",
}: {
  // "light" = header sits over a light hero (dark text); "dark" = over a dark hero (light text).
  overHero?: "light" | "dark";
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Light text only when sitting over a dark hero and not yet scrolled.
  const light = overHero === "dark" && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-rule bg-cream/95 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Brand lockup */}
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo className="h-11 w-auto shrink-0" />
          <span className="leading-none">
            <span
              className={`block font-display text-[1.35rem] font-semibold leading-none ${
                light ? "text-cream [text-shadow:0_1px_12px_rgba(0,0,0,0.55)]" : "text-navy"
              }`}
            >
              Barnabas Ministry
            </span>
            <span
              className={`mt-1 block text-[9px] font-semibold uppercase tracking-[0.32em] ${
                light ? "text-gold-bright [text-shadow:0_1px_10px_rgba(0,0,0,0.6)]" : "text-red"
              }`}
            >
              A Friend to Pastors
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                light
                  ? "text-cream/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.5)] hover:text-gold-bright"
                  : "text-ink-soft hover:text-red"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/invite"
            className={`btn !px-5 !py-2.5 !text-[11px] ${light ? "btn-gold" : "btn-primary"}`}
          >
            Invite Us
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center lg:hidden ${
            light ? "text-cream" : "text-navy"
          }`}
        >
          <span className="relative block h-4 w-6">
            <span className={`absolute left-0 block h-[2px] w-6 bg-current transition-all ${open ? "top-2 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-2 block h-[2px] w-6 bg-current transition-all ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 block h-[2px] w-6 bg-current transition-all ${open ? "top-2 -rotate-45" : "top-4"}`} />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 top-[72px] z-40 flex flex-col bg-navy-deep lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-8">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 font-display text-3xl text-cream"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/invite" onClick={() => setOpen(false)} className="btn btn-gold mt-6 w-full">
              Invite Us to Your Church
            </Link>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="mt-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-gold-bright"
            >
              {SITE.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
