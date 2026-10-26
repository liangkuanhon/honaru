import { useId, useState, type FormEvent, type ReactNode } from 'react'
import { site } from '../content'

// Form backend not chosen yet (a form service or a Cloudflare Pages Function). Each form
// posts JSON to its endpoint; set them as build variables.
const endpoints = {
  newsletter: import.meta.env.VITE_NEWSLETTER_ENDPOINT,
}

const HONEYPOT = 'website'
const isEmail = (value = '') => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

type Status = { state: 'idle' | 'sending' } | { state: 'success' | 'error'; message: string }
type Errors = Record<string, string>

/**
 * Validates, then posts the form. With no endpoint the dev server fakes success; a
 * production build shows the email fallback rather than claim data was saved.
 */
function useForm(kind: keyof typeof endpoints, validate: (data: Record<string, string>) => Errors, success: string) {
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>({ state: 'idle' })

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>
    const found = validate(data)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      setStatus({ state: 'error', message: 'Some fields need attention.' })
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
      return
    }

    setStatus({ state: 'sending' })
    const { [HONEYPOT]: trap, ...payload } = data
    const endpoint = endpoints[kind]
    try {
      if (trap) {
        // A bot filled the hidden field: pretend it worked and send nothing.
      } else if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
      } else if (import.meta.env.DEV) {
        await new Promise((resolve) => setTimeout(resolve, 500))
      } else {
        setStatus({ state: 'error', message: `This form is not open yet. Please write to ${site.email}.` })
        return
      }
      form.reset()
      setStatus({ state: 'success', message: success })
    } catch {
      setStatus({ state: 'error', message: 'That didn\'t go through. Give it another go in a moment.' })
    }
  }

  return { errors, status, onSubmit, sending: status.state === 'sending' }
}

interface FieldProps {
  name: string
  label: string
  error?: string
  optional?: boolean
  children: (props: { id: string; name: string; 'aria-invalid'?: true; 'aria-describedby'?: string }) => ReactNode
}

/** Visible label, the control, and an error the control is described by. */
function Field({ name, label, error, optional, children }: FieldProps) {
  const id = useId()
  return (
    <div className="field">
      <label htmlFor={id}>
        {label}
        {optional && <span className="caption"> (optional)</span>}
      </label>
      {children({ id, name, 'aria-invalid': error ? true : undefined, 'aria-describedby': error ? `${id}-error` : undefined })}
      {error && (
        <p className="field__error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  )
}

/** Hidden field for bots, plus the live region that announces the outcome. */
function FormFooter({ status }: { status: Status }) {
  return (
    <>
      <div className="honeypot" aria-hidden="true">
        <input type="text" name={HONEYPOT} tabIndex={-1} autoComplete="off" />
      </div>
      <p className="form-status" data-state={status.state} role="status">
        {'message' in status ? status.message : ''}
      </p>
    </>
  )
}

/** Email signup for the waitlist. */
export function NewsletterForm() {
  const { errors, status, onSubmit, sending } = useForm(
    'newsletter',
    (data): Errors => (isEmail(data.email) ? {} : { email: 'Enter an email address, like name@example.com.' }),
    'You\'re on the list. We\'ll be in touch the moment Honaru lands.',
  )
  return (
    <form className="newsletter-form" noValidate onSubmit={onSubmit}>
      <div className="newsletter-form__row">
        <Field name="email" label="Email address" error={errors.email}>
          {(props) => <input {...props} className="input" type="email" autoComplete="email" required />}
        </Field>
        <button className="button button--primary" type="submit" disabled={sending}>
          {sending ? 'Joining…' : 'Join'}
        </button>
      </div>
      <FormFooter status={status} />
    </form>
  )
}
