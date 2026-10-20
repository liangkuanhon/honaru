import { useEffect, useRef, useState, type ReactNode, type RefObject } from 'react'
import { site } from '../content'
import { usePathname, type Path } from '../router'
import { Icon } from './Icon'
import { Brand, Link } from './ui'

/** A link to a route, or a trigger that only reveals its `popup` (no page behind it). */
type NavItem = { label: string } & ({ to: Path; popup?: never } | { to?: never; popup: ReactNode })

const startNav: NavItem[] = [
  { label: 'Mission', to: '/mission' },
  { label: 'Pledge', to: '/pledge' },
]

const endNav: NavItem[] = [
  { label: 'Download', popup: <DownloadQr /> },
  { label: 'Careers', to: '/careers' },
]

const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: 'Index',
    items: [
      { label: 'Home', to: '/' },
      { label: 'Mission', to: '/mission' },
      { label: 'Pledge', to: '/pledge' },
      { label: 'Careers', to: '/careers' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Resources',
    items: [
      { label: 'Home', to: '/' },
      { label: 'Mission', to: '/mission' },
      { label: 'Pledge', to: '/pledge' },
      { label: 'Careers', to: '/careers' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  { heading: 'Legal', items: [{ label: 'Privacy', to: '/privacy' }] },
]

/** Links; a `popup` item is a button that shows its panel on hover or focus (pointer devices only). */
function NavList({ items, className, labelledBy }: { items: NavItem[]; className: string; labelledBy?: string }) {
  return (
    <ul className={className} aria-labelledby={labelledBy}>
      {items.map((item) => (
        <li key={item.label} className={item.popup ? 'nav-popup' : undefined}>
          {item.to ? (
            <Link to={item.to}>{item.label}</Link>
          ) : (
            <>
              <button type="button" aria-describedby={`popup-${item.label.toLowerCase()}`}>
                {item.label}
              </button>
              <div className="nav-popup__panel" id={`popup-${item.label.toLowerCase()}`}>
                {item.popup}
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

/** QR code to the App Store, for desktop visitors. A placeholder until the listing exists. */
function DownloadQr() {
  return (
    <>
      <div className="qr">
        <span className="caption placeholder">[App Store QR code]</span>
      </div>
      <p className="caption">{site.stores.appStore ? 'Scan to get Honaru' : 'Coming soon to the App Store'}</p>
    </>
  )
}

/** Icon links to the social profiles. */
function SocialLinks() {
  return (
    <ul className="social-links">
      {site.social.map((profile) => (
        <li key={profile.name}>
          <a href={profile.url} target="_blank" rel="noopener noreferrer" aria-label={`${profile.name} (opens in a new tab)`}>
            <Icon name={profile.icon} />
          </a>
        </li>
      ))}
    </ul>
  )
}

/**
 * The `data-tone` of the section under the header's bottom edge (undefined over plain
 * white), and whether a full-bleed image covers the whole header. Rechecked once per frame
 * while scrolling or resizing, and on every route change.
 */
function useWhatIsUnder(header: RefObject<HTMLElement | null>) {
  const pathname = usePathname()
  const [under, setUnder] = useState<{ tone?: string; image: boolean }>({ image: false })

  useEffect(() => {
    let frame = 0
    function update() {
      frame = 0
      const { top: headerTop = 0, bottom: line = 0 } = header.current?.getBoundingClientRect() ?? {}
      const section = Array.from(document.querySelectorAll<HTMLElement>('main [data-tone], footer[data-tone]')).find((element) => {
        const { top, bottom } = element.getBoundingClientRect()
        return top < line && bottom > line
      })
      const image = Array.from(document.querySelectorAll('main .illustration--image.illustration--bleed')).some((element) => {
        const { top, bottom } = element.getBoundingClientRect()
        return top <= headerTop + 1 && bottom >= line
      })
      setUnder((previous) =>
        previous.tone === section?.dataset.tone && previous.image === image ? previous : { tone: section?.dataset.tone, image },
      )
    }
    function schedule() {
      frame ||= requestAnimationFrame(update)
    }
    schedule()
    // Images load after the route renders, so check again once each one arrives.
    document.addEventListener('load', schedule, true)
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('load', schedule, true)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [header, pathname])

  return under
}

/** Header (links either side of a centred brand), the page in `<main>`, and a purple footer. */
export function Layout({ children }: { children: ReactNode }) {
  const header = useRef<HTMLElement>(null)
  const { tone, image } = useWhatIsUnder(header)
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header" ref={header} data-tone={tone} data-over-image={image || undefined}>
        <nav className="container site-header__bar" aria-label="Main">
          <NavList items={startNav} className="nav-links nav-links--start" />
          <Brand />
          <NavList items={endNav} className="nav-links nav-links--end" />
        </nav>
      </header>
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <footer className="site-footer" data-tone="purple">
        <div className="container site-footer__inner">
          <div className="site-footer__about">
            <Brand />
            <SocialLinks />
            <p className="caption">
              © {new Date().getFullYear()} {site.name}
            </p>
          </div>
          <nav className="site-footer__nav" aria-label="Footer">
            {footerNav.map((group) => (
              <div key={group.heading}>
                <p className="overline" id={`footer-${group.heading.toLowerCase()}`}>
                  {group.heading}
                </p>
                <NavList
                  items={group.items}
                  className="footer-links"
                  labelledBy={`footer-${group.heading.toLowerCase()}`}
                />
              </div>
            ))}
          </nav>
        </div>
      </footer>
    </>
  )
}
