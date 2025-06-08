// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  experimental: {
    headingIdCompat: true,
    contentIntellisense: true,
    
    fonts: [{
      provider: fontProviders.google(),
      name: "Syne",
      cssVariable: "--font-sans",
    }]
  },
  site: 'https://cardgames.polgubau.com',

  integrations: [mdx({
    optimize: true,
  }), sitemap()]
});