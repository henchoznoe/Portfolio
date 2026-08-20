import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config/portfolio'

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: siteConfig.url,
    changeFrequency: 'monthly',
    priority: 1,
  },
]

export default sitemap
