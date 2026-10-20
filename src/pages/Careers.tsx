import { ButtonLink, Cards, EmailLink, Screen } from '../components/ui'
import { careers } from '../content'

/** Who we hope to meet, how we work, open roles, and how to get in touch. */
export function Careers() {
  return (
    <>
      <Screen>
        <p className="overline">{careers.label}</p>
        <h1 className="hero__tagline">{careers.title}</h1>
        <p className="lead">{careers.lead}</p>
      </Screen>

      <Screen tone="purple">
        <h2 className="title">{careers.people.title}</h2>
        <Cards items={careers.people.items} />
      </Screen>

      <Screen>
        <h2 className="title">{careers.work.title}</h2>
        <Cards items={careers.work.items} />
      </Screen>

      <Screen tone="purple">
        <h2 className="title">{careers.roles.title}</h2>
        <p className="lead">{careers.roles.text}</p>
      </Screen>

      <Screen>
        <h2 className="title">{careers.closing.title}</h2>
        <p className="lead">{careers.closing.lead}</p>
        <p>
          <EmailLink />
        </p>
        <ButtonLink to="/contact" variant="secondary">
          Get in touch
        </ButtonLink>
      </Screen>
    </>
  )
}
