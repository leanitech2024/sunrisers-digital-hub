import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMarkdown } from '@content-collections/markdown';
import { z } from 'zod';

import { exec as execCallback } from 'node:child_process';
import { promisify } from 'node:util';

const exec = promisify(execCallback);

const postSchema = z.object({
  title: z.string().min(1, 'Title cannot be empty'),
  summary: z.string().min(1, 'Summary cannot be empty'),
  content: z.string().min(1, 'Content cannot be empty'),
  slug: z
    .string()
    .min(1, 'Slug cannot be empty')
    .lowercase()
    .regex(
      /^[a-z0-9-]+$/,
      'Slug can only contain lowercase letters, numbers, and hyphens',
    ),
  coverImage: z.string().min(1, 'Cover image URL cannot be empty'),
  authorName: z.string().min(1, 'Author name cannot be empty'),
  authorAvatar: z.string().min(1, 'Author avatar URL cannot be empty'),
  tags: z
    .array(z.string().min(1, 'Tag cannot be empty'))
    .min(1, 'At least one tag is required'),
  metaTitle: z
    .string()
    .min(1, 'Meta title cannot be empty')
    .max(60, 'Meta title cannot exceed 60 characters'),
  metaDescription: z
    .string()
    .min(1, 'Meta description cannot be empty')
    .max(160, 'Meta description cannot exceed 160 characters'),
  socialLinks: z.array(
    z.object({
      platform: z.string().min(1, 'Platform name cannot be empty'),
      url: z.url('Invalid URL format').min(1, 'URL cannot be empty'),
    }),
  ),
});

const blogs = defineCollection({
  name: 'blogs',
  directory: 'src/contents',
  include: ['**/*.md', '**/*.mdx'],
  schema: postSchema,
  transform: async (document, context) => {
    const lastModified = await context.cache(
      document._meta.filePath,
      async (filePath) => {
        const { stdout } = await exec(`git log -1 --format=%ai -- ${filePath}`);
        if (stdout) {
          return new Date(stdout.trim()).toISOString();
        }
        return new Date().toISOString();
      },
    );

    const html = await compileMarkdown(context, document);

    return {
      ...document,
      html,
      lastModified,
    };
  },
});

export default defineConfig({
  content: [blogs],
});
