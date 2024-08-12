import { createSlice } from "@reduxjs/toolkit";
import CartList from "../types/cart";



const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      cartList: [] as CartList,
    },
    reducers: {
      addToCart(state, action) {
        const cartItemIndex = state.cartList.findIndex((item) => item.id === action.payload.id);
        if (cartItemIndex !== -1 && state.cartList[cartItemIndex].size === action.payload.size) {
          const newCartItem = { ...state.cartList[cartItemIndex], count: action.payload.count + state.cartList[cartItemIndex].count };
          state.cartList[cartItemIndex] = newCartItem;
        } else {
          state.cartList.push(action.payload);
        }
      },
      removeFromCart(state, action) {
        const cartItemIndex = state.cartList.findIndex((item) => item.item.id === action.payload.id);
        if (cartItemIndex !== -1) {
          if (state.cartList[cartItemIndex].count === 1) {
            state.cartList.splice(cartItemIndex, 1);
          } else {
            const newCartItem = { ...state.cartList[cartItemIndex], count: state.cartList[cartItemIndex].count - 1 };
            state.cartList[cartItemIndex] = newCartItem;
          }
        console.log(...state.cartList);
      }},
      clearCart(state) {
        state.cartList = [];
      }
    },
  });

export const { addToCart} = cartSlice.actions;
export default cartSlice.reducer;
