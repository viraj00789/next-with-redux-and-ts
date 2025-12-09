import { configureStore } from "@reduxjs/toolkit";
import admincartReducer from "./slices/admincartSlice";
import authReducer from "./slices/authSlice";
import adminFormReducer from "./slices/adminFormSlice";

export const store = configureStore({
  reducer: {
    admincart: admincartReducer,
    auth: authReducer,
    adminForm: adminFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
