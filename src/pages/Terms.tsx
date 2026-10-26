import { Page } from '../components/ui'
import { terms } from '../content'

/** The terms of use: the hero only for now. */
export function Terms() {
  return <Page overline="Legal" title={terms.title} lead={terms.lead} />
}
