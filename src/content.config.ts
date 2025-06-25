import { glob } from 'astro/loaders'; // Not available with legacy API
import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/articles" }),
  schema: z.object({
    title: z.string(),
  })
});


export const collections = { articles };