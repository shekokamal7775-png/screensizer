import React from 'react';

interface AppLogoProps {
  size?: number;
  className?: string;
}

export default function AppLogo({ size = 32, className }: AppLogoProps) {
  return (
    <img
      src="/app_logo.png"
      alt="ScreenSizer Logo"
      width={size}
      height={size}
      className={className}
    />
  );
}
