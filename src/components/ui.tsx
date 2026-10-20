import { useState, type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from 'react'
import { appIsLive, isPlaceholder, site } from '../content'
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
export function Page({ overline, title, lead, children }: { overline: string; title: string; lead?: ReactNode; children: ReactNode }) {
  return (
    <div className="page container">
      <header className="page__header">
        <p className="overline">{overline}</p>
        <h1 className="display">{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </header>
      {children}
    </div>
  )
}

/**
 * One calm, centred, near-full-height screen; Home, Mission and Pledge are built from
 * these. `tone` turns it purple (the header follows); `bleed` spans the viewport width.
 */
export function Screen({ tone, bleed, children }: { tone?: 'purple'; bleed?: ReactNode; children: ReactNode }) {
  return (
    <section className="screen" data-tone={tone}>
      <div className="container screen__inner">{children}</div>
      {bleed}
    </section>
  )
}

/** A titled block inside a page. */
export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="section">
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

const MARK_HEADS = [
  { cx: 16.5, cy: 12, r: 5.5 },
  { cx: 31.5, cy: 12, r: 5.5 },
]
const MARK_BODIES = [
  'M10.5 40.5C10.5 30.5 13.5 24 19 24C21 24 22.6 24.6 24 25.6',
  'M37.5 40.5C37.5 30.5 34.5 24 29 24C27 24 25.4 24.6 24 25.6',
]

/** The Honaru mark: two people forming an arch. `line` draws it as thin line art. */
export function Mark({ size, line = false, className }: { size?: number; line?: boolean; className?: string }) {
  return (
    <svg className={className ?? 'mark'} width={size} height={size} viewBox="4 4 40 40" aria-hidden="true" focusable="false">
      <g
        fill={line ? 'none' : 'currentColor'}
        stroke={line ? 'currentColor' : 'none'}
        strokeWidth={1.5}
        vectorEffect="non-scaling-stroke"
      >
        {MARK_HEADS.map((head) => (
          <circle key={head.cx} {...head} vectorEffect="non-scaling-stroke" />
        ))}
      </g>
      <g fill="none" stroke="currentColor" strokeWidth={line ? 1.5 : 9} strokeLinecap="round">
        {MARK_BODIES.map((d) => (
          <path key={d} d={d} vectorEffect={line ? 'non-scaling-stroke' : undefined} />
        ))}
      </g>
    </svg>
  )
}

/** Mark plus wordmark, linking home. */
export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Honaru home">
      <Mark size={28} />
      <span aria-hidden="true">Honaru</span>
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
      {icon ? <Icon name={icon} /> : <Mark line className="illustration__mark" />}
      {label && <span className="caption placeholder">{label}</span>}
    </div>
  )
}
