import type { ReactNode } from 'react'

// Line icons on a 24px grid; stroke and colour come from `.icon` in styles.css.
const icons = {
  heart: <path d="M12 20s-7.5-4.6-7.5-10.2A4.2 4.2 0 0 1 12 7.3a4.2 4.2 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20Z" />,
  house: <path d="M3.5 11 12 4l8.5 7M6 9.5V20h12V9.5M10 20v-5.5h4V20" />,
  group: <path d="M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM3.5 19.5a5.5 5.5 0 0 1 11 0M19 9a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM15 14.4a4.5 4.5 0 0 1 5.5 4.4" />,
  plane: (
    <path d="M20.3 3.7c-.9-.9-2.5-.6-3.6.5L13.4 7.5 5.2 5.4 3.7 6.9l6.6 4.1-3.2 3.2H4.6L3.2 15.6l3.3 1.6 1.6 3.3 1.4-1.4v-2.5l3.2-3.2 4.1 6.6 1.5-1.5-2.1-8.2 3.3-3.3c1.1-1.1 1.4-2.7.5-3.6Z" />
  ),
  circles: <path d="M14.5 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM19.5 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />,
  'pin-off': <path d="M12 21s-6-5.6-6-10.5a6 6 0 0 1 12 0C18 15.4 12 21 12 21ZM14 10.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM4 4l16 16" />,
  sapling: <path d="M12 21v-9M12 12C12 8.5 9.5 6 5.5 6c0 3.5 2.5 6 6.5 6ZM12 14.5c0-3 2.2-5.5 6-5.5 0 3-2.2 5.5-6 5.5ZM8 21h8" />,
  phone: <path d="M9 2.5h6a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2ZM11 18.5h2" />,
  x: <path d="M4 4h4.5L20 20h-4.5ZM20 4l-6.6 7.4M4 20l6.6-7.4" />,
  instagram: (
    <path d="M8 3.5h8A4.5 4.5 0 0 1 20.5 8v8a4.5 4.5 0 0 1-4.5 4.5H8A4.5 4.5 0 0 1 3.5 16V8A4.5 4.5 0 0 1 8 3.5ZM15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM17 7h.01" />
  ),
  tiktok: (
    <path d="M13 3.5h3a4.5 4.5 0 0 0 4.5 4.5v3a7.5 7.5 0 0 1-4.5-1.5V15a5.5 5.5 0 1 1-5.5-5.5v3a2.5 2.5 0 1 0 2.5 2.5Z" />
  ),
} satisfies Record<string, ReactNode>

export type IconName = keyof typeof icons

/** A decorative line icon; its meaning comes from the text next to it. */
export function Icon({ name }: { name: IconName }) {
  return (
    <svg className="icon" width={24} height={24} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {icons[name]}
    </svg>
  )
}
