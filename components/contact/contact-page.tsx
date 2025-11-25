'use client'

import { useState } from 'react'
import { ContactForm, FocusField } from './contact-form'
import { ContactVoidScene } from './contact-void-scene'

export function ContactPage() {
    const [focusField, setFocusField] = useState<FocusField>(null)
    const [triggerFlash, setTriggerFlash] = useState(false)

    const handleSuccess = () => {
        setTriggerFlash(true)
        // Reset flash trigger after animation
        setTimeout(() => setTriggerFlash(false), 2500)
    }

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* 3D Background */}
            <ContactVoidScene focusField={focusField} triggerFlash={triggerFlash} />

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
                
                {/* Text / Info */}
                <div className="flex-1 text-center md:text-left pointer-events-none mix-blend-difference">
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
                        GET IN<br />
                        <span className="text-white/50">TOUCH</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-md mx-auto md:mx-0 font-mono">
                        // INITIATE_COMMUNICATION_PROTOCOL
                    </p>
                </div>

                {/* Form Container */}
                <div className="flex-1 w-full max-w-md">
                    <div className="p-8 md:p-10">
                        <ContactForm 
                            onFocusChange={setFocusField} 
                            onSuccess={handleSuccess}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
