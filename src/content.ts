/**
 * All copy and data for the site. Unconfirmed values are written in [brackets] and stay
 * visible until the owner confirms them (DESIGN.md section 8).
 */
import type { IconName } from "./components/Icon"

export const site = {
  name: "Honaru",
  slogan: "Made for your people.",
  belief: "Your closest relationships deserve more than a group chat built for work.",
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
  "Her birthday is in two weeks. The gift idea you saved is somewhere under 200 messages about dinner.",
  "In the family chat, Thursday's school pickup got lost between photos of the dog.",
]

/** The four Spaces as a teaser: a name and a feeling, never a feature list. */
export const spaces: { label: string; feeling: string; icon: IconName }[] = [
  { label: "Couple", feeling: "Just the two of you.", icon: "heart" },
  { label: "Family", feeling: "Everyone in the loop, grandparents too.", icon: "house" },
  { label: "Friends", feeling: "Plans that actually happen.", icon: "group" },
  { label: "Travel", feeling: "The whole trip in one place.", icon: "plane" },
]

// Real reviews only, quoted with the person's permission. Never write one.
export const reviews = [
  { quote: "[Review from an early tester.]", name: "[Name]", space: "[Space they use]" },
  { quote: "[Review from an early tester.]", name: "[Name]", space: "[Space they use]" },
  { quote: "[Review from an early tester.]", name: "[Name]", space: "[Space they use]" },
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
  why: {
    title: "Why we exist",
    // One flow: how people keep close, why existing apps lose it, why we built Honaru.
    lines: [
      "Everyone loves in their own way. Some call. Some send memes. Some just show up. All of it counts.",
      "But it was getting lost. The plan in one chat, the photos in another, a birthday idea buried somewhere between 200 messages and a grocery list. Messaging apps are built for everyone, so they fit no relationship in particular.",
      "So we built Honaru: a quiet Space for each of your people, where every way you show up for each other has somewhere to land.",
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
        text: "One Space for each kind of relationship, shaped around the people in it, not a generic chat with extras bolted on.",
        icon: "circles",
      },
      {
        title: "Yours, never ours to sell",
        text: "We never sell your conversations or personal data. Location sharing is always opt-in, with no background tracking.",
        icon: "pin-off",
      },
      {
        title: "Independent by choice",
        text: "No investors and no pressure to grow at your expense. Every decision is made for the people using Honaru.",
        icon: "sapling",
      },
    ] satisfies { title: string; text: string; icon: IconName }[],
  },
  decide: {
    label: "How we decide",
    quote: "We say no to anything that adds noise to your relationships.",
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
  lead: "Honaru is for staying close. So part of what it earns goes to helping others make it home or feel less far from it.",
  why: {
    title: "Why this matters to us",
    text: "The hardest part of leaving home isn't the packing. It’s the quiet realization that your daily life will no longer share the same space with the people you love. Many of us at Honaru know that exact ache, counting down time zones on a phone screen, watching holidays pass from thousands of miles away and knowing the heavy choice between a ticket home and next month's bills.",
  },
  horizon: {
    text: "Honaru was born from that quiet ache. It was built on a simple belief. Distance shouldn’t mean disconnect and financial hardship shouldn't keep you from the arms of the people you love.",
  },
  promise: {
    title: "What we promise",
    text: "That is why we pledge a portion of our earnings to help others bridge that gap, whether that means funding a ticket back or pulling up a seat at the table so no one feels alone in a new city.",
  },
  closing: {
    title: "Know someone far from home??",
    lead: "Whether you know someone who needs a ticket or miss your family, we’d love to hear from you.",
  },
}

/**
 * Careers, as a story. The people we hope to meet believe in what Honaru is for, give
 * back, and look out for those with less; the copy implies this and never lists it.
 */
export const careers = {
  label: "Careers",
  title: "Build something you would give to your own people.",
  lead: "Honaru is small, independent and in no rush. We are looking for a few people who want the same things we do.",
  people: {
    title: "Who we hope to meet",
    items: [
      { title: "You have felt the problem", text: "A plan lost in a group chat, a call home you kept meaning to make. You would use Honaru with your own people." },
      { title: "You remember who helped you", text: "Someone once made room for you, and you have been looking for ways to pass it on." },
      { title: "You notice who is left out", text: "The person on their own in a new city. The grandparent who finds apps hard. You think of them first." },
    ],
  },
  work: {
    title: "How we work",
    items: [
      { title: "Independent", text: "No investors to answer to, so every decision is made for the people using Honaru." },
      { title: "Unhurried", text: "We would rather get one thing right than ship ten things fast." },
      { title: "Part of something bigger", text: "Part of what Honaru earns goes back to people far from home. The work counts twice." },
    ],
  },
  roles: {
    title: "Open roles",
    text: "We don't keep a list of open roles. We shape roles around the right people. If you're a designer, engineer or translator who feels at home in what we're building, say hello.",
  },
  closing: {
    title: "Sound like you?",
    lead: "Write to us with a little about yourself and what you would like to work on.",
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
