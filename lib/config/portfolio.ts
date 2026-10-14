export const locales = ['fr', 'en'] as const
export type Locale = (typeof locales)[number]
export type Localized<T> = Record<Locale, T>

export const isLocale = (value: string): value is Locale =>
  value === 'fr' || value === 'en'

export const projectPath = (locale: Locale, slug: string) =>
  `/${locale}/${locale === 'fr' ? 'projets' : 'projects'}/${slug}`

export const siteConfig = {
  name: 'Noé Henchoz',
  shortName: 'Noé',
  url: 'https://henchoznoe.ch',
  email: 'henchoznoe@gmail.com',
  github: 'https://github.com/henchoznoe',
  linkedin: 'https://www.linkedin.com/in/henchoznoe/',
  location: 'Bulle, Fribourg, CH',
  title: {
    fr: 'Noé Henchoz — Développement logiciel',
    en: 'Noé Henchoz — Software development',
  },
  description: {
    fr: 'Étudiant en informatique à la HEIA-FR, orientation développement logiciel. Découvrez mes applications web, mes outils et mon parcours.',
    en: 'Software engineering student at HEIA-FR, Switzerland. Explore my web applications, developer tools and background.',
  },
} as const

interface TimelineItem {
  organization: string
  title: string
  date: string
  location: string
  description: string
}

interface SkillGroup {
  title: string
  description: string
  skills: string[]
  example: string
  project: string
}

interface PortfolioCopy {
  nav: {
    projects: string
    about: string
    skills: string
    contact: string
    label: string
    menu: string
    close: string
    skip: string
    home: string
  }
  hero: {
    eyebrow: string
    title: string
    accent: string
    intro: string
    work: string
    contact: string
    location: string
    current: string
    currentValue: string
    scroll: string
    portrait: string
  }
  projects: {
    label: string
    title: string
    intro: string
    read: string
    more: string
    moreIntro: string
  }
  about: {
    label: string
    title: string
    intro: string
    experience: string
    education: string
    experiences: TimelineItem[]
    educationItems: TimelineItem[]
  }
  skills: { label: string; title: string; intro: string; groups: SkillGroup[] }
  interests: {
    label: string
    title: string
    intro: string
    items: { title: string; description: string }[]
  }
  contact: {
    label: string
    title: string
    accent: string
    intro: string
    email: string
    top: string
    credit: string
  }
  caseStudy: {
    back: string
    label: string
    role: string
    scope: string
    tools: string
    context: string
    contribution: string
    decisions: string
    challenge: string
    result: string
    visit: string
    code: string
    internal: string
    next: string
    diagram: string
  }
}

export const copy: Localized<PortfolioCopy> = {
  fr: {
    nav: {
      projects: 'Projets',
      about: 'Parcours',
      skills: 'Compétences',
      contact: 'Me contacter',
      label: 'Navigation principale',
      menu: 'Ouvrir le menu',
      close: 'Fermer le menu',
      skip: 'Aller au contenu',
      home: 'Accueil de Noé Henchoz',
    },
    hero: {
      eyebrow: 'Noé Henchoz / Portfolio',
      title: 'Développement',
      accent: 'web & logiciel.',
      intro:
        'Étudiant en informatique à la HEIA-FR, orientation développement logiciel. Je développe des applications web et des outils pour des besoins concrets.',
      work: 'Voir mes projets',
      contact: 'Me contacter',
      location: 'Basé à Bulle, Fribourg',
      current: 'En ce moment',
      currentValue: 'Bachelor en informatique · HEIA-FR',
      scroll: 'Un peu plus bas, mes réalisations',
      portrait: 'Portrait de Noé Henchoz',
    },
    projects: {
      label: '01 — Projets sélectionnés',
      title: 'Des projets concrets,\nde bout en bout.',
      intro:
        'Applications web, outils développeur et projets de formation. Voici une sélection de ce que je construis.',
      read: 'Découvrir le projet',
      more: 'Et aussi.',
      moreIntro: 'D’autres projets, à explorer directement.',
    },
    about: {
      label: '02 — Parcours',
      title: 'Apprendre.\nMettre en pratique.',
      intro:
        'Mon parcours a commencé à l’EMF, s’est enrichi d’un stage en Irlande et se poursuit à la HEIA-FR. En parallèle des études, je travaille chez Migros et développe mes projets.',
      experience: 'Expériences professionnelles',
      education: 'Formation',
      experiences: [
        {
          organization: 'Migros Neuchâtel-Fribourg',
          title: 'Aide polyvalent · Vente',
          date: 'Mai 2025 — aujourd’hui',
          location: 'La Tour-de-Trême, Suisse · Temps partiel',
          description:
            'Emploi étudiant au Centre La Tour, en parallèle de mes études. Vente, gestion de la caisse et mise en rayon.',
        },
        {
          organization: 'Armour by Granite',
          title: 'Développeur web full-stack',
          date: 'Sept. — déc. 2023',
          location: 'Galway, Irlande · Stage',
          description:
            'Quatre mois de développement web dans un environnement professionnel anglophone, avec Next.js et Node.js.',
        },
      ],
      educationItems: [
        {
          organization: 'HEIA-FR',
          title: 'Bachelor en informatique',
          date: 'Sept. 2024 — juin 2028, fin prévue',
          location: 'Fribourg, Suisse',
          description:
            'Informatique et systèmes de communication, orientation développement logiciel. Formation en cours depuis septembre 2024.',
        },
        {
          organization: 'École des Métiers de Fribourg',
          title: 'CFC d’informaticien d’entreprise',
          date: '2020 — 2024',
          location: 'Fribourg, Suisse',
          description:
            'CFC avec maturité professionnelle technique. Des bases en développement, en administration système et en réseaux.',
        },
      ],
    },
    skills: {
      label: '03 — Compétences',
      title: 'Les outils derrière\nles projets.',
      intro:
        'Des technologies utilisées en formation, en stage et dans mes réalisations personnelles.',
      groups: [
        {
          title: 'Interfaces & applications',
          description:
            'Construire les écrans, les interactions et les parcours d’une application web.',
          skills: [
            'TypeScript',
            'React',
            'Next.js',
            'HTML / CSS',
            'Tailwind CSS',
          ],
          example: 'En pratique : la refonte de NetViewer.',
          project: 'netviewer',
        },
        {
          title: 'Backend & données',
          description:
            'Relier une interface aux données et donner forme à la logique métier.',
          skills: [
            'Java',
            'Node.js',
            'Express',
            'NestJS',
            'SQL',
            'PostgreSQL',
            'Prisma',
            'PHP',
            'MariaDB',
            'JAX-RS',
          ],
          example: 'En pratique : les réservations d’Arbeauté.',
          project: 'arbeaute',
        },
        {
          title: 'Outils & livraison',
          description:
            'Versionner, tester et déployer les projets, puis les faire évoluer.',
          skills: [
            'Git',
            'GitLab',
            'GitLab CI/CD',
            'GitHub Actions',
            'Docker',
            'Kubernetes (bases)',
            'Vercel',
            'Biome',
          ],
          example: 'En pratique : les outils et tests de GitSetup.',
          project: 'gitsetup',
        },
      ],
    },
    interests: {
      label: '04 — En dehors du code',
      title: 'Bouger.\nChanger de perspective.',
      intro:
        'Le sport occupe une vraie place dans mon quotidien. Une séance de fitness, une voie à grimper ou une journée sur les pistes : j’aime varier les terrains.',
      items: [
        {
          title: 'Fitness',
          description: 'Un rendez-vous régulier pour progresser.',
        },
        {
          title: 'Escalade',
          description: 'Trouver le mouvement, essayer une autre voie.',
        },
        {
          title: 'Ski',
          description: 'Profiter de l’hiver et prendre un peu de hauteur.',
        },
      ],
    },
    contact: {
      label: '05 — Contact',
      title: 'On en',
      accent: 'discute ?',
      intro:
        'Une opportunité, un projet ou simplement l’envie d’échanger sur le développement. Vous pouvez m’écrire.',
      email: 'M’écrire un e-mail',
      top: 'Retour en haut',
      credit: 'Conçu et développé à Bulle, Suisse.',
    },
    caseStudy: {
      back: 'Tous les projets',
      label: 'Étude de cas',
      role: 'Contribution',
      scope: 'Contexte',
      tools: 'Technologies',
      context: 'Le point de départ',
      contribution: 'Ma contribution',
      decisions: 'Les choix techniques',
      challenge: 'Une difficulté concrète',
      result: 'Le résultat',
      visit: 'Voir le site',
      code: 'Explorer le code',
      internal: 'Projet interne à l’EMF',
      next: 'Projet suivant',
      diagram: 'Schéma explicatif',
    },
  },
  en: {
    nav: {
      projects: 'Projects',
      about: 'Background',
      skills: 'Skills',
      contact: 'Get in touch',
      label: 'Main navigation',
      menu: 'Open menu',
      close: 'Close menu',
      skip: 'Skip to content',
      home: 'Noé Henchoz home',
    },
    hero: {
      eyebrow: 'Noé Henchoz / Portfolio',
      title: 'Web & software',
      accent: 'development.',
      intro:
        'Software engineering student at HEIA-FR. I build web applications and tools that address real needs.',
      work: 'Explore my projects',
      contact: 'Get in touch',
      location: 'Based in Bulle, Fribourg',
      current: 'Right now',
      currentValue: 'BSc in Computer Science · HEIA-FR',
      scroll: 'Scroll down to explore my work',
      portrait: 'Portrait of Noé Henchoz',
    },
    projects: {
      label: '01 — Selected projects',
      title: 'Practical projects,\nfrom start to finish.',
      intro:
        'Web applications, developer tools and coursework. A selection of what I build.',
      read: 'Explore the project',
      more: 'And a little more.',
      moreIntro: 'More projects to explore directly.',
    },
    about: {
      label: '02 — Background',
      title: 'Learn.\nPut it into practice.',
      intro:
        'My path started at EMF, took me to Ireland for an internship and continues at HEIA-FR. Alongside my studies, I work at Migros and develop my own projects.',
      experience: 'Professional experience',
      education: 'Education',
      experiences: [
        {
          organization: 'Migros Neuchâtel-Fribourg',
          title: 'Retail assistant',
          date: 'May 2025 — present',
          location: 'La Tour-de-Trême, Switzerland · Part-time',
          description:
            'A student job at Centre La Tour alongside my studies. Sales, checkout operations and shelf stocking.',
        },
        {
          organization: 'Armour by Granite',
          title: 'Full-stack web developer',
          date: 'Sep. — Dec. 2023',
          location: 'Galway, Ireland · Internship',
          description:
            'Four months of web development in an English-speaking professional environment, working with Next.js and Node.js.',
        },
      ],
      educationItems: [
        {
          organization: 'HEIA-FR',
          title: 'BSc in Computer Science',
          date: 'Sep. 2024 — June 2028, expected',
          location: 'Fribourg, Switzerland',
          description:
            'Computer Science and Communication Systems, software engineering orientation. Studying since September 2024.',
        },
        {
          organization: 'École des Métiers de Fribourg',
          title: 'Federal VET Diploma in IT',
          date: '2020 — 2024',
          location: 'Fribourg, Switzerland',
          description:
            'Federal VET Diploma in corporate IT with a technical vocational baccalaureate. Foundations in software development, systems administration and networking.',
        },
      ],
    },
    skills: {
      label: '03 — Skills',
      title: 'The tools behind\nthe projects.',
      intro:
        'Technologies I use in coursework, professional experience and personal projects.',
      groups: [
        {
          title: 'Interfaces & applications',
          description:
            'Building screens, interactions and user journeys for web applications.',
          skills: [
            'TypeScript',
            'React',
            'Next.js',
            'HTML / CSS',
            'Tailwind CSS',
          ],
          example: 'In practice: the NetViewer redesign.',
          project: 'netviewer',
        },
        {
          title: 'Backend & data',
          description:
            'Connecting interfaces to data and implementing business logic.',
          skills: [
            'Java',
            'Node.js',
            'Express',
            'NestJS',
            'SQL',
            'PostgreSQL',
            'Prisma',
            'PHP',
            'MariaDB',
            'JAX-RS',
          ],
          example: 'In practice: bookings for Arbeauté.',
          project: 'arbeaute',
        },
        {
          title: 'Tools & delivery',
          description:
            'Versioning, testing and deploying projects, then maintaining them.',
          skills: [
            'Git',
            'GitLab',
            'GitLab CI/CD',
            'GitHub Actions',
            'Docker',
            'Kubernetes (basics)',
            'Vercel',
            'Biome',
          ],
          example: 'In practice: GitSetup’s tooling and tests.',
          project: 'gitsetup',
        },
      ],
    },
    interests: {
      label: '04 — Beyond the keyboard',
      title: 'Keep moving.\nFind a new perspective.',
      intro:
        'Sport is a real part of my everyday life. A workout, a climbing route or a day on the slopes: I enjoy a change of scenery.',
      items: [
        {
          title: 'Fitness',
          description: 'A regular routine to keep making progress.',
        },
        {
          title: 'Climbing',
          description: 'Find the movement, try another route.',
        },
        {
          title: 'Skiing',
          description: 'Make the most of winter and head for the mountains.',
        },
      ],
    },
    contact: {
      label: '05 — Contact',
      title: 'Let’s',
      accent: 'talk.',
      intro:
        'An opportunity, a project or a conversation about development. Feel free to get in touch.',
      email: 'Send me an email',
      top: 'Back to top',
      credit: 'Designed and developed in Bulle, Switzerland.',
    },
    caseStudy: {
      back: 'All projects',
      label: 'Case study',
      role: 'Contribution',
      scope: 'Context',
      tools: 'Technologies',
      context: 'The starting point',
      contribution: 'My contribution',
      decisions: 'Technical decisions',
      challenge: 'A practical challenge',
      result: 'The result',
      visit: 'Visit the website',
      code: 'Explore the code',
      internal: 'Internal EMF project',
      next: 'Next project',
      diagram: 'Explanatory diagram',
    },
  },
}
