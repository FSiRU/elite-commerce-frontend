'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Mic, X, Sparkles, Diamond, Crown, Wind } from 'lucide-react'
import Link from 'next/link'
import { products } from '@/lib/products'

// Mood-based search suggestions
const moodCategories = [
    { name: "I'm feeling elegant", icon: Crown, keywords: ['dress', 'silk', 'evening'] },
    { name: "I need warmth", icon: Wind, keywords: ['cashmere', 'wool', 'blazer'] },
    { name: "Make a statement", icon: Diamond, keywords: ['leather', 'jacket', 'bold'] },
    { name: "Minimalist mood", icon: Sparkles, keywords: ['neutral', 'simple', 'clean'] },
]

export function OrbitSearch() {
    const [isOpen, setIsOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [results, setResults] = useState<typeof products>([])
    const [isListening, setIsListening] = useState(false)
    const [selectedMood, setSelectedMood] = useState<string | null>(null)
    const searchRef = useRef<HTMLDivElement>(null)

    // Handle search
    useEffect(() => {
        if (searchQuery.trim() === '') {
            setResults([])
            return
        }

        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setResults(filtered)
    }, [searchQuery])

    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Voice search
    const handleVoiceSearch = () => {
        if ('webkitSpeechRecognition' in window) {
            const recognition = new (window as any).webkitSpeechRecognition()
            recognition.lang = 'en-US'
            recognition.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript
                setSearchQuery(transcript)
                setIsListening(false)
            }
            recognition.onend = () => setIsListening(false)
            recognition.start()
            setIsListening(true)
        } else {
            alert('Voice search is supported in Chrome, Edge, or Safari')
        }
    }

    const handleMoodClick = (mood: typeof moodCategories[0]) => {
        setSelectedMood(mood.name)
        setSearchQuery(mood.keywords.join(' '))
        setTimeout(() => setSelectedMood(null), 1000)
    }

    return (
        <div ref={searchRef} className="relative z-50">
            {/* Search Orb - Mobile friendly */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-10 h-10 rounded-full bg-luxury-gold/10 backdrop-blur-md border border-luxury-gold flex items-center justify-center transition-all duration-500"
            >
                <Search className="w-4 h-4 text-luxury-gold" />
            </motion.button>

            {/* Expanded Search Panel - Mobile Responsive */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        transition={{ type: 'spring', damping: 25 }}
                        className="absolute right-0 top-12 w-[280px] sm:w-[380px] md:w-[450px] bg-background/95 backdrop-blur-xl border border-luxury-gold/30 shadow-2xl rounded-2xl overflow-hidden"
                    >
                        {/* Search Header */}
                        <div className="p-3 border-b border-border">
                            <div className="flex items-center gap-2">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-foreground/40" />
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search the collection..."
                                        className="w-full pl-9 pr-3 py-2 text-sm bg-background border border-border rounded-xl focus:outline-none focus:border-luxury-gold transition-colors text-foreground"
                                        autoFocus
                                    />
                                </div>
                                <button
                                    onClick={handleVoiceSearch}
                                    className={`p-2 rounded-xl border transition-all ${
                                        isListening 
                                            ? 'bg-luxury-gold text-black border-luxury-gold animate-pulse' 
                                            : 'border-border hover:border-luxury-gold text-foreground'
                                    }`}
                                >
                                    <Mic className="w-3.5 h-3.5" />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-xl border border-border hover:border-luxury-gold transition-colors"
                                >
                                    <X className="w-3.5 h-3.5 text-foreground" />
                                </button>
                            </div>
                        </div>

                        {/* Mood Categories - Mobile friendly grid */}
                        <div className="p-3 border-b border-border">
                            <p className="text-[10px] text-foreground/50 tracking-wider mb-2">DISCOVER BY MOOD</p>
                            <div className="grid grid-cols-2 gap-1.5">
                                {moodCategories.map((mood) => (
                                    <motion.button
                                        key={mood.name}
                                        onClick={() => handleMoodClick(mood)}
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg border transition-all text-xs ${
                                            selectedMood === mood.name
                                                ? 'border-luxury-gold bg-luxury-gold/20'
                                                : 'border-border hover:border-luxury-gold/50'
                                        }`}
                                    >
                                        <mood.icon className="w-3 h-3 text-luxury-gold" />
                                        <span className="text-foreground">{mood.name}</span>
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Search Results */}
                        <div className="max-h-80 overflow-y-auto">
                            {searchQuery && (
                                <div className="p-3 border-b border-border">
                                    <p className="text-[10px] text-foreground/50">
                                        {results.length} {results.length === 1 ? 'result' : 'results'} for "{searchQuery}"
                                    </p>
                                </div>
                            )}

                            {results.length === 0 && searchQuery && (
                                <div className="p-6 text-center">
                                    <p className="text-foreground/50 text-sm">No products found</p>
                                    <p className="text-xs text-foreground/30 mt-1">Try searching for "cashmere" or "silk"</p>
                                </div>
                            )}

                            {results.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.03 }}
                                >
                                    <Link href={`/product/${product.id}`} onClick={() => setIsOpen(false)}>
                                        <div className="flex items-center gap-3 p-3 hover:bg-luxury-gold/5 transition-colors cursor-pointer group">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-12 h-16 object-cover rounded"
                                            />
                                            <div className="flex-1">
                                                <h4 className="text-xs font-medium text-foreground group-hover:text-luxury-gold transition-colors line-clamp-2">
                                                    {product.name}
                                                </h4>
                                                <p className="text-[10px] text-foreground/50 mt-0.5">{product.category}</p>
                                                <p className="text-xs text-luxury-gold mt-0.5">{product.price}</p>
                                            </div>
                                            <Diamond className="w-3 h-3 text-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer Suggestion */}
                        <div className="p-3 border-t border-border bg-luxury-gold/5">
                            <p className="text-[10px] text-center text-foreground/40 tracking-wider">
                                ✨ Discover your next signature piece ✨
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}