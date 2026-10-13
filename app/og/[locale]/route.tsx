import { ImageResponse } from 'next/og'
import { isLocale, locales } from '@/lib/config/portfolio'

export const dynamic = 'force-static'
export const generateStaticParams = () => locales.map(locale => ({ locale }))

interface OpenGraphContext {
  params: Promise<{ locale: string }>
}

export const GET = async (
  _request: Request,
  { params }: Readonly<OpenGraphContext>,
) => {
  const { locale } = await params
  if (!isLocale(locale)) return new Response('Not found', { status: 404 })
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        background: '#f7f9fc',
        color: '#1e293b',
        padding: '64px 80px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 22,
        }}
      >
        <span>N/H</span>
        <span>henchoznoe.ch</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: 100, fontWeight: 700, letterSpacing: '-5px' }}>
          Noé Henchoz.
        </span>
        <span style={{ fontSize: 36, color: '#275be8', marginTop: 16 }}>
          {locale === 'fr'
            ? 'Développement logiciel. Besoins concrets.'
            : 'Software development. Real needs.'}
        </span>
      </div>
      <div style={{ display: 'flex', fontSize: 22 }}>
        {locale === 'fr'
          ? 'Étudiant à la HEIA-FR · Bulle, Suisse'
          : 'HEIA-FR student · Bulle, Switzerland'}
      </div>
    </div>,
    { width: 1200, height: 630 },
  )
}
