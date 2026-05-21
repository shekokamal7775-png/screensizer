'use client';
import { useEffect, useState } from 'react';

export default function MetricsGrid() {
  const [info, setInfo] = useState({ width: 0, height: 0, ratio: 1 });

  useEffect(() => {
    setInfo({
      width: window.screen.width,
      height: window.screen.height,
      ratio: window.devicePixelRatio,
    });
  }, []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 py-10 max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <p className="text-sm text-gray-500">Width</p>
        <p className="text-3xl font-bold text-blue-600">{info.width}px</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <p className="text-sm text-gray-500">Height</p>
        <p className="text-3xl font-bold text-blue-600">{info.height}px</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <p className="text-sm text-gray-500">Pixel Ratio</p>
        <p className="text-3xl font-bold text-blue-600">{info.ratio}x</p>
      </div>
    </section>
  );
}
