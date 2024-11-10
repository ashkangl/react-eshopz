import { createSlice } from '@reduxjs/toolkit';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find((item) => item.id === action.payload.id);
      //const pro = state.find((pro) => pro.id === action.payload);

      if (itemExists) {
        if(itemExists.quantity < 10){
        itemExists.quantity++;
        alertify.success('Added to Cart!');
        }else{
        alertify.error('This Is Maximum Amount You Can Buy!');
        }
      } else {
        state.push({ ...action.payload, quantity: 1 });
        alertify.success('Added to Cart!');
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if(item.quantity === 10){
        alertify.error('This Is Maximum Amount You Can Buy!');
      }else{
      item.quantity++;
      alertify.success('Added to Cart!');
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        const index = state.findIndex((item) => item.id === action.payload);
        state.splice(index, 1);
        alertify.error('Remove from Cart!')
      } else {
        item.quantity--;
        alertify.error('Remove from Cart!')
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
      alertify.error('Remove from Cart!')
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;