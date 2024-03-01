import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
}
const initialState: AuthState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleAuth(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
