import { create } from 'zustand';
import { CartState } from '../types';

export const useCartStore = create<CartState>((set, get) => ({
  items: {},
  count: 0,
  total: 0,
  addItem: (productId: string, name: string, price: number) => set((state) => {
    const currentItem = state.items[productId];
    const newQuantity = (currentItem?.quantity || 0) + 1;
    
    return {
      items: {
        ...state.items,
        [productId]: { productId, name, price, quantity: newQuantity }
      },
      count: state.count + 1,
      total: state.total + price
    };
  }),
  removeItem: (productId: string) => set((state) => {
    const currentItem = state.items[productId];
    if (!currentItem) return state;

    const newQuantity = currentItem.quantity - 1;
    const newItems = { ...state.items };

    if (newQuantity <= 0) {
      delete newItems[productId];
    } else {
      newItems[productId] = { ...currentItem, quantity: newQuantity };
    }

    return {
      items: newItems,
      count: state.count - 1,
      total: state.total - currentItem.price
    };
  }),
  clearCart: () => set({ items: {}, count: 0, total: 0 }),
  getCount: () => get().count,
}));

export const useCartCount = () => useCartStore((state) => state.count);
