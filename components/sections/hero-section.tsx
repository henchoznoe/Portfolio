'use client'

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'

const lineVariants = {
  hidden: { y: '110%' },
  visible: { y: 0 },
}

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const headingY = useTransform(scrollYProgress, [0, 1], ['0%', '16%'])
  const headingOpacity = useTransform(scrollYProgress, [0, 0.78], [1, 0.08])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="page-gutter relative min-h-svh overflow-hidden bg-cream text-ink"
    >
      <div
        aria-hidden="true"
        className="editorial-grid page-frame pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 opacity-70"
      />

      <div className="page-frame relative z-10 flex min-h-svh flex-col border-x border-ink/10">
        <header className="flex h-20 shrink-0 items-start justify-between border-b border-ink/10 px-4 pt-5 font-mono text-[10px] uppercase tracking-[0.18em] sm:h-24 sm:px-6 sm:text-xs">
          <a
            href="#home"
            className="-m-3 flex min-h-11 items-start p-3 font-semibold tracking-[-0.02em]"
          >
            NH<sup className="ml-1 text-signal">26</sup>
          </a>
          <div className="hidden items-center gap-3 sm:flex">
            <span className="size-2 rounded-full bg-signal" />
            Fribourg, CH
          </div>
          <a
            href="#projects"
            className="group -m-3 flex min-h-11 items-start gap-2 p-3 transition-opacity hover:opacity-55"
          >
            Projets
            <ArrowDownRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
        </header>

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: reduceMotion ? 0 : 0.09,
            delayChildren: 0.12,
          }}
          className="grid flex-1 grid-cols-6 grid-rows-[auto_auto_minmax(9rem,1fr)_auto] sm:grid-cols-12 sm:grid-rows-[minmax(10rem,0.7fr)_minmax(16rem,1.5fr)_auto]"
        >
          <div className="col-span-6 flex min-h-36 items-start border-b border-ink/10 px-4 py-8 sm:col-span-4 sm:min-h-0 sm:px-6 sm:py-10 lg:col-span-3">
            <div className="overflow-hidden">
              <motion.p
                variants={lineVariants}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-60 text-sm leading-snug tracking-[-0.02em] sm:text-base"
              >
                Étudiant en ingénierie logicielle, je conçois des produits web
                de l’idée à la mise en production.
              </motion.p>
            </div>
          </div>

          <div className="hidden border-x border-b border-ink/10 sm:col-span-4 sm:block lg:col-span-6" />

          <div className="col-span-6 flex min-h-28 items-start justify-between border-b border-ink/10 px-4 py-7 sm:col-span-4 sm:min-h-0 sm:px-6 sm:py-10 lg:col-span-3">
            <div className="overflow-hidden">
              <motion.p
                variants={lineVariants}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-ink/55 sm:text-xs"
              >
                Design engineering
                <br />
                Full-stack systems
                <br />
                Open source
              </motion.p>
            </div>
            <span className="font-mono text-[10px] text-signal sm:text-xs">
              01
            </span>
          </div>

          <motion.div
            style={
              reduceMotion
                ? undefined
                : { y: headingY, opacity: headingOpacity }
            }
            className="col-span-6 flex min-h-0 items-end overflow-hidden border-b border-ink/10 px-3 pb-4 pt-10 sm:col-span-12 sm:px-5 sm:pb-6 sm:pt-14"
          >
            <div className="w-full overflow-visible">
              <motion.h1
                aria-label="Noé Henchoz"
                variants={lineVariants}
                transition={{
                  duration: reduceMotion ? 0 : 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="whitespace-nowrap text-[clamp(5.5rem,29vw,30rem)] font-semibold leading-[0.72] tracking-[-0.095em]"
              >
                <span aria-hidden="true">
                  NOE<span className="text-signal">.</span>
                </span>
              </motion.h1>
            </div>
          </motion.div>

          <div className="hidden min-h-16 items-center border-r border-ink/10 px-4 sm:col-span-4 sm:flex sm:px-6 lg:col-span-3">
            <div className="overflow-hidden">
              <motion.p
                variants={lineVariants}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-mono text-[9px] uppercase tracking-[0.15em] text-ink/50 sm:text-[11px]"
              >
                Fribourg, Suisse
              </motion.p>
            </div>
          </div>

          <div className="col-span-6 flex min-h-16 items-center justify-end px-4 sm:col-span-8 sm:px-6 lg:col-span-9">
            <motion.a
              variants={lineVariants}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              href="mailto:henchoznoe@gmail.com"
              className="group -my-3 flex min-h-11 items-center gap-2 whitespace-nowrap py-3 text-[13px] font-medium tracking-[-0.02em] sm:text-base"
            >
              Parlons d’un projet
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
