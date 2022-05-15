import {createSlice} from '@reduxjs/toolkit';
import products from '../common/consts/produkty';

const initialState = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : products;
const Store = createSlice({
    name:'shopList',
    initialState,
    reducers: {
        addProduct: (state, action) => {
          state.push(action.payload); // void jeśli w jednej linii
          localStorage.setItem('products', JSON.stringify(state));
        },
    }
})

export const {addProduct} = Store.actions;
export default Store.reducer;