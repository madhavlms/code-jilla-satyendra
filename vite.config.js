import react from '@vitejs/plugin-react'

import { defineConfig, loadEnv } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  // expose .env as process.env instead of import.meta since jest does not import meta yet
  const envWithProcessPrefix = Object.entries(env).reduce(
    (prev, [key, val]) => {
      return {
        ...prev,
        [`process.env.${key}`]: `"${val}"`,
      }
    },
    {}
  )

  return {
    plugins: [react(), svgr()],
    server: {
      port: env.VITE_PORT,
    },
    define: envWithProcessPrefix,
  }
})
