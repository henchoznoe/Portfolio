/**
 * File: app/layout.tsx
 * Description: Root layout for the app.
 * Author: Noé Henchoz
 * Copyright (c) 2026 Noé Henchoz
 */

import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import type { PropsWithChildren } from 'react'
import { siteConfig } from '@/lib/config/portfolio'
import { cn } from '@/lib/utils/cn'
import './globals.css'

const openSans = localFont({
  src: [
    { path: './fonts/open-sans-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/open-sans-600.woff2', weight: '600', style: 'normal' },
    { path: './fonts/open-sans-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'technology',
  classification: 'Portfolio de développement web et ingénierie logicielle',
  alternates: {
    canonical: '/',
    languages: {
      'fr-CH': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: '/',
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1731,
        height: 909,
        alt: 'Noé Henchoz — Portfolio de développement full-stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f1efe8' },
    { media: '(prefers-color-scheme: dark)', color: '#161612' },
  ],
}

export default function RootLayout({ children }: PropsWithChildren) {
  const bodyClass = cn(
    openSans.variable,
    'antialiased bg-background text-foreground',
  )

  return (
    <html lang={siteConfig.language}>
      <body className={bodyClass} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
