import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config/portfolio'

const manifest = (): MetadataRoute.Manifest => ({
  name: siteConfig.name,
  short_name: siteConfig.shortName,
  description: siteConfig.description,
  start_url: '/',
  display: 'standalone',
  background_color: '#f1efe8',
  theme_color: '#f1efe8',
})

export default manifest
