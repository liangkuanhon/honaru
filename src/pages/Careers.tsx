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

      <Screen tone="ink">
        <h2 className="title">{careers.people.title}</h2>
        <Cards items={careers.people.items} row />
      </Screen>

      <Screen>
        <h2 className="title">{careers.work.title}</h2>
        <Cards items={careers.work.items} row />
        <ButtonLink to="/mission" variant="secondary">
          Read our mission
        </ButtonLink>
      </Screen>

      <Screen tone="ink">
        <h2 className="title">{careers.roles.title}</h2>
        <p className="lead">{careers.roles.text}</p>
      </Screen>

      <Screen>
        <h2 className="title">{careers.closing.title}</h2>
        <p className="lead">{careers.closing.lead}</p>
        <p>
          <EmailLink email={careers.email} />
        </p>
      </Screen>
    </>
  )
}
