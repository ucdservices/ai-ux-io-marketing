import type { Metadata } from 'next';
import { ElementsProvider } from '@/components/elements-provider';
import { ThemeInitScript } from '@/components/theme-init-script';
import { ThemeSync } from '@/components/theme-sync';
import { site } from '@/content/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ai-ux.io'),
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang={site.locale} data-theme="light" suppressHydrationWarning>
      <head>
        <ThemeInitScript />
        <link
          rel="preload"
          href="/fonts/satoshi/Satoshi-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body nve-theme="root auto" className="site-shell nfv">
        <ElementsProvider>
          <ThemeSync />
          <a href="#main" className="skip-link">
            Skip to main content
          </a>
          {children}
        </ElementsProvider>
      </body>
    </html>
  );
}
