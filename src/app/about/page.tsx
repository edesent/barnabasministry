import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ABOUT, HEART, SITE } from "@/config/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { StarDivider } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "About",
  description: ABOUT.lead,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader overHero="dark" />
      <main>
        <PageHero kicker={ABOUT.kicker} title={ABOUT.heading} subtitle={ABOUT.role} />

        <section className="bg-cream">
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-24">
            {/* Portrait */}
            <Reveal className="mx-auto w-full max-w-sm lg:sticky lg:top-24">
              <figure className="relative">
                <div className="overflow-hidden rounded-md border border-gold/50 bg-navy shadow-[0_24px_48px_-28px_rgba(16,31,57,0.7)]">
                  <Image
                    src={ABOUT.couplePhoto}
                    alt={ABOUT.couplePhotoAlt}
                    width={570}
                    height={670}
                    priority
                    sizes="(max-width: 1024px) 90vw, 420px"
                    className="h-auto w-full object-cover"
                  />
                </div>
                <figcaption className="mt-4 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                  {ABOUT.role}
                </figcaption>
                <div className="tricolor absolute inset-x-8 top-[calc(100%-3.4rem)] rounded-full" />
              </figure>
            </Reveal>

            {/* Bio */}
            <Reveal delay={100}>
              <p className="font-display text-2xl leading-snug text-red sm:text-[1.7rem]">
                {ABOUT.lead}
              </p>
              <div className="mt-8 space-y-5 text-[17px] leading-[1.8] text-ink-soft">
                {ABOUT.paragraphs.map((p, i) => (
                  <p key={i} className={i === 0 ? "drop-cap" : ""}>
                    {p}
                  </p>
                ))}
              </div>

              <figure className="mt-10 rounded-sm border border-gold/40 bg-cream-2 px-6 py-6">
                <blockquote className="font-display text-2xl italic leading-snug text-navy">
                  {HEART.verse.text}
                </blockquote>
                <figcaption className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-red">
                  {HEART.verse.ref}
                </figcaption>
              </figure>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/invite" className="btn btn-primary">
                  Invite Us to Your Church
                </Link>
                <a href={`tel:${SITE.phoneTel}`} className="btn btn-ghost">
                  {SITE.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-paper">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
            <StarDivider className="mx-auto max-w-[10rem] text-gold" />
            <p className="mt-6 font-display text-3xl italic leading-snug text-navy sm:text-4xl">
              “{SITE.slogan}”
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
