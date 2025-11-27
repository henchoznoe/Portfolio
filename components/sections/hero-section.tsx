'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

export const HeroSection = () => {

    const containerRef = useRef<HTMLElement>(null)
    const nameRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)
    const scrollRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline()
        tl.fromTo(nameRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.2 }
        )
        tl.fromTo(subtitleRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
            '-=0.8'
        )
        tl.fromTo(scrollRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1, ease: 'power2.out' },
            '-=0.5'
        )
        if (scrollRef.current) {
            gsap.to(scrollRef.current, {
                y: 10,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            })
        }
    }, { scope: containerRef })

    return (
        <section 
            ref={containerRef} 
            className="h-[100dvh] w-full flex flex-col items-center justify-center bg-black relative overflow-hidden"
        >
            <div className="relative z-10 flex flex-col items-center text-center">
                <h1 
                    ref={nameRef}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/30 select-none mb-6"
                >
                    Noé Henchoz
                </h1>
                <p 
                    ref={subtitleRef}
                    className="text-white/50 text-sm md:text-base font-mono uppercase tracking-[0.2em] opacity-0"
                >
                    Software Engineering Student
                </p>
            </div>
        </section>
    )
}
