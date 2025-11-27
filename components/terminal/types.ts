import { LucideIcon } from 'lucide-react'

export type TechItem = {
    id: string
    name: string
    type: 'folder' | 'file'
    icon?: LucideIcon
    children?: TechItem[]
    category?: 'lang' | 'framework' | 'db' | 'tool'
}
