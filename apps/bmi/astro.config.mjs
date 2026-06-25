import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    runtime: {
      mode: 'local',
      type: 'pages',
    },
  }),
  site: 'https://bmi-calculator-27p.pages.dev',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
