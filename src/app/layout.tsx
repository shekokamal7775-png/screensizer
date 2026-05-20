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
  metadataBase: new URL('https://screensizer-nk90i49.public.builtwithrocket.new'),
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
    images: [{ url: '/assets/images/og-image.jpg', width: 1200, height: 630, alt: 'ScreenSizer' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScreenSizer — What Is My Screen Size?',
    description: 'Free instant screen size & resolution detector.',
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-10F59ZN71Q"></script>
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-10F59ZN71Q');`}} />
      </head>
      <body cla
