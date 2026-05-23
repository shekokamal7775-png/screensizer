import React from 'react';
import Link from 'next/link';
import AppImage from './AppImage';
import { Clock, Calendar, User, ArrowRight, Share2, Bookmark } from 'lucide-react';

// Inline SVG icons to replace react-feather
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      
      {/* Featured label */}
      <div className="flex items-center gap-2 mb-5">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary text-primary-foreground text-xs font-700 rounded-full">
          ★ Featured Article
        </span>
        <span className="text-xs text-muted-foreground">Updated May 2025</span>
      </div>
      {/* Hero image */}
      <div className="relative w-full h-48 sm:h-64 lg:h-80 rounded-2xl overflow-hidden mb-6 bg-secondary">
        <AppImage
          src="/assets/images/app_logo.png"
          alt="Colorful diagram showing screen size measurement concepts with a monitor, tablet, and smartphone displaying resolution numbers and viewport dimensions"
          fill
          className="object-cover"
          priority />
        
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
      {/* Meta */}
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
          <button className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all" title="Share on Twitter">
            <TwitterIcon size={14} />
          </button>
          <button className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all" title="Share on Facebook">
            <FacebookIcon size={14} />
          </button>
          <button className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all" title="Share on LinkedIn">
            <LinkedinIcon size={14} />
          </button>
          <button className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all" title="Bookmark article">
            <Bookmark size={14} />
          </button>
        </div>
      </div>
      {/* Table of Contents */}
      <div className="bg-secondary rounded-xl p-5 mb-8 border border-border">
        <h2 className="text-sm font-700 text-foreground mb-3 flex items-center gap-2">
          <span className="w-4 h-4 bg-primary rounded flex items-center justify-center text-primary-foreground text-xs">≡</span>
          Table of Contents
        </h2>
        <ol className="space-y-1.5">
          {[
          'What Is My Screen Size? — The Basics',
          'Understanding Screen Resolution vs. Viewport Size',
          'What Is Device Pixel Ratio (DPR)?',
          'How to Check Your Screen Size',
          'Most Common Screen Resolutions in 2025',
          'Screen Size and Responsive Web Design',
          'Best Screen Resolutions for Different Devices',
          'How Screen Resolution Affects Website Performance',
          'Screen Resolution for Content Creators & Designers',
          'FAQ: What Is My Screen Size?']?.
          map((item, i) =>
          <li key={`toc-${i + 1}`} className="flex items-start gap-2">
              <span className="metric-value text-xs font-600 text-primary min-w-[18px] mt-0.5">{i + 1}.</span>
              <span className="text-xs text-secondary-foreground hover:text-primary cursor-pointer transition-colors">{item}</span>
            </li>
          )}
        </ol>
      </div>
      {/* Article body */}
      <div className="prose-article">
        <h2>What Is My Screen Size? — The Basics</h2>
        <p>
          If you have ever wondered <strong>what is my screen size</strong>, you are not alone. Millions of people search this question every month — developers testing responsive designs, designers creating mockups, buyers comparing monitor specs, and everyday users trying to understand their device. The answer, however, is more nuanced than a single number.
        </p>
        <p>
          Your <strong>screen size</strong> can refer to two different measurements: the <em>physical diagonal size</em> of your display in inches (e.g., 27 inches for a desktop monitor), or the <em>pixel resolution</em> expressed as width × height (e.g., 1920×1080). In web development and digital design, we almost always mean the pixel resolution — specifically the CSS pixel dimensions your browser uses to render web pages.
        </p>
        <p>
          Using <Link href="/">ScreenSizer</Link>, you can instantly find <a href="/">what is my screen size</a> by visiting the homepage — your complete screen metrics are auto-detected and displayed in real time, including screen resolution, viewport dimensions, Device Pixel Ratio, device type, operating system, browser, and orientation. No app download, no account required.
        </p>

        <blockquote>
          Your screen size in pixels is not necessarily what your browser reports. On a Retina MacBook Pro with 2560×1600 physical pixels, CSS sees 1280×800 logical pixels — a 2× scaling factor applied by the operating system.
        </blockquote>

        <h2>Understanding Screen Resolution vs. Viewport Size</h2>
        <p>
          One of the most common points of confusion when asking <em>what is my screen size</em> is the difference between <strong>screen resolution</strong> and <strong>viewport size</strong>. These are related but fundamentally different measurements that serve different purposes in web development.
        </p>
        <h3>Screen Resolution</h3>
        <p>
          Screen resolution is the total number of pixels on your physical display hardware. It is a fixed property of your monitor or phone screen. For example:
        </p>
        <ul>
          <li>A 4K monitor has a screen resolution of <strong>3840 × 2160 pixels</strong></li>
          <li>An iPhone 14 Pro has a physical resolution of <strong>2556 × 1179 pixels</strong></li>
          <li>A standard 1080p laptop has a resolution of <strong>1920 × 1080 pixels</strong></li>
        </ul>
        <p>
          This is what Windows Display Settings and macOS System Preferences show you. It reflects the actual hardware capability of your screen.
        </p>
        <h3>Viewport Size (CSS Pixels)</h3>
        <p>
          The <strong>viewport</strong> is the visible area of a web page inside your browser window, measured in CSS logical pixels. This is what web developers care about for responsive design. CSS pixels are not the same as physical pixels — they are scaled by the operating system and browser to ensure consistent text and element sizes across different display densities.
        </p>
        <p>
          For example, on a MacBook Pro 14-inch (3024 × 1964 physical pixels), the CSS viewport is typically <strong>1512 × 982 pixels</strong> at default scaling — exactly half the physical pixel count, because the display uses a 2× Device Pixel Ratio.
        </p>

        <h2>What Is Device Pixel Ratio (DPR)?</h2>
        <p>
          The <strong>Device Pixel Ratio (DPR)</strong> is the ratio between physical pixels and CSS logical pixels on your display. It is one of the most important — and least understood — display metrics for web developers.
        </p>
        <p>
          A DPR of <strong>1.0</strong> means one physical pixel maps to one CSS pixel (standard definition). A DPR of <strong>2.0</strong> means four physical pixels (2×2) render each CSS pixel — this is what Apple calls "Retina" display technology, and what Android calls "XXHDPI." A DPR of <strong>3.0</strong> is common on flagship smartphones like the iPhone 15 Pro and Samsung Galaxy S24.
        </p>
        <table>
          <thead>
            <tr>
              <th>DPR Value</th>
              <th>Classification</th>
              <th>Common Devices</th>
              <th>Image Asset Needed</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1.0x</td><td>Standard</td><td>Budget Android, older desktops</td><td>1× (original)</td></tr>
            <tr><td>1.5x</td><td>High DPI</td><td>Some Android mid-range</td><td>1.5× or 2×</td></tr>
            <tr><td>2.0x</td><td>Retina / XHDPI</td><td>iPhone, MacBook Retina, iPad</td><td>2× (@2x)</td></tr>
            <tr><td>2.75x</td><td>XXHDPI</td><td>Pixel phones, Galaxy S series</td><td>3× (@3x)</td></tr>
            <tr><td>3.0x</td><td>Super Retina</td><td>iPhone 15 Pro, Galaxy Ultra</td><td>3× (@3x)</td></tr>
          </tbody>
        </table>
        <p>
          Understanding your DPR is critical for serving correctly sized images. If you serve a 400px-wide image to a 2× DPR device, the image will appear blurry because the browser is stretching 400 physical pixels across 800 physical pixels. Use the HTML <code>srcset</code> attribute or CSS <code>image-set()</code> to serve the right image to the right device.
        </p>

        <h2>How to Check Your Screen Size</h2>
        <p>
          There are multiple ways to find out <em>what is my screen size</em>, depending on what information you need and which device you are using.
        </p>
        <h3>Method 1: Use ScreenSizer (Fastest)</h3>
        <p>
          Visit <Link href="/">ScreenSizer.io</Link> — your complete screen metrics are displayed automatically at the top of the page. No clicks, no settings, no downloads. The tool shows screen width, screen height, viewport dimensions, DPR, device type, OS, browser, and orientation — all in one place and updated live as you resize your browser window.
        </p>
        <h3>Method 2: Windows Display Settings</h3>
        <p>
          On <strong>Windows 10 or 11</strong>: Right-click the Desktop → Display Settings → Scroll down to "Display resolution." The dropdown shows your current resolution. Note that this shows the physical resolution scaled by Windows Display Scale setting — it may not match what web browsers report.
        </p>
        <h3>Method 3: macOS System Preferences</h3>
        <p>
          On <strong>macOS</strong>: Apple menu → System Preferences (or System Settings on macOS Ventura+) → Displays. The resolution shown is the scaled logical resolution. To see the physical pixel count, hold Option and click "Scaled" to see all available resolutions.
        </p>
        <h3>Method 4: Browser Developer Tools</h3>
        <p>
          In any browser, press <strong>F12</strong> (Windows) or <strong>Cmd+Option+I</strong> (Mac) to open DevTools. Click the device toolbar icon (or press Ctrl+Shift+M). The viewport dimensions are shown at the top. You can also type <code>window.screen.width</code> in the Console to get the screen width in CSS pixels.
        </p>
        <h3>Method 5: Mobile Device Settings</h3>
        <p>
          On <strong>Android</strong>: Settings → Display → Screen resolution (location varies by manufacturer). On <strong>iOS</strong>: Go to Settings → General → About — the display resolution is listed there. Or simply visit ScreenSizer on your mobile browser for instant detection.
        </p>

        <h2>Most Common Screen Resolutions in 2025</h2>
        <p>
          Based on global browser usage statistics compiled from multiple analytics sources in early 2025, here are the most prevalent screen resolutions across device categories:
        </p>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Resolution</th>
              <th>Device Category</th>
              <th>Global Share</th>
              <th>DPR</th>
            </tr>
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
        <p>
          For web developers and designers, understanding <em>what is my screen size</em> translates directly into better responsive design decisions. The goal of responsive design is not to target specific resolutions but to create fluid layouts that adapt gracefully across the full spectrum of viewport widths.
        </p>
        <h3>Standard CSS Breakpoints in 2025</h3>
        <p>
          Most modern CSS frameworks and design systems use these breakpoints as a starting point:
        </p>
        <ul>
          <li><strong>320px–479px</strong>: Extra small mobile (older iPhones, small Android)</li>
          <li><strong>480px–767px</strong>: Small mobile (standard smartphones)</li>
          <li><strong>768px–1023px</strong>: Tablet portrait (iPad, Android tablets)</li>
          <li><strong>1024px–1279px</strong>: Tablet landscape / small laptop</li>
          <li><strong>1280px–1535px</strong>: Standard desktop</li>
          <li><strong>1536px+</strong>: Large desktop / wide monitor</li>
        </ul>
        <p>
          Tailwind CSS uses: <code>sm: 640px</code>, <code>md: 768px</code>, <code>lg: 1024px</code>, <code>xl: 1280px</code>, <code>2xl: 1536px</code>. Bootstrap uses similar breakpoints but starts at 576px for small. Always use <Link href="/">ScreenSizer</Link> to verify which breakpoint is active on your test device.
        </p>

        <h2>Best Screen Resolutions for Different Devices</h2>
        <p>
          Different use cases call for different screen resolution recommendations. Here is a practical reference guide:
        </p>
        <h3>Best Resolution for Web Browsing</h3>
        <p>
          For desktop web browsing, <strong>1920×1080 (Full HD)</strong> remains the sweet spot — it is widely supported, sharp enough for most content, and does not require upscaling. For power users, <strong>2560×1440 (QHD)</strong> provides significantly more screen real estate without requiring 4K processing power.
        </p>
        <h3>Best Resolution for Video Editing</h3>
        <p>
          Professional video editors typically use <strong>2560×1440 or 3840×2160 (4K)</strong> monitors. The extra resolution allows for timeline clarity, color grading precision, and working in 4K without zooming. A 27-inch 4K monitor at normal viewing distance provides excellent pixel density without requiring scaling.
        </p>
        <h3>Best Resolution for Gaming</h3>
        <p>
          Gaming resolution depends on GPU power. For casual gaming: <strong>1920×1080</strong> at high settings on mid-range hardware. For competitive gaming: <strong>1920×1080 at 144Hz+</strong> for maximum frame rates. For immersive gaming: <strong>2560×1440 or 3840×2160</strong> with a high-end GPU.
        </p>
        <h3>Best Resolution for Mobile Web Development</h3>
        <p>
          Design your mobile breakpoints around <strong>375px</strong> (iPhone base), <strong>390px</strong> (iPhone 14/15), and <strong>412px</strong> (Pixel/Galaxy). Always test at <strong>320px</strong> as the minimum safe viewport width. Use <Link href="/">ScreenSizer</Link> on real devices to verify actual CSS viewport dimensions.
        </p>

        <h2>How Screen Resolution Affects Website Performance</h2>
        <p>
          Screen resolution and DPR directly impact several web performance metrics that affect both user experience and Google search rankings.
        </p>
        <h3>Image Optimization and Core Web Vitals</h3>
        <p>
          The most significant impact is on <strong>Largest Contentful Paint (LCP)</strong> — Google&apos;s measure of how quickly the main content of a page loads. High-DPR devices require larger image files for crisp rendering. Serving unoptimized images to Retina displays results in:
        </p>
        <ul>
          <li>Slower LCP scores (images take longer to download)</li>
          <li>Blurry hero images on mobile (when DPR is not accounted for)</li>
          <li>Wasted bandwidth on low-DPR devices (if only high-res images are served)</li>
        </ul>
        <p>
          The solution is <strong>responsive images</strong> using the <code>srcset</code> attribute:
        </p>
        <p>
          <code>{`<img src="image-800w.jpg" srcset="image-800w.jpg 800w, image-1600w.jpg 1600w" sizes="(max-width: 768px) 100vw, 50vw" alt="Description">`}</code>
        </p>

        <h2>Screen Resolution for Content Creators and Designers</h2>
        <p>
          If you create content for the web — whether you are a graphic designer, UI/UX designer, photographer, or video producer — understanding screen resolution is essential for delivering crisp, professional work.
        </p>
        <h3>Design Canvas Sizes for Web</h3>
        <p>
          When designing in Figma, Sketch, or Adobe XD, use these recommended artboard/frame sizes:
        </p>
        <ul>
          <li><strong>Desktop:</strong> 1440px width (scales well to 1280–1920)</li>
          <li><strong>Tablet:</strong> 768px or 820px width</li>
          <li><strong>Mobile:</strong> 390px width (iPhone 14 base), design to 375px minimum</li>
          <li><strong>Hero images:</strong> Export at 2× minimum for Retina display quality</li>
        </ul>
        <h3>Social Media Image Sizes</h3>
        <p>
          Social platforms render images at specific resolutions. For 2025, the key sizes are: Twitter/X header: 1500×500px, LinkedIn banner: 1584×396px, Instagram post: 1080×1080px, Facebook cover: 820×312px. Always check the platform&apos;s latest guidelines as these change frequently.
        </p>

        <h2>Frequently Asked Questions About Screen Size</h2>
        <p>
          We have compiled the most common questions about <em>what is my screen size</em> and related topics below.
        </p>

        <h3>Can two monitors have the same resolution but different sizes?</h3>
        <p>
          Yes — resolution and physical size are independent. A 24-inch and a 32-inch monitor can both have 1920×1080 resolution. The 32-inch will have lower pixel density (PPI — pixels per inch), meaning text and images appear larger but less sharp. Higher PPI = sharper display. Apple&apos;s Retina displays achieve very high PPI by using 2× pixel scaling.
        </p>
        <h3>Why does my screen size look different in DevTools?</h3>
        <p>
          Browser DevTools shows the CSS viewport size, which accounts for browser chrome (address bar, tabs, scrollbar) and OS display scaling. Your physical screen resolution is always larger. On a 1920×1080 monitor with a maximized browser, the CSS viewport might be 1903×969px — slightly smaller due to scrollbar width and browser UI elements.
        </p>
        <h3>What screen resolution do most people use?</h3>
        <p>
          In 2025, <strong>1920×1080 (Full HD)</strong> remains the single most common screen resolution globally, representing approximately 20–25% of all web sessions. However, mobile has overtaken desktop in total traffic share, with 390×844 and 412×915 being the top mobile viewport sizes.
        </p>
        <h3>Does screen resolution affect SEO?</h3>
        <p>
          Indirectly, yes. Screen resolution affects how users experience your site, which impacts Core Web Vitals (LCP, CLS, FID) — all of which are Google ranking signals. Sites that serve correctly sized images for each device&apos;s DPR load faster, score better on LCP, and rank higher. Mobile-first indexing means Google primarily uses your mobile viewport rendering for ranking.
        </p>

        {/* CTA within article */}
        <div className="bg-primary/8 border border-primary/20 rounded-xl p-6 my-8">
          <h3 className="text-base font-700 text-foreground mb-2">Check Your Screen Size Right Now</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Use our free tool to instantly detect your screen dimensions, viewport size, DPR, and device information — no download required.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground text-sm font-600 rounded-lg hover:opacity-90 active:scale-95 transition-all duration-150">
            
            Find Out What Is My Screen Size <ArrowRight size={14} />
          </Link>
        </div>

        {/* Internal links */}
        <h3>Related Guides on ScreenSizer</h3>
        <ul>
          <li><Link href="/">Screen Resolution Checker — Detect Your Screen Size Instantly</Link></li>
          <li><Link href="/">Viewport Size Tool — Check Your Browser Viewport Width</Link></li>
          <li><Link href="/">Device Pixel Ratio Checker — Is Your Screen Retina?</Link></li>
          <li><Link href="/blog">What Is Viewport Width? A Developer&apos;s Guide</Link></li>
          <li><Link href="/blog">CSS Breakpoints Guide 2025 — Tailwind, Bootstrap & Custom</Link></li>
        </ul>
      </div>
      {/* Share & tags footer */}
      <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {['Screen Size', 'Resolution', 'Viewport', 'DPR', 'Responsive Design', 'Web Performance']?.map((tag) =>
          <span key={`tag-${tag}`} className="px-2.5 py-1 bg-secondary text-xs font-500 text-secondary-foreground rounded-full border border-border">
              {tag}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Share2 size={13} />
          Share this article
          <button className="p-1.5 rounded hover:bg-secondary transition-colors" title="Share on Twitter"><TwitterIcon size={13} /></button>
          <button className="p-1.5 rounded hover:bg-secondary transition-colors" title="Share on LinkedIn"><LinkedinIcon size={13} /></button>
          <button className="p-1.5 rounded hover:bg-secondary transition-colors" title="Share on Facebook"><FacebookIcon size={13} /></button>
        </div>
      </div>
    </article>);

}
