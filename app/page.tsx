import { HeroSection } from '@/components/sections/hero-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { SkillsSection } from '@/components/sections/skills-section'

export default function Home() {
    return (
        <main className="min-h-[100dvh] bg-black text-white selection:bg-white/20">
            <HeroSection />
            <ProjectsSection />
            <SkillsSection />
        </main>
    )
}
