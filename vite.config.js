import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/musicPlayerWebsite/', // Update this if your GitHub repo name is different
  plugins: [react()],
})
