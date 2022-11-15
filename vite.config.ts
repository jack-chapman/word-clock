import { defineConfig } from 'vite';
import VuePlugin from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [VuePlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
