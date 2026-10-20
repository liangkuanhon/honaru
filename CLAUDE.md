# CLAUDE.md - Honaru web

> Rules for AI-assisted work here. `DESIGN.md` covers the brand, audience and copy; this
> file covers code and workflow. Update both when the structure changes.

## What this is

Only the Honaru landing page. The Spaces (Couple, Family, Friends, Travel) live in the
mobile app; never build app features, sign-in or per-Space tours here.

Owner direction (2026-10-17), which overrides DESIGN.md where they differ:

- **Minimal and inviting**, in the spirit of locket.com. The home page answers one
  question, "why does this exist, and why trust the person behind it?", in five screens:
  hero (the belief), the problem as one human moment, the four Spaces as a looping
  teaser, reviews, closing waitlist. Features belong in the app; detail lives on its own
  page, never in more home sections.
- Header: Mission and Pledge on the left, brand centred, Download and Careers on the
  right (Download is a hover card, not a page). Footer (purple): brand, X / Instagram /
  TikTok icons and copyright on the left; Index and Legal links on the right.
- **Three colours: purple, black, white.** White background, black text, purple for the
  logo, buttons, links and accents. No cream, sand, greys or extra status colours; no dark
  theme (`prefers-color-scheme: dark`).
- **Newsreader for headings (h1-h3, wordmark), DM Sans for everything else.** Both
  self-hosted with `font-display: block` and no system-font stack, so every device renders
  the same faces.
- **Real routes** (`/about`, `/journal`, …) defined in TypeScript, not `#section` links.
- **React components, not repeated markup.** One `index.html`; pages compose shared components.
- **As few files and folders as possible.** No folder for a single file; no docs/,
  scripts/ or per-page HTML.

## Structure

```text
index.html              the only HTML file
public/                 _headers, favicon, Newsreader + DM Sans (woff2), og.png
src/
├── main.tsx            mounts <App />
├── App.tsx             route table: Record<Path, { title, page }>
├── router.ts           paths, usePathname(), navigate()
├── content.ts          all copy and data (belief, Spaces, reviews, mission, pledge, stores)
├── styles.css          tokens and every style
├── components/
│   ├── ui.tsx          Link, ButtonLink, Screen, Page, Section, Card, CardGrid, Cards,
│   │                   Mark, Brand, StoreBadges, GetApp, Illustration, EmailLink
│   ├── Layout.tsx      header, <main>, footer
│   ├── forms.tsx       NewsletterForm, ContactForm (one useForm hook, one Field)
│   └── Icon.tsx        line icons
└── pages/              Home, Mission, Pledge, Careers, Contact, Privacy,
                        NotFound
```

## Routing

- Add a route by appending to `paths` in `router.ts`; `App.tsx` then fails to compile
  until the route has a page in `routes`. `Link` only accepts a `Path`, so broken
  internal links are type errors.
- Internal links use `Link` or `ButtonLink`, never a bare `<a href="/...">`.
- Cloudflare Pages serves `index.html` for unknown paths (there is no `404.html`); the
  router shows `NotFound`.
- No router library; keep `router.ts` small.

## Commands and validation

```bash
yarn install
yarn dev
yarn lint && yarn build    # both must pass before reporting work done
```

- Yarn 4 via Corepack (`packageManager` in `package.json`). If `yarn --version` prints
  1.x, use `corepack yarn` or run `corepack enable`. Never use npm or commit a
  `package-lock.json`.
- No test runner yet. For visual changes, check `yarn dev` at 360px, 768px and 1120px and
  with reduced motion. If you could not look, say so.

## Design rules

- Colours: only `--purple`, `--black` and `--white`; do not add a fourth. Components use
  the role tokens `--bg`, `--fg`, `--accent` and `--on-accent`, never the colours
  directly, so they work on both tones. No gradients, shadows, blur or tinted panels;
  separate things with space, not boxes. Radius 4px; 1px borders.
- Tones: home screens alternate white and purple (`<Screen tone="purple">` sets
  `data-tone`, which swaps the role tokens to white on purple). The sticky header takes
  the tone of the section beneath it, and turns transparent while a full-bleed image
  covers it (`useWhatIsUnder` in `Layout.tsx`). Inner pages are white.
- Contrast (checked 2026-10-17): purple #7C6BA8 is 4.6:1 on white and white on purple is
  4.6:1, so it passes AA for links and button labels. Errors are shown without colour: a
  2px outline on the field and the message in text.
- Fonts via `--font-heading` and `--font-body` only. DM Sans runs 300-600 (use 600
  where DESIGN.md says Bold). Newsreader runs 200-800 with an optical-size axis;
  headings use 500.
- Motion: the two-beat hero fade, the slow Spaces loop (no pause control, by the
  owner's choice), the header's colour easing between tones, and hover colour changes. No scroll-triggered effects. Reduced motion stops all of it and turns the
  carousel into a still, scrollable row.
- Imagery: no stock photos. `Illustration` marks where an image goes, at its final
  aspect ratio (4:5, 3:2, 16:9, 21:9) and labelled with what the asset should show, so
  the real one swaps in without moving the layout. On white, purple is for the logo, buttons and accents only.
- Accessibility: one `h1` per page (`Page` or the hero provides it), visible labels,
  errors linked with `aria-describedby`, outcomes in a `role="status"` region, 44px touch
  targets.
- No `style={...}`: the CSP in `public/_headers` blocks inline styles.

## Content rules

- Copy lives in `src/content.ts`. Voice: warm, plain and slightly understated, like a
  letter from a friend; British spelling, no exclamation marks, never "revolutionise",
  "seamless" or "all-in-one".
- Reviews are real, quoted with permission, or stay as placeholders.
- Home, `/mission` and `/pledge` are built from `Screen`s, alternating white and purple.
  Mission follows the owner's brief (2026-10-17): the mission over a full-bleed 16:9
  image, why we exist (one scene, with a 3:2 illustration), three numbered promises,
  "how we decide" pull quote over a 21:9 strip, then "Honaru started with a real reason"
  linking to the founder's story on `/pledge`, and the waitlist. The promises (never
  selling data, no investors) are the owner's commitments; do not soften or add to them.
- Pledge follows the owner's rewrite (2026-10-17): "Giving back" hero, why this matters
  to me (the founder's own words, never written for them), what we'll do, closing. No
  reporting section until giving back has actually started. Never commit to a percentage: each year a few people far from home are
  chosen. The giving-back ideas stay marked as a draft until confirmed; recipients are
  named only with their permission.
- Careers: hero, who we hope to meet, how we work, open roles, closing. The traits we
  look for (believing in what Honaru is for, giving back, looking out for those with
  less) are implied through small moments, never listed outright.
- The header's Download is a button, not a link (there is no download page): it shows a
  QR card on hover or focus (pointer devices only); a placeholder until the App Store
  listing exists.
- Never invent achievements, numbers, quotes, partners, platforms, dates or legal text.
  Unconfirmed values are `[bracketed]` and stay visible; `EmailLink` refuses to link a
  placeholder address.
- Waitlist mode: while both store URLs are `null`, `GetApp` (home closing screen) shows the waitlist form and "Launching first in Singapore" instead of
  store badges.

## Forms

- Both forms post JSON to `VITE_NEWSLETTER_ENDPOINT` / `VITE_CONTACT_ENDPOINT`. With none
  set, dev fakes success and production shows "email us instead"; never report success
  for data that went nowhere.
- A honeypot field filters bots. Adding a form service adds a vendor: flag it, and add its
  origin to `connect-src` in `public/_headers`.

## Constraints and safety

- Cost close to $0: Cloudflare Pages free tier, no paid services, no third-party scripts,
  fonts or analytics. Flag anything that adds a vendor or a monthly fee.
- Never read, print or commit `.env`. Every variable is public (`VITE_*`); never add a
  secret.
- Stage files by explicit path and check `git status` for env files before committing.
- Commits: `type(scope): imperative summary` (≤72 chars). Types: feat, fix, chore,
  refactor, docs, style.

## TODO

- [ ] Domain: set `VITE_SITE_URL` and replace `hello@[domain]` in `content.ts`.
- [ ] Store URLs once listed, the official badge artwork, and the Download QR code.
- [ ] Choose a form backend and set the endpoints.
- [ ] Real reviews, social profile URLs (now google.com placeholders).
- [ ] Founder's story and photo, pledge details, careers copy and legal text.
