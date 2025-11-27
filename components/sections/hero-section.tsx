'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

export const HeroSection = () => {

    const containerRef = useRef<HTMLElement>(null)
    const nameRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)
    const gridRef = useRef<HTMLDivElement>(null)

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

        if (gridRef.current) {
            gsap.to(gridRef.current, {
                backgroundPosition: "50px 50px", 
                duration: 4,                   
                repeat: -1,                      
                ease: "none",                
            })
        }
    }, { scope: containerRef })

    return (
        <section 
            ref={containerRef} 
            className="h-[100dvh] w-full flex flex-col items-center justify-center bg-black relative overflow-hidden"
        >
         
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div 
                    ref={gridRef}
                    className="absolute inset-[-50%] w-[200%] h-[200%] opacity-10"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #ffffff 1px, transparent 1px),
                            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px', 
                    }}
                />
                
                <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)] pointer-events-none" />
                
                
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] pointer-events-none" />
            </div>

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