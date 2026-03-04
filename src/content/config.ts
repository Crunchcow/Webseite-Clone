import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content', // Markdown-Dateien
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    categoryColor: z.string().default('bg-westfalia-red'), // Tailwind-Klasse
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    excerpt: z.string(),
    published: z.boolean().default(true),
  }),
});

const events = defineCollection({
  type: 'data', // JSON/YAML-Dateien
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    time: z.string().optional(),
    location: z.string().optional(),
    excerpt: z.string().optional(),
    highlight: z.boolean().default(false),
    highlightImage: z.string().optional(),
    highlightDescription: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

export const collections = { news, events };
