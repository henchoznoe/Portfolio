import { eyebrow, heading } from '@/lib/styles'
import { cn } from '@/lib/utils/cn'

export const SectionHeading = ({
  label,
  title,
  intro,
}: {
  label: string
  title: string
  intro: string
}) => (
  <div className="mb-8 min-[600px]:mb-[52px] min-[600px]:flex min-[600px]:items-end min-[600px]:justify-between min-[600px]:gap-10 min-[820px]:gap-[60px]">
    <div>
      <p
        className={cn(
          eyebrow,
          'mb-[18px] text-[10px] text-accent min-[600px]:mb-[25px] min-[600px]:text-[11px]',
        )}
      >
        {label}
      </p>
      <h2 className={heading}>{title}</h2>
    </div>
    <p className="mt-5 text-[13px] leading-[1.8] text-muted min-[600px]:mt-0 min-[600px]:max-w-[240px] min-[600px]:text-xs min-[820px]:max-w-[310px] min-[820px]:text-sm">
      {intro}
    </p>
  </div>
)
