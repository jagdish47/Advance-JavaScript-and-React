import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },

  reducers: {
    createTodo: (state, action) => {
      state.todoList.push(action.payload);
      console.log("Action : ", action);
      console.log("State : ", state);
    },
  },
});

export const { createTodo } = todoSlice.actions;
export default todoSlice.reducer;
