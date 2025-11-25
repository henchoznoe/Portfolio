'use client'

import { Button } from '@/components/ui/button'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    })

    // Scroll Parallax - Synced movement
    const yParallax = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    // Mouse Parallax
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 150 }
    const xSpring = useSpring(mouseX, springConfig)
    const ySpring = useSpring(mouseY, springConfig)

    // Image 3D Rotation
    const rotateX = useTransform(ySpring, [-0.5, 0.5], ['15deg', '-15deg'])
    const rotateY = useTransform(xSpring, [-0.5, 0.5], ['-15deg', '15deg'])

    // Text Translation (Subtle floating)
    const textX = useTransform(xSpring, [-0.5, 0.5], ['-20px', '20px'])
    const textY = useTransform(ySpring, [-0.5, 0.5], ['-20px', '20px'])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window
            const x = (e.clientX / innerWidth) - 0.5
            const y = (e.clientY / innerHeight) - 0.5
            mouseX.set(x)
            mouseY.set(y)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 md:pt-0"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-black z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-black to-black opacity-40" />
            </div>

            <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
                {/* Text Content */}
                <motion.div
                    style={{ y: yParallax, x: textX, translateY: textY, opacity }}
                    className="flex-1 text-center md:text-left max-w-2xl"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                            Creative Developer
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                    >
                        <p className="text-lg md:text-xl text-white/60 mb-8 leading-relaxed">
                            Crafting digital experiences with code and motion.
                            <br className="hidden md:block" />
                            Specialized in high-performance web applications.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <Button
                            size="lg"
                            className="rounded-full bg-white text-black hover:bg-white/90 font-medium px-8 h-12 text-base"
                        >
                            View Projects
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white px-8 h-12 text-base"
                        >
                            Contact Me
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Profile Image / Visual */}
                <motion.div
                    style={{ y: yParallax, opacity, rotateX, rotateY, perspective: 1000 }}
                    className="flex-1 flex justify-center md:justify-end"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                        className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                    >
                        {/* Placeholder for Profile Image */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent border border-white/10 backdrop-blur-sm overflow-hidden group">
                             {/* Replace with actual Image component when user provides one */}
                             <div className="w-full h-full flex items-center justify-center bg-white/5 text-white/20 font-mono text-sm">
                                [Profile Image]
                             </div>
                             
                             {/* Glow Effect */}
                             <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        
                        {/* Decorative Rings */}
                        <div className="absolute -inset-4 rounded-full border border-white/5 animate-[spin_10s_linear_infinite]" />
                        <div className="absolute -inset-8 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 64 }}
                transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"
            />
        </section>
    )
}
