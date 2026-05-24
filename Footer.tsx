import React from 'react';
import Link from 'next/link';
import { Monitor, Rss } from 'lucide-react';

const TwitterIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const toolLinks = [
  { label: 'Screen Size Checker', href: '/#tool' },
  { label: 'Viewport Size Tool', href: '/#tool' },
  { label: 'Device Pixel Ratio', href: '/#tool' },
  { label: 'Browser Window Size', href: '/#tool' },
  { label: 'Device Type Detector', href: '/#tool' },
];

const contentLinks = [
  { label: 'What Is My Screen Size?', href: '/blog' },
  { label: 'Screen Resolution Guide', href: '/blog' },
  { label: 'Viewport vs Screen Size', href: '/blog' },
  { label: 'DPR Explained', href: '/blog' },
  { label: 'Best Resolutions 2025', href: '/blog' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/privacy-policy' },
  { label: 'Disclaimer', href: '/privacy-policy' },
  { label: 'About Us', href: '/' },
  { label: 'Contact Us', href: '/' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/app_logo.png" alt="ScreenSizer Logo" width={32} height={32} />
              <span className="font-bold text-base text-foreground">ScreenSizer</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              The fastest, most accurate free online screen size and resolution detection tool. Trusted by developers, designers, and QA testers worldwide.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://twitter.com/screensizer" aria-label="ScreenSizer on Twitter" className="p-2 rounded-lg bg-card text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-150 border border-border">
                <TwitterIcon size={16} />
              </a>
              <a href="https://github.com/screensizer" aria-label="ScreenSizer on GitHub" className="p-2 rounded-lg bg-card text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-150 border border-border">
                <GithubIcon size={16} />
              </a>
              <a href="/blog" aria-label="ScreenSizer Blog RSS" className="p-2 rounded-lg bg-card text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-150 border border-border">
                <Rss size={16} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-700 text-foreground uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Monitor size={14} className="text-primary" />
              Free Tools
            </h3>
            <ul className="space-y-2.5">
              {toolLinks?.map((link) => (
                <li key={`footer-tool-${link?.label}`}>
                  <Link href={link?.href} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-150">
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-700 text-foreground uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2.5">
              {contentLinks?.map((link) => (
                <li key={`footer-content-${link?.label}`}>
                  <Link href={link?.href} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-150">
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-700 text-foreground uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2.5">
              {legalLinks?.map((link) => (
                <li key={`footer-legal-${link?.label}`}>
                  <Link href={link?.href} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-150">
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">© 2025 ScreenSizer. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Built for developers, designers & QA teams. Free forever.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
            <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms</Link>
            <Link href="/blog" className="text-xs text-muted-foreground hover:text-primary transition-colors">Blog</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
