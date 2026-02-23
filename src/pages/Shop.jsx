import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';

export default function Shop() {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialCategory = searchParams.get('category') || 'All';
    const [activeTab, setActiveTab] = useState(initialCategory);

    useEffect(() => {
        const category = searchParams.get('category') || 'All';
        setActiveTab(category);
    }, [searchParams]);

    const categories = ['All', 'Medicinal Herbs', 'Nutritious Foods', 'Healing Essentials', 'Eco Home'];

    const handleTabChange = (category) => {
        setActiveTab(category);
        if (category === 'All') {
            setSearchParams({});
        } else {
            setSearchParams({ category });
        }
    };

    const filteredProducts = activeTab === 'All'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeTab);

    return (
        <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-deep-charcoal mb-6">The Healing Shop</h1>
                <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    Stock your home with nature's purest remedies. Delivered fresh to your door in Kampala.
                    Browse our extensive collection of wild herbs, foods, and eco-essentials.
                </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => handleTabChange(category)}
                        className={`px-8 py-3 rounded-full font-bold transition-colors text-lg ${activeTab === category
                            ? 'bg-earth-green text-white shadow-md'
                            : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-20 text-gray-500 text-xl font-medium">
                    No products found in this category right now.
                </div>
            )}
        </div>
    );
}
