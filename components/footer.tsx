import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/lib/config/portfolio'

const SocialLink = ({
  href,
  label,
}: Readonly<{
  href: string
  label: string
}>) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="flex h-12 items-center justify-center rounded-full border border-white/20 px-5 font-mono text-[9px] uppercase tracking-[0.12em] transition-colors hover:border-signal hover:bg-signal"
  >
    {label}
  </a>
)

export const Footer = () => (
  <footer id="contact" className="page-gutter bg-ink text-cream">
    <div className="mx-auto max-w-[1500px] border-x border-white/14">
      <div className="grid min-h-[42rem] grid-cols-6 border-t border-white/14 sm:min-h-[72vh] sm:grid-cols-12">
        <div className="col-span-6 flex items-start justify-between border-b border-white/14 px-4 py-5 sm:col-span-3 sm:border-r sm:border-b-0 sm:px-6 lg:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] sm:text-xs">
            Contact
          </p>
          <span className="font-mono text-[10px] sm:text-xs">05</span>
        </div>
        <div className="col-span-6 flex flex-col justify-between px-4 py-8 sm:col-span-9 sm:px-8 lg:px-10">
          <p className="max-w-4xl text-[clamp(3.25rem,9vw,10rem)] font-medium leading-[0.84] tracking-[-0.075em]">
            UNE IDÉE
            <br />
            EN TÊTE<span className="text-signal">?</span>
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="group mt-16 border-b border-white/25 pb-3 text-[clamp(1rem,3.4vw,3.6rem)] tracking-[-0.04em] transition-colors hover:text-signal"
          >
            <span className="flex items-center justify-between gap-3">
              {siteConfig.email}
              <ArrowUpRight className="size-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:size-10" />
            </span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-6 border-y border-white/14 sm:grid-cols-12">
        <div className="col-span-6 flex items-center justify-between px-4 py-5 sm:col-span-3 sm:border-r sm:border-white/14 sm:px-6 lg:px-8">
          <span className="font-mono text-[9px] uppercase tracking-[0.14em]">
            Fribourg, Suisse
          </span>
          <span className="size-2 rounded-full bg-signal" />
        </div>
        <div className="col-span-6 flex flex-col gap-5 border-t border-white/14 px-4 py-5 sm:col-span-9 sm:flex-row sm:items-center sm:justify-between sm:border-t-0 sm:px-8 lg:px-10">
          <p className="font-mono text-[9px] uppercase tracking-[0.12em]">
            © {new Date().getFullYear()} Noé Henchoz — Conçu & développé avec
            attention.
          </p>
          <div className="flex gap-2">
            <SocialLink href={siteConfig.github} label="GitHub" />
            <SocialLink href={siteConfig.linkedin} label="LinkedIn" />
          </div>
        </div>
      </div>
    </div>
  </footer>
)
