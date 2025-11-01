import React from 'react'
import { StaticBackground } from '../App'
import Footer from './Footer'
import Header from './Header'
import SideNav from './SideNav'

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

export default React.memo(Layout)
