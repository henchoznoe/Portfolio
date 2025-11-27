'use client'

import { useRef, useState } from 'react'

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
    const divRef = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = useState(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return

        const div = divRef.current
        const rect = div.getBoundingClientRect()

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    const handleMouseEnter = () => {
        setOpacity(1)
    }

    const handleMouseLeave = () => {
        setOpacity(0)
    }

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

                <div
                    ref={divRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {/* Spotlight Overlay */}
                    <div
                        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
                        style={{
                            opacity,
                            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
                        }}
                    />

                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden transition-colors duration-300 hover:bg-white/[0.04]"
                        >
                            {/* Spotlight Border Effect */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                                style={{
                                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
                                }}
                            />
                            
                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center gap-4">
                                <div className="size-12 rounded-xl bg-white/10 flex items-center justify-center shadow-inner border border-white/5">
                                    {/* Placeholder for Icon */}
                                    <div className="size-6 rounded-full bg-white/20" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-sm font-mono font-medium text-white/90">
                                        {skill.name}
                                    </h3>
                                    <p className="text-xs text-white/40 mt-1 font-mono">
                                        {skill.category}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
