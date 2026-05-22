'use client';
import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 'post-1',
    title: 'What Is My Screen Size? A Complete Guide for 2025',
    excerpt: 'Learn how to find your exact screen dimensions, resolution, and aspect ratio using built-in tools, online checkers, or manual calculations.',
    image: '/app_logo.png',
    category: 'Guide',
    date: 'Mar 15, 2025',
    readTime: '8 min read',
    href: '/blog/what-is-my-screen-size',
  },
  {
    id: 'post-2',
    title: 'Viewport vs. Screen Resolution: Key Differences',
    excerpt: 'Understanding the difference between CSS viewport and physical screen resolution is crucial for responsive web design.',
    image: '/app_logo.png',
    category: 'Web Dev',
    date: 'Mar 12, 2025',
    readTime: '6 min read',
    href: '/blog/viewport-vs-resolution',
  },
  {
    id: 'post-3',
    title: 'Device Pixel Ratio Explained (Retina & HiDPI)',
    excerpt: 'What is DPR? How does it affect image quality and responsive design on modern devices like MacBooks and iPhones?',
    image: '/app_logo.png',
    category: 'Performance',
    date: 'Mar 10, 2025',
    readTime: '10 min read',
    href: '/blog/device-pixel-ratio',
  },
  {
    id: 'post-4',
    title: 'CSS Breakpoints 2025: The Definitive Guide',
    excerpt: 'Best practices for setting responsive breakpoints for phones, tablets, laptops, and ultra-wide monitors.',
    image: '/app_logo.png',
    category: 'CSS',
    date: 'Mar 8, 2025',
    readTime: '12 min read',
    href: '/blog/css-breakpoints',
  },
  {
    id: 'post-5',
    title: 'Mobile Screen Sizes: 2025 Data Analysis',
    excerpt: 'The most common mobile screen resolutions from real-world data to help you prioritize responsive testing.',
    image: '/app_logo.png',
    category: 'Mobile',
    date: 'Mar 5, 2025',
    readTime: '7 min read',
    href: '/blog/mobile-screen-sizes',
  },
  {
    id: 'post-6',
    title: '4K vs 1080p: What Web Developers Need to Know',
    excerpt: 'How to design and optimize images for high-resolution displays without sacrificing performance.',
    image: '/app_logo.png',
    category: 'Performance',
    date: 'Mar 1, 2025',
    readTime: '9 min read',
    href: '/blog/4k-vs-1080p',
  },
];

export default function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <article
          key={post.id}
          className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <Link href={post.href} className="block">
            <div className="aspect-video bg-secondary relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs font-600 px-2 py-1 rounded-md backdrop-blur-sm">
                {post.category}
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-lg font-700 text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-600 text-primary">
                Read more <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
