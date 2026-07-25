import Link from "next/link";
import { NAV, SITE } from "@/config/site";
import Logo from "./Logo";
import { StarDivider } from "./Ornaments";

export default function SiteFooter() {
  const year = 2026;
  return (
    <footer className="relative mt-auto bg-navy-deep text-cream">
      <div className="dot-field absolute inset-0 text-gold opacity-[0.06]" aria-hidden="true" />
      <div className="tricolor" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 text-center md:grid-cols-[1.5fr_1fr_1.1fr] md:text-left">
          {/* Brand */}
          <div>
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <Logo className="h-14 w-auto" />
              <div>
                <p className="font-display text-2xl font-semibold leading-none text-cream">
                  Barnabas Ministry
                </p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-gold-bright">
                  of Michigan
                </p>
              </div>
            </div>
            <p className="mx-auto mt-5 max-w-xs font-display text-lg italic leading-relaxed text-cream/70 md:mx-0">
              “{SITE.slogan}”
            </p>
            <p className="mx-auto mt-4 max-w-xs text-[13px] leading-relaxed text-cream/50 md:mx-0">
              {SITE.serviceArea}
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="eyebrow text-cream/45">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium uppercase tracking-[0.1em] text-cream/80 transition-colors hover:text-gold-bright"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow text-cream/45">Invite Us</p>
            <ul className="mt-4 space-y-3 text-[15px] text-cream/80">
              <li className="text-cream/60">{SITE.contactName}</li>
              <li>
                <a href={`tel:${SITE.phoneTel}`} className="transition-colors hover:text-gold-bright">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-gold-bright">
                  {SITE.email}
                </a>
              </li>
              <li className="pt-2">
                <Link href="/invite" className="btn btn-gold !px-5 !py-2.5 !text-[11px]">
                  Request a Date
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14">
          <StarDivider className="mx-auto max-w-xs text-gold/50" />
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] uppercase tracking-[0.2em] text-cream/40">
            © {year} Barnabas Ministry of Michigan · All rights reserved
          </p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-cream/40">
            Website by{" "}
            <a
              href="https://www.elijahdesent.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/70 underline underline-offset-2 hover:text-gold-bright"
            >
              Elijah Desent
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
