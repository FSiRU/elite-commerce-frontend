'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false)
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 700 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 20)
            cursorY.set(e.clientY - 20)
        }

        const handleMouseEnter = () => setIsHovering(true)
        const handleMouseLeave = () => setIsHovering(false)

        window.addEventListener('mousemove', moveCursor)

        const interactiveElements = document.querySelectorAll('a, button, .group, [role="button"]')
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter)
            el.addEventListener('mouseleave', handleMouseLeave)
        })

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter)
                el.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [cursorX, cursorY])

    return (
        <>
            {/* Outer gold ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    width: isHovering ? 48 : 32,
                    height: isHovering ? 48 : 32,
                }}
                animate={{
                    width: isHovering ? 48 : 32,
                    height: isHovering ? 48 : 32,
                }}
                transition={{
                    duration: 0.2,
                }}
            >
                <div
                    className="w-full h-full rounded-full border-2 border-luxury-gold opacity-80"
                    style={{
                        boxShadow: '0 0 10px rgba(198, 164, 63, 0.3)'
                    }}
                />
            </motion.div>

            {/* Inner gold dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[10000]"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    width: 4,
                    height: 4,
                }}
            >
                <div className="w-full h-full rounded-full bg-luxury-gold" />
            </motion.div>
        </>
    )
}