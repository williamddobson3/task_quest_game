import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {},
    screens: {
      sm: '390px',
      lg: '1024px',
      xl: '1280px',   // 👈 here you can modify
      '2xl': '1536px',
    },
  },
  plugins: [react(), tailwindcss()],
})
