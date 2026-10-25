import { ButtonLink, Mark } from '../components/ui'

/** Shown for any path not in the route table. */
export function NotFound() {
  return (
    <div className="hero container">
      <Mark line className="hero__arch" />
      <h1 className="display">Nothing to see here.</h1>
      <p className="lead">It's moved, or the link has a typo. Either way, it's not here.</p>
      <ButtonLink to="/" variant="secondary">
        Back to Honaru
      </ButtonLink>
    </div>
  )
}
