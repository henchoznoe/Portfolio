/**
 * File: components/ui/reveal-title.tsx
 * Description: Animated reveal title component.
 * Author: Noé Henchoz
 * Copyright (c) 2026 Noé Henchoz
 */

'use client'

import { motion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

interface RevealTitleProps {
  text: string
  className?: string
}

export const RevealTitle = ({ text, className }: RevealTitleProps) => {
  const words = text.split(' ')

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const wordVariants: Variants = {
    hidden: {
      y: '100%',
      opacity: 0,
      rotate: 3,
    },
    visible: {
      y: '0%',
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  }

  return (
    <div className={cn('relative z-10', className)}>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-20%' }}
        variants={containerVariants}
        // Overflow hidden masks the slide-up animation
        className="flex flex-wrap gap-x-[0.3em] overflow-hidden leading-none"
      >
        {words.map(word => (
          <span
            key={word}
            className="relative overflow-hidden inline-block pb-2"
          >
            {' '}
            <motion.span
              variants={wordVariants}
              className="inline-block bg-clip-text text-transparent uppercase bg-linear-to-b from-white via-white/90 to-white/30"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h2>
    </div>
  )
}
