import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Relative asset URLs so the built site works from any folder or static host
  // (e.g. dist/ opened through VS Code Live Server), not only at a domain root.
  base: './',
  plugins: [react(), tailwindcss()],
});
