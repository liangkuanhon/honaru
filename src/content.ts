/**
 * All copy and data for the site. Unconfirmed values are written in [brackets] and stay
 * visible until the owner confirms them (DESIGN.md section 8).
 */
import type { IconName } from "./components/Icon"

export const site = {
  name: "Honaru",
  slogan: "People, not tabs.",
  belief: "Six apps for one relationship is five too many.",
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
  "One app to message. One for photos. One for the calendar. One for the bill. One for where they are. One for the little things you want them to see.",
  "Somewhere in the switching, the people you love turn into tabs.",
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
    text: "Your digital balcony. The world goes quiet out here and it's just the two of you. Share your location and it isn't surveillance; it's the small, warm relief of knowing they made it home. Count down on a shared calendar to the next time you hold hands. Keep a journal that belongs to no one else.",
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
    mood: "Alert, clear and forward-looking.",
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
  lead: "Open less and love more.",
  heroImage: {
    src: "/images/mission-hero.png",
    label: "[Photo, 16:9: a phone face-down on a table between two cups or two sets of hands, no faces]",
  },
  story: {
    lines: [
      "Picture your people. Your partner. The family who raised you. The friends who'd show up. The ones you'd get lost with on a trip. Each of them is close in a different way.",
    ],
  },
  reason: {
    quote: "So why are they spread across six apps?",
    lines: [
      "Messages here, photos there, the calendar, the bill, where everyone is. Honaru brings it home to one place, with a room for each of your people, shaped by the people inside it.",
    ],
  },
  why: {
    title: "Why we exist",
    // One flow: how people keep close, why existing apps lose it, why we built Honaru.
    lines: [
      "Everyone loves in their own way. Some call. Some send photos. Some just show up. All of it counts.",
      "But closeness rarely ends all at once. It slips through the gaps between apps: the plan in one, the photos in another, the birthday idea buried under a week of messages. Somewhere in the switching, your people turn into tabs.",
      "So we built Honaru. One home for everything you share, so you open fewer apps and spend the time on the people instead.",
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
        title: "People, not tabs",
        text: "One room per relationship, built around the people in it. Not a generic chat with extras bolted on.",
        icon: "circles",
      },
      {
        title: "Yours, never ours to sell",
        text: "We never sell your conversations or personal data. Location sharing is opt-in, always. No background tracking.",
        icon: "pin-off",
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
 * The pledge, short and first person: why and what we do each year. No
 * fixed percentage; each year a few people are chosen. The owner confirms anything marked.
 */
export const pledge = {
  label: "Giving back",
  title: "Some of us are building our lives far from the people we love.",
  lead: "Honaru exists so the people you love feel close. So part of what it earns goes to helping someone get home, or feel a little less far from it.",
  why: {
    title: "Why this matters to us",
    text: "Leaving home isn't hard because of the packing. It's hard the day you realise your ordinary life no longer overlaps with the people you love. Many of us at Honaru know that ache. Counting time zones on a lock screen. Watching the holidays happen without you, thousands of miles away. Choosing between a ticket home and next month's bills.",
  },
  horizon: {
    text: "Honaru was born from that ache and from one stubborn belief: distance shouldn't mean disconnection and money should never be what keeps you from the arms of the people you love.",
  },
  promise: {
    title: "What we promise",
    text: "Each year, part of what Honaru earns goes to a few people far from home. Sometimes that's a ticket back. Sometimes it's a seat pulled up at the table, so no one has to face a new city alone. [Draft: how we give back is still being confirmed.]",
  },
  closing: {
    title: "Know someone far from home?",
    lead: "Someone who'd give a lot for a ticket home. Or maybe it's you, missing yours. Either way, we'd love to hear from you.",
  },
}

/**
 * Careers, as a story. The people we hope to meet believe in what Honaru is for, give
 * back and look out for those with less; the copy implies this and never lists it.
 */
export const careers = {
  label: "Careers",
  title: "Build something you will love.",
  email: "careers@honaru.com",
  lead: "Small. Zero rush. We're after a few people who want what we want.",
  people: {
    title: "Who we're looking for",
    items: [
      { title: "Empathetic", text: "The person alone in a new city. The grandparent who finds apps hard. You think of them first." },
      { title: "High agency", text: "You don't wait to be asked. You see what's missing and go and make it." },
      { title: "Strong ownership", text: "What you ship is yours, start to finish. When something breaks, you're the first to say so and the one who fixes it." },
    ],
  },
  work: {
    title: "How we work",
    items: [
      { title: "People first", text: "Every decision answers to the people using Honaru." },
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

/** /join/<token>: where an invite link lands when the app doesn't open it. */
export const join = {
  title: "You're invited.",
  lead: "Someone saved you a place in their Room. Open the invite in Honaru to join.",
  open: "Open in Honaru",
  noApp: "No Honaru yet? Get the app, then tap the invite link again. Invites last 24 hours.",
}

/** /contact: no form, one inbox per kind of message. */
export const contact = {
  lead: "Write to the inbox that fits. We read every message.",
  inboxes: [
    { title: "Support", text: "Help with the app, your account, or something that isn't working.", email: "support@honaru.com" },
    { title: "Everything else", text: "Collaborations, partnerships, press, creators and the curious.", email: site.email },
    { title: "Careers", text: "Tell us who you are and what you'd love to build.", email: careers.email },
  ],
}

/** One part of a legal page's section: a paragraph, a subheading, or a list of terms and what they mean. */
export type PolicyBlock =
  | { text: string }
  | { heading: string }
  | { list: { term: string; text: string; notes?: string[] }[] }

/** A legal page (privacy, terms, cookies): numbered sections, the last one "Contact us". */
export type Policy = {
  title: string
  lead: string
  status?: string
  sections: { id: string; title: string; blocks: PolicyBlock[] }[]
  contactEmail: string
}

/**
 * /privacy: the full policy for the app and this website, in the usual order of a
 * privacy policy, under Singapore's PDPA only. Facts come from what Honaru says it is
 * (mission, Rooms) and what this site does; everything unconfirmed is a [placeholder].
 * A lawyer reviews it before launch.
 */
export const privacy: Policy = {
  title: "Privacy Policy",
  lead: "Your people trust you with the small stuff. You're trusting us with it too. Here's exactly what we collect, why and what you can do about it.",
  sections: [
    {
      id: "who-we-are",
      title: "Who we are",
      blocks: [
        { text: "Honaru is run by Honaru, Singapore. We're responsible for your personal data under Singapore's Personal Data Protection Act 2012 (PDPA)." },
      ],
    },
    {
      id: "where-it-applies",
      title: "Where this policy applies",
      blocks: [
        { text: "This policy covers the Honaru app, this website and any other service we run under the Honaru name. We call them all \"the service\"." },
        { text: "If one part of the service ever needs its own privacy policy, we'll show it to you there and that policy applies instead of this one." },
      ],
    },
    {
      id: "data-we-collect",
      title: "Data we collect",
      blocks: [
        { text: "Honaru only works if you bring your people into it, so some of what you share is personal by nature. Using the service also creates some data on its own. Here's all of it." },
        { heading: "Data you give us" },
        {
          list: [
            { term: "Account data", text: "What you give us to set up an account such as your phone number, email address, name and date of birth." },
            { term: "Profile data", text: "What you choose to add to your profile, like a photo." },
            { term: "Room content", text: "What you share inside a Room: messages, photos, journal entries, calendar dates and countdowns, itineraries and the memories gathered into your Memory Vault. Only the people in that Room can see it." },
            { term: "Contacts you invite", text: "When you invite someone to a Room, the contact information you send the invitation to. We use it only to deliver your invitation." },
            { term: "Purchase data", text: "When you make a purchase or request a refund, we keep the details of the transaction (e.g. what you purchased, the date of the transaction, and the price). The exact data depends on the payment method you choose." },
            { term: "Support data", text: "What you tell us when you email support@honaru.com or report a problem and what we do to help." },
          ],
        },
        { heading: "Data created as you use the service" },
        {
          list: [
            { term: "Usage data", text: "Using the service generates data about your activity (e.g. how you use the app: when you open it, which features you use and errors you run into. We also receive data related to interactions you had with our ads on third party websites or apps, if applicable." },
            { term: "Technical data", text: "Details about your device and connection: IP address, device model, operating system, app version, language and identifiers associated with cookies or other technologies that can uniquely identify a device or browser. For more information about cookies, see our Cookie Policy." },
          ],
        },
        { heading: "Data you can choose to share" },
        {
          list: [
            { term: "Location", text: "Our app prioritises your privacy by strictly limiting how location data is handled. By default, all location sharing features are deactivated. Location tracking is only enabled if you explicitly opt-in within a specific Room. This data is only gathered while you are actively engaging with the application. We explicitly do not track your location in the background and we do not retain or store a historical log of your location data."},
            { term: "Photos and camera", text: "Only the photos you pick and the camera only when you open it to take one." },
            { term: "Notifications", text: "Your device's push notification token, if you allow notifications." },
          ],
        },
        { text: "This website sets no analytics, advertising or tracking cookies and loads no third-party scripts or fonts." },
      ],
    },
    {
      id: "how-we-use-data",
      title: "How we use your data",
      blocks: [
        { text: "Mostly, to run Honaru: to keep your Rooms working, private and safe. We also use it to fix what's broken and make the app better. We never share your conversations or personal data." },
        {
          list: [
            {
              term: "To run the service",
              text: "Create and keep your account, deliver your messages and invitations, sync your Rooms across devices, show the people in a Room what's been shared there and answer your questions.",
            },
            {
              term: "To process purchases",
              text: "To enable your purchases on our service, process refunds and respond to your questions about them.",
            },
            {
              term: "To improve Honaru",
              text: "Understand which features help and which get in the way, find and fix bugs and design new features.",
            },
            {
              term: "To keep everyone safe",
              text: "Prevent spam, fraud and abuse, protect accounts and act on reports, such as removing someone who breaks our Terms of Use.",
            },
            {
              term: "To talk to you",
              text: "Tell you about changes to the service or this policy and, if you've asked, about launches and news. You can unsubscribe from news at any time.",
            },
            {
              term: "To meet the law",
              text: "Keep records the law requires, respond to lawful requests from authorities and establish or defend legal claims.",
            },
          ],
        },
      ],
    },
    {
      id: "how-we-share-data",
      title: "How we share data",
      blocks: [
        { text: "Honaru is built for sharing with your people, not with anyone else. Here's everyone who can see your data and why." },
        {
          list: [
            { term: "The people in your Rooms", text: "Everything you share in a Room is visible to the people in it and to no one else using Honaru. Leaving a Room will remove what you shared there." },
            { term: "Service providers", text: "We share data with vendors and partners who help us operate, promote and improve our service. They provide us services such as data hosting and maintenance, analytics, customer care, marketing, advertising, payment processing, legal support, and security operations." },
            { term: "Authorities", text: "When the law requires it, such as a court order, or when it's needed to protect someone's safety or to establish or defend legal claims. We share only what the request requires." },
            { term: "A new owner", text: "If Honaru is ever merged, sold or restructured, your data may pass to the new owner and this policy will keep applying to it. We'll tell you before that happens." },
          ],
        },
        { text: "Our Instagram, TikTok and X links take you to those platforms, which follow their own privacy policies." },
      ],
    },
    {
      id: "where-its-stored",
      title: "Where your data is stored",
      blocks: [
        { text: "Your data is stored in Singapore. Some of our providers may handle it in other countries. When your data leaves Singapore, we make sure it's protected to a standard comparable to the PDPA. Email us for details." },
      ],
    },
    {
      id: "your-rights",
      title: "Your rights",
      blocks: [
        { text: "It's your data. Here's what you can do with it." },
        {
          list: [
            { term: "See it", text: "Ask what personal data we hold about you and how we've used it in the past year and get a copy." },
            { term: "Correct it", text: "Update your account and profile in the app at any time. For anything else, email us." },
            { term: "Delete it", text: "Delete what you've shared, or close your account in Settings and we delete your data. Accounts will also be closed after 1 year of inactivity." },
            { term: "Withdraw consent", text: "Turn off location sharing, notifications or photo access in the app or your device settings, or unsubscribe from news. Some features stop working without them; we'll tell you which." },
          ],
        },
        { text: "We may ask you to prove it's you before acting on a request, so no one else can get at your data. We reply within 30 days. We may refuse a request when the law allows it, such as when answering would reveal someone else's personal data. If you want messages someone else sent, they have to ask for them themselves." },
        { text: "If you're unhappy with how we've handled your data, tell us first and we'll try to put it right." },
      ],
    },
    {
      id: "how-long-we-keep-data",
      title: "How long we keep data",
      blocks: [
        { text: "We keep your data only as long as we need it for the reasons in this policy, or as long as the law requires." },
        { text: "If there's a legal claim or a lawful request to preserve data, we keep what's needed until it's resolved. We may keep anonymised data that can't identify you, for example to count how many people use a feature." },
      ],
    },
    {
      id: "keeping-it-safe",
      title: "Keeping it safe",
      blocks: [
        { text: "Everything is encrypted between your device and our servers. Only the people who need it to run Honaru can access personal data." },
        { text: "No system is perfectly secure. If a breach could harm you, we'll tell you." },
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      blocks: [
        { text: "This policy will change as Honaru grows. When we make a significant change, we'll tell you in the app or by email before it takes effect, so you have time to read it. The date at the top always shows the current version." },
      ],
    },
  ],
  contactEmail: "[privacy email]",
}

/** /terms: the hero only, until the terms are written. */
export const terms = {
  title: "Terms of Use",
  lead: "The rules for using Honaru, in plain words. They protect you, the people in your Rooms, and us.",
}

/** /cookies: the hero only. This site sets no cookies; keep the lead true. */
export const cookies = {
  title: "Cookie Policy",
  lead: "This website sets no cookies.",
}
