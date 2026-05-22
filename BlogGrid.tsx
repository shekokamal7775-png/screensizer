import React from 'react';

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
