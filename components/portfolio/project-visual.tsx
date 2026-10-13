import {
  ArrowDown,
  ArrowRight,
  Check,
  GitBranch,
  KeyRound,
  Monitor,
  Network,
  Server,
  ShieldCheck,
  Terminal,
} from 'lucide-react'
import Image from 'next/image'
import type { Locale } from '@/lib/config/portfolio'
import type { Project } from '@/lib/config/projects'
import { cn } from '@/lib/utils/cn'

type VisualVariant = 'card' | 'cover' | 'detail'
const aspect = {
  card: 'aspect-[1.4] min-[600px]:aspect-[1.35] min-[820px]:aspect-[1.52]',
  cover: 'aspect-[1.2] rounded-[5px] min-[600px]:aspect-[1.8]',
  detail: 'aspect-[1.2] rounded-[5px] min-[600px]:aspect-[1.9]',
}

interface ProjectVisualProps {
  project: Project
  locale: Locale
  detail?: boolean
  priority?: boolean
  variant?: VisualVariant
}

export const ProjectVisual = ({
  project,
  locale,
  detail = false,
  priority = false,
  variant = 'card',
}: Readonly<ProjectVisualProps>) => {
  const fr = locale === 'fr'
  const cover = variant === 'cover'
  const image = detail ? project.detailImage : project.cover
  const frame = cn(
    'relative flex w-full items-center justify-center overflow-hidden',
    aspect[variant],
  )
  const label = cn(
    'absolute font-mono tracking-[0.08em] text-[#526784]',
    variant === 'card'
      ? 'top-4 left-4.5 text-[8px] min-[600px]:text-[7px] min-[820px]:top-5.5 min-[820px]:left-7 min-[820px]:text-[8px]'
      : 'top-4.5 left-4.5 text-[8px] min-[600px]:top-7.5 min-[600px]:left-8.75 min-[600px]:text-[11px]',
  )
  const note = cn(
    'absolute inset-x-3 text-center font-mono text-[#4f6380]',
    variant === 'card'
      ? 'bottom-3 text-[7px] min-[600px]:text-[6px] min-[820px]:bottom-4.5 min-[820px]:text-[7px]'
      : 'bottom-4.25 text-[7px] min-[600px]:bottom-6 min-[600px]:text-[10px]',
  )
  if (image)
    return (
      <div
        className={cn(
          frame,
          project.slug === 'arbeaute' ? 'bg-[#e5e0d6]' : 'bg-[#dce1ee]',
          variant === 'card'
            ? 'p-5.75 min-[600px]:p-4.5 min-[820px]:p-6 min-[1100px]:p-9'
            : 'p-5 min-[600px]:p-10 min-[820px]:px-22.5 min-[820px]:py-12.5',
        )}
      >
        <div className="w-full overflow-hidden rounded-[5px] shadow-[0_12px_30px_rgb(20_30_25/13%)] transition-transform duration-400 group-hover/project:-translate-y-1">
          <div
            className="flex items-center gap-1 bg-white px-2.5 py-2"
            aria-hidden="true"
          >
            <i className="size-1 rounded-full bg-[#d5d9d2]" />
            <i className="size-1 rounded-full bg-[#d5d9d2]" />
            <i className="size-1 rounded-full bg-[#d5d9d2]" />
            <span className="ml-2.5 font-mono text-[7px] text-[#697168]">
              {project.website?.replace('https://', '')}
              {detail
                ? project.slug === 'arbeaute'
                  ? '/reservation'
                  : '/tournaments'
                : ''}
            </span>
          </div>
          <Image
            src={image}
            alt={
              detail
                ? project.text[locale].detailCaption
                : project.text[locale].coverCaption
            }
            width={1280}
            height={720}
            sizes={
              variant === 'card'
                ? '(max-width: 600px) 92vw, (max-width: 1279px) 45vw, 550px'
                : '(max-width: 767px) 92vw, 1000px'
            }
            loading={priority ? 'eager' : 'lazy'}
            className="h-auto w-full"
          />
        </div>
      </div>
    )
  if (project.kind === 'cli' && !detail)
    return (
      <div
        className={cn(
          frame,
          'bg-[#dce7f9]',
          cover
            ? 'p-5.75 min-[600px]:p-8.75'
            : 'p-5.75 min-[600px]:p-4.5 min-[820px]:p-6 min-[1100px]:p-8.75',
        )}
      >
        <div
          className={cn(
            'w-full rounded-md bg-[#1f2b42] font-mono text-[#f0f5ff] shadow-[0_12px_30px_rgb(20_30_25/12%)]',
            cover && 'max-w-162.5',
          )}
        >
          <div
            className={cn(
              'flex items-center justify-between border-b border-[#3b4b68] text-[#bed0ee]',
              cover
                ? 'p-3 text-[9px] min-[600px]:px-5.5 min-[600px]:py-4 min-[600px]:text-xs'
                : 'px-4 py-3 text-[9px]',
            )}
          >
            <div className="flex gap-1" aria-hidden="true">
              <i className="size-1 rounded-full bg-[#7f97bd]" />
              <i className="size-1 rounded-full bg-[#7f97bd]" />
              <i className="size-1 rounded-full bg-[#7f97bd]" />
            </div>
            <span>gitsetup — zsh</span>
            <Terminal size={15} aria-hidden="true" />
          </div>
          <div
            className={cn(
              'leading-[1.9]',
              cover
                ? 'p-4 text-[10px] min-[600px]:p-7.5 min-[600px]:text-[17px]'
                : 'p-4.5 text-[9px] min-[600px]:p-3.25 min-[600px]:text-[8px] min-[820px]:p-4 min-[820px]:text-[9px] min-[1100px]:p-5 min-[1100px]:text-[10px]',
            )}
          >
            <p
              className={cn(
                'mb-1.75 text-[#adc3e6]',
                cover
                  ? 'text-[9px] min-[600px]:text-sm'
                  : 'text-[9px] min-[600px]:text-[8px] min-[820px]:text-[9px] min-[1100px]:text-[10px]',
              )}
            >
              #{' '}
              {fr
                ? 'Votre environnement, vos identités.'
                : 'Your environment, your identities.'}
            </p>
            <p>
              <span className="mr-1.75 text-[#bed4ff]">❯</span> git-setup apply
              --dry-run
            </p>
            <div className="my-3 h-px bg-[#3b4b68] min-[1100px]:my-4.25" />
            <p
              className={cn(
                'mb-2.5 tracking-[0.08em] text-[#adc3e6]',
                cover
                  ? 'text-[7px] min-[600px]:text-[11px]'
                  : 'text-[7px] min-[600px]:text-[6px] min-[820px]:text-[8px]',
              )}
            >
              {fr
                ? 'UNE CONFIGURATION, TROIS BRIQUES'
                : 'ONE CONFIGURATION, THREE BUILDING BLOCKS'}
            </p>
            {['Git · identities', 'SSH · connections', 'GPG · signatures'].map(
              text => (
                <p className="flex items-center gap-2.5" key={text}>
                  <Check
                    size={14}
                    className="text-[#bed4ff]"
                    aria-hidden="true"
                  />
                  {text}
                </p>
              ),
            )}
            <p
              className={cn(
                'mt-2.5 text-[#adc3e6] min-[1100px]:mt-4',
                cover
                  ? 'text-[7px] min-[600px]:text-[11px]'
                  : 'text-[7px] min-[600px]:text-[6px] min-[820px]:text-[7px]',
              )}
            >
              {fr
                ? 'Exemple de commande · mode prévisualisation'
                : 'Example command · preview mode'}
            </p>
          </div>
        </div>
      </div>
    )
  const cli = project.kind === 'cli'
  const diagram = cli || detail
  const steps = cli
    ? [
        { Icon: GitBranch, title: 'Git', text: fr ? 'Identité' : 'Identity' },
        { Icon: KeyRound, title: 'SSH', text: fr ? 'Connexion' : 'Connection' },
        { Icon: ShieldCheck, title: 'GPG', text: fr ? 'Signature' : 'Signing' },
      ]
    : [
        {
          Icon: Monitor,
          title: fr ? 'Enseignant' : 'Teacher',
          text: fr ? 'Préparer' : 'Prepare',
        },
        {
          Icon: Server,
          title: 'Configuration',
          text: fr ? 'Déployer' : 'Deploy',
        },
        {
          Icon: Network,
          title: fr ? 'Salle de classe' : 'Classroom',
          text: 'VLANs',
        },
      ]
  const small = cover
    ? 'font-mono text-[7px] min-[600px]:text-[9px] min-[820px]:text-xs'
    : 'font-mono text-[7px] min-[600px]:text-[6px] min-[820px]:text-[8px]'
  return (
    <div
      className={cn(
        frame,
        'flex-col bg-[#e1e9f5]',
        variant === 'card'
          ? 'px-2.5 py-5 min-[820px]:p-7'
          : 'p-4 min-[600px]:p-7',
      )}
    >
      <span className={label}>
        {cli
          ? `GITSETUP / ${fr ? 'UN PROFIL' : 'ONE PROFILE'}`
          : `NETVIEWER / ${detail ? (fr ? 'USAGE' : 'WORKFLOW') : fr ? 'REFONTE' : 'REDESIGN'}`}
      </span>
      {diagram ? (
        <div className="flex w-full max-w-205 justify-center gap-4.5 min-[600px]:gap-10">
          {steps.map(({ Icon, title, text }, i) => (
            <div
              className="relative flex w-[31%] flex-col items-center gap-3 rounded-[5px] border border-[#bccce2] bg-[#f7faff] px-1 py-5.5 text-center min-[600px]:w-[28%] min-[600px]:gap-4 min-[600px]:px-3.75 min-[600px]:py-13.75"
              key={title}
            >
              <Icon size={26} strokeWidth={1.3} aria-hidden="true" />
              <strong className="text-[10px] font-550 min-[600px]:text-[23px]">
                {title}
              </strong>
              <span className="text-[8px] text-[#536b90] min-[600px]:text-[13px]">
                {text}
              </span>
              {i < 2 ? (
                <ArrowRight
                  className="absolute top-[calc(50%-9px)] -right-4.5 w-4 min-[600px]:-right-7.75 min-[600px]:w-4.5"
                  size={18}
                  aria-hidden="true"
                />
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <div
          className={cn(
            'flex flex-col items-center pt-3',
            cover
              ? 'w-[90%] gap-2.5 min-[600px]:w-[70%] min-[600px]:gap-3.75 min-[820px]:w-[55%]'
              : 'w-[85%] gap-1.75 min-[600px]:w-[90%] min-[820px]:gap-2.25 min-[1100px]:w-[74%]',
          )}
        >
          <div
            className={cn(
              'flex w-full items-center justify-between gap-2.5 rounded border border-dashed border-[#92a4bf] text-[#4f6180] min-[1100px]:gap-5',
              cover
                ? 'p-3 text-[11px] min-[600px]:p-5.5 min-[600px]:text-[17px]'
                : 'p-2.25 text-[10px] min-[820px]:px-4 min-[820px]:py-3 min-[820px]:text-xs',
            )}
          >
            <span>Java EE</span>
            <small className={small}>Servlets / JSP</small>
          </div>
          <ArrowDown size={20} strokeWidth={1.4} aria-hidden="true" />
          <div
            className={cn(
              'flex w-full items-center justify-between gap-2.5 rounded border border-[#a8bfe2] bg-[#f7faff] font-semibold min-[1100px]:gap-5',
              cover
                ? 'px-3 py-4.5 text-[13px] min-[600px]:px-5.5 min-[600px]:py-7.5 min-[600px]:text-xl min-[820px]:text-[27px]'
                : 'px-2.5 py-4 text-xs min-[600px]:px-2.25 min-[600px]:py-3.5 min-[600px]:text-[11px] min-[820px]:p-3.25 min-[820px]:text-[13px] min-[1100px]:px-4 min-[1100px]:py-4.75 min-[1100px]:text-base',
            )}
          >
            <span>
              React <span className="text-[#6981a5]">+</span> TypeScript
            </span>
            <small className={cn(small, 'font-normal text-[#536b90]')}>
              {fr ? 'Nouvelle interface' : 'New interface'}
            </small>
          </div>
          <div className="-my-2.25 h-4.25 w-px bg-[#8ca6cc]" />
          <div
            className={cn(
              'flex w-full items-center justify-center gap-2.25 rounded border border-[#bccce2]',
              cover
                ? 'p-3 text-[11px] min-[600px]:p-5.5 min-[600px]:text-[17px]'
                : 'p-2.25 text-[8px] min-[820px]:p-3 min-[820px]:text-[10px]',
            )}
          >
            <Server size={16} aria-hidden="true" />
            <span>API JAX-RS</span>
            <small className={cn(small, 'ml-auto text-[#4f6180]')}>
              {fr ? 'Backend conservé' : 'Existing backend'}
            </small>
          </div>
        </div>
      )}
      <p className={note}>
        {cli
          ? fr
            ? 'Prévisualiser → appliquer → faire évoluer'
            : 'Preview → apply → maintain'
          : fr
            ? 'Schéma explicatif · projet interne EMF'
            : 'Explanatory diagram · internal EMF project'}
      </p>
    </div>
  )
}
