'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useCartStore } from '@/store/cartStore'
import Link from 'next/link'
import { ArrowLeft, CreditCard, Truck, Shield, Lock } from 'lucide-react'

export default function CheckoutPage() {
    const [mounted, setMounted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { items, getTotalPrice, clearCart } = useCartStore()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        country: 'Kenya',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    })

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-luxury-black pt-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-display mb-4">Your Cart is Empty</h1>
                    <p className="text-luxury-ivory/60 mb-8">Add some luxury items to your cart before checking out.</p>
                    <Link href="/">
                        <button className="px-8 py-3 bg-luxury-gold text-luxury-black font-bold tracking-wider hover:scale-105 transition-transform">
                            CONTINUE SHOPPING
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 1500))

        alert('✨ Order placed successfully! Check your email for confirmation. ✨')
        clearCart()
        setIsSubmitting(false)
        window.location.href = '/'
    }

    return (
        <div className="min-h-screen bg-luxury-black pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center gap-2 text-luxury-ivory/60 hover:text-luxury-gold transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Shop
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-display"
                    >
                        Checkout
                    </motion.h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Checkout Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-2"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Shipping Information */}
                            <div className="border border-luxury-gold/20 p-6 md:p-8">
                                <h2 className="text-xl font-display mb-6 flex items-center gap-2">
                                    <Truck className="w-5 h-5 text-luxury-gold" />
                                    Shipping Information
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm tracking-wider mb-2 text-luxury-ivory/80">
                                            FIRST NAME *
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            required
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent border border-luxury-gold/30 px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors text-luxury-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm tracking-wider mb-2 text-luxury-ivory/80">
                                            LAST NAME *
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            required
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent border border-luxury-gold/30 px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors text-luxury-white"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm tracking-wider mb-2 text-luxury-ivory/80">
                                            EMAIL *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent border border-luxury-gold/30 px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors text-luxury-white"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm tracking-wider mb-2 text-luxury-ivory/80">
                                            ADDRESS *
                                        </label>
                                        <input
                                            type="text"
                                            name="address"
                                            required
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent border border-luxury-gold/30 px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors text-luxury-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm tracking-wider mb-2 text-luxury-ivory/80">
                                            CITY *
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            required
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent border border-luxury-gold/30 px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors text-luxury-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm tracking-wider mb-2 text-luxury-ivory/80">
                                            POSTAL CODE *
                                        </label>
                                        <input
                                            type="text"
                                            name="postalCode"
                                            required
                                            value={formData.postalCode}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent border border-luxury-gold/30 px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors text-luxury-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm tracking-wider mb-2 text-luxury-ivory/80">
                                            COUNTRY *
                                        </label>
                                        <select
                                            name="country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent border border-luxury-gold/30 px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors text-luxury-white"
                                        >
                                            <option value="Kenya">Kenya</option>
                                            <option value="Nigeria">Nigeria</option>
                                            <option value="South Africa">South Africa</option>
                                            <option value="United States">United States</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="France">France</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Information */}
                            <div className="border border-luxury-gold/20 p-6 md:p-8">
                                <h2 className="text-xl font-display mb-6 flex items-center gap-2">
                                    <CreditCard className="w-5 h-5 text-luxury-gold" />
                                    Payment Information
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm tracking-wider mb-2 text-luxury-ivory/80">
                                            CARD NUMBER *
                                        </label>
                                        <input
                                            type="text"
                                            name="cardNumber"
                                            required
                                            placeholder="1234 5678 9012 3456"
                                            value={formData.cardNumber}
                                            onChange={handleInputChange}
                                            className="w-full bg-transparent border border-luxury-gold/30 px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors text-luxury-white"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm tracking-wider mb-2 text-luxury-ivory/80">
                                                EXPIRY DATE *
                                            </label>
                                            <input
                                                type="text"
                                                name="expiryDate"
                                                required
                                                placeholder="MM/YY"
                                                value={formData.expiryDate}
                                                onChange={handleInputChange}
                                                className="w-full bg-transparent border border-luxury-gold/30 px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors text-luxury-white"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm tracking-wider mb-2 text-luxury-ivory/80">
                                                CVV *
                                            </label>
                                            <input
                                                type="text"
                                                name="cvv"
                                                required
                                                placeholder="123"
                                                value={formData.cvv}
                                                onChange={handleInputChange}
                                                className="w-full bg-transparent border border-luxury-gold/30 px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors text-luxury-white"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Security Notice */}
                            <div className="flex items-center justify-center gap-2 text-sm text-luxury-ivory/50">
                                <Lock className="w-4 h-4" />
                                <span>Your payment information is encrypted and secure</span>
                                <Shield className="w-4 h-4" />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                className={`w-full py-4 bg-luxury-gold text-luxury-black font-bold tracking-wider text-lg transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-luxury-gold/90'
                                    }`}
                            >
                                {isSubmitting ? 'PROCESSING...' : `PLACE ORDER • ${getTotalPrice()}`}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Order Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-1"
                    >
                        <div className="border border-luxury-gold/20 p-6 md:p-8 sticky top-32">
                            <h2 className="text-xl font-display mb-6">Order Summary</h2>
                            <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-4 pb-4 border-b border-luxury-gold/10">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-20 object-cover"
                                        />
                                        <div className="flex-1">
                                            <h3 className="text-sm tracking-wide mb-1">{item.name}</h3>
                                            <p className="text-luxury-gold text-sm">{item.price}</p>
                                            <p className="text-xs text-luxury-ivory/50 mt-1">Quantity: {item.quantity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-3 pt-4 border-t border-luxury-gold/20">
                                <div className="flex justify-between text-sm">
                                    <span>Subtotal</span>
                                    <span>{getTotalPrice()}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold pt-3 border-t border-luxury-gold/20">
                                    <span>Total</span>
                                    <span className="text-luxury-gold">{getTotalPrice()}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}