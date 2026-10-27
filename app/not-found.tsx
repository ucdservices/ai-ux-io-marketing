import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <main id="main" className="section">
      <div className="section__inner" nve-layout="column gap:md">
        <h1 nve-text="heading">Page not found</h1>
        <p nve-text="body">
          <Link href="/">Return to ai-ux.io</Link>
        </p>
      </div>
    </main>
  );
}
