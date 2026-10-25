import { ContactForm } from '../components/forms'
import { EmailLink, Page } from '../components/ui'

/** Email and the contact form, for partners, press, creators, investors and anyone else. */
export function Contact() {
  return (
    <Page overline="Contact" title="Say hello" lead="Partners, press, creators, investors, the curious. We read every message.">
      <div className="prose">
        <p>
          Email <EmailLink />, or use the form.
        </p>
        <ContactForm />
      </div>
    </Page>
  )
}
