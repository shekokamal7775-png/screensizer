import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import MetricsGrid from './components/MetricsGrid';
import DeviceInfoCards from './components/DeviceInfoCards';
import EducationalSections from './components/EducationalSections';
import FAQSection from './components/FAQSection';
import RelatedTools from './components/RelatedTools';
import AdBanner from './components/AdBanner';
import CTASection from './components/CTASection';
import NewsletterSection from './components/NewsletterSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MetricsGrid />
        <AdBanner slot="homepage-top" />
        <DeviceInfoCards />
        <EducationalSections />
        <AdBanner slot="homepage-mid" />
        <FAQSection />
        <RelatedTools />
        <NewsletterSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
        }
