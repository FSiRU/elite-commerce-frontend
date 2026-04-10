import { getProduct, getRelatedProducts } from '@/lib/products'
import ProductClient from './ProductClient'

// Generate static params for all product IDs (required for static export)
export async function generateStaticParams() {
    // Generate IDs from 1 to 20
    return Array.from({ length: 20 }, (_, i) => ({
        id: String(i + 1)
    }))
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const productId = Number(id)
    const product = getProduct(productId)
    const relatedProducts = getRelatedProducts(productId, 4)

    // Pass data to client component
    return <ProductClient product={product} relatedProducts={relatedProducts} />
}