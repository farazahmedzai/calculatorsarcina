import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@assets': path.resolve(__dirname, './attached_assets'),
      '@shared': path.resolve(__dirname, './shared'),
    },
  },
  root: './client',
  build: {
    outDir: '../dist/public',
    emptyOutDir: true,
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'query': ['@tanstack/react-query'],
          'ui': ['@radix-ui/react-slot', '@radix-ui/react-dialog'],
          'router': ['wouter'],
          'forms': ['react-hook-form', '@hookform/resolvers'],
          'utils': ['clsx', 'tailwind-merge', 'date-fns']
        }
      }
    },
    chunkSizeWarningLimit: 1600,
    minify: 'esbuild',
    target: 'es2020',
    sourcemap: false
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})