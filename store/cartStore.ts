import { create } from 'zustand'
import { persist } from 'zustand/middleware'

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
    clearCart: () => void  // ← Make sure this is here
    getTotalItems: () => number
    getTotalPrice: () => string
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,

            addItem: (item) => {
                const existingItem = get().items.find((i) => i.id === item.id)
                if (existingItem) {
                    set({
                        items: get().items.map((i) =>
                            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                        ),
                    })
                } else {
                    set({ items: [...get().items, { ...item, quantity: 1 }] })
                }
            },

            removeItem: (id) => {
                set({ items: get().items.filter((i) => i.id !== id) })
            },

            updateQuantity: (id, quantity) => {
                if (quantity <= 0) {
                    get().removeItem(id)
                } else {
                    set({
                        items: get().items.map((i) =>
                            i.id === id ? { ...i, quantity } : i
                        ),
                    })
                }
            },

            toggleCart: () => set({ isOpen: !get().isOpen }),

            closeCart: () => set({ isOpen: false }),

            clearCart: () => set({ items: [] }),  // ← Add this function

            getTotalItems: () => {
                return get().items.reduce((total, item) => total + item.quantity, 0)
            },

            getTotalPrice: () => {
                const total = get().items.reduce((total, item) => {
                    const price = parseFloat(item.price.replace('€', '').replace(',', ''))
                    return total + price * item.quantity
                }, 0)
                return `€${total.toLocaleString()}`
            },
        }),
        {
            name: 'cart-storage',
        }
    )
)