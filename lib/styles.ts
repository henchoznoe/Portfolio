// Shared utility compositions. Component-specific styling stays in TSX.
export const container =
  'mx-auto w-[calc(100%-40px)] max-w-300 min-[600px]:w-[calc(100%-48px)] min-[820px]:w-[calc(100%-72px)] min-[1100px]:w-[calc(100%-112px)]'
export const eyebrow =
  'font-mono text-[11px] leading-[1.6] font-medium tracking-[0.09em] uppercase'
export const heading =
  'whitespace-pre-line text-[34px] leading-[1.15] font-550 tracking-tighter min-[600px]:text-[clamp(34px,3.5vw,49px)]'
export const section = 'py-16 min-[600px]:py-20 min-[820px]:py-28'
export const button =
  'inline-flex items-center justify-center gap-7 rounded border border-transparent bg-accent px-5.5 py-4.25 text-[13px] font-semibold text-white transition-[background-color,transform] duration-250 hover:-translate-y-0.5 hover:bg-[#1946bf] [&_svg]:transition-transform [&_svg]:duration-250 [&:hover_svg]:translate-x-0.5 [&:hover_svg]:-translate-y-0.5'
export const textLink =
  'inline-flex items-center gap-3 py-2.5 text-sm font-semibold [&_svg]:transition-transform [&_svg]:duration-250 [&:hover_svg]:translate-x-0.5 [&:hover_svg]:-translate-y-0.5'
export const caption =
  'mt-3.25 font-mono text-[9px] leading-[1.8] text-muted min-[600px]:text-[10px]'
export const wordmark =
  'text-[31px] leading-none font-extrabold tracking-[-0.08em] min-[600px]:text-[35px] [&>span]:text-accent'
