'use client'

import {
  domAnimation,
  LazyMotion,
  m,
  useInView,
  useReducedMotion,
} from 'framer-motion'
import { type ReactNode, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils/cn'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export const Reveal = ({
  children,
  className,
  delay = 0,
}: Readonly<RevealProps>) => {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, {
    once: true,
    amount: 0.18,
    margin: '0px 0px -64px 0px',
  })
  const [mounted, setMounted] = useState(false)
  const visible = !mounted || reduced || inView

  // Keep server-rendered content visible when JavaScript is unavailable.
  useEffect(() => setMounted(true), [])

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={cn(
          'motion-reduce:transform-none! motion-reduce:opacity-100!',
          className,
        )}
        ref={ref}
        data-reveal
        initial={false}
        animate={visible ? { y: 0, opacity: 1 } : { y: 32, opacity: 0 }}
        transition={
          visible && !reduced
            ? { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }
            : { duration: 0 }
        }
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}
