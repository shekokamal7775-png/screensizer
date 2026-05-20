import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import '../styles/tailwind.css';
import { Toaster } from 'sonner';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains-mono',
  display: 'swap'
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL('https://screensize8011.builtwithrocket.new'),
  title: 'ScreenSizer — What Is My Screen Size & Resolution Detector',
  description: 'Instantly detect your screen size, viewport dimensions, device pixel ratio, device type, and browser info. Free online screen size checker tool.',
  keywords: 'what is my screen size, screen resolution checker, viewport size, device pixel ratio, screen size detector',
  authors: [{ name: 'ScreenSizer' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://screensizer.io',
    siteName: 'ScreenSizer',
    title: 'ScreenSizer — What Is My Screen Size & Resolution Detector',
    description: 'Instantly detect your screen size, viewport dimensions, device pixel ratio, device type, and browser info. Free online screen size checker tool.',
    images: [{ url: '/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'ScreenSizer - Screen Size Detection Tool showing resolution metrics on a monitor display' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScreenSizer — What Is My Screen Size?',
    description: 'Free instant screen size & resolution detector. Check viewport, DPR, device type and more.',
    images: ['/assets/images/og-image.jpg']
  },
  alternates: {
    canonical: 'https://screensizer.io'
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }]
  }
};

export default function RootLayout({ children }: {children: React.ReactNode;}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="google-site-verification" content="QTkg1YVrmK31hABzfQHExJrwOEbskNNmjhdQcyeuno4" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'ScreenSizer',
              url: 'https://screensizer.io',
              logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1ff1925e9-1766408244065.png",
              description: 'Free online screen size and resolution detection tool',
              sameAs: ['https://twitter.com/screensizer']
            })
          }} />
</head>
      <body className={plusJakartaSans.className}>
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>);

}