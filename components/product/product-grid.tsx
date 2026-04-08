
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const products = [
    {
        id: 1,
        name: 'CASHMERE OVERSIZED BLAZER',
        price: '€2,890',
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1887',
        category: 'READY-TO-WEAR'
    },
    {
        id: 2,
        name: 'SILK MAXI DRESS',
        price: '€3,450',
        image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=1887',
        category: 'EVENING WEAR'
    },
    {
        id: 3,
        name: 'LEATHER BOMBER JACKET',
        price: '€4,200',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1887',
        category: 'OUTERWEAR'
    },
    {
        id: 4,
        name: 'WOOL TROUSERS',
        price: '€1,890',
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1880',
        category: 'READY-TO-WEAR'
    }
]

export function ProductGrid() {
    const [hoveredId, setHoveredId] = useState<number | null>(null)

    return (
        <div className="py-32 px-6 bg-luxury-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-luxury-gold text-sm tracking-widest-ultra">NEW ARRIVALS</span>
                    <h2 className="text-4xl md:text-6xl font-display mt-4 mb-6">The Collection</h2>
                    <p className="text-luxury-ivory/70 max-w-2xl mx-auto">
                        Each piece is meticulously crafted by master artisans using only the finest materials
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            onMouseEnter={() => setHoveredId(product.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden mb-4 rounded-lg shadow-2xl transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-luxury-gold/20">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-[500px] object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-8 py-3 bg-luxury-gold text-luxury-black text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:scale-105">
                                    SHOP NOW
                                </button>
                            </div>
                            <div className="text-center transform transition-all duration-500 group-hover:translate-y-[-5px]">
                                <p className="text-xs text-luxury-gold tracking-wider mb-2">{product.category}</p>
                                <h3 className="text-lg tracking-wide mb-2 group-hover:text-luxury-gold transition-colors duration-300">{product.name}</h3>
                                <p className="text-luxury-ivory/60">{product.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}