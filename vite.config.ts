import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import reactSsg from 'vite-plugin-react-ssg'
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(), 
    tailwindcss(),
    ViteWebfontDownload(),
    reactSsg()
  ],
})
