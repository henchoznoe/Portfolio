'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ChevronRight, File, Folder, FolderOpen } from 'lucide-react'
import { useState } from 'react'
import { TechItem } from './types'

interface FileTreeProps {
    data: TechItem[]
    filter: string
}

export function FileTree({ data, filter }: FileTreeProps) {
    return (
        <div className="pl-2 font-mono text-sm">
            <AnimatePresence mode="popLayout">
                {data.map((item) => (
                    <FileTreeNode key={item.id} item={item} filter={filter} />
                ))}
            </AnimatePresence>
        </div>
    )
}

function FileTreeNode({ item, filter }: { item: TechItem; filter: string }) {
    const [isOpen, setIsOpen] = useState(true)
    const [isHovered, setIsHovered] = useState(false)

    // Filter logic:
    // If it's a folder, check if it has children that match the filter.
    // If it's a file, check if it matches the filter.
    const matchesFilter = (item: TechItem): boolean => {
        if (filter === 'all') return true
        if (item.type === 'folder') {
            return item.children?.some((child) => matchesFilter(child)) ?? false
        }
        return item.category === filter
    }

    if (!matchesFilter(item)) return null

    const Icon = item.icon || (item.type === 'folder' ? (isOpen ? FolderOpen : Folder) : File)

    return (
        <motion.div
            layout
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="relative"
        >
            <div
                className={cn(
                    'flex items-center gap-2 py-1 px-2 rounded-md cursor-pointer transition-colors duration-200',
                    isHovered ? 'bg-white/5' : 'transparent'
                )}
                onClick={() => item.type === 'folder' && setIsOpen(!isOpen)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Indentation Guide */}
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5" />

                {/* Arrow for folders */}
                {item.type === 'folder' && (
                    <span className="text-white/40">
                        {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    </span>
                )}

                {/* Icon */}
                <span className={cn('text-white/60', isHovered && 'text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]')}>
                    <Icon size={16} />
                </span>

                {/* Name */}
                <span className={cn('text-white/80', isHovered && 'text-white font-medium')}>
                    {item.name}
                </span>
            </div>

            {/* Children (Recursive) */}
            <AnimatePresence>
                {item.type === 'folder' && isOpen && item.children && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden ml-4 border-l border-white/10"
                    >
                        {item.children.map((child) => (
                            <FileTreeNode key={child.id} item={child} filter={filter} />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
