import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
  resolve: {
    alias: {
      'login': path.resolve(__dirname, '../login/src'),
      'shared': path.resolve(__dirname, '../shared/src'),
    }
  },
  server: {
    port: 3000
  }
});
