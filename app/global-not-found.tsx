import type { Metadata } from 'next'
import './globals.css'
import { button, container, eyebrow, textLink, wordmark } from '@/lib/styles'
import { cn } from '@/lib/utils/cn'
export const metadata: Metadata = {
  title: '404 — Noé Henchoz',
  robots: { index: false, follow: false },
}
export default function NotFound() {
  return (
    <html lang="fr">
      <body>
        <main className={cn(container, 'pt-[50px] pb-20 min-[600px]:pt-20')}>
          <a className={wordmark} href="/fr">
            N<span>/</span>H
          </a>
          <p className={cn(eyebrow, 'mt-[100px] mb-5 text-accent')}>404</p>
          <h1 className="text-[clamp(36px,5vw,70px)] leading-[1.2] tracking-[-0.04em]">
            Cette page a pris
            <br />
            un autre chemin.
          </h1>
          <p className="mt-5 text-muted" lang="en">
            This page could not be found.
          </p>
          <div className="mt-[30px] flex flex-wrap items-center gap-7">
            <a className={button} href="/fr">
              Accueil en français
            </a>
            <a className={textLink} href="/en" lang="en">
              English home →
            </a>
          </div>
        </main>
      </body>
    </html>
  )
}
