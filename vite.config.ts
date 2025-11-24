import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']]
      }
    }),
    svgr()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '@app': path.resolve(__dirname, '/src/app'),
      '@assets': path.resolve(__dirname, '/src/app/assets'),
      '@pages': path.resolve(__dirname, '/src/pages'),
      '@widgets': path.resolve(__dirname, '/src/widgets'),
      '@shared': path.resolve(__dirname, '/src/shared'),
      '@styles': path.resolve(__dirname, '/src/app/styles')
    }
  }
});
