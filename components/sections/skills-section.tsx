import { capabilityGroups } from '@/lib/config/portfolio'

export const SkillsSection = () => (
  <section
    id="skills"
    className="page-gutter bg-cream py-24 text-ink sm:py-36 lg:py-48"
  >
    <div className="mx-auto max-w-[1500px] border-x border-[#161612]/10">
      <div className="grid grid-cols-6 border-y border-[#161612]/10 sm:grid-cols-12">
        <div className="col-span-6 flex min-h-28 items-start justify-between border-b border-[#161612]/10 px-4 py-5 sm:col-span-3 sm:border-r sm:border-b-0 sm:px-6 lg:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#161612]/50 sm:text-xs">
            Manière de faire
          </p>
          <span className="font-mono text-[10px] text-signal sm:text-xs">
            04
          </span>
        </div>
        <div className="col-span-6 px-4 py-8 sm:col-span-9 sm:px-8 lg:px-10">
          <h2 className="max-w-5xl text-[clamp(2.75rem,7.5vw,8.5rem)] font-medium leading-[0.9] tracking-[-0.065em]">
            DU PREMIER TRAIT AU DERNIER{' '}
            <span className="font-serif italic text-signal">deploy.</span>
          </h2>
        </div>
      </div>

      {capabilityGroups.map(group => (
        <article
          key={group.index}
          className="group grid grid-cols-6 border-b border-[#161612]/10 transition-colors hover:bg-white/45 sm:grid-cols-12"
        >
          <div className="col-span-1 px-4 py-7 sm:px-6 lg:px-8">
            <span className="font-mono text-[10px] text-signal sm:text-xs">
              {group.index}
            </span>
          </div>
          <div className="col-span-5 px-2 py-7 sm:col-span-3 sm:border-r sm:border-[#161612]/10">
            <h3 className="text-2xl font-medium tracking-[-0.045em] sm:text-3xl lg:text-4xl">
              {group.title}
            </h3>
          </div>
          <div className="col-span-6 px-4 pb-7 sm:col-span-4 sm:px-7 sm:py-7 lg:px-9">
            <p className="max-w-md text-sm leading-relaxed text-[#161612]/58">
              {group.description}
            </p>
          </div>
          <div className="col-span-6 flex flex-wrap content-start gap-x-4 gap-y-2 border-t border-[#161612]/10 px-4 py-5 font-mono text-[9px] uppercase tracking-[0.13em] text-[#161612]/45 sm:col-span-4 sm:border-t-0 sm:border-l sm:px-7 sm:py-7 sm:text-[10px]">
            {group.items.map(item => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
      ))}

      <div className="grid grid-cols-6 sm:grid-cols-12">
        <div className="col-span-6 min-h-40 border-b border-[#161612]/10 px-4 py-7 sm:col-span-3 sm:border-r sm:border-b-0 sm:px-6 lg:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#161612]/45">
            En continu
          </p>
        </div>
        <div className="col-span-6 px-4 py-8 sm:col-span-9 sm:px-8 lg:px-10">
          <p className="max-w-4xl text-2xl leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            Apprendre, documenter, automatiser, remettre en question — puis
            recommencer avec un meilleur système.
          </p>
        </div>
      </div>
    </div>
  </section>
)
