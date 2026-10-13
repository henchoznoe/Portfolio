import type { MetadataRoute } from 'next'
import { locales, projectPath, siteConfig } from '@/lib/config/portfolio'
import { projects } from '@/lib/config/projects'

const sitemap = (): MetadataRoute.Sitemap =>
  locales.flatMap(locale => [
    {
      url: `${siteConfig.url}/${locale}`,
      changeFrequency: 'monthly' as const,
      priority: 1,
      alternates: {
        languages: {
          'fr-CH': `${siteConfig.url}/fr`,
          en: `${siteConfig.url}/en`,
        },
      },
    },
    ...projects.map(project => ({
      url: `${siteConfig.url}${projectPath(locale, project.slug)}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          'fr-CH': `${siteConfig.url}${projectPath('fr', project.slug)}`,
          en: `${siteConfig.url}${projectPath('en', project.slug)}`,
        },
      },
    })),
  ])
export default sitemap
