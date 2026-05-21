'use client';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

  useEffect(() => {
    setDimensions({ w: window.screen.width, h: window.screen.height });
  }, []);

  return (
    <section className="py-16 px-6 text-center bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Your Screen Size
      </h1>
      <p className="text-6xl font-bold text-blue-600 my-6">
        {dimensions.w} × {dimensions.h}
      </p>
      <p className="text-gray-500">pixels</p>
    </section>
  );
}
