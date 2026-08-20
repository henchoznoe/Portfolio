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
  icons: [
    {
      src: '/icon',
      sizes: '64x64',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: '/apple-icon',
      sizes: '180x180',
      type: 'image/png',
      purpose: 'any',
    },
  ],
})

export default manifest
