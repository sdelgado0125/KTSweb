import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, rootDir, '')
  const web3Key = String(env.VITE_WEB3FORMS_ACCESS_KEY ?? '').trim()
  if (mode === 'production' && !web3Key) {
    console.warn(
      '\n[Vite] VITE_WEB3FORMS_ACCESS_KEY is missing or empty. The request modal cannot send mail until it is set.\n' +
        '  • Netlify: Site settings → Environment variables → add VITE_WEB3FORMS_ACCESS_KEY → Deploy again.\n' +
        '  • Local: create `.env` from `.env.example`, paste your key, restart `npm run dev`.\n',
    )
  }

  const injectSiteUrlMeta = () => ({
    name: 'inject-site-url-meta',
    transformIndexHtml(html) {
      const base = String(
        process.env.URL ||
          process.env.DEPLOY_PRIME_URL ||
          process.env.VITE_SITE_URL ||
          '',
      )
        .trim()
        .replace(/\/$/, '')
      if (!base) {
        return html.replace('<!--SITE_URL_INJECTION-->', '')
      }
      const block = `
    <link rel="canonical" href="${base}/" />
    <meta property="og:url" content="${base}/" />
    <meta property="og:image" content="${base}/kts-logo.png" />
    <meta name="twitter:image" content="${base}/kts-logo.png" />`
      return html.replace('<!--SITE_URL_INJECTION-->', block)
    },
  })

  return {
    plugins: [react(), injectSiteUrlMeta()],
    envDir: rootDir,
  }
})

