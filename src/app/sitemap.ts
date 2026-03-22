import { allBlogs } from 'content-collections';
import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

const blogSlugs = allBlogs.map((post) => post.slug);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...blogSlugs.map(
      (slug) =>
        ({
          url: `${BASE_URL}/blog/${slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        }) as MetadataRoute.Sitemap[0],
    ),
  ];
}
