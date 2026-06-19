import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://unitconvert.example.com',
  trailingSlash: 'always',
  build: {
    // Ensure all pages are pre-rendered (SSG)
    format: 'directory',
  },
});
