'use client';
import { useEffect, useState } from 'react';

export default function DeviceInfoCards() {
  const [info, setInfo] = useState({ colorDepth: 0, orientation: '', touchPoints: 0 });

  useEffect(() => {
    setInfo({
      colorDepth: window.screen.colorDepth,
      orientation: screen.orientation?.type || 'unknown',
      touchPoints: navigator.maxTouchPoints,
    });
  }, []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 py-10 max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <p className="text-sm text-gray-500">Color Depth</p>
        <p className="text-2xl font-bold text-blue-600">{info.colorDepth}-bit</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <p className="text-sm text-gray-500">Orientation</p>
        <p className="text-2xl font-bold text-blue-600">{info.orientation}</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <p className="text-sm text-gray-500">Touch Points</p>
        <p className="text-2xl font-bold text-blue-600">{info.touchPoints}</p>
      </div>
    </section>
  );
}
