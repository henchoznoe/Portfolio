/**
 * File: app/page.tsx
 * Description: Home page.
 * Author: Noé Henchoz
 * Copyright (c) 2026 Noé Henchoz
 */

import { Footer } from '@/components/footer'
import { AboutSection } from '@/components/sections/about-section'
import { HeroSection } from '@/components/sections/hero-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { SkillsSection } from '@/components/sections/skills-section'

export default function Home() {
  return (
    <main className="min-h-dvh overflow-clip bg-[#f1efe8]">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </main>
  )
}
