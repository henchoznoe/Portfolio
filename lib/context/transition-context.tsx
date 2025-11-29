'use client'

import { createContext, useContext, useState } from 'react'

interface TransitionContextType {
    isTransitioning: boolean
    startTransition: (callback: () => void) => void
}

const TransitionContext = createContext<TransitionContextType>({
    isTransitioning: false,
    startTransition: () => {},
})

export const useTransition = () => useContext(TransitionContext)

export const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [callback, setCallback] = useState<(() => void) | null>(null)

    const startTransition = (cb: () => void) => {
        if (isTransitioning) return
        setCallback(() => cb)
        setIsTransitioning(true)
    }

    const onTransitionMiddle = () => {
        if (callback) {
            callback()
            setCallback(null)
        }
        setIsTransitioning(false)
    }

    const onTransitionEnd = () => {
        setIsTransitioning(false)
    }

    return (
        <TransitionContext.Provider value={{ isTransitioning, startTransition }}>
            {children}
            <TransitionOverlay
                isVisible={isTransitioning}
                onMiddle={onTransitionMiddle}
                onEnd={onTransitionEnd}
            />
        </TransitionContext.Provider>
    )
}

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

const TransitionOverlay = ({
    isVisible,
    onMiddle,
    onEnd
}: {
    isVisible: boolean
    onMiddle: () => void
    onEnd: () => void
}) => {
    useEffect(() => {
        if (isVisible) {
            // After the initial fade-in animation (0.3s), trigger onMiddle
            // A small additional delay (e.g., 100ms) ensures the screen is fully black
            const timer = setTimeout(() => {
                onMiddle()
            }, 200 + 100) // 300ms for animation duration + 100ms buffer

            return () => clearTimeout(timer)
        }
    }, [isVisible, onMiddle])

    return (
        <AnimatePresence mode="wait" onExitComplete={onEnd}>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-black pointer-events-none"
                />
            )}
        </AnimatePresence>
    )
}
