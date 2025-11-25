import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { Terminal } from '@/components/terminal/terminal'

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-white/20">
            <HeroSection />
            <ProjectsSection />
            <Terminal />
        </main>
    )
}
