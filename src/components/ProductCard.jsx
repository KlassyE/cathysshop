import { Leaf, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">
            {/* Product Image Placeholder */}
            <div className="h-64 bg-gray-50 flex items-center justify-center p-0 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                ) : (
                    <div className="text-gray-300">
                        <Leaf size={48} className="mx-auto" />
                    </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-earth-green/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {product.isBestseller && (
                    <div className="absolute top-4 right-4 bg-warm-gold text-sm font-bold px-3 py-1 rounded-full z-10 shadow-sm">
                        Bestseller
                    </div>
                )}
            </div>

            {/* Product Details */}
            <div className="p-8 flex flex-col flex-grow">
                <div className="text-base font-bold tracking-wider text-earth-green uppercase mb-3 px-3 py-1 bg-green-50/50 rounded-lg w-fit">
                    {product.category}
                </div>
                <h3 className="text-3xl font-serif font-extrabold text-deep-charcoal mb-3 leading-tight">
                    {product.name}
                </h3>

                {product.scientificName && (
                    <p className="text-base italic text-gray-600 font-semibold mb-4">{product.scientificName}</p>
                )}

                <p className="text-gray-700 text-xl mb-8 flex-grow line-clamp-3 leading-relaxed font-medium">
                    {product.description}
                </p>

                <div className="flex flex-col gap-4 mt-auto pt-6 border-t border-gray-100">
                    <div className="font-extrabold text-2xl text-deep-charcoal">
                        {product.variants ? `From UGX ${Math.min(...product.variants.map(v => v.price)).toLocaleString()}` : `UGX ${product.price.toLocaleString()}`}
                    </div>
                    <Link
                        to={`/shop/${product.id}`}
                        className="flex items-center justify-center gap-3 bg-earth-green text-white hover:bg-green-700 px-8 py-4 rounded-full font-bold transition-all shadow-md hover:shadow-lg text-xl"
                    >
                        <span>View Details</span>
                        <ArrowRight size={24} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
