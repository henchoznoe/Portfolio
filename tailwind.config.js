// tailwind.config.js
import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    plugins: [require('tailwindcss-animate')],
    theme: {
        extend: {
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                xl: 'calc(var(--radius) + 4px)',
            },
            colors: {
                accent: 'oklch(var(--accent))',
                'accent-foreground': 'oklch(var(--accent-foreground))',
                background: 'oklch(var(--background))',
                border: 'oklch(var(--border))',
                card: 'oklch(var(--card))',
                'card-foreground': 'oklch(var(--card-foreground))',
                // Additional optional colors
                'chart-1': 'oklch(var(--chart-1))',
                'chart-2': 'oklch(var(--chart-2))',
                'chart-3': 'oklch(var(--chart-3))',
                'chart-4': 'oklch(var(--chart-4))',
                'chart-5': 'oklch(var(--chart-5))',
                destructive: 'oklch(var(--destructive))',
                foreground: 'oklch(var(--foreground))',
                input: 'oklch(var(--input))',
                muted: 'oklch(var(--muted))',
                'muted-foreground': 'oklch(var(--muted-foreground))',
                popover: 'oklch(var(--popover))',
                'popover-foreground': 'oklch(var(--popover-foreground))',
                primary: 'oklch(var(--primary))',
                'primary-dark-hover': 'oklch(var(--primary-dark-hover))',
                'primary-foreground': 'oklch(var(--primary-foreground))',
                ring: 'oklch(var(--ring))',
                secondary: 'oklch(var(--secondary))',
                'secondary-foreground': 'oklch(var(--secondary-foreground))',
                sidebar: 'oklch(var(--sidebar))',
                'sidebar-accent': 'oklch(var(--sidebar-accent))',
                'sidebar-accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
                'sidebar-border': 'oklch(var(--sidebar-border))',
                'sidebar-foreground': 'oklch(var(--sidebar-foreground))',
                'sidebar-primary': 'oklch(var(--sidebar-primary))',
                'sidebar-primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
                'sidebar-ring': 'oklch(var(--sidebar-ring))',
            },
            fontFamily: {
                mono: ['var(--font-mono)', ...fontFamily.mono],
                sans: ['var(--font-sans)', ...fontFamily.sans],
            },
        },
    },
}
