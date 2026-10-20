import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  // index.html uses %VITE_SITE_URL% for the share image; never deploy it unfilled.
  if (process.env.CF_PAGES && !loadEnv(mode, process.cwd()).VITE_SITE_URL) {
    throw new Error('Set VITE_SITE_URL in the Cloudflare Pages build variables.')
  }
  return { plugins: [react()] }
})
