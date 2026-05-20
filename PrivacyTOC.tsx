'use client';
import React, { useState, useEffect } from 'react';
import { List } from 'lucide-react';

const sections = [
  { id: 'information-we-collect', label: '1. Information We Collect' },
  { id: 'how-we-use-information', label: '2. How We Use Information' },
  { id: 'cookies', label: '3. Cookies & Tracking' },
  { id: 'google-adsense', label: '4. Google AdSense' },
  { id: 'google-analytics', label: '5. Google Analytics' },
  { id: 'third-party-links', label: '6. Third-Party Links' },
  { id: 'data-retention', label: '7. Data Retention' },
  { id: 'your-rights', label: '8. Your Rights (GDPR)' },
  { id: 'childrens-privacy', label: "9. Children\'s Privacy" },
  { id: 'changes', label: '10. Changes to Policy' },
  { id: 'contact', label: '11. Contact Us' },
];

export default function PrivacyTOC() {
  const [active, setActive] = useState('information-we-collect');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    sections?.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer?.observe(el);
    });
    return () => observer?.disconnect();
  }, []);

  return (
    <nav aria-label="Privacy policy table of contents" className="lg:sticky lg:top-24">
      <div className="bg-card border border-border rounded-xl p-5 card-shadow">
        <div className="flex items-center gap-2 mb-4">
          <List size={14} className="text-primary" />
          <h2 className="text-sm font-700 text-foreground">Contents</h2>
        </div>
        <ol className="space-y-1">
          {sections?.map((s) => (
            <li key={`toc-${s?.id}`}>
              <a
                href={`#${s?.id}`}
                className={`block text-xs py-1.5 px-2 rounded-lg transition-all duration-150 leading-tight ${
                  active === s?.id
                    ? 'bg-primary/10 text-primary font-600' :'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {s?.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}