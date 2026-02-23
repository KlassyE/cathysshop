import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Leaf, ShoppingBag, Plus, Minus } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCartStore } from '../store/useCartStore';

export default function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const addItem = useCartStore(state => state.addItem);

    const [product, setProduct] = useState(null);
    const [selectedVariant, setSelectedVariant] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        // Scroll to top on load
        window.scrollTo(0, 0);
        const found = PRODUCTS.find(p => p.id === id);
        if (found) {
            setProduct(found);
            if (found.variants && found.variants.length > 0) {
                setSelectedVariant(found.variants[0]); // Select first variant by default
            }
        }
    }, [id]);

    if (!product) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <Leaf size={48} className="text-gray-300 mb-4" />
                <h2 className="text-2xl font-serif font-bold text-deep-charcoal mb-2">Item Not Found</h2>
                <p className="text-gray-500 mb-6">We couldn't find the remedy you're looking for.</p>
                <Link to="/shop" className="text-earth-green font-bold hover:underline">
                    Return to Shop
                </Link>
            </div>
        );
    }

    const handleAddToCart = () => {
        const itemToAdd = {
            ...product,
            cartItemId: selectedVariant ? `${product.id}-${selectedVariant.id}` : product.id,
            price: selectedVariant ? selectedVariant.price : product.price,
            name: selectedVariant ? `${product.name} - ${selectedVariant.label}` : product.name,
            quantity: quantity
        };

        // The cart's addItem logic normally increments by 1. 
        // Wait, our cart normally accepts 1 item at a time in the card list.
        // For the detail page, let's just use the store's add method multiple times or adjust it.
        // Since we'll update useCartStore to use cartItemId, we can just pass the quantity and update the store.
        addItem(itemToAdd);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Breadcrumb nav */}
            <button
                onClick={() => navigate('/shop')}
                className="flex items-center gap-2 text-earth-green hover:text-green-800 font-bold mb-8 transition-colors px-4 py-2 bg-green-50 rounded-full inline-flex"
            >
                <ArrowLeft size={20} />
                Back to Shop
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                {/* Left: Image Placeholder */}
                <div className="bg-gray-50 rounded-[2rem] h-[400px] md:h-[600px] flex items-center justify-center relative overflow-hidden border border-gray-100 shadow-sm">
                    {product.image ? (
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    ) : (
                        <Leaf size={120} className="text-gray-200" />
                    )}
                    {product.isBestseller && (
                        <div className="absolute top-6 right-6 bg-warm-gold text-sm font-bold px-4 py-2 rounded-full shadow-sm">
                            Mama's Favorite
                        </div>
                    )}
                </div>

                {/* Right: Product Details */}
                <div className="flex flex-col justify-center">
                    <div className="text-base font-bold tracking-widest text-earth-green uppercase mb-4 px-3 py-1 bg-green-50 w-fit rounded-lg">
                        {product.category}
                    </div>
                    <h1 className="text-5xl md:text-6xl font-serif font-extrabold text-deep-charcoal mb-5 leading-tight">
                        {product.name}
                    </h1>

                    {product.scientificName && (
                        <p className="text-2xl italic text-gray-600 font-semibold mb-8">
                            {product.scientificName}
                        </p>
                    )}

                    <div className="text-4xl font-extrabold text-deep-charcoal mb-10">
                        UGX {(selectedVariant ? selectedVariant.price : product.price).toLocaleString()}
                    </div>

                    <div className="prose prose-xl text-gray-700 mb-12 leading-relaxed font-medium">
                        <p>{product.longDescription || product.description}</p>
                    </div>

                    {/* Variants Selection */}
                    {product.variants && product.variants.length > 0 && (
                        <div className="mb-10 p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm transition-all">
                            <h3 className="text-2xl font-bold text-deep-charcoal mb-6">Select Size</h3>
                            <div className="flex flex-wrap gap-4">
                                {product.variants.map((variant) => (
                                    <button
                                        key={variant.id}
                                        onClick={() => setSelectedVariant(variant)}
                                        className={`px-6 py-3 rounded-xl font-bold transition-all ${selectedVariant?.id === variant.id
                                            ? 'bg-earth-green text-white shadow-md border-transparent'
                                            : 'bg-white text-gray-600 border border-gray-200 hover:border-earth-green'
                                            }`}
                                    >
                                        {variant.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Add to Cart Actions */}
                    <div className="flex items-center gap-6">
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-warm-gold hover:bg-yellow-500 text-deep-charcoal font-extrabold text-2xl py-6 px-10 rounded-2xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-4"
                        >
                            <ShoppingBag size={32} />
                            Add to Basket
                        </button>
                    </div>

                    <p className="mt-6 text-sm text-gray-500 font-medium italic">
                        🌿 Sustainably sourced from Uganda. Freshness guaranteed.
                    </p>
                </div>
            </div>
        </div>
    );
}
