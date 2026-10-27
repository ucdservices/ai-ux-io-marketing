import { agentic } from '@/content/agentic';
import { CONTENT_UPDATED, site } from '@/content/site';

export function buildJsonLd() {
  const graph = [
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: site.locale,
    },
    {
      '@type': 'WebPage',
      '@id': `${site.url}/#webpage`,
      url: site.url,
      name: site.metadata.title,
      description: site.metadata.description,
      isPartOf: { '@id': `${site.url}/#website` },
      about: { '@id': `${site.url}/#person` },
      dateModified: CONTENT_UPDATED,
      inLanguage: site.locale,
    },
    {
      '@type': 'Person',
      '@id': `${site.url}/#person`,
      name: site.person.name,
      jobTitle: site.person.jobTitle,
      url: site.person.url,
      sameAs: [site.links.linkedIn, site.links.cursor, site.links.vijay],
      knowsAbout: [...site.knowsAbout],
    },
    {
      '@type': 'Service',
      '@id': `${site.url}/#service`,
      name: 'Agentic AI UX',
      provider: { '@id': `${site.url}/#person` },
      areaServed: 'GB',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: agentic.heading,
        itemListElement: agentic.principles.map((item, index) => ({
          '@type': 'Offer',
          position: index + 1,
          itemOffered: {
            '@type': 'Service',
            name: item.title,
            description: item.body,
          },
        })),
      },
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
