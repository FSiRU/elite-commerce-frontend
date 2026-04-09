'use client'

import { motion } from 'framer-motion'
import { ProductGrid } from '@/components/product/product-grid'
import { ChevronRight, Diamond, Sparkles, Crown } from 'lucide-react'

export default function CollectionPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section - Elite Collection */}
            <div className="relative pt-32 pb-20 px-6 overflow-hidden">
                {/* Animated background particles */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-luxury-gold/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl animate-pulse delay-1000" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-3xl animate-pulse delay-700" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-sm text-foreground/50 mb-8"
                    >
                        <span className="hover:text-luxury-gold transition-colors cursor-pointer">Home</span>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-luxury-gold">Collection</span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Crown className="w-6 h-6 text-luxury-gold" />
                            <span className="text-luxury-gold text-sm tracking-widest-ultra">HAUTE COUTURE</span>
                            <Crown className="w-6 h-6 text-luxury-gold" />
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-foreground mb-6 tracking-wider">
                            The Collection
                        </h1>
                        <div className="w-24 h-px bg-luxury-gold mx-auto mb-6" />
                        <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
                            Each piece is meticulously crafted by master artisans using only the finest materials
                        </p>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
                    >
                        <div className="text-center p-6 border border-luxury-gold/20 bg-luxury-gold/5">
                            <Diamond className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
                            <h3 className="text-2xl font-display text-foreground mb-1">Exceptional Quality</h3>
                            <p className="text-foreground/50 text-sm">Finest materials from around the world</p>
                        </div>
                        <div className="text-center p-6 border border-luxury-gold/20 bg-luxury-gold/5">
                            <Sparkles className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
                            <h3 className="text-2xl font-display text-foreground mb-1">Timeless Design</h3>
                            <p className="text-foreground/50 text-sm">Pieces that transcend seasons</p>
                        </div>
                        <div className="text-center p-6 border border-luxury-gold/20 bg-luxury-gold/5">
                            <Crown className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
                            <h3 className="text-2xl font-display text-foreground mb-1">Exclusive Service</h3>
                            <p className="text-foreground/50 text-sm">White-glove concierge experience</p>
                        </div>
                    </motion.div>

                    {/* Divider with gold line */}
                    <div className="relative mb-16">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-luxury-gold/20"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-background px-4 text-luxury-gold text-sm tracking-widest">EDITOR'S PICK</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <ProductGrid />

            {/* Footer Note */}
            <div className="text-center py-16 px-6 border-t border-border">
                <p className="text-foreground/40 text-sm tracking-wider">
                    © 2026 ÃLYSÉE — HAUTE COUTURE S/S 2026
                </p>
            </div>
        </div>
    )
}