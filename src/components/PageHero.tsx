import { StarDivider } from "./Ornaments";

export default function PageHero({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy pt-[72px] text-cream">
      <div className="dot-field pointer-events-none absolute inset-0 text-gold opacity-[0.07]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, rgba(217,184,116,0.14), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 pb-16 pt-16 text-center sm:px-8">
        <p className="eyebrow text-gold-bright">{kicker}</p>
        <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.02] text-cream sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <>
            <StarDivider className="mx-auto mt-7 max-w-[10rem] text-gold/70" />
            <p className="mx-auto mt-6 max-w-xl font-display text-xl italic leading-relaxed text-cream/75">
              {subtitle}
            </p>
          </>
        )}
      </div>
      <div className="tricolor" />
    </section>
  );
}
