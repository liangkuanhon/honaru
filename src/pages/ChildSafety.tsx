import { PolicyPage } from '../components/ui'
import { childSafety } from '../content'

/** The child safety standards Google Play requires to be published. */
export function ChildSafety() {
  return <PolicyPage policy={childSafety} />
}
