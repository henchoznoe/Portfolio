import { notFound } from 'next/navigation'
import { Home } from '@/components/portfolio/home'
import { isLocale } from '@/lib/config/portfolio'
import { pageMetadata } from '@/lib/config/seo'

interface PageProps {
  params: Promise<{ locale: string }>
}
export const generateMetadata = async ({ params }: Readonly<PageProps>) => {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return pageMetadata(locale)
}
const Page = async ({ params }: Readonly<PageProps>) => {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <Home locale={locale} />
}

export default Page
