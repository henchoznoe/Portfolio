import type { Localized } from './portfolio'

interface ProjectText {
  category: string
  summary: string
  role: string
  scope: string
  context: string
  contribution: string
  decisions: { title: string; text: string }[]
  challenge: string
  result: string
  coverCaption: string
  detailCaption: string
}

export interface Project {
  slug: string
  name: string
  number: string
  tags: string[]
  kind: 'website' | 'cli' | 'internal'
  website?: string
  github?: string
  cover?: string
  detailImage?: string
  text: Localized<ProjectText>
}

export const projects: Project[] = [
  {
    slug: 'arbeaute',
    name: 'Arbeauté',
    number: '01',
    kind: 'website',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    website: 'https://www.arbeaute-bulle.ch',
    github: 'https://github.com/henchoznoe/Arbeaute',
    cover: '/work/captures/arbeaute-home.jpg',
    detailImage: '/work/captures/arbeaute-reservation.jpg',
    text: {
      fr: {
        category: 'Application web · Réservation',
        summary:
          'De la découverte d’un soin à la réservation d’un rendez-vous.',
        role: 'Développement de l’application web',
        scope: 'Institut de soins esthétiques · Bulle',
        context:
          'Arbeauté est un institut indépendant à Bulle. Le site doit présenter les prestations et permettre à la clientèle de réserver, tout en donnant à la praticienne un outil pour organiser ses journées.',
        contribution:
          'J’ai développé le site public et le système de réservation, ainsi que la console d’administration : agenda, rendez-vous, prestations et disponibilités. Les deux parties partagent les mêmes données.',
        decisions: [
          {
            title: 'Un parcours sans compte à créer',
            text: 'Le choix du soin, les coordonnées et le créneau composent un parcours de réservation guidé. La confirmation permet aussi de télécharger le rendez-vous au format calendrier.',
          },
          {
            title: 'Des disponibilités calculées',
            text: 'Les créneaux tiennent compte des horaires, des exceptions et des rendez-vous existants, avec le temps de préparation et de nettoyage.',
          },
          {
            title: 'Une base commune',
            text: 'Next.js relie l’interface publique et l’administration. Prisma et PostgreSQL structurent les prestations, les horaires et les réservations.',
          },
        ],
        challenge:
          'Deux personnes peuvent choisir le même créneau au même moment. Le contrôle dans l’interface ne suffit pas : une contrainte d’exclusion dans PostgreSQL empêche l’enregistrement de rendez-vous qui se chevauchent.',
        result:
          'Le site public propose les prestations et la réservation en ligne. La console permet de gérer les rendez-vous et les exceptions d’ouverture depuis le même outil.',
        coverCaption: 'L’accueil du site public Arbeauté.',
        detailCaption:
          'Le début du parcours de réservation, accessible sans compte.',
      },
      en: {
        category: 'Web application · Booking',
        summary: 'From discovering a treatment to booking an appointment.',
        role: 'Web application development',
        scope: 'Independent beauty salon · Bulle',
        context:
          'Arbeauté is an independent beauty salon in Bulle. The website introduces its treatments and lets clients book appointments while giving the practitioner a tool to organise her working day.',
        contribution:
          'I developed the public website and booking system, together with the administration console: calendar, appointments, treatments and availability. Both sides share the same data.',
        decisions: [
          {
            title: 'No account required to book',
            text: 'Treatment selection, contact details and a time slot form a guided booking journey. The confirmation also provides a downloadable calendar event.',
          },
          {
            title: 'Calculated availability',
            text: 'Available slots account for working hours, exceptions and existing appointments, including preparation and cleaning time.',
          },
          {
            title: 'A shared foundation',
            text: 'Next.js connects the public interface and administration. Prisma and PostgreSQL organise treatments, opening hours and bookings.',
          },
        ],
        challenge:
          'Two people can select the same time slot simultaneously. An interface check alone is not enough: a PostgreSQL exclusion constraint prevents overlapping appointments from being saved.',
        result:
          'The public website offers treatment information and online booking. The console provides appointment and opening-hour management in the same application.',
        coverCaption: 'The Arbeauté public homepage.',
        detailCaption:
          'The start of the booking journey, with no account required.',
      },
    },
  },
  {
    slug: 'belouga-tournament',
    name: 'Belouga Tournament',
    number: '02',
    kind: 'website',
    tags: ['Next.js', 'Discord', 'Stripe', 'PostgreSQL'],
    website: 'https://belougatournament.ch',
    github: 'https://github.com/henchoznoe/BelougaTournament',
    cover: '/work/captures/belouga-home.jpg',
    detailImage: '/work/captures/belouga-tournaments.jpg',
    text: {
      fr: {
        category: 'Plateforme web · E-sport',
        summary:
          'Une plateforme pour réunir joueurs, équipes et organisateurs.',
        role: 'Développement de la plateforme',
        scope: 'Organisation de tournois e-sport',
        context:
          'Un tournoi demande plus qu’une page d’inscription : il faut gérer les équipes, les places, les paiements et les informations utiles aux joueurs. Belouga Tournament rassemble ces fonctions autour d’une même plateforme.',
        contribution:
          'J’ai développé l’expérience publique et les outils d’administration. Le projet relie les comptes Discord, les inscriptions individuelles ou en équipe, les paiements Stripe et la gestion des tournois.',
        decisions: [
          {
            title: 'Se connecter avec Discord',
            text: 'L’authentification repose sur Discord OAuth avec Better Auth, en cohérence avec les habitudes de la communauté.',
          },
          {
            title: 'Suivre le paiement côté serveur',
            text: 'Stripe Checkout et les webhooks relient le paiement à l’état de l’inscription. Les places réservées, les expirations et les remboursements ont leur propre traitement.',
          },
          {
            title: 'Centraliser l’organisation',
            text: 'Une administration réunit les tournois, les équipes, les inscriptions et les sponsors. Toornament et Twitch complètent la gestion des phases et la diffusion.',
          },
        ],
        challenge:
          'Une inscription payante peut être commencée puis abandonnée. La plateforme doit distinguer une place temporairement réservée d’une inscription confirmée, et réagir aux notifications de paiement sans compter deux fois la même opération.',
        result:
          'La plateforme propose un catalogue de tournois et des parcours d’inscription en solo ou en équipe. Les organisateurs disposent d’un back-office pour suivre les inscriptions et les paiements.',
        coverCaption: 'L’accueil public de Belouga Tournament.',
        detailCaption: 'Le catalogue de tournois et ses filtres.',
      },
      en: {
        category: 'Web platform · Esports',
        summary: 'Bringing players, teams and tournament organisers together.',
        role: 'Platform development',
        scope: 'Esports tournament organisation',
        context:
          'A tournament needs more than a registration page: teams, places, payments and player information must all be managed. Belouga Tournament brings these functions together in one platform.',
        contribution:
          'I developed the public experience and administration tools. The project connects Discord accounts, individual and team registrations, Stripe payments and tournament management.',
        decisions: [
          {
            title: 'Sign in with Discord',
            text: 'Authentication uses Discord OAuth with Better Auth, matching the community’s existing habits.',
          },
          {
            title: 'Track payments on the server',
            text: 'Stripe Checkout and webhooks connect payments to registration status. Reserved places, expirations and refunds each have their own handling.',
          },
          {
            title: 'Centralise organisation',
            text: 'An administration area brings together tournaments, teams, registrations and sponsors. Toornament and Twitch support tournament stages and broadcasting.',
          },
        ],
        challenge:
          'A paid registration can be started and then abandoned. The platform needs to distinguish a temporarily reserved place from a confirmed registration and process payment notifications without counting the same operation twice.',
        result:
          'The platform provides a tournament catalogue and registration journeys for individuals and teams. Organisers have a back office to track registrations and payments.',
        coverCaption: 'The public Belouga Tournament homepage.',
        detailCaption: 'The tournament catalogue and its filters.',
      },
    },
  },
  {
    slug: 'gitsetup',
    name: 'GitSetup',
    number: '03',
    kind: 'cli',
    tags: ['TypeScript', 'Node.js', 'Git', 'SSH / GPG'],
    github: 'https://github.com/henchoznoe/GitSetup',
    text: {
      fr: {
        category: 'Outil développeur · Open source',
        summary:
          'Un environnement Git prêt à travailler, identité par identité.',
        role: 'Développement d’un outil CLI',
        scope: 'Configuration Git sur macOS',
        context:
          'Configurer Git sur un nouveau Mac peut impliquer plusieurs identités, des clés SSH, la signature GPG et des hooks. GitSetup regroupe ces étapes dans un assistant en ligne de commande.',
        contribution:
          'J’ai développé un outil modulaire en TypeScript pour configurer cet environnement, soit avec un assistant interactif, soit à partir d’un fichier JSON. Les profils peuvent ensuite être ajoutés ou modifiés séparément.',
        decisions: [
          {
            title: 'Plusieurs identités',
            text: 'Les profils regroupent les paramètres Git et SSH. Des hooks permettent de sélectionner l’identité en fonction de l’URL distante du dépôt.',
          },
          {
            title: 'Prévisualiser avant d’appliquer',
            text: 'Le mode dry-run décrit les modifications prévues. Des sauvegardes et des marqueurs délimitent les éléments gérés par l’outil.',
          },
          {
            title: 'Distribuer simplement',
            text: 'Une installation via Homebrew complète l’installation depuis les sources. La configuration JSON permet de reproduire un environnement.',
          },
        ],
        challenge:
          'L’outil intervient sur une configuration personnelle qui peut déjà exister. Il doit préserver les réglages indépendants, détecter les changements nécessaires et rester prévisible lorsqu’on l’exécute plusieurs fois.',
        result:
          'GitSetup propose un assistant, une gestion des profils et une prévisualisation des changements. Son code et ses instructions d’installation sont disponibles sur GitHub.',
        coverCaption:
          'Exemple de commande : prévisualiser la configuration sans l’appliquer.',
        detailCaption: 'Les trois éléments reliés par un profil GitSetup.',
      },
      en: {
        category: 'Developer tool · Open source',
        summary: 'A Git environment ready to work, one identity at a time.',
        role: 'CLI tool development',
        scope: 'Git configuration on macOS',
        context:
          'Setting up Git on a new Mac can involve multiple identities, SSH keys, GPG signing and hooks. GitSetup brings these steps together in a command-line assistant.',
        contribution:
          'I developed a modular TypeScript tool to configure this environment using either an interactive wizard or a JSON file. Profiles can then be added or edited individually.',
        decisions: [
          {
            title: 'Multiple identities',
            text: 'Profiles group Git and SSH settings. Hooks select the identity based on a repository’s remote URL.',
          },
          {
            title: 'Preview before applying',
            text: 'Dry-run mode describes the planned changes. Backups and markers isolate the configuration managed by the tool.',
          },
          {
            title: 'Straightforward distribution',
            text: 'A Homebrew installation complements installation from source. JSON configuration makes the setup reproducible.',
          },
        ],
        challenge:
          'The tool modifies a personal configuration that may already exist. It needs to preserve unrelated settings, detect necessary changes and remain predictable when run multiple times.',
        result:
          'GitSetup provides a wizard, profile management and a change preview. Its source code and installation instructions are available on GitHub.',
        coverCaption:
          'Example command: preview configuration changes without applying them.',
        detailCaption: 'The three elements connected by a GitSetup profile.',
      },
    },
  },
  {
    slug: 'netviewer',
    name: 'NetViewer',
    number: '04',
    kind: 'internal',
    tags: ['React', 'TypeScript', 'Java / JAX-RS', 'MariaDB'],
    text: {
      fr: {
        category: 'Projet de formation · EMF',
        summary: 'Moderniser l’interface d’un outil de configuration réseau.',
        role: 'Refonte frontend et contribution backend',
        scope: 'Projet interne EMF · Janv. — mai 2024',
        context:
          'NetViewer permet aux enseignants de l’EMF de préparer et de déployer des configurations réseau dans les salles de classe. Ils peuvent notamment regrouper des élèves dans des VLANs ou gérer leur accès à Internet.',
        contribution:
          'J’ai participé à la refonte technologique et visuelle de ce projet interne. Mon travail principal a été de remplacer le client Java EE, basé sur des Servlets et JSP, par une interface React et TypeScript. J’ai également contribué à améliorer le backend existant.',
        decisions: [
          {
            title: 'Moderniser le client',
            text: 'React et TypeScript remplacent la couche de présentation existante pour construire les écrans et leurs interactions.',
          },
          {
            title: 'Conserver le backend',
            text: 'L’API reste sur JAX-RS. La refonte du frontend s’inscrit ainsi dans l’architecture de l’application existante.',
          },
          {
            title: 'Garder l’usage au centre',
            text: 'L’interface sert les opérations des enseignants : préparer des configurations et les appliquer aux postes des salles de classe.',
          },
        ],
        challenge:
          'Faire évoluer les technologies et le design tout en conservant les fonctions d’un outil interne existant. Le nouveau client devait continuer à dialoguer avec l’API et représenter correctement les configurations réseau.',
        result:
          'Une refonte du frontend en React et TypeScript, accompagnée de contributions au backend JAX-RS. Le projet étant interne à l’EMF, cette fiche en présente le contexte et l’architecture sans démo publique.',
        coverCaption:
          'Schéma de la refonte : une nouvelle interface, une API conservée.',
        detailCaption:
          'Vue simplifiée de l’usage : enseignant, configuration et salle de classe.',
      },
      en: {
        category: 'Coursework · EMF',
        summary: 'Modernising the interface of a network configuration tool.',
        role: 'Frontend redesign and backend contributions',
        scope: 'Internal EMF project · Jan. — May 2024',
        context:
          'NetViewer lets EMF teachers prepare and deploy network configurations in classrooms. They can group students into VLANs and manage their Internet access.',
        contribution:
          'I contributed to the technical and visual redesign of this internal project. My main task was to replace the Java EE client, built with Servlets and JSP, with a React and TypeScript interface. I also contributed improvements to the existing backend.',
        decisions: [
          {
            title: 'Modernise the client',
            text: 'React and TypeScript replace the existing presentation layer to build screens and interactions.',
          },
          {
            title: 'Keep the backend',
            text: 'The API stays on JAX-RS. The frontend redesign therefore works within the existing application architecture.',
          },
          {
            title: 'Focus on the actual workflow',
            text: 'The interface supports teachers’ tasks: preparing configurations and applying them to classroom workstations.',
          },
        ],
        challenge:
          'Updating the technology and design while retaining the functions of an existing internal tool. The new client needed to communicate with the API and represent network configurations correctly.',
        result:
          'A redesigned React and TypeScript frontend, with contributions to the JAX-RS backend. As this is an internal EMF project, this case study describes its context and architecture without a public demo.',
        coverCaption: 'Redesign diagram: a new interface, an existing API.',
        detailCaption:
          'A simplified workflow: teacher, configuration and classroom.',
      },
    },
  },
]

export const additionalProjects = [
  {
    name: 'NexTemplate',
    href: 'https://github.com/henchoznoe/NexTemplate',
    type: {
      fr: 'Socle Next.js · Authentification, données & CI',
      en: 'Next.js starter · Authentication, data & CI',
    },
  },
  {
    name: 'Shifty',
    href: 'https://shifty-prod.vercel.app',
    type: {
      fr: 'Application web · Disponibilités partagées',
      en: 'Web application · Shared availability',
    },
  },
  {
    name: 'Bisous Bisous',
    href: 'https://www.bisousbisous.ch',
    type: {
      fr: 'Site bilingue · Musique & événements',
      en: 'Bilingual website · Music & events',
    },
  },
  {
    name: 'Typify',
    href: 'https://github.com/henchoznoe/Typify',
    type: {
      fr: 'Template Typst · Documents académiques',
      en: 'Typst template · Academic documents',
    },
  },
]
