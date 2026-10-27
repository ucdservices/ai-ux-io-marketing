import type { MetadataRoute } from 'next';
import { CONTENT_UPDATED, site } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: CONTENT_UPDATED,
    },
  ];
}
