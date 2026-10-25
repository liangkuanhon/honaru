import { ButtonLink, Screen } from '../components/ui'
import { pledge } from '../content'

/** Giving back to people far from home: why it matters, and what we do each year. */
export function Pledge() {
  return (
    <>
      <Screen>
        <p className="overline">{pledge.label}</p>
        <h1 className="hero__tagline">{pledge.title}</h1>
        <p className="lead">{pledge.lead}</p>
      </Screen>

      <Screen tone="ink">
        <h2 className="title">{pledge.why.title}</h2>
        <div className="prose">
          <p className="lead">{pledge.why.text}</p>
        </div>
      </Screen>

      <Screen>
        <p className="lead">{pledge.horizon.text}</p>
      </Screen>

      <Screen tone="ink">
        <h2 className="title">{pledge.promise.title}</h2>
        <p className="lead">{pledge.promise.text}</p>
      </Screen>

      <Screen>
        <h2 className="title">{pledge.closing.title}</h2>
        <p className="lead">{pledge.closing.lead}</p>
        <ButtonLink to="/contact" variant="secondary">
          Get in touch
        </ButtonLink>
      </Screen>
    </>
  )
}
