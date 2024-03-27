import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./cartUtils";
import { clearItemFromCart } from "./cartUtils";
import { removeItemFromCart } from "./cartUtils";

const initialState = {
  hidden: true,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state = initialState) => {
      state.hidden = !state.hidden;
    },
    addItems: (state = initialState, action) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },
    clearItem: (state = initialState, action) => {
      state.cartItems = clearItemFromCart(state.cartItems, action.payload);
    },
    removeItem: (state = initialState, action) => {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
    },
  },
});

export const { toggleCart, addItems, clearItem, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
