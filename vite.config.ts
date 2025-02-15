import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure output directory is 'dist' for Vercel
  },
  publicDir: 'public', // Default, but ensure it's correctly set
});
