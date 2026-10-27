import type { Metadata } from 'next';
import { SitePage } from '@/components/site-sections';
import { site } from '@/content/site';
import { buildJsonLd } from '@/lib/json-ld';

export const metadata: Metadata = {
  title: {
    absolute: site.metadata.title,
  },
  description: site.metadata.description,
  alternates: {
    canonical: '/',
    types: {
      'text/plain': '/llms.txt',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: site.metadata.ogTitle,
    description: site.metadata.description,
    url: site.url,
    siteName: site.name,
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.metadata.ogTitle,
    description: site.metadata.description,
  },
};

export default function HomePage() {
  const jsonLd = buildJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SitePage />
    </>
  );
}
