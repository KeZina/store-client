import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({mode}) =>{
  const env = loadEnv(mode, process.cwd(), '');

  return {
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
    },
    define: {
      __APP_ENV__: env.APP_ENV
    },
  };
});
