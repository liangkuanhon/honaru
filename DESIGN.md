# DESIGN.md - Honaru landing page

Brand, audience and copy rules for the Honaru website. `CLAUDE.md` covers code structure
and workflow; where the two overlap they agree. Updated 2026-10-18 to match the owner's
direction of 2026-10-17; colours and logo from Brand Kit v6 (2026-11-07).

---

## 1. What Honaru is

- **Mission:** "We bring the people you love closer."
- **Why:** "Some call. Some send memes. Some just show up. All of it counts." Everyone keeps
  close in their own way, but messaging apps are built for everyone, so they fit no
  relationship in particular and the small things get lost.
- **Product:** a messaging app where each close relationship gets its own private Room:
  Couple, Family, Friends and Travel.
- **Slogan:** "People, not tabs."
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
- **Their people:** parents and grandparents brought in through the Family Room, so
  anything they might see stays plain and easy.
- **Visitors who are not users:** partners, press, creators, organisations and people who
  want to work here. They reach us through `/contact` and `/careers`.

The site's job is to answer one question for all of them: why does Honaru exist, and why
trust the person behind it?

## 3. Scope

This site is not the product. The Rooms live only in the mobile app.

- **Do:** the belief, one human moment, the four Rooms as a feeling, reviews, the
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
| `/` | Hero (the belief) · the problem as one human moment · the four Rooms on a slow loop |
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

From Brand Kit v6 (2026-11-07; the kit, its logo files and `src/theme/tokens.ts` live in the
app repo): ground and ink, Honaru Purple as the one brand accent, and one colour family per
Room. The palette is defined once, in `:root` in `src/styles.css`; nothing else holds a hex
value except `public/favicon.svg` (the kit's mark file as is) and `theme-color` in
`index.html`, which can't read CSS.

**Core**

| Token | Hex | Use |
| --- | --- | --- |
| `--ground` | `#FAF8F5` | Background; text on ink |
| `--ink` | `#17151C` | Text and headlines; the alternate screens |
| `--purple` | `#4A3A8C` | Honaru Purple: buttons, links, focus, the hero's accent words; the logo's left arch, and its overlap on ink |
| `--purple-light` | `#A794E8` | Purple on ink (Purple itself is 2.0:1 there); the logo's right arch on ink |
| `--purple-glow` | `#C3B5F1` | The logo's right arch on ground; text selection on ground; never text |
| `--purple-night` | `#2F2560` | Night: the logo's overlap on ground, and nothing else |

Primary buttons are Purple with ground text on ground screens, and Purple Light with ink
text on ink screens. Use Purple sparingly, for what people should notice, and never to
mean "premium".

**Room colours**

| Room (`RoomId`) | Family | `--room-accent` | `--room-tint` | `--room-accent-text` |
| --- | --- | --- | --- | --- |
| Couple (`couple`) | Rose | `#F0A7B8` | `#FAE3E7` | `#633D46` |
| Family (`family`) | Marigold | `#E6BA65` | `#F5E8D0` | `#5C4414` |
| Friends (`friends`) | Myosotis | `#9DBEE0` | `#E0EBF6` | `#33475E` |
| Travel (`travel`) | Sage | `#A4CC9C` | `#E2EEDF` | `#3A4E35` |

- Raw tokens are `--rose`, `--rose-tint`, `--rose-text` (and `marigold-`, `myosotis-`,
  `sage-`). Components read only the semantic ones: `--bg`, `--fg`, `--accent`,
  `--on-accent`, `--selection`, `--line`, `--mark-left`, `--mark-right`, `--mark-overlap`
  and the three `--room-*`.
- An element with `data-room={room.id}` sets the three `--room-*` tokens, and everything
  inside takes that Room's mood: the tint as a wash, the accent as a frame, the accent text
  for marks and words. Outside any Room they default to Rose, only as a default: the logo
  never takes a Room colour.
- Accents are fills and frames only. Tints are Room washes (and selection inside a Room), never
  general panels. One Room's colours at a time.
- `--line` (ink or ground at 12%) is for dividers only; field edges stay full strength.
- No other greys, no status colours, shadows, blur or dark theme. The kit allows one
  gradient (Purple to Purple Light); the site doesn't use it.
- The sticky header takes the tone of the screen under it.

**Contrast** (checked 2026-11-06)

| Pair | Ratio |
| --- | --- |
| Ink / ground | 17:1 |
| Purple on ground | 8.7:1 |
| Purple Light on ink | 6.9:1 |
| Purple on ink | 2.0, so never there |
| Night on ground | 12.7:1 (the logo's overlap; never interface) |
| Purple Glow on ground | 1.8, so a fill only; ink on it 9.7:1 |
| Accent text on its tint | Rose 7.5, Marigold 7.6, Myosotis 7.9, Sage 7.6 |
| Accent text on ground | 8.5-9.0 |
| Ink on a tint | 14.8:1+ |
| Room accent on ground | 1.7-1.8, so never text, icons that carry meaning or focus rings |
| Room accent on ink | 9.4-10.1 |

  Errors are shown without colour: a 2px outline on the field and the message in text.

### Type

- **Newsreader** (weight 500, optical sizing) for h1-h3, as the kit has it for titles and the
  wordmark.
- **DM Sans** (300-600) for everything else; 600 where something should read as bold. The
  kit allows nothing above SemiBold.
- Both self-hosted with `font-display: block` and no system-font fallback, so every device
  shows the same faces.
- Hero taglines are large but not shouting: roughly 36px on phones to 60px on wide screens.

### Shape and space

- Radius 12px on cards, fields and frames; fully round for buttons and pills. 1px borders. Separate things with space, not boxes.
- Content about 1120px wide, text columns about 640px. Gutters 16px, 24px from 768px.
- Touch targets at least 44px.

### Logo, icons, imagery

- Logo (Brand Kit v6): two arches, Purple on the left and Purple Glow on the right, with
  Night where they overlap; on ink, Ground and Purple Light with a Purple overlap. There is
  one logo: Room colours never go in it, and the `/rooms` screens keep the ground set.
  In one colour (`Mark mono`, the placeholder art) the overlap becomes a thin gap so both
  arches still read. Never stretch, tilt, recolour or swap the arches, and keep clear
  space the height of the wordmark's "o" on every side. The mark is at least 24px tall.
- Wordmark: lowercase "honaru" in Newsreader Medium, outlined in the kit's logo file and
  drawn by `Logo` from that path. Never retype it.
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
