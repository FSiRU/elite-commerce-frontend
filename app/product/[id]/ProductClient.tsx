'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Minus, Plus, ChevronRight } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import { Product } from '@/lib/products'

export default function ProductClient({
    product,
    relatedProducts
}: {
    product: Product | undefined
    relatedProducts: Product[]
}) {
    const [mounted, setMounted] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [selectedSize, setSelectedSize] = useState('')
    const [selectedColor, setSelectedColor] = useState('')
    const addToCart = useCartStore((state) => state.addItem)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    if (!product) {
        return (
            <div className="min-h-screen bg-background pt-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-display text-foreground mb-4">Product Not Found</h1>
                    <p className="text-foreground/70 mb-8">The product you're looking for doesn't exist.</p>
                    <Link href="/">
                        <button className="px-8 py-3 bg-luxury-gold text-black font-bold tracking-wider">
                            BACK TO SHOP
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        })
    }

    return (
        <div className="min-h-screen bg-background pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-foreground/60 mb-8">
                    <Link href="/" className="hover:text-luxury-gold transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground">{product.name.split(' ').slice(0, 3).join(' ')}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product Image */}
                    <div className="relative">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-[500px] object-cover rounded-lg"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-medium mb-3 text-foreground">
                                {product.name}
                            </h1>
                            <p className="text-2xl font-semibold text-luxury-gold mb-3">{product.price}</p>
                            <p className="text-green-600 text-sm mb-4">{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
                            <p className="text-foreground/70 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Size Selection */}
                        <div>
                            <h3 className="text-sm font-medium mb-3 text-foreground/80">Select Size</h3>
                            <div className="flex gap-3 flex-wrap">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-6 py-2 border transition-colors ${selectedSize === size
                                                ? 'border-luxury-gold bg-luxury-gold text-black'
                                                : 'border-border hover:border-luxury-gold text-foreground'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Color Selection */}
                        <div>
                            <h3 className="text-sm font-medium mb-3 text-foreground/80">Select Color</h3>
                            <div className="flex gap-3 flex-wrap">
                                {product.colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`px-6 py-2 border transition-colors ${selectedColor === color
                                                ? 'border-luxury-gold bg-luxury-gold text-black'
                                                : 'border-border hover:border-luxury-gold text-foreground'
                                            }`}
                                    >
                                        {color}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div>
                            <h3 className="text-sm font-medium mb-3 text-foreground/80">Quantity</h3>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 border border-border hover:border-luxury-gold transition-colors flex items-center justify-center text-foreground"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="text-xl w-12 text-center text-foreground">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-10 border border-border hover:border-luxury-gold transition-colors flex items-center justify-center text-foreground"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            onClick={handleAddToCart}
                            className="w-full py-4 bg-luxury-gold text-black font-medium hover:bg-luxury-gold/90 transition-colors"
                        >
                            Add to Cart
                        </button>

                        {/* Additional Info */}
                        <div className="pt-6 border-t border-border">
                            <p className="text-sm text-foreground/50">{product.details}</p>
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                {relatedProducts.length > 0 && (
                    <div className="mt-20 pt-10 border-t border-border">
                        <h2 className="text-xl font-medium mb-8 text-foreground">Related Products</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((relatedProduct) => (
                                <Link href={`/product/${relatedProduct.id}`} key={relatedProduct.id}>
                                    <div className="group cursor-pointer">
                                        <div className="overflow-hidden mb-3 rounded-lg">
                                            <img
                                                src={relatedProduct.image}
                                                alt={relatedProduct.name}
                                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <h3 className="text-sm font-medium text-foreground mb-1 group-hover:text-luxury-gold transition-colors">
                                            {relatedProduct.name}
                                        </h3>
                                        <p className="text-foreground/60">{relatedProduct.price}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}