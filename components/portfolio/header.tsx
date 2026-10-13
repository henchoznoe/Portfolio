'use client'

import { ArrowUpRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import type { copy, Locale } from '@/lib/config/portfolio'
import { container, wordmark } from '@/lib/styles'
import { cn } from '@/lib/utils/cn'

interface HeaderProps {
  locale: Locale
  labels: (typeof copy)['fr']['nav']
}

export const Header = ({ locale, labels }: Readonly<HeaderProps>) => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [section, setSection] = useState('')
  const menuButton = useRef<HTMLButtonElement>(null)
  const otherLocale = locale === 'fr' ? 'en' : 'fr'
  const alternate = pathname
    .replace(/^\/(fr|en)/, `/${otherLocale}`)
    .replace(
      /\/(projets|projects)\//,
      otherLocale === 'fr' ? '/projets/' : '/projects/',
    )
  const links = [
    { id: 'projects', label: labels.projects },
    { id: 'about', label: labels.about },
    { id: 'skills', label: labels.skills },
  ]

  useEffect(() => {
    if (pathname !== `/${locale}`) return
    const updateSection = () => {
      const current = [
        'home',
        'projects',
        'about',
        'skills',
        'life',
        'contact',
      ].findLast(id => {
        const element = document.getElementById(id)
        return (
          element &&
          element.getBoundingClientRect().top <= window.innerHeight / 3
        )
      })
      setSection(current && current !== 'home' ? `#${current}` : '')
    }
    updateSection()
    window.addEventListener('scroll', updateSection, { passive: true })
    window.addEventListener('hashchange', updateSection)
    return () => {
      window.removeEventListener('scroll', updateSection)
      window.removeEventListener('hashchange', updateSection)
    }
  }, [locale, pathname])

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      menuButton.current?.focus()
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [open])

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/96">
      <div
        className={cn(
          container,
          'flex h-[calc(var(--header-height)-1px)] items-center justify-between gap-8',
        )}
      >
        <Link
          href={`/${locale}`}
          className={wordmark}
          aria-label={`N/H — ${labels.home}`}
          onClick={() => setOpen(false)}
        >
          N<span>/</span>H
        </Link>
        <nav
          className="ml-auto hidden gap-6.5 min-[600px]:flex min-[820px]:mr-5 min-[820px]:gap-5.5 min-[1100px]:mr-16 min-[1100px]:gap-8 [&>a]:text-[13px] [&>a]:transition-colors [&>a]:duration-200 [&>a:hover]:text-accent"
          aria-label={labels.label}
        >
          {links.map(link => (
            <Link key={link.id} href={`/${locale}#${link.id}`}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-5 min-[600px]:gap-5.5 min-[1100px]:gap-8">
          <a
            className="inline-flex min-h-11 items-center gap-2 font-mono text-[11px] hover:text-accent"
            href={`${alternate}${pathname === `/${locale}` ? section : ''}`}
            hrefLang={otherLocale}
            lang={otherLocale}
            aria-label={`${locale.toUpperCase()} / ${otherLocale.toUpperCase()} — ${otherLocale === 'en' ? 'Read in English' : 'Lire en français'}`}
            onClick={() => {
              const secure =
                window.location.protocol === 'https:' ? '; Secure' : ''
              // biome-ignore lint/suspicious/noDocumentCookie: Keep language preferences compatible with browsers without the Cookie Store API.
              document.cookie = `portfolio-locale=${otherLocale}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`
            }}
          >
            <span className="font-bold">{locale.toUpperCase()}</span>
            <span aria-hidden="true" className="text-[#7c879a]">
              /
            </span>
            <span>{otherLocale.toUpperCase()}</span>
          </a>
          <Link
            className="hidden items-center gap-3.5 border-b border-ink py-2.5 text-[13px] min-[820px]:inline-flex [&_svg]:transition-transform [&_svg]:duration-250 [&:hover_svg]:translate-x-0.5 [&:hover_svg]:-translate-y-0.5"
            href={`/${locale}#contact`}
          >
            {labels.contact}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <button
            ref={menuButton}
            className="flex border-0 bg-transparent py-2.5 pl-2.5 min-[600px]:hidden"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? labels.close : labels.menu}
            onClick={() => setOpen(value => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-menu"
        className="absolute inset-x-0 top-full border-y border-line bg-paper px-6 pt-2.5 pb-6 shadow-[0_12px_20px_rgb(30_41_59/6%)] min-[600px]:hidden [&>a]:flex [&>a]:justify-between [&>a]:py-3.75"
        aria-label={labels.label}
        hidden={!open}
      >
        {[...links, { id: 'contact', label: labels.contact }].map(link => (
          <Link
            key={link.id}
            href={`/${locale}#${link.id}`}
            onClick={() => setOpen(false)}
          >
            {link.label}
            <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        ))}
      </nav>
    </header>
  )
}
