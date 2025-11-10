import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

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
      '@pages': path.resolve(__dirname, '/src/pages'),
      '@widgets': path.resolve(__dirname, '/src/widgets'),
      '@shared': path.resolve(__dirname, '/src/shared'),
      '@assets': path.resolve(__dirname, '/src/app/assets'),
      '@styles': path.resolve(__dirname, '/src/app/styles')
    }
  }
});
