import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const callProductAPI = createAsyncThunk(
  "product/callProductAPI",
  async function () {
    try {
      const res = await fetch("https://fakestoreapi.com/products");

      const result = await res.json();
      console.log("API Result", result);

      return result;
    } catch (error) {
      console.error("Error while fetching data from API:", error);
      throw error;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: true,
    isFailed: false,
    productList: [],
  },

  reducers: {
    getProducts: (state) => {
      state.productList = [];
    },
  },
  extraReducers: {
    [callProductAPI.fulfilled]: (state, action) => {
      state.productList = action.payload;
      state.isLoading = false;
    },

    [callProductAPI.pending]: (state) => {
      state.isLoading = true;
    },

    [callProductAPI.rejected]: (state) => {
      state.isFailed = true;
    },
  },
});

export const { getProducts } = productSlice.actions;
export default productSlice.reducer;
