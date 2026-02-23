import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Leaf } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { items, toggleCart } = useCartStore();
    const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="bg-earth-green text-white p-2 rounded-full">
                                <Leaf size={24} />
                            </div>
                            <span className="font-serif text-2xl font-bold text-earth-green hidden sm:block">
                                Cathy's Custom Shop
                            </span>
                            <span className="font-serif text-xl font-bold text-earth-green sm:hidden">
                                Cathy's
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-deep-charcoal hover:text-earth-green font-medium transition-colors">Home</Link>
                        <Link to="/shop" className="text-deep-charcoal hover:text-earth-green font-medium transition-colors">Shop</Link>
                        {/* <Link to="/hub" className="text-deep-charcoal hover:text-earth-green font-medium transition-colors">The Kitchen</Link> */}
                        <Link to="/about" className="text-deep-charcoal hover:text-earth-green font-medium transition-colors">About Cathy</Link>
                        {/* <Link to="/contact" className="text-deep-charcoal hover:text-earth-green font-medium transition-colors">Contact</Link> */}

                        <button
                            onClick={toggleCart}
                            className="flex items-center gap-2 bg-warm-gold hover:bg-yellow-500 text-deep-charcoal px-4 py-2 rounded-full font-medium transition-colors relative"
                        >
                            <ShoppingBag size={20} />
                            <span>Cart</span>
                            {cartItemCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-soft-terracotta text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-in zoom-in duration-300">
                                    {cartItemCount}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-deep-charcoal hover:text-earth-green focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 pb-4">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-deep-charcoal hover:text-earth-green hover:bg-gray-50"
                        >
                            Home
                        </Link>
                        <Link
                            to="/shop"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-deep-charcoal hover:text-earth-green hover:bg-gray-50"
                        >
                            Shop
                        </Link>
                        <Link
                            to="/about"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-deep-charcoal hover:text-earth-green hover:bg-gray-50"
                        >
                            About Cathy
                        </Link>
                        {/* ... other nav links will go here ... */}

                        <button
                            onClick={() => {
                                setIsOpen(false);
                                toggleCart();
                            }}
                            className="mt-4 w-full flex items-center justify-center gap-2 bg-warm-gold text-deep-charcoal px-4 py-3 rounded-md font-medium"
                        >
                            <ShoppingBag size={20} />
                            <span>View Cart ({cartItemCount})</span>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
