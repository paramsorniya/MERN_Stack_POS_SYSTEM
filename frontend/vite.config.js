import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // host: '127.0.0.1', // Use IPv4 instead of IPv6
    port: 3000,         // You can change the port if needed
  },
})
