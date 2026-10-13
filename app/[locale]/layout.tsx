import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import { Header } from '@/components/portfolio/header'
import { copy, isLocale, locales, siteConfig } from '@/lib/config/portfolio'
import '../globals.css'

const manrope = localFont({
  src: '../fonts/manrope-variable.ttf',
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  manifest: '/manifest.webmanifest',
  icons: { icon: '/icon', apple: '/apple-icon' },
}

export const viewport: Viewport = {
  themeColor: '#f7f9fc',
  colorScheme: 'light',
}

export const generateStaticParams = () => locales.map(locale => ({ locale }))
export const dynamicParams = false

interface LocaleLayoutProps {
  children: ReactNode
  params: Promise<{ locale: string }>
}

const LocaleLayout = async ({
  children,
  params,
}: Readonly<LocaleLayoutProps>) => {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return (
    <html lang={locale} className={manrope.variable}>
      <body>
        <a
          className="fixed -top-25 left-4 z-100 bg-accent p-3.5 text-white focus:top-3"
          href="#main-content"
        >
          {copy[locale].nav.skip}
        </a>
        <Header locale={locale} labels={copy[locale].nav} />
        {children}
      </body>
    </html>
  )
}

export default LocaleLayout
