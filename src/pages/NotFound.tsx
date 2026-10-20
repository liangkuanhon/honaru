import { ButtonLink, Mark } from '../components/ui'

/** Shown for any path not in the route table. */
export function NotFound() {
  return (
    <div className="hero container">
      <Mark line className="hero__arch" />
      <h1 className="display">This page is not here.</h1>
      <p className="lead">It may have moved, or the link may be mistyped.</p>
      <ButtonLink to="/" variant="secondary">
        Back to Honaru
      </ButtonLink>
    </div>
  )
}
