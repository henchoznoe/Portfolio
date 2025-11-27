'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const xTo = useRef<gsap.QuickToFunc | null>(null)
    const yTo = useRef<gsap.QuickToFunc | null>(null)

    useGSAP(() => {
        // Initialize quickTo with a slight delay for that "floaty" feel
        xTo.current = gsap.quickTo(cursorRef.current, 'x', { duration: 0.25, ease: 'power3.out' })
        yTo.current = gsap.quickTo(cursorRef.current, 'y', { duration: 0.25, ease: 'power3.out' })
    }, { scope: cursorRef })

    useEffect(() => {
        const cursor = cursorRef.current
        if (!cursor) return

        // Move cursor
        const moveCursor = (e: MouseEvent) => {
            xTo.current?.(e.clientX)
            yTo.current?.(e.clientY)
        }

        // Global listeners for hover detection (delegation)
        // We use mouseover/out instead of enter/leave for bubbling
        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.closest('a, button, input, [role="button"]')) {
                gsap.to(cursor, { scale: 2, duration: 0.3, ease: 'power2.out' })
            }
        }

        const onMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.closest('a, button, input, [role="button"]')) {
                gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'power2.out' })
            }
        }

        window.addEventListener('mousemove', moveCursor)
        document.addEventListener('mouseover', onMouseOver)
        document.addEventListener('mouseout', onMouseOut)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            document.removeEventListener('mouseover', onMouseOver)
            document.removeEventListener('mouseout', onMouseOut)
        }
    }, [])

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 size-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block"
        />
    )
}
