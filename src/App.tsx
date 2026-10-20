import { useEffect, type ComponentType } from 'react'
import { Layout } from './components/Layout'
import { Careers } from './pages/Careers'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Mission } from './pages/Mission'
import { NotFound } from './pages/NotFound'
import { Pledge } from './pages/Pledge'
import { Privacy } from './pages/Privacy'
import { usePathname, type Path } from './router'

// Record<Path, …> makes the compiler insist every route in router.ts has a page.
const routes: Record<Path, { title: string; page: ComponentType }> = {
  '/': { title: 'Honaru · Made for your people.', page: Home },
  '/mission': { title: 'Mission · Honaru', page: Mission },
  '/pledge': { title: 'Pledge · Honaru', page: Pledge },
  '/careers': { title: 'Careers · Honaru', page: Careers },
  '/contact': { title: 'Contact · Honaru', page: Contact },
  '/privacy': { title: 'Privacy · Honaru', page: Privacy },
}

/** Picks the page for the current path and keeps the tab title in step. */
export function App() {
  const pathname = usePathname()
  const route = routes[pathname as Path] ?? { title: 'Not found · Honaru', page: NotFound }

  useEffect(() => {
    document.title = route.title
  }, [route.title])

  return (
    <Layout>
      <route.page />
    </Layout>
  )
}
