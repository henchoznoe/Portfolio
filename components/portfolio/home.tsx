import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Dumbbell,
  MapPin,
  Mountain,
  MoveUpRight,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { JsonLd } from '@/components/seo/json-ld'
import {
  copy,
  type Locale,
  projectPath,
  siteConfig,
} from '@/lib/config/portfolio'
import { additionalProjects, projects } from '@/lib/config/projects'
import { createPortfolioJsonLd } from '@/lib/config/seo'
import {
  button,
  container,
  eyebrow,
  heading,
  section,
  textLink,
} from '@/lib/styles'
import { cn } from '@/lib/utils/cn'
import { Footer } from './footer'
import { ProjectVisual } from './project-visual'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export const Home = ({ locale }: { locale: Locale }) => {
  const t = copy[locale]
  return (
    <>
      <main id="main-content" tabIndex={-1}>
        <JsonLd data={createPortfolioJsonLd(locale)} />
        <section
          id="home"
          className={cn(
            'flex min-h-[calc(100dvh-var(--header-height))] flex-col pt-[43px] min-[600px]:pt-[65px] min-[820px]:pt-[76px] min-[1600px]:pt-[110px]',
            container,
          )}
        >
          <div className="grid flex-1 grid-cols-1 items-center gap-[34px] pb-[35px] min-[600px]:grid-cols-[minmax(0,1fr)_230px] min-[600px]:gap-[30px] min-[600px]:pb-[60px] min-[820px]:grid-cols-[minmax(0,1fr)_270px] min-[820px]:gap-10 min-[820px]:pb-[76px] min-[1100px]:grid-cols-[minmax(0,1fr)_310px] min-[1100px]:gap-[65px] min-[1600px]:pb-[100px]">
            <div className="border-l-2 border-accent pl-[18px] min-[600px]:pl-[30px]">
              <p
                className={cn(
                  eyebrow,
                  'text-accent max-[600px]:text-[9px] max-[600px]:tracking-[0.07em]',
                )}
              >
                {t.hero.eyebrow}
              </p>
              <h1 className="my-[25px] text-[clamp(35px,9.6vw,54px)] leading-[1.12] font-[650] tracking-[-0.055em] min-[600px]:my-[26px] min-[600px]:text-[47px] min-[820px]:text-[58px] min-[1100px]:text-[clamp(48px,5.1vw,72px)]">
                {t.hero.title}
                <br />
                <span className="text-accent">{t.hero.accent}</span>
              </h1>
              <p className="max-w-[520px] text-sm leading-[1.85] text-[#526077] min-[600px]:text-[15px] min-[1100px]:text-base">
                {t.hero.intro}
              </p>
              <div className="mt-[25px] flex flex-wrap items-center gap-3 min-[600px]:mt-[30px] min-[600px]:gap-5 min-[820px]:gap-7">
                <Link
                  className={cn(
                    button,
                    'max-[820px]:gap-[15px] max-[820px]:px-[17px] max-[820px]:py-[15px]',
                  )}
                  href={`/${locale}#projects`}
                >
                  {t.hero.work}
                  <ArrowDownRight size={18} aria-hidden="true" />
                </Link>
                <a
                  className={cn(
                    textLink,
                    'max-[820px]:gap-2 max-[820px]:text-xs',
                  )}
                  href={`mailto:${siteConfig.email}`}
                >
                  {t.hero.contact}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="relative grid grid-cols-[96px_1fr] items-center gap-x-5 rounded-xl border border-[#d2dfff] bg-[#e8efff] p-[18px] min-[600px]:block min-[600px]:rounded-[18px] min-[600px]:p-[27px]">
              <div className="relative row-span-2 w-24 p-1.5 min-[600px]:w-auto min-[600px]:p-3 [&>img]:relative [&>img]:z-1 [&>img]:aspect-square [&>img]:rounded-full [&>img]:object-cover">
                <Image
                  src="/img/noe-henchoz.jpeg"
                  alt={t.hero.portrait}
                  width={800}
                  height={800}
                  sizes="(max-width: 600px) 96px, (max-width: 820px) 180px, 250px"
                  preload
                />
                <span
                  className="absolute inset-0 rounded-full border border-[#abc3fb] after:absolute after:top-[10%] after:left-[14%] after:size-3 after:rounded-full after:border-[3px] after:border-[#e8efff] after:bg-accent after:content-['']"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-col gap-[5px] self-end text-left min-[600px]:mt-6 min-[600px]:text-center [&>strong]:text-lg [&>strong]:font-[650] [&>strong]:tracking-[-0.035em] min-[600px]:[&>strong]:text-xl [&>span]:text-[10px] [&>span]:text-[#526077] min-[600px]:[&>span]:text-[11px]">
                <strong>Noé Henchoz</strong>
                <span>
                  {locale === 'fr'
                    ? 'Étudiant en informatique'
                    : 'Computer science student'}
                </span>
              </div>
              <p className="mt-2.5 flex items-center justify-start gap-[7px] self-start font-mono text-[8px] leading-[1.8] text-muted min-[600px]:mt-[17px] min-[600px]:justify-center min-[600px]:text-[9px] min-[600px]:leading-normal">
                <MapPin size={14} aria-hidden="true" />
                {t.hero.location}
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center justify-between gap-6 border-t border-line py-5 min-[600px]:py-[25px]">
            <div className="flex flex-col items-start gap-[7px] min-[600px]:flex-row min-[600px]:items-center min-[600px]:gap-[15px] min-[1100px]:gap-[25px]">
              <span
                className={cn(
                  eyebrow,
                  'text-accent max-[600px]:text-[9px] max-[600px]:tracking-[0.07em]',
                )}
              >
                {t.hero.current}
              </span>
              <span className="text-[11px] min-[600px]:text-xs">
                {t.hero.currentValue}
              </span>
            </div>
            <a
              className="hidden items-center gap-4 text-[10px] text-muted min-[820px]:flex min-[1100px]:text-[11px]"
              href="#projects"
            >
              {t.hero.scroll}
              <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
        </section>
        <section
          id="projects"
          className={cn(section, 'border-t border-line bg-[#eef3fa]')}
        >
          <div className={container}>
            <Reveal>
              <SectionHeading
                label={t.projects.label}
                title={t.projects.title}
                intro={t.projects.intro}
              />
            </Reveal>
            <div className="grid grid-cols-1 gap-[38px] min-[600px]:grid-cols-2 min-[600px]:gap-x-[22px] min-[600px]:gap-y-[42px] min-[820px]:gap-x-8 min-[820px]:gap-y-[52px]">
              {projects.map(project => (
                <Reveal key={project.slug}>
                  <article className="group/project relative">
                    <div>
                      <div className="relative overflow-hidden rounded-[5px]">
                        <ProjectVisual project={project} locale={locale} />
                        <span
                          className="absolute right-4 bottom-4 flex size-[42px] items-center justify-center rounded-full bg-paper transition-[transform,background-color] duration-250 group-hover/project:rotate-45 group-hover/project:bg-[#dce7ff]"
                          aria-hidden="true"
                        >
                          <ArrowUpRight size={24} />
                        </span>
                      </div>
                      <div className="grid grid-cols-[24px_1fr] gap-x-2 pt-[19px] min-[600px]:gap-x-[14px] min-[600px]:pt-[23px]">
                        <span className="pt-0.5 font-mono text-[10px] text-muted">
                          {project.number}
                        </span>
                        <div>
                          <p
                            className={cn(
                              eyebrow,
                              'mb-[7px] text-[9px] text-muted',
                            )}
                          >
                            {project.text[locale].category}
                          </p>
                          <h3 className="text-[25px] font-semibold tracking-[-0.04em] min-[600px]:text-2xl min-[820px]:text-[27px]">
                            <Link
                              className="after:absolute after:inset-0 after:z-2 after:rounded-[5px] after:content-[''] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-6 focus-visible:after:outline-accent"
                              href={projectPath(locale, project.slug)}
                            >
                              {project.name}
                              <span className="sr-only">
                                {' '}
                                — {t.projects.read}
                              </span>
                            </Link>
                          </h3>
                          <p className="mt-[9px] max-w-[470px] text-[13px] leading-[1.75] text-muted min-[600px]:text-xs min-[820px]:text-[13px]">
                            {project.text[locale].summary}
                          </p>
                        </div>
                        <ul
                          className="col-start-2 mt-[18px] flex flex-wrap gap-1.5 [&>li]:rounded-[3px] [&>li]:border [&>li]:border-[#ccd8e9] [&>li]:px-[7px] [&>li]:py-1 [&>li]:font-mono [&>li]:text-[9px]"
                          aria-label={t.caseStudy.tools}
                        >
                          {project.tags.map(tag => (
                            <li key={tag}>{tag}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="mt-[50px] border-t border-[#ccd8e9] pt-[30px] min-[600px]:mt-20 min-[600px]:grid min-[600px]:grid-cols-[1fr_1.5fr] min-[600px]:gap-[35px] min-[600px]:pt-[42px] min-[820px]:grid-cols-[1fr_1.6fr] min-[820px]:gap-[60px]">
              <div>
                <h3 className="text-[27px] font-[550] tracking-[-0.04em] min-[600px]:text-[30px]">
                  {t.projects.more}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-muted">
                  {t.projects.moreIntro}
                </p>
              </div>
              <div className="mt-[30px] min-[600px]:mt-0">
                {additionalProjects.map(project => (
                  <a
                    className="grid grid-cols-[1fr_1.25fr_17px] items-center gap-3 border-b border-[#ccd8e9] py-5 transition-colors duration-200 first:pt-0 hover:text-accent min-[600px]:grid-cols-[1fr_1.5fr_20px] min-[600px]:gap-[15px]"
                    key={project.name}
                    href={project.href}
                  >
                    <span className="text-xs font-semibold min-[600px]:text-sm">
                      {project.name}
                    </span>
                    <span className="text-[10px] leading-[1.6] text-muted min-[600px]:leading-normal min-[820px]:text-[11px]">
                      {project.type[locale]}
                    </span>
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="about" className={section}>
          <div
            className={cn(
              container,
              'min-[600px]:grid min-[600px]:grid-cols-[0.9fr_1.1fr] min-[600px]:gap-10 min-[820px]:grid-cols-[1fr_1.25fr] min-[820px]:gap-[60px] min-[1100px]:gap-[100px]',
            )}
          >
            <Reveal>
              <div>
                <p
                  className={cn(
                    eyebrow,
                    'mb-[18px] text-[10px] text-accent min-[600px]:mb-[25px] min-[600px]:text-[11px]',
                  )}
                >
                  {t.about.label}
                </p>
                <h2 className={heading}>{t.about.title}</h2>
                <p className="mt-[25px] text-sm leading-[1.9] text-muted min-[600px]:max-w-[350px]">
                  {t.about.intro}
                </p>
                <a
                  href={siteConfig.linkedin}
                  className={cn(textLink, 'mt-[15px] min-[600px]:mt-[25px]')}
                >
                  LinkedIn
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
            <div className="mt-[42px] min-[600px]:mt-0">
              {[
                { title: t.about.experience, items: t.about.experiences },
                { title: t.about.education, items: t.about.educationItems },
              ].map(group => (
                <div
                  key={group.title}
                  className="[&+&]:mt-10 min-[600px]:[&+&]:mt-[52px]"
                >
                  <h3
                    className={cn(
                      eyebrow,
                      'mb-[26px] border-b border-line pb-[18px] text-accent',
                    )}
                  >
                    {group.title}
                  </h3>
                  {group.items.map(item => (
                    <article
                      key={item.organization}
                      className="relative border-l border-line pb-[33px] pl-5 last:pb-0 min-[600px]:pl-[25px] before:absolute before:top-1.5 before:-left-[3px] before:size-[5px] before:rounded-full before:bg-accent before:content-['']"
                    >
                      <p className="mb-3 font-mono text-[10px] text-muted">
                        {item.date}
                      </p>
                      <h4 className="text-[21px] font-semibold tracking-[-0.035em] min-[600px]:text-[19px] min-[820px]:text-[22px]">
                        {item.organization}
                      </h4>
                      <p className="mt-[7px] text-sm">{item.title}</p>
                      <p className="mt-[7px] text-[11px] text-muted">
                        {item.location}
                      </p>
                      <p className="mt-3.5 max-w-[440px] text-[13px] leading-[1.8] text-muted">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="skills" className={cn(section, 'border-t border-line')}>
          <div className={container}>
            <Reveal>
              <SectionHeading
                label={t.skills.label}
                title={t.skills.title}
                intro={t.skills.intro}
              />
            </Reveal>
            <div className="grid grid-cols-1 gap-5 min-[820px]:grid-cols-3">
              {t.skills.groups.map((group, i) => (
                <article
                  key={group.title}
                  className="flex flex-col rounded border border-line bg-soft p-6 min-[600px]:grid min-[600px]:grid-cols-[1fr_1.2fr] min-[600px]:gap-x-[35px] min-[600px]:p-[23px] min-[820px]:flex min-[1100px]:p-7"
                >
                  <div className="mb-[25px] flex items-center justify-between text-accent min-[600px]:col-span-full min-[600px]:mb-5 min-[820px]:mb-[35px]">
                    <span className={eyebrow}>0{i + 1}</span>
                    <Braces size={24} strokeWidth={1.3} aria-hidden="true" />
                  </div>
                  <h3 className="text-[22px] font-semibold tracking-[-0.04em] min-[600px]:text-lg min-[1100px]:text-xl">
                    {group.title}
                  </h3>
                  <p className="mt-[13px] text-[13px] leading-[1.8] text-muted min-[600px]:col-start-1 min-[600px]:text-xs">
                    {group.description}
                  </p>
                  <ul className="my-[22px] flex flex-wrap gap-[7px] min-[600px]:col-start-2 min-[600px]:row-[2/4] min-[600px]:m-0 min-[600px]:content-start min-[820px]:mt-6 min-[820px]:mb-[35px]">
                    {group.skills.map(skill => (
                      <li
                        className="rounded-[3px] border border-line bg-paper px-[9px] py-[7px] text-[10px]"
                        key={skill}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={projectPath(locale, group.project)}
                    className="flex items-center justify-between gap-3 border-t border-line pt-4 text-[11px] leading-[1.7] text-accent min-[600px]:col-span-full min-[600px]:mt-[22px] min-[820px]:mt-auto"
                  >
                    {group.example}
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="life" className={cn(section, 'border-t border-line')}>
          <div
            className={cn(
              container,
              'min-[600px]:grid min-[600px]:grid-cols-2 min-[600px]:gap-[35px] min-[820px]:grid-cols-[1.1fr_1fr] min-[820px]:gap-[50px] min-[1100px]:gap-[85px]',
            )}
          >
            <Reveal>
              <div>
                <p
                  className={cn(
                    eyebrow,
                    'mb-[18px] text-[10px] text-accent min-[600px]:mb-[25px] min-[600px]:text-[11px]',
                  )}
                >
                  {t.interests.label}
                </p>
                <h2 className={heading}>{t.interests.title}</h2>
                <p className="mt-[25px] max-w-[440px] text-sm leading-[1.9] text-muted">
                  {t.interests.intro}
                </p>
              </div>
            </Reveal>
            <div className="mt-[35px] min-[600px]:mt-0">
              {t.interests.items.map((item, i) => {
                const Icon = [Dumbbell, MoveUpRight, Mountain][i]
                return (
                  <div
                    className="flex items-center gap-[15px] border-b border-line py-[25px] first:pt-0 min-[820px]:gap-[22px]"
                    key={item.title}
                  >
                    <span className="flex h-[60px] w-[54px] shrink-0 items-center justify-center rounded bg-soft text-accent">
                      <Icon size={30} strokeWidth={1.25} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-[550] tracking-[-0.03em]">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-[1.7] text-muted min-[600px]:text-[11px]">
                        {item.description}
                      </p>
                    </div>
                    <span
                      className="ml-auto font-mono text-[9px] text-muted min-[600px]:hidden min-[820px]:block"
                      aria-hidden="true"
                    >
                      0{i + 1}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  )
}
