import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  esbuild: {
    loader: "jsx"
  },
  plugins: [react()],
});
