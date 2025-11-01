import { motion } from 'framer-motion'
import { Code, Database, Layers, Settings2, Terminal } from 'lucide-react'
import { memo, useCallback, useMemo, useState } from 'react'
import { cn } from '@/lib/classNames.js'

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

const SkillTag = memo(({ tag, onMouseEnter, onMouseLeave, className }) => (
    <button
        type="button"
        className={cn(
            'px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-150 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none',
            className,
        )}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        {tag}
    </button>
))
SkillTag.displayName = 'SkillTag'

const SkillSection = memo(({ section, hoveredTag, onTagHover, onTagLeave }) => {
    const { icon, title, tags } = section

    const tagElements = useMemo(
        () =>
            tags.map((tag, i) => {
                const tagId = `${title}-${i}`
                const isHovered = hoveredTag === tagId
                return (
                    <SkillTag
                        className={
                            isHovered ? 'bg-neutral-200 dark:bg-neutral-700' : 'bg-neutral-100 dark:bg-neutral-800'
                        }
                        key={tag}
                        onMouseEnter={() => onTagHover(tagId)}
                        onMouseLeave={onTagLeave}
                        tag={tag}
                    />
                )
            }),
        [tags, title, hoveredTag, onTagHover, onTagLeave],
    )

    return (
        <motion.div
            className="rounded-2xl bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 shadow p-6 flex flex-col"
            variants={itemVariants}
        >
            <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 shadow-sm">
                    {icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">{tagElements}</div>
        </motion.div>
    )
})
SkillSection.displayName = 'SkillSection'

const SKILLS_SECTIONS = [
    {
        icon: <Code className="w-6 h-6" />,
        tags: ['HTML/CSS', 'TypeScript', 'Java', 'PHP'],
        title: 'Programming Languages',
    },
    {
        icon: <Layers className="w-6 h-6" />,
        tags: ['React', 'Next', 'Tailwind CSS', 'Express'],
        title: 'Frameworks & Libraries',
    },
    {
        icon: <Terminal className="w-6 h-6" />,
        tags: ['Git', 'Github', 'Gitlab', 'JetBrains', 'VS Code'],
        title: 'Tools & Platforms',
    },
    {
        icon: <Database className="w-6 h-6" />,
        tags: ['MySQL', 'PostgreSQL', 'Supabase', 'Prisma'],
        title: 'Databases & ORM',
    },
]

const SkillsComponent = memo(function Skills() {
    const [hoveredTag, setHoveredTag] = useState(null)
    const handleTagHover = useCallback(tagId => setHoveredTag(tagId), [])
    const handleTagLeave = useCallback(() => setHoveredTag(null), [])

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
                        <Settings2 className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm" />
                        Skills & Interests
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                        Here you'll find a snapshot of my technical toolkit and passions. I believe in learning by
                        doing, and my skills reflect a blend of academic depth and hands-on project work.
                    </p>
                </motion.div>
                <motion.div
                    className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                >
                    {SKILLS_SECTIONS.map(section => (
                        <SkillSection
                            hoveredTag={hoveredTag}
                            key={section.title}
                            onTagHover={handleTagHover}
                            onTagLeave={handleTagLeave}
                            section={section}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
})
SkillsComponent.displayName = 'Skills'

export default SkillsComponent
