import React from 'react';

export default function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur py-4">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between">
        <a href="/" className="text-xl font-800 tracking-tight text-foreground">
          Screen<span className="text-primary">Sizer</span>
        </a>
        <nav className="flex items-center gap-6 text-sm font-500 text-muted-foreground">
          <a href="/" className="hover:text-foreground transition-colors">Home</a>
          <a href="/privacy-policy" className="text-foreground transition-colors">Privacy Policy</a>
        </nav>
      </div>
    </header>
  );
}
