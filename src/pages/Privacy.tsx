import { EmailLink, Page, Section } from '../components/ui'

/** Privacy note. States only what this site does; the rest is a placeholder. */
export function Privacy() {
  return (
    <Page overline="Legal" title="Privacy" lead="[Draft: to be reviewed and completed before launch. Last updated: [Date].]">
      <Section title="This website">
        <p>No analytics, advertising or tracking cookies, and no third-party scripts or fonts.</p>
      </Section>
      <Section title="Waitlist and contact form">
        <p>
          We keep your email to tell you when Honaru is ready, and the details you send through the contact form to reply
          to you. Nothing else. [Storage provider and retention period.]
        </p>
      </Section>
      <Section title="Your rights">
        <p>
          [Rights under the PDPA.] To see or delete what we hold, email <EmailLink />.
        </p>
      </Section>
    </Page>
  )
}
