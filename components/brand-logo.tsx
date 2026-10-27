import Link from 'next/link';

const SITE_MONOGRAM = '/icon.svg';

type BrandLogoProps = {
  className?: string;
  markSize?: number;
};

export function BrandLogo({ className = '', markSize = 32 }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={`brand-logo brand-logo--nav ${className}`.trim()}
      aria-label="ai-ux.io home"
    >
      <img
        src={SITE_MONOGRAM}
        alt=""
        width={markSize}
        height={markSize}
        className="brand-logo-mark"
        decoding="async"
      />
      <span className="brand-logo-wordmark" aria-hidden="true">
        <span className="brand-logo-wordmark-bold">AI</span>
        <span className="brand-logo-wordmark-bold"> & </span>
        <span className="brand-logo-wordmark-light">UX</span>
      </span>
    </Link>
  );
}
