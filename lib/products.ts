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
    // Products 1-4 (Original)
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
        name: 'WOOL SUIT',
        price: 'KSh 21,890',
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1880',
        category: 'READY-TO-WEAR',
        description: 'Tailored wool trousers with clean lines. Features front pleats, side pockets, and a comfortable fit.',
        sizes: ['28', '30', '32', '34', '36'],
        colors: ['Charcoal', 'Navy', 'Beige'],
        inStock: true,
        details: '98% Wool, 2% Elastane | Dry clean only | Made in Portugal'
    },

    // Product 5
    {
        id: 5,
        name: 'CASHMERE T-SHIRT',
        price: 'KSh 2,450',
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1887',
        category: 'KNITWEAR',
        description: 'Ultra-soft cashmere turtleneck sweater. Ribbed cuffs and hem for a refined finish.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Black', 'Cream', 'Grey', 'Navy'],
        inStock: true,
        details: '100% Cashmere | Hand wash cold | Made in Scotland'
    },

    // Product 6 - Merino Wool Cardigan
    {
        id: 6,
        name: 'MERINO WOOL CARDIGAN',
        price: 'KSh 2,890',
        image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1887',
        category: 'KNITWEAR',
        description: 'Elegant merino wool cardigan with mother of pearl buttons. Perfect for layering over any outfit.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Camel', 'Navy', 'Black', 'Grey'],
        inStock: true,
        details: '100% Merino Wool | Hand wash | Made in Italy'
    },

    // Product 7
    {
        id: 7,
        name: 'SILK CAMISOLE DRESS',
        price: 'KSh 1,290',
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1887',
        category: 'TOPS',
        description: 'Delicate silk camisole with adjustable straps. Perfect for layering or evening wear.',
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Black', 'White', 'Champagne', 'Rose'],
        inStock: true,
        details: '100% Silk | Dry clean only | Made in France'
    },

    // Product 8
    {
        id: 8,
        name: 'COTTON OVERSIZED SHIRT',
        price: 'KSh 1,890',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1887',
        category: 'SHIRTS',
        description: 'Relaxed fit cotton shirt. Button-down collar and chest pocket.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['White', 'Blue', 'Black', 'Striped'],
        inStock: true,
        details: '100% Organic Cotton | Machine wash | Made in Portugal'
    },

    // Product 9
    {
        id: 9,
        name: 'WOOL CASHMERE COAT',
        price: 'KSh 8,900',
        image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1887',
        category: 'OUTERWEAR',
        description: 'Double-breasted wool-cashmere blend coat. Timeless silhouette for cold seasons.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Camel', 'Black', 'Grey', 'Navy'],
        inStock: true,
        details: '90% Wool, 10% Cashmere | Dry clean only | Made in Italy'
    },

    // Product 10
    {
        id: 10,
        name: 'LEATHER CROSSBODY BAG',
        price: 'KSh 6,500',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1887',
        category: 'ACCESSORIES',
        description: 'Minimalist leather crossbody bag with adjustable strap. Gold hardware.',
        sizes: ['One Size'],
        colors: ['Black', 'Tan', 'Burgundy'],
        inStock: true,
        details: '100% Leather | Made in Spain | Dimensions: 20x15x8cm'
    },

    // Product 11
    {
        id: 11,
        name: 'PUFFER JACKET',
        price: 'KSh 4,900',
        image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1887',
        category: 'ACCESSORIES',
        description: 'Luxurious silk scarf with hand-rolled edges. Signature print.',
        sizes: ['90x90cm'],
        colors: ['Multicolor', 'Navy/Gold', 'Black/White'],
        inStock: true,
        details: '100% Silk | Dry clean only | Made in Italy'
    },

    // Product 12
    {
        id: 12,
        name: 'CASHMERE BEANIE',
        price: 'KSh 690',
        image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1887',
        category: 'ACCESSORIES',
        description: 'Ribbed cashmere beanie. One size fits all.',
        sizes: ['One Size'],
        colors: ['Black', 'Grey', 'Navy', 'Cream'],
        inStock: true,
        details: '100% Cashmere | Hand wash | Made in Scotland'
    },

    // Product 13 - Minimalist Watch
    {
        id: 13,
        name: 'MINIMALIST WATCH',
        price: 'KSh 5,900',
        image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1887',
        category: 'ACCESSORIES',
        description: 'Elegant minimalist watch with genuine leather strap and gold-tone case. Japanese quartz movement.',
        sizes: ['One Size'],
        colors: ['Gold/Black', 'Silver/Black', 'Rose Gold/Tan'],
        inStock: true,
        details: 'Stainless steel case | Leather strap | Water resistant | Made in Japan'
    },

    // Product 14
    {
        id: 14,
        name: 'WOOL SUIT BLAZER',
        price: 'KSh 7,200',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1887',
        category: 'READY-TO-WEAR',
        description: 'Tailored wool blazer for formal occasions. Peak lapels and flap pockets.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Navy', 'Charcoal', 'Black'],
        inStock: true,
        details: '100% Wool | Dry clean only | Made in Portugal'
    },

    // Product 15
    {
        id: 15,
        name: 'COTTON TROUSERS',
        price: 'KSh 1,590',
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1887',
        category: 'READY-TO-WEAR',
        description: 'Classic fit cotton trousers. Front pleats and side pockets.',
        sizes: ['28', '30', '32', '34', '36'],
        colors: ['Khaki', 'Navy', 'Black', 'Beige'],
        inStock: true,
        details: '97% Cotton, 3% Elastane | Machine wash | Made in Turkey'
    },

    // Product 16 - Luxury Chronograph Watch
    {
        id: 16,
        name: 'LUXURY CHRONOGRAPH WATCH',
        price: 'KSh 7,900',
        image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=1887',
        category: 'ACCESSORIES',
        description: 'Sophisticated chronograph watch with stainless steel mesh band. Precision quartz movement and date window.',
        sizes: ['One Size'],
        colors: ['Silver/Blue', 'Gold/Black', 'Rose Gold/White'],
        inStock: true,
        details: 'Stainless steel case | Mesh band | Water resistant 50m | Made in Switzerland'
    },

    // Product 17
    {
        id: 17,
        name: 'LAPTOP BACK PACK',
        price: 'KSh 2890',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1887',
        category: 'ACCESSORIES',
        description: 'Italian leather belt with gold buckle. Available in multiple sizes.',
        sizes: ['80', '85', '90', '95', '100', '105'],
        colors: ['Black', 'Brown', 'Tan'],
        inStock: true,
        details: '100% Leather | Made in Italy | Width: 3cm'
    },

    // Product 18
    {
        id: 18,
        name: 'CASHMERE WRAP',
        price: 'KSh 3,200',
        image: 'https://images.unsplash.com/photo-1598346762291-aee88549193f?q=80&w=1887',
        category: 'ACCESSORIES',
        description: 'Oversized cashmere wrap. Perfect for travel or layering.',
        sizes: ['200x70cm'],
        colors: ['Grey', 'Camel', 'Black', 'Navy'],
        inStock: true,
        details: '100% Cashmere | Hand wash | Made in Nepal'
    },

    // Product 19
    {
        id: 19,
        name: 'LINEN SUMMER SHIRT',
        price: 'KSh 1,690',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1887',
        category: 'SHIRTS',
        description: 'Breathable linen shirt for warm weather. Relaxed fit.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['White', 'Beige', 'Blue', 'Olive'],
        inStock: true,
        details: '100% Linen | Machine wash | Made in Portugal'
    },

    // Product 20
    {
        id: 20,
        name: 'LEATHER WALLET',
        price: 'KSh 1,290',
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1887',
        category: 'ACCESSORIES',
        description: 'Minimalist leather wallet with card slots and bill compartment.',
        sizes: ['One Size'],
        colors: ['Black', 'Brown', 'Tan'],
        inStock: true,
        details: '100% Leather | Made in Spain | 8 card slots'
    }
];

export const getProduct = (id: number): Product | undefined => {
    return products.find(product => product.id === id);
};

export const getRelatedProducts = (currentProductId: number, limit: number = 4): Product[] => {
    return products.filter(product => product.id !== currentProductId).slice(0, limit);
};