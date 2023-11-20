import { createSlice } from "@reduxjs/toolkit";
import cakeSlice from "../cake/cakeSlice";

const initialState = {
  numOfIcecream: 10,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecream--;
    },

    restoke: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numOfIcecream--;
  //     },
  //   },

  extraReducers: (builder) => {
    builder.addCase(cakeSlice.ordered, (state) => {
      state.numOfIcecream--;
    });
  },
});

export default icecreamSlice.reducer;

export const { ordered, restoke } = icecreamSlice.actions;
