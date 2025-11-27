'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

export function HeroSection() {
    const containerRef = useRef<HTMLElement>(null)
    const nameRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)
    const scrollRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline()

        // 1. Entrance Animation
        // Name: Fade in + Slide up
        tl.fromTo(nameRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.2 }
        )

        // Subtitle: Fade in (delayed)
        tl.fromTo(subtitleRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
            '-=0.8'
        )

        // Scroll Indicator: Fade in (last)
        tl.fromTo(scrollRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1, ease: 'power2.out' },
            '-=0.5'
        )

        // 2. Scroll Indicator Bounce Loop
        if (scrollRef.current) {
            gsap.to(scrollRef.current, {
                y: 10,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            })
        }

        // 3. Mouse Parallax (Name Only)
        const xTo = gsap.quickTo(nameRef.current, "x", { duration: 0.5, ease: "power3" })
        const yTo = gsap.quickTo(nameRef.current, "y", { duration: 0.5, ease: "power3" })

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY, innerWidth, innerHeight } = window
            
            // Normalize mouse position (-1 to 1)
            const x = (clientX / innerWidth - 0.5) * 2
            const y = (clientY / innerHeight - 0.5) * 2
            
            // Move name in opposition (Max 30px)
            xTo(x * -30)
            yTo(y * -30)
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }

    }, { scope: containerRef })

    return (
        <section 
            ref={containerRef} 
            className="h-[100dvh] w-full flex flex-col items-center justify-center bg-black relative overflow-hidden"
        >
            {/* Center Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
                
                {/* Name (Hero) */}
                <h1 
                    ref={nameRef}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/30 select-none mb-6"
                >
                    Noé Henchoz
                </h1>

                {/* Subtitle */}
                <p 
                    ref={subtitleRef}
                    className="text-white/50 text-sm md:text-base font-mono uppercase tracking-[0.2em] opacity-0"
                >
                    Software Engineering Student
                </p>
            </div>

            {/* Bottom Scroll Indicator */}
            <div 
                ref={scrollRef}
                className="absolute bottom-10 flex flex-col items-center gap-2 opacity-0"
            >
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/30 select-none text-[10px] uppercase tracking-[0.2em]">Scroll Down</span>
            </div>
        </section>
    )
}
