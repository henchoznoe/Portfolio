import { Box, Cloud, Cpu, Database, Globe, Layout, LucideIcon, Server, Terminal } from 'lucide-react'

export type TechItem = {
    id: string
    name: string
    type: 'folder' | 'file'
    icon?: LucideIcon
    description?: string
    level?: 'Expert' | 'Advanced' | 'Intermediate'
    children?: TechItem[]
    category?: 'frontend' | 'backend' | 'devops' | 'all'
}

export const techStack: TechItem[] = [
    {
        id: 'cloud-infrastructure',
        name: 'cloud-infrastructure',
        type: 'folder',
        category: 'devops',
        children: [
            { id: 'aws', name: 'AWS', type: 'file', icon: Cloud, description: 'EC2, S3, Lambda, RDS', level: 'Expert', category: 'devops' },
            { id: 'azure', name: 'Azure', type: 'file', icon: Cloud, description: 'App Service, Blob Storage', level: 'Advanced', category: 'devops' },
            { id: 'gcp', name: 'GCP', type: 'file', icon: Globe, description: 'Cloud Run, Firestore', level: 'Intermediate', category: 'devops' },
            { id: 'docker', name: 'Docker', type: 'file', icon: Box, description: 'Containerization', level: 'Expert', category: 'devops' },
            { id: 'k8s', name: 'Kubernetes', type: 'file', icon: Server, description: 'Orchestration', level: 'Advanced', category: 'devops' },
        ]
    },
    {
        id: 'frontend-stack',
        name: 'frontend-stack',
        type: 'folder',
        category: 'frontend',
        children: [
            { id: 'react', name: 'React', type: 'file', icon: Layout, description: 'Hooks, Context, Suspense', level: 'Expert', category: 'frontend' },
            { id: 'nextjs', name: 'Next.js', type: 'file', icon: Globe, description: 'App Router, SSR, ISR', level: 'Expert', category: 'frontend' },
            { id: 'tailwind', name: 'Tailwind CSS', type: 'file', icon: Layout, description: 'Custom Config, Plugins', level: 'Expert', category: 'frontend' },
            { id: 'framer', name: 'Framer Motion', type: 'file', icon: Cpu, description: 'Complex Animations', level: 'Advanced', category: 'frontend' },
            { id: 'threejs', name: 'Three.js', type: 'file', icon: Box, description: '3D Experiences', level: 'Intermediate', category: 'frontend' },
        ]
    },
    {
        id: 'backend-stack',
        name: 'backend-stack',
        type: 'folder',
        category: 'backend',
        children: [
            { id: 'nodejs', name: 'Node.js', type: 'file', icon: Terminal, description: 'Event Loop, Streams', level: 'Expert', category: 'backend' },
            { id: 'postgresql', name: 'PostgreSQL', type: 'file', icon: Database, description: 'Complex Queries, Indexing', level: 'Advanced', category: 'backend' },
            { id: 'redis', name: 'Redis', type: 'file', icon: Database, description: 'Caching, Pub/Sub', level: 'Advanced', category: 'backend' },
            { id: 'graphql', name: 'GraphQL', type: 'file', icon: Globe, description: 'Apollo, Schema Design', level: 'Advanced', category: 'backend' },
        ]
    }
]
