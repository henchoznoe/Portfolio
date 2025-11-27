'use client'

import Lenis from 'lenis'
import { useEffect } from 'react'

export const SmoothScroll = () => {
    useEffect(() => {
        // Force scroll to top on reload
        if (typeof window !== 'undefined') {
            window.scrollTo(0, 0)
            if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual'
            }
        }

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
        })

        const raf = (time: number) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return null
}
