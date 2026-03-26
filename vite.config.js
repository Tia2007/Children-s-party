import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Children-s-party/',

  server: {
    port: 5173,
    strictPort: true
  },
  build: {
    minify: false,
    reportCompressedSize: false,
    emptyOutDir: true
  }
})
