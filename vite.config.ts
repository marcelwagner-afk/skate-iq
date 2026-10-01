import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  // relative base → deployable on GitHub Pages project subpaths
  base: './',
  plugins: [react(), tailwindcss()],
  build: { outDir: 'dist', chunkSizeWarningLimit: 1500 },
  test: { environment: 'node' },
});
