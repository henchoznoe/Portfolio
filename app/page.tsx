/**
 * File: app/page.tsx
 * Description: Home page.
 * Author: Noé Henchoz
 * Copyright (c) 2026 Noé Henchoz
 */

import { AboutSection } from '@/components/sections/about-section'
import { HeroSection } from '@/components/sections/hero-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { SkillsSection } from '@/components/sections/skills-section'

export default function Home() {
  return (
    <main className="min-h-dvh bg-black text-white selection:bg-white/20">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    </main>
  )
}
