'use client'

import { useGSAP } from '@gsap/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { useRef } from 'react'

export const HeroSection = () => {

    const containerRef = useRef<HTMLElement>(null)
    const nameRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)
    const gridRef = useRef<HTMLDivElement>(null)

    const { scrollY } = useScroll()
    const opacity = useTransform(scrollY, [0, 300], [1, 0])
    const scale = useTransform(scrollY, [0, 300], [1, 0.8])
    const filter = useTransform(scrollY, [0, 300], ['blur(0px)', 'blur(10px)'])

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
                backgroundPosition: "40px 40px",
                duration: 5,
                repeat: -1,
                ease: "none",
            })
        }
    }, { scope: containerRef })

    return (
        <section
            ref={containerRef}
            className="h-dvh w-full flex flex-col items-center justify-center bg-black relative overflow-hidden"
        >

            <div className="absolute inset-0 z-0 overflow-hidden">
                <div
                    ref={gridRef}
                    className="absolute inset-[-50%] w-[200%] h-[200%]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
                        WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)'
                    }}
                />

                <div className="absolute inset-0 bg-black mask-[radial-gradient(ellipse_at_center,transparent_20%,black_100%)] pointer-events-none" />


                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] pointer-events-none" />
            </div>

            <motion.div
                style={{ opacity, scale, filter }}
                className="relative z-10 flex flex-col items-center text-center"
            >
                <h1
                    ref={nameRef}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-white via-white/90 to-white/30 select-none mb-6"
                >
                    Noé Henchoz
                </h1>
                <p
                    ref={subtitleRef}
                    className="text-white/50 text-sm md:text-base font-mono uppercase select-none tracking-[0.2em] opacity-0"
                >
                    Software Engineering Student
                </p>
            </motion.div>
        </section>
    )
}
