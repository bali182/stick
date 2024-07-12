import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyAssetsPlugin } from './copyAssetsPlugin'

export default defineConfig({
  plugins: [react(), copyAssetsPlugin({}) /*alphaTab()*/],
  appType: 'spa',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    chunkSizeWarningLimit: 99999,
  },
})
