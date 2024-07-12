import { defineConfig } from 'vite'
import { alphaTab } from '@coderline/alphatab/vite'
import react from '@vitejs/plugin-react'

import { readdirSync } from 'fs'
import { resolve } from 'path'

const dist = readdirSync(resolve('node_modules/@coderline/alphatab/dist'))
console.log('dist:')
console.log(dist)

const font = readdirSync(resolve('node_modules/@coderline/alphatab/dist/font'))
console.log('font:')
console.log(font)

const sf = readdirSync(
  resolve('node_modules/@coderline/alphatab/dist/soundfont'),
)
console.log('soundfont:')
console.log(sf)

export default defineConfig({
  plugins: [react(), alphaTab()],
  appType: 'spa',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    chunkSizeWarningLimit: 99999,
  },
})
