import { site } from '@/content/site';
import { BrandLogo } from '@/components/brand-logo';
import { ExternalLink } from '@/components/external-link';
import { SectionStack } from '@/components/section-stack';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <SectionStack tight className="section__inner">
        <BrandLogo className="brand-logo--footer" />
        <ul className="footer-links">
          <li>
            <ExternalLink href={site.links.linkedIn}>LinkedIn</ExternalLink>
          </li>
          <li>
            <ExternalLink href={site.links.cursor}>Cursor</ExternalLink>
          </li>
          <li>
            <ExternalLink href={site.links.vijay}>vijay.ai</ExternalLink>
          </li>
          <li>
            <ExternalLink href={site.links.uxengineer}>uxengineer.ai</ExternalLink>
          </li>
          <li>
            <ExternalLink href={site.links.interaction}>interaction.dev</ExternalLink>
          </li>
        </ul>
        <div className="footer-meta">
          <p className="vc-muted">{site.footer.copyright}</p>
          <p className="footer-attribution">
            Run by <a href={site.hubUrl} rel="author">{site.person.name}</a>
          </p>
        </div>
      </SectionStack>
    </footer>
  );
}
