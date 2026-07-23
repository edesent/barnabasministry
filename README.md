# Barnabas Ministry of Michigan — A Friend to Pastors

The website for **Barnabas Ministry of Michigan**, the husband-and-wife ministry of
**A.C. & Mrs. Caincross** — a friend to pastors and the churches they serve.
Pulpit supply, revival meetings, Bible conferences, and youth & family camps, given
to one aim: *encouraging, equipping, and edifying* the local church.

**Design concept — "The Son of Encouragement":** a warm, dignified heritage look —
deep navy, revival red, and antique gold on parchment, with an elegant Garamond
display face. Quietly patriotic (a nod to the ministry's own branding) without being
loud, so the tone stays pastoral and trustworthy. The shield emblem (cross, open
Bible, descending dove) is a clean hand-drawn SVG built from the ministry's logo idea.

---

## How to edit (no code needed)

**Almost everything the site says lives in one file:** [`src/config/site.ts`](src/config/site.ts).

Open it, find the text between the "quotes", type your new words, and save. The live
site updates within about a minute. Common edits:

- **Name / phone / email** — find `export const SITE` at the top.
- **The four ministries** (pulpit supply, revival, conferences, camps) — find `export const SERVE`.
- **Encouraging / Equipping / Edifying** — find `export const PILLARS`.
- **The heart / Scripture** — find `export const HEART`.
- **Bio (About page)** — find `export const ABOUT`.
- **The letter from the ministry** — find `export const LETTER`.

If you'd rather just say what you want changed in plain English, ask Claude or ChatGPT
connected to this repository and it will make the edit for you.

### A few things worth confirming
- **Photo** — `public/caincross-couple.jpg` was drawn from the ministry's promo graphic
  and tastefully toned. Drop in a clean, high-resolution photo of A.C. and his wife to
  replace it (real photos only — no AI imagery).
- **Mrs. Caincross's name** — the site currently reads "A.C. & Mrs. Caincross." Add her
  first name in `LETTER.signoff`, `ABOUT.role`, and `SITE` if you'd like it shown.
- **Invitation form** — the *Invite Us* form works out of the box (it accepts submissions).
  To have invitations emailed to your inbox, set `RESEND_API_KEY` and
  `INVITE_NOTIFY_EMAIL` in the project's environment (done at onboarding).

### Photos
Real photos only (no AI imagery). Drop image files in [`public/`](public/) and reference
them by name.

---

## Pages

Home · About (`/about`) · Invite Us (`/invite`)

## Brand

- **Palette:** parchment `#faf5ea` · navy `#17294a` · revival red `#9e2b25` · antique gold `#bd9648`
- **Type:** Cormorant Garamond (display) · Inter (body/labels)
- Colors and fonts are defined once in [`src/app/globals.css`](src/app/globals.css) and
  [`src/app/layout.tsx`](src/app/layout.tsx). The emblem lives in
  [`src/components/Logo.tsx`](src/components/Logo.tsx).

## For developers

- **Framework:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 (theme in `globals.css`, no `tailwind.config`)
- **Run locally:** `npm install` then `npm run dev`
- **Deploy:** pushing to `main` auto-deploys to Vercel.

Built by [Elijah Desent](https://www.elijahdesent.com).
