import { ImageResponse } from 'next/og';
import { hero } from '@/content/hero';
import { site } from '@/content/site';

export const alt = 'ai-ux.io: UCD with AI Teammates';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#f2f3f5',
          color: '#1a1d21',
          fontFamily: 'Satoshi, system-ui, sans-serif',
        }}
      >
        <p style={{ fontSize: 28, margin: 0, opacity: 0.7 }}>{site.name}</p>
        <h1
          style={{
            fontSize: 56,
            fontWeight: 600,
            lineHeight: 1.15,
            marginTop: 24,
            maxWidth: 900,
          }}
        >
          {hero.heading}
        </h1>
      </div>
    ),
    { ...size },
  );
}
