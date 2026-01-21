import { create } from "zustand";

export interface StoreAction {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  formError: string;
  quantity: number;
}

export interface CartStore {
  cart: StoreAction[];
  addToCart: (item: Omit<StoreAction, "quantity">) => void;
  removeFromCart: (id: string) => void;
  increaseitem: (id: string) => void;
  decreaseitem: (id: string) => void;
  clearCart: () => void;
}

export const useStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        };
      }
      return {
        cart: [...state.cart, { ...item, quantity: 1 }],
      };
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((i) => i.id !== id),
    })),

  increaseitem: (id) =>
    set((state) => ({
      cart: state.cart.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i,
      ),
    })),

  decreaseitem: (id) =>
    set((state) => ({
      cart: state.cart.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity - 1 } : i,
      ),
    })),

  clearCart: () =>
    set({
      cart: [],
    }),
}));
