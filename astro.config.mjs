import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.sheerkarny.com',
  output: 'static',
  integrations: [sitemap()],
  redirects: {
    '/hobbies': '/projects',
    '/research': '/publications',
  },
});
