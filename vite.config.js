import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2' // Import the plugin

export default defineConfig(({ command }) => {
  return {
    base: command === 'build' ? '/AcubeSAT-Website/' : '/',
    plugins: [
      react(),
      // This generates .br (Brotli) files
      compression({
        algorithm: 'brotliCompress',
        exclude: [/\.(br)$/, /\.(gz)$/],
      }),
      // This generates .gz (Gzip) files as a backup
      compression({
        algorithm: 'gzip',
        exclude: [/\.(br)$/, /\.(gz)$/],
      }),
    ],
    server: {
      port: 3000,
    },
  }
})