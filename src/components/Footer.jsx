import { Leaf, MapPin, Phone, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-earth-green text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Brand & Mission */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <div className="bg-white text-earth-green p-2 rounded-full shadow-sm">
                            <Leaf size={24} />
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-warm-gold">Cathy's Shop</h3>
                    </div>
                    <p className="text-gray-100 text-sm leading-relaxed">
                        Healing families with Uganda's wild gifts. No chemicals, just nature's true medicine. Strong body, joyful spirit—like our grandmothers taught.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h4 className="font-serif text-xl font-bold text-warm-gold">Quick Links</h4>
                    <ul className="space-y-2 text-gray-100 text-sm">
                        <li><Link to="/shop" className="hover:text-warm-gold transition-colors">Shop Essentials</Link></li>
                        <li><Link to="/" className="hover:text-warm-gold transition-colors">The Kitchen Classes (Coming Soon)</Link></li>
                        <li><Link to="/about" className="hover:text-warm-gold transition-colors">About Cathy</Link></li>
                        <li><Link to="/" className="hover:text-warm-gold transition-colors">Return Policy</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                    <h4 className="font-serif text-xl font-bold text-warm-gold">Visit Mama</h4>
                    <ul className="space-y-3 text-gray-100 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-soft-terracotta mt-0.5" />
                            <span>Nakawa / Old Kampala, Uganda<br />(Call for exact pickup location)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-soft-terracotta" />
                            <span>WhatsApp: +256 700 000 000</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Instagram size={18} className="text-soft-terracotta" />
                            <span>@cathys.custom.shop</span>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Copyright Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-green-700/50 flex flex-col sm:flex-row justify-between items-center text-xs text-green-100">
                <p>&copy; {new Date().getFullYear()} Cathy's Custom Shop. All rights reserved.</p>
                <div className="flex gap-4 mt-4 sm:mt-0">
                    <span className="flex items-center gap-1">🌿 NEMA Eco-Certified</span>
                    <span className="flex items-center gap-1">📜 URA Registered</span>
                </div>
            </div>
        </footer>
    );
}
