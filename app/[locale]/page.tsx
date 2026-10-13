import { notFound } from 'next/navigation'
import { Home } from '@/components/portfolio/home'
import { isLocale } from '@/lib/config/portfolio'
import { pageMetadata } from '@/lib/config/seo'

type Props = { params: Promise<{ locale: string }> }
export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return pageMetadata(locale)
}
export default async function Page({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <Home locale={locale} />
}
