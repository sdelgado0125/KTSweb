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

  return {
    plugins: [react()],
    envDir: rootDir,
  }
})

