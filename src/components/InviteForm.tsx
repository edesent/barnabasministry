"use client";

import { useState } from "react";
import { INVITE } from "@/config/site";

export default function InviteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("bad");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-sm border border-gold/50 bg-cream-2 p-8 text-center">
        <p className="font-display text-3xl text-navy">Thank you.</p>
        <p className="mt-3 text-ink-soft">
          Your note is on its way. We&apos;ll be in touch soon — and we&apos;re praying for you and
          your church already.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-sm border border-rule bg-paper px-4 py-3 text-ink outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/15";
  const label = "mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-soft";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Your Name</label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="church" className={label}>Church / Ministry</label>
          <input id="church" name="church" className={field} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="reason" className={label}>How can we serve?</label>
          <select id="reason" name="reason" defaultValue="" className={field}>
            <option value="" disabled>Choose one…</option>
            {INVITE.reasons.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="city" className={label}>City / State</label>
          <input id="city" name="city" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className={label}>A little about what you have in mind</label>
        <textarea id="message" name="message" rows={5} className={field} />
      </div>

      {status === "error" && (
        <p className="text-sm text-red">
          Something went wrong sending your note. Please call or text us at the number listed —
          we&apos;d love to hear from you.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-accent w-full sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send to the Ministry"}
      </button>
    </form>
  );
}
