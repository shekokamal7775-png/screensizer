import React from 'react';

interface AppImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function AppImage({ src, alt, width = 800, height = 600, className }: AppImageProps) {
  return (
    <img src={src} alt={alt} width={width} height={height} className={className} />
  );
}
