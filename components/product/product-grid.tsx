'use client'
import { useCartStore } from '@/store/cartStore'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { products } from '@/lib/products'

export function ProductGrid() {
    const [hoveredId, setHoveredId] = useState<number | null>(null)
    const [mounted, setMounted] = useState(false)
    const [addedToCart, setAddedToCart] = useState<number | null>(null)
    const addToCart = useCartStore((state) => state.addItem)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const handleAddToCart = (product: typeof products[0], e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        })
        setAddedToCart(product.id)
        setTimeout(() => setAddedToCart(null), 2000)
    }

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
                        <Link href={`/product/${product.id}`} key={product.id} className="block group">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.3 }
                                }}
                                onMouseEnter={() => setHoveredId(product.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className="cursor-pointer"
                            >
                                <div className="relative overflow-hidden mb-4 rounded-lg shadow-2xl transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-luxury-gold/20">
                                    {/* Product Image */}
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-[500px] object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* ADD TO CART Button */}
                                    <button
                                        onClick={(e) => handleAddToCart(product, e)}
                                        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-8 py-3 bg-white text-black text-sm font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:scale-105 hover:bg-luxury-gold hover:text-black rounded-none shadow-lg z-10"
                                    >
                                        {addedToCart === product.id ? '✓ ADDED' : 'ADD TO CART'}
                                    </button>
                                </div>

                                {/* Product Info */}
                                <div className="text-center transform transition-all duration-500 group-hover:translate-y-[-5px]">
                                    <p className="text-xs text-luxury-gold tracking-wider mb-2">{product.category}</p>
                                    <h3 className="text-lg tracking-wide mb-2 group-hover:text-luxury-gold transition-colors duration-300">{product.name}</h3>
                                    <p className="text-luxury-ivory/60">{product.price}</p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}