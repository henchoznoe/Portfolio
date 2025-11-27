'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const skills = [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'TailwindCSS', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Git', category: 'Tool' },
    { name: 'Framer Motion', category: 'Animation' },
    { name: 'Rust', category: 'Language' },
    { name: 'Python', category: 'Language' },
    { name: 'AWS', category: 'Cloud' },
]

export function SkillsSection() {
    return (
        <section className="py-32 px-4 bg-black relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                        Technical Arsenal
                    </h2>
                    <p className="text-white/40 max-w-2xl mx-auto text-lg">
                        A curated selection of tools and technologies I use to build digital experiences.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function SkillCard({ skill }: { skill: { name: string; category: string } }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const iconRef = useRef<HTMLDivElement>(null)
    
    // Pour l'effet magnétique
    const xTo = useRef<gsap.QuickToFunc | null>(null)
    const yTo = useRef<gsap.QuickToFunc | null>(null)

    // Initialisation GSAP
    useGSAP(() => {
        if (!iconRef.current) return
        // Elasticité pour l'effet magnétique
        xTo.current = gsap.quickTo(iconRef.current, "x", { duration: 0.4, ease: "power3.out" })
        yTo.current = gsap.quickTo(iconRef.current, "y", { duration: 0.4, ease: "power3.out" })
    }, { scope: cardRef })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || !xTo.current || !yTo.current) return

        const rect = cardRef.current.getBoundingClientRect()
        
        // Coordonnées locales dans la carte (0,0 est en haut à gauche de la carte)
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        // Calcul du centre pour l'effet magnétique
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        
        // Mettre à jour les variables CSS pour le Spotlight (plus performant)
        cardRef.current.style.setProperty('--x', `${x}px`)
        cardRef.current.style.setProperty('--y', `${y}px`)

        // Effet Magnétique (limité à 15px)
        const moveX = (x - centerX) * 0.25 
        const moveY = (y - centerY) * 0.25
        
        const limit = 15
        xTo.current(Math.max(Math.min(moveX, limit), -limit))
        yTo.current(Math.max(Math.min(moveY, limit), -limit))
    }

    const handleMouseLeave = () => {
        if (!xTo.current || !yTo.current) return
        
        // Retour élastique quand la souris quitte la carte
        gsap.to(iconRef.current, {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)"
        })
    }

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden transition-colors duration-300 hover:bg-white/[0.04]"
        >
            {/* Spotlight Border Effect via CSS Variables */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                    background: `radial-gradient(400px circle at var(--x) var(--y), rgba(255,255,255,0.1), transparent 40%)`,
                }}
            />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-4 pointer-events-none">
                <div ref={iconRef} className="size-12 rounded-xl bg-white/10 flex items-center justify-center shadow-inner border border-white/5">
                    {/* Placeholder for Icon */}
                    <div className="size-6 rounded-full bg-white/20" />
                </div>
                <div className="text-center">
                    <h3 className="text-sm font-mono font-medium text-white/90 min-h-[20px]">
                        {skill.name}
                    </h3>
                    <p className="text-xs text-white/40 mt-1 font-mono">
                        {skill.category}
                    </p>
                </div>
            </div>
        </div>
    )
}