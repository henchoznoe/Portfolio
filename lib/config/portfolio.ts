export const siteConfig = {
  name: 'Noé Henchoz',
  shortName: 'Noé',
  description:
    'Portfolio de Noé Henchoz, étudiant en ingénierie logicielle à Fribourg. Produits web, systèmes full-stack et projets open source.',
  url: 'https://henchoznoe.ch',
  locale: 'fr_CH',
  language: 'fr-CH',
  email: 'henchoznoe@gmail.com',
  github: 'https://github.com/henchoznoe',
  linkedin: 'https://linkedin.com/in/henchoznoe',
} as const

type ProjectVisual =
  | 'arbeaute'
  | 'nextemplate'
  | 'bisous'
  | 'shifty'
  | 'belouga'

export interface FeaturedProject {
  slug: string
  index: string
  title: string
  kicker: string
  year: string
  description: string
  detail: string
  tags: readonly string[]
  href: string
  github?: string
  visual: ProjectVisual
}

export const featuredProjects: readonly FeaturedProject[] = [
  {
    slug: 'arbeaute',
    index: '01',
    title: 'Arbeauté',
    kicker: 'Expérience & réservation',
    year: '2026',
    description:
      'Une vitrine élégante et un véritable moteur de réservation pour un institut de beauté à Bulle.',
    detail:
      'Créneaux calculés en temps réel, espace client sans mot de passe, agenda d’administration et protection contre les doubles réservations.',
    tags: ['Next.js 16', 'Prisma', 'PostgreSQL', 'PWA'],
    href: 'https://www.arbeaute-bulle.ch',
    github: 'https://github.com/henchoznoe/Arbeaute',
    visual: 'arbeaute',
  },
  {
    slug: 'nextemplate',
    index: '02',
    title: 'NexTemplate',
    kicker: 'Open source foundation',
    year: '2026',
    description:
      'Le socle Next.js que j’aurais aimé trouver : strict, documenté et prêt pour la production.',
    detail:
      'Authentification, base de données, tests, observabilité et CI/CD sont déjà reliés pour pouvoir commencer par le produit.',
    tags: ['Next.js 16', 'TypeScript', 'Better Auth', 'CI/CD'],
    href: 'https://nextemplate-henchoznoe.vercel.app',
    github: 'https://github.com/henchoznoe/NexTemplate',
    visual: 'nextemplate',
  },
  {
    slug: 'bisous-bisous',
    index: '03',
    title: 'Bisous Bisous',
    kicker: 'Culture & événements',
    year: '2026',
    description:
      'L’identité numérique bilingue d’un collectif fribourgeois dédié à la musique électronique.',
    detail:
      'Une expérience volontairement visuelle, rapide et mobile, pensée autour de la billetterie et de l’univers du collectif.',
    tags: ['Direction web', 'Next.js', 'Bilingue', 'Billetterie'],
    href: 'https://www.bisousbisous.ch',
    visual: 'bisous',
  },
  {
    slug: 'shifty',
    index: '04',
    title: 'Shifty',
    kicker: 'Produit collaboratif',
    year: '2026',
    description:
      'Un calendrier partagé qui répond enfin simplement à la question « quand est-ce qu’on est tous libres ? »',
    detail:
      'Disponibilités croisées, liens d’invitation, réponses sans compte, export et interface en français, anglais et allemand.',
    tags: ['SaaS', 'Next.js', 'PostgreSQL', 'i18n'],
    href: 'https://shifty-prod.vercel.app',
    visual: 'shifty',
  },
  {
    slug: 'belouga-tournament',
    index: '05',
    title: 'Belouga Tournament',
    kicker: 'Plateforme e-sport',
    year: '2026',
    description:
      'Une plateforme complète pour organiser, financer et diffuser des tournois e-sport.',
    detail:
      'Inscriptions en solo ou en équipe, connexion Discord, paiements et remboursements Stripe, back-office, diffusion Twitch et synchronisation avec Toornament.',
    tags: ['Next.js 16', 'Discord', 'Stripe', 'PostgreSQL'],
    href: 'https://belougatournament.ch',
    github: 'https://github.com/henchoznoe/BelougaTournament',
    visual: 'belouga',
  },
] as const

export const projectIndex = [
  {
    title: 'Le Jardin des Étoiles',
    type: 'Site éditorial & actualités',
    year: '2026',
    href: 'https://lejardindesetoiles.ch',
  },
  {
    title: 'Yoga — Le Jardin des Étoiles',
    type: 'Cours, retraites & actualités',
    year: '2026',
    href: 'https://yoga.lejardindesetoiles.ch',
  },
  {
    title: 'GitSetup',
    type: 'CLI open source',
    year: '2026',
    github: 'https://github.com/henchoznoe/GitSetup',
  },
] as const

export const capabilityGroups = [
  {
    index: '01',
    title: 'Produit',
    description:
      'Clarifier une idée, réduire la friction et construire le parcours qui semble évident à l’utilisateur.',
    items: ['Architecture', 'UX writing', 'Interfaces', 'Accessibilité'],
  },
  {
    index: '02',
    title: 'Ingénierie',
    description:
      'Faire tenir la promesse du produit avec des systèmes typés, testés et pensés pour durer.',
    items: ['TypeScript', 'Next.js', 'PostgreSQL', 'Prisma'],
  },
  {
    index: '03',
    title: 'Production',
    description:
      'Livrer pour de vrai : données, sécurité, monitoring, déploiement et maintenance compris.',
    items: ['CI/CD', 'Docker', 'Vercel', 'Observabilité'],
  },
] as const
