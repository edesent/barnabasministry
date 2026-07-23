import Link from "next/link";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy-deep px-6 text-center text-cream">
      <Logo className="h-24 w-auto" />
      <p className="eyebrow mt-8 text-gold-bright">Page Not Found</p>
      <h1 className="mt-4 font-display text-5xl font-semibold text-cream sm:text-6xl">
        We couldn&apos;t find that page.
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-cream/70">
        The page you were looking for isn&apos;t here — but we&apos;d still love to be a friend to
        you and your church.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-gold">
          Back Home
        </Link>
        <Link href="/invite" className="btn btn-ghost-inv">
          Invite Us
        </Link>
      </div>
    </main>
  );
}
