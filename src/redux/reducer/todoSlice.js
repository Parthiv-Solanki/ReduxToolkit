import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";

const todoSlice = createSlice({
  name: "todoList",
  initialState: data,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.floor(Math.random() * 10),
        text: action.payload,
      };
      state.push(todo);
      //   return [...state, todo];
    },
  },
});

// this is for dispatch
export const { addTodo } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;
