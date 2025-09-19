import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    bg: z.string().optional(), // hex color from Decap
  }),
});

export const collections = { articles };
