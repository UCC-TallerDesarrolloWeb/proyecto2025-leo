import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@assets': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src/assets'),
      '@components' :path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src/components'),
      '@pages': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src/pages'),
      '@styles': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src/styles'),
      '@data': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src/data'),
      '@context': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src/context'),
      '@router': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src/router'),
      

    }
  }
})
