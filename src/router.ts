import { useSyncExternalStore } from 'react'

/** Every route in the site. `Link` only accepts these, so a typo is a type error. */
export const paths = ['/', '/mission', '/pledge', '/careers', '/rooms', '/contact', '/privacy', '/terms', '/cookies'] as const
export type Path = (typeof paths)[number]

const NAVIGATE = 'honaru:navigate'

function subscribe(onChange: () => void) {
  window.addEventListener('popstate', onChange)
  window.addEventListener(NAVIGATE, onChange)
  return () => {
    window.removeEventListener('popstate', onChange)
    window.removeEventListener(NAVIGATE, onChange)
  }
}

/** The current pathname without a trailing slash, re-rendering on navigation. */
export function usePathname(): string {
  return useSyncExternalStore(subscribe, () => window.location.pathname.replace(/(.)\/+$/, '$1'))
}

/** Pushes a route onto history and scrolls to the top, like a page load. */
export function navigate(to: Path) {
  if (to !== window.location.pathname) window.history.pushState(null, '', to)
  window.dispatchEvent(new Event(NAVIGATE))
  window.scrollTo(0, 0)
}
