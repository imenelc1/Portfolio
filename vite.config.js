import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Augmente la limite pour ignorer le warning inutile
    rollupOptions: {
      output: {
        // Sépare les grosses librairies (comme Lucide, React) de ton code pour que ça charge plus vite
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
})