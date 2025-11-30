'use client'

import { useLanguage } from '@/lib/context/language-context'
import { cn } from '@/lib/utils'
import { motion, Transition, type Variants } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { Code2, GraduationCap, MapPin, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { RevealTitle } from '../ui/reveal-title'

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
            transition={SPRING_CONFIG as Transition}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
            className={cn(
                'relative flex flex-col justify-between overflow-hidden rounded-3xl border p-8 backdrop-blur-sm transition-colors',
                className,
            )}
        >
            <div
                className={cn(
                    'absolute inset-0 opacity-0 transition-opacity duration-500',
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
    const { t } = useLanguage()

    return (
        <section id="about" className="relative mx-auto w-full max-w-7xl px-6 py-32">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-900/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="mb-10 relative z-10">
                <div className="absolute top-0 right-0 md:right-20 text-[12vw] font-bold text-white/2 pointer-events-none select-none font-mono leading-none z-0">
                    01
                </div>

                <RevealTitle
                    text="About me"
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
                />
            </div>

            <div className="flex min-h-[80vh] w-full flex-col gap-4 lg:flex-row">
                <div className="flex w-full flex-col gap-4 lg:w-8/12">
                    <div className="flex h-full min-h-[300px] flex-col gap-4 md:flex-row">
                        <BentoCard
                            id="tech"
                            title={t.about.tech.title}
                            description={t.about.tech.description}
                            icon={Code2}
                            className="md:w-7/12 border-white/10 bg-white/5 "
                            hoveredId={hoveredId}
                            setHoveredId={setHoveredId}
                        />
                        <BentoCard
                            id="responsive"
                            title={t.about.clean.title}
                            description={t.about.clean.description}
                            icon={Sparkles}
                            className="md:w-5/12 border-blue-500/20 bg-blue-950/10 backdrop-blur-md bg-linear-to-br from-blue-500/5 to-transparent"
                            hoveredId={hoveredId}
                            setHoveredId={setHoveredId}
                        />
                    </div>

                    <div className="flex h-full min-h-[300px] flex-col gap-4 md:flex-row">
                        <BentoCard
                            id="performance"
                            title={t.about.swiss.title}
                            description={t.about.swiss.description}
                            icon={MapPin}
                            className="md:w-5/12 border-blue-500/20 bg-blue-950/10 backdrop-blur-md bg-linear-to-br from-blue-500/5 to-transparent"
                            hoveredId={hoveredId}
                            setHoveredId={setHoveredId}
                        />
                        <BentoCard
                            id="ui"
                            title={t.about.student.title}
                            description={t.about.student.description}
                            icon={GraduationCap}
                            className="md:w-7/12 border-white/10 bg-white/5"
                            hoveredId={hoveredId}
                            setHoveredId={setHoveredId}
                        />
                    </div>
                </div>

                <BentoCard
                    id="profile"
                    title={t.about.profile.title}
                    description={t.about.profile.description}
                    className="min-h-[400px] w-full lg:w-4/12 lg:min-h-full p-0"
                    hoveredId={hoveredId}
                    setHoveredId={setHoveredId}
                >
                    <div className="absolute inset-2 md:inset-3 rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                        <Image
                            src="/assets/img/me-ia.png"
                            alt="Noé Henchoz"
                            fill
                            className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                        />

                    </div>
                </BentoCard>
            </div>
        </section>
    )
}
