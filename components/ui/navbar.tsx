'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
]

export function Navbar() {
    const pathname = usePathname()

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
            <div className="flex items-center gap-1 px-2 py-2 rounded-full border border-white/10 bg-black/30 backdrop-blur-md shadow-lg shadow-black/20">
                {navItems.map((item) => {
                    const isActive = pathname === item.path
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                'relative px-4 py-2 text-sm font-medium transition-colors duration-200',
                                isActive ? 'text-white' : 'text-white/60 hover:text-white'
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-white/10 rounded-full"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{item.name}</span>
                        </Link>
                    )
                })}
            </div>
        </motion.nav>
    )
}
