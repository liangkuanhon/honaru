import { Page } from '../components/ui'
import { cookies } from '../content'

/** The cookie policy: the hero only for now. */
export function Cookies() {
  return <Page overline="Legal" title={cookies.title} lead={cookies.lead} />
}
