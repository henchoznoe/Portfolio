import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config/portfolio'

const robots = (): MetadataRoute.Robots => {
  const isPreviewDeployment =
    process.env.VERCEL_ENV !== undefined &&
    process.env.VERCEL_ENV !== 'production'

  if (isPreviewDeployment) {
    return { rules: [{ userAgent: '*', disallow: '/' }] }
  }

  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  }
}

export default robots
