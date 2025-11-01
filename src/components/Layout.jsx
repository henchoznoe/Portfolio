import Footer from '@components/Footer'
import Header from '@components/Header'
import SideNav from '@components/SideNav'
import { memo } from 'react'
import { StaticBackground } from '@/App'

const Layout = ({ children, theme, toggleTheme, sideNavOpen, setSideNavOpen }) => {
    return (
        <div className="relative min-h-[calc(100dvh)] flex flex-col text-foreground overflow-x-hidden">
            <StaticBackground theme={theme} />
            <Header currentTheme={theme} onHamburgerClick={() => setSideNavOpen(true)} toggleTheme={toggleTheme} />
            <SideNav onClose={() => setSideNavOpen(false)} open={sideNavOpen} />
            <main className="flex-grow pt-20 outline-none" tabIndex={-1}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default memo(Layout)
