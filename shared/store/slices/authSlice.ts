import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "./sliceTypes/userTypes";

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.user = action.payload;
      console.log("🚀 login reducer fired");

      if (typeof window !== "undefined") {
        console.log("🚀 localStorage is available:", !!window.localStorage);
        localStorage.setItem("user", JSON.stringify(action.payload));
        console.log("🚀 value after set:", localStorage.getItem("user"));
      }
    },
    logout(state) {
      state.user = null;

      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
      }
    },
    loadUser(state) {
      if (typeof window !== "undefined") {
        const user = localStorage.getItem("user");
        if (user) state.user = JSON.parse(user) as User;
      }
    },
  },
});

export const { login, logout, loadUser } = authSlice.actions;
export default authSlice.reducer;
