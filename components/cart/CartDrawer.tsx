'use client'

import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import Link from 'next/link'

export function CartDrawer() {
    const { items, isOpen, closeCart, updateQuantity, removeItem, getTotalPrice, getTotalItems } = useCartStore()

    if (!isOpen) return null

    return (
        <>
            {/* Backdrop - dims the page behind */}
            <div
                onClick={closeCart}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    zIndex: 9998,
                }}
            />

            {/* Cart Drawer */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: '450px',
                    maxWidth: '90vw',
                    backgroundColor: '#FFFFFF',
                    zIndex: 9999,
                    overflowY: 'auto',
                    boxShadow: '-2px 0 10px rgba(0,0,0,0.1)',
                }}
            >
                {/* Header */}
                <div
                    style={{
                        padding: '24px',
                        borderBottom: '1px solid #e5e5e5',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#000' }}>Your Cart</h2>
                    <button
                        onClick={closeCart}
                        style={{
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            background: 'transparent',
                            border: 'none',
                        }}
                    >
                        <X size={20} color="#666" />
                    </button>
                </div>

                {/* Cart Items */}
                <div style={{ padding: '24px', minHeight: 'calc(100vh - 200px)' }}>
                    {items.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '40px 0' }}>
                            <p style={{ color: '#666' }}>Your cart is empty</p>
                            <button
                                onClick={closeCart}
                                style={{
                                    marginTop: '16px',
                                    padding: '10px 24px',
                                    background: '#000',
                                    color: '#fff',
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div
                                key={item.id}
                                style={{
                                    display: 'flex',
                                    gap: '16px',
                                    marginBottom: '24px',
                                    paddingBottom: '24px',
                                    borderBottom: '1px solid #f0f0f0',
                                }}
                            >
                                {/* Product Image */}
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{
                                        width: '80px',
                                        height: '100px',
                                        objectFit: 'cover',
                                    }}
                                />

                                {/* Product Details */}
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '14px', fontWeight: '500', marginBottom: '4px', color: '#000' }}>
                                        {item.name}
                                    </h3>
                                    <p style={{ fontSize: '16px', fontWeight: '600', color: '#000', marginBottom: '8px' }}>
                                        {item.price}
                                    </p>

                                    {/* Quantity Controls */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            style={{
                                                width: '28px',
                                                height: '28px',
                                                border: '1px solid #ddd',
                                                background: '#fff',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Minus size={12} />
                                        </button>
                                        <span style={{ fontSize: '14px', minWidth: '20px', textAlign: 'center' }}>
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            style={{
                                                width: '28px',
                                                height: '28px',
                                                border: '1px solid #ddd',
                                                background: '#fff',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Plus size={12} />
                                        </button>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            style={{
                                                marginLeft: 'auto',
                                                background: 'transparent',
                                                border: 'none',
                                                cursor: 'pointer',
                                                color: '#999',
                                            }}
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer - Fixed at bottom */}
                {items.length > 0 && (
                    <div
                        style={{
                            position: 'sticky',
                            bottom: 0,
                            width: '100%',
                            padding: '20px 24px',
                            borderTop: '1px solid #e5e5e5',
                            backgroundColor: '#FFFFFF',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '16px',
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#000',
                            }}
                        >
                            <span>Subtotal</span>
                            <span>{getTotalPrice()}</span>
                        </div>
                        <Link href="/checkout">
                            <button
                                onClick={closeCart}
                                style={{
                                    width: '100%',
                                    padding: '14px',
                                    backgroundColor: '#000',
                                    color: '#fff',
                                    border: 'none',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                }}
                            >
                                Checkout Ahead
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}