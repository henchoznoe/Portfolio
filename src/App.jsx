import Layout from '@components/Layout'
import ScrollToTop from '@components/ScrollToTop'
import About from '@pages/About.jsx'
import Academics from '@pages/Academics.jsx'
import Contact from '@pages/Contact.jsx'
import Projects from '@pages/Projects.jsx'
import Skills from '@pages/Skills.jsx'
import { AnimatePresence, motion } from 'framer-motion'
import { memo, useCallback, useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'

export const StaticBackground = memo(({ theme }) => {
    const lightStyles = {
        backgroundColor: 'hsl(210, 40%, 98%)',
        backgroundImage: `
      radial-gradient(ellipse at 10% 10%, hsla(210, 100%, 94%, 0.5), transparent),
      radial-gradient(ellipse at 90% 90%, hsla(240, 100%, 94%, 0.5), transparent),
      linear-gradient(hsl(210, 40%, 96%) 1.5px, transparent 1.5px),
      linear-gradient(to right, hsl(210, 40%, 96%) 1.5px, hsl(210, 40%, 98%) 1.5px)
    `,
        backgroundSize: '40px 40px',
    }

    const darkStyles = {
        backgroundColor: 'hsl(222, 47%, 11%)',
        backgroundImage: `
      radial-gradient(ellipse at 10% 10%, hsla(212, 96%, 15%, 0.8), transparent),
      radial-gradient(ellipse at 90% 90%, hsla(260, 90%, 20%, 0.5), transparent),
      linear-gradient(hsla(222, 47%, 13%, 1) 1.5px, transparent 1.5px),
      linear-gradient(to right, hsla(222, 47%, 13%, 1) 1.5px, hsl(222, 47%, 11%) 1.5px)
    `,
        backgroundSize: '40px 40px',
    }
    const styles = theme === 'light' ? lightStyles : darkStyles
    return <div className="fixed inset-0 -z-50 pointer-events-none transition-colors duration-500" style={styles} />
})
StaticBackground.displayName = 'StaticBackground'

const pageVariants = { in: { opacity: 1, y: 0 }, initial: { opacity: 0, y: 20 }, out: { opacity: 0, y: -20 } }
const pageTransition = { duration: 0.5, ease: 'anticipate', type: 'tween' }

const AnimatedRoutes = memo(() => {
    const location = useLocation()
    const routesConfig = [
        { Component: About, path: '/' },
        { Component: About, path: '/about' },
        { Component: Skills, path: '/skills' },
        { Component: Academics, path: '/academics' },
        { Component: Projects, path: '/projects' },
        { Component: Contact, path: '/contact' },
    ]

    return (
        <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
                {routesConfig.map(({ path, Component }) => (
                    <Route
                        element={
                            <motion.div
                                animate="in"
                                exit="out"
                                initial="initial"
                                transition={pageTransition}
                                variants={pageVariants}
                            >
                                <Component />
                            </motion.div>
                        }
                        key={path}
                        path={path}
                    />
                ))}
            </Routes>
        </AnimatePresence>
    )
})
AnimatedRoutes.displayName = 'AnimatedRoutes'

const App = () => {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme) return storedTheme
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    })
    const [sideNavOpen, setSideNavOpen] = useState(false)

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = useCallback(() => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }, [])

    return (
        <Router>
            <ScrollToTop />
            <Layout setSideNavOpen={setSideNavOpen} sideNavOpen={sideNavOpen} theme={theme} toggleTheme={toggleTheme}>
                <AnimatedRoutes />
            </Layout>
        </Router>
    )
}

export default App
