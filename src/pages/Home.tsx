import { ButtonLink, Illustration, Mark, Screen } from '../components/ui'
import { problem, rooms, site } from '../content'

// The track slides left by one set, then restarts. Each slide is a quarter of the viewport
// (styles.css), so one set of three fills three quarters of it; three sets keep the screen
// full while it loops. Keep in step with `carousel` in styles.css (-100% / COPIES).
const COPIES = 3

/**
 * The three Rooms on an endless, slow loop. Copies after the first are hidden from
 * assistive tech; reduced motion turns it into a still, scrollable row.
 */
function RoomsCarousel() {
  return (
    <div className="carousel">
      <ul className="carousel__track" aria-label="Rooms">
        {Array.from({ length: COPIES }, () => rooms).flat().map((room, index) => {
          const copy = index >= rooms.length
          return (
            <li key={index} className="room-slide" data-room={room.id} aria-hidden={copy || undefined}>
              <Illustration icon={room.icon} />
              <h3>{room.label}</h3>
              <p>{room.feeling}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/** Why Honaru exists, in three screens: belief, a human moment, the Rooms. */
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

      <Screen tone="ink">
        <h2 className="title">Sound familiar?</h2>
        {problem.map((line) => (
          <p key={line} className="statement">
            {line}
          </p>
        ))}
      </Screen>

      <Screen
        bleed={
          <>
            <RoomsCarousel />
            <div className="container rooms-cta">
              <ButtonLink to="/rooms">Step inside</ButtonLink>
            </div>
          </>
        }
      >
        <h2 className="title">Different people. Different rooms.</h2>
      </Screen>
    </>
  )
}
