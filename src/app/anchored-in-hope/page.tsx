import type { Metadata } from "next";
import Link from "next/link";
import { ANCHORED, SITE } from "@/config/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Anchor, StarDivider } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "Anchored In Hope — a ministry of comfort in grief and loss",
  description:
    "Out of the loss of two children, A.C. & Mrs. Caincross bring the Anchored In Hope ministry to churches — an Anchored In Hope Sunday or weekday Conference that helps the grieving find genuine, biblical healing.",
  alternates: { canonical: "/anchored-in-hope" },
};

export default function AnchoredInHopePage() {
  return (
    <>
      <SiteHeader overHero="dark" />
      <main>
        <PageHero
          kicker={ANCHORED.kicker}
          title={ANCHORED.heading}
          subtitle="A ministry of comfort for the grieving — and a hope that holds through every trial."
        />

        {/* Story */}
        <section className="bg-cream">
          <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-24">
            <Reveal className="text-center">
              <Anchor className="mx-auto h-10 w-10 text-gold" />
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">{ANCHORED.intro}</p>
            </Reveal>

            <Reveal delay={100} className="mt-10">
              <div className="space-y-6 border-l-2 border-gold/70 pl-6 font-display text-2xl italic leading-relaxed text-navy sm:text-[1.7rem]">
                {ANCHORED.story.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150} className="mt-12">
              <figure className="rounded-sm border border-gold/40 bg-cream-2 px-7 py-7 text-center">
                <blockquote className="font-display text-2xl italic leading-snug text-navy sm:text-3xl">
                  {ANCHORED.verse.text}
                </blockquote>
                <figcaption className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-red">
                  {ANCHORED.verse.ref}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* Formats */}
        <section className="relative overflow-hidden bg-navy text-cream">
          <div className="dot-field pointer-events-none absolute inset-0 text-gold opacity-[0.06]" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow text-gold-bright">Two Ways to Receive It</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl">
                {ANCHORED.formatsHeading}
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {ANCHORED.formats.map((f, i) => (
                <Reveal
                  key={f.title}
                  delay={(i % 2) * 80}
                  className="rounded-sm border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-gold/50"
                >
                  <h3 className="font-display text-2xl font-semibold text-cream">{f.title}</h3>
                  <div className="mt-3 h-px w-10 bg-red" />
                  <p className="mt-4 leading-relaxed text-cream/70">{f.body}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mx-auto mt-12 max-w-2xl text-center">
              <p className="font-display text-2xl italic leading-relaxed text-cream/85">
                “{ANCHORED.closing}”
              </p>
            </Reveal>
          </div>
          <div className="tricolor" />
        </section>

        {/* CTA */}
        <section className="bg-cream">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
            <StarDivider className="mx-auto max-w-[10rem] text-gold" />
            <h2 className="mt-8 font-display text-4xl font-semibold leading-tight text-navy sm:text-5xl">
              {ANCHORED.cta}
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ink-soft">
              We would be honored to bring comfort, hope, and support to the grieving in your church
              and community.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/invite" className="btn btn-accent">
                Schedule an Anchored In Hope Day
              </Link>
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-ghost">
                Call or Text: {SITE.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
