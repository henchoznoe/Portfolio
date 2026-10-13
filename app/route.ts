import { type NextRequest, NextResponse } from 'next/server'
import { isLocale } from '@/lib/config/portfolio'

export const dynamic = 'force-dynamic'

export const GET = (request: NextRequest) => {
  const savedLocale = request.cookies.get('portfolio-locale')?.value
  const preferred = (request.headers.get('accept-language') ?? '')
    .split(',')
    .map(value => {
      const [language, ...parameters] = value.trim().split(';')
      const weight = parameters.find(parameter =>
        parameter.trim().startsWith('q='),
      )
      return {
        locale: language.toLowerCase().split('-')[0],
        quality: weight ? Number(weight.trim().slice(2)) : 1,
      }
    })
    .filter(
      ({ locale, quality }) => isLocale(locale) && quality > 0 && quality <= 1,
    )
    .sort((a, b) => b.quality - a.quality)[0]?.locale
  const locale =
    savedLocale && isLocale(savedLocale) ? savedLocale : (preferred ?? 'fr')
  const response = NextResponse.redirect(
    new URL(`/${locale}`, request.url),
    307,
  )
  response.headers.set('Cache-Control', 'private, no-store')
  response.headers.set('Vary', 'Accept-Language, Cookie')
  return response
}
