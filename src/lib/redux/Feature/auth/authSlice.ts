import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "value",
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export const authReducers = authSlice.reducer;
