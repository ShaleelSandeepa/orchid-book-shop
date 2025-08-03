import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ShopState, Product, CartItem } from '@/types/shop';
import toast from 'react-hot-toast';

export const useShopStore = create<ShopState>()(
  persist(
    (set, get) => ({
      products: [],
      cart: [],
      wishlist: [],
      isLoading: false,

      addToCart: (product: Product, quantity = 1) => {
        const { cart } = get();
        const existingItem = cart.find(item => item.product.id === product.id);

        if (existingItem) {
          const newQuantity = existingItem.quantity + quantity;
          const maxQuantity = Math.min(newQuantity, product.stock);
          set({
            cart: cart.map(item =>
              item.product.id === product.id
                ? { ...item, quantity: maxQuantity }
                : item
            )
          });
        } else {
          const finalQuantity = Math.min(quantity, product.stock);
          set({ cart: [...cart, { product, quantity: finalQuantity }] });
        }
        
        toast.success('Added to cart!');
      },

      updateCartItemQuantity: (productId: string, quantity: number) => {
        const { cart } = get();
        if (quantity <= 0) {
          set({ cart: cart.filter(item => item.product.id !== productId) });
          toast.success('Removed from cart');
        } else {
          set({
            cart: cart.map(item =>
              item.product.id === productId
                ? { ...item, quantity: Math.min(quantity, item.product.stock) }
                : item
            )
          });
        }
      },

      removeFromCart: (productId: string) => {
        const { cart } = get();
        set({ cart: cart.filter(item => item.product.id !== productId) });
        toast.success('Removed from cart');
      },

      clearCart: () => {
        set({ cart: [] });
      },

      addToWishlist: (product: Product) => {
        const { wishlist } = get();
        if (!wishlist.find(item => item.id === product.id)) {
          set({ wishlist: [...wishlist, product] });
          toast.success('Added to wishlist!');
        }
      },

      removeFromWishlist: (productId: string) => {
        const { wishlist } = get();
        set({ wishlist: wishlist.filter(item => item.id !== productId) });
        toast.success('Removed from wishlist');
      }
    }),
    {
      name: 'orchid-shop-storage',
      partialize: (state) => ({ cart: state.cart, wishlist: state.wishlist })
    }
  )
);