import {createSlice} from "@reduxjs/toolkit"

const fetchStatusSlice= createSlice({
  name: 'fetchStatus',
  initialState:{
    fetchDone:false, // false :'pending' and true: 'Done'
    crruentlyFetching: false,
  },

  reducers: {
    markFetchDone: (state) => {
       state.fetchDone= true;
    },

    markFetchingStarted: (state) => {
       state.crruentlyFetching= true;
    },

    markFetchingFinished: (state) => {
       state.crruentlyFetching= false;
    }
  }
});

export const fetchStatusActions=fetchStatusSlice.actions;

export default fetchStatusSlice;
