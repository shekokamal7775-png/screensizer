'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Mail, TrendingUp, Tag, ArrowRight, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

interface SidebarNewsletterForm {
  email: string;
}

const trendingPosts = [
  { id: 'trend-1', title: 'What Is My Screen Size? Complete 2025 Guide', readTime: '14 min', href: '/blog' },
  { id: 'trend-2', title: 'Viewport vs Screen Resolution Explained', readTime: '8 min', href: '/blog' },
  { id: 'trend-3', title: 'Device Pixel Ratio: Retina & HiDPI Guide', readTime: '11 min', href: '/blog' },
  { id: 'trend-4', title: 'CSS Breakpoints 2025: The Definitive Guide', readTime: '9 min', href: '/blog' },
  { id: 'trend-5', title: 'Mobile Screen Sizes: 2025 Data Analysis', readTime: '7 min', href: '/blog' },
];

const categories = [
  { id: 'cat-web-dev', name: 'Web Development', count: 12, color: 'bg-primary/10 text-primary' },
  { id: 'cat-performance', name: 'Performance', count: 8, color: 'bg-success/10 text-success' },
  { id: 'cat-css', name: 'CSS & Layout', count: 10, color: 'bg-accent/10 text-accent' },
  { id: 'cat-seo', name: 'SEO', count: 6, color: 'bg-warning/15 text-warning' },
  { id: 'cat-mobile', name: 'Mobile Design', count: 9, color: 'bg-primary/10 text-primary' },
  { id: 'cat-hardware', name: 'Hardware', count: 5, color: 'bg-danger/10 text-danger' },
];

const keywords = [
  'what is my screen size', 'screen resolution', 'viewport width', 'device pixel ratio',
  'responsive design', '1920x1080', 'retina display', 'CSS breakpoints', '4K resolution',
  'mobile viewport', 'HiDPI', 'window size', 'browser viewport', 'screen size checker',
];

export default function BlogSidebar() {
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<SidebarNewsletterForm>();

  const onSubmit = () => {
    setLoading(true);
    // BACKEND INTEGRATION: POST /api/newsletter
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      toast.success('Subscribed successfully!');
    }, 900);
  };

  return (
    <aside className="space-y-6 lg:sticky lg:top-24">
      {/* Ad slot */}
      <div className="bg-secondary/60 border border-dashed border-border rounded-xl flex items-center justify-center h-[250px] text-xs text-muted-foreground/40 select-none">
        {/* AdSense slot: sidebar-top */}
        Advertisement
      </div>

      {/* Newsletter */}
      <div className="bg-card border border-border rounded-xl p-5 card-shadow">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 bg-primary/10 rounded-lg">
            <Mail size={14} className="text-primary" />
          </div>
          <h3 className="text-sm font-700 text-foreground">Weekly Screen Tips</h3>
        </div>
        <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
          Get screen resolution guides, responsive design tips, and web performance articles in your inbox.
        </p>
        {subscribed ? (
          <div className="flex items-center gap-2 py-2">
            <CheckCircle size={15} className="text-success" />
            <span className="text-xs font-600 text-success">Subscribed! Thank you.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <label htmlFor="sidebar-email" className="sr-only">Email address</label>
            <input
              id="sidebar-email"
              type="email"
              placeholder="your@email.com"
              {...register('email', {
                required: 'Required',
                pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
              })}
              className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 mb-2 transition-all"
            />
            {errors.email && <p className="text-xs text-danger mb-2">{errors.email.message}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-primary text-primary-foreground text-xs font-600 rounded-lg hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-1.5 disabled:opacity-60"
            >
              {loading ? (
                <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>Subscribe Free <ArrowRight size={12} /></>
              )}
            </button>
          </form>
        )}
      </div>

      {/* Trending posts */}
      <div className="bg-card border border-border rounded-xl p-5 card-shadow">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={14} className="text-primary" />
          <h3 className="text-sm font-700 text-foreground">Trending Articles</h3>
        </div>
        <ol className="space-y-3">
          {trendingPosts.map((post, i) => (
            <li key={post.id} className="flex items-start gap-3">
              <span className="metric-value text-xl font-800 text-primary/20 leading-none min-w-[24px]">{i + 1}</span>
              <div>
                <Link href={post.href} className="text-xs font-600 text-foreground hover:text-primary transition-colors leading-tight block mb-0.5">
                  {post.title}
                </Link>
                <span className="text-xs text-muted-foreground">{post.readTime} read</span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Categories */}
      <div className="bg-card border border-border rounded-xl p-5 card-shadow">
        <div className="flex items-center gap-2 mb-4">
          <Tag size={14} className="text-accent" />
          <h3 className="text-sm font-700 text-foreground">Categories</h3>
        </div>
        <div className="space-y-2">
          {categories.map((cat) => (
            <div key={cat.id} className="flex items-center justify-between">
              <Link href="/blog" className="flex items-center gap-2 text-xs text-secondary-foreground hover:text-primary transition-colors">
                <span className={`w-2 h-2 rounded-full ${cat.color.split(' ')[0]}`} />
                {cat.name}
              </Link>
              <span className={`text-xs font-600 px-2 py-0.5 rounded-full ${cat.color}`}>{cat.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Keywords / Tags */}
      <div className="bg-card border border-border rounded-xl p-5 card-shadow">
        <h3 className="text-sm font-700 text-foreground mb-4">Popular Keywords</h3>
        <div className="flex flex-wrap gap-2">
          {keywords.map((kw) => (
            <Link
              key={`kw-${kw}`}
              href="/blog"
              className="text-xs px-2.5 py-1 bg-secondary border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-150"
            >
              {kw}
            </Link>
          ))}
        </div>
      </div>

      {/* Second ad slot */}
      <div className="bg-secondary/60 border border-dashed border-border rounded-xl flex items-center justify-center h-[200px] text-xs text-muted-foreground/40 select-none">
        {/* AdSense slot: sidebar-bottom */}
        Advertisement
      </div>

      {/* Tool CTA */}
      <div className="bg-gradient-primary rounded-xl p-5 text-white">
        <h3 className="text-sm font-700 mb-2">Check Your Screen Size</h3>
        <p className="text-xs text-white/80 mb-4 leading-relaxed">
          Instantly detect your screen resolution, viewport, DPR, and device info — free, no sign-up.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 w-full justify-center py-2 bg-white text-primary text-xs font-700 rounded-lg hover:bg-white/90 active:scale-95 transition-all"
        >
          Detect My Screen <ArrowRight size={12} />
        </Link>
      </div>
    </aside>
  );
}