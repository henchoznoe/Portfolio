'use client'


import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Box, Cloud, Layout, Server, Terminal as TerminalIcon } from 'lucide-react'
import { useState } from 'react'
import { FileTree } from './file-tree'
import { TechItem } from './types'

const tabs = [
    { id: 'all', label: 'All', icon: TerminalIcon },
    { id: 'lang', label: 'Languages', icon: Layout },
    { id: 'framework', label: 'Frameworks & Libraries', icon: Server },
    { id: 'db', label: 'Databases', icon: Cloud },
    { id: 'tool', label: 'Tools', icon: Cloud },
]



export const techStack: TechItem[] = [
    {
        id: 'lang',
        name: 'Languages',
        type: 'folder',
        children: [
            {
                id: 'typescript',
                name: 'TypeScript',
                type: 'file',
                icon: Layout,
                category: 'lang',
            },
            {
                id: 'python',
                name: 'Python',
                type: 'file',
                icon: Layout,
                category: 'lang',
            },
            {
                id: 'rust',
                name: 'Rust',
                type: 'file',
                icon: Layout,
                category: 'lang',
            }
        ]
    },
    {
        id: 'framework',
        name: 'Frameworks & Libraries',
        type: 'folder',
        children: [
            {
                id: 'react',
                name: 'React',
                type: 'file',
                icon: Layout,
                category: 'framework',
            },
            {
                id: 'nextjs',
                name: 'Next.js',
                type: 'file',
                icon: Layout,
                category: 'framework',
            },
            {
                id: 'tailwindcss',
                name: 'TailwindCSS',
                type: 'file',
                icon: Layout,
                category: 'framework',
            }
        ]
    },
    {
        id: 'db',
        name: 'Databases',
        type: 'folder',
        children: [
            {
                id: 'postgres',
                name: 'PostgreSQL',
                type: 'file',
                icon: Cloud,
                category: 'db',
            },
            {
                id: 'mongodb',
                name: 'MongoDB',
                type: 'file',
                icon: Cloud,
                category: 'db',
            },
            {
                id: 'redis',
                name: 'Redis',
                type: 'file',
                icon: Cloud,
                category: 'db',
            }
        ]
    },
    {
        id: 'tool',
        name: 'Tools',
        type: 'folder',
        children: [
            {
                id: 'git',
                name: 'Git',
                type: 'file',
                icon: TerminalIcon,
                category: 'tool',
            },
            {
                id: 'docker',
                name: 'Docker',
                type: 'file',
                icon: Box,
                category: 'tool',
            },
            {
                id: 'vscode',
                name: 'VS Code',
                type: 'file',
                icon: Layout,
                category: 'tool',
            }
        ]
    }
]

export function Terminal() {
    const [activeTab, setActiveTab] = useState('all')

    return (
        <section className="py-20 px-4 flex justify-center items-center min-h-screen bg-black">
            <div className="w-full max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Tech Stack</h2>
                    <p className="text-white/60">Interactive file tree of technologies I master</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-full bg-[#0A0A0A] rounded-xl border border-white/10 shadow-2xl overflow-hidden"
                >
                    {/* Window Header */}
                    <div className="bg-[#1A1A1A] px-4 py-3 flex items-center justify-between border-b border-white/5">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                        </div>
                        <div className="text-xs text-white/40 font-mono">tech-stack.terminal</div>
                        <div className="w-16" /> {/* Spacer for centering */}
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-1 p-2 bg-[#0F0F0F] border-b border-white/5 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    'flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200',
                                    activeTab === tab.id
                                        ? 'bg-white/10 text-white shadow-sm'
                                        : 'text-white/40 hover:text-white hover:bg-white/5'
                                )}
                            >
                                <tab.icon size={14} />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Terminal Content */}
                    <div className="h-[500px] relative bg-[#0A0A0A] font-mono text-sm">
                        <div className="absolute inset-0 overflow-y-auto p-6 pb-12 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {/* Command Line Prompt */}
                            <div className="flex items-center gap-2 mb-4 text-white/60">
                                <span className="text-yellow-400">user@portfolio</span>
                                <span>:</span>
                                <span className="text-blue-400">~/tech-stack</span>
                                <span>$</span>
                                <span className="text-white">ls -la</span>
                            </div>

                            {/* File Tree */}
                            <FileTree data={techStack} filter={activeTab} />
                        </div>

                        {/* Status Bar */}
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-[#0F0F0F] border-t border-white/5 flex justify-between text-xs text-white/40 z-10">
                            <div className="flex gap-4">
                                <span><Box size={12} className="inline mr-1" /> 23 technologies</span>
                                <span>4 categories</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Active
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="mt-4 text-center text-xs text-white/20 font-mono">
                    💡 Tip: Click tabs to filter by category | Hover over items to see expertise level
                </div>
            </div>
        </section>
    )
}
