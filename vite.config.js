import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// GitHub Pages 하위 경로 배포를 위해 base 설정
export default defineConfig({
  base: '/crossfit-hub/',
  plugins: [react()],
})
