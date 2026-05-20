// @ts-check
import { defineConfig } from 'astro/config';

// Project page on GitHub Pages → served from /gta6-launch-playbook/.
// https://docs.astro.build/en/guides/deploy/github/
export default defineConfig({
  site: 'https://cfpperche.github.io',
  base: '/gta6-launch-playbook',
});
