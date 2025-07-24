import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/Itar-template1/', // <-- replace with your repo name
  plugins: [react()],
})
