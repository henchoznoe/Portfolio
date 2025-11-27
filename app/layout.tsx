import { DockFooter } from '@/components/dock-footer'
import { SmoothScroll } from '@/components/smooth-scroll'
import { CustomCursor } from '@/components/ui/custom-cursor'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { PropsWithChildren } from 'react'
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
    return (
        <html className="dark" lang="en">
            <body className={cn(inter.variable, jetbrainsMono.variable, 'antialiased bg-background text-foreground')}>
                <SmoothScroll />
                <CustomCursor />
                {children}
                <DockFooter />
            </body>
        </html>
    )
}