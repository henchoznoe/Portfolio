import { motion } from 'framer-motion'
import { Code, ExternalLink, FolderKanban } from 'lucide-react'
import { memo, useMemo } from 'react'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
        y: 0,
    },
}

const ProjectCard = memo(({ project }) => {
    return (
        <motion.div
            className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6 flex flex-col h-full"
            variants={itemVariants}
        >
            <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">{project.title}</h3>
            <p className="text-base text-muted-foreground mb-4 flex-grow">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                {project.tags.map(tag => (
                    <span
                        className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-600"
                        key={tag.id}
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex gap-4 flex-wrap">
                {project.links.map(link => (
                    <a
                        className="flex items-center gap-2 text-primary font-semibold text-sm hover:underline hover:text-foreground dark:hover:text-primary-foreground/60 transition-colors duration-200"
                        href={link.href}
                        key={link.id}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {link.type === 'code' ? <Code className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                        {link.type === 'code' ? 'Code' : 'Demo'}
                    </a>
                ))}
            </div>
        </motion.div>
    )
})
ProjectCard.displayName = 'ProjectCard'

function ProjectsComponent() {
    const projectsData = useMemo(
        () => [
            {
                desc: 'A lightweight, production-ready Express.js template written in TypeScript. This starter includes common best-practices out of the box: structured routing, request validation with Zod, OpenAPI/Swagger docs, centralized logging with Winston, Supabase integration helper, security middlewares, and a friendly DX using tsx for development.',
                id: 1,
                links: [{ href: 'https://github.com/henchoznoe/ExpressTemplate', id: 1, type: 'code' }],
                tags: [
                    { id: 1, name: 'TypeScript' },
                    { id: 2, name: 'Node.js' },
                    { id: 3, name: 'Express.js' },
                ],
                title: 'ExpressTemplate',
            },
        ],
        [],
    )

    return (
        <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
            <motion.div
                animate="visible"
                className="flex flex-col items-center w-full"
                initial="hidden"
                variants={containerVariants}
            >
                <motion.div className="flex flex-col items-center text-center" variants={itemVariants}>
                    <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 flex items-center gap-4 text-foreground">
                        <FolderKanban className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm" />
                        Projects
                    </h2>
                </motion.div>
                <motion.div
                    className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                >
                    {projectsData.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default memo(ProjectsComponent)
