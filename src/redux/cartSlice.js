import { createSlice } from "@reduxjs/toolkit";
import { products } from "../constants/data";

const initialState = {
  cartItems: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.total = 0;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      state.total = calculateTotal(state.cartItems);
    },
    addToCart: (state, action) => {
      const itemId = action.payload;
      const itemToAdd = products.find((item) => item.id === itemId);
      const existingItem = state.cartItems.find((item) => item.id === itemId);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...itemToAdd, quantity: 1 });
      }

      state.total = calculateTotal(state.cartItems);
    },
    increase: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.quantity += 1;
      state.total = calculateTotal(state.cartItems);
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      }
      state.total = calculateTotal(state.cartItems);
    },
  },
});

const calculateTotal = (cartItems) => {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
};

export const { clearCart, removeItem, addToCart, increase, decrease } =
  cartSlice.actions;
export default cartSlice.reducer;
