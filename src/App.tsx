import { useEffect, type ComponentType } from 'react'
import { Layout } from './components/Layout'
import { Careers } from './pages/Careers'
import { Contact } from './pages/Contact'
import { Cookies } from './pages/Cookies'
import { Home } from './pages/Home'
import { Join } from './pages/Join'
import { Mission } from './pages/Mission'
import { NotFound } from './pages/NotFound'
import { Pledge } from './pages/Pledge'
import { Privacy } from './pages/Privacy'
import { Rooms } from './pages/Rooms'
import { Terms } from './pages/Terms'
import { joinToken, usePathname, type Path } from './router'

// Record<Path, …> makes the compiler insist every route in router.ts has a page.
const routes: Record<Path, { title: string; page: ComponentType }> = {
  '/': { title: 'Honaru · People, not tabs.', page: Home },
  '/mission': { title: 'Mission · Honaru', page: Mission },
  '/pledge': { title: 'Pledge · Honaru', page: Pledge },
  '/careers': { title: 'Careers · Honaru', page: Careers },
  '/rooms': { title: 'Rooms · Honaru', page: Rooms },
  '/contact': { title: 'Contact · Honaru', page: Contact },
  '/privacy': { title: 'Privacy Policy · Honaru', page: Privacy },
  '/terms': { title: 'Terms of Use · Honaru', page: Terms },
  '/cookies': { title: 'Cookie Policy · Honaru', page: Cookies },
}

/** Picks the page for the current path and keeps the tab title in step. */
export function App() {
  const pathname = usePathname()
  const token = joinToken(pathname)
  const route = routes[pathname as Path] ?? { title: 'Not found · Honaru', page: NotFound }
  // /join/<token> is the one route with a parameter, so it sits outside the table.
  const title = token ? 'Join · Honaru' : route.title

  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <Layout>
      {token ? <Join token={token} /> : <route.page />}
    </Layout>
  )
}
