// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://donnecombattenti.github.io',
  integrations: [mdx()],
});