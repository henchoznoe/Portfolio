'use client'

import { cn } from '@/lib/utils'
import { motion, type Variants } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { Code2, GraduationCap, MapPin, Sparkles, User } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const SPRING_CONFIG = {
    type: 'spring',
    stiffness: 400,
    damping: 10,
}

interface BentoCardProps {
    id: string
    title: string
    description: string
    icon?: LucideIcon
    className?: string
    hoveredId: string | null
    setHoveredId: (id: string | null) => void
    children?: React.ReactNode
}

const BentoCard = ({
    id,
    title,
    description,
    icon: Icon,
    className,
    hoveredId,
    setHoveredId,
    children,
}: BentoCardProps) => {
    const isHovered = hoveredId === id
    const isDimmed = hoveredId !== null && hoveredId !== id

    const cardVariants: Variants = {
        idle: {
            scale: 1,
            /*filter: 'brightness(1) blur(0px)',*/
            opacity: 1,
        },
        hover: {
            scale: 1.02,
            /*filter: 'brightness(1.1) blur(0px)',*/
            opacity: 1,
            zIndex: 10,
        },
        dimmed: {
            scale: 0.98,
            /*filter: 'brightness(0.5) blur(1px)',*/
            opacity: 0.6,
        },
    }

    return (
        <motion.div
            layout
            variants={cardVariants}
            initial="idle"
            animate={isHovered ? 'hover' : isDimmed ? 'dimmed' : 'idle'}
            transition={SPRING_CONFIG}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
            className={cn(
                'relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors',
                className,
            )}
        >
            <div
                className={cn(
                    'absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-500',
                    isHovered && 'opacity-100',
                )}
            />

            <div className="relative z-10 flex h-full flex-col justify-between gap-6">
                {children ? (
                    children
                ) : (
                    <>
                        {Icon && (
                            <div className="flex size-12 items-center justify-center rounded-full bg-white/10 text-white">
                                <Icon size={24} />
                            </div>
                        )}
                        <div>
                            <h3 className="mb-2 text-2xl font-medium text-white md:text-3xl">
                                {title}
                            </h3>
                            <p className="text-sm leading-relaxed text-white/60 md:text-base">
                                {description}
                            </p>
                        </div>
                    </>
                )}
            </div>
        </motion.div>
    )
}

export const AboutSection = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null)

    return (
        <section className="relative mx-auto w-full max-w-7xl px-6 py-32">
            <div className="flex min-h-[80vh] w-full flex-col gap-4 lg:flex-row">
                <div className="flex w-full flex-col gap-4 lg:w-8/12">
                    <div className="flex h-full min-h-[300px] flex-col gap-4 md:flex-row">
                        <BentoCard
                            id="tech"
                            title="Modern Stack"
                            description="Building scalable web apps with the React ecosystem, TypeScript, and TailwindCSS."
                            icon={Code2}
                            className="md:w-7/12"
                            hoveredId={hoveredId}
                            setHoveredId={setHoveredId}
                        />
                        <BentoCard
                            id="responsive"
                            title="Clean Code"
                            description="I strictly follow SOLID principles and KISS. Code must be maintainable and readable."
                            icon={Sparkles}
                            className="md:w-5/12 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                            hoveredId={hoveredId}
                            setHoveredId={setHoveredId}
                        />
                    </div>

                    <div className="flex h-full min-h-[300px] flex-col gap-4 md:flex-row">
                        <BentoCard
                            id="performance"
                            title="Swiss Crafted"
                            description="Based in Fribourg. Bringing precision and reliability to every project I touch."
                            icon={MapPin}
                            className="md:w-5/12 bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
                            hoveredId={hoveredId}
                            setHoveredId={setHoveredId}
                        />
                        <BentoCard
                            id="ui"
                            title="Engineering Student"
                            description="Constantly learning and evolving. Bridging the gap between theory and practical application."
                            icon={GraduationCap}
                            className="md:w-7/12"
                            hoveredId={hoveredId}
                            setHoveredId={setHoveredId}
                        />
                    </div>
                </div>

                <BentoCard
                    id="profile"
                    title="Beyond the Code"
                    description="Beyond the screen, I'm exploring emerging tech or maintaining a healthy lifestyle through sports.."
                    className="min-h-[400px] w-full lg:w-4/12 lg:min-h-full p-0"
                    hoveredId={hoveredId}
                    setHoveredId={setHoveredId}
                >
                    <div className="absolute inset-2 md:inset-3 rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        <Image 
                            src="/assets/img/me.png" 
                            alt="Noé Henchoz"
                            fill
                            className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                        /> 
                        
                        <div className="relative z-20 h-full flex flex-col justify-end p-6">
                            <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/20">
                                <User size={24} />
                            </div>
                            <h3 className="mb-2 text-2xl font-medium text-white">
                                The Developer
                            </h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Combining technical expertise with a creative approach to software engineering.
                            </p>
                        </div>
                    </div>
                </BentoCard>
            </div>
        </section>
    )
}