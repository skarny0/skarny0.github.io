import { defineCollection, z } from 'astro:content';

// Authors are stored in display form ("Karny, S.*") — the `*` marks equal
// contribution and "Karny, S." is bolded at render time.
const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    venue: z.string(),
    status: z.enum(['published', 'in-review', 'preprint']),
    type: z.enum(['journal', 'conference', 'poster', 'talk']),
    links: z.object({
      paper: z.string().url().optional(),
      arxiv: z.string().url().optional(),
      doi: z.string().url().optional(),
    }).optional(),
    selected: z.boolean().default(false),
    selectedVenue: z.string().optional(),
    selectedOrder: z.number().optional(),
    meta: z.string().optional(),
    sortOrder: z.number(),
  }),
});

export const collections = { publications };
