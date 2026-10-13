import type { Metadata } from 'next'
import { type Locale, projectPath, siteConfig } from './portfolio'
import { additionalProjects, type Project, projects } from './projects'

export const pageMetadata = (locale: Locale, project?: Project): Metadata => {
  const title = project
    ? `${project.name} — Noé Henchoz`
    : siteConfig.title[locale]
  const description = project
    ? project.text[locale].summary
    : siteConfig.description[locale]
  const path = project ? projectPath(locale, project.slug) : `/${locale}`
  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        'fr-CH': project ? projectPath('fr', project.slug) : '/fr',
        en: project ? projectPath('en', project.slug) : '/en',
        'x-default': project ? projectPath('fr', project.slug) : '/fr',
      },
    },
    openGraph: {
      type: 'website',
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: locale === 'fr' ? 'fr_CH' : 'en_GB',
      alternateLocale: locale === 'fr' ? 'en_GB' : 'fr_CH',
      images: [{ url: `/og/${locale}`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/og/${locale}`],
    },
  }
}

const person = {
  '@type': 'Person',
  '@id': `${siteConfig.url}/#person`,
  name: siteConfig.name,
  url: siteConfig.url,
  sameAs: [siteConfig.github, siteConfig.linkedin],
  image: `${siteConfig.url}/img/noe-henchoz.jpeg`,
  knowsAbout: [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'Prisma',
    'PHP',
    'MariaDB',
    'JAX-RS',
    'Git',
    'Docker',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bulle',
    addressRegion: 'Fribourg',
    addressCountry: 'CH',
  },
}

export const createPortfolioJsonLd = (locale: Locale) => ({
  '@context': 'https://schema.org',
  '@graph': [
    person,
    {
      '@type': 'ProfilePage',
      '@id': `${siteConfig.url}/${locale}#profile`,
      url: `${siteConfig.url}/${locale}`,
      name: siteConfig.title[locale],
      description: siteConfig.description[locale],
      inLanguage: locale,
      mainEntity: { '@id': person['@id'] },
    },
    {
      '@type': 'ItemList',
      name:
        locale === 'fr' ? 'Projets de Noé Henchoz' : 'Projects by Noé Henchoz',
      numberOfItems: projects.length + additionalProjects.length,
      itemListElement: [
        ...projects.map(project => ({
          name: project.name,
          url: `${siteConfig.url}${projectPath(locale, project.slug)}`,
          description: project.text[locale].summary,
        })),
        ...additionalProjects.map(project => ({
          name: project.name,
          url: project.href,
          description: project.type[locale],
        })),
      ].map((project, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: { '@type': 'CreativeWork', ...project },
      })),
    },
  ],
})

export const createProjectJsonLd = (project: Project, locale: Locale) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: project.name,
  description: project.text[locale].summary,
  url: `${siteConfig.url}${projectPath(locale, project.slug)}`,
  inLanguage: locale,
  keywords: project.tags.join(', '),
  ...(project.cover ? { image: `${siteConfig.url}${project.cover}` } : {}),
  contributor: {
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
  },
})
