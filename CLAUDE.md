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
| Analytics | Google tag (gtag.js) — GA4 `G-KEFP78X254` + Google Ads `AW-17961146034` |
| Version Control | GitHub — `https://github.com/spencer-brave/brave-for-good` |

---

## Analytics

Both Google destinations run off a **single** `gtag.js` load in `src/layouts/Layout.astro`, so every page gets them via the shared layout:

| Destination | ID |
|---|---|
| GA4 property | `G-KEFP78X254` |
| Google Ads (conversion tracking, carried over from Wix) | `AW-17961146034` |

The library is requested once (`gtag/js?id=G-KEFP78X254`) and each destination gets its own `gtag('config', ...)` call. To add another destination, add a `config` line. Do **not** add a second `gtag/js` script tag: the loader is shared, and a duplicate load can double-count pageviews.

There is no consent banner or IP-anonymization config. If either becomes a requirement, it belongs in this same inline script, before the `config` calls.

---

## Hosting & Deployment

The repo lives at `https://github.com/spencer-brave/brave-for-good` and is connected to **Render** for automatic deploys. Pushing to `main` triggers a new deploy.

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

Each is declared in `tailwind.config.mjs` as `oklch(... / <alpha-value>)`. That placeholder is **required** for the slash opacity modifier to work (`bg-brand-navy/50`). Drop it and Tailwind cannot inject an alpha channel into the raw `oklch()` string, so it silently emits an invalid color and the element paints fully transparent. Keep it on any brand color added later.

### Typography

- **Serif (Bitter):** headings, pull quotes, editorial numbers — `font-serif`
- **Sans (Source Sans 3):** body copy, UI labels, navigation — `font-sans`
- Heading sizes: `text-2xl md:text-3xl` for section headings (use `.section-heading` class)
- Body line length: capped around 65ch (`max-w-2xl` or `max-w-xl`)
- Setting a line-height on a responsive heading needs the size/leading shorthand at every step (`text-4xl/[1.14] md:text-5xl/[1.14]`). A bare `leading-*` loses to the line-height each `text-*` utility resets inside its own media query.

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
| `/programs/bible-revival` | `src/pages/programs/bible-revival/index.astro` | Bible Revival program page; YouTube embed on click. BOTR is a section within it, not its own program. Old `/programs/bible-of-the-revolution` URL redirects here. |
| `/programs/bible-revival/donate` | `src/pages/programs/bible-revival/donate.astro` | BOTR "Get Your Copy" donation page; Anedot embed. **Currently unlinked** — the offer is paused; nothing on the site points here. Flip `offerBibleOfTheRevolution` in `bible-revival/index.astro` to re-expose it. |
| `/programs/iggy-and-mr-kirk` | `src/pages/programs/iggy-and-mr-kirk.astro` | Faith Forward Content Creation program page (IAMK is one piece of it). URL kept for inbound links. |
| `/programs/book-donations` | `src/pages/programs/book-donations.astro` | Book Donations program page |
| `/seeyouatthelibrary` | `src/pages/seeyouatthelibrary.astro` | See You at the Library evergreen page |
| `/seeyouatthelibrary/faq` | `src/pages/seeyouatthelibrary/faq.astro` | SYATL FAQ |
| `/statement-of-faith` | `src/pages/statement-of-faith.astro` | Fourteen articles |
| `/about` | `src/pages/about.astro` | Leadership team (no board section, no photos currently) |
| `/impact` | `src/pages/impact.astro` | Annual impact stats |
| `/grants` | `src/pages/grants.astro` | For institutional funders; Formspree contact form |
| `/host` | `src/pages/host.astro` | Host a story hour; links out to Feathery form |
| `/support` | `src/pages/support.astro` | Donate page; Anedot embed (general giving) |
| `/contact` | `src/pages/contact.astro` | Contact form (Formspree) + Quick Links. No email address shown — the form is the only contact path. |
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
Used on `/programs/bible-revival` — thumbnail shown first, iframe swapped in on click.

---

## Layout & Navigation

**Nav links** (defined in the `navLinks` array in `src/layouts/Layout.astro`):
- Our Mission → `/mission`
- Programs → `/programs` (hover dropdown, sourced from the `programLinks` array)
  - All Programs → `/programs`
  - See You at the Library → `/seeyouatthelibrary`
  - Faith Forward Content Creation → `/programs/iggy-and-mr-kirk`
  - Bible Revival → `/programs/bible-revival`
  - Book Donations → `/programs/book-donations`
- Statement of Faith → `/statement-of-faith`
- About → `/about`
- Donate button → `/support`

Any nav item with a `children` array renders as a dropdown (CSS `group-hover` / `group-focus-within`, no JS). The same array also drives the mobile drawer, with the duplicate parent link filtered out.

**Mobile drawer** (`#drawer-panel` in `src/layouts/Layout.astro`): a fixed off-canvas panel that slides in from the right over a dimmed backdrop. It lives *outside* `<header>` so opening it never displaces page content, and it animates `transform` only. The script handles Escape, backdrop click, focus trapping, focus restore to the trigger, `inert` while closed, page scroll lock, and auto-close when crossing into the `lg` breakpoint. Don't move it back inside the header or into normal document flow.

**Programs carousel** (`#programs-carousel` in `src/pages/index.astro`): a slim navy band after the annual-results section. A flex track slides on `transform`, showing one program per view below `lg` and two across at `lg`, advancing a page every 8s starting at page load. Program data is the `carouselPrograms` array at the top of the file.

- Each item is `w-full lg:w-1/2`, so one page step is always `translateX(-100%)` of the container. The `lg:w-1/2` and the `(min-width: 1024px)` media query in the script must stay in sync.
- Page count depends on the breakpoint (4 on mobile, 2 on desktop), so the dots are built in JS and rebuilt on breakpoint change. Their Tailwind classes live in the `dotClass` string; Tailwind picks them up because they are literal text in the file, so don't build those class names dynamically.
- Adjacent steps slide; jumps of more than one page (the mobile wrap, a dot click across the track) snap with the transition suppressed.
- Rotation pauses on hover (fine pointers only) and on focus, stops for good on a dot click or the pause button, and halts in background tabs. Under `prefers-reduced-motion` it still rotates but the slide is dropped via `motion-reduce:transition-none`; the pause button is what satisfies WCAG "pause, stop, hide".
- Items scrolled out of view are set `inert` + `aria-hidden` so their links are not tabbable.

**Footer columns:** Organization, Programs, Get Involved
**Footer bottom bar:** © 2025 Brave for Good · 501(c)(3) nonprofit · EIN: 39-2416029 · Privacy Policy · Terms of Service

---

## Images

All production images live in `public/images/`. Source/original assets are in `assets/` (not served directly).

| File | Used On |
|---|---|
| `logo-stacked.webp` | Nav (full color) + footer (brightness-0 invert for dark bg). The stacked BRAVE / for good wordmark, ~2.4:1. |
| `logo.webp` | Legacy single-line wordmark (~5:1). No longer used in the layout; kept for wide placements. |
| `kirk-scarsdale-reading.avif` | Homepage hero |
| `trent-talbot.avif` | Homepage event CTA section |
| `bible-revival-assembly.webp` | Programs page (Bible Revival card) |
| `bible-of-the-revolution.webp` | Bible Revival page + BOTR donate page |
| `bible-video-thumbnail.webp` | Bible Revival page (video placeholder) |
| `kirk-headshot.webp` | BOTR donate page |
| `iggy-wish-group.webp` | Faith Forward Content Creation hero (team photo) |
| `iggy-kirk-puppets.webp` | Programs page card + Make-A-Wish section on the FFCC page |
| `iggy-wish-arrival.webp`, `iggy-wish-hospital.webp` | Make-A-Wish section on the FFCC page |
| `books-ahg-fiona.webp` | Programs page card + Book Donations "Why" section |
| `books-ahg-camilla.webp`, `tackle-tomorrow.webp` | Book Donations "Books in Hands" |
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
