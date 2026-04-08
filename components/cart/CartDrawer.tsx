'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'

export function CartDrawer() {
    const { items, isOpen, closeCart, updateQuantity, removeItem, getTotalPrice, getTotalItems } = useCartStore()

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 bg-black/80 z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-luxury-black border-l border-luxury-gold/20 z-50 shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-luxury-gold/20">
                            <div>
                                <h2 className="text-2xl font-display">Shopping Cart</h2>
                                <p className="text-sm text-luxury-ivory/60 mt-1">{getTotalItems()} items</p>
                            </div>
                            <button
                                onClick={closeCart}
                                className="p-2 hover:bg-luxury-white/10 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6" style={{ height: 'calc(100% - 200px)' }}>
                            {items.length === 0 ? (
                                <div className="text-center py-12">
                                    <p className="text-luxury-ivory/60">Your cart is empty</p>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex gap-4"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-24 h-32 object-cover rounded"
                                        />
                                        <div className="flex-1">
                                            <h3 className="text-sm tracking-wide mb-1">{item.name}</h3>
                                            <p className="text-luxury-gold text-sm mb-2">{item.price}</p>
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="p-1 hover:bg-luxury-white/10 rounded transition-colors"
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </button>
                                                <span className="text-sm w-8 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="p-1 hover:bg-luxury-white/10 rounded transition-colors"
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </button>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="p-1 hover:bg-red-500/20 rounded transition-colors ml-auto"
                                                >
                                                    <Trash2 className="w-4 h-4 text-red-400" />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-luxury-gold/20 bg-luxury-black">
                                <div className="flex justify-between mb-4">
                                    <span className="text-lg">Total</span>
                                    <span className="text-2xl font-display text-luxury-gold">{getTotalPrice()}</span>
                                </div>
                                <button className="w-full py-4 bg-luxury-gold text-luxury-black tracking-wider hover:bg-luxury-gold/90 transition-colors">
                                    CHECKOUT
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}