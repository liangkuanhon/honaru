import { Icon } from '../components/Icon'
import { ButtonLink, CardGrid, Illustration, Screen } from '../components/ui'
import { mission } from '../content'

/** The mission, why we exist, three promises, how we decide, then the person behind it. */
export function Mission() {
  return (
    <>
      {/* Full-bleed image with the mission over it; on phones the words sit above it. */}
      <section className="media-hero">
        <Illustration {...mission.heroImage} ratio="16:9" bleed />
        <div className="media-hero__text">
          <p className="overline">{mission.label}</p>
          <h1 className="hero__tagline">{mission.title}</h1>
          <p className="lead">{mission.lead}</p>
        </div>
      </section>

      <Screen>
        <div className="split">
          <div className="prose">
            <h2 className="title">{mission.why.title}</h2>
            {mission.why.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <Illustration {...mission.why.image} ratio="3:2" />
        </div>
      </Screen>

      <Screen tone="purple">
        <h2 className="title">{mission.promises.title}</h2>
        <CardGrid row>
          {mission.promises.items.map((promise, index) => (
            <article key={promise.title} className="promise">
              <p className="promise__number">{String(index + 1).padStart(2, '0')}</p>
              <Icon name={promise.icon} />
              <h3 className="headline">{promise.title}</h3>
              <p>{promise.text}</p>
            </article>
          ))}
        </CardGrid>
      </Screen>

      <Screen tone="purple">
        <h2 className="overline">{mission.decide.label}</h2>
        <blockquote className="pull-quote">{mission.decide.quote}</blockquote>
      </Screen>

      <Screen>
        <h2 className="title">{mission.person.title}</h2>
        <ButtonLink to="/pledge" variant="secondary">
          {mission.person.link}
        </ButtonLink>
      </Screen>
    </>
  )
}
