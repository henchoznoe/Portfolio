export type Language = 'en' | 'fr'

export const translations = {
  en: {
    dock: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
      translate: 'Français', // Label to switch TO French
    },
    about: {
      tech: {
        title: 'Modern Stack',
        description: 'Building scalable web apps with the React ecosystem, TypeScript, and TailwindCSS.',
      },
      clean: {
        title: 'Clean Code',
        description: 'I strictly follow SOLID principles and KISS. Code must be maintainable and readable.',
      },
      swiss: {
        title: 'Swiss Crafted',
        description: 'Based in Fribourg. Bringing precision and reliability to every project I touch.',
      },
      student: {
        title: 'Engineering Student',
        description: 'Constantly learning and evolving. Bridging the gap between theory and practical application.',
      },
      profile: {
        title: 'Beyond the Code',
        description: "Beyond the screen, I'm exploring emerging tech or maintaining a healthy lifestyle through sports..",
      },
    },
    footer: {
      title: "LET'S TALK",
      interests: {
        title: 'Interests',
        items: ['Web Development', 'Software Engineering', 'Application Development'],
      },
      contact: {
        title: 'Contact',
        location: 'Fribourg, Switzerland',
      },
      socials: {
        title: 'Socials',
      },
      time: {
        title: 'Local time',
        location: 'Fribourg, Switzerland',
        built: 'Built with Next.js & Tailwind.',
      },
    },
  },
  fr: {
    dock: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
      translate: 'English', // Label to switch TO English
    },
    about: {
      tech: {
        title: 'Stack Moderne',
        description: 'Création d\'applications web évolutives avec l\'écosystème React, TypeScript et TailwindCSS.',
      },
      clean: {
        title: 'Code Propre',
        description: 'Je suis strictement les principes SOLID et KISS. Le code doit être maintenable et lisible.',
      },
      swiss: {
        title: 'Qualité Suisse',
        description: 'Basé à Fribourg. J\'apporte précision et fiabilité à chaque projet que je touche.',
      },
      student: {
        title: 'Étudiant Ingénieur',
        description: 'En apprentissage constant. Je comble le fossé entre la théorie et l\'application pratique.',
      },
      profile: {
        title: 'Au-delà du Code',
        description: "Au-delà de l'écran, j'explore les technologies émergentes ou maintiens un mode de vie sain grâce au sport..",
      },
    },
    footer: {
      title: "DISCUTONS",
      interests: {
        title: 'Intérêts',
        items: ['Développement Web', 'Génie Logiciel', 'Développement d\'Applications'],
      },
      contact: {
        title: 'Contact',
        location: 'Fribourg, Suisse',
      },
      socials: {
        title: 'Réseaux',
      },
      time: {
        title: 'Heure locale',
        location: 'Fribourg, Suisse',
        built: 'Fait avec Next.js & Tailwind.',
      },
    },
  },
} as const

export type TranslationType = typeof translations['en']

