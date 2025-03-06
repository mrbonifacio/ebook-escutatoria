import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  root: "./src",
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: "../dist", // Ajusta para saída ficar na raiz do projeto
  },
})
