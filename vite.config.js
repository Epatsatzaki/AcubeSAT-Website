import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/AcubeSAT-Website/',
  plugins: [react()],
  server: {
    port: 3000,
  },
})