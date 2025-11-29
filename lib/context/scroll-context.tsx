'use client'

import Lenis from 'lenis'
import { createContext, useContext, useEffect, useState } from 'react'

interface ScrollContextType {
    lenis: Lenis | null
}

const ScrollContext = createContext<ScrollContextType>({
    lenis: null,
})

export const useScrollContext = () => useContext(ScrollContext)

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
    const [lenis, setLenis] = useState<Lenis | null>(null)

    useEffect(() => {
        // Force scroll to top on reload
        if (typeof window !== 'undefined') {
            window.scrollTo(0, 0)
            if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual'
            }
        }

        const lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
        })

        setLenis(lenisInstance)

        const raf = (time: number) => {
            lenisInstance.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenisInstance.destroy()
        }
    }, [])

    return (
        <ScrollContext.Provider value={{ lenis }}>
            {children}
        </ScrollContext.Provider>
    )
}
