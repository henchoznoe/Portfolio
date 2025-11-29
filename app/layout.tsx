import { DockMenu } from '@/components/dock-menu'
import { Footer } from '@/components/footer'
import { NavigationDock } from '@/components/navigation-dock'
import { SmoothScroll } from '@/components/smooth-scroll'
import { CustomCursor } from '@/components/ui/custom-cursor'
import { LanguageProvider } from '@/lib/context/language-context'
import { cn } from '@/lib/utils'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import type { PropsWithChildren } from 'react'
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
        <html className="dark" lang="en">
            <body className={bodyClass}>
                <LanguageProvider>
                    <SmoothScroll />
                    <CustomCursor />
                    {children}
                    <Footer />
                    <DockMenu />
                    <NavigationDock />
                    <SpeedInsights />
                </LanguageProvider>
            </body>
        </html>
    )
}
