import { useState, useEffect } from 'react';
import { Leaf, Package, Check, Phone, MapPin, Clock } from 'lucide-react';

export default function AdminDashboard() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    // In a real app we'd have a login page before this.
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');

    const fetchOrders = async () => {
        try {
            const res = await fetch('/api/orders');
            if (res.ok) {
                const data = await res.json();
                setOrders(data);
            }
        } catch (error) {
            console.error("Failed to fetch orders", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            fetchOrders();
            // Poll every 10 seconds for new orders
            const interval = setInterval(fetchOrders, 10000);
            return () => clearInterval(interval);
        }
    }, [isAuthenticated]);

    const markComplete = async (id) => {
        try {
            const res = await fetch(`/api/orders/${id}/status`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: 'completed' })
            });
            if (res.ok) {
                fetchOrders();
            }
        } catch (err) {
            console.error(err);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center bg-kitchen-bg px-4">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-sm w-full text-center">
                    <Leaf size={40} className="mx-auto text-earth-green mb-4" />
                    <h2 className="text-2xl font-serif font-bold text-deep-charcoal mb-6">Cathy's Login</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        if (password === 'mama123') setIsAuthenticated(true);
                        else alert('Incorrect password for demo (Hint: try mama123)');
                    }}>
                        <input
                            type="password"
                            placeholder="Admin Password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:ring-earth-green focus:border-earth-green"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button className="w-full bg-earth-green text-white font-bold py-3 rounded-xl transition-colors hover:bg-green-700">
                            Enter Admin Portal
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    const pendingOrders = orders.filter(o => o.status === 'pending');
    const completedOrders = orders.filter(o => o.status === 'completed');

    return (
        <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-3xl font-serif font-bold text-deep-charcoal flex items-center gap-3">
                            <Package className="text-earth-green" /> Kitchen Operations
                        </h1>
                        <p className="text-gray-500 mt-2">Manage all customer orders dropping into Cathy's Custom Shop.</p>
                    </div>
                    <button
                        onClick={() => setIsAuthenticated(false)}
                        className="text-sm border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 px-4 py-2 rounded-lg transition-colors"
                    >
                        Logout
                    </button>
                </div>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500 font-medium mb-1">New Orders</p>
                            <div className="text-3xl font-bold text-deep-charcoal">{pendingOrders.length}</div>
                        </div>
                        <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
                            <Clock className="text-soft-terracotta" />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500 font-medium mb-1">Total Fulfilled</p>
                            <div className="text-3xl font-bold text-deep-charcoal">{completedOrders.length}</div>
                        </div>
                        <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                            <Check className="text-earth-green" />
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="text-center py-20 text-gray-500">Loading shop orders...</div>
                ) : pendingOrders.length === 0 ? (
                    <div className="bg-white p-16 rounded-2xl border border-gray-100 shadow-sm text-center">
                        <Leaf size={64} className="mx-auto text-gray-200 mb-4" />
                        <h3 className="text-xl font-bold text-gray-700">All caught up!</h3>
                        <p className="text-gray-500">No new orders waiting for fulfillment right now.</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-deep-charcoal border-b border-gray-200 pb-2">Active Orders Needs Attention</h3>
                        {pendingOrders.map(order => (
                            <div key={order.id} className="bg-white rounded-2xl border border-orange-100 shadow-sm overflow-hidden text-deep-charcoal">
                                <div className="bg-orange-50/50 p-4 border-b border-orange-100 flex flex-wrap justify-between items-center gap-4">
                                    <div className="flex items-center gap-3">
                                        <span className="bg-white animate-pulse w-3 h-3 rounded-full border-2 border-soft-terracotta"></span>
                                        <span className="font-bold">Order {order.id}</span>
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Received: {new Date(order.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        {' - '}{new Date(order.date).toLocaleDateString()}
                                    </div>
                                </div>

                                <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {/* Customer Info */}
                                    <div className="space-y-3">
                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Customer Info</h4>
                                        <div className="font-medium text-lg">{order.customer.name}</div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Phone size={16} className="text-gray-400" />
                                            {order.customer.phone}
                                        </div>
                                        <div className="flex gap-2 text-gray-600">
                                            <MapPin size={16} className="text-gray-400 flex-shrink-0 mt-1" />
                                            <span className="leading-tight">{order.customer.address}</span>
                                        </div>
                                        {order.customer.notes && (
                                            <div className="mt-4 p-3 bg-gray-50 rounded-lg text-sm text-gray-600 border border-gray-100">
                                                <strong>Customer Note:</strong> {order.customer.notes}
                                            </div>
                                        )}
                                    </div>

                                    {/* Order Items */}
                                    <div className="lg:col-span-2 space-y-3">
                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Requested Items</h4>
                                        <div className="bg-gray-50 rounded-xl p-4 space-y-2 border border-gray-100">
                                            {order.items.map((item, i) => (
                                                <div key={i} className="flex justify-between items-center border-b border-gray-200/50 last:border-0 pb-2 last:pb-0">
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-bold text-earth-green">{item.quantity}x</span>
                                                        <span className="font-medium">{item.name}</span>
                                                    </div>
                                                    <span className="text-gray-600 text-sm">UGX {(item.price * item.quantity).toLocaleString()}</span>
                                                </div>
                                            ))}
                                            <div className="pt-3 flex justify-between items-center font-bold border-t border-gray-200">
                                                <span>Total Due</span>
                                                <span className="text-lg">UGX {order.total.toLocaleString()}</span>
                                            </div>
                                        </div>

                                        <div className="flex justify-end pt-4">
                                            <button
                                                onClick={() => markComplete(order.id)}
                                                className="bg-earth-green hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-sm flex items-center gap-2"
                                            >
                                                <Check size={20} /> Pack & Complete Order
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
