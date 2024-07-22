
// // const INITIAL_VALUE={
// //   counter:0
// // };

// import { configureStore, createSlice } from "@reduxjs/toolkit";

// const counterSlice= createSlice({
//   name: "counter",
//   initialState:{counterVal:0},
//   reducer:{
//     increment: (state)=>{
//     console.log("value incremented");
//     },
//     decrement: (state)=>{
//       console.log("value decremented");
//     },
//     add: (state)=>{

//     },
//     substract: (state)=>{

//     }
//   }
// });
// // const counterReducer = (store= INITIAL_VALUE, action)=>{
// //   if(action.type==="INCREMENT"){
// //       return {counter:store.counter+1}
// //   }
// //   else if(action.type==="DECREMENT"){
// //     return {counter:store.counter-1}
// //   }
// //   else if(action.type==="ADD"){
// //     return {counter:store.counter+Number(action.payLoad.num)}
// //   }
// //   else if(action.type==="SUB"){
// //     return {counter:store.counter-Number(action.payLoad.num)}
// //   }
// //   return store;
// // }

// const counterStore= configureStore({reducer:{
// counter: counterSlice.reducer,
// }});

// export const counterActions=counterSlice.actions;
// export default counterStore;




import {configureStore, createSlice} from "@reduxjs/toolkit"
import counterSlice from "./counter";
import privacySlice from "./Privacy";

const counterStore = configureStore({reducer: {
  counter: counterSlice.reducer,
  privacy: privacySlice.reducer
}});

export default counterStore;