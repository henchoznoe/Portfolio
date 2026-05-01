/**
 * File: app/layout.tsx
 * Description: Root layout for the app.
 * Author: Noé Henchoz
 * Copyright (c) 2026 Noé Henchoz
 */

import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import type { PropsWithChildren } from 'react'
import { DockMenu } from '@/components/dock-menu'
import { Footer } from '@/components/footer'
import { NavigationDock } from '@/components/navigation-dock'
import { CustomCursor } from '@/components/ui/custom-cursor'
import { LanguageProvider } from '@/lib/context/language-context'
import { ScrollProvider } from '@/lib/context/scroll-context'
import { TransitionProvider } from '@/lib/context/transition-context'
import { cn } from '@/lib/utils'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  description: 'High-end developer portfolio.',
  title: 'Developer Portfolio',
}

export default function RootLayout({ children }: PropsWithChildren) {
  const bodyClass = cn(
    inter.variable,
    jetbrainsMono.variable,
    'antialiased bg-background text-foreground',
  )

  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <body className={bodyClass} suppressHydrationWarning>
        <LanguageProvider>
          <ScrollProvider>
            <TransitionProvider>
              <CustomCursor />
              {children}
              <Footer />
              <DockMenu />
              <NavigationDock />
            </TransitionProvider>
          </ScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
