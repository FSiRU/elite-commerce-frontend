import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface CartItem {
    id: number
    name: string
    price: string
    image: string
    quantity: number
}

interface CartStore {
    items: CartItem[]
    isOpen: boolean
    addItem: (item: CartItem) => void
    removeItem: (id: number) => void
    updateQuantity: (id: number, quantity: number) => void
    toggleCart: () => void
    closeCart: () => void
    clearCart: () => void
    getTotalItems: () => number
    getTotalPrice: () => string
    hydrate: () => void // Force rehydrate from storage
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,

            addItem: (item) => {
                const existingItem = get().items.find((i) => i.id === item.id)
                let newItems
                if (existingItem) {
                    newItems = get().items.map((i) =>
                        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                    )
                    set({ items: newItems })
                } else {
                    newItems = [...get().items, { ...item, quantity: 1 }]
                    set({ items: newItems })
                }
                // Save to localStorage immediately for extra safety
                if (typeof window !== 'undefined') {
                    localStorage.setItem('cart-storage', JSON.stringify({ state: { items: newItems } }))
                }
            },

            removeItem: (id) => {
                const newItems = get().items.filter((i) => i.id !== id)
                set({ items: newItems })
                if (typeof window !== 'undefined') {
                    localStorage.setItem('cart-storage', JSON.stringify({ state: { items: newItems } }))
                }
            },

            updateQuantity: (id, quantity) => {
                if (quantity <= 0) {
                    get().removeItem(id)
                } else {
                    const newItems = get().items.map((i) =>
                        i.id === id ? { ...i, quantity } : i
                    )
                    set({ items: newItems })
                    if (typeof window !== 'undefined') {
                        localStorage.setItem('cart-storage', JSON.stringify({ state: { items: newItems } }))
                    }
                }
            },

            toggleCart: () => set({ isOpen: !get().isOpen }),

            closeCart: () => set({ isOpen: false }),

            clearCart: () => {
                set({ items: [] })
                if (typeof window !== 'undefined') {
                    localStorage.removeItem('cart-storage')
                }
            },

            getTotalItems: () => {
                return get().items.reduce((total, item) => total + item.quantity, 0)
            },

            getTotalPrice: () => {
                const total = get().items.reduce((total, item) => {
                    // Remove currency symbol (KSh, €, $, etc.) and commas, then parse to number
                    const priceValue = item.price.replace(/[^0-9.,-]/g, '').replace(/,/g, '')
                    const price = parseFloat(priceValue)
                    return total + price * item.quantity
                }, 0)
                return `KSh ${total.toLocaleString()}`
            },

            hydrate: () => {
                if (typeof window !== 'undefined') {
                    const stored = localStorage.getItem('cart-storage')
                    if (stored) {
                        try {
                            const parsed = JSON.parse(stored)
                            if (parsed.state && parsed.state.items) {
                                set({ items: parsed.state.items })
                            }
                        } catch (e) {
                            console.error('Failed to hydrate cart:', e)
                        }
                    }
                }
            },
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({ items: state.items }), // Only persist items, not isOpen
        }
    )
)