import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { alphaTab } from './alphaTabVite/alphaTabVitePlugin'

export default defineConfig({
  plugins: [react(), alphaTab()],
  appType: 'spa',
  base: './',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    chunkSizeWarningLimit: 99999,
  },
})
