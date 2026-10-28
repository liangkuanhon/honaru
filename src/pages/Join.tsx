import { Mark, StoreBadges } from '../components/ui'
import { join } from '../content'

/** Where an invite link lands without the app: hands the token to the app over its own scheme. */
export function Join({ token }: { token: string }) {
  return (
    <div className="hero container">
      <Mark line className="hero__arch" />
      <h1 className="hero__tagline">{join.title}</h1>
      <p className="lead">{join.lead}</p>
      <a className="button button--primary" href={`honaru://join/${token}`}>
        {join.open}
      </a>
      <p>{join.noApp}</p>
      <StoreBadges />
    </div>
  )
}
