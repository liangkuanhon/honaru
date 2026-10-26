/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Public origin, no trailing slash; used for the share image URL in index.html. */
  readonly VITE_SITE_URL: string
  /** POST endpoint for newsletter sign-ups; unset means the form is not open yet. */
  readonly VITE_NEWSLETTER_ENDPOINT?: string
}
