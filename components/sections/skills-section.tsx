'use client'

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

const SkillCard = ({ skill }: { skill: { name: string; category: string; id: string } }) => {
    const cardRef = useRef<HTMLDivElement>(null)
    const iconRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || !iconRef.current) return

        const rect = cardRef.current.getBoundingClientRect()
        
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2
        
        cardRef.current.style.setProperty('--x', `${x}px`)
        cardRef.current.style.setProperty('--y', `${y}px`)

        const moveX = (x - centerX) * 0.25 
        const moveY = (y - centerY) * 0.25
        
        const limit = 15
        const clampedX = Math.max(Math.min(moveX, limit), -limit)
        const clampedY = Math.max(Math.min(moveY, limit), -limit)

        gsap.to(iconRef.current, {
            x: clampedX,
            y: clampedY,
            duration: 0.4,
            ease: "power3.out",
            overwrite: true
        })
    }

    const handleMouseLeave = () => {
        if (!iconRef.current) return
        
        gsap.to(iconRef.current, {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)",
            overwrite: true
        })
    }

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden transition-colors duration-300 hover:bg-white/[0.04]"
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                    background: `radial-gradient(400px circle at var(--x) var(--y), rgba(255,255,255,0.1), transparent 40%)`,
                }}
            />
            
            <div className="relative z-10 flex flex-col items-center gap-4 pointer-events-none">
                <div ref={iconRef} className="size-12 rounded-xl bg-white/10 flex items-center justify-center shadow-inner border border-white/5">
                    <img 
                        src={`https://skillicons.dev/icons?i=${skill.id}`} 
                        alt={skill.name} 
                        className="size-full" 
                        loading="lazy"
                    />
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