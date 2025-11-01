import { motion } from 'framer-motion'
import { BrainCircuit, FolderKanban, GraduationCap, Mail, User, X } from 'lucide-react'
import { memo, useCallback, useEffect, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
    { icon: User, text: 'About', to: '/about' },
    { icon: BrainCircuit, text: 'Skills', to: '/skills' },
    { icon: GraduationCap, text: 'Education', to: '/academics' },
    { icon: FolderKanban, text: 'Projects', to: '/projects' },
    { icon: Mail, text: 'Contact', to: '/contact' },
]

const navVariants = {
    closed: {
        opacity: 0.5,
        transition: {
            damping: 30,
            mass: 0.8,
            stiffness: 250,
            type: 'spring',
            when: 'afterChildren',
        },
        x: '100%',
    },
    open: {
        opacity: 1,
        transition: {
            damping: 30,
            delayChildren: 0.1,
            mass: 0.8,
            staggerChildren: 0.07,
            stiffness: 250,
            type: 'spring',
        },
        x: '0%',
    },
}

const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
}

const overlayVariants = {
    hidden: { opacity: 0, pointerEvents: 'none' },
    visible: { opacity: 0.4, pointerEvents: 'auto' },
}

const NavItem = memo(({ link, onNavClick, isActive }) => {
    const Icon = link.icon
    return (
        <motion.li className="w-full" variants={itemVariants}>
            <Link
                className={`flex flex-row items-center justify-start gap-4 text-lg font-medium transition-colors duration-200 py-2 w-full
          ${isActive ? 'text-primary' : 'text-foreground hover:text-primary'}
        `}
                onClick={onNavClick}
                style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}
                to={link.to}
            >
                <Icon className="w-5 h-5 flex-shrink-0" style={{ display: 'inline-block' }} />
                <span className="leading-none" style={{ display: 'inline-block' }}>
                    {link.text}
                </span>
            </Link>
        </motion.li>
    )
})
NavItem.displayName = 'NavItem'

const SideNav = memo(({ open, onClose }) => {
    const location = useLocation()

    const handleKeyDown = useCallback(
        e => {
            if (e.key === 'Escape') onClose()
        },
        [onClose],
    )

    const handleClickOutside = useCallback(
        e => {
            if (!e.target.closest('.side-nav-panel') && !e.target.closest('.hamburger')) {
                onClose()
            }
        },
        [onClose],
    )

    useEffect(() => {
        if (!open) return

        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('mousedown', handleClickOutside)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('mousedown', handleClickOutside)
            document.body.style.overflow = ''
        }
    }, [open, handleKeyDown, handleClickOutside])

    const navItems = useMemo(
        () =>
            navLinks.map(link => (
                <NavItem isActive={location.pathname === link.to} key={link.to} link={link} onNavClick={onClose} />
            )),
        [onClose, location.pathname],
    )

    return (
        <>
            <motion.div
                animate={open ? 'visible' : 'hidden'}
                className="fixed inset-0 bg-black z-40 lg:hidden"
                initial={false}
                onClick={onClose}
                style={{
                    transform: 'translate3d(0, 0, 0)',
                    willChange: 'opacity',
                }}
                transition={{ duration: 0.3 }}
                variants={overlayVariants}
            />

            <motion.nav
                animate={open ? 'open' : 'closed'}
                aria-label="Main Navigation"
                className="side-nav-panel fixed top-0 right-0 w-[270px] h-screen bg-card shadow-lg z-50 flex flex-col p-6 pt-8"
                initial={false}
                style={{
                    transform: 'translate3d(0, 0, 0)',
                    willChange: 'transform, opacity',
                }}
                variants={navVariants}
            >
                <motion.button
                    aria-label="Close Menu"
                    className="self-end text-muted-foreground hover:text-primary transition-all duration-300 hover:rotate-90 cursor-pointer p-2 -mr-2 mb-8 will-change-transform"
                    onClick={onClose}
                    type="button"
                    variants={itemVariants}
                >
                    <X className="w-7 h-7" />
                </motion.button>

                <ul className="flex-1 space-y-6">{navItems}</ul>
            </motion.nav>
        </>
    )
})
SideNav.displayName = 'SideNav'

export default SideNav
