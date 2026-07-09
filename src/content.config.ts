import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    date: z.coerce.date(),
    tag: z.enum(['研究', '受賞', '登壇', 'メディア', 'その他']).default('その他'),
    title: z.string(),
  }),
});

export const collections = { news };
