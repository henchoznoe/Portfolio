'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowUpRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export const Footer = () => {

    const [time, setTime] = useState<string>('')
    const [timezone, setTimezone] = useState<string>('')
    const containerRef = useRef<HTMLElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            const options: Intl.DateTimeFormatOptions = {
                timeZone: 'Europe/Zurich',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            }
            setTime(now.toLocaleTimeString('en-US', options))

            // getTimezoneOffset returns minutes BEHIND UTC, so we negate it
            const offset = -now.getTimezoneOffset() / 60
            const sign = offset >= 0 ? '+' : ''
            setTimezone(`${sign}${offset}`)
        }

        updateTime()
        const interval = setInterval(updateTime, 1000)

        return () => clearInterval(interval)
    }, [])

    useGSAP(() => {
        gsap.fromTo(titleRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        )
    }, { scope: containerRef })

    return (
        <footer
            ref={containerRef}
            className="relative bg-black text-white pt-20 pb-40 px-6 overflow-hidden border-t border-white/10"
        >
            <div className="max-w-7xl mx-auto">
                <div className="mb-24">
                    <h2
                        ref={titleRef}
                        className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-white/40 select-none"
                    >
                        LET'S TALK
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 border-t border-white/10 pt-12">

                    <div className="flex flex-col gap-4">
                        <h3 className="font-mono text-sm text-white/40 uppercase tracking-wider">Interests</h3>
                        <ul className="flex flex-col gap-2">
                            <li className="text-white/60 hover:text-white transition-colors text-lg font-medium w-fit">Web Development</li>
                            <li className="text-white/60 hover:text-white transition-colors text-lg font-medium w-fit">Software Engineering</li>
                            <li className="text-white/60 hover:text-white transition-colors text-lg font-medium w-fit">Application Development</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-mono text-sm text-white/40 uppercase tracking-wider">Contact</h3>
                        <div className="flex flex-col gap-2">
                            <FooterLink href="mailto:henchoznoe@gmail.com" external>henchoznoe@gmail.com</FooterLink>
                            <p className="text-white/80 font-mono text-sm">Fribourg, Switzerland</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-mono text-sm text-white/40 uppercase tracking-wider">Socials</h3>
                        <div className="flex flex-col gap-2">
                            <FooterLink href="https://github.com/henchoznoe" external>GitHub</FooterLink>
                            <FooterLink href="https://linkedin.com/in/henchoznoe" external>LinkedIn</FooterLink>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 md:items-end">
                        <h3 className="font-mono text-sm text-white/40 uppercase tracking-wider">Local time</h3>
                        <div className="flex items-center gap-3 font-mono text-xl text-white/90">
                            {time || '--:--:--'}
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-white/30 text-sm">UTC {timezone}</span>
                        </div>
                        <p className="text-white/40 text-xs font-mono text-left md:text-right italic">
                            Fribourg, Switzerland
                        </p>

                        <p className="text-white/20 text-xs font-mono mt-auto pt-8">
                            © {new Date().getFullYear()} <a href="https://henchoznoe.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Noé Henchoz</a>. <br/>
                            Built with Next.js & Tailwind.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const FooterLink = ({ href, children, external }: { href: string, children: React.ReactNode, external?: boolean }) => {
    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-1 text-white/60 hover:text-white transition-colors duration-200 w-fit"
        >
            <span className="text-lg font-medium">{children}</span>
            {external && (
                <ArrowUpRight className="size-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
            )}
        </a>
    )
}
