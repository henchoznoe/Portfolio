'use client'

import { Button } from '@/components/ui/button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code2, ExternalLink, Github } from 'lucide-react'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
    {
        id: 1,
        year: '20xx',
        title: 'Project Title',
        description: 'Here is a description of the project. It can be a bit long, but not too long.',
        stack: ['Stack 1', 'Stack 2', 'Stack 3'],
        color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
        id: 2,
        year: '20xx',
        title: 'Project Title',
        description: 'Here is a description of the project. It can be a bit long, but not too long.',
        stack: ['Stack 1', 'Stack 2', 'Stack 3'],
        color: 'from-purple-500/20 to-pink-500/20',
    },
    {
        id: 3,
        year: '20xx',
        title: 'Project Title',
        description: 'Here is a description of the project. It can be a bit long, but not too long.',
        stack: ['Stack 1', 'Stack 2', 'Stack 3'],
        color: 'from-emerald-500/20 to-teal-500/20',
    }
]

export const ProjectsSection = () => {

    const sectionRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const mm = gsap.matchMedia()

        mm.add('(min-width: 768px)', () => {
            const track = trackRef.current
            if (!track) return

            const totalWidth = track.scrollWidth
            const viewportWidth = window.innerWidth
            const xMovement = -(totalWidth - viewportWidth)

            gsap.to(track, {
                x: xMovement,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 1,
                    start: 'top top',
                    end: () => `+=${totalWidth}`, // Scroll distance proportional to track width
                    invalidateOnRefresh: true,
                },
            })
        })

        return () => mm.revert()
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="relative bg-black overflow-hidden">
            <div
                ref={trackRef}
                className="flex flex-col md:flex-row md:w-max md:h-screen items-center"
            >
                <div className="w-full md:w-[40vw] h-[50vh] md:h-screen flex flex-col justify-center px-8 md:pl-20 shrink-0">
                    <h2 className="text-6xl md:text-9xl font-bold text-white mb-8">
                        <span className="text-white/20">My</span>
                        <br/>
                        Projects
                    </h2>
                    <p className="text-white/60 max-w-md text-lg">
                        Here are some of the projects I've worked on. Check them out!
                    </p>
                </div>

                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="w-full md:w-[60vw] h-[80vh] md:h-[80vh] flex items-center justify-center p-4 md:p-10 shrink-0"
                    >
                        <div className="relative w-full h-full max-h-[800px] rounded-3xl overflow-hidden border border-white/10 group">
                            {/* Background Image Placeholder */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
                                {/* Glass Panel */}
                                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl max-w-3xl overflow-hidden">
                                    {/* Glow effect inside card */}
                                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

                                    <div className="flex items-start justify-between mb-6">
                                        <div className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent select-none">
                                            {project.year}
                                        </div>
                                        <div className="flex gap-4">
                                            <Button size="icon" variant="outline" className="rounded-full w-12 h-12 border-white/20 hover:bg-white hover:text-black transition-colors">
                                                <Github size={20} />
                                            </Button>
                                            <Button size="icon" variant="outline" className="rounded-full w-12 h-12 border-white/20 hover:bg-white hover:text-black transition-colors">
                                                <ExternalLink size={20} />
                                            </Button>
                                        </div>
                                    </div>

                                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-xl">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3">
                                        {project.stack.map((tech) => (
                                            <div key={tech} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">
                                                <Code2 size={14} />
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                
                {/* Spacer for end of scroll */}
                <div className="w-full md:w-[20vw] shrink-0" />
            </div>
        </section>
    )
}
