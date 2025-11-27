import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Change this to your repository name
  // If your repo is https://github.com/User/my-project
  // Then this should be '/my-project/'
  base: '/arknights-endfield-check/',
})