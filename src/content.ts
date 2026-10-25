/**
 * All copy and data for the site. Unconfirmed values are written in [brackets] and stay
 * visible until the owner confirms them (DESIGN.md section 8).
 */
import type { IconName } from "./components/Icon"

export const site = {
  name: "Honaru",
  slogan: "Made for your people.",
  belief: "Your people aren't a group chat. Stop treating them like one.",
  launch: "Launching first in Singapore.",
  email: "hello@honaru.com",
  social: [
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/honaruapp/" },
    { name: "TikTok", icon: "tiktok", url: "https://www.tiktok.com/@honaruapp" },
    { name: "X", icon: "x", url: "https://www.x.com/honaruapp" },
  ] satisfies { name: string; icon: IconName; url: string }[],
  stores: {
    appStore: null as string | null,
    googlePlay: null as string | null,
  },
}

export const appIsLive = site.stores.appStore !== null || site.stores.googlePlay !== null

/** True for a value that still contains a [placeholder]; such values are never linked. */
export function isPlaceholder(value: string): boolean {
  return /\[[^\]]+\]/.test(value)
}

/** The home page's human moment: two or three short lines, no feature list. */
export const problem = [
  "Her birthday's in two weeks. The perfect gift idea? Buried under 200 messages about dinner.",
  "Thursday's school pickup? Lost somewhere between photos of the dog.",
]

/** A Room's fixed key: it picks the Room's colours (`data-room` in styles.css), so labels can change freely. */
export type RoomId = "couple" | "family-friends" | "travel"

/**
 * The three Rooms. `label` and `feeling` are the home carousel's teaser; the rest is the
 * owner's copy for /rooms.
 */
export const rooms: {
  id: RoomId
  label: string
  feeling: string
  icon: IconName
  audience: string
  title: string
  mood: string
  text: string
}[] = [
  {
    id: "couple",
    label: "Rose Room",
    feeling: "For Couples.",
    icon: "heart",
    audience: "For Couples",
    title: "The Rose Room",
    mood: "Grounded warmth and absolute privacy.",
    text: "Your digital balcony. The world goes quiet out here, and it's just the two of you. Share your location and it isn't surveillance; it's the small, warm relief of knowing they made it home. Count down on a shared calendar to the next time you hold hands. Keep a journal that belongs to no one else.",
  },
  {
    id: "family-friends",
    label: "Lavender Room",
    feeling: "For Family & Lifelong Friends.",
    icon: "group",
    audience: "For Family & Lifelong Friends",
    title: "The Lavender Room",
    mood: "Nostalgia, high-trust and safe.",
    text: "Your digital living room. Drop in with the small stuff: a photo, a hello across time zones, the milestone nobody wants to miss. No pressure to keep up. And year after year, it quietly gathers it all into your Memory Vault, a scrapbook that becomes your circle's heirloom.",
  },
  {
    id: "travel",
    label: "Sage Room",
    feeling: "For Travel & Shared Adventures.",
    icon: "plane",
    audience: "For Travel & Shared Adventures",
    title: "The Sage Room",
    mood: "Alert, clear, and forward-looking.",
    text: "Your basecamp. Open Honaru and the air turns crisp, the greens of an open trail. In an instant, everyone's on the same map. The itinerary stops being a spreadsheet and becomes a living timeline of the next great story you'll tell together.",
  },
]

/** /rooms, reached only from the footer (Resources) and the home carousel's button. */
export const roomsPage = {
  label: "Honaru",
  title: "Every relationship gets a room of its own.",
}

// Real reviews only, quoted with the person's permission. Never write one.
export const reviews = [
  { quote: "[Review from an early tester.]", name: "[Name]", room: "[Room they use]" },
  { quote: "[Review from an early tester.]", name: "[Name]", room: "[Room they use]" },
  { quote: "[Review from an early tester.]", name: "[Name]", room: "[Room they use]" },
]

/**
 * The mission page brief: the mission, why we exist, three promises, how we decide, then
 * the person behind it. Image labels describe the final asset for whoever makes it; the
 * placeholder shows until the file at `src` exists in public/.
 */
export const mission = {
  label: "Our mission",
  title: "We bring the people you love closer.",
  lead: "Less time coordinating. More time together.",
  heroImage: {
    src: "/images/mission-hero.png",
    label: "[Photo, 16:9: a phone face-down on a table between two cups or two sets of hands, no faces]",
  },
  story: {
    lines: [
      "Close your eyes and picture your people. Your partner. Your oldest friend. The family chat that never stops buzzing. Each one feels different, doesn't it?",
    ],
  },
  reason: {
    quote: "So why does every chat with them look exactly the same?",
    lines: [
      "Honaru throws out the one-size-fits-all inbox. Step into a room and it changes with you: its colours, its tools, its whole energy, shaped by the people waiting inside.",
    ],
  },
  why: {
    title: "Why we exist",
    // One flow: how people keep close, why existing apps lose it, why we built Honaru.
    lines: [
      "Everyone loves in their own way. Some call. Some send memes. Some just show up. All of it counts.",
      "But somewhere in the noise, it started slipping. The plan in one thread, the photos in another, her birthday idea drowned under 200 messages and a grocery list. Apps built for everyone end up fitting no one.",
      "So we built Honaru. A room for each of your people, where every way you show up finally has somewhere to land.",
    ],
    image: {
      src: "/images/mission-why.png",
      label: "[Illustration, 3:2: overlapping chat bubbles thinning into one calm line]",
    },
  },
  promises: {
    title: "What we'll always stand for",
    items: [
      {
        title: "Made for your people",
        text: "One room per relationship, built around the people in it. Not a generic chat with extras bolted on.",
        icon: "circles",
      },
      {
        title: "Yours, never ours to sell",
        text: "We never sell your conversations or personal data. Location sharing is opt-in, always. No background tracking.",
        icon: "pin-off",
      },
      {
        title: "Independent by choice",
        text: "No investors. No pressure to grow at your expense. Every call we make is for the people using Honaru.",
        icon: "sapling",
      },
    ] satisfies { title: string; text: string; icon: IconName }[],
  },
  decide: {
    label: "How we decide",
    quote: "If it adds noise to your relationships, it doesn't ship.",
    image: {
      src: "/images/mission-decide.png",
      label: "[Texture, 21:9: paper grain or a handwritten margin]",
    },
  },
  person: {
    title: "Honaru started with a real reason.",
    link: "Read our story",
  },
}

/**
 * The pledge, short and first person: why, and what we do each year. No
 * fixed percentage; each year a few people are chosen. The owner confirms anything marked.
 */
export const pledge = {
  label: "Giving back",
  title: "Some of us are building our lives far from the people we love.",
  lead: "Honaru exists to keep people close. So part of what it earns goes to helping someone get home, or feel a little less far from it.",
  why: {
    title: "Why this matters to us",
    text: "Leaving home isn't hard because of the packing. It's hard the day you realise your ordinary life no longer overlaps with the people you love. Many of us at Honaru know that ache. Counting time zones on a lock screen. Watching the holidays happen without you, thousands of miles away. Choosing between a ticket home and next month's bills.",
  },
  horizon: {
    text: "Honaru was born from that ache, and from one stubborn belief: distance shouldn't mean disconnection, and money should never be what keeps you from the arms of the people you love.",
  },
  promise: {
    title: "What we promise",
    text: "So we pledge a portion of what we earn to closing that gap. Sometimes that's a ticket home. Sometimes it's a seat pulled up at the table, so no one has to face a new city alone.",
  },
  closing: {
    title: "Know someone far from home?",
    lead: "Someone who needs a ticket home. Or maybe it's you, missing yours. Either way, we want to hear from you.",
  },
}

/**
 * Careers, as a story. The people we hope to meet believe in what Honaru is for, give
 * back, and look out for those with less; the copy implies this and never lists it.
 */
export const careers = {
  label: "Careers",
  title: "Build something you'd hand to your own people.",
  lead: "Small. Independent. Zero rush. We're after a few people who want what we want.",
  people: {
    title: "Who we're looking for",
    items: [
      { title: "You've felt the problem", text: "A plan lost in the group chat. A call home you kept putting off. You'd use Honaru with your own people." },
      { title: "You remember who helped you", text: "Someone once made room for you. You've been looking for a way to pass it on ever since." },
      { title: "You notice who's left out", text: "The person alone in a new city. The grandparent who finds apps hard. You think of them first." },
    ],
  },
  work: {
    title: "How we work",
    items: [
      { title: "Independent", text: "No investors to answer to. Every decision answers to the people using Honaru." },
      { title: "Unhurried", text: "One thing done right beats ten things shipped fast." },
      { title: "Part of something bigger", text: "Part of what Honaru earns goes back to people far from home. Your work counts twice." },
    ],
  },
  roles: {
    title: "Open roles",
    text: "No static job boards here. We design roles around the right minds. If you're a storyteller, visionary or builder who belongs in our story, come say hello.",
  },
  closing: {
    title: "Sound like you?",
    lead: "Tell us who you are and what you'd love to build.",
  },
}

/** Who the contact form is for. `value` is what it submits. */
export const audiences = [
  { value: "partner", title: "Partner or brand" },
  { value: "creator", title: "Creator or community" },
  { value: "press", title: "Press and media" },
  { value: "organisation", title: "Organisation, school or NGO" },
  { value: "talent", title: "Looking for a role" },
]
