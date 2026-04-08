import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/navigation'
import { CartDrawer } from '@/components/cart/CartDrawer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ÃLYSÉE | Luxury E-commerce',
  description: 'Experience the pinnacle of luxury shopping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Navigation />
        <main className="relative">
          {children}
        </main>
        <CartDrawer />
      </body>
    </html>
  )
}