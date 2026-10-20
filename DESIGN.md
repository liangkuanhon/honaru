# DESIGN.md - Honaru landing page

Brand, audience and copy rules for the Honaru website. `CLAUDE.md` covers code structure
and workflow; where the two overlap they agree. Updated 2026-10-18 to match the owner's
direction of 2026-10-17, replacing the earlier Purple Sand draft.

---

## 1. What Honaru is

- **Mission:** "We bring the people you love closer."
- **Why:** "Some call. Some send memes. Some just show up. All of it counts." Everyone keeps
  close in their own way, but messaging apps are built for everyone, so they fit no
  relationship in particular and the small things get lost.
- **Product:** a messaging app where each close relationship gets its own private Space:
  Couple, Family, Friends and Travel.
- **Slogan:** "Made for your people."
- **Promises:** one Space for each kind of relationship; conversations and data are never
  sold; location sharing is opt-in with no background tracking; no investors. These are
  the owner's commitments; never soften or add to them.
- **Giving back:** part of what Honaru earns helps a few people far from home each year
  get back, or feel less far. No fixed percentage.
- **Status:** pre-launch.

## 2. Who it is for

- **Users:** adults aged 18-35 who keep several close
  circles going at once (a partner, family, friends, trips) and feel them getting lost in
  one chat app. At the heart of it: people living far from the people they love.
- **Their people:** parents and grandparents brought in through the Family Space, so
  anything they might see stays plain and easy.
- **Visitors who are not users:** partners, press, creators, organisations and people who
  want to work here. They reach us through `/contact` and `/careers`.

The site's job is to answer one question for all of them: why does Honaru exist, and why
trust the person behind it?

## 3. Scope

This site is not the product. The Spaces live only in the mobile app.

- **Do:** the belief, one human moment, the four Spaces as a feeling, reviews, the
  mission, the pledge, careers, contact, download or waitlist.
- **Don't:** feature tours, per-Space pages, app-screen walkthroughs, pricing, sign-in,
  onboarding, a journal or milestones feed, stat strips. Detail gets its own page, never
  more home sections.

## 4. Pages

Header: Mission and Pledge on the left, the brand centred, Download and Careers on the
right; Download is not a page, only a hover card with the App Store QR code. Footer
(purple): brand, X / Instagram / TikTok icons and copyright on the left; Index and Legal links on the right.

| Route | Screens |
| --- | --- |
| `/` | Hero (the belief) · the problem as one human moment · the four Spaces on a slow loop · reviews · closing slogan and waitlist |
| `/mission` | The mission over a 16:9 image · why we exist, with a 3:2 illustration · three numbered promises · "how we decide" pull quote over a 21:9 strip · "Honaru started with a real reason", linking to `/pledge` · waitlist |
| `/pledge` | "Giving back" hero · why this matters to me (the founder's own words) · what we'll do · closing |
| `/careers` | Hero · who we hope to meet · how we work · open roles · closing |
| `/contact` | Email and contact form |
| `/privacy` | Privacy note |

Home, `/mission` and `/pledge` are built from full screens alternating white and purple.
Inner pages are white.

## 5. Visual language

Minimal and inviting, in the spirit of locket.com. Calm, like a letter from a friend.

### Colour

Three colours only.

| Token | Hex | Use |
| --- | --- | --- |
| `--purple` | `#7C6BA8` | Logo, buttons, links, accents, purple screens |
| `--black` | `#000000` | Text |
| `--white` | `#FFFFFF` | Background |

- Components use role tokens (`--bg`, `--fg`, `--accent`, `--on-accent`), which a purple
  screen swaps to white on purple. The sticky header takes the tone of the screen under it.
- Text selection is a tint mixed from these colours (`--selection`): light lavender on
  white, deep lavender on purple. Tints exist only for selection, never for panels.
- No cream, sand, greys, status colours, gradients, shadows, blur or dark theme.
- Contrast: purple on white and white on purple are both 4.6:1, AA for text and buttons.
  Errors are shown without colour: a 2px outline on the field and the message in text.

### Type

- **Newsreader** (weight 500, optical sizing) for h1-h3 and the wordmark.
- **DM Sans** (300-600) for everything else; 600 where something should read as bold.
- Both self-hosted with `font-display: block` and no system-font fallback, so every device
  shows the same faces.
- Hero taglines are large but not shouting: roughly 36px on phones to 60px on wide screens.

### Shape and space

- Radius 4px. 1px borders. Separate things with space, not boxes.
- Content about 1120px wide, text columns about 640px. Gutters 16px, 24px from 768px.
- Touch targets at least 44px.

### Logo, icons, imagery

- Logo: two people forming an arch, in purple, beside the Newsreader wordmark.
- Icons: line only on a 24px grid. No filled icons, no emoji.
- No stock photos. Until real art exists, `Illustration` holds the space at its final
  aspect ratio (4:5, 3:2, 16:9, 21:9), labelled with what the image should show.

## 6. Motion

- Allowed: the hero tagline fading in as two beats; the slow Spaces loop (no pause control,
  by the owner's choice); the header easing between tones; hover colour changes.
- Not allowed: scroll-triggered effects, parallax, bouncing, confetti.
- Reduced motion stops all of it and turns the Spaces loop into a still, scrollable row.

## 7. Voice and copy

- Warm, plain and slightly understated, like a letter from a friend. People and moments
  first, tools second.
- British spelling. Sentence case. No exclamation marks. Never "revolutionise",
  "seamless" or "all-in-one".
- Spaces are described by feeling, never by feature ("Just the two of you").
- Never invent achievements, numbers, quotes, partners, platforms, dates or legal text.
  Anything unconfirmed is a visible `[placeholder]`.
- Reviews are real and quoted with permission, or stay placeholders.
- The founder's story is in their own words, never written for them. Giving-back
  recipients are named only with their permission.

## 8. Accessibility

- WCAG 2.1 AA. One `h1` per page, logical headings, landmarks, a skip link, visible focus.
- Visible labels on every field; errors linked with `aria-describedby`; outcomes in a
  `role="status"` region.
- Decorative art is `aria-hidden`.
- Check at 360px, 768px and 1120px, and with reduced motion.
