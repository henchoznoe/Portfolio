'use client'

import { domAnimation, LazyMotion, m, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

interface RevealProps {
  children: ReactNode
  className?: string
}

export const Reveal = ({ children, className }: Readonly<RevealProps>) => {
  const reduced = useReducedMotion()
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={cn(className)}
        initial={false}
        whileInView={reduced ? undefined : { y: [14, 0], opacity: [0.65, 1] }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}
