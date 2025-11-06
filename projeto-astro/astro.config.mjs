import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://basenobre.com.br',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: 'lightningcss'
    }
  }
});
