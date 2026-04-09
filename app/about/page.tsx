'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-display text-foreground mb-6">Our Story</h1>
                    <div className="space-y-6 text-foreground/70 leading-relaxed">
                        <p>
                            At <span className="text-foreground font-medium">ÃLYSÉE</span>, we believe luxury speaks in whispers, not shouts.
                            Rooted in Parisian elegance and African soul, we are a bridge between two worlds — where timeless
                            craftsmanship meets contemporary vision.
                        </p>
                        <p>
                            We reject the noise of fast fashion, the emptiness of fleeting trends, and the performance of virtue
                            without substance. Our collections are not statements for the crowd — they are expressions of the individual.
                        </p>
                        <p>
                            <span className="text-foreground font-medium">"Haute Couture S/S 2026"</span> is not just a tagline. It's a promise.
                            Every stitch, every fabric, every silhouette is chosen with intention. We design for those who know that
                            true elegance is quiet, confident, and never desperate for attention.
                        </p>
                    </div>
                </motion.div>

                {/* Why Choose Us Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16"
                >
                    <h2 className="text-2xl md:text-3xl font-display text-foreground mb-8">Why Choose Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-medium text-foreground mb-2">Timeless Design</h3>
                            <p className="text-foreground/70">
                                We don't chase seasons. We create pieces that transcend time — heirlooms in the making.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-foreground mb-2">Uncompromising Quality</h3>
                            <p className="text-foreground/70">
                                From Italian cashmere to French silk, every material is sourced from the world's finest ateliers.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-foreground mb-2">Minimalist Luxury</h3>
                            <p className="text-foreground/70">
                                Clean lines. Neutral palettes. Bold simplicity. Our pieces speak without shouting.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-foreground mb-2">Personal Service</h3>
                            <p className="text-foreground/70">
                                Every order is handled with white-glove care. From packaging to delivery, we treat you like the discerning individual you are.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Our Promise Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="border-t border-border pt-12"
                >
                    <h2 className="text-2xl md:text-3xl font-display text-foreground mb-6">Our Promise</h2>
                    <div className="space-y-4 text-foreground/70 leading-relaxed">
                        <p>
                            We make no apologies for excellence. We do not follow — we create. We do not perform — we exist.
                        </p>
                        <p>
                            <span className="text-foreground font-medium">ÃLYSÉE</span> is for those who appreciate the difference between being noticed and being remembered.
                        </p>
                        <p className="text-foreground font-medium italic pt-4">
                            Less noise. More meaning. Eternal elegance.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}