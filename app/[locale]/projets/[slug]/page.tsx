import { notFound } from 'next/navigation'
import { CaseStudy } from '@/components/portfolio/case-study'
import { projects } from '@/lib/config/projects'
import { pageMetadata } from '@/lib/config/seo'

interface PageProps {
  params: Promise<{ locale: string; slug: string }>
}
export const dynamicParams = false
export const generateStaticParams = () =>
  projects.map(({ slug }) => ({ locale: 'fr', slug }))
const resolveProject = async (params: PageProps['params']) => {
  const { locale, slug } = await params
  const project = projects.find(project => project.slug === slug)
  if (locale !== 'fr' || !project) notFound()
  return project
}
export const generateMetadata = async ({ params }: Readonly<PageProps>) => {
  return pageMetadata('fr', await resolveProject(params))
}
const Page = async ({ params }: Readonly<PageProps>) => {
  return <CaseStudy locale="fr" project={await resolveProject(params)} />
}

export default Page
