import { NextResponse } from "next/server";

/**
 * Invitation / contact endpoint for Barnabas Ministry of Michigan.
 *
 * If RESEND_API_KEY + INVITE_NOTIFY_EMAIL are set, the request is emailed to the
 * ministry. Without them the request still succeeds (nothing is stored) — connect
 * an email provider (Resend) at onboarding to receive invitations in the inbox.
 */
export async function POST(request: Request) {
  let d: Record<string, string> = {};
  try {
    const body = await request.json();
    d = Object.fromEntries(
      Object.entries(body).map(([k, v]) => [k, String(v ?? "").trim()])
    );
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  if (!d.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) {
    return NextResponse.json({ ok: false, error: "A valid email is required" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.INVITE_NOTIFY_EMAIL;

  if (key && to) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Barnabas Ministry <onboarding@resend.dev>",
          to: [to],
          reply_to: d.email,
          subject: `New invitation: ${d.name || d.email}${d.church ? ` — ${d.church}` : ""}`,
          text: [
            `Name: ${d.name || "—"}`,
            `Church / Ministry: ${d.church || "—"}`,
            `Email: ${d.email}`,
            `Phone: ${d.phone || "—"}`,
            `Requesting: ${d.reason || "—"}`,
            `City / State: ${d.city || "—"}`,
            "",
            `Message:`,
            d.message || "—",
          ].join("\n"),
        }),
      });
    } catch {
      // Never fail the visitor's submission over a notification hiccup.
    }
  }

  return NextResponse.json({ ok: true });
}
