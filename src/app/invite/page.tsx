import type { Metadata } from "next";
import { INVITE, SITE, SERVE } from "@/config/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import InviteForm from "@/components/InviteForm";
import Reveal from "@/components/Reveal";
import { Diamond } from "@/components/Ornaments";

export const metadata: Metadata = {
  title: "Invite Us",
  description: INVITE.body,
  alternates: { canonical: "/invite" },
};

export default function InvitePage() {
  return (
    <>
      <SiteHeader overHero="dark" />
      <main>
        <PageHero
          kicker={INVITE.kicker}
          title={INVITE.heading}
          subtitle="A friend to your church — pulpit supply, revival meetings, conferences, and camps."
        />

        <section className="bg-cream">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:py-24">
            {/* Form */}
            <Reveal>
              <p className="max-w-lg text-lg leading-relaxed text-ink-soft">{INVITE.body}</p>
              <div className="mt-8">
                <InviteForm />
              </div>
            </Reveal>

            {/* Contact rail */}
            <Reveal delay={100}>
              <div className="rounded-md border border-rule bg-paper p-8">
                <p className="eyebrow text-red">Reach Us Directly</p>
                <ul className="mt-5 space-y-5">
                  <li>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
                      {INVITE.callLabel}
                    </p>
                    <a
                      href={`tel:${SITE.phoneTel}`}
                      className="font-display text-2xl text-navy transition-colors hover:text-red"
                    >
                      {SITE.phone}
                    </a>
                  </li>
                  <li>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
                      {INVITE.emailLabel}
                    </p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="break-all font-display text-xl text-navy transition-colors hover:text-red"
                    >
                      {SITE.email}
                    </a>
                  </li>
                  <li>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Where We Serve
                    </p>
                    <p className="mt-1 leading-relaxed text-ink-soft">{SITE.serviceArea}</p>
                  </li>
                </ul>

                <div className="mt-8 border-t border-rule pt-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Ways We Can Serve
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {SERVE.items.map((s) => (
                      <li key={s.title} className="flex items-center gap-3 text-[15px] text-ink-soft">
                        <Diamond className="h-2 w-2 shrink-0 text-gold" />
                        {s.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
