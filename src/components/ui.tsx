import { useState, type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from 'react'
import { appIsLive, cookies, isPlaceholder, site, terms, type Policy, type PolicyBlock, type RoomId } from '../content'
import { navigate, usePathname, type Path } from '../router'
import { NewsletterForm } from './forms'
import { Icon, type IconName } from './Icon'

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { to: Path }

/** In-app link: a real `<a href>` that switches route without a reload. */
export function Link({ to, onClick, ...props }: LinkProps) {
  const current = usePathname() === to

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event)
    // Leave new tabs and modified clicks to the browser.
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return
    }
    event.preventDefault()
    navigate(to)
  }

  return <a href={to} aria-current={current ? 'page' : undefined} onClick={handleClick} {...props} />
}

/** A route link styled as a button. */
export function ButtonLink({ to, variant = 'primary', children }: { to: Path; variant?: 'primary' | 'secondary'; children: ReactNode }) {
  return (
    <Link to={to} className={`button button--${variant}`}>
      {children}
    </Link>
  )
}

/** A mailto link, or marked plain text while the address is a placeholder. */
export function EmailLink({ email = site.email }: { email?: string }) {
  return isPlaceholder(email) ? <span className="placeholder">{email}</span> : <a href={`mailto:${email}`}>{email}</a>
}

/** The opening block of an inner page: overline, one `h1`, optional lead, then content. */
export function Page({ overline, title, lead, children }: { overline: string; title: string; lead?: ReactNode; children?: ReactNode }) {
  return (
    <div className="page container">
      <header className="page__header">
        <p className="overline">{overline}</p>
        <h1 className="hero__tagline">{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </header>
      {children}
    </div>
  )
}

/**
 * One calm, near-full-height screen; Home, Mission and Pledge are built from
 * these. `tone` turns it ink, `room` washes it in that Room's tint (the header follows
 * either); `bleed` spans the viewport width.
 */
export function Screen({ tone, room, bleed, children }: { tone?: 'ink'; room?: RoomId; bleed?: ReactNode; children: ReactNode }) {
  return (
    <section className="screen" data-tone={room ? 'room' : tone} data-room={room}>
      <div className="container screen__inner">{children}</div>
      {bleed}
    </section>
  )
}

/** A titled block inside a page; `id` lets a contents list link to it. */
export function Section({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section className="section" id={id}>
      <h2 className="title">{title}</h2>
      {children}
    </section>
  )
}

/** Bordered card with a heading and short text. */
export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="card">
      <h3 className="headline">{title}</h3>
      <p>{children}</p>
    </article>
  )
}

/** A grid of title-and-text cards from data. */
export function Cards({ items, row }: { items: { title: string; text: string }[]; row?: boolean }) {
  return (
    <CardGrid row={row}>
      {items.map((item) => (
        <Card key={item.title} title={item.title}>
          {item.text}
        </Card>
      ))}
    </CardGrid>
  )
}

/** Responsive grid of cards; `row` puts three side by side from tablet width up. */
export function CardGrid({ row = false, children }: { row?: boolean; children: ReactNode }) {
  return <div className={row ? 'card-grid card-grid--row' : 'card-grid'}>{children}</div>
}

// The Honaru mark (Brand Kit v5): two arches, and the Room's accent where they overlap.
// Coordinates from the kit's logo file; the overlap is the lens where the arches meet.
const ARCH_LEFT = 'M272.03 849.96V409.05a178.74 178.74 0 0 1 357.48 0v440.91Z'
const ARCH_RIGHT = 'M450.79 849.96V504.38a178.74 178.74 0 0 1 357.48 0v345.58Z'
const ARCH_OVERLAP = 'M450.79 849.96V504.38A178.74 178.74 0 0 1 609.45 326.77 178.74 178.74 0 0 1 629.51 409.05v440.91Z'

/**
 * The arch mark. Colours come from the tone and Room it sits in (`--mark-left`,
 * `--mark-right`, `--room-accent`); `mono` draws it in the text colour only.
 */
export function Mark({ mono = false, className }: { mono?: boolean; className?: string }) {
  const classes = ['mark', mono && 'mark--mono', className].filter(Boolean).join(' ')
  return (
    <svg className={classes} viewBox="272 230 537 620" aria-hidden="true" focusable="false">
      <path className="mark__left" d={ARCH_LEFT} />
      <path className="mark__right" d={ARCH_RIGHT} />
      <path className="mark__overlap" d={ARCH_OVERLAP} />
    </svg>
  )
}

/** Mark plus wordmark, linking home. The wordmark is typeset until the outlined logo file exists. */
export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Honaru home">
      <Mark />
      <span aria-hidden="true">honaru</span>
    </Link>
  )
}

// Own-style badges, not the official artwork: swap those in, per each store's guidelines,
// once the listings exist.
const storeBadges = [
  { name: 'App Store', prefix: 'Download on the', href: site.stores.appStore },
  { name: 'Google Play', prefix: 'Get it on', href: site.stores.googlePlay },
]

/** App Store and Google Play badges; a store without a listing says "Coming soon". */
export function StoreBadges() {
  return (
    <div className="store-badges">
      {storeBadges.map((store) => {
        const body = (
          <>
            <Icon name="phone" />
            <span>
              <small>{store.href ? store.prefix : 'Coming soon to'}</small>
              <strong>{store.name}</strong>
            </span>
          </>
        )
        return store.href ? (
          <a key={store.name} className="store-badge" href={store.href}>
            {body}
          </a>
        ) : (
          <span key={store.name} className="store-badge store-badge--soon">
            {body}
          </span>
        )
      })}
    </div>
  )
}

/** Store badges once the app is listed; until then the waitlist form and the launch line. */
export function GetApp() {
  if (appIsLive) return <StoreBadges />
  return (
    <div className="get-app">
      <NewsletterForm />
      <p className="caption">{site.launch}</p>
    </div>
  )
}

type Ratio = '4:5' | '3:2' | '16:9' | '21:9'

/**
 * An image at its final aspect ratio. Until the file at `src` exists (or with no `src`), an
 * outlined box labelled with what the asset should show stands in, so the real one swaps
 * in without moving the layout; with only an `icon`, the box is the final art. `bleed`
 * drops the frame for edge-to-edge use. Images are decorative (the copy beside them
 * carries the meaning), so `alt` is empty.
 */
export function Illustration({ label, src, icon, ratio = '4:5', bleed = false }: { label?: string; src?: string; icon?: IconName; ratio?: Ratio; bleed?: boolean }) {
  const [missing, setMissing] = useState(false)
  const classes = ['illustration', `illustration--${ratio.replace(':', 'x')}`, bleed && 'illustration--bleed']
  if (src && !missing) {
    return <img className={[...classes, 'illustration--image'].filter(Boolean).join(' ')} src={src} alt="" onError={() => setMissing(true)} />
  }
  return (
    <div className={classes.filter(Boolean).join(' ')}>
      {icon ? <Icon name={icon} /> : <Mark mono className="illustration__mark" />}
      {label && <span className="caption placeholder">{label}</span>}
    </div>
  )
}

/** One paragraph, subheading or term list of a policy. */
// Each legal page's name, wherever a policy mentions it, links to that page.
const policyLinks: Record<string, Path> = { [terms.title]: '/terms', [cookies.title]: '/cookies' }
const policyLinkPattern = new RegExp(`(${Object.keys(policyLinks).join('|')})`)

/** Policy text with the other legal pages' names as links. */
function PolicyText({ text }: { text: string }) {
  return text
    .split(policyLinkPattern)
    .map((part, i) => (policyLinks[part] ? <Link key={i} to={policyLinks[part]}>{part}</Link> : part))
}

function Block({ block }: { block: PolicyBlock }) {
  if ('heading' in block) return <h3 className="headline">{block.heading}</h3>
  if ('text' in block)
    return (
      <p>
        <PolicyText text={block.text} />
      </p>
    )
  return (
    <dl className="terms">
      {block.list.map((item) => (
        <div key={item.term}>
          <dt>{item.term}</dt>
          <dd>
            <p>
              <PolicyText text={item.text} />
            </p>
            {item.notes?.map((note) => (
              <p key={note} className="caption">
                <PolicyText text={note} />
              </p>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  )
}

/** A legal page: contents, then one numbered section per topic, ending with the contact email. */
export function PolicyPage({ policy }: { policy: Policy }) {
  return (
    <Page overline="Legal" title={policy.title} lead={policy.lead}>
      <div className="prose">
        {policy.status && <p className="caption">{policy.status}</p>}
        <nav aria-label="Contents">
          <ol className="contents">
            {policy.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
      {policy.sections.map((section, index) => (
        <Section key={section.id} id={section.id} title={`${index + 1}. ${section.title}`}>
          <div className="prose">
            {section.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
            {section.id === 'contact-us' && (
              <p>
                <EmailLink email={policy.contactEmail} />
              </p>
            )}
          </div>
        </Section>
      ))}
    </Page>
  )
}
