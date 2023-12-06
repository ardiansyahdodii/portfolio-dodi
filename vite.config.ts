import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://script.google.com/macros/s/AKfycbyUL6Vij1reNqh7DNhyxG_wwOwnrTB1B2uiwq7FSlp8hSBNUgXAjRMfdWJQVWRUaIRJ2Q/exec', // Ganti dengan URL server yang sesuai
  //       changeOrigin: true,
  //       secure: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
})
