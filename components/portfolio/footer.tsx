import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { copy, type Locale, siteConfig } from '@/lib/config/portfolio'
import { container, eyebrow } from '@/lib/styles'
import { cn } from '@/lib/utils/cn'
import { Reveal } from './reveal'

interface FooterProps {
  locale: Locale
}

export const Footer = ({ locale }: Readonly<FooterProps>) => {
  const t = copy[locale].contact
  return (
    <footer
      id="contact"
      className="border-t border-line bg-[#e8eef7] pt-13.5 text-ink min-[600px]:pt-19.5"
    >
      <Reveal className={container}>
        <p className={cn(eyebrow, 'mb-8 text-[#45618e]')}>{t.label}</p>
        <div className="items-center pb-11 min-[600px]:grid min-[600px]:grid-cols-2 min-[600px]:gap-10 min-[600px]:pb-20 min-[820px]:gap-17.5">
          <div>
            <h2 className="text-[64px] leading-[1.02] font-medium tracking-tighter min-[600px]:text-[clamp(56px,6vw,82px)]">
              {t.title}
              <br />
              <span className="text-[#45618e]">{t.accent}</span>
            </h2>
            <p className="mt-6.25 text-[13px] leading-[1.9] text-muted min-[600px]:max-w-97.5">
              {t.intro}
            </p>
          </div>
          <div className="mt-10 min-[600px]:mt-0">
            <a
              className="flex justify-between gap-3.75 border-b border-[#b6c5da] pb-5 text-[21px] tracking-tight min-[600px]:text-[clamp(17px,2.1vw,27px)]"
              href={`mailto:${siteConfig.email}`}
              aria-label={`${t.email} — ${siteConfig.email}`}
            >
              {siteConfig.email}
              <ArrowUpRight aria-hidden="true" />
            </a>
            <div className="mt-5 flex gap-8.75 min-[600px]:mt-6.25 [&>a]:flex [&>a]:items-center [&>a]:gap-3 [&>a]:text-xs [&_svg]:transition-transform [&_svg]:duration-250 [&_a:hover_svg]:translate-x-0.5 [&_a:hover_svg]:-translate-y-0.5">
              <a href={siteConfig.github}>
                GitHub
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a href={siteConfig.linkedin}>
                LinkedIn
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_auto] items-center gap-x-6.25 gap-y-3.75 border-t border-[#c4d1e3] py-6 font-mono text-[8px] text-muted min-[600px]:flex min-[600px]:justify-between min-[600px]:gap-6.25 min-[820px]:text-[9px] [&>a]:flex [&>a]:items-center [&>a]:gap-2 max-[600px]:[&>span:nth-child(2)]:col-span-full max-[600px]:[&>span:nth-child(2)]:row-start-2">
          <span>© {new Date().getFullYear()} Noé Henchoz</span>
          <span>{t.credit}</span>
          <a href="#home">
            {t.top}
            <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </footer>
  )
}
