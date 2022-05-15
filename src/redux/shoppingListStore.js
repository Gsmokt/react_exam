import {createSlice} from '@reduxjs/toolkit';

const initialState = localStorage.getItem('ShoppingList') ? JSON.parse(localStorage.getItem('ShoppingList')) : [];

export const Store = createSlice({
    name:'shopList',
    initialState,
    reducers: {
        addToShoppingCart: (state, action) => {
          state.push(...action.payload);
          localStorage.setItem('ShoppingList', JSON.stringify(state))
        },
        removeFromShoppingCart: (state,action) => {
          const newState = state.filter((_,i) => i !== action.payload);
          localStorage.setItem('ShoppingList', JSON.stringify(newState));
          return newState;
        }   
    }
})

export const {addToShoppingCart, removeFromShoppingCart} = Store.actions;
export default Store.reducer;