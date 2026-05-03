/**
 * File: components/sections/projects-section.tsx
 * Description: Projects section with featured card layout.
 * Author: Noé Henchoz
 * Copyright (c) 2026 Noé Henchoz
 */

'use client'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'
import { RevealTitle } from '@/components/ui/reveal-title'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    year: '2025',
    title: 'Belouga Tournament',
    description:
      'E-sports tournament management platform with Discord auth, Stripe payments, and an admin back office.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
    github: 'https://github.com/henchoznoe/BelougaTournament',
    external: 'https://belougatournament.ch',
    logo: '/projects/belouga.png',
  },
  {
    id: 2,
    year: '2025',
    title: 'GitSetup',
    description:
      'Automated & non-destructive Git environment setup. Manage multiple identities & SSH keys seamlessly on macOS.',
    stack: ['CLI', 'Git', 'SSH', 'GPG', 'macOS'],
    github: 'https://github.com/henchoznoe/GitSetup',
    logo: '/projects/gitsetup.png',
  },
]

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      })

      tl.fromTo(
        '.project-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
        },
      )
    },
    { scope: sectionRef },
  )

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-32 px-6 bg-black overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 relative">
          <div className="absolute top-0 right-0 md:right-20 text-[12vw] font-bold text-white/2 pointer-events-none select-none font-mono leading-none z-0">
            02
          </div>
          <RevealTitle
            text="My Projects"
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          />
        </div>

        <div className="flex flex-col gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface Project {
  id: number
  year: string
  title: string
  description: string
  stack: string[]
  github?: string
  external?: string
  logo: string
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="project-card group relative rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]">
      <div className="flex flex-col md:flex-row">
        {/* Logo */}
        <div className="relative flex items-center justify-center p-8 md:p-12 md:w-72 shrink-0 bg-white/[0.02]">
          <div className="relative size-28 md:size-40 transition-transform duration-500 group-hover:scale-105">
            <Image
              src={project.logo}
              alt={`${project.title} logo`}
              fill
              className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            />
          </div>
        </div>

        {/* Separator */}
        <div className="h-px md:h-auto md:w-px bg-white/10" />

        {/* Content */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-white/30 tracking-wider">
                {project.year}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight">
              {project.title}
            </h3>

            <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-xl">
              {project.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.stack.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-white/50 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-2 shrink-0">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/50 text-sm hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
                >
                  <FontAwesomeIcon icon={faGithub} className="size-4" />
                  <span className="hidden sm:inline">Source</span>
                </a>
              )}
              {project.external && (
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/50 text-sm hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
                >
                  <ArrowUpRight className="size-4" />
                  <span className="hidden sm:inline">Live</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
