export type Language = 'en' | 'fr'

export const translations = {
    en: {
        about: {
            clean: {
                description:
                    'I strictly follow SOLID principles and KISS. Code must be maintainable and readable.',
                title: 'Clean Code',
            },
            profile: {
                description:
                    "Beyond the screen, I'm exploring emerging tech or maintaining a healthy lifestyle through sports..",
                title: 'Beyond the Code',
            },
            student: {
                description:
                    'Constantly learning and evolving. Bridging the gap between theory and practical application.',
                title: 'Engineering Student',
            },
            swiss: {
                description:
                    'Based in Fribourg. Bringing precision and reliability to every project I touch.',
                title: 'Swiss Crafted',
            },
            tech: {
                description:
                    'Building scalable web apps with the React ecosystem, TypeScript, and TailwindCSS.',
                title: 'Modern Stack',
            },
        },
        dock: {
            email: 'Email',
            github: 'GitHub',
            linkedin: 'LinkedIn',
            translate: 'Français', // Label to switch TO French
        },
        footer: {
            contact: {
                location: 'Fribourg, Switzerland',
                title: 'Contact',
            },
            interests: {
                items: [
                    'Web Development',
                    'Software Engineering',
                    'Application Development',
                ],
                title: 'Interests',
            },
            socials: {
                title: 'Socials',
            },
            time: {
                built: 'Built with Next.js & Tailwind.',
                location: 'Fribourg, Switzerland',
                title: 'Local time',
            },
            title: "LET'S TALK",
        },
    },
    fr: {
        about: {
            clean: {
                description:
                    'Je suis strictement les principes SOLID et KISS. Le code doit être maintenable et lisible.',
                title: 'Code Propre',
            },
            profile: {
                description:
                    "Au-delà de l'écran, j'explore les technologies émergentes ou maintiens un mode de vie sain grâce au sport..",
                title: 'Au-delà du Code',
            },
            student: {
                description:
                    "En apprentissage constant. Je comble le fossé entre la théorie et l'application pratique.",
                title: 'Étudiant Ingénieur',
            },
            swiss: {
                description:
                    "Basé à Fribourg. J'apporte précision et fiabilité à chaque projet que je touche.",
                title: 'Qualité Suisse',
            },
            tech: {
                description:
                    "Création d'applications web évolutives avec l'écosystème React, TypeScript et TailwindCSS.",
                title: 'Stack Moderne',
            },
        },
        dock: {
            email: 'Email',
            github: 'GitHub',
            linkedin: 'LinkedIn',
            translate: 'English', // Label to switch TO English
        },
        footer: {
            contact: {
                location: 'Fribourg, Suisse',
                title: 'Contact',
            },
            interests: {
                items: [
                    'Développement Web',
                    'Génie Logiciel',
                    "Développement d'Applications",
                ],
                title: 'Intérêts',
            },
            socials: {
                title: 'Réseaux',
            },
            time: {
                built: 'Fait avec Next.js & Tailwind.',
                location: 'Fribourg, Suisse',
                title: 'Heure locale',
            },
            title: 'DISCUTONS',
        },
    },
} as const

export type TranslationType = (typeof translations)['en']
