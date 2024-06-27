import { defineConfig } from 'vite'
import { alphaTab } from '@coderline/alphatab/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), alphaTab()],
  appType: 'spa',
})