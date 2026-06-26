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
  site: 'https://age.convunit.net',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
