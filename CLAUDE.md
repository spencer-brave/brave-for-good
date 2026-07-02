# Brave for Good — Project Reference

## What This Site Is

**braveforgood.org** is the primary web presence for Brave for Good, Inc., a 501(c)(3) nonprofit that equips families with faith-centered stories and community experiences through public library events. The site has two equal goals: (1) convert institutional funders / grant-makers, and (2) acquire individual donors and event participants.

The site was rebuilt from Wix to a static Astro site in 2025. All edits happen via Claude Code.

---

## Organization Details

| Field | Value |
|---|---|
| Legal Name | Brave for Good, Inc. |
| EIN | 39-2416029 |
| IRS Status | 501(c)(3) Public Charity |
| Year Founded | 2025 |
| State | Texas |
| Primary Email | info@braveforgood.org |
| Grants Email | grants@braveforgood.org |

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Astro v5 (static output) |
| Styling | Tailwind CSS v3.4 |
| Fonts | Bitter (serif) + Source Sans 3 (sans) via Google Fonts |
| Forms | Formspree — endpoint `https://formspree.io/f/xbdvpgqw` |
| Donations | Anedot (two embeds — see pages below) |
| Host Registration | Feathery — `https://form.feathery.app/to/CttLVd` (external link, iframe blocked) |
| Video | YouTube (unlisted) — embedded via iframe on click |
| Version Control | GitHub — `https://github.com/spencer-brave/brave-for-good` |

---

## Hosting & Deployment

The repo lives at `https://github.com/spencer-brave/brave-for-good`. The site is **not yet connected to a live hosting provider**. Recommended next step: connect the repo to Netlify or Vercel for automatic deploys on push to `main`.

The 115MB Bible of the Revolution video (`BibleOfTheRevolution-Website.mov`) is too large for GitHub. It is hosted on YouTube (unlisted) at `https://youtu.be/LJZrKP-aZ1w` and embedded on the Bible Revival page.

---

## Brand & Design

### Aesthetic
Classic Americana / WPA poster. Dignified, grounded, faith-inflected. Not modern SaaS. Not sterile nonprofit. Think: library, parchment, service, permanence.

### Colors (Tailwind tokens)

| Token | OKLCH | Use |
|---|---|---|
| `brand-navy` | `oklch(22% 0.065 264)` | Primary dark — hero backgrounds, headings |
| `brand-blue` | `oklch(38% 0.11 259)` | Secondary blue accents |
| `brand-gold` | `oklch(74% 0.14 79)` | Accent — CTAs, highlights, rule lines |
| `brand-rust` | `oklch(52% 0.165 40)` | Links, secondary CTAs, icon accents |
| `brand-cream` | `oklch(97% 0.012 85)` | Light section backgrounds |
| `brand-sand` | `oklch(92% 0.018 85)` | Slightly warmer light backgrounds |
| `brand-light` | `oklch(95% 0.03 250)` | Cool light tint |

### Typography

- **Serif (Bitter):** headings, pull quotes, editorial numbers — `font-serif`
- **Sans (Source Sans 3):** body copy, UI labels, navigation — `font-sans`
- Heading sizes: `text-2xl md:text-3xl` for section headings (use `.section-heading` class)
- Body line length: capped around 65ch (`max-w-2xl` or `max-w-xl`)

### Component Classes (defined in `src/styles/global.css`)

| Class | Use |
|---|---|
| `.btn-primary` | Solid gold/rust CTA button |
| `.btn-secondary` | Outlined secondary button |
| `.section-heading` | `text-2xl md:text-3xl font-serif font-bold text-brand-navy` |
| `.section-subheading` | `text-base text-gray-600 mt-3 max-w-2xl` |

### Hard Rules — Never Do These
- No side-stripe `border-left` accent borders on cards or callouts
- No gradient text (`background-clip: text`)
- No Inter font (use Source Sans 3)
- No hero-metric dashboard layout (big number + label grid)
- No identical card grids (icon + heading + text, repeated endlessly)
- No em dashes — use commas, colons, or parentheses

---

## Page Map

| URL | File | Notes |
|---|---|---|
| `/` | `src/pages/index.astro` | Hero CTAs: Donate → `/support`, See Our Impact → `#impact` anchor |
| `/mission` | `src/pages/mission.astro` | Mission, vision, values |
| `/programs` | `src/pages/programs/index.astro` | Programs overview |
| `/programs/bible-of-the-revolution` | `src/pages/programs/bible-of-the-revolution.astro` | Bible Revival program page; YouTube embed on click |
| `/programs/bible-revival/donate` | `src/pages/programs/bible-revival/donate.astro` | BOTR donation page; Anedot embed |
| `/programs/library` | `src/pages/programs/library/index.astro` | See You at the Library evergreen page |
| `/programs/library/2025` | `src/pages/programs/library/2025.astro` | 2025 event page |
| `/about` | `src/pages/about.astro` | Leadership team (no board section, no photos currently) |
| `/impact` | `src/pages/impact.astro` | Annual impact stats |
| `/grants` | `src/pages/grants.astro` | For institutional funders; Formspree contact form |
| `/host` | `src/pages/host.astro` | Host a story hour; links out to Feathery form |
| `/support` | `src/pages/support.astro` | Donate page; Anedot embed (general giving) |
| `/contact` | `src/pages/contact.astro` | Contact form (Formspree) + info@braveforgood.org only |
| `/news` | `src/pages/news.astro` | News/blog (placeholder posts) |
| `/partners` | `src/pages/partners.astro` | Partners page |
| `/privacy` | `src/pages/privacy.astro` | Privacy policy |
| `/terms` | `src/pages/terms.astro` | Terms of service |

---

## Key Third-Party Embeds

### Formspree
All forms post to `https://formspree.io/f/xbdvpgqw`. Use a hidden `_subject` field to identify the source:
```html
<input type="hidden" name="_subject" value="Contact Form Submission — Brave for Good" />
```
Forms on: `/contact`, `/grants`, `/news` (newsletter)

### Anedot — General Giving (`/support`)
```
https://secure.anedot.com/brave-for-good/78cb99ce-118a-4fa1-bdeb-d78453f0ae13?embed=true
```

### Anedot — Bible of the Revolution (`/programs/bible-revival/donate`)
```
https://secure.anedot.com/brave-for-good/fc2adfa2-2bc3-4da5-9577-ff980de9bf45?embed=true
```

### YouTube — Bible of the Revolution video
Embed URL: `https://www.youtube.com/embed/LJZrKP-aZ1w?autoplay=1`
Used on `/programs/bible-of-the-revolution` — thumbnail shown first, iframe swapped in on click.

---

## Layout & Navigation

**Nav links** (defined in `src/layouts/Layout.astro`):
- Our Mission → `/mission`
- Programs → `/programs`
- About → `/about`
- Host an Event → `/host`
- Donate button → `/support`

**Footer columns:** Organization, Programs, Get Involved
**Footer bottom bar:** © 2025 Brave for Good · 501(c)(3) nonprofit · EIN: 39-2416029 · Privacy Policy · Terms of Service

---

## Images

All production images live in `public/images/`. Source/original assets are in `assets/` (not served directly).

| File | Used On |
|---|---|
| `logo.webp` | Nav (full color) + footer (brightness-0 invert for dark bg) |
| `kirk-scarsdale-reading.avif` | Homepage hero |
| `trent-talbot.avif` | Homepage event CTA section |
| `bible-of-the-revolution.webp` | Bible Revival page + BOTR donate page |
| `bible-video-thumbnail.webp` | Bible Revival page (video placeholder) |
| `kirk-headshot.webp` | BOTR donate page |
| `kirk-coach-kennedy.avif` | Homepage photo strip |
| `story-hour-hendersonville.avif` | Homepage photo strip |
| `story-hour-springfield.avif` | Homepage photo strip |
| `story-hour-taylor-tx.avif` | Homepage photo strip |
| `event-1.avif`, `event-2.avif` | Event gallery |

---

## Common Tasks

**Add a new page:** Create `src/pages/[slug].astro`, import `Layout`, follow the section pattern (navy hero → content sections → CTA). Add to nav or footer if needed.

**Update nav links:** Edit the `navLinks` array at the top of `src/layouts/Layout.astro`.

**Update footer links:** Edit the footer columns in `src/layouts/Layout.astro` (~line 100+).

**Add a new form:** Point `action` to `https://formspree.io/f/xbdvpgqw` with a `_subject` hidden field and `method="POST"`.

**Add a new image:** Drop it in `public/images/`, reference as `/images/filename.ext`.

**Push changes live:** `git add [files] && git commit -m "message" && git push origin main`
