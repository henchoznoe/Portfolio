'use client'

import { useLanguage } from '@/lib/context/language-context'
import { useScrollContext } from '@/lib/context/scroll-context'
import { useTransition } from '@/lib/context/transition-context'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { Code2, Folder, Home, User } from 'lucide-react'
import { useEffect, useState } from 'react'

export const NavigationDock = () => {
    const [activeSection, setActiveSection] = useState('home')
    const [hoveredId, setHoveredId] = useState<string | null>(null)
    const { t } = useLanguage()
    const { lenis } = useScrollContext()
    const { startTransition } = useTransition()

    const navItems = [
        { id: 'home', label: t.nav.home, icon: Home },
        { id: 'about', label: t.nav.about, icon: User },
        { id: 'projects', label: t.nav.projects, icon: Folder },
        { id: 'skills', label: t.nav.skills, icon: Code2 },
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                // Ajustement de la zone de détection pour mobile
                rootMargin: '-50% 0px -50% 0px',
            }
        )

        navItems.forEach((item) => {
            const element = document.getElementById(item.id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [navItems])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element && lenis) {
            startTransition(() => {
                lenis.scrollTo(element, { immediate: true })
            })
        }
    }

    return (
        /* Changement ici : 'hidden md:flex' devient 'flex' pour l'afficher sur mobile */
        /* bottom-6 sur mobile, bottom-8 sur desktop pour l'esthétique */
        <div className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center w-full px-4 pointer-events-none">
            <div className="pointer-events-auto flex items-center gap-4 md:gap-3 rounded-full border border-white/10 bg-black/40 p-2 md:p-2 backdrop-blur-2xl shadow-2xl">
                {navItems.map((item) => {
                    const isActive = activeSection === item.id
                    const Icon = item.icon
                    const isHovered = hoveredId === item.id

                    return (
                        <div key={item.id} className="relative flex flex-col items-center">
                            {/* Tooltip caché sur mobile (touch device) pour éviter qu'il reste bloqué */}
                            <AnimatePresence>
                                {isHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="hidden md:block absolute bottom-full mb-2 rounded-md border border-white/10 bg-black/80 px-2 py-1 text-[10px] text-white backdrop-blur-md whitespace-nowrap pointer-events-none"
                                    >
                                        {item.label}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button
                                onClick={() => scrollToSection(item.id)}
                                onMouseEnter={() => setHoveredId(item.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className={cn(
                                    'relative flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer',
                                    // Mobile : plus grand (w-10 h-10) pour le tactile
                                    // Desktop : inchangé
                                    'w-10 h-10 md:w-10 md:h-10',
                                    isActive ? 'text-white' : 'text-white/50 hover:text-white/80'
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 30,
                                        }}
                                    />
                                )}
                                <span className="relative z-10">
                                    <Icon className="w-5 h-5 md:w-5 md:h-5" />
                                </span>
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
