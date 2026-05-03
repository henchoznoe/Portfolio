/**
 * File: components/sections/skills-section.tsx
 * Description: Skills section with categorized grid.
 * Author: Noé Henchoz
 * Copyright (c) 2026 Noé Henchoz
 */

'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef } from 'react'
import { RevealTitle } from '@/components/ui/reveal-title'

gsap.registerPlugin(ScrollTrigger)

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', id: 'java' },
      { name: 'TypeScript', id: 'ts' },
      { name: 'Python', id: 'py' },
      { name: 'C++', id: 'cpp' },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Next.js', id: 'next' },
      { name: 'NestJS', id: 'nest' },
      { name: 'TailwindCSS', id: 'tailwind' },
    ],
  },
  {
    title: 'Data',
    skills: [
      { name: 'PostgreSQL', id: 'postgres' },
      { name: 'Supabase', id: 'supabase' },
      { name: 'Prisma', id: 'prisma' },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker', id: 'docker' },
      { name: 'GitHub', id: 'github' },
      { name: 'GitLab', id: 'gitlab' },
      { name: 'Vercel', id: 'vercel' },
    ],
  },
]

export const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      })

      tl.from('.skill-category', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      })
    },
    { scope: containerRef },
  )

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-32 px-6 bg-black relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 relative">
          <div className="absolute top-0 right-0 md:right-20 text-[12vw] font-bold text-white/2 pointer-events-none select-none font-mono leading-none z-0">
            03
          </div>
          <RevealTitle
            text="My Skills"
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map(category => (
            <div key={category.title} className="skill-category">
              <h3 className="font-mono text-sm text-white/40 uppercase tracking-wider mb-6">
                {category.title}
              </h3>
              <div className="flex flex-col gap-3">
                {category.skills.map(skill => (
                  <div
                    key={skill.id}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                  >
                    <div className="size-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={`https://skillicons.dev/icons?i=${skill.id}`}
                        alt={skill.name}
                        width={28}
                        height={28}
                        className="size-6"
                        loading="lazy"
                        unoptimized
                      />
                    </div>
                    <span className="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
