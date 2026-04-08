export interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    category: string;
    description: string;
    sizes: string[];
    colors: string[];
    inStock: boolean;
    details: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: 'CASHMERE OVERSIZED BLAZER',
        price: 'KSh 2,890',
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1887',
        category: 'READY-TO-WEAR',
        description: 'Luxurious oversized blazer crafted from premium cashmere. Features peak lapels, front flap pockets, and a relaxed silhouette perfect for modern elegance.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Black', 'Cream', 'Navy'],
        inStock: true,
        details: '100% Cashmere | Dry clean only | Made in Italy'
    },
    {
        id: 2,
        name: 'SILK MAXI DRESS',
        price: 'KSh 3,450',
        image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=1887',
        category: 'EVENING WEAR',
        description: 'Elegant maxi dress in pure silk satin. Flowing silhouette with delicate cowl neck and subtle side slit.',
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Champagne', 'Black', 'Burgundy'],
        inStock: true,
        details: '100% Silk | Dry clean only | Made in France'
    },
    {
        id: 3,
        name: 'LEATHER BOMBER JACKET',
        price: 'KSh 4,200',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1887',
        category: 'OUTERWEAR',
        description: 'Classic bomber jacket in supple lambskin leather. Ribbed cuffs and hem, zip front, and multiple pockets.',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black', 'Brown', 'Burgundy'],
        inStock: true,
        details: '100% Lambskin leather | Professional clean only | Made in Italy'
    },
    {
        id: 4,
        name: 'WOOL TROUSERS',
        price: 'KSh 1,890',
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1880',
        category: 'READY-TO-WEAR',
        description: 'Tailored wool trousers with clean lines. Features front pleats, side pockets, and a comfortable fit.',
        sizes: ['28', '30', '32', '34', '36'],
        colors: ['Charcoal', 'Navy', 'Beige'],
        inStock: true,
        details: '98% Wool, 2% Elastane | Dry clean only | Made in Portugal'
    }
];

export const getProduct = (id: number): Product | undefined => {
    return products.find(product => product.id === id);
};

export const getRelatedProducts = (currentProductId: number, limit: number = 3): Product[] => {
    return products.filter(product => product.id !== currentProductId).slice(0, limit);
};