import React from 'react'
import type { Metadata } from 'next'
import '../../tailwind.css'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'ScreenSizer',
  description: 'Screen size detector'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  )
}
