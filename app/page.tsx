'use client'

import { motion } from 'framer-motion'
import { ProductGrid } from '@/components/product/product-grid'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/40 via-transparent to-luxury-black z-10" />
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070"
            alt="Luxury fashion"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-luxury-gold text-sm tracking-widest-ultra mb-4 block">
                HAUTE COUTURE S/S 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-9xl font-display tracking-widest-ultra mb-8"
            >
              L'ÉLÉGANCE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-luxury-ivory/80 max-w-2xl mx-auto mb-12"
            >
              Discover the new collection where timeless craftsmanship meets contemporary vision
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-4 bg-transparent border-2 border-luxury-gold overflow-hidden"
            >
              <span className="relative z-10 text-luxury-gold tracking-wider group-hover:text-luxury-black transition-colors duration-300">
                DISCOVER THE COLLECTION
              </span>
              <div className="absolute inset-0 bg-luxury-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-px h-16 bg-luxury-gold/50 animate-bounce" />
        </motion.div>
      </div>

      <ProductGrid />
    </div>
  )
}