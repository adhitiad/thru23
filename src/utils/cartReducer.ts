import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: any[];
}

const initialState: CartState = {
  items: [
    {
      id: 1,
      name: "Item 1",
      price: 10,
    },
    {
      id: 2,
      name: "Item 2",
      price: 20,
    },
    {
      id: 3,
      name: "Item 3",
      price: 30,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<any>) {
      state.items = [...state.items, action.payload];
    },
    removeFromCart(state, action: PayloadAction<any>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity(state, action: PayloadAction<any>) {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: action.payload.quantity,
          };
        }
        return item;
      });
    },
  },
});

export const { reducer: cartReducer } = cartSlice;
