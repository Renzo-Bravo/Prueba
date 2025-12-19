
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' 

const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), //No en todos funcionaba, hay links que no cuentan con el path (Funionan de todos modos, no están anclados a rutas absolutas del DEKTOP)
    },
  },
})