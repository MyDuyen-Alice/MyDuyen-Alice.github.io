import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({
    pattern: '**/*.mdx',
    base: './src/content/case-studies',
  }),
  schema: z.object({
    projectSlug: z.string(),
    lang: z.enum(['vi', 'en']),
    title: z.string(),
    tagline: z.string(),
    problem: z.string(),
    outcome: z.string(),
    publishedDate: z.string().optional(),
    techStack: z.array(z.string()),
    kpis: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          hint: z.string().optional(),
        })
      )
      .default([]),
    status: z.enum(['planned', 'inProgress', 'completed']),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    isStub: z.boolean().default(false),
  }),
});

export const collections = {
  'case-studies': caseStudies,
};
