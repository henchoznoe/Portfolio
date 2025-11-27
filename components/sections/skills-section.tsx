'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const skills = [
    { name: 'React', category: 'Library', id: 'react' },
    { name: 'TypeScript', category: 'Language', id: 'ts' },
    { name: 'Java', category: 'Language', id: 'java' },
    { name: 'TailwindCSS', category: 'Library', id: 'tailwind' },
    { name: 'Express.js', category: 'Framework', id: 'express' },
    { name: 'PostgreSQL', category: 'Database', id: 'postgres' },
    { name: 'Docker', category: 'DevOps', id: 'docker' },
    { name: 'Git', category: 'VCS', id: 'git' },
]

export const SkillsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    const handleGlobalMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return
        const cards = containerRef.current.getElementsByClassName('skill-card')

        for (const card of cards) {
            const rect = card.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            ;(card as HTMLElement).style.setProperty('--mouse-x', `${x}px`)
            ;(card as HTMLElement).style.setProperty('--mouse-y', `${y}px`)
        }
    }

    return (
        <section className="py-32 px-4 bg-black relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="mb-24">
                    <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/30 tracking-tight">
                        Skills
                    </h2>
                </div>

                <div 
                    ref={containerRef}
                    onMouseMove={handleGlobalMouseMove}
                    className="group relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    )
}

const SkillCard = ({ skill }: { skill: { name: string; category: string; id: string } }) => {
    const cardRef = useRef<HTMLDivElement>(null)
    const iconRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const { contextSafe } = useGSAP({ scope: cardRef })

    const handleLocalMouseMove = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || !iconRef.current || !textRef.current) return

        const rect = cardRef.current.getBoundingClientRect()
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        // Magnetic effect: tight follow
        const moveX = (x - centerX) * 0.25
        const moveY = (y - centerY) * 0.25

        // Parallax effect: text moves slower and "behind"
        const textMoveX = (x - centerX) * 0.1
        const textMoveY = (y - centerY) * 0.1

        gsap.to(iconRef.current, {
            x: moveX,
            y: moveY,
            scale: 1.1, // Lift effect
            duration: 0.4,
            ease: "power3.out",
        })

        gsap.to(textRef.current, {
            x: textMoveX,
            y: textMoveY,
            duration: 0.4,
            ease: "power3.out",
        })
    })

    const handleMouseLeave = contextSafe(() => {
        if (!iconRef.current || !textRef.current) return

        gsap.to(iconRef.current, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "elastic.out(1, 0.3)", // Snappy return
        })

        gsap.to(textRef.current, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.3)",
        })
    })

    return (
        <div
            ref={cardRef}
            onMouseMove={handleLocalMouseMove}
            onMouseLeave={handleMouseLeave}
            className="skill-card group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-white/[0.01] border border-white/5 overflow-hidden transition-colors duration-300 hover:bg-white/[0.03]"
        >
            {/* Global Spotlight (reveals borders) */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)`,
                }}
            />

            {/* Inset Glow / Spotlight for active state */}
            <div 
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.05), transparent 40%)`,
                }}
            />

            <div className="relative z-10 flex flex-col items-center gap-4 pointer-events-none">
                <div 
                    ref={iconRef} 
                    className="size-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 shadow-sm will-change-transform"
                >
                    <img 
                        src={`https://skillicons.dev/icons?i=${skill.id}`} 
                        alt={skill.name} 
                        className="size-9"
                        loading="lazy"
                    />
                </div>
                
                <div ref={textRef} className="text-center will-change-transform">
                    <h3 className="text-lg font-medium text-white/90">
                        {skill.name}
                    </h3>
                    <p className="text-xs text-white/40 mt-1 font-mono uppercase tracking-wider">
                        {skill.category}
                    </p>
                </div>
            </div>
            
            {/* Border Mask */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.1), transparent 40%)`,
                    maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
                    maskComposite: 'exclude',
                    padding: '1px',
                    borderRadius: 'inherit'
                }}
            />
        </div>
    )
}