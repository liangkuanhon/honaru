import { CardGrid, GetApp, Illustration, Mark, Screen } from '../components/ui'
import { problem, reviews, site, spaces } from '../content'

// The track slides left by one set, then restarts. Each slide is a quarter of the viewport
// (styles.css), so one set always fills the screen and two sets loop without a gap. Keep
// in step with `carousel` in styles.css (-100% / COPIES).
const COPIES = 2

/**
 * The four Spaces on an endless, slow loop. Copies after the first are hidden from
 * assistive tech; reduced motion turns it into a still, scrollable row.
 */
function SpacesCarousel() {
  return (
    <div className="carousel">
      <ul className="carousel__track" aria-label="Spaces">
        {Array.from({ length: COPIES }, () => spaces).flat().map((space, index) => {
          const copy = index >= spaces.length
          return (
            <li key={index} className="space-slide" aria-hidden={copy || undefined}>
              <Illustration icon={space.icon} />
              <h3>{space.label}</h3>
              <p>{space.feeling}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/** Why Honaru exists, in five screens: belief, a human moment, the Spaces, reviews, invitation. */
export function Home() {
  return (
    <>
      <div className="hero container">
        <Mark line className="hero__arch" />
        <h1 className="hero__tagline">
          <span>Made for</span> <span className="hero__accent">your people.</span>
        </h1>
        <p className="lead">{site.belief}</p>
      </div>

      <Screen tone="purple">
        <h2 className="title">Sound familiar?</h2>
        {problem.map((line) => (
          <p key={line} className="statement">
            {line}
          </p>
        ))}
      </Screen>

      <Screen bleed={<SpacesCarousel />}>
        <h2 className="title">A home for each of your people</h2>
      </Screen>

      
    </>
  )
}
