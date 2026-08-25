import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import reactSsg from 'vite-plugin-react-ssg'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/consult/',
  plugins: [react(), tailwindcss(), reactSsg()],
})
