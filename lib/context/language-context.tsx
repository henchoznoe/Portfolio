'use client'

import { translations, type Language, type TranslationType } from '@/lib/i18n/translations'
import { createContext, useContext, useEffect, useState } from 'react'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationType
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Check localStorage first
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && (savedLang === 'en' || savedLang === 'fr')) {
      setLanguageState(savedLang)
    } else {
      // Check browser language
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('fr')) {
        setLanguageState('fr')
      }
    }
    setIsLoaded(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  // Prevent hydration mismatch by rendering children only after checking language
  // Or render with default 'en' but accept it might flicker.
  // For a portfolio, a quick flicker is better than no content.
  // However, to be cleaner, we can just render.

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] as TranslationType }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
