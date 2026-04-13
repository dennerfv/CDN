import { defineConfig } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  root,
  publicDir: false,
  server: {
    port: 3000,
    strictPort: false,
    open: '/index.html',
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(root, 'index.html'),
        sales: path.resolve(root, 'gemology-sales.html'),
      },
    },
  },
});
