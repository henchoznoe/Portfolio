'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Code2 } from 'lucide-react'
import Image from 'next/image'
import {
  type FeaturedProject,
  featuredProjects,
  projectIndex,
} from '@/lib/config/portfolio'
import { cn } from '@/lib/utils/cn'

const ProjectVisual = ({ project }: Readonly<{ project: FeaturedProject }>) => {
  if (project.visual === 'arbeaute') {
    return (
      <div className="relative h-full overflow-hidden bg-[#d8cce6]">
        <div className="absolute inset-x-0 top-0 z-10 flex justify-between p-5 font-mono text-[9px] uppercase tracking-[0.15em] text-[#3f3145]/65 sm:p-7 sm:text-[10px]">
          <span>Une pause pour soi</span>
          <span>Bulle — CH</span>
        </div>
        <p className="absolute left-4 bottom-4 z-20 whitespace-nowrap text-[clamp(3.1rem,11vw,10rem)] font-medium leading-none tracking-[-0.075em] text-white sm:-left-2 sm:bottom-2">
          Réserver.
        </p>
        <div className="absolute bottom-0 right-[7%] top-[12%] w-[43%] overflow-hidden rounded-t-[6rem] border-[10px] border-[#f8f3eb] shadow-2xl sm:border-[14px]">
          <Image
            src="/work/arbeaute.jpeg"
            alt="Portrait de la fondatrice de l’institut Arbeauté"
            fill
            sizes="(max-width: 768px) 45vw, 32vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    )
  }

  if (project.visual === 'nextemplate') {
    return (
      <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#d9ff43] text-[#11110e]">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(17,17,14,.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,14,.16)_1px,transparent_1px)] [background-size:12.5%_100%,100%_20%]"
        />
        <div className="absolute inset-x-0 top-0 flex justify-between p-5 font-mono text-[9px] uppercase tracking-[0.15em] sm:p-7 sm:text-[10px]">
          <span>Production ready</span>
          <span>v1.5.2</span>
        </div>
        <span className="relative text-[clamp(7rem,22vw,20rem)] font-semibold leading-none tracking-[-0.11em]">
          NEX
        </span>
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between border-t border-[#11110e]/30 pt-3 font-mono text-[9px] uppercase tracking-[0.12em] sm:bottom-7 sm:left-7 sm:right-7 sm:text-[10px]">
          <span>Clone · Build · Ship</span>
          <span>Next 16</span>
        </div>
      </div>
    )
  }

  if (project.visual === 'bisous') {
    return (
      <div className="relative h-full overflow-hidden bg-[#120f12]">
        <Image
          src="/work/bisous-bisous.webp"
          alt="Univers visuel du collectif Bisous Bisous"
          fill
          sizes="(max-width: 768px) 100vw, 70vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-[1.025]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-black/10" />
        <p className="absolute bottom-4 left-5 right-5 font-serif text-[clamp(3.5rem,10vw,9rem)] italic leading-[0.8] tracking-[-0.07em] text-white sm:bottom-7 sm:left-7">
          Bisous Bisous
        </p>
      </div>
    )
  }

  if (project.visual === 'belouga') {
    return (
      <div className="relative h-full overflow-hidden bg-[#07162e] text-white">
        <Image
          src="/work/belouga-wall.png"
          alt="Univers graphique de Belouga Tournament"
          fill
          sizes="(max-width: 768px) 100vw, 70vw"
          className="object-cover opacity-75 transition-transform duration-1000 group-hover:scale-[1.025]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,22,46,.96)_0%,rgba(7,22,46,.4)_52%,rgba(7,22,46,.82)_100%)]" />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:12.5%_100%,100%_20%]"
        />
        <div className="absolute inset-x-5 top-5 z-10 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.15em] text-white/65 sm:inset-x-8 sm:top-8 sm:text-[10px]">
          <span>Compétition · communauté</span>
          <span>Fribourg — CH</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-14 sm:p-24">
          <Image
            src="/work/belouga-logo.png"
            alt="Logo Belouga Tournament"
            width={800}
            height={800}
            className="h-auto w-[min(58%,22rem)] drop-shadow-[0_24px_60px_rgba(0,0,0,.35)]"
          />
        </div>
        <p className="absolute bottom-5 left-5 right-5 text-[clamp(2.3rem,7vw,6.5rem)] font-medium leading-[0.83] tracking-[-0.065em] sm:bottom-8 sm:left-8">
          Jouer. Organiser. Diffuser.
        </p>
      </div>
    )
  }

  const days = Array.from({ length: 35 }, (_, index) => index)
  return (
    <div className="relative h-full overflow-hidden bg-[#b9d7ff] p-5 text-[#16243a] sm:p-8">
      <div className="flex items-center justify-between">
        <Image
          src="/work/shifty.png"
          alt="Logo Shifty"
          width={128}
          height={48}
          className="h-9 w-auto object-contain object-left"
        />
        <span className="rounded-full bg-[#16243a] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-white">
          Juin 2026
        </span>
      </div>
      <div className="absolute inset-x-5 bottom-5 top-24 rounded-2xl border border-[#16243a]/20 bg-[#eef5ff]/75 p-3 shadow-[0_28px_80px_rgba(22,36,58,.18)] backdrop-blur-sm sm:inset-x-12 sm:bottom-[-2rem] sm:top-28 sm:p-5">
        <div className="mb-3 grid grid-cols-7 gap-1 font-mono text-[8px] uppercase text-[#16243a]/45 sm:text-[10px]">
          {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, index) => (
            <span key={`${day}-${index.toString()}`} className="text-center">
              {day}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
          {days.map(day => (
            <span
              key={day}
              className={cn(
                'aspect-square rounded-md border border-[#16243a]/10 bg-white/55 sm:rounded-xl',
                [4, 5, 11, 12, 13, 18, 19, 25].includes(day) &&
                  'bg-[#3157d5] border-[#3157d5]',
                [7, 8, 14, 15, 21, 22, 28].includes(day) &&
                  'bg-[#d9ff43] border-[#c0e52e]',
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const ProjectCard = ({ project }: Readonly<{ project: FeaturedProject }>) => {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      id={project.slug}
      initial={reduceMotion ? false : { opacity: 0, y: 50 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="group grid grid-cols-6 border-t border-white/14 md:grid-cols-12"
    >
      <div className="col-span-6 flex min-h-56 flex-col justify-between border-b border-white/14 px-4 py-6 sm:min-h-64 sm:px-6 md:col-span-4 md:min-h-[34rem] md:border-r md:border-b-0 lg:col-span-3 lg:min-h-[42rem] lg:px-8">
        <div className="flex items-start justify-between">
          <span className="font-mono text-[10px] text-signal sm:text-xs">
            {project.index}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/38 sm:text-xs">
            {project.year}
          </span>
        </div>
        <div>
          <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.15em] text-white/42 sm:text-[10px]">
            {project.kicker}
          </p>
          <h3 className="max-w-full text-[clamp(2.35rem,5.4vw,5.5rem)] font-medium leading-[0.88] tracking-[-0.065em] [overflow-wrap:anywhere]">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="col-span-6 flex min-w-0 flex-col md:col-span-8 lg:col-span-9">
        <div className="relative aspect-[5/4] overflow-hidden border-b border-white/14 sm:aspect-[16/10] md:aspect-auto md:min-h-[28rem] lg:min-h-[34rem]">
          <ProjectVisual project={project} />
        </div>
        <div className="grid min-w-0 flex-1 grid-cols-1 gap-7 px-4 py-7 sm:grid-cols-2 sm:px-7 sm:py-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] lg:px-10">
          <p className="max-w-xl text-xl leading-snug tracking-[-0.035em] sm:text-2xl">
            {project.description}
          </p>
          <div>
            <p className="max-w-md text-sm leading-relaxed text-white/55">
              {project.detail}
            </p>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[9px] uppercase tracking-[0.12em] text-white/35 sm:text-[10px]">
              {project.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="flex items-end gap-2 lg:flex-col lg:justify-end">
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visiter ${project.title}`}
              className="flex size-12 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-[#161612]"
            >
              <ArrowUpRight className="size-4" />
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`Voir les sources de ${project.title}`}
                className="flex size-12 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-[#161612]"
              >
                <Code2 className="size-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export const ProjectsSection = () => (
  <section id="projects" className="page-gutter bg-ink text-white">
    <div className="mx-auto max-w-[1500px] border-x border-white/14">
      <div className="grid min-h-72 grid-cols-6 border-t border-white/14 sm:grid-cols-12 lg:min-h-96">
        <div className="col-span-6 flex items-start justify-between border-b border-white/14 px-4 py-5 sm:col-span-3 sm:border-r sm:border-b-0 sm:px-6 lg:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45 sm:text-xs">
            Travail sélectionné
          </p>
          <span className="font-mono text-[10px] text-signal sm:text-xs">
            03
          </span>
        </div>
        <div className="col-span-6 flex items-end px-4 py-8 sm:col-span-9 sm:px-8 lg:px-10">
          <h2 className="text-[clamp(4.4rem,11vw,12rem)] font-medium leading-[0.72] tracking-[-0.085em]">
            PROJETS
          </h2>
        </div>
      </div>

      {featuredProjects.map(project => (
        <ProjectCard key={project.slug} project={project} />
      ))}

      <div className="border-t border-white/14">
        <div className="grid grid-cols-6 sm:grid-cols-12">
          <div className="col-span-6 border-b border-white/14 px-4 py-8 sm:col-span-3 sm:border-r sm:border-b-0 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/42">
              Et aussi
            </p>
          </div>
          <div className="col-span-6 sm:col-span-9">
            {projectIndex.map((project, index) => (
              <div
                key={project.title}
                className="group grid grid-cols-[2rem_minmax(0,1fr)_auto] items-center gap-2 border-b border-white/14 px-4 py-5 transition-colors hover:bg-signal sm:grid-cols-[3rem_minmax(0,1.2fr)_minmax(0,1fr)_auto] sm:px-8 lg:px-10"
              >
                <span className="font-mono text-[9px] text-white/35">
                  {(index + featuredProjects.length + 1)
                    .toString()
                    .padStart(2, '0')}
                </span>
                <h3 className="min-w-0 text-base font-medium leading-tight tracking-[-0.025em] sm:text-xl">
                  {project.title}
                </h3>
                <span className="hidden text-sm text-white/40 transition-colors group-hover:text-white/70 sm:block">
                  {project.type}
                </span>
                <div className="flex items-center gap-3">
                  {'href' in project && project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex size-11 items-center justify-center text-white/45 transition-colors hover:text-white"
                      aria-label={`Visiter ${project.title}`}
                    >
                      <ArrowUpRight className="size-4" />
                    </a>
                  )}
                  {'github' in project && project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex size-11 items-center justify-center text-white/45 transition-colors hover:text-white"
                      aria-label={`Voir les sources de ${project.title}`}
                    >
                      <Code2 className="size-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)
