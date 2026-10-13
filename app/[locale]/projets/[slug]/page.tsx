import { notFound } from 'next/navigation'
import { CaseStudy } from '@/components/portfolio/case-study'
import { projects } from '@/lib/config/projects'
import { pageMetadata } from '@/lib/config/seo'

type Props = { params: Promise<{ locale: string; slug: string }> }
export const dynamicParams = false
export const generateStaticParams = () =>
  projects.map(({ slug }) => ({ locale: 'fr', slug }))
async function resolveProject(params: Props['params']) {
  const { locale, slug } = await params
  const project = projects.find(project => project.slug === slug)
  if (locale !== 'fr' || !project) notFound()
  return project
}
export async function generateMetadata({ params }: Props) {
  return pageMetadata('fr', await resolveProject(params))
}
export default async function Page({ params }: Props) {
  return <CaseStudy locale="fr" project={await resolveProject(params)} />
}
