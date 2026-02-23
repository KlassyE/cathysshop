import { Leaf, Heart, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-kitchen-bg py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 text-earth-green/10">
                    <Leaf size={300} strokeWidth={0.5} />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-deep-charcoal mb-6">
                        Meet Cathy
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
                        A mother, a healer, and a guardian of nature's purest remedies.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Placeholder */}
                    <div className="bg-emerald-50 rounded-[3rem] h-[500px] flex items-center justify-center relative shadow-sm border border-emerald-100">
                        <div className="absolute -top-6 -left-6 bg-earth-green text-white p-6 rounded-full shadow-lg">
                            <Heart size={40} className="fill-white" />
                        </div>
                        <p className="text-earth-green font-serif text-2xl font-bold opacity-60">
                            [Cathy's Photo]
                        </p>
                    </div>

                    {/* Story Text */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-serif font-bold text-deep-charcoal">
                            Deeply Rooted in Earthly Healing
                        </h2>
                        <div className="prose prose-lg text-gray-600 space-y-6 leading-relaxed">
                            <p>
                                Cathy has always believed that true health starts from the earth and is nurtured in the kitchen.
                                Like the grandmothers before her, she understands that every plant, every seed, and every root carries an ancient wisdom designed to heal and restore our bodies.
                            </p>
                            <p>
                                Her journey began out of a deep desire to help her own family thrive using pure, unadulterated natural ingredients.
                                Over the years, this passion blossomed into <strong>Cathy's Custom Shop</strong>—a sanctuary where you can find remedies that are crafted with love, profound respect for nature, and an unwavering commitment to your well-being.
                            </p>
                            <p>
                                <em>(This section will be expanded soon with Cathy's full personal story and background in holistic healing...)</em>
                            </p>
                        </div>

                        <div className="pt-6 border-t border-gray-100">
                            <div className="flex gap-4">
                                <Link
                                    to="/shop"
                                    className="flex items-center gap-2 bg-earth-green hover:bg-green-800 text-white px-8 py-4 rounded-full font-bold transition-all text-lg"
                                >
                                    <Sprout size={20} />
                                    Explore Her Shop
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
