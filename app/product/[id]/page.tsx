import { getProduct, getRelatedProducts } from '@/lib/products'
import ProductClient from './ProductClient'

// Generate static params for all product IDs (required for static export)
export async function generateStaticParams() {
    return [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
    ]
}

export default async function ProductPage({ params }: { params: { id: string } }) {
    const productId = Number(params.id)
    const product = getProduct(productId)
    const relatedProducts = getRelatedProducts(productId, 4)

    // Pass data to client component
    return <ProductClient product={product} relatedProducts={relatedProducts} />
}