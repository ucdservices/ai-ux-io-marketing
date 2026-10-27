import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

export default function robots(): MetadataRoute.Robots {
  const allowAll = {
    userAgent: '*',
    allow: '/',
  };

  const aiAgents = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-User',
    'Claude-SearchBot',
    'PerplexityBot',
    'Google-Extended',
    'Applebot-Extended',
  ].map((userAgent) => ({
    userAgent,
    allow: '/',
  }));

  return {
    rules: [allowAll, ...aiAgents],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
