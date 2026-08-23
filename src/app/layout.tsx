import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, DM_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'RAG MARBLES — Plumbing & Sanitary Products, Prayagraj',
  description:
    'RAG MARBLES in Prayagraj offers quality pipes, taps, bath fittings, sanitaryware, and water tanks for homes, retailers, and contractors.',
  icons: {
    icon: [
      {
        url: '/assets/images/raglogo.png',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
