import { HeroSection } from '@/components/hero-section'
import { Terminal } from '@/components/terminal/terminal'
import { Navbar } from '@/components/ui/navbar'

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-white/20">
            <Navbar />
            <HeroSection />
            <Terminal />
        </main>
    )
}
