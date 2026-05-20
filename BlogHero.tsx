import React from 'react';
import Link from 'next/link';
import { Home, ChevronRight, BookOpen } from 'lucide-react';

export default function BlogHero() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://screensizer.io' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://screensizer.io/blog' },
    ],
  };

  return (
    <section className="gradient-hero blob-bg py-10 lg:py-14 border-b border-border">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
            <Home size={12} />
            Home
          </Link>
          <ChevronRight size={12} />
          <span className="text-foreground font-500">Blog</span>
        </nav>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
            <BookOpen size={24} className="text-primary" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-800 text-foreground mb-3 leading-tight">
              Screen Size & Resolution Blog
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
              Expert guides on screen resolution, viewport dimensions, Device Pixel Ratio, responsive design patterns, and web performance — written for developers, designers, and QA engineers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}