import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { JsonLd } from '@/components/seo/json-ld'
import { copy, type Locale, projectPath } from '@/lib/config/portfolio'
import { type Project, projects } from '@/lib/config/projects'
import { createProjectJsonLd } from '@/lib/config/seo'
import {
  button,
  caption,
  container,
  eyebrow,
  heading,
  textLink,
} from '@/lib/styles'
import { cn } from '@/lib/utils/cn'
import { Footer } from './footer'
import { ProjectVisual } from './project-visual'
import { Reveal } from './reveal'

interface CaseStudyProps {
  project: Project
  locale: Locale
}

export const CaseStudy = ({ project, locale }: Readonly<CaseStudyProps>) => {
  const t = copy[locale].caseStudy
  const text = project.text[locale]
  const next = projects[(projects.indexOf(project) + 1) % projects.length]
  return (
    <>
      <main id="main-content" tabIndex={-1}>
        <JsonLd data={createProjectJsonLd(project, locale)} />
        <div id="home" className={cn('pt-7.5 min-[600px]:pt-12', container)}>
          <Link
            className="mb-10 inline-flex items-center gap-2.5 text-xs text-muted hover:text-accent min-[600px]:mb-17.5"
            href={`/${locale}#projects`}
          >
            <ArrowLeft size={16} aria-hidden="true" />
            {t.back}
          </Link>
          <p className={cn(eyebrow, 'text-accent max-[600px]:text-[9px]')}>
            {t.label} / {project.number} — {text.category}
          </p>
          <h1 className="mt-5 text-[44px] leading-[1.12] font-550 tracking-[-0.065em] wrap-anywhere min-[600px]:text-[clamp(44px,6.7vw,88px)]">
            {project.name}
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-5 max-w-185 text-base leading-[1.7] text-muted min-[600px]:mt-6 min-[600px]:text-xl">
            {text.summary}
          </p>
          <div className="mt-7.5 grid grid-cols-1 gap-5 border-t border-line pt-6 pb-7.5 min-[600px]:mt-12 min-[600px]:grid-cols-3 min-[600px]:gap-11.25 min-[600px]:pb-10.5 [&_p]:mt-1.25 [&_p]:text-xs [&_p]:leading-[1.8] min-[600px]:[&_p]:mt-2.25">
            <div>
              <span className={cn(eyebrow, 'text-[9px] text-muted')}>
                {t.role}
              </span>
              <p>{text.role}</p>
            </div>
            <div>
              <span className={cn(eyebrow, 'text-[9px] text-muted')}>
                {t.scope}
              </span>
              <p>{text.scope}</p>
            </div>
            <div>
              <span className={cn(eyebrow, 'text-[9px] text-muted')}>
                {t.tools}
              </span>
              <p>{project.tags.join(' · ')}</p>
            </div>
          </div>
        </div>
        <div className={container}>
          <figure>
            <ProjectVisual
              project={project}
              locale={locale}
              variant="cover"
              priority
            />
            <figcaption className={caption}>{text.coverCaption}</figcaption>
          </figure>
        </div>
        <div className={cn(container, 'pt-6.25 min-[600px]:pt-17.5')}>
          <section className="grid grid-cols-1 gap-4.5 border-b border-line py-7.5 min-[600px]:grid-cols-[1fr_2fr] min-[600px]:gap-15 min-[600px]:py-11.25 [&>div>h2]:mb-3.75 [&>div>h2]:text-[27px] min-[600px]:[&>div>h2]:mb-5 min-[600px]:[&>div>h2]:text-[32px] [&>div>p]:text-sm [&>div>p]:leading-[1.9] [&>div>p]:text-muted min-[600px]:[&>div>p]:text-base">
            <p
              className={cn(
                eyebrow,
                'mt-2.5 text-accent max-[600px]:text-[9px]',
              )}
            >
              01 / {t.context}
            </p>
            <div>
              <h2 className={heading}>{t.context}</h2>
              <p>{text.context}</p>
            </div>
          </section>
          <section className="grid grid-cols-1 gap-4.5 border-b border-line py-7.5 min-[600px]:grid-cols-[1fr_2fr] min-[600px]:gap-15 min-[600px]:py-11.25 [&>div>h2]:mb-3.75 [&>div>h2]:text-[27px] min-[600px]:[&>div>h2]:mb-5 min-[600px]:[&>div>h2]:text-[32px] [&>div>p]:text-sm [&>div>p]:leading-[1.9] [&>div>p]:text-muted min-[600px]:[&>div>p]:text-base">
            <p
              className={cn(
                eyebrow,
                'mt-2.5 text-accent max-[600px]:text-[9px]',
              )}
            >
              02 / {t.contribution}
            </p>
            <div>
              <h2 className={heading}>{t.contribution}</h2>
              <p>{text.contribution}</p>
            </div>
          </section>
          <section className="pt-8.75 min-[600px]:pt-13.75">
            <p className={cn(eyebrow, 'mb-7 text-accent')}>
              03 / {t.decisions}
            </p>
            <div className="grid grid-cols-1 gap-6.25 min-[600px]:grid-cols-3 [&>article]:border-t [&>article]:border-line [&>article]:pt-5 [&_h3]:mt-3.5 [&_h3]:mb-3.5 [&_h3]:text-[21px] [&_h3]:font-550 [&_h3]:tracking-[-0.035em] min-[600px]:[&_h3]:mt-5.5 [&_p]:text-[13px] [&_p]:leading-[1.85] [&_p]:text-muted">
              {text.decisions.map((decision, i) => (
                <article key={decision.title}>
                  <span className="font-mono text-[10px] text-muted">
                    0{i + 1}
                  </span>
                  <h3>{decision.title}</h3>
                  <p>{decision.text}</p>
                </article>
              ))}
            </div>
          </section>
          <Reveal>
            <figure className="mt-10 mb-2.5 min-[600px]:mt-17.5 min-[600px]:mb-8.75">
              <ProjectVisual
                project={project}
                locale={locale}
                variant="detail"
                detail
              />
              <figcaption className={caption}>{text.detailCaption}</figcaption>
            </figure>
          </Reveal>
          <section className="grid grid-cols-1 gap-4.5 border-b border-line py-7.5 min-[600px]:grid-cols-[1fr_2fr] min-[600px]:gap-15 min-[600px]:py-11.25 [&>div>h2]:mb-3.75 [&>div>h2]:text-[27px] min-[600px]:[&>div>h2]:mb-5 min-[600px]:[&>div>h2]:text-[32px] [&>div>p]:text-sm [&>div>p]:leading-[1.9] [&>div>p]:text-muted min-[600px]:[&>div>p]:text-base">
            <p
              className={cn(
                eyebrow,
                'mt-2.5 text-accent max-[600px]:text-[9px]',
              )}
            >
              04 / {t.challenge}
            </p>
            <div>
              <h2 className={heading}>{t.challenge}</h2>
              <p>{text.challenge}</p>
            </div>
          </section>
          <section className="grid grid-cols-1 gap-4.5 border-b border-line py-7.5 min-[600px]:grid-cols-[1fr_2fr] min-[600px]:gap-15 min-[600px]:py-11.25 [&>div>h2]:mb-3.75 [&>div>h2]:text-[27px] min-[600px]:[&>div>h2]:mb-5 min-[600px]:[&>div>h2]:text-[32px] [&>div>p]:text-sm [&>div>p]:leading-[1.9] [&>div>p]:text-muted min-[600px]:[&>div>p]:text-base">
            <p
              className={cn(
                eyebrow,
                'mt-2.5 text-accent max-[600px]:text-[9px]',
              )}
            >
              05 / {t.result}
            </p>
            <div>
              <h2 className={heading}>{t.result}</h2>
              <p>{text.result}</p>
              <div className="mt-7 flex flex-wrap items-center gap-6.25">
                {project.website ? (
                  <a className={button} href={project.website}>
                    {t.visit}
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                ) : null}
                {project.github ? (
                  <a className={textLink} href={project.github}>
                    {t.code}
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="bg-soft px-3.75 py-2.5 font-mono text-[11px]">
                    {t.internal}
                  </span>
                )}
              </div>
            </div>
          </section>
          <Link
            className="mt-10 mb-12.5 flex items-center justify-between gap-5 border border-line px-5 py-6.25 transition-colors duration-250 hover:bg-soft min-[600px]:mt-15 min-[600px]:mb-20 min-[600px]:p-8.75 [&>span]:flex [&>span]:flex-col [&>span]:gap-3.5 [&_strong]:text-2xl [&_strong]:font-550 [&_strong]:tracking-[-0.04em] min-[600px]:[&_strong]:text-[32px]"
            href={projectPath(locale, next.slug)}
          >
            <span>
              <span className={cn(eyebrow, 'text-[9px] text-muted')}>
                {t.next}
              </span>
              <strong>{next.name}</strong>
            </span>
            <ArrowRight size={34} strokeWidth={1.4} aria-hidden="true" />
          </Link>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  )
}
