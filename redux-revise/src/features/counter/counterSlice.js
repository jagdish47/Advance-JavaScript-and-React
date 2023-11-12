import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      console.log("IState : ", state);
      console.log("IAction : ", action);
      state.value++;
    },
    decrement: (state) => {
      console.log("Dstate : ", state);
      state.value--;
    },
    incrementByAmount: (state, action) => {
      console.log("State", state);
      console.log("Action", action);
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
