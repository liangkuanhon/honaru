import { EmailLink, Page, Section } from '../components/ui'
import { contact } from '../content'

/** One inbox each for support, careers and everything else. */
export function Contact() {
  return (
    <Page overline="Contact" title="Say hello" lead={contact.lead}>
      {contact.inboxes.map((inbox) => (
        <Section key={inbox.email} title={inbox.title}>
          <p>{inbox.text}</p>
          <p>
            <EmailLink email={inbox.email} />
          </p>
        </Section>
      ))}
    </Page>
  )
}
