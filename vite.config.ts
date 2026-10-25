import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  // relative base → deployable on GitHub Pages project subpaths
  base: './',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [{
      // DRIV-only Saisonplanung: die echte Maske enthält die Kaderliste (Echtnamen,
      // teils Minderjährige) und wird NUR im Echtdaten-Build eingebunden; öffentliche
      // Builds bekommen den leeren Stub → keine Echtdaten im Demo-Bundle/Repo.
      // (Regex-Form, damit auch "@planner-html?raw" mit Query aufgelöst wird.)
      find: /^@planner-html/,
      replacement: fileURLToPath(new URL(
        process.env.VITE_REAL === '1'
          ? './src/planner/saisonplanung.local.html'
          : './src/planner/saisonplanung.stub.html',
        import.meta.url)),
    }],
  },
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
