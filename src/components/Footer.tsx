import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
      <div className="max-w-screen-xl mx-auto px-4">
        <p>© {new Date().getFullYear()} ScreenSizer. All rights reserved.</p>
      </div>
    </footer>
  );
}
