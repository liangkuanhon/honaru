# DESIGN.md - Honaru landing page

Brand, audience and copy rules for the Honaru website. `CLAUDE.md` covers code structure
and workflow; where the two overlap they agree. Updated 2026-10-18 to match the owner's
direction of 2026-10-17; colours replaced 2026-10-25.

---

## 1. What Honaru is

- **Mission:** "We bring the people you love closer."
- **Why:** "Some call. Some send memes. Some just show up. All of it counts." Everyone keeps
  close in their own way, but messaging apps are built for everyone, so they fit no
  relationship in particular and the small things get lost.
- **Product:** a messaging app where each close relationship gets its own private Room:
  Couple, Family & Friends, and Travel.
- **Slogan:** "Made for your people."
- **Promises:** one Room for each kind of relationship; conversations and data are never
  sold; location sharing is opt-in with no background tracking. These are
  the owner's commitments; never soften or add to them.
- **Giving back:** part of what Honaru earns helps a few people far from home each year
  get back, or feel less far. No fixed percentage.
- **Status:** pre-launch.

## 2. Who it is for

- **Users:** adults aged 18-35 who keep several close
  circles going at once (a partner, family, friends, trips) and feel them getting lost in
  one chat app. At the heart of it: people living far from the people they love.
- **Their people:** parents and grandparents brought in through the Family & Friends Room, so
  anything they might see stays plain and easy.
- **Visitors who are not users:** partners, press, creators, organisations and people who
  want to work here. They reach us through `/contact` and `/careers`.

The site's job is to answer one question for all of them: why does Honaru exist, and why
trust the person behind it?

## 3. Scope

This site is not the product. The Rooms live only in the mobile app.

- **Do:** the belief, one human moment, the three Rooms as a feeling, reviews, the
  mission, the pledge, careers, contact, download or waitlist.
- **Don't:** feature tours, per-Room pages, app-screen walkthroughs, pricing, sign-in,
  onboarding, a journal or milestones feed, stat strips. Detail gets its own page, never
  more home sections.

## 4. Pages

Header: Mission and Pledge on the left, the brand centred, Download and Careers on the
right; Download is not a page, only a hover card with the App Store QR code. Footer
(ink): brand, X / Instagram / TikTok icons and copyright on the left; Index and Legal links on the right.

| Route | Screens |
| --- | --- |
| `/` | Hero (the belief) · the problem as one human moment · the three Rooms on a slow loop |
| `/mission` | The mission over a 16:9 image · why we exist, with a 3:2 illustration · two numbered promises · "how we decide" pull quote over a 21:9 strip · "Honaru started with a real reason", linking to `/pledge` · waitlist |
| `/pledge` | "Giving back" hero · why this matters to me (the founder's own words) · what we'll do · closing |
| `/careers` | Hero · who we hope to meet · how we work, with a button to `/mission` · open roles · closing |
| `/rooms` | "Every relationship gets a room of its own." · one screen per Room in its tint: who it is for, the feeling, the place (owner's copy). Linked only from the footer (Resources → Rooms) and the carousel's "Step inside" button; never in the header |
| `/contact` | Three inboxes: support@, careers@, hello@ for everything else |
| `/privacy` | Privacy note |

Home, `/mission` and `/pledge` are built from full screens alternating ground and ink.
Inner pages are ground.

## 5. Visual language

Minimal and inviting, in the spirit of locket.com. Calm, like a letter from a friend.

### Colour

Two core colours, and one accent family per Room (2026-10-25). The palette is defined
once, in `:root` in `src/styles.css`; nothing else holds a hex value except
`public/favicon.svg` and `theme-color` in `index.html`, which can't read CSS.

**Core**

| Token | Hex | Use |
| --- | --- | --- |
| `--ground` | `#FAF8F5` | Background; text on ink |
| `--ink` | `#17151C` | Text; logo, buttons, links and focus rings; the alternate screens |

Primary buttons are ink with ground text. Ink screens swap the two.

**Room accents**

| Room (`RoomId`) | Family | `--room-accent` (strong) | `--room-tint` (soft) | `--room-accent-text` |
| --- | --- | --- | --- | --- |
| Couple (`couple`) | Rose | `#C98F83` | `#F1E0DA` | `#5A3D37` |
| Travel (`travel`) | Sage | `#93A88D` | `#E3EAE0` | `#34432F` |
| Family & Friends (`family-friends`) | Lavender | `#B9A9D6` | `#E8E1F2` | `#3F3556` |

- Raw tokens are `--rose`, `--rose-tint`, `--rose-text` (and `sage-`, `lavender-`).
  Components read only the semantic ones: `--bg`, `--fg`, `--accent`, `--on-accent`,
  `--selection` and the three `--room-*`.
- An element with `data-room={room.id}` (`couple`, `family-friends`, `travel`) sets the
  three `--room-*` tokens, and everything inside takes that Room's mood: the tint as a wash, the strong
  accent as a frame, the accent text for marks and words. Outside any Room they default
  to Lavender. On the site this is the Rooms carousel on the home page.
- Strong accents are fills and frames only. Tints are Room washes and text selection,
  never general panels. No greys, status colours, gradients, shadows, blur or dark theme.
- The sticky header takes the tone of the screen under it.

**Contrast** (checked 2026-10-25)

| Pair | Ratio |
| --- | --- |
| Ink / ground | 17:1 |
| Accent text on its tint | Rose 7.6, Sage 8.6, Lavender 8.9 |
| Accent text on ground | 9.2-10.7 |
| Ink on a tint | 14:1+ |
| Strong accent on ground | 2.0-2.6, so never text, icons that carry meaning or focus rings |
| Strong accent on ink | 6.7-8.4 |

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

- Logo: two people forming an arch, in ink (ground on ink screens), beside the Newsreader wordmark.
- Icons: line only on a 24px grid. No filled icons, no emoji.
- No stock photos. Until real art exists, `Illustration` holds the space at its final
  aspect ratio (4:5, 3:2, 16:9, 21:9), labelled with what the image should show.

## 6. Motion

- Allowed: the hero tagline fading in as two beats; the slow Rooms loop (no pause control,
  by the owner's choice); the header easing between tones; hover colour changes.
- Not allowed: scroll-triggered effects, parallax, bouncing, confetti.
- Reduced motion stops all of it and turns the Rooms loop into a still, scrollable row.

## 7. Voice and copy

- **Tone: punchy, modern and unconventional.** This is the voice for every line on the
  site. Short, confident sentences; turn the expected phrase on its head; people and
  moments first, tools second. The reference line:

  > "No static job boards here. We design roles around the right minds. If you're a
  > storyteller, visionary or builder who belongs in our story, say hello."

- British spelling. Sentence case. No exclamation marks. Never "revolutionise",
  "seamless" or "all-in-one".
- Rooms are described by feeling, never by feature ("Just the two of you").
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
