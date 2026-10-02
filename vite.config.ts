import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  // relative base → deployable on GitHub Pages project subpaths
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist', chunkSizeWarningLimit: 1500,
    // Bilder (Designvorlagen-Assets) immer als Base64 inlinen → Standalone-Ein-Datei-Build bleibt vollständig
    assetsInlineLimit: 262144,
    // VITE_INLINE=1 → one JS chunk (standalone single-file build, scripts/make-standalone.mjs)
    ...(process.env.VITE_INLINE === '1'
      ? { rollupOptions: { output: { inlineDynamicImports: true } } }
      : {}),
  },
  test: { environment: 'node' },
});
