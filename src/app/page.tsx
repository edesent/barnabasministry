import Link from "next/link";
import Image from "next/image";
import { SITE, HERO, HEART, PILLARS, SERVE, ANCHORED, FOSTER, LETTER, INVITE } from "@/config/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";
import { StarDivider, Anchor } from "@/components/Ornaments";

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  alternateName: "Barnabas Ministry",
  slogan: SITE.tagline,
  description: SITE.shortDescription,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phone,
  logo: `${SITE.url}/icon-512.png`,
  image: `${SITE.url}/og.jpg`,
  areaServed: "Michigan, United States",
  founder: { "@type": "Person", name: SITE.contactName },
  knowsAbout: [
    "Preaching and pulpit supply",
    "Church music ministry",
    "Biblical grief and loss ministry",
    "Foster care and adoption",
    "Encouraging pastors",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
      />
      <SiteHeader overHero="dark" />
      <main>
        {/* ── Hero (cinematic) ─────────────────────────────────── */}
        <section className="relative isolate flex min-h-[600px] items-center overflow-hidden pt-[72px] lg:min-h-[90vh]">
          {/* Background image + scrims */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/hero-hillside.jpg"
              alt="A robed figure on a Judean hillside at golden hour, arm outstretched toward an ancient town"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(90deg, rgba(16,31,57,0) 24%, rgba(16,31,57,0.48) 55%, rgba(15,29,57,0.93) 100%)",
              }}
            />
            <div
              className="absolute inset-0 lg:hidden"
              aria-hidden="true"
              style={{ background: "linear-gradient(180deg, rgba(15,29,57,0.5), rgba(15,29,57,0.86))" }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-40"
              aria-hidden="true"
              style={{ background: "linear-gradient(180deg, transparent, rgba(15,29,57,0.72))" }}
            />
          </div>

          <div className="relative mx-auto flex w-full max-w-6xl justify-end px-5 py-20 sm:px-8">
            <div className="animate-fade-up max-w-xl text-cream">
              <div className="mb-5">
                <span className="eyebrow text-gold-bright">{HERO.kicker}</span>
              </div>

              <h1 className="display-hed text-[clamp(2.7rem,7vw,4.7rem)] text-cream [text-shadow:0_2px_28px_rgba(0,0,0,0.4)]">
                {HERO.headline}
                <span className="mt-1 block text-gold-bright">{HERO.headlineAccent}</span>
              </h1>

              <div className="mt-7 flex items-start gap-4">
                <span className="mt-3 h-px w-12 shrink-0 bg-gold" />
                <p className="max-w-lg text-lg leading-relaxed text-cream/85">{HERO.subhead}</p>
              </div>

              <figure className="mt-7 border-l-2 border-gold/70 pl-5">
                <blockquote className="font-display text-xl italic leading-snug text-cream/90">
                  {HERO.verse}
                </blockquote>
                <figcaption className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-bright/90">
                  {HERO.verseRef}
                </figcaption>
              </figure>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href={HERO.primaryCta.href} className="btn btn-gold">
                  {HERO.primaryCta.label}
                </Link>
                <Link href={HERO.secondaryCta.href} className="btn btn-ghost-inv">
                  {HERO.secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Marquee />

        {/* ── The Heart ────────────────────────────────────────── */}
        <section id="heart" className="scroll-mt-20 bg-paper">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-28">
            <Reveal>
              <p className="eyebrow text-red">{HEART.kicker}</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy sm:text-5xl">
                {HEART.heading}
              </h2>
              <Logo className="mt-8 h-auto w-[300px] max-w-full drop-shadow-[0_12px_28px_rgba(16,31,57,0.2)]" />
              <StarDivider className="mt-8 max-w-[9rem] text-gold" />
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-5 text-[17px] leading-[1.8] text-ink-soft">
                {HEART.body.map((p, i) => (
                  <p key={i} className={i === 0 ? "drop-cap" : ""}>
                    {p}
                  </p>
                ))}
              </div>
              <figure className="mt-8 rounded-sm border border-gold/40 bg-cream-2 px-6 py-6">
                <blockquote className="font-display text-2xl italic leading-snug text-navy">
                  {HEART.verse.text}
                </blockquote>
                <figcaption className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-red">
                  {HEART.verse.ref}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ── The three E's ────────────────────────────────────── */}
        <section id="pillars" className="scroll-mt-20 relative overflow-hidden bg-navy text-cream">
          <div className="dot-field pointer-events-none absolute inset-0 text-gold opacity-[0.06]" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow text-gold-bright">{PILLARS.kicker}</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl">
                {PILLARS.heading}
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-cream/70">{PILLARS.intro}</p>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {PILLARS.items.map((item, i) => (
                <Reveal
                  key={item.name}
                  delay={i * 90}
                  className="group relative rounded-sm border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-gold/50"
                >
                  <span className="font-display text-5xl font-semibold text-gold/70">{item.n}</span>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-cream">{item.name}</h3>
                  <div className="mt-3 h-px w-10 bg-red" />
                  <p className="mt-4 leading-relaxed text-cream/70">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="tricolor" />
        </section>

        {/* ── How we serve ─────────────────────────────────────── */}
        <section id="serve" className="scroll-mt-20 bg-cream">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-red">{SERVE.kicker}</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy sm:text-5xl">
                {SERVE.heading}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">{SERVE.intro}</p>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {SERVE.items.map((item, i) => {
                const href = "href" in item ? (item.href as string) : undefined;
                const inner = (
                  <>
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-3xl font-semibold text-navy">{item.title}</h3>
                      <span className="font-display text-4xl font-semibold text-cream-3 transition-colors group-hover:text-gold/70">
                        0{i + 1}
                      </span>
                    </div>
                    <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-red">
                      {item.tag}
                    </p>
                    <p className="mt-4 leading-relaxed text-ink-soft">{item.body}</p>
                    {href && (
                      <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-navy transition-colors group-hover:text-red">
                        Learn more <span aria-hidden="true">→</span>
                      </span>
                    )}
                  </>
                );
                const cls =
                  "group relative flex flex-col rounded-sm border border-rule bg-paper p-8 transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_20px_40px_-24px_rgba(16,31,57,0.5)]";
                return (
                  <Reveal key={item.title} delay={(i % 2) * 80}>
                    {href ? (
                      <Link href={href} className={cls}>
                        {inner}
                      </Link>
                    ) : (
                      <div className={cls}>{inner}</div>
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Anchored In Hope ─────────────────────────────────── */}
        <section
          id="anchored"
          className="scroll-mt-20 relative isolate overflow-hidden bg-navy-deep text-cream"
        >
          {/* Background sea + anchor, with a navy overlay */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/anchor-sea.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(180deg, rgba(15,29,57,0.86), rgba(11,21,42,0.9))",
              }}
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{ background: "radial-gradient(90% 60% at 50% 0%, rgba(217,184,116,0.12), transparent 60%)" }}
          />
          <div className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal className="mx-auto max-w-2xl text-center">
              <Anchor className="mx-auto h-10 w-10 text-gold-bright" />
              <p className="eyebrow mt-5 text-gold-bright">{ANCHORED.kicker}</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl">
                {ANCHORED.heading}
              </h2>
              <p className="mx-auto mt-5 leading-relaxed text-cream/70">{ANCHORED.intro}</p>
            </Reveal>

            <Reveal delay={100} className="mx-auto mt-12 max-w-2xl">
              <div className="space-y-5 text-center font-display text-xl italic leading-relaxed text-cream/85 sm:text-2xl">
                {ANCHORED.story.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150} className="mx-auto mt-12 max-w-xl">
              <figure className="rounded-sm border border-gold/40 bg-white/[0.04] px-7 py-7 text-center">
                <blockquote className="font-display text-2xl italic leading-snug text-cream">
                  {ANCHORED.verse.text}
                </blockquote>
                <figcaption className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-bright">
                  {ANCHORED.verse.ref}
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={200} className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/anchored-in-hope" className="btn btn-gold">
                About Anchored In Hope
              </Link>
              <Link href="/invite" className="btn btn-ghost-inv">
                {ANCHORED.cta}
              </Link>
            </Reveal>
          </div>
          <div className="tricolor" />
        </section>

        {/* ── Foster Care & Adoption ───────────────────────────── */}
        <section id="foster" className="scroll-mt-20 bg-cream-2">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
            <Reveal>
              <p className="eyebrow text-red">{FOSTER.kicker}</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy sm:text-5xl">
                {FOSTER.heading}
              </h2>
              <div className="mt-6 space-y-5 text-[17px] leading-[1.8] text-ink-soft">
                {FOSTER.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/invite" className="btn btn-accent">
                  {FOSTER.cta}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <figure className="relative rounded-md border border-gold/40 bg-navy px-8 py-12 text-center text-cream shadow-[0_24px_48px_-28px_rgba(16,31,57,0.7)]">
                <div className="dot-field pointer-events-none absolute inset-0 text-gold opacity-[0.07]" aria-hidden="true" />
                <blockquote className="relative font-display text-2xl italic leading-snug text-cream sm:text-[1.7rem]">
                  {FOSTER.verse.text}
                </blockquote>
                <figcaption className="relative mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-bright">
                  {FOSTER.verse.ref}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ── A word from the ministry ─────────────────────────── */}
        <section className="relative overflow-hidden bg-paper">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-24">
            <Reveal className="mx-auto w-full max-w-sm">
              <figure className="relative">
                <div className="overflow-hidden rounded-md border border-gold/50 bg-navy shadow-[0_24px_48px_-28px_rgba(16,31,57,0.7)]">
                  <Image
                    src="/caincross-couple.jpg"
                    alt="A.C. Caincross and his wife, Barnabas Ministry of Michigan"
                    width={570}
                    height={670}
                    priority
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="tricolor absolute inset-x-8 -bottom-1.5 rounded-full" />
              </figure>
            </Reveal>

            <Reveal delay={100}>
              <p className="eyebrow text-red">{LETTER.kicker}</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy sm:text-5xl">
                {LETTER.heading}
              </h2>
              <div className="mt-6 space-y-5 text-[17px] leading-[1.8] text-ink-soft">
                {LETTER.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <p className="mt-7 font-display text-2xl italic leading-snug text-navy">
                “{LETTER.pullQuote}”
              </p>
              <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-muted">
                {LETTER.signoff}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Invite CTA ───────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-navy-deep text-cream">
          <div className="dot-field pointer-events-none absolute inset-0 text-gold opacity-[0.06]" aria-hidden="true" />
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{ background: "radial-gradient(90% 70% at 50% 0%, rgba(217,184,116,0.14), transparent 60%)" }}
          />
          <div className="relative mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:py-24">
            <Logo className="mx-auto h-20 w-auto" />
            <p className="eyebrow mt-6 text-gold-bright">{INVITE.kicker}</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl">
              {INVITE.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-cream/75">{INVITE.body}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/invite" className="btn btn-gold">
                Request a Date
              </Link>
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-ghost-inv">
                {INVITE.callLabel}: {SITE.phone}
              </a>
            </div>
          </div>
          <div className="tricolor" />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
