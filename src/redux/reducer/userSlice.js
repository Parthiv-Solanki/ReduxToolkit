import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";

export const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, { payload }) => {
      state.push(payload);
    },
    deleteUser: (state, { payload }) => {
      console.log(state);
      return state.filter((user) => user.id !== payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const user = state.find((user) => user.id === id);
      if (!!user) {
        user.name = name;
        user.email = email;
      }
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
