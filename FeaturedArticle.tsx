import React from 'react';
import Link from 'next/link';
import { Clock, Calendar, User, ArrowRight, Share2, Bookmark } from 'lucide-react';

const TwitterIcon = ({ size = 14 }: {size?: number;}) =>
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>;

const FacebookIcon = ({ size = 14 }: {size?: number;}) =>
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>;

const LinkedinIcon = ({ size = 14 }: {size?: number;}) =>
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>;

export default function FeaturedArticle() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Is My Screen Size? Complete Guide to Screen Resolution & Display Metrics',
    description: 'Learn everything about screen size, resolution, viewport dimensions, and Device Pixel Ratio. The most comprehensive guide for developers, designers, and everyday users.',
    author: { '@type': 'Person', name: 'ScreenSizer Editorial Team' },
    publisher: {
      '@type': 'Organization',
      name: 'ScreenSizer',
      logo: { '@type': 'ImageObject', url: 'https://screensizer.io/assets/images/app_logo.png' }
    },
    datePublished: '2025-05-01',
    dateModified: '2025-05-13',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10a7262af-1765219859979.png",
    url: 'https://screensizer.io/blog'
  };

  return (
    <article className="mb-14" aria-labelledby="featured-article-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="flex items-center gap-2 mb-5">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary text-primary-foreground text-xs font-700 rounded-full">
          ★ Featured Article
        </span>
        <span className="text-xs text-muted-foreground">Updated May 2025</span>
      </div>
      <div className="relative w-full h-48 sm:h-64 lg:h-80 rounded-2xl overflow-hidden mb-6 bg-secondary">
        <img
          src="/assets/images/app_logo.png"
          alt="Colorful diagram showing screen size measurement concepts"
          className="object-cover w-full h-full absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block px-2.5 py-1 bg-primary text-primary-foreground text-xs font-600 rounded-full mb-2">
            Screen Resolution
          </span>
          <h1 id="featured-article-heading" className="text-white text-lg sm:text-2xl font-800 leading-tight text-balance">
            What Is My Screen Size? Complete 2025 Guide to Screen Resolution & Display Metrics
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4 mb-6 pb-5 border-b border-border">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <User size={13} />
          ScreenSizer Editorial Team
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Calendar size={13} />
          May 1, 2025
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock size={13} />
          14 min read
        </div>
        <div className="flex items-center gap-3 ml-auto">
          <button className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all" title="Share on Twitter"><TwitterIcon size={14} /></button>
          <button className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all" title="Share on Facebook"><FacebookIcon size={14} /></button>
          <button className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all" title="Share on LinkedIn"><LinkedinIcon size={14} /></button>
          <button className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all" title="Bookmark article"><Bookmark size={14} /></button>
        </div>
      </div>
      <div className="bg-secondary rounded-xl p-5 mb-8 border border-border">
        <h2 className="text-sm font-700 text-foreground mb-3 flex items-center gap-2">
          <span className="w-4 h-4 bg-primary rounded flex items-center justify-center text-primary-foreground text-xs">≡</span>
          Table of Contents
        </h2>
        <ol className="space-y-1.5">
          {['What Is My Screen Size? — The Basics','Understanding Screen Resolution vs. Viewport Size','What Is Device Pixel Ratio (DPR)?','How to Check Your Screen Size','Most Common Screen Resolutions in 2025','Screen Size and Responsive Web Design','Best Screen Resolutions for Different Devices','How Screen Resolution Affects Website Performance','Screen Resolution for Content Creators & Designers','FAQ: What Is My Screen Size?'].map((item, i) =>
          <li key={`toc-${i + 1}`} className="flex items-start gap-2">
            <span className="metric-value text-xs font-600 text-primary min-w-[18px] mt-0.5">{i + 1}.</span>
            <span className="text-xs text-secondary-foreground hover:text-primary cursor-pointer transition-colors">{item}</span>
          </li>)}
        </ol>
      </div>
      <div className="prose-article">
        <h2>What Is My Screen Size? — The Basics</h2>
        <p>If you have ever wondered <strong>what is my screen size</strong>, you are not alone. Millions of people search this question every month — developers testing responsive designs, designers creating mockups, buyers comparing monitor specs, and everyday users trying to understand their device.</p>
        <p>Your <strong>screen size</strong> can refer to two different measurements: the <em>physical diagonal size</em> of your display in inches (e.g., 27 inches for a desktop monitor), or the <em>pixel resolution</em> expressed as width × height (e.g., 1920×1080).</p>
        <p>Using <Link href="/">ScreenSizer</Link>, you can instantly find <a href="/">what is my screen size</a> by visiting the homepage — your complete screen metrics are auto-detected and displayed in real time.</p>
        <blockquote>Your screen size in pixels is not necessarily what your browser reports. On a Retina MacBook Pro with 2560×1600 physical pixels, CSS sees 1280×800 logical pixels — a 2× scaling factor applied by the operating system.</blockquote>
        <h2>Understanding Screen Resolution vs. Viewport Size</h2>
        <p>Screen resolution is the total number of pixels on your physical display hardware. The viewport is the visible area of a web page inside your browser window, measured in CSS logical pixels.</p>
        <ul>
          <li>A 4K monitor has a screen resolution of <strong>3840 × 2160 pixels</strong></li>
          <li>An iPhone 14 Pro has a physical resolution of <strong>2556 × 1179 pixels</strong></li>
          <li>A standard 1080p laptop has a resolution of <strong>1920 × 1080 pixels</strong></li>
        </ul>
        <h2>What Is Device Pixel Ratio (DPR)?</h2>
        <p>The <strong>Device Pixel Ratio (DPR)</strong> is the ratio between physical pixels and CSS logical pixels on your display.</p>
        <table>
          <thead>
            <tr><th>DPR Value</th><th>Classification</th><th>Common Devices</th><th>Image Asset Needed</th></tr>
          </thead>
          <tbody>
            <tr><td>1.0x</td><td>Standard</td><td>Budget Android, older desktops</td><td>1× (original)</td></tr>
            <tr><td>1.5x</td><td>High DPI</td><td>Some Android mid-range</td><td>1.5× or 2×</td></tr>
            <tr><td>2.0x</td><td>Retina / XHDPI</td><td>iPhone, MacBook Retina, iPad</td><td>2× (@2x)</td></tr>
            <tr><td>2.75x</td><td>XXHDPI</td><td>Pixel phones, Galaxy S series</td><td>3× (@3x)</td></tr>
            <tr><td>3.0x</td><td>Super Retina</td><td>iPhone 15 Pro, Galaxy Ultra</td><td>3× (@3x)</td></tr>
          </tbody>
        </table>
        <h2>How to Check Your Screen Size</h2>
        <p>Visit <Link href="/">ScreenSizer.io</Link> — your complete screen metrics are displayed automatically. No clicks, no settings, no downloads required.</p>
        <h2>Most Common Screen Resolutions in 2025</h2>
        <table>
          <thead>
            <tr><th>Rank</th><th>Resolution</th><th>Device Category</th><th>Global Share</th><th>DPR</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>1920 × 1080</td><td>Desktop/Laptop</td><td>~22%</td><td>1.0x</td></tr>
            <tr><td>2</td><td>390 × 844</td><td>iPhone 14/15</td><td>~8%</td><td>3.0x</td></tr>
            <tr><td>3</td><td>1366 × 768</td><td>Budget Laptop</td><td>~7%</td><td>1.0x</td></tr>
            <tr><td>4</td><td>412 × 915</td><td>Android (Pixel)</td><td>~6%</td><td>2.625x</td></tr>
            <tr><td>5</td><td>1536 × 864</td><td>Surface/Laptop</td><td>~5%</td><td>1.5x</td></tr>
            <tr><td>6</td><td>2560 × 1440</td><td>QHD Monitor</td><td>~5%</td><td>1.0–2.0x</td></tr>
            <tr><td>7</td><td>360 × 800</td><td>Android Budget</td><td>~4%</td><td>2.0x</td></tr>
            <tr><td>8</td><td>1280 × 720</td><td>HD Laptop/TV</td><td>~4%</td><td>1.0x</td></tr>
          </tbody>
        </table>
        <h2>Screen Size and Responsive Web Design</h2>
        <p>Tailwind CSS uses: <code>sm: 640px</code>, <code>md: 768px</code>, <code>lg: 1024px</code>, <code>xl: 1280px</code>, <code>2xl: 1536px</code>. Always use <Link href="/">ScreenSizer</Link> to verify which breakpoint is active on your test device.</p>
        <h2>Best Screen Resolutions for Different Devices</h2>
        <p>For desktop web browsing, <strong>1920×1080 (Full HD)</strong> remains the sweet spot. For power users, <strong>2560×1440 (QHD)</strong> provides significantly more screen real estate.</p>
        <h2>How Screen Resolution Affects Website Performance</h2>
        <p>The most significant impact is on <strong>Largest Contentful Paint (LCP)</strong> — Google&apos;s measure of how quickly the main content of a page loads.</p>
        <ul>
          <li>Slower LCP scores (images take longer to download)</li>
          <li>Blurry hero images on mobile (when DPR is not accounted for)</li>
          <li>Wasted bandwidth on low-DPR devices (if only high-res images are served)</li>
        </ul>
        <h2>Screen Resolution for Content Creators and Designers</h2>
        <p>When designing in Figma, Sketch, or Adobe XD, use these recommended artboard sizes: Desktop: 1440px, Tablet: 768px, Mobile: 390px.</p>
        <h2>Frequently Asked Questions About Screen Size</h2>
        <p>In 2025, <strong>1920×1080 (Full HD)</strong> remains the single most common screen resolution globally. Mobile has overtaken desktop in total traffic share, with 390×844 and 412×915 being the top mobile viewport sizes.</p>
        <div className="bg-primary/8 border border-primary/20 rounded-xl p-6 my-8">
          <h3 className="text-base font-700 text-foreground mb-2">Check Your Screen Size Right Now</h3>
          <p className="text-sm text-muted-foreground mb-4">Use our free tool to instantly detect your screen dimensions — no download required.</p>
          <Link href="/" className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground text-sm font-600 rounded-lg hover:opacity-90 transition-all">
            Find Out What Is My Screen Size <ArrowRight size={14} />
          </Link>
        </div>
        <h3>Related Guides on ScreenSizer</h3>
        <ul>
          <li><Link href="/">Screen Resolution Checker — Detect Your Screen Size Instantly</Link></li>
          <li><Link href="/">Viewport Size Tool — Check Your Browser Viewport Width</Link></li>
          <li><Link href="/">Device Pixel Ratio Checker — Is Your Screen Retina?</Link></li>
          <li><Link href="/blog">What Is Viewport Width? A Developer&apos;s Guide</Link></li>
          <li><Link href="/blog">CSS Breakpoints Guide 2025 — Tailwind, Bootstrap & Custom</Link></li>
        </ul>
      </div>
      <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {['Screen Size', 'Resolution', 'Viewport', 'DPR', 'Responsive Design', 'Web Performance'].map((tag) =>
          <span key={`tag-${tag}`} className="px-2.5 py-1 bg-secondary text-xs font-500 text-secondary-foreground rounded-full border border-border">{tag}</span>
          )}
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Share2 size={13} />
          Share this article
          <button className="p-1.5 rounded hover:bg-secondary transition-colors"><TwitterIcon size={13} /></button>
          <button className="p-1.5 rounded hover:bg-secondary transition-colors"><LinkedinIcon size={13} /></button>
          <button className="p-1.5 rounded hover:bg-secondary transition-colors"><FacebookIcon size={13} /></button>
        </div>
      </div>
    </article>
  );
                  }
