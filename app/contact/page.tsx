'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles } from 'lucide-react'
import emailjs from '@emailjs/browser'

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_10wndw9'
const EMAILJS_TEMPLATE_ID = 'template_jrr9m4t'
const EMAILJS_PUBLIC_KEY = 'W6_f9MJRPuvnqLH3x'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError('')

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.from_name,
                    from_email: formData.from_email,
                    message_html: formData.message,
                },
                EMAILJS_PUBLIC_KEY
            )
            setIsSuccess(true)
            setFormData({ from_name: '', from_email: '', message: '' })
            setTimeout(() => setIsSuccess(false), 5000)
        } catch (err) {
            setError('Failed to send message. Please try again or email us directly.')
            console.error('EmailJS error:', err)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-display text-foreground mb-4">Contact Us</h1>
                    <p className="text-foreground/60 max-w-2xl mx-auto">
                        For inquiries about our collections, press requests, or personal shopping appointments,
                        our concierge team is here to assist you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-xl font-display text-foreground mb-6">Concierge Service</h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-foreground/70">
                                    <Mail className="w-5 h-5 text-luxury-gold" />
                                    <span>concierge@alysee.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-foreground/70">
                                    <Phone className="w-5 h-5 text-luxury-gold" />
                                    <span>+254 746 532 087</span>
                                </div>
                                <div className="flex items-center gap-3 text-foreground/70">
                                    <MapPin className="w-5 h-5 text-luxury-gold" />
                                    <span>Nairobi, Kenya</span>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-border pt-6">
                            <h3 className="text-lg font-medium text-foreground mb-3">Concierge Hours</h3>
                            <p className="text-foreground/60 text-sm">
                                Monday - Friday: 9am - 6pm EAT<br />
                                Saturday: 10am - 4pm EAT<br />
                                Sunday: Closed
                            </p>
                            <p className="text-foreground/60 text-sm mt-4 italic">
                                Our team responds to all inquiries within 24 hours.
                            </p>
                        </div>

                        <div className="border-t border-border pt-6">
                            <h3 className="text-lg font-medium text-foreground mb-3">Press & Collaborations</h3>
                            <p className="text-foreground/60 text-sm">
                                For press inquiries, please contact:<br />
                                <span className="text-luxury-gold">press@alysee.com</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-foreground/80">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    name="from_name"
                                    required
                                    value={formData.from_name}
                                    onChange={handleChange}
                                    className="w-full bg-background border border-border rounded-none px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors text-foreground"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-foreground/80">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    name="from_email"
                                    required
                                    value={formData.from_email}
                                    onChange={handleChange}
                                    className="w-full bg-background border border-border rounded-none px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors text-foreground"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-foreground/80">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-background border border-border rounded-none px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors text-foreground resize-none"
                                    placeholder="How can we assist you?"
                                />
                            </div>

                            {/* Success Message */}
                            {isSuccess && (
                                <div className="flex items-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-3">
                                    <CheckCircle className="w-4 h-4" />
                                    <span className="text-sm">Message sent successfully! We'll respond within 24 hours.</span>
                                </div>
                            )}

                            {/* Error Message */}
                            {error && (
                                <div className="flex items-center gap-2 text-red-600 bg-red-50 dark:bg-red-900/20 p-3">
                                    <span className="text-sm">{error}</span>
                                </div>
                            )}

                            {/* Elite Submit Button with Premium Hover Effects */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`relative w-full py-4 bg-luxury-gold text-black font-medium overflow-hidden group ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                {/* Animated background overlay */}
                                <span className="absolute inset-0 bg-gradient-to-r from-luxury-gold via-amber-400 to-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />

                                {/* Shimmer effect on hover */}
                                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent -z-0" />

                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Sparkles className="w-4 h-4" />
                                            Send Message
                                            <Sparkles className="w-4 h-4" />
                                        </>
                                    )}
                                </span>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}