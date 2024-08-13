import { createSlice } from "@reduxjs/toolkit";
import CartList from "../types/cart";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [] as CartList,
  },
  reducers: {
    addToCart(state, action) {
      const index = state.cartList.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size,
      );
      if (index !== -1) {
        console.log("TRUE");
        const newCartItem = {
          ...state.cartList[index],
          count: state.cartList[index].count + 1,
        };
        state.cartList[index] = newCartItem;
      } else {
        state.cartList.push(action.payload);
      }
    },
    removeItem(state, action) {
      const index = state.cartList.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size,
      );
      if (index !== -1) {
        state.cartList.splice(index, 1);
      }
    },
    clearCart(state) {
      state.cartList = [];
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
