import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/muse-group-react',
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@ui': '/src/ui',
      '@data': '/src/data',
      '@assets': '/src/assets',
      '@images': '/src/assets/images',
      '@styles': '/src/assets/styles',
    },
  },
})
