import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrivacyContent from './components/PrivacyContent';
import PrivacyTOC from './components/PrivacyTOC';

export const metadata: Metadata = {
  title: 'Privacy Policy | ScreenSizer',
  description: 'ScreenSizer privacy policy — how we collect, use, and protect your data. Includes Google AdSense, Google Analytics, and cookie disclosures.',
  robots: 'index, follow',
  alternates: { canonical: 'https://screensizer.io/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <PrivacyHero />
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-1">
              <PrivacyTOC />
            </div>
            <div className="lg:col-span-3">
              <PrivacyContent />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function PrivacyHero() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://screensizer.io' },
      { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: 'https://screensizer.io/privacy-policy' },
    ],
  };

  return (
    <section className="gradient-hero border-b border-border py-10 lg:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground mb-5">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <span>›</span>
          <span className="text-foreground font-500">Privacy Policy</span>
        </nav>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-800 text-foreground mb-3">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
          Last updated: May 13, 2025. This policy explains how ScreenSizer collects, uses, and protects your information.
        </p>
      </div>
    </section>
  );
}