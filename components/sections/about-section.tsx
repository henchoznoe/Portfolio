import { ArrowDownRight } from 'lucide-react'

const principles = [
  {
    index: '01',
    title: 'Comprendre avant de construire',
    text: 'Le code arrive après le problème, les personnes et le contexte.',
  },
  {
    index: '02',
    title: 'Relier les deux côtés',
    text: 'L’interface et l’architecture racontent le même produit.',
  },
  {
    index: '03',
    title: 'Finir le dernier 10 %',
    text: 'Les états vides, les erreurs, la vitesse et les petits détails comptent.',
  },
] as const

export const AboutSection = () => (
  <section
    id="about"
    className="page-gutter bg-cream py-24 text-ink sm:py-36 lg:py-48"
  >
    <div className="mx-auto max-w-[1500px] border-x border-[#161612]/10">
      <div className="grid grid-cols-6 border-y border-[#161612]/10 sm:grid-cols-12">
        <div className="col-span-6 flex min-h-28 items-start justify-between border-b border-[#161612]/10 px-4 py-5 sm:col-span-3 sm:border-r sm:border-b-0 sm:px-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#161612]/50 sm:text-xs">
            À propos
          </p>
          <span className="font-mono text-[10px] text-signal sm:text-xs">
            02
          </span>
        </div>
        <div className="col-span-6 px-4 py-8 sm:col-span-9 sm:px-8 sm:py-12 lg:px-12">
          <p className="max-w-5xl text-[clamp(2.15rem,5.8vw,6.8rem)] font-medium leading-[0.97] tracking-[-0.06em]">
            Je ne veux pas seulement que ça fonctionne. Je veux que ça paraisse{' '}
            <span className="font-serif italic text-signal">évident.</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-6 sm:grid-cols-12">
        <div className="col-span-6 flex min-h-52 flex-col justify-between border-b border-[#161612]/10 px-4 py-6 sm:col-span-3 sm:border-r sm:px-6 lg:min-h-72">
          <ArrowDownRight className="size-5 text-signal" />
          <p className="max-w-52 text-sm leading-relaxed text-[#161612]/62">
            J’étudie l’ingénierie logicielle à Fribourg et je construis des
            produits complets, souvent pour des personnes bien réelles.
          </p>
        </div>
        <div className="col-span-6 sm:col-span-9">
          {principles.map(principle => (
            <div
              key={principle.index}
              className="group grid grid-cols-[2.5rem_minmax(0,1fr)] gap-2 border-b border-[#161612]/10 px-4 py-7 transition-colors hover:bg-signal hover:text-white sm:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1fr)] sm:px-8 lg:px-12"
            >
              <span className="font-mono text-[10px] text-signal transition-colors group-hover:text-white/60 sm:text-xs">
                {principle.index}
              </span>
              <h3 className="text-xl font-medium tracking-[-0.035em] sm:text-2xl">
                {principle.title}
              </h3>
              <p className="col-start-2 max-w-sm pt-3 text-sm leading-relaxed text-[#161612]/55 transition-colors group-hover:text-white/70 sm:col-start-3 sm:pt-0">
                {principle.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)
