'use client'

import { cn } from '@/lib/utils'
import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import { useRef } from 'react'

interface RevealTitleProps {
    text: string
    className?: string
}

export const RevealTitle = ({ text, className }: RevealTitleProps) => {
    const containerRef = useRef<HTMLDivElement>(null)

    // Gestion du scroll pour l'effet de disparition (Parallax + Blur)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    // Quand l'élément arrive vers le haut de l'écran (sortie), il floute et disparait
    const opacity = useTransform(scrollYProgress, [0.5, 0.8], [1, 0])
    const blur = useTransform(scrollYProgress, [0.5, 0.8], ["0px", "10px"])
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]) // Léger parallax

    // Découpage du texte en mots pour l'animation
    const words = text.split(" ")

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1, // Délai entre chaque mot
            },
        },
    }

    const wordVariants = {
        hidden: {
            y: "100%", // Caché en bas
            opacity: 0,
            rotate: 3, // Légère rotation pour le style
        },
        visible: {
            y: "0%",
            opacity: 1,
            rotate: 0,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
            },
        },
    }

    return (
        <motion.div
            ref={containerRef}
            style={{ opacity, filter: `blur(${blur})` as any, y }}
            className={cn("relative z-10", className)}
        >
            <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }} // Se lance quand l'élément est bien visible
                variants={containerVariants}
                className="flex flex-wrap gap-x-[0.3em] overflow-hidden leading-none" // overflow-hidden est crucial pour le masque
            >
                {words.map((word, i) => (
                    <span key={i} className="relative overflow-hidden inline-block pb-2"> {/* Padding bottom pour éviter de couper la descender */}
                        <motion.span
                            variants={wordVariants as Variants}
                            className="inline-block bg-clip-text text-transparent bg-linear-to-b from-white via-white/90 to-white/30"
                        >
                            {word}
                        </motion.span>
                    </span>
                ))}
            </motion.h2>
        </motion.div>
    )
}
