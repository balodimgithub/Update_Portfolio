<<<<<<< HEAD
# Update_Portfolio
This is a repository for my portfolio
=======
# Ledger & Light — FinTech Software Engineer Portfolio

A Next.js (App Router) + Tailwind CSS portfolio built for a software engineer
specializing in FinTech system flows and implementation. Off-white and green,
glowing accents, heavy motion, no top navigation bar — just floating buttons.

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## EmailJS setup (Contact page)

1. Create a free account at https://www.emailjs.com/
2. Create an **Email Service** (e.g. Gmail) → copy the **Service ID**.
3. Create an **Email Template** with variables matching the form field
   `name` attributes: `user_name`, `user_email`, `user_phone`, `message`.
   Copy the **Template ID**.
4. Copy your **Public Key** from Account → API Keys.
5. Open `app/contact/page.tsx` and replace:
   ```ts
   const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
   const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
   const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
   ```

## Project structure

```
app/
  layout.tsx          Root layout — loads fonts, mounts <NavButtons />
  globals.css          Theme tokens, glow utilities, signature "ledger-glow" line
  page.tsx              HOME — bio + portrait, fades together on large screens,
                         stacks on mobile
  profile/
    page.tsx            PROFILE — expandable bio + 4 sections, each with its
                         own distinct layout (badge grid, timeline, showcase,
                         ticker)
  contact/
    page.tsx            CONTACT — name / email / phone / work request form,
                         wired to EmailJS

components/
  NavButtons.tsx         Floating Home / Profile / Contact buttons + "back to
                         top" button (no top bar, by design)
  ExpandableBio.tsx      Read more / show less control for the Profile intro
  CertificatesSection.tsx   Section 1 — rotated badge-card grid
  ActivitySection.tsx       Section 2 — alternating vertical timeline
  ProjectsSection.tsx       Section 3 — large alternating feature showcase
                             with GitHub + live links
  LearningSection.tsx       Section 4 — horizontal auto-scrolling ticker

data/
  profileData.ts         Single source of truth — certificates, activities,
                         projects, and currently-learning arrays, each mapped
                         into its section component. Edit this file to update
                         all portfolio content; swap placeholder image URLs
                         for your own.
```

## Why each layout is shaped the way it is

- **Certificates** — a grid of slightly rotated badge cards. Certificates are
  not sequential, so they're treated as a collection, not a list.
- **Activity** — a vertical timeline with a glowing center line, alternating
  left and right. Activity *is* chronological, so order is communicated
  structurally.
- **Projects** — large alternating media-and-detail rows, because each
  project deserves room for a thumbnail, description, stack, and both a
  GitHub and live link.
- **Currently Learning** — a horizontal ticker that loops, because learning
  is ongoing and open-ended, not a finished list.

## Theme

| Token | Hex | Used for |
|---|---|---|
| `offwhite` | `#F6F3EC` | Page background |
| `paper` | `#FBF9F4` | Card surfaces |
| `ink` | `#11201A` | Body text |
| `ledger.900` | `#0A2A21` | Deepest green — gradients, dark cards |
| `ledger.800` | `#0E3B2E` | Primary buttons, headings accent |
| `ledger.700` | `#15603C` | Borders, secondary accents |
| `ledger.600` | `#1F7A4D` | Mid accent — eyebrows, links |
| `ledger.500`–`200` | `#2F8C54`→`#A8D8B6` | Gradient steps, glow line |
| `glow` | `#A8E6B5` | Glow highlights, shadow color |

**Typography**

- **Display (`font-display`)** — Fraunces, a warm high-contrast serif used in
  bold and italic for headings and emphasis. Italics are used throughout for
  emphasis on key words ("flow", "actually", "talk").
- **Body (`font-body`)** — Inter, for all paragraph and UI text.
  Bold weights are used for labels and CTAs.
- **Mono (`font-mono`)** — JetBrains Mono, used for eyebrows, tags, and dates
  to evoke a ledger / data-entry feel — fitting for a FinTech-focused
  portfolio.

**Signature element** — the `.ledger-glow` underline: a green gradient line
under key headings/words that pulses with a soft glow (`animate-pulseLine`),
echoing a live ledger or transaction indicator. The same glow language
(`shadow-glow`, `.card-glow`, `.btn-glow`) is reused on buttons and cards for
a consistent "shine" across the whole site, exactly as requested.

**Buttons** — pill-shaped, glow on hover (`btn-glow`), fill or invert color
on hover (`ledger-800` ↔ `paper`), bold sans-serif label.

**Navigation** — intentionally no top bar. A small italic wordmark sits
top-left; floating pill buttons (Home / Profile / Contact, whichever aren't
the current page) sit bottom-right on desktop and bottom-center on mobile,
plus a "back to top" button that appears after scrolling.

## Replacing placeholder content

All images currently point to `placehold.co` placeholder URLs so the site
runs immediately. Replace:
- The portrait image source in `app/page.tsx`
- Certificate / activity / project / learning images and links in
  `data/profileData.ts`
- GitHub/live links per project in `data/profileData.ts`
>>>>>>> eb87827 (Changes)
