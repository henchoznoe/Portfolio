import {
  featuredProjects,
  projectIndex,
  siteConfig,
} from '@/lib/config/portfolio'

const personId = `${siteConfig.url}/#person`
const websiteId = `${siteConfig.url}/#website`
const profileId = `${siteConfig.url}/#profile`
const projectsId = `${siteConfig.url}/#projects`

const indexedProjects = [
  ...featuredProjects.map(project => ({
    name: project.title,
    description: project.description,
    url: project.href,
    year: project.year,
    keywords: project.tags,
  })),
  ...projectIndex.map(project => ({
    name: project.title,
    description: project.type,
    url: 'href' in project ? project.href : project.github,
    year: project.year,
    keywords: [project.type],
  })),
]

export const createPortfolioJsonLd = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: siteConfig.url,
      name: siteConfig.name,
      alternateName: 'Portfolio de Noé Henchoz',
      description: siteConfig.description,
      inLanguage: siteConfig.language,
      author: { '@id': personId },
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: siteConfig.name,
      givenName: 'Noé',
      familyName: 'Henchoz',
      url: siteConfig.url,
      email: siteConfig.email,
      jobTitle: 'Développeur full-stack et étudiant en ingénierie logicielle',
      sameAs: [siteConfig.github, siteConfig.linkedin],
      knowsAbout: siteConfig.knowsAbout,
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.location.locality,
        addressRegion: siteConfig.location.region,
        addressCountry: siteConfig.location.country,
      },
    },
    {
      '@type': 'ProfilePage',
      '@id': profileId,
      url: siteConfig.url,
      name: siteConfig.title,
      description: siteConfig.description,
      inLanguage: siteConfig.language,
      isPartOf: { '@id': websiteId },
      mainEntity: { '@id': personId },
      hasPart: { '@id': projectsId },
    },
    {
      '@type': 'ItemList',
      '@id': projectsId,
      name: 'Projets sélectionnés de Noé Henchoz',
      numberOfItems: indexedProjects.length,
      itemListElement: indexedProjects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: project.name,
          description: project.description,
          url: project.url,
          dateCreated: project.year,
          keywords: project.keywords.join(', '),
          creator: { '@id': personId },
        },
      })),
    },
  ],
})
