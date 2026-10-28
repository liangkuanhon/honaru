# Honaru web

The landing page for Honaru, a messaging app where every relationship gets its own private
Space. *People, not tabs.*

The Spaces live in the mobile app. This site answers one question: why does Honaru exist,
and why trust the person behind it? It collects the waitlist and links to the app stores. Design: [`DESIGN.md`](DESIGN.md).
Contributor and agent rules: [`CLAUDE.md`](CLAUDE.md).

Vite, React and TypeScript, one stylesheet, hosted on Cloudflare Pages. Newsreader (headings)
and DM Sans (body) are self-hosted. No backend, no analytics, no third-party requests.

## Quick start

Requires Node.js 22+ with Corepack (`corepack enable`, so `yarn` is the pinned Yarn 4).

```bash
yarn install
yarn dev        # http://localhost:5173
yarn lint
yarn build      # type-check and build into dist/
```

Optional local settings: `cp .env.example .env` (never commit it).

## Pages

| Route          | Page                                                        |
| -------------- | ----------------------------------------------------------- |
| `/`            | Belief, the problem, the Spaces, reviews, waitlist          |
| `/mission`     | The mission, why we exist, promises, how we decide          |
| `/pledge`      | Founder's story, giving back to people far from home        |
| `/careers`     | Who we hope to meet, how we work, open roles                |
| `/contact`     | Email and contact form                                      |
| `/privacy`     | Privacy note                                                |

## Editing content

All copy and data are in `src/content.ts`: the belief line, Spaces, reviews, mission,
pledge, store links, email and handle. Anything unconfirmed is written in `[brackets]`
and shows on the page until it is replaced.

## Deploy (Cloudflare Pages)

Build command `yarn build`, output `dist`. Build variables: `VITE_SITE_URL` (required) and
optionally `VITE_NEWSLETTER_ENDPOINT` / `VITE_CONTACT_ENDPOINT`. With no `404.html`, Pages
serves `index.html` for every path, and the app's router shows the right page or "not found".
