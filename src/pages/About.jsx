import { motion } from 'framer-motion'
import { FileText, Github, GraduationCap, Linkedin, Mail } from 'lucide-react'
import { memo, useMemo } from 'react'

const SocialLink = memo(({ href, icon, title, className }) => (
    <a className={className} href={href} rel="noopener noreferrer" target="_blank" title={title}>
        {icon}
    </a>
))
SocialLink.displayName = 'SocialLink'

const Tag = memo(({ tag }) => (
    <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all">
        {tag}
    </span>
))
Tag.displayName = 'Tag'

const SOCIAL_LINKS = [
    {
        href: 'https://github.com/henchoznoe',
        icon: <Github className="w-5 h-5" />,
        title: 'GitHub',
    },
    {
        href: 'https://www.linkedin.com/in/henchoznoe/',
        icon: <Linkedin className="w-5 h-5" />,
        title: 'LinkedIn',
    },
    {
        href: 'mailto:henchoznoe@gmail.com',
        icon: <Mail className="w-5 h-5" />,
        title: 'Email',
    },
]

const TAGS = ['Student', 'Web Development', 'Software Engineering', 'Sports']

const RESUME_URL = 'https://google.com'

export default memo(function About() {
    const socialLinksElements = useMemo(
        () =>
            SOCIAL_LINKS.map(({ href, icon, title }) => (
                <SocialLink
                    className="w-11 h-11 flex items-center justify-center rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 transition-all"
                    href={href}
                    icon={icon}
                    key={title}
                    title={title}
                />
            )),
        [],
    )

    const tagElements = useMemo(() => TAGS.map(tag => <Tag key={tag} tag={tag} />), [])

    return (
        <motion.div
            animate={{ opacity: 1 }}
            className="w-full min-h-[80vh] flex items-center justify-center"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl px-4 py-12">
                <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    aria-label="Profile photo of Noé Henchoz"
                    className="flex-shrink-0 w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white dark:border-neutral-900 shadow-md bg-neutral-200 dark:bg-neutral-800"
                    initial={{ opacity: 0, x: -40 }}
                    tabIndex={0}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        alt="Noé Henchoz"
                        className="object-cover w-full h-full"
                        decoding="async"
                        loading="lazy"
                        src="/assets/logos/noe-logo.png"
                        style={{ aspectRatio: '1/1' }}
                    />
                </motion.div>

                <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    className="flex-1 flex flex-col items-center md:items-start"
                    initial={{ opacity: 0, x: 40 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-200/50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 mb-4">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wide">About Me</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-3 text-foreground text-center md:text-left">
                        Hi, I'm{' '}
                        <span className="bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-600 dark:from-white dark:via-neutral-300 dark:to-neutral-400 bg-clip-text text-transparent">
                            Noé Henchoz
                        </span>
                    </h1>

                    <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground text-sm mb-2">
                        <GraduationCap className="w-4 h-4" />
                        <span>HEIA-FR, Switzerland</span>
                    </div>

                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-4 text-center md:text-left">
                        I'm a software engineering student from Switzerland, currently studying at HEIA-FR. Passionate
                        about coding, I enjoy building impactful projects and exploring new technologies. Outside of
                        tech, I'm into fitness and constantly striving to push my limits.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">{tagElements}</div>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        {socialLinksElements}
                        <a
                            className="inline-flex items-center gap-2 px-4 h-11 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 transition-all"
                            href={RESUME_URL}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FileText className="w-4 h-4" />
                            Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
})
