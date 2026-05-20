import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 'post-001',
    slug: 'viewport-vs-screen-resolution',
    title: 'Viewport vs Screen Resolution: What Every Developer Must Know',
    excerpt: 'The difference between viewport size and screen resolution confuses even experienced developers. This guide breaks down both concepts with practical examples and code snippets.',
    category: 'Web Development',
    categoryColor: 'bg-primary/10 text-primary',
    readTime: '8 min read',
    date: 'May 10, 2025',
    image: '/assets/images/app_logo.png',
    imageAlt: 'Side-by-side comparison diagram showing viewport dimensions versus physical screen resolution on a laptop display with measurement annotations',
  },
  {
    id: 'post-002',
    slug: 'device-pixel-ratio-guide',
    title: 'Device Pixel Ratio Explained: Retina, HiDPI & Image Optimization',
    excerpt: 'DPR determines whether your images look crisp or blurry on modern screens. Learn how to detect DPR, serve the right image assets, and optimize for Core Web Vitals.',
    category: 'Performance',
    categoryColor: 'bg-success/10 text-success',
    readTime: '11 min read',
    date: 'May 7, 2025',
    image: '/assets/images/app_logo.png',
    imageAlt: 'Zoomed comparison showing a blurry image on a Retina display versus a sharp 2x optimized image, demonstrating Device Pixel Ratio effects',
  },
  {
    id: 'post-003',
    slug: 'responsive-design-breakpoints-2025',
    title: 'CSS Breakpoints in 2025: Tailwind, Bootstrap & Custom Strategies',
    excerpt: 'Which breakpoints should you use in 2025? We analyzed the top 10,000 websites, global device usage data, and framework defaults to give you the definitive answer.',
    category: 'CSS',
    categoryColor: 'bg-accent/10 text-accent',
    readTime: '9 min read',
    date: 'May 4, 2025',
    image: '/assets/images/app_logo.png',
    imageAlt: 'Code editor showing CSS media query breakpoints with a responsive layout preview across mobile, tablet, and desktop viewport widths',
  },
  {
    id: 'post-004',
    slug: 'screen-resolution-seo-core-web-vitals',
    title: 'How Screen Resolution Impacts SEO and Core Web Vitals',
    excerpt: 'Google uses Core Web Vitals as ranking signals — and screen resolution directly affects LCP, CLS, and FID. Learn how to optimize for all device sizes and boost your rankings.',
    category: 'SEO',
    categoryColor: 'bg-warning/15 text-warning',
    readTime: '12 min read',
    date: 'Apr 29, 2025',
    image: '/assets/images/app_logo.png',
    imageAlt: 'Google PageSpeed Insights score dashboard showing LCP and CLS metrics improving after implementing responsive image optimization for multiple screen resolutions',
  },
  {
    id: 'post-005',
    slug: 'best-monitor-resolutions-2025',
    title: 'Best Monitor Resolutions for 2025: 1080p vs 1440p vs 4K Compared',
    excerpt: 'Is 4K worth it in 2025? We compare 1080p, 1440p, and 4K monitors across gaming, productivity, content creation, and budget use cases with real-world performance data.',
    category: 'Hardware',
    categoryColor: 'bg-danger/10 text-danger',
    readTime: '10 min read',
    date: 'Apr 24, 2025',
    image: '/assets/images/app_logo.png',
    imageAlt: 'Three monitors side by side showing 1080p, 1440p, and 4K resolution text sharpness comparison on a desk setup with productivity software open',
  },
  {
    id: 'post-006',
    slug: 'mobile-screen-sizes-2025',
    title: 'Most Popular Mobile Screen Sizes in 2025 (Data-Backed Analysis)',
    excerpt: 'We analyzed over 500 million mobile sessions to identify the most common smartphone screen sizes, CSS viewport widths, and DPR values for 2025 — with design recommendations.',
    category: 'Mobile',
    categoryColor: 'bg-primary/10 text-primary',
    readTime: '7 min read',
    date: 'Apr 20, 2025',
    image: '/assets/images/app_logo.png',
    imageAlt: 'Data visualization chart showing distribution of mobile screen widths from 320px to 430px with iPhone and Android device labels at each peak',
  },
];

export default function BlogGrid() {
  return (
    <section aria-labelledby="blog-grid-heading">
      <div className="flex items-center justify-between mb-6">
        <h2 id="blog-grid-heading" className="text-lg font-700 text-foreground">More Articles</h2>
        <span className="text-xs text-muted-foreground">{posts?.length} articles</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts?.map((post) => (
          <article
            key={post?.id}
            className="bg-card border border-border rounded-xl overflow-hidden card-shadow hover:card-shadow-hover hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
          >
            <div className="relative h-40 bg-secondary overflow-hidden">
              <AppImage
                src={post?.image}
                alt={post?.imageAlt}
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute top-3 left-3">
                <span className={`text-xs font-600 px-2.5 py-1 rounded-full ${post?.categoryColor} backdrop-blur-sm bg-opacity-90`}>
                  {post?.category}
                </span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-muted-foreground">{post?.date}</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock size={11} />
                  {post?.readTime}
                </span>
              </div>
              <h3 className="text-sm font-700 text-foreground mb-2 leading-tight line-clamp-2">{post?.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed flex-1 line-clamp-3 mb-4">{post?.excerpt}</p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-xs font-600 text-primary hover:underline mt-auto"
              >
                Read Article <ArrowRight size={12} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}