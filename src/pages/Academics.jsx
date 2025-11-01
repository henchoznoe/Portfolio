import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
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

const EducationCard = memo(({ education }) => {
    const { logo, alt, title, link, program, year } = education

    return (
        <motion.div
            className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6 flex items-center gap-6"
            variants={itemVariants}
        >
            <div className="w-16 h-16 flex-shrink-0 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center shadow rounded-xl p-1 overflow-hidden">
                <img
                    alt={alt}
                    className="w-full h-full object-contain rounded-lg"
                    decoding="async"
                    height={64}
                    loading="lazy"
                    src={logo}
                    style={{ aspectRatio: '1/1' }}
                    width={64}
                />
            </div>
            <div className="flex flex-col text-left gap-1">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">{title}</h3>
                <a
                    className="text-sm text-primary hover:underline hover:text-foreground dark:hover:text-primary-foreground/70 font-medium transition-colors duration-200"
                    href={link}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {program}
                </a>
                <div className="text-sm text-muted-foreground mt-2 space-y-1">
                    <p>
                        <span className="font-medium text-foreground/80">Year:</span> {year}
                    </p>
                </div>
            </div>
        </motion.div>
    )
})
EducationCard.displayName = 'EducationCard'

const ACADEMICS_DATA = [
    {
        alt: 'HEIA Logo',
        link: 'https://heia-fr.ch',
        logo: '/assets/logos/heia-logo.jpeg',
        program: 'Bachelor of Science - BS / Software Engineering',
        score: '',
        scoreLabel: '',
        title: 'School of Engineering and Architecture of Fribourg (HEIA-FR)',
        year: '2024 – now',
    },
    {
        alt: 'EMF Logo',
        link: 'https://www.emf.ch/',
        logo: '/assets/logos/emf-logo.jpg',
        program: 'Swiss Federal Diploma in IT with Technical Professional Maturity',
        score: '',
        scoreLabel: '',
        title: 'EMF - Ecole des métiers de Fribourg, Switzerland',
        year: '2020 - 2024',
    },
]

const AcademicsComponent = memo(function Academics() {
    const educationCards = useMemo(
        () =>
            ACADEMICS_DATA.map((education, index) => (
                <EducationCard education={education} key={`${education.title}-${index}`} />
            )),
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
                        <GraduationCap className="w-8 h-8 sm:w-11 sm:h-11 text-primary drop-shadow-sm" />
                        Education
                    </h2>
                    <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10" variants={itemVariants}>
                        My academic journey has been a blend of rigorous learning and practical application, spanning
                        general academics and engineering. Here are the institutions and milestones that have shaped my
                        foundation.
                    </motion.p>
                </motion.div>
                <motion.div className="w-full max-w-2xl flex flex-col gap-8" variants={containerVariants}>
                    {educationCards}
                </motion.div>
            </motion.div>
        </div>
    )
})
AcademicsComponent.displayName = 'Academics'

export default AcademicsComponent
