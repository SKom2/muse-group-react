import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': '/src/pages',
      '@components': '/src/components',
      '@data': '/src/data',
      '@assets': '/src/assets',
      '@images': '/src/assets/images',
      '@styles': '/src/assets/styles',
    },
  },
})
