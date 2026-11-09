import { PolicyPage } from '../components/ui'
import { deleteAccount } from '../content'

/** How to delete an account, with or without the app: Google Play's required web link. */
export function DeleteAccount() {
  return <PolicyPage policy={deleteAccount} />
}
