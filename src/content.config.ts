// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';


const games = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/games" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    addedAt: z.coerce.date(),

    tags: z.array(z.enum(['cards', "poker", "españolas"])).optional(),
  })
});


export const collections = { games };