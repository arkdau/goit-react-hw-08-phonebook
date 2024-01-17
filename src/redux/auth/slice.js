import { createSlice } from "@reduxjs/toolkit";
import { login, logout, current, register } from "./operations";

const initialState = {
  isLoggedIn: false,
  user: { name: null, email: null },
  token: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;
      })
      .addCase(logout.fulfilled, () => initialState)
      .addCase(current.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(current.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(current.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
