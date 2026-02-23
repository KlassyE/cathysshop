import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
    items: [],
    cartTotal: 0,
    isCartOpen: false,

    toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

    addItem: (product) => {
        set((state) => {
            const idToMatch = product.cartItemId || product.id;
            const existingItem = state.items.find(item => (item.cartItemId || item.id) === idToMatch);

            let newItems;
            if (existingItem) {
                newItems = state.items.map(item =>
                    (item.cartItemId || item.id) === idToMatch ? { ...item, quantity: item.quantity + (product.quantity || 1) } : item
                );
            } else {
                newItems = [...state.items, { ...product, quantity: 1 }];
            }

            const newTotal = newItems.reduce((total, item) => total + (item.price * item.quantity), 0);

            return { items: newItems, cartTotal: newTotal, isCartOpen: true };
        });
    },

    removeItem: (cartItemId) => {
        set((state) => {
            const newItems = state.items.filter(item => (item.cartItemId || item.id) !== cartItemId);
            const newTotal = newItems.reduce((total, item) => total + (item.price * item.quantity), 0);
            return { items: newItems, cartTotal: newTotal };
        });
    },

    updateQuantity: (cartItemId, delta) => {
        set((state) => {
            const newItems = state.items.map(item => {
                if ((item.cartItemId || item.id) === cartItemId) {
                    const newQuantity = Math.max(1, item.quantity + delta);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });

            const newTotal = newItems.reduce((total, item) => total + (item.price * item.quantity), 0);
            return { items: newItems, cartTotal: newTotal };
        });
    },

    clearCart: () => set({ items: [], cartTotal: 0 })
}));
