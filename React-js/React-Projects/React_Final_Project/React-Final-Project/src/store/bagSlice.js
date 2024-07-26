import {createSlice} from "@reduxjs/toolkit"
const bagSlice= createSlice({
  name: 'items',
  initialState:[],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },

    removeFromBag: (state, action) => {
     return state.filter(ItemId => ItemId!=action.payload);
    }
  }
});

export const bagActions=bagSlice.actions;

export default bagSlice;
