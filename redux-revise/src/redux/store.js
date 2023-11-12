// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"; // Adjust the path
import productSlice from "../features/product/productSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productSlice,
  },
});

export default store;
