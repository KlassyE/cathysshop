import { Leaf, Award, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Hero Section */}
            <section className="relative bg-earth-green text-white overflow-hidden">
                {/* Abstract background blobs for a warm, organic feel */}
                <div className="absolute top-0 -inset-x-10 h-[200%] w-[120%] bg-green-900/20 blur-3xl rounded-[100%]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32 flex flex-col items-center text-center">
                    <span className="bg-white/20 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide mb-6 inline-block backdrop-blur-sm">
                        🌿 Karibu, My Children!
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-warm-gold tracking-tight mb-8">
                        Welcome to Cathy's<br />Healing Kitchen
                    </h1>
                    <p className="max-w-2xl text-lg md:text-xl text-green-50 mb-10 leading-relaxed font-light">
                        For 30 years, I've healed families with Uganda's wild gifts. No chemicals, just <i className="text-warm-gold">nature's true medicine</i>. Let's heal together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/shop" className="bg-warm-gold hover:bg-yellow-500 text-deep-charcoal px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg">
                            Shop My Fresh Remedies
                        </Link>
                        <Link to="/hub" className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg transition-colors text-center">
                            Join The Kitchen
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="bg-white py-12 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-gray-500">
                        <div className="flex flex-col items-center gap-3">
                            <Leaf size={32} className="text-earth-green" />
                            <span className="font-medium text-sm text-deep-charcoal">100% Natural</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <Heart size={32} className="text-soft-terracotta" />
                            <span className="font-medium text-sm text-deep-charcoal">Handcrafted with Love</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <Award size={32} className="text-warm-gold" />
                            <span className="font-medium text-sm text-deep-charcoal">Pure & Eco-Friendly</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <ShieldCheck size={32} className="text-blue-500" />
                            <span className="font-medium text-sm text-deep-charcoal">Fresh Daily Kampala</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Categories Snippet */}
            <section className="py-20 bg-kitchen-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-deep-charcoal mb-4">Nature's Medicine Cabinet</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Discover ancient remedies crafted for the modern soul. Delivering fresh across Kampala daily.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Category 1 */}
                        <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-emerald-50 relative">
                            <div className="h-64 bg-emerald-100/50 flex items-center justify-center p-0 group-hover:bg-emerald-200/50 transition-colors relative">
                                <img src="/images/products/p1.png" alt="Nutritious Foods" className="w-full h-full object-cover" loading="lazy" />
                                <div className="absolute inset-0 bg-earth-green/40 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100">
                                    <span className="font-bold text-white text-xl tracking-wide uppercase">Shop Food</span>
                                </div>
                            </div>
                            <div className="p-8 text-center">
                                <h3 className="text-2xl font-serif font-bold text-deep-charcoal mb-2">Bushera & Wild Veg</h3>
                                <p className="text-gray-500 mb-6 text-sm">Probiotic powerhouses and fresh greens for gut health.</p>
                                <Link to="/shop" className="text-earth-green font-bold uppercase tracking-wide text-sm group-hover:text-soft-terracotta transition-colors">View Selection &rarr;</Link>
                            </div>
                        </div>

                        {/* Category 2 */}
                        <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-yellow-50 relative -mt-4 mb-4 md:mt-0 md:mb-0">
                            <div className="absolute top-4 right-4 bg-warm-gold text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm">Bestseller</div>
                            <div className="h-64 bg-yellow-50 flex items-center justify-center p-0 group-hover:bg-yellow-100/50 transition-colors relative">
                                <img src="/images/products/h1.png" alt="Healing Essentials" className="w-full h-full object-cover" loading="lazy" />
                                <div className="absolute inset-0 bg-yellow-900/40 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100">
                                    <span className="font-bold text-white text-xl tracking-wide uppercase">Shop Healing</span>
                                </div>
                            </div>
                            <div className="p-8 text-center">
                                <h3 className="text-2xl font-serif font-bold text-deep-charcoal mb-2">Healing Essentials</h3>
                                <p className="text-gray-500 mb-6 text-sm">Wild aloe, neem, and shea cleansers carefully formulated.</p>
                                <Link to="/shop" className="text-warm-gold font-bold uppercase tracking-wide text-sm group-hover:text-soft-terracotta transition-colors">View Remedies &rarr;</Link>
                            </div>
                        </div>

                        {/* Category 3 */}
                        <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-orange-50 relative">
                            <div className="h-64 bg-orange-50 flex items-center justify-center p-0 group-hover:bg-orange-100/50 transition-colors relative">
                                <img src="/images/products/p5.png" alt="Eco Home" className="w-full h-full object-cover" loading="lazy" />
                                <div className="absolute inset-0 bg-orange-900/40 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100">
                                    <span className="font-bold text-white text-xl tracking-wide uppercase">Shop Eco Home</span>
                                </div>
                            </div>
                            <div className="p-8 text-center">
                                <h3 className="text-2xl font-serif font-bold text-deep-charcoal mb-2">Eco Home</h3>
                                <p className="text-gray-500 mb-6 text-sm">Banana waste briquettes and environmentally safe cleaners.</p>
                                <Link to="/shop" className="text-soft-terracotta font-bold uppercase tracking-wide text-sm group-hover:text-earth-green transition-colors">Shop Eco &rarr;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cathy's Promise */}
            <section className="bg-earth-green text-white py-20 relative overflow-hidden">
                {/* Decorative circle */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-32 w-64 h-64 border-[30px] border-white/5 rounded-full pointer-events-none"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <Leaf size={48} className="mx-auto mb-6 text-warm-gold opacity-80" />
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">"Ija Maama Akujanjabe"</h2>
                    <p className="text-green-50 text-xl font-light italic opacity-90">
                        Family health starts at home. My child, let Mama heal you.
                    </p>
                </div>
            </section>

        </div>
    );
}
