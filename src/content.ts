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
export type RoomId = "couple" | "family" | "friends" | "travel"

/**
 * The four Rooms. `label` and `feeling` are the home carousel's teaser; the rest is the
 * owner's copy for /rooms (the Friends Room's is still to be written).
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
    id: "family",
    label: "Marigold Room",
    feeling: "For Family.",
    icon: "house",
    audience: "For Family",
    title: "The Marigold Room",
    mood: "Nostalgia, high-trust and safe.",
    text: "Your digital living room. Drop in with the small stuff: a photo, a hello across time zones, the milestone nobody wants to miss. No pressure to keep up. And year after year, it quietly gathers it all into your Memory Vault, a scrapbook that becomes your circle's heirloom.",
  },
  {
    id: "friends",
    label: "Myosotis Room",
    feeling: "For Friends.",
    icon: "people",
    audience: "For Friends",
    title: "The Myosotis Room",
    mood: "[The feeling of the Friends Room, in the owner's words.]",
    text: "[What the Friends Room is: who it is for, the feeling, the place. In the owner's words.]",
  },
  {
    id: "travel",
    label: "Sage Room",
    feeling: "For Travel.",
    icon: "plane",
    audience: "For Travel",
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
  noApp: "No Honaru yet? Get the app, then tap the invite link again. Invites work until Sunday night, Singapore time.",
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
 * Who publishes Honaru. An individual for now; if a company takes over, change it here
 * and every legal page follows. Email only by the owner's choice (2026-11-09): no street
 * address or phone, so App Store Connect uses Apple's Standard EULA, not a custom one.
 */
export const publisher = {
  name: "Kuan Hon Liang",
  location: "Singapore",
  email: "support@honaru.com",
}

const legalStatus = "Last updated 9 November 2026."

/**
 * /privacy: the policy for the app and this website, for the App Store and Google Play,
 * under Singapore's PDPA. Every claim describes what the app in the app repo does today:
 * when its data, permissions or providers change, this changes with it. Names no database
 * country (owner, 2026-11-09). Liability limits live in the terms, not here.
 */
export const privacy: Policy = {
  title: "Privacy Policy",
  lead: "Your people trust you with the small stuff. You're trusting us with it too. Here's exactly what we collect, why and what you can do about it.",
  status: legalStatus,
  sections: [
    {
      id: "who-we-are",
      title: "Who we are",
      blocks: [
        { text: `Honaru is published by ${publisher.name}, an individual based in ${publisher.location} ("we", "us", "our"). We decide how and why your personal data is used, and we're responsible for it under Singapore's Personal Data Protection Act 2012 (the "PDPA").` },
        { text: `Our data protection officer is ${publisher.name}. You can reach them at ${publisher.email} about anything in this policy.` },
      ],
    },
    {
      id: "where-it-applies",
      title: "Where this policy applies",
      blocks: [
        { text: "This policy covers the Honaru mobile app on iOS and Android, this website, and any support we give you. Together we call them \"the service\". By using the service, you agree that we can collect, use and disclose your personal data as this policy describes." },
        { text: "It doesn't cover services run by others, such as your Google or Apple account, the App Store, Google Play, or social networks we link to. They have their own policies." },
        {
          list: [
            { term: "Personal data", text: "Data about an identifiable person, whether true or not, on its own or combined with other data we can get to." },
            { term: "Room", text: "A shared space in Honaru that people join by invitation, and where they share content with each other." },
            { term: "Room content", text: "Anything members add to a Room. It's described in detail in \"Data we collect\"." },
            { term: "Processing", text: "Anything done with data, such as collecting, storing, using, disclosing or deleting it." },
          ],
        },
      ],
    },
    {
      id: "the-short-version",
      title: "The short version",
      blocks: [
        { text: "This summary doesn't replace the detail below." },
        {
          list: [
            { term: "We don't sell your data", text: "Not your conversations, not your personal data, not to anyone." },
            { term: "Ads on the free plan", text: "The free plan may show ads. Honaru Purple has no ads. The app has no analytics tools and no crash-reporting tools." },
            { term: "No AI", text: "We don't send your data to AI services or use it to train AI." },
            { term: "Not end-to-end encrypted", text: "Your data is encrypted on its way to our servers and while stored, but we and our providers hold the keys. Room content is not end-to-end encrypted. See \"Keeping it safe\" for what that means." },
            { term: "Your location is opt-in", text: "Sharing is off until you turn it on in a Room. When it's on, your latest position is stored until you stop sharing everywhere. See \"Location\"." },
          ],
        },
      ],
    },
    {
      id: "where-data-comes-from",
      title: "Where your data comes from",
      blocks: [
        {
          list: [
            { term: "You", text: "What you enter, record, upload or send, in the app or by email." },
            { term: "Your sign-in provider", text: "Google, or Apple where we offer it, confirms who you are and gives us your name and email address." },
            { term: "Other members", text: "People in your Rooms can add content that's about you, such as a photo of you, an expense you share or a Schedule entry." },
            { term: "Your device", text: "With your permission, your location, camera, microphone and chosen photos. Technical details are sent automatically when the app connects." },
            { term: "Stores and RevenueCat", text: "If you subscribe, Apple or Google and RevenueCat tell us about your purchase, its renewal and its end." },
          ],
        },
      ],
    },
    {
      id: "data-we-collect",
      title: "Data we collect",
      blocks: [
        { text: "Here is everything, with why we need it and whether you can choose." },
        { heading: "Account and profile" },
        {
          list: [
            { term: "Name and email address", text: "From your sign-in provider, used to create your account and to reach you. Required. You can change your name; your email address stays as your provider gave it. Your name is visible in your Rooms. Your email address isn't. We never see or store a password." },
            { term: "Date of birth", text: "You enter it when you set up your profile. We use it to check you're old enough to use Honaru. Required. No one else using Honaru can see it." },
            { term: "Profile picture", text: "Optional. The people in your Rooms can see it." },
            { term: "Internal account ID", text: "A random ID we create. It links your data across the service and is shared with RevenueCat if you subscribe." },
            { term: "Plan status", text: "Whether you're on the free plan or Honaru Purple, and when Purple ends. The people in your Rooms can see if you're on Purple." },
          ],
        },
        { heading: "Room content" },
        { text: "Room content is optional, but it's the reason Honaru exists. It's stored so your Room can see it across devices." },
        {
          list: [
            { term: "Room details", text: "The Room's name, type and picture, who's in it, who owns it, when each person joined, and pinned messages." },
            { term: "Messages", text: "Text, photos, videos, voice notes and reactions, plus who sent them and when. It includes messages forwarded within Honaru and trip summary cards." },
            { term: "Vault", text: "Daily photos and notes, with who added them and the date." },
            { term: "Schedule", text: "Entries with a day, times and title." },
            { term: "Couple Room tools", text: "Countdowns, wishes and answers to the question of the day." },
            { term: "Travel Room tools", text: "Itinerary items with a day, time, title and place, and expenses with a title, amount, currency, who paid and who shared the cost." },
          ],
        },
        { heading: "Purchases and support" },
        {
          list: [
            { term: "Purchase data", text: "If you buy Honaru Purple: what you bought, event types such as renewal or expiry, and when they happened. Apple or Google takes your payment. We never see your card or bank details." },
            { term: "Support data", text: "What you tell us when you email us, your email address, and what we do to help. It includes any report you send us about content or another person." },
          ],
        },
        { heading: "From your device, if you choose" },
        {
          list: [
            { term: "Location", text: "Only if you turn on location sharing in a Room. See \"Location\"." },
            { term: "Photos, videos and recordings", text: "Only the ones you pick or capture. We remove location details from photos when the app prepares them. Videos may keep details your camera added." },
          ],
        },
        { heading: "Created as you use the service" },
        {
          list: [
            { term: "Technical data", text: "Our servers record requests and errors, which can include your IP address, your internal account ID, the names of stored files, and timing. We use this to keep the service running and secure." },
            { term: "Widget data (Android)", text: "If you add a Honaru widget: a Firebase Cloud Messaging device token, your device type, and the Room it shows. It's used only to refresh the widget." },
            { term: "Data stored on your device", text: "The app keeps a copy of your Rooms, your profile and your sign-in session on your device so it works quickly and offline. Widgets store thumbnails and Room names on your device too." },
          ],
        },
        { heading: "Data we don't ask for" },
        { text: "Your phone number, your contacts, your passwords, advertising IDs, health data, identity documents or your location in the background. Invite links go out through your device's share sheet, so we never see who you sent one to." },
      ],
    },
    {
      id: "device-permissions",
      title: "Device permissions",
      blocks: [
        { text: "Honaru asks for a permission when you first use the feature that needs it. You can change your mind in your device settings at any time." },
        {
          list: [
            { term: "Camera", text: "To take a photo or record a video for a Room, the Vault or a picture. Without it, you can still pick from your library." },
            { term: "Microphone", text: "To record voice notes and sound for videos. Without it, you can't record them." },
            { term: "Photos", text: "To pick the photos and videos you want to share. Honaru can't post from your library unless you choose to." },
            { term: "Location (while using the app)", text: "To show you to your people on a Room's map if you turn sharing on. Without it, the rest of Honaru works. We never ask for background location." },
            { term: "Internet", text: "To send and sync your Rooms." },
            { term: "Silent widget updates (Android)", text: "Honaru doesn't show push notifications. If you add a widget, a silent message containing only a Room ID tells it to fetch the newest photo from that Room, and it also refreshes about every six hours. It holds no message text, names or images." },
          ],
        },
      ],
    },
    {
      id: "location",
      title: "Location",
      blocks: [
        { text: "Where you are is yours to share, and it's off until you say otherwise." },
        {
          list: [
            { term: "Your choice, per Room", text: "Sharing is off by default. You turn it on separately for each Room, and your device asks for permission first." },
            { term: "Only while the app is open", text: "If you share in at least one Room, the app reads your position while its Home screen is on show, and saves it when you've moved about 200 metres or when the last save is 30 minutes old. Honaru doesn't read your location in the background." },
            { term: "What we store", text: "The latest coordinates your device gives us, which can be precise, and the time. Each new position replaces the last, so we keep no history. There's one saved position for your whole account, not one per Room." },
            { term: "Who can see it", text: "The people in the Rooms where your sharing is on, and only those Rooms. Your pin shows your last saved position, which may be out of date." },
            { term: "Google Maps", text: "The map on Home comes from Google Maps. Your device asks Google for the map area on show, so Google receives your IP address and that area, under Google's own policies." },
            { term: "When it's deleted", text: "When you turn sharing off in your last sharing Room, or when you delete your account. Leaving a Room or uninstalling the app doesn't delete it. To remove it, turn sharing off in every Room first." },
          ],
        },
      ],
    },
    {
      id: "how-we-use-data",
      title: "How we use your data",
      blocks: [
        { text: "We use your data for these purposes and no others, unless we ask you first or the law allows it." },
        {
          list: [
            { term: "To run the service", text: "Sign you in, keep your account, deliver what you share, sync your Rooms across devices, show your people what's been shared, and refresh widgets." },
            { term: "To check age", text: "Use your date of birth to confirm you meet our minimum age." },
            { term: "To process purchases", text: "Confirm your subscription, apply its benefits to your Rooms, and answer questions about it." },
            { term: "To fix what's broken", text: "Read server logs to find errors and keep the service reliable." },
            { term: "To keep everyone safe", text: "Prevent abuse, protect accounts, review reports, enforce our Terms of Use and protect people from harm." },
            { term: "To talk to you", text: "Answer your emails and tell you about significant changes to the service or this policy." },
            { term: "To meet the law", text: "Keep required records, answer lawful requests and establish, exercise or defend legal claims." },
          ],
        },
      ],
    },
    {
      id: "consent-and-legal-grounds",
      title: "Consent and legal grounds",
      blocks: [
        { text: "Under the PDPA, we collect, use and disclose personal data on these grounds:" },
        {
          list: [
            { term: "Your consent", text: "You give it when you sign in, accept the prompts in the app, choose to share location, or send us content or an email." },
            { term: "Deemed consent", text: "Where you volunteer data for a clear purpose, where it's needed for the service you asked for, or where we've told you about a purpose and you haven't objected, as the PDPA allows." },
            { term: "Exceptions in the PDPA", text: "Where the PDPA allows us to act without consent, such as legitimate interests in keeping the service secure and investigating abuse, business improvement, and responding to emergencies that threaten someone's life, health or safety." },
          ],
        },
        { heading: "Withdrawing consent" },
        { text: "You can withdraw consent at any time by turning the feature off, changing your device settings, deleting your account, or emailing us. We'll stop as soon as we reasonably can, and we'll tell you what that means for your use of Honaru. Some of the service can't work without some data. For example, we can't keep an account without an email address. Withdrawing doesn't undo what we've lawfully done already." },
      ],
    },
    {
      id: "who-can-see-it",
      title: "Who can see your data",
      blocks: [
        { text: "Honaru is built for sharing with your people, not with anyone else." },
        {
          list: [
            { term: "The people in your Rooms", text: "Everyone in a Room can see its content, its members, their names and pictures, and whether they're on Honaru Purple. That includes people who join later, who can see what was shared before they arrived. Answers to the question of the day stay private to you until the day's reveal." },
            { term: "Anyone with an invite link", text: "A signed-in person who opens a Room's invite link sees its name, type and number of members, but not who's in it, before choosing to join. If you share a link, the Room's name goes with it." },
            { term: "Not your email or date of birth", text: "No one else using Honaru can see these." },
            { term: "Us", text: "We don't read your Room content as a matter of routine, and nothing scans it automatically. Because it isn't end-to-end encrypted, we can technically access it. We do so only when needed to investigate a report, fix a problem you've raised, or meet a legal duty." },
          ],
        },
        { text: "Other members can copy what you share, for example by forwarding a message, saving a file or taking a screenshot. Only share what you're comfortable with them keeping." },
      ],
    },
    {
      id: "other-peoples-data",
      title: "Other people's data and sensitive details",
      blocks: [
        {
          list: [
            { term: "People in your content", text: "If you share a photo, recording or details about someone else, you're responsible for having their permission or another lawful reason, and for how you treat a child's details." },
            { term: "If someone shared your data", text: "If you don't use Honaru and someone has shared your personal data, email us with enough detail for us to find it. We can't search Rooms for you by name alone, and we may need to ask you for more information." },
            { term: "Sensitive details", text: "We don't ask for health, financial account, identity document or similar sensitive data. But Rooms take free text, photos and recordings, so what people put in them can include these. Please don't share anything you wouldn't want your whole Room to hold." },
          ],
        },
      ],
    },
    {
      id: "automated-decisions",
      title: "Automated decisions and marketing",
      blocks: [
        {
          list: [
            { term: "No profiling", text: "We don't build profiles of you or make automated decisions with legal or similarly significant effects. The only automatic checks are your age at sign-up and the limits tied to your plan or your Room's tier." },
            { term: "No marketing without your say", text: "We send only messages about the service, such as replies and notice of significant changes. If we ever offer news by email, it will be only if you've signed up, and you can unsubscribe at any time." },
          ],
        },
      ],
    },
    {
      id: "service-providers",
      title: "Service providers and other disclosures",
      blocks: [
        { text: "These companies help us run Honaru and receive only what they need to do so. We choose them and require, through their terms, the same or equal protection of your data as this policy describes. They operate internationally and follow their own privacy policies for what they control themselves." },
        {
          list: [
            { term: "Supabase", text: "Database, sign-in and server functions. Holds your account data, Room text and tools, location, plan status and widget tokens." },
            { term: "Cloudflare", text: "Stores your photos, videos, voice notes and pictures (Cloudflare R2), and hosts this website." },
            { term: "Google", text: "Google Sign-In receives your sign-in. Google Maps provides the map on Home. Firebase Cloud Messaging delivers silent widget updates to Android." },
            { term: "Apple", text: "Sign in with Apple, where we offer it, and App Store billing." },
            { term: "Google Play", text: "Billing for Android purchases." },
            { term: "RevenueCat", text: "Keeps track of subscriptions. Receives your internal account ID, your purchases and device details its software collects." },
            { term: "Professional advisers", text: "Lawyers, accountants and similar advisers, where we need their help, under a duty of confidentiality." },
          ],
        },
        { heading: "Others" },
        {
          list: [
            { term: "Authorities", text: "When the law requires it, such as a court order, or when it's needed to protect someone's safety, to report a crime or to establish, exercise or defend legal claims. We share only what's required." },
            { term: "A new owner", text: "If Honaru is merged, sold or restructured, your data may pass to the new owner and this policy keeps applying to it. We'll tell you before that happens." },
          ],
        },
        { text: "Our Instagram, TikTok and X links take you to those services, which follow their own privacy policies." },
      ],
    },
    {
      id: "where-its-stored",
      title: "Where your data is stored",
      blocks: [
        { text: "Your account data and Room text are stored with Supabase. Your photos, videos and voice notes are stored with Cloudflare, in the region Cloudflare chooses." },
        { text: "This means your data may be stored and processed outside Singapore, as may data handed to our other providers. By using the service you consent to this. Whenever your data leaves Singapore, we take steps to make sure it's protected to a standard comparable to the PDPA, through the terms we have with these providers. Email us if you'd like to know more." },
      ],
    },
    {
      id: "how-long-we-keep-data",
      title: "How long we keep data",
      blocks: [
        { text: "We keep your data only as long as we need it for the reasons in this policy, or as long as the law requires. When we no longer need it, we delete it or make it anonymous. We don't close accounts for inactivity, so your data stays until you remove it." },
        {
          list: [
            { term: "Account and profile", text: "Until you delete your account." },
            { term: "Messages, tools and today's Vault", text: "Until you delete them, leave the Room, or delete your account. You can delete your own messages at any time." },
            { term: "Past Vault and Schedule entries", text: "Once a day has passed, you can't delete its Vault photos, Vault notes or Schedule entries one by one. To remove them, leave the Room or delete your account." },
            { term: "Expenses", text: "Kept for the life of the Room so balances stay right, even after you leave or delete your account. They go when the Room's last member leaves." },
            { term: "Location", text: "The latest position only, until you stop sharing in every Room or delete your account." },
            { term: "Files you delete", text: "Queued as you delete them and removed from storage by a job that runs every hour." },
            { term: "Invite links", text: "Each one expires at the end of Sunday, Singapore time. Expired links are removed every week." },
            { term: "Sync and purchase event records", text: "Records used to sync deletions across devices and to process subscription events are removed after 30 days." },
            { term: "Backups", text: "Kept by our providers for up to 30 days, then overwritten. Deleted data can stay in a backup until then." },
            { term: "Server logs", text: "Kept for up to 30 days." },
            { term: "Support emails and reports", text: "As long as we need them to help you, to keep a record of what happened, and to protect people." },
          ],
        },
        { text: "If there's a legal claim or a lawful request to preserve data, we keep what's needed until it's resolved. We may keep anonymised data that can't identify you." },
      ],
    },
    {
      id: "your-rights",
      title: "Your rights",
      blocks: [
        { text: "It's your data. Here's what you can do with it." },
        {
          list: [
            { term: "See it", text: "Ask what personal data we hold about you and how we've used or disclosed it in the past year, and get a copy. Where the PDPA allows, we may charge a reasonable fee for this. We'll tell you the amount first." },
            { term: "Correct it", text: "Change your name and picture in the app, or email us about anything else that's wrong. We don't charge for this." },
            { term: "Withdraw consent", text: "Turn off location sharing in a Room, change permissions in your device settings, remove a widget, or email us." },
            { term: "Delete it", text: "Delete your account in the app under Profile, then Delete account, or follow the steps on Delete your account, which also work without the app. We complete requests by email within 30 days." },
          ],
        },
        { heading: "How to make a request" },
        { text: `Email ${publisher.email} from the address on your account, and tell us what you're asking for. We may ask you to prove it's you, so no one else can get at your data. We reply within 30 days. If we need longer, we'll tell you when to expect an answer.` },
        { text: "We may refuse a request when the law allows it, such as when answering would reveal someone else's personal data, when the request is frivolous or unreasonable, or when the data relates to a legal claim. If you want messages someone else sent, they have to ask for them themselves. We'll tell you if we refuse and why, where we're allowed to." },
        { heading: "Keeping data accurate" },
        { text: "Please keep your details correct. We rely on what you give us." },
        { heading: "Complaints" },
        { text: "If you're unhappy with how we've treated your data, tell us first and we'll try to put it right. You can also complain to Singapore's Personal Data Protection Commission." },
      ],
    },
    {
      id: "outside-singapore",
      title: "If you're outside Singapore",
      blocks: [
        { text: "Honaru launches first in Singapore and this policy is written for the PDPA. If you use Honaru elsewhere and your local law gives you more rights over your personal data, such as access, deletion, objection or a complaint to your own regulator, you keep them. Email us and we'll respond as that law requires." },
      ],
    },
    {
      id: "keeping-it-safe",
      title: "Keeping it safe",
      blocks: [
        { text: "We make reasonable security arrangements to protect your data:" },
        {
          list: [
            { term: "On the way", text: "Everything between the app and our servers is sent over encrypted connections." },
            { term: "In storage", text: "Supabase and Cloudflare encrypt stored data. Database rules limit each Room's content to its members. Files are private, and the app reaches them through links that expire: one hour to view, five minutes to upload. Anyone holding a view link can open it until then." },
            { term: "Access", text: "Only those who need access to run the service can reach personal data." },
            { term: "End-to-end encryption", text: "Honaru doesn't have it. We and our providers hold the keys that can unlock your content." },
            { term: "On your device", text: "Your sign-in session and a copy of your Rooms sit in the app's own storage, without extra encryption from us. Keep your device locked and your sign-in account secure. Tell us at once if you think someone has got in." },
          ],
        },
        { text: "No system is perfectly secure and we can't promise your data will never be accessed without permission. If a breach is likely to cause you significant harm, we'll tell you, and we'll notify the Personal Data Protection Commission where the PDPA requires it." },
      ],
    },
    {
      id: "children",
      title: "Children",
      blocks: [
        { text: "You must be at least 13 to use Honaru. If you're under 18, you need a parent or guardian's consent where your local law requires it. Honaru isn't directed at children under 13, and we don't knowingly collect their data." },
        { text: "If we learn that someone under 13 has an account, we'll delete it and its data. If you think that's happened, or you're a parent or guardian with a request about a child's data, email us. Our Child Safety Standards explain how we protect young people." },
      ],
    },
    {
      id: "this-website",
      title: "This website",
      blocks: [
        { text: "This website sets no cookies, runs no analytics or advertising and loads no third-party scripts or fonts. Cloudflare hosts it and processes your IP address and requests, including the addresses of pages you open such as invite links, to deliver its pages. See our Cookie Policy." },
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      blocks: [
        { text: "This policy will change as Honaru grows. When we make a significant change, we'll tell you in the app or by email before it takes effect, so you have time to read it. The date at the top always shows the current version. If you keep using the service after a change takes effect, the new version applies to you." },
      ],
    },
    {
      id: "contact-us",
      title: "Contact us",
      blocks: [
        { text: `Questions, requests or complaints about your data go to our data protection officer, ${publisher.name}, ${publisher.location}:` },
      ],
    },
  ],
  contactEmail: publisher.email,
}

/**
 * /terms: the terms for the app and this website. Excludes liability and refunds as far as
 * Singapore law permits (owner, 2026-11-09), with the carve-outs that keep them enforceable.
 * Not uploaded as a custom EULA: App Store Connect uses Apple's Standard EULA.
 */
export const terms: Policy = {
  title: "Terms of Use",
  lead: "The rules for using Honaru. They protect you, the people in your Rooms, and us. Please read them, especially the parts on purchases and liability.",
  status: legalStatus,
  sections: [
    {
      id: "agreement",
      title: "The agreement",
      blocks: [
        { text: `These terms are a binding agreement between you and ${publisher.name}, an individual based in ${publisher.location} who publishes Honaru ("we", "us", "our"). They cover the Honaru mobile app, this website and related support ("the service"). You agree to them electronically when you sign in or use the service. If you don't agree, you must not use it.` },
        { text: "These documents form part of the agreement: our Privacy Policy, which explains how we treat your data, and our Child Safety Standards. If they conflict with these terms, these terms apply, except on how we treat personal data, where the Privacy Policy applies." },
        {
          list: [
            { term: "Room", text: "A shared space in Honaru that people join by invitation." },
            { term: "Member", text: "Someone who has joined a Room." },
            { term: "Your content", text: "Anything you add to the service, including messages, photos, videos, voice notes, notes, entries, Room names and pictures, and your profile." },
            { term: "Store", text: "The Apple App Store or Google Play, whichever you got the app from." },
          ],
        },
      ],
    },
    {
      id: "who-can-use-honaru",
      title: "Who can use Honaru",
      blocks: [
        { text: "To use Honaru, you promise that:" },
        {
          list: [
            { term: "You're old enough", text: "You're at least 13. If you're under 13, you can't use Honaru, and we'll delete any account we find." },
            { term: "You have consent if you need it", text: "If you're under 18, or under the age of majority where you live, you have a parent or guardian's consent where your local law requires it. That parent or guardian accepts these terms for you and is responsible for your use of the service, including purchases." },
            { term: "Your details are true", text: "The date of birth and other details you give us are accurate." },
            { term: "You're allowed to", text: "You can form a binding contract, and the law doesn't bar you from using the service. You aren't subject to sanctions that prevent it." },
          ],
        },
      ],
    },
    {
      id: "your-account",
      title: "Your account",
      blocks: [
        { text: "Each account is for one person, and you can't sell, transfer or share it. You sign in with an account from another provider, such as Google, so keep that account and your device secure. You're responsible for everything done through your Honaru account, unless it's caused by our breach of these terms. If you think someone else has got in, email us straight away." },
      ],
    },
    {
      id: "what-honaru-is",
      title: "What Honaru is, and isn't",
      blocks: [
        { text: "Honaru is an early-stage app for sharing with the people close to you. Features will change, and some may be limited, unfinished or removed." },
        { text: "Honaru is not an emergency or safety service, a way to monitor or protect anyone, a payment service or a source of financial, legal, medical or travel advice. It's also not a backup or archive, so keep your own copies of what matters to you. You use the service for personal, non-commercial purposes only." },
      ],
    },
    {
      id: "rooms-and-invites",
      title: "Rooms and invites",
      blocks: [
        { text: "A Room is only as private as the people you let into it. You decide who to invite and what to share. We don't check who joins a Room or supervise what happens in one. Please read this part." },
        {
          list: [
            { term: "Invite links", text: "Any member of a Room can share its invite link. Anyone who signs in with that link can see the Room's name and join, until the link expires at the end of Sunday, Singapore time. Links can't be cancelled before then, so share yours only with people you trust." },
            { term: "What new members see", text: "Someone who joins can see what was shared in the Room before they arrived." },
            { term: "What members can change", text: "Any member can rename the Room, pin messages, change its picture and edit or remove itinerary items." },
            { term: "The owner", text: "A Room's owner can remove members. If the owner leaves, ownership passes to the member who joined earliest." },
            { term: "Leaving or being removed", text: "This deletes what that person posted in the Room for everyone, except expenses and any Room picture they uploaded. It can't be undone. A removed person can return if they have a live invite link." },
            { term: "When a Room ends", text: "When the last member leaves, the Room and everything in it is deleted, including expenses." },
            { term: "Between members", text: "Disagreements between members, including over content, money, relationships or who's in a Room, are between them. We have no duty to step in, but we may act under these terms." },
          ],
        },
      ],
    },
    {
      id: "your-content",
      title: "Your content",
      blocks: [
        {
          list: [
            { term: "It stays yours", text: "You keep whatever rights you have in your content. We don't claim ownership of it, and we don't sell it." },
            { term: "The licence you give us", text: "You give us a worldwide, non-exclusive, royalty-free licence, with the right to use our service providers, to store, copy, reformat, transmit and show your content to the people in your Room, only so far as needed to run, secure and support the service and to meet the law. It ends when your content is deleted, apart from backups, copies other members made, and what the law requires us to keep." },
            { term: "What you promise", text: "You have all the rights and permissions needed to share your content, including from anyone it shows or describes, and from a parent or guardian where a child is involved. It doesn't break the law or anyone's rights, including copyright, privacy and publicity rights." },
            { term: "Your responsibility", text: "You alone are responsible for your content and for what happens because you shared it. We don't endorse or vouch for anything members post." },
            { term: "Copies and loss", text: "Other members can copy what you share. Content can also be lost, and some things can't be recovered once deleted. Keep your own copies." },
          ],
        },
      ],
    },
    {
      id: "community-rules",
      title: "Community rules",
      blocks: [
        { text: "Rooms are private, but these rules still apply in them. There is no tolerance for objectionable content or abusive users. You must not use Honaru to do, or help anyone do, any of the following:" },
        {
          list: [
            { term: "Harm children", text: "Share or seek sexual content involving anyone under 18, groom a child, or otherwise exploit or endanger a child. See our Child Safety Standards. We remove this content, close the accounts involved and report it to the authorities." },
            { term: "Harass or threaten", text: "Bully, threaten, stalk or intimidate anyone, or promote violence, self-harm, terrorism or hatred." },
            { term: "Track people without consent", text: "Pressure anyone into sharing their location, or use someone else's device or account to share it." },
            { term: "Share intimate images without consent", text: "Post or threaten to post sexual or private images of someone who hasn't agreed." },
            { term: "Share objectionable material", text: "Post pornography, graphic violence or other content that's obscene or offensive." },
            { term: "Break the law", text: "Share illegal content, carry out fraud or scams, sell illegal goods, or infringe other people's rights, including copyright and privacy." },
            { term: "Pretend to be someone else", text: "Impersonate a person or organisation, or use a false date of birth." },
            { term: "Attack the service", text: "Spread malware, send spam, scrape data, get around limits or security, gain access to accounts or Rooms you're not entitled to, reverse engineer the app except where the law allows, or overload our systems." },
            { term: "Use it commercially", text: "Sell, rent or resell the service, advertise through it, or use automated tools to access it, without our written permission." },
          ],
        },
      ],
    },
    {
      id: "reporting-and-enforcement",
      title: "Reporting and enforcement",
      blocks: [
        { text: `To report content or a person, email ${publisher.email}. Tell us the Room, who or what it concerns and what happened, with a screenshot if you can. You can also ask a Room's owner to remove someone, or leave the Room yourself.` },
        { text: "We review reports and respond in good time. To investigate, we may view the content reported. We may, but aren't obliged to, remove content, remove someone from a Room, suspend or close accounts, and report to the authorities or cooperate with them. We decide what to do at our discretion, and may act without notice where the law, safety or the service requires it." },
        { text: "We don't monitor Rooms and have no duty to. As far as the law allows, we aren't liable for acting or not acting on any report or content." },
      ],
    },
    {
      id: "copyright-and-ip",
      title: "Copyright and intellectual property",
      blocks: [
        { heading: "Our rights" },
        { text: "We and our licensors own the Honaru app, website, software, design, text and graphics, and the Honaru name and logo. All rights not expressly given to you are reserved. You can't copy, change, distribute or create works based on them, or use our name or logo, without our written permission, except where the law allows it." },
        { text: "We give you a personal, non-exclusive, non-transferable, revocable licence to install and use the app on devices you own or control, for your own non-commercial use, under these terms and the rules of your store. Parts of the app are open-source software under their own licences. Those licences apply to those parts." },
        { text: "If you send us an idea or feedback, you give us a perpetual, worldwide, royalty-free right to use it for any purpose, without owing you anything." },
        { heading: "Reporting copyright infringement" },
        { text: `We respect copyright and expect you to. If you believe something on Honaru infringes your copyright, email ${publisher.email} with the subject "Copyright notice", including:` },
        {
          list: [
            { term: "The owner", text: "Your name and contact details, and the name of the copyright owner if you're acting for them, with your authority to do so." },
            { term: "The work", text: "What the copyright work is." },
            { term: "The material", text: "What you say is infringing, and enough detail for us to find it, such as the Room name, date and who posted it." },
            { term: "Your statements", text: "A statement that you believe in good faith the use isn't authorised by the owner or the law, and that your notice is accurate and that you own the rights or may act for the owner." },
          ],
        },
        { heading: "What happens next" },
        { text: "If a notice is complete, we may remove or disable the material and tell the person who posted it, including who complained. We may share your notice with them." },
        { text: "If your material was removed and you believe that was a mistake or that you have the right to use it, email us with the subject \"Copyright counter-notice\". Include your contact details, what was removed, why you believe it should stay, and a good-faith statement that this is accurate. We may then restore it, unless the complainant tells us they've started legal action, or the law requires otherwise." },
        { text: "A false notice can make you liable for loss it causes. We close the accounts of people who repeatedly infringe where it's appropriate. These steps don't limit any rights or protections we have under Singapore's Copyright Act 2021 or other laws." },
      ],
    },
    {
      id: "shared-tools",
      title: "Location, expenses and other shared tools",
      blocks: [
        {
          list: [
            { term: "Location", text: "A position on the map can be out of date or wrong, and may not appear at all. Don't rely on Honaru for safety, navigation, finding someone or emergencies. If someone's in danger, call your local emergency number." },
            { term: "Expenses", text: "Expenses and balances are records your Room keeps, and may contain mistakes. Honaru doesn't move money, hold funds or give financial or tax advice. Settling up is between you, and we're not a party to it." },
            { term: "Schedules and itineraries", text: "These show what your Room has entered, which members can edit. Check bookings, times and places with the source." },
          ],
        },
      ],
    },
    {
      id: "honaru-purple",
      title: "Honaru Purple",
      blocks: [
        { text: "Honaru has a free plan, limited to 3 Rooms. Honaru Purple is an optional paid subscription. The screen where you subscribe shows the benefits, price and billing period before you pay." },
        {
          list: [
            { term: "Payment and renewal", text: "You pay through your store, using your store account, and your store's terms also apply. Your subscription renews automatically at the end of each period, at the price shown, until you cancel." },
            { term: "Cancelling", text: "Cancel in your store's subscription settings at least 24 hours before renewal to avoid the next charge. You keep Purple until the period you've paid for ends. We can't cancel it for you." },
            { term: "Deleting doesn't cancel", text: "Deleting your account or the app doesn't stop a subscription. Cancel it in your store settings first." },
            { term: "How Rooms benefit", text: "Each member on Purple lifts a Room's tier, and everyone in the Room gets what that tier unlocks. If members leave or their plans end, the Room's tier can drop. We can't guarantee any Room stays at a tier." },
            { term: "When Purple ends", text: "You go back to the free limit. If you're in more than 3 Rooms, your oldest 3 stay as they are and the rest become read-only until you upgrade or leave some. Nothing is deleted because of this." },
            { term: "Changes", text: "We may change what Purple includes and its price. We'll give you the notice your store requires before a price changes, and you can cancel before it applies." },
            { term: "Taxes and store fees", text: "Prices may include or exclude taxes depending on where you live, as your store shows. Any charges from your bank or mobile provider are yours." },
          ],
        },
      ],
    },
    {
      id: "no-refunds",
      title: "All purchases are final and non-refundable",
      blocks: [
        { text: "Please read this before you buy. Except as stated in this section, every purchase is final. We don't give refunds, credits, exchanges or part-payments, in whole or in part, for any reason, including:" },
        {
          list: [
            { term: "Your choices", text: "Cancelling part-way through a period, not using Purple or a Room, changing your mind, forgetting to cancel before renewal, leaving a Room, or deleting your account." },
            { term: "Enforcement", text: "Suspension or closure of your account, or removal from a Room, because of a breach of these terms." },
            { term: "Changes", text: "A Room's tier changing, other members leaving, or features or prices changing." },
            { term: "Interruptions or ending", text: "Service interruptions, or our changing or ending the service, as far as the law allows." },
          ],
        },
        { text: "Your store takes your payment. Apple and Google decide refund requests under their own rules, and we can't review, grant, or reverse those decisions. If a store gives you a refund, your Purple benefits may end." },
        { text: "Nothing in this section removes any right you have under consumer protection laws that can't be excluded by contract, including, where they apply, Singapore's Consumer Protection (Fair Trading) Act 2003." },
      ],
    },
    {
      id: "third-party-services",
      title: "Other companies' services",
      blocks: [
        { text: "The service depends on services we don't control, including Google, Apple, Supabase, Cloudflare and RevenueCat, as well as your device, mobile network and internet connection. You must follow any third-party terms that apply to you. We aren't responsible for those services, their availability or anything they do, and you use them at your own risk. If you leave Honaru through a link, the other site's terms apply." },
      ],
    },
    {
      id: "changes-to-the-service",
      title: "Changing or ending the service",
      blocks: [
        { text: "We may change, add, limit, pause or remove any part of the service, or end it completely, at any time and for any reason, without liability as far as the law allows. If we plan to close Honaru, we'll try to give you reasonable notice so you can save what matters to you, but we can't promise to." },
      ],
    },
    {
      id: "ending-this-agreement",
      title: "Ending this agreement",
      blocks: [
        { text: "You can stop at any time by deleting your account. We may suspend, limit or close your account, or remove your content, with or without notice, if we reasonably believe you've broken these terms, if the law requires it, or to protect the service or any person. Where it's safe and lawful, we'll tell you why and you can write to us about it." },
        { text: "When this agreement ends, your right to use the service stops. Any section that by its nature should continue will continue, including those on purchases, disclaimers, liability, indemnity and disputes." },
      ],
    },
    {
      id: "disclaimers",
      title: "Disclaimers",
      blocks: [
        { text: "This section and the next limit what you can claim from us. They apply as far as the law allows, and don't take away rights that the law says can't be excluded." },
        { text: "The service is provided \"as is\" and \"as available\", at your own risk. We exclude all warranties, conditions and promises, whether express, implied or set by statute, including those of satisfactory quality, fitness for a particular purpose, accuracy, reliability, title and non-infringement." },
        { text: "We don't promise the service will always be available, uninterrupted, timely, secure or free of errors or harmful components, that defects will be fixed, that content will be kept or never lost, or that location, expense, schedule or other information will be accurate." },
      ],
    },
    {
      id: "liability",
      title: "Limit of our liability",
      blocks: [
        { heading: "What we don't limit" },
        { text: "Nothing in these terms excludes or limits liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for anything else that can't lawfully be excluded or limited, including under Singapore's Unfair Contract Terms Act 1977 and any mandatory consumer law that applies to you." },
        { heading: "What we aren't liable for" },
        { text: "Otherwise, to the fullest extent the law allows, we and our service providers aren't liable, whether in contract, tort (including negligence), breach of statutory duty or otherwise, for:" },
        {
          list: [
            { term: "Indirect loss", text: "Any indirect, special, incidental, consequential or punitive loss." },
            { term: "Lost value", text: "Loss of profit, revenue, savings, business, goodwill, opportunity or reputation." },
            { term: "Lost content", text: "Loss, corruption or disclosure of data or content, including memories, messages and photos." },
            { term: "Other people", text: "What other members or third parties do or share, including harassment, disputes, and what happens through invite links or between people in a relationship, family, friendship or trip." },
            { term: "Reliance on information", text: "Relying on location, expenses, balances, schedules, itineraries or anything else in the service, including missed travel, unpaid debts, or being unable to find or reach someone." },
            { term: "Security incidents", text: "Unauthorised access to your account, device or data that's outside our reasonable control." },
            { term: "Interruptions", text: "Service interruptions, delays, changes or closure, and failures of third-party services, devices or networks." },
          ],
        },
        { heading: "Our maximum liability" },
        { text: "To the fullest extent the law allows, our total liability for all claims relating to the service or these terms, added together, is limited to the greater of the amount you paid for the service in the 12 months before the claim arose, and S$100." },
        { text: "You agree these limits are reasonable, and that the free plan and our prices reflect them. We couldn't offer the service without them." },
      ],
    },
    {
      id: "indemnity",
      title: "Your responsibility to us",
      blocks: [
        { text: "As far as the law allows, you agree to indemnify us against claims, losses, liabilities, costs and reasonable legal fees that arise from your content, your breach of these terms or the law, your infringement of someone else's rights, or your misuse of the service, unless they were caused by our own breach. If you're a minor, this applies to the parent or guardian who accepted these terms for you, where the law allows. We'll tell you about such a claim where we can. This doesn't apply where a consumer law prevents it." },
      ],
    },
    {
      id: "events-beyond-our-control",
      title: "Events beyond our control",
      blocks: [
        { text: "We aren't liable for any failure or delay caused by something beyond our reasonable control, including failures of providers, networks or power, cyber attacks, natural events, epidemics, war, government action, or changes in the law or store rules." },
      ],
    },
    {
      id: "disputes",
      title: "Disputes and governing law",
      blocks: [
        {
          list: [
            { term: "Talk to us first", text: `Before starting a legal claim, email ${publisher.email} with the details. We'll both try in good faith to resolve it within 30 days. Either of us can still ask a court for urgent relief.` },
            { term: "Governing law", text: "These terms and any dispute about them or the service, including non-contractual disputes, are governed by the laws of Singapore, without regard to conflict-of-law rules." },
            { term: "Courts", text: "The courts of Singapore have exclusive jurisdiction, including the Small Claims Tribunals where a claim qualifies." },
            { term: "Individual claims only", text: "As far as the law allows, you can bring claims only on your own behalf, and not as a claimant or member in a class or representative action." },
            { term: "Time limit", text: "As far as the law allows, you must start any claim within one year of the date it arose, or it's barred." },
            { term: "If you live elsewhere", text: "You keep any mandatory consumer protection and any right to bring a claim in your own country that your local law gives you and that can't be excluded." },
          ],
        },
      ],
    },
    {
      id: "apple-app-store",
      title: "If you got Honaru from the App Store",
      blocks: [
        { text: "These extra terms apply to the iOS app. Your licence to use the iOS app is governed by Apple's Licensed Application End User License Agreement. These terms govern your use of the service." },
        {
          list: [
            { term: "Acknowledgement", text: "These terms are between you and us, not Apple. We, not Apple, are solely responsible for the app and its content. If these terms conflict with the Apple Media Services Terms and Conditions, those take priority where they set a rule for App Store apps." },
            { term: "Scope of licence", text: "Your licence is non-transferable and lets you use the app on Apple-branded products you own or control, as the Usage Rules in the Apple Media Services Terms and Conditions allow. Other accounts linked to you through Family Sharing or volume purchasing may use it as those rules permit." },
            { term: "Maintenance and support", text: "We alone are responsible for maintenance and support of the app, as these terms set out or as the law requires. Apple has no obligation whatsoever to furnish any maintenance and support services for the app." },
            { term: "Warranty", text: "We alone are responsible for any product warranties, whether express or implied by law, to the extent not effectively disclaimed. If the app fails to conform to an applicable warranty, you may notify Apple, and Apple will refund the purchase price, if any, for the app. To the maximum extent the law permits, Apple has no other warranty obligation for the app. Any other claims, losses, liabilities, damages, costs or expenses from a failure to conform to a warranty are our responsibility, subject to these terms." },
            { term: "Product claims", text: "We, not Apple, are responsible for addressing any claims by you or a third party relating to the app or your use of it, including product liability claims, claims that the app fails to meet a legal or regulatory requirement, and claims under consumer protection, privacy or similar laws. These terms don't limit our liability to you beyond what the law allows." },
            { term: "Intellectual property", text: "If a third party claims that the app or your use of it infringes their intellectual property rights, we, not Apple, are solely responsible for investigating, defending, settling and discharging that claim." },
            { term: "Legal compliance", text: "You represent and warrant that you are not in a country subject to a U.S. Government embargo or designated by the U.S. Government as a \"terrorist supporting\" country, and that you are not on any U.S. Government list of prohibited or restricted parties." },
            { term: "Developer's contact", text: `Questions, complaints or claims about the app go to ${publisher.name}, ${publisher.location}, by email at ${publisher.email}.` },
            { term: "Third-party terms", text: "You must comply with any third-party agreement that applies when you use the app, such as your mobile data plan." },
            { term: "Third-party beneficiary", text: "Apple and Apple's subsidiaries are third-party beneficiaries of these terms. Once you accept them, Apple has the right, and is deemed to have accepted the right, to enforce them against you as a third-party beneficiary." },
          ],
        },
      ],
    },
    {
      id: "google-play",
      title: "If you got Honaru from Google Play",
      blocks: [
        { text: "These terms are between you and us, not Google. Your download and purchases are also covered by the Google Play Terms of Service. Google has no responsibility for the app or its support." },
      ],
    },
    {
      id: "general",
      title: "General",
      blocks: [
        {
          list: [
            { term: "Entire agreement", text: "These terms and the documents they name are the whole agreement between us about the service, and replace anything earlier. Neither of us relies on anything not set out in them, except in the case of fraud." },
            { term: "If part can't be enforced", text: "If a court finds part of these terms can't be enforced, that part is changed only as much as needed to make it enforceable, or removed, and the rest still applies." },
            { term: "No waiver", text: "If we don't enforce something straight away, we can still do so later." },
            { term: "Transfers", text: "You can't transfer these terms without our written consent. We may transfer them, including to a company formed to run Honaru or a new owner." },
            { term: "Others' rights", text: "Except for Apple as set out above, no one else has any right to enforce these terms under the Contracts (Rights of Third Parties) Act 2001." },
            { term: "Our relationship", text: "These terms don't create a partnership, agency, employment or fiduciary relationship." },
            { term: "Notices", text: "We can send you notices in the app or to your account's email address. Send notices to us by email. They count as received when sent, unless we learn they weren't delivered." },
            { term: "Language", text: "These terms are written in English. If we translate them, the English version applies." },
          ],
        },
      ],
    },
    {
      id: "changes-to-these-terms",
      title: "Changes to these terms",
      blocks: [
        { text: "We may update these terms. When we make a significant change, we'll tell you in the app or by email before it takes effect. If you keep using Honaru after that, the new terms apply. If you don't agree, you must stop using it and delete your account. Changes don't apply to claims that arose before them." },
      ],
    },
    {
      id: "contact-us",
      title: "Contact us",
      blocks: [
        { text: `${publisher.name}, ${publisher.location}. Questions, complaints and legal notices all go to:` },
      ],
    },
  ],
  contactEmail: publisher.email,
}

/**
 * /delete-account: the public web link Google Play requires. It must work without the app
 * and say what stays. Keep it in step with delete_my_account in the app repo.
 */
export const deleteAccount: Policy = {
  title: "Delete your account",
  lead: "How to delete your Honaru account and data, with or without the app. It's permanent, so here's exactly what happens.",
  status: legalStatus,
  sections: [
    {
      id: "before-you-start",
      title: "Before you start",
      blocks: [
        {
          list: [
            { term: "Cancel Honaru Purple first", text: "Deleting your account doesn't stop a subscription. Cancel it in your subscription settings: on iPhone, Settings, your name, then Subscriptions; on Android, Google Play, your profile picture, then Payments and subscriptions." },
            { term: "Save what you want to keep", text: "There's no grace period and we can't restore your account or anything deleted with it." },
          ],
        },
      ],
    },
    {
      id: "in-the-app",
      title: "In the app",
      blocks: [
        { text: "Open Honaru, go to Profile, tap Delete account and confirm. It takes effect straight away." },
      ],
    },
    {
      id: "without-the-app",
      title: "Without the app",
      blocks: [
        { text: `No need to reinstall. Email ${publisher.email} with the subject "Delete my Honaru account", from the email address on your account. If you can't, tell us and we'll find another way to confirm it's you. We'll complete your request within 30 days and let you know when it's done.` },
      ],
    },
    {
      id: "what-we-delete",
      title: "What we delete",
      blocks: [
        { text: "You leave every Room, and we delete:" },
        {
          list: [
            { term: "Your account", text: "Your name, email address, date of birth, profile picture and plan status." },
            { term: "What you posted", text: "Your messages, reactions, photos, videos, voice notes, Vault photos and notes, Schedule entries, and what you added to other tools, for everyone in each Room. Files leave storage through a job that runs every hour." },
            { term: "Your location and widgets", text: "Your saved position and any widget device tokens." },
            { term: "Rooms you're the last member of", text: "The Room and everything in it. In other Rooms you own, ownership passes to the member who joined earliest." },
            { term: "This device", text: "Deleting in the app also clears the copy of your data on the device you're using." },
          ],
        },
      ],
    },
    {
      id: "what-stays",
      title: "What stays, and for how long",
      blocks: [
        {
          list: [
            { term: "Expenses", text: "Expenses you added or shared stay, with their title and amount, so your Room's balances don't change. They stay until that Room's last member leaves. You appear as a former member." },
            { term: "A Room picture you uploaded", text: "It stays as the Room's picture until someone changes it or the Room ends, with no link to you." },
            { term: "Trip summary cards", text: "A card another member posted may keep your internal account ID, which doesn't show your name, for as long as that message exists." },
            { term: "Copies other people made", text: "A message someone forwarded becomes theirs. Screenshots and saved files are out of our reach. Other people's devices clear deleted content when they next sync." },
            { term: "Short-lived records", text: "Sync records and subscription event records, which can contain your internal ID, are removed after 30 days. Backups are overwritten within 30 days and server logs are removed within 30 days." },
            { term: "Subscription and store records", text: "RevenueCat, Apple and Google keep purchase records under their own policies. Email us and we'll ask RevenueCat to delete yours. Your Google or Apple account itself isn't affected." },
            { term: "What the law requires", text: "Anything we must keep for a legal claim or a lawful request, until it's resolved." },
          ],
        },
        { text: "To remove your data from just one Room, leave that Room instead. Read more in our Privacy Policy." },
      ],
    },
    {
      id: "contact-us",
      title: "Contact us",
      blocks: [
        { text: "Need help deleting your account?" },
      ],
    },
  ],
  contactEmail: publisher.email,
}

/**
 * /child-safety: the published standards Google Play's Child Safety Standards policy
 * requires. Describes email reporting only until the app has in-app reporting.
 */
export const childSafety: Policy = {
  title: "Child Safety Standards",
  lead: "Honaru is for keeping close to your people. Anyone who uses it to harm a child isn't welcome, and we'll act.",
  status: legalStatus,
  sections: [
    {
      id: "our-standard",
      title: "Our standard",
      blocks: [
        { text: "Honaru prohibits child sexual abuse and exploitation (CSAE) and child sexual abuse material (CSAM), everywhere in the service, including private Rooms. This is published by the Honaru app's publisher and applies to everyone who uses it." },
      ],
    },
    {
      id: "what-we-prohibit",
      title: "What we prohibit",
      blocks: [
        {
          list: [
            { term: "Sexual content involving children", text: "Creating, sharing, requesting or storing sexual images, videos, audio or text involving anyone under 18, real or generated." },
            { term: "Grooming", text: "Building a relationship with a child in order to sexually abuse or exploit them, online or offline." },
            { term: "Sextortion", text: "Threatening or pressuring a child over intimate images, or to obtain them." },
            { term: "Trafficking and endangerment", text: "Using Honaru to arrange, promote or hide the abuse, trafficking or physical endangerment of a child, including using location sharing to find or follow them." },
          ],
        },
      ],
    },
    {
      id: "age",
      title: "Age limit",
      blocks: [
        { text: "You must be at least 13 to use Honaru. Under-18s need a parent or guardian's consent where local law requires it. We delete the accounts of people we learn are under 13." },
      ],
    },
    {
      id: "how-to-report",
      title: "How to report",
      blocks: [
        { text: `If a child is in immediate danger, call your local emergency number first. To report a concern about Honaru, email ${publisher.email} with the subject "Child safety". Tell us the Room name, the people involved and what you saw. Please don't send or forward the images themselves. Leave them where they are and tell us where to find them.` },
      ],
    },
    {
      id: "what-we-do",
      title: "What we do",
      blocks: [
        { text: "We treat these reports first. When we find or are told about this kind of content or behaviour, we:" },
        {
          list: [
            { term: "Review", text: "Look at what was reported, as far as we need to confirm it." },
            { term: "Remove", text: "Take the content down and close the accounts involved." },
            { term: "Preserve", text: "Keep what the law requires us to keep for investigators, and nothing more." },
            { term: "Report", text: "Report to the police and other relevant authorities as the law requires, and cooperate with lawful requests." },
          ],
        },
      ],
    },
    {
      id: "the-law",
      title: "The law",
      blocks: [
        { text: "We comply with the child safety laws that apply to us, including in Singapore, where Honaru is published." },
      ],
    },
    {
      id: "contact-us",
      title: "Contact us",
      blocks: [
        { text: `Our child safety contact is ${publisher.name}.` },
      ],
    },
  ],
  contactEmail: publisher.email,
}

/** /cookies: the hero only. This site sets no cookies; keep the lead true. */
export const cookies = {
  title: "Cookie Policy",
  lead: "This website sets no cookies.",
}
