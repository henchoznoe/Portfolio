'use client'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Globe, Mail } from 'lucide-react'
import type { ReactNode } from 'react'
import { useState } from 'react'
import { useLanguage } from '@/lib/context/language-context'
import { cn } from '@/lib/utils'

export const DockMenu = () => {
  const { t, setLanguage, language } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en')
  }

  return (
    <div className="pointer-events-none fixed top-4 right-4 md:top-8 md:right-8 z-50 flex items-start justify-end">
      <div className="pointer-events-auto flex items-start px-2 md:px-4">
        <div className="mx-auto flex items-center gap-2 md:gap-3 rounded-full border border-white/10 bg-black/40 p-1.5 md:p-2 backdrop-blur-2xl shadow-2xl">
          <DockIcon label={t.dock.github} href="https://github.com/henchoznoe">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-white/80 w-4 h-4 md:w-5 md:h-5"
            />
          </DockIcon>
          <DockIcon
            label={t.dock.linkedin}
            href="https://linkedin.com/in/henchoznoe"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white/80 w-4 h-4 md:w-5 md:h-5"
            />
          </DockIcon>
          <DockIcon label={t.dock.email} href="mailto:henchoznoe@gmail.com">
            <Mail className="text-white/80 w-4 h-4 md:w-5 md:h-5" />
          </DockIcon>

          {/* Separator */}
          <div className="h-4 w-px bg-white/10 mx-0.5 md:mx-1" />

          <DockIcon label={t.dock.translate} onClick={toggleLanguage}>
            <Globe className="text-white/80 w-4 h-4 md:w-5 md:h-5" />
          </DockIcon>
        </div>
      </div>
    </div>
  )
}

const DockIcon = ({
  children,
  label,
  href,
  onClick,
}: {
  children: ReactNode
  label: string
  href?: string
  onClick?: () => void
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    if (href) {
      window.open(href, '_blank')
    } else if (onClick) {
      onClick()
    }
  }

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div
        className={cn(
          'absolute top-full mt-2 left-1/2 -translate-x-1/2 rounded-md border border-white/10 bg-black/80 px-2 py-1 text-[10px] text-white backdrop-blur-md transition-all duration-200 whitespace-nowrap',
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2',
        )}
      >
        {label}
      </div>

      <button
        type="button"
        className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-200 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  )
}
