'use client'

import { motion } from 'framer-motion'
import { ProductGrid } from '@/components/product/product-grid'
import { Crown, Sparkles, Diamond, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Elite Luxury */}
      <div className="relative h-screen overflow-hidden bg-background">
        {/* Animated background orbs - Hydration safe */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-luxury-gold/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center px-6">
            {/* Brand + Season - Small and elegant */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <Crown className="w-4 h-4 text-luxury-gold" />
              <span className="text-luxury-gold text-xs tracking-widest-ultra">ÃLYSÉE — HAUTE COUTURE S/S 2026</span>
              <Crown className="w-4 h-4 text-luxury-gold" />
            </motion.div>

            {/* Main Hero Title - L'ÉLÉGANCE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-9xl font-display tracking-widest-ultra mb-6 text-foreground"
            >
              L'ÉLÉGANCE
            </motion.h1>

            {/* Gold Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-24 h-px bg-luxury-gold mx-auto mb-6"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-12"
            >
              Discover the new collection where timeless craftsmanship meets contemporary vision
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/collection">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-luxury-gold text-black font-bold tracking-wider overflow-hidden flex items-center gap-2"
                >
                  <span className="relative z-10">DISCOVER THE COLLECTION</span>
                  <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold via-amber-400 to-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              </Link>

              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border border-luxury-gold text-foreground font-bold tracking-wider hover:bg-luxury-gold/10 transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  OUR STORY
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-foreground/40 tracking-wider">SCROLL</span>
            <div className="w-px h-16 bg-luxury-gold/50 animate-bounce" />
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Diamond className="w-10 h-10 text-luxury-gold mx-auto mb-4" />
              <h3 className="text-lg font-display text-foreground mb-2">Exceptional Quality</h3>
              <p className="text-foreground/50 text-sm">Finest materials from around the world</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <Sparkles className="w-10 h-10 text-luxury-gold mx-auto mb-4" />
              <h3 className="text-lg font-display text-foreground mb-2">Timeless Design</h3>
              <p className="text-foreground/50 text-sm">Pieces that transcend seasons</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <Crown className="w-10 h-10 text-luxury-gold mx-auto mb-4" />
              <h3 className="text-lg font-display text-foreground mb-2">Exclusive Service</h3>
              <p className="text-foreground/50 text-sm">White-glove concierge experience</p>
            </motion.div>
          </div>
        </div>
      </div>

      <ProductGrid />
    </div>
  )
}