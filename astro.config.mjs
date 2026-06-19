import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://unit-convert-dd0.pages.dev',
  trailingSlash: 'always',
  build: {
    // Ensure all pages are pre-rendered (SSG)
    format: 'directory',
  },
});
