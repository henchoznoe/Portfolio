'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CheckCircle2, Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export type FocusField = 'name' | 'email' | 'message' | null

type ContactFormProps = {
    onFocusChange: (field: FocusField) => void
    onSuccess: () => void
}

type FormData = {
    name: string
    email: string
    message: string
}

export function ContactForm({ onFocusChange, onSuccess }: ContactFormProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setIsSubmitted(true)
        onSuccess()
    }

    if (isSubmitted) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center p-8 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Message Received</h3>
                <p className="text-white/40">I will be in touch shortly.</p>
                <Button 
                    variant="ghost" 
                    className="mt-8 text-white/60 hover:text-white hover:bg-white/10"
                    onClick={() => setIsSubmitted(false)}
                >
                    Send Another
                </Button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12 w-full max-w-md">
            <div className="space-y-2 group">
                <label htmlFor="name" className="text-xs font-medium text-white/40 uppercase tracking-[0.2em] transition-colors group-focus-within:text-white">
                    Name
                </label>
                <input
                    {...register('name', { required: true })}
                    onFocus={() => onFocusChange('name')}
                    onBlur={() => onFocusChange(null)}
                    className={cn(
                        "w-full bg-transparent border-b border-white/10 py-4 text-xl text-white placeholder:text-white/10 focus:outline-none focus:border-white transition-all",
                        errors.name && "border-red-500/50 focus:border-red-500"
                    )}
                    placeholder="Enter your name"
                    autoComplete="off"
                />
            </div>

            <div className="space-y-2 group">
                <label htmlFor="email" className="text-xs font-medium text-white/40 uppercase tracking-[0.2em] transition-colors group-focus-within:text-white">
                    Email
                </label>
                <input
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    onFocus={() => onFocusChange('email')}
                    onBlur={() => onFocusChange(null)}
                    className={cn(
                        "w-full bg-transparent border-b border-white/10 py-4 text-xl text-white placeholder:text-white/10 focus:outline-none focus:border-white transition-all",
                        errors.email && "border-red-500/50 focus:border-red-500"
                    )}
                    placeholder="Enter your email"
                    autoComplete="off"
                />
            </div>

            <div className="space-y-2 group">
                <label htmlFor="message" className="text-xs font-medium text-white/40 uppercase tracking-[0.2em] transition-colors group-focus-within:text-white">
                    Message
                </label>
                <textarea
                    {...register('message', { required: true })}
                    onFocus={() => onFocusChange('message')}
                    onBlur={() => onFocusChange(null)}
                    rows={1}
                    className={cn(
                        "w-full bg-transparent border-b border-white/10 py-4 text-xl text-white placeholder:text-white/10 focus:outline-none focus:border-white transition-all resize-none min-h-[60px]",
                        errors.message && "border-red-500/50 focus:border-red-500"
                    )}
                    placeholder="What's on your mind?"
                />
            </div>

            <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-white text-black hover:bg-white/90 transition-all h-14 text-lg font-medium rounded-none"
            >
                {isSubmitting ? (
                    <span className="animate-pulse">Processing...</span>
                ) : (
                    <span className="flex items-center gap-2">
                        Send Message <Send size={18} />
                    </span>
                )}
            </Button>
        </form>
    )
}
