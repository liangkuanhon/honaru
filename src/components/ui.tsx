import { useId, useState, type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from 'react'
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

// The Honaru mark (Brand Kit v6, `honaru-mark.svg`): two arches, and the lens where they
// overlap (the right arch clipped to the left). The overlap is Night on ground and Purple on
// ink, never a Room colour: there is one logo.
const ARCH_LEFT = 'M271.875 850 V408.75 A178.75 178.75 0 0 1 629.375 408.75 V850 Z'
const ARCH_RIGHT = 'M450.625 850 V498.125 A178.75 178.75 0 0 1 808.125 498.125 V850 Z'
// The wordmark, outlined from the kit's logo file (`honaru-logo.svg`). Never retype it.
const WORDMARK = 'M1189.375 832.24 1241.175 815.22V637.62Q1241.175 618.01 1233.5900000000001 604.505Q1226.005 591.0 1210.2800000000002 583.97Q1194.555 576.94 1171.2450000000001 576.94Q1144.605 576.94 1121.295 585.635Q1097.9850000000001 594.33 1085.775 606.91L1072.455 592.85Q1096.135 569.1700000000001 1114.8200000000002 554.0Q1133.505 538.8299999999999 1149.97 530.135Q1166.435 521.44 1183.085 517.9250000000001Q1199.7350000000001 514.4100000000001 1218.2350000000001 514.4100000000001Q1267.4450000000002 514.4100000000001 1290.94 543.825Q1314.435 573.24 1314.435 634.66V814.48L1368.825 832.24V850.0H1189.375ZM1144.605 850.0H964.4150000000001V832.24L1018.4350000000001 814.48V403.78000000000003Q1013.255 397.86 1004.745 391.94Q996.235 386.02 984.395 379.73Q972.5550000000001 373.44 958.125 367.52V353.46L1085.775 320.15999999999997H1096.505L1091.325 388.61V814.48L1144.605 832.24ZM1567.515 821.51Q1594.525 821.51 1614.875 808.56Q1635.2250000000001 795.61 1646.6950000000002 768.23Q1658.165 740.85 1658.165 697.19Q1658.165 649.09 1647.065 616.7149999999999Q1635.9650000000001 584.3399999999999 1615.6150000000002 567.875Q1595.265 551.4100000000001 1566.035 551.4100000000001Q1539.395 551.4100000000001 1519.045 564.1750000000001Q1498.6950000000002 576.94 1487.2250000000001 604.505Q1475.755 632.0699999999999 1475.755 675.73Q1475.755 723.09 1486.67 755.6500000000001Q1497.585 788.21 1518.305 804.86Q1539.025 821.51 1567.515 821.51ZM1564.925 858.14Q1514.2350000000001 858.14 1476.31 836.865Q1438.385 815.59 1417.665 777.665Q1396.9450000000002 739.74 1396.9450000000002 689.79Q1396.9450000000002 638.36 1418.96 598.77Q1440.9750000000001 559.1800000000001 1479.64 536.7950000000001Q1518.305 514.4100000000001 1568.9950000000001 514.4100000000001Q1620.055 514.4100000000001 1657.6100000000001 535.6850000000001Q1695.165 556.96 1716.07 594.7Q1736.975 632.44 1736.975 682.76Q1736.975 734.19 1714.96 773.78Q1692.9450000000002 813.37 1654.2800000000002 835.755Q1615.615 858.14 1564.925 858.14ZM1904.585 586.56V815.22L1956.3850000000002 832.24V850.0H1777.6750000000002V832.24L1831.6950000000002 814.48V598.03Q1825.035 590.63 1812.4550000000002 583.415Q1799.8750000000002 576.2 1776.9350000000002 566.95V554.74L1878.6850000000002 514.4100000000001H1889.045ZM2002.6350000000002 832.24 2054.4350000000004 815.22V637.62Q2054.4350000000004 618.01 2046.8500000000004 604.505Q2039.265 591.0 2023.54 583.97Q2007.815 576.94 1984.505 576.94Q1957.8650000000002 576.94 1934.5550000000003 585.635Q1911.2450000000001 594.33 1899.035 606.91L1885.7150000000001 592.85Q1909.3950000000002 569.1700000000001 1928.0800000000002 554.0Q1946.765 538.8299999999999 1963.23 530.135Q1979.6950000000002 521.44 1996.3450000000003 517.9250000000001Q2012.9950000000001 514.4100000000001 2031.4950000000001 514.4100000000001Q2080.705 514.4100000000001 2104.2 543.825Q2127.695 573.24 2127.695 634.66V814.48L2182.085 832.24V850.0H2002.6350000000002ZM2420.3650000000002 642.06 2421.8450000000003 673.88Q2379.6650000000004 682.39 2353.0250000000005 691.64Q2326.385 700.89 2311.7700000000004 710.88Q2297.155 720.87 2291.79 732.155Q2286.425 743.44 2286.425 757.5Q2286.425 782.29 2300.1150000000002 794.87Q2313.8050000000003 807.45 2335.635 807.45Q2352.655 807.45 2366.53 799.31Q2380.405 791.17 2388.545 778.035Q2396.6850000000004 764.9 2396.6850000000004 748.99V613.5699999999999Q2396.6850000000004 585.8199999999999 2382.9950000000003 570.28Q2369.3050000000003 554.74 2336.7450000000003 554.74Q2323.795 554.74 2309.735 557.7Q2295.675 560.6600000000001 2282.7250000000004 566.21L2301.2250000000004 545.12Q2299.3750000000005 559.1800000000001 2296.9700000000003 570.6500000000001Q2294.565 582.12 2291.6050000000005 590.4449999999999Q2288.6450000000004 598.77 2284.5750000000003 604.3199999999999Q2278.655 612.09 2268.8500000000004 615.605Q2259.045 619.12 2247.5750000000003 619.12Q2233.1450000000004 619.12 2225.005 613.015Q2216.8650000000002 606.91 2216.8650000000002 597.29Q2216.8650000000002 584.3399999999999 2229.26 570.28Q2241.655 556.22 2262.7450000000003 544.01Q2283.8350000000005 531.8 2310.4750000000004 524.2149999999999Q2337.1150000000002 516.63 2365.9750000000004 516.63Q2404.085 516.63 2427.025 528.0999999999999Q2449.965 539.5699999999999 2459.955 560.845Q2469.945 582.12 2469.945 612.09V779.33Q2469.945 790.43 2473.2750000000005 797.8299999999999Q2476.6050000000005 805.23 2483.0800000000004 808.9300000000001Q2489.5550000000003 812.63 2499.175 812.63Q2507.3150000000005 812.63 2516.5650000000005 809.855Q2525.8150000000005 807.08 2535.0650000000005 801.9V824.1Q2518.045 840.38 2498.9900000000002 848.89Q2479.9350000000004 857.4 2462.9150000000004 857.4Q2442.195 857.4 2427.7650000000003 848.52Q2413.335 839.64 2406.12 822.435Q2398.905 805.23 2398.1650000000004 781.55L2401.1250000000005 778.96Q2395.5750000000003 803.38 2381.7000000000003 821.14Q2367.8250000000003 838.9 2348.215 848.52Q2328.6050000000005 858.14 2304.925 858.14Q2263.485 858.14 2238.1400000000003 836.31Q2212.795 814.48 2212.795 772.67Q2212.795 750.84 2221.4900000000002 733.0799999999999Q2230.1850000000004 715.3199999999999 2252.755 699.78Q2275.3250000000003 684.24 2316.0250000000005 670.1800000000001Q2356.7250000000004 656.12 2420.3650000000002 642.06ZM2782.5950000000003 517.0Q2802.9450000000006 517.0 2812.5650000000005 527.5450000000001Q2822.1850000000004 538.09 2822.1850000000004 554.74Q2822.1850000000004 575.0899999999999 2810.5300000000007 586.56Q2798.8750000000005 598.03 2781.8550000000005 598.03Q2770.0150000000003 598.03 2759.6550000000007 595.255Q2749.2950000000005 592.48 2738.7500000000005 589.89Q2728.2050000000004 587.3 2715.9950000000003 587.3Q2707.4850000000006 587.3 2697.8650000000007 589.335Q2688.2450000000003 591.37 2679.1800000000003 595.625Q2670.1150000000002 599.88 2661.9750000000004 605.8L2653.0950000000003 591.0Q2676.0350000000003 571.02 2694.9050000000007 556.96Q2713.7750000000005 542.9 2729.5000000000005 534.2049999999999Q2745.2250000000004 525.51 2758.3600000000006 521.255Q2771.4950000000003 517.0 2782.5950000000003 517.0ZM2673.8150000000005 586.56V813.74L2731.1650000000004 832.24V850.0H2546.905V832.24L2600.925 814.48V598.03Q2595.7450000000003 592.48 2587.7900000000004 587.485Q2579.8350000000005 582.49 2569.4750000000004 577.31Q2559.1150000000002 572.13 2546.1650000000004 566.95V554.74L2654.5750000000003 514.4100000000001H2664.9350000000004ZM2958.715 739.37Q2958.715 760.09 2964.635 772.3Q2970.5550000000003 784.51 2984.8 790.06Q2999.045 795.61 3023.465 795.61Q3046.405 795.61 3068.42 787.84Q3090.4350000000004 780.07 3101.905 768.23L3114.855 784.14Q3092.655 806.34 3075.08 820.77Q3057.505 835.2 3042.335 843.34Q3027.165 851.48 3011.995 854.81Q2996.8250000000003 858.14 2979.065 858.14Q2931.335 858.14 2908.58 829.4649999999999Q2885.8250000000003 800.79 2885.8250000000003 743.81V566.95L2832.545 543.27V524.03L2963.155 517.0L2958.715 563.25ZM3104.8650000000002 856.66 3094.505 786.73V565.47L3045.295 542.9V524.03L3172.5750000000003 517.37L3167.7650000000003 563.99V788.58Q3171.465 791.91 3177.385 795.98Q3183.3050000000003 800.05 3190.5200000000004 803.75Q3197.735 807.45 3204.95 810.4100000000001Q3212.165 813.37 3218.455 814.85V828.17L3114.855 856.66Z'

/** The arches; `clip` is this instance's clipPath id (several marks share a page). */
function Arches({ clip }: { clip: string }) {
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={ARCH_LEFT} />
        </clipPath>
      </defs>
      <path className="mark__right" d={ARCH_RIGHT} />
      <path className="mark__left" d={ARCH_LEFT} />
      <path className="mark__overlap" d={ARCH_RIGHT} clipPath={`url(#${clip})`} />
    </>
  )
}

/**
 * The arch mark. Colours come from the tone it sits in (`--mark-left`, `--mark-right`,
 * `--mark-overlap`); `mono` draws it in the text colour only, with a thin gap at the overlap.
 */
export function Mark({ mono = false, className }: { mono?: boolean; className?: string }) {
  const clip = useId()
  const classes = ['mark', mono && 'mark--mono', className].filter(Boolean).join(' ')
  return (
    <svg className={classes} viewBox="271.88 230 536.25 620" aria-hidden="true" focusable="false">
      <Arches clip={clip} />
    </svg>
  )
}

/** The lockup: the mark and the outlined wordmark, which takes the text colour. */
export function Logo({ className }: { className?: string }) {
  const clip = useId()
  return (
    <svg className={['logo', className].filter(Boolean).join(' ')} viewBox="271.88 230 2946.58 628.14" aria-hidden="true" focusable="false">
      <Arches clip={clip} />
      <path className="logo__wordmark" d={WORDMARK} />
    </svg>
  )
}

/** The lockup, linking home. */
export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Honaru home">
      <Logo />
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
