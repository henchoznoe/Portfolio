// components/sections/skills-section.tsx

'use client'

import { RevealTitle } from '@/components/ui/reveal-title'; // Import du nouveau composant
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger)

const skills = [
    // ... tes skills (inchangés)
    { name: 'TypeScript', id: 'ts' },
    { name: 'Java', id: 'java' },
    { name: 'React', id: 'react' },
    { name: 'TailwindCSS', id: 'tailwind' },
    { name: 'Express.js', id: 'express' },
    { name: 'PostgreSQL', id: 'postgres' },
    { name: 'Docker', id: 'docker' },
    { name: 'Git', id: 'git' },
]

export const SkillsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    // On enlève titleRef car géré par le composant Framer Motion

    useGSAP(() => {
        // Animation des cartes uniquement via GSAP (le titre est géré par Framer Motion)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 70%', // On lance un peu plus tôt
                toggleActions: 'play none none reverse',
            }
        })

        tl.from('.skill-card', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.05, // Un peu plus rapide
            ease: 'power3.out'
        })
    }, { scope: containerRef })

    const handleGlobalMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
       // ... (code existant inchangé pour l'effet souris)
       if (!containerRef.current || window.innerWidth < 768) return
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
        <section id="skills" ref={containerRef} className="py-32 px-4 bg-black relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="mb-10">
                    {/* Background number décoratif (optionnel) */}
                     <div className="absolute top-20 right-0 md:right-20 text-[12vw] font-bold text-white/2 pointer-events-none select-none font-mono leading-none z-0">
                        03
                    </div>

                    {/* Nouveau Titre Animé */}
                    <RevealTitle
                        text="My Capabilities"
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
                    />
                </div>

                <div
                    onMouseMove={handleGlobalMouseMove}
                    className="group relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 z-10"
                >
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    )
}

// ... Le composant SkillCard reste inchangé en dessous
const SkillCard = ({ skill }: { skill: { name: string; id: string } }) => {
    // ... (code existant inchangé)
    const cardRef = useRef<HTMLDivElement>(null)
    const iconRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const { contextSafe } = useGSAP({ scope: cardRef })

    const handleLocalMouseMove = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || !iconRef.current || !textRef.current || window.innerWidth < 768) return

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
            className="skill-card group relative flex flex-col items-center justify-center p-4 md:p-8 rounded-2xl bg-white/1 border border-white/5 overflow-hidden transition-colors duration-300 md:hover:bg-white/3"
        >
            {/* Global Spotlight (reveals borders) */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)`,
                }}
            />

            {/* Inset Glow / Spotlight for active state */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.05), transparent 40%)`,
                }}
            />

            <div className="relative z-10 flex flex-col items-center gap-4 pointer-events-none">
                <div
                    ref={iconRef}
                    className="size-12 md:size-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 shadow-sm will-change-transform"
                >
                    <img
                        src={`https://skillicons.dev/icons?i=${skill.id}`}
                        alt={skill.name}
                        className="size-7 md:size-9"
                        loading="lazy"
                    />
                </div>

                <div ref={textRef} className="text-center will-change-transform">
                    <h3 className="text-sm md:text-lg font-medium text-white/90">
                        {skill.name}
                    </h3>
                </div>
            </div>

            {/* Border Mask */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"
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
