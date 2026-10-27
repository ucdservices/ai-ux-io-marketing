'use client';

import { site } from '@/content/site';

type LinkedInButtonProps = {
  label?: string;
  size?: 'sm' | 'md';
  className?: string;
};

export function LinkedInButton({
  label = 'Connect on LinkedIn',
  size = 'md',
  className = '',
}: LinkedInButtonProps) {
  return (
    <a
      href={site.links.linkedIn}
      className={`btn btn-primary${size === 'sm' ? ' btn-sm' : ''} ${className}`.trim()}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}
