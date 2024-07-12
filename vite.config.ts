import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { alphaTab } from '@coderline/alphatab/vite'
// import { copyAssetsPlugin } from './copyAssetsPlugin'

export default defineConfig({
  plugins: [react(), alphaTab() /*copyAssetsPlugin({}) */],
  appType: 'spa',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    chunkSizeWarningLimit: 99999,
  },
})
