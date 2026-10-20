import { ContactForm } from '../components/forms'
import { EmailLink, Page } from '../components/ui'

/** Email and the contact form, for partners, press, creators, investors and anyone else. */
export function Contact() {
  return (
    <Page overline="Contact" title="Write to us" lead="Partners, press, creators, investors or anyone with a question. We read every message.">
      <div className="prose">
        <p>
          Email <EmailLink />, or use the form.
        </p>
        <ContactForm />
      </div>
    </Page>
  )
}
