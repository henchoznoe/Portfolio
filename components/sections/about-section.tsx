/**
 * File: components/sections/about-section.tsx
 * Description: About section with bento grid layout.
 * Author: Noé Henchoz
 * Copyright (c) 2026 Noé Henchoz
 */

'use client'

import { motion, type Transition, type Variants } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { Container, GraduationCap, Heart, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
import { cn } from '@/lib/utils/cn'
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
      opacity: 1,
    },
    hover: {
      scale: 1.02,
      opacity: 1,
      zIndex: 10,
    },
    dimmed: {
      scale: 0.98,
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
  const leaveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleHover = useCallback((id: string | null) => {
    if (leaveTimeout.current) {
      clearTimeout(leaveTimeout.current)
      leaveTimeout.current = null
    }
    if (id) {
      setHoveredId(id)
    } else {
      leaveTimeout.current = setTimeout(() => setHoveredId(null), 100)
    }
  }, [])

  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-7xl px-6 py-32"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-250 h-250 bg-purple-900/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="mb-10 relative z-10">
        <div className="absolute top-0 right-0 md:right-20 text-[12vw] font-bold text-white/2 pointer-events-none select-none font-mono leading-none z-0">
          01
        </div>

        <RevealTitle
          text="About me"
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
        />
      </div>

      {/* biome-ignore lint/a11y/noStaticElementInteractions: decorative hover effect on bento grid */}
      <div
        className="flex min-h-[80vh] w-full flex-col gap-4 lg:flex-row"
        onMouseLeave={() => handleHover(null)}
      >
        <div className="flex w-full flex-col gap-4 lg:w-8/12">
          <div className="flex h-full min-h-75 flex-col gap-4 md:flex-row">
            <BentoCard
              id="student"
              title="Software Engineering Student"
              description="Pursuing a degree in Software Engineering at HEIA-FR, Fribourg. Focused on building real-world applications with modern tools and solid engineering principles."
              icon={GraduationCap}
              className="md:w-7/12 border-white/10 bg-white/5"
              hoveredId={hoveredId}
              setHoveredId={handleHover}
            />
            <BentoCard
              id="location"
              title="Swiss Based"
              description="Based in Fribourg, Switzerland. Open to remote opportunities and collaborations across Europe."
              icon={MapPin}
              className="md:w-5/12 border-white/10 bg-white/5"
              hoveredId={hoveredId}
              setHoveredId={handleHover}
            />
          </div>

          <div className="flex h-full min-h-75 flex-col gap-4 md:flex-row">
            <BentoCard
              id="devops"
              title="DevOps Enthusiast"
              description="Passionate about CI/CD pipelines, containerization with Docker, and automating deployments. Infrastructure as code is where engineering meets craft."
              icon={Container}
              className="md:w-5/12 border-white/10 bg-white/5"
              hoveredId={hoveredId}
              setHoveredId={handleHover}
            />
            <BentoCard
              id="opensource"
              title="Open Source"
              description="Active contributor and advocate. All my personal projects are open source — I believe in building in the open and learning from the community."
              icon={Heart}
              className="md:w-7/12 border-white/10 bg-white/5"
              hoveredId={hoveredId}
              setHoveredId={handleHover}
            />
          </div>
        </div>

        <BentoCard
          id="profile"
          title=""
          description=""
          className="min-h-100 w-full lg:w-4/12 lg:min-h-full p-0"
          hoveredId={hoveredId}
          setHoveredId={handleHover}
        >
          <div className="absolute inset-2 md:inset-3 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <Image
              src="/img/me-ia.png"
              alt="Noé Henchoz"
              fill
              className="object-cover opacity-80"
            />
          </div>
        </BentoCard>
      </div>
    </section>
  )
}
