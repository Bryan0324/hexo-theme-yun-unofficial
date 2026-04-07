import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    categories: z.array(z.string()).optional().default([]),
    cover: z.string().optional(),
    draft: z.boolean().optional().default(false),
    top: z.boolean().optional().default(false),
    sticky: z.number().optional(),
    toc: z.boolean().optional().default(true),
    reward: z.boolean().optional().default(true),
    comments: z.boolean().optional().default(true),
  }),
});

export const collections = { posts };
