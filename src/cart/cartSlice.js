import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
  showCart:false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(element=>element['id']==item['id']&&element['number']==item['number'])
      if(!existingItem){
        state.items.push(item);
      }
      else {
        existingItem['amount'] = existingItem['amount'] + item['amount']
      }
      state.totalPrice = state.totalPrice + item['amount']*item['price']
    },
    removeItem: (state, action) => {
      const item = action.payload;
      const itemToRemove = state.items.find(element => element['id']=== item['id']&&element['number']==item['number']);
      if (itemToRemove) {
        state.items = state.items.filter(element => element['id']!== item['id'] &&element['number']!==item['number']);
        state.totalPrice -= itemToRemove['amount']*itemToRemove['price'];
      }
    },
    showCart: (state, action) => {
      state.showCart = true
    },
    closeCart: (state,action) => {
      state.showCart = false
    },
    increment: (state,action) => {
      const item = action.payload;
      console.log(item)
      const existingItem = state.items.find(element=>element['id']==item['id']&&element['number']==item['number'])
      existingItem['amount'] = existingItem['amount'] + 1
      state.totalPrice = state.totalPrice + existingItem['price']
    },
    decrement: (state,action) => {
      const item = action.payload;
      const existingItem = state.items.find(element=>element['id']==item['id']&&element['number']==item['number'])
      existingItem['amount'] = existingItem['amount'] - 1
      state.totalPrice = state.totalPrice - existingItem['price']
      if(existingItem['amount']==0){
        state.items = state.items.filter(element => element['id'] !== item['id']&&element['number']!==item['number']);
        state.totalPrice -= existingItem['price'];
      }
    },
  },
});

export const { addItem, removeItem, showCart, closeCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
