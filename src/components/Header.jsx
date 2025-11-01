import { motion } from 'framer-motion'
import { Menu, Moon, Sun } from 'lucide-react'
import { memo, useCallback, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'

const headerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
        opacity: 1,
        transition: {
            damping: 20,
            stiffness: 120,
            type: 'spring',
        },
        y: 0,
    },
}

const navLinks = [
    { label: 'About', to: '/about' },
    { label: 'Skills', to: '/skills' },
    { label: 'Education', to: '/academics' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
]

const Header = memo(({ toggleTheme, currentTheme, onHamburgerClick }) => {
    const location = useLocation()

    const handleThemeToggle = useCallback(
        e => {
            toggleTheme()
            e.currentTarget.blur()
        },
        [toggleTheme],
    )

    const ThemeIcon = useMemo(() => (currentTheme === 'light' ? Moon : Sun), [currentTheme])
    const themeAriaLabel = useMemo(
        () => `Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`,
        [currentTheme],
    )

    return (
        <motion.header
            animate="visible"
            className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-8 py-4 bg-muted/70 dark:bg-muted/50 backdrop-blur-md shadow-md border-b border-border/40"
            initial="hidden"
            style={{ transform: 'translate3d(0, 0, 0)', willChange: 'transform' }}
            variants={headerVariants}
        >
            {/* THE FIX: Changed Link to point to "/" */}
            <Link
                className="text-2xl sm:text-3xl font-extrabold text-primary tracking-wide select-none hover:opacity-80 transition"
                to="/"
            >
                Noé Henchoz
            </Link>

            <nav className="hidden min-[935px]:flex gap-2 sm:gap-4 md:gap-6 items-center">
                {navLinks.map(link => {
                    const isActive =
                        location.pathname === link.to || (link.to === '/about' && location.pathname === '/')
                    return (
                        <Link
                            className={`px-3 py-1.5 rounded-md text-base font-medium transition-colors duration-150
                ${
                    isActive
                        ? 'text-primary bg-primary/10 dark:bg-primary/20'
                        : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
                            key={link.to}
                            to={link.to}
                        >
                            {link.label}
                        </Link>
                    )
                })}
                <button
                    aria-label={themeAriaLabel}
                    className="ml-2 p-2 rounded-full text-muted-foreground hover:text-primary transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 will-change-transform"
                    onClick={handleThemeToggle}
                    type="button"
                >
                    <ThemeIcon className="w-6 h-6" />
                </button>
            </nav>

            <div className="max-[934px]:flex hidden items-center gap-2">
                <button
                    aria-label={themeAriaLabel}
                    className="p-2 rounded-full text-muted-foreground hover:text-primary transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 will-change-transform"
                    onClick={handleThemeToggle}
                    type="button"
                >
                    <ThemeIcon className="w-6 h-6" />
                </button>
                <button
                    aria-label="Open menu"
                    className="ml-1 flex items-center justify-center w-14 h-14 rounded-full hover:bg-primary/10 active:scale-95 transition"
                    onClick={onHamburgerClick}
                    type="button"
                >
                    <Menu className="w-9 h-9 text-primary" />
                </button>
            </div>
        </motion.header>
    )
})
Header.displayName = 'Header'

export default Header
