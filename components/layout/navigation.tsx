'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import { OrbitSearch } from '@/components/search/OrbitSearch'

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { toggleCart, getTotalItems } = useCartStore()

    useEffect(() => {
        setMounted(true)
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleCartClick = () => {
        toggleCart()
    }

    const navItems = [
        { name: 'HOME', href: '/' },
        { name: 'COLLECTION', href: '/collection' },
        { name: 'ABOUT', href: '/about' },
        { name: 'CONTACT US', href: '/contact' },
    ]

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-background/80 backdrop-blur-sm'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="group relative">
                        <h1 className="text-2xl tracking-widest-ultra font-display text-foreground">
                            ÃLYSÉE
                        </h1>
                        <div className="absolute -bottom-1 left-0 w-0 h-px bg-luxury-gold transition-all duration-500 group-hover:w-full" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-12">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm tracking-wider text-foreground hover:text-luxury-gold transition-colors duration-300"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right side: Search + Cart */}
                    <div className="flex items-center gap-4">
                        {/* Orbit Search Component */}
                        <OrbitSearch />

                        {/* Cart Icon */}
                        <button
                            onClick={handleCartClick}
                            className="relative group cursor-pointer"
                            aria-label="Shopping cart"
                        >
                            <ShoppingBag className="w-5 h-5 text-foreground" />
                            {mounted && getTotalItems() > 0 && (
                                <span className="absolute -top-2 -right-2 w-4 h-4 bg-luxury-gold rounded-full text-[10px] flex items-center justify-center text-black">
                                    {getTotalItems()}
                                </span>
                            )}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6 text-foreground" />
                            ) : (
                                <Menu className="w-6 h-6 text-foreground" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-6 pt-6 pb-4 space-y-4 bg-background border-t border-border"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block text-lg tracking-wider text-foreground hover:text-luxury-gold transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </div>
        </motion.nav>
    )
}