import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solid()],
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  resolve: {
    alias: {
      api: '/src/api',
      app: '/src/app',
      assets: '/src/assets',
      components: '/src/components',
      styles: '/src/styles',
      types: '/src/types',
      utils: '/src/utils',
    },
  },
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
