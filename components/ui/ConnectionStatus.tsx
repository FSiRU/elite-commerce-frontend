'use client'

import { useState, useEffect } from 'react'
import { Wifi, WifiOff } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function ConnectionStatus() {
    const [isOnline, setIsOnline] = useState(true)
    const [showStatus, setShowStatus] = useState(false)

    useEffect(() => {
        setIsOnline(navigator.onLine)

        const handleOnline = () => {
            setIsOnline(true)
            setShowStatus(true)
            setTimeout(() => setShowStatus(false), 3000)
        }

        const handleOffline = () => {
            setIsOnline(false)
            setShowStatus(true)
            setTimeout(() => setShowStatus(false), 3000)
        }

        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)

        return () => {
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }
    }, [])

    if (!showStatus) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className={`fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm ${isOnline ? 'bg-green-500 text-white' : 'bg-amber-500 text-black'
                    }`}
            >
                {isOnline ? (
                    <>
                        <Wifi className="w-4 h-4" />
                        <span>Connected - Cart synced</span>
                    </>
                ) : (
                    <>
                        <WifiOff className="w-4 h-4" />
                        <span>You're offline. Your cart is saved locally.</span>
                    </>
                )}
            </motion.div>
        </AnimatePresence>
    )
}