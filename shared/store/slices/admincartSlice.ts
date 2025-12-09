import { Product } from "@shared/dataFile/dataFileTypes/productTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState } from "./sliceTypes/adminCartTypes";

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const existing = state.items.find(
        (items) => items.id === action.payload.id
      );
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },

    increaseQty(state, action: PayloadAction<number | string>) {
      const item = state.items.find((items) => items.id === action.payload);
      if (item) item.qty++;
    },

    decreaseQty(state, action: PayloadAction<number | string>) {
      const item = state.items.find((items) => items.id === action.payload);
      if (item && item.qty > 0) {
        item.qty--;
      }

      if (!item) return;
      if (item?.qty <= 0)
        state.items = state.items.filter((i) => i.id !== action.payload);
    },

    removeItem(state, action: PayloadAction<number | string>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, increaseQty, decreaseQty, removeItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
