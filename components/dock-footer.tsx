'use client'

import { cn } from '@/lib/utils'
import { MotionValue, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { useRef, useState } from 'react'

export const DockFooter = () => {
    const mouseX = useMotionValue(Infinity)

    return (
        <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-50 flex h-24 items-end justify-center pb-8">

            <motion.div
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className="pointer-events-auto mx-auto flex h-16 items-end gap-4 rounded-full border border-white/10 bg-black/40 px-4 pb-3 backdrop-blur-2xl shadow-2xl"
            >
                <DockIcon mouseX={mouseX} icon={Github} label="GitHub" href="https://github.com" />
                <DockIcon mouseX={mouseX} icon={Linkedin} label="LinkedIn" href="https://linkedin.com" />
                <DockIcon mouseX={mouseX} icon={Twitter} label="Twitter" href="https://twitter.com" />
                <DockIcon mouseX={mouseX} icon={Mail} label="Email" href="mailto:contact@example.com" />
            </motion.div>
        </div>
    )
}

const DockIcon = ({
    mouseX,
    icon: Icon,
    label,
    href,
}: {
    mouseX: MotionValue
    icon: any
    label: string
    href: string
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
        return val - bounds.x - bounds.width / 2
    })

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40])
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

    return (
        <div className="relative flex flex-col items-center justify-end">
            <div
                className={cn(
                    'absolute -top-10 left-1/2 -translate-x-1/2 rounded-md border border-white/10 bg-black/80 px-2 py-1 text-[10px] text-white backdrop-blur-md transition-all duration-200',
                    isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                )}
            >
                {label}
            </div>

            <motion.div
                ref={ref}
                style={{ width }}
                className="aspect-square flex items-center justify-center rounded-full bg-white/5 border border-white/5 hover:bg-white/10 cursor-none"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => window.open(href, '_blank')}
            >
                <Icon className="text-white/80 w-5 h-5" />
            </motion.div>
        </div>
    )
}
