import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "../ui/store/ui.slice";
import authSlice from "@uiStore/auth/auth.slice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    ui: uiSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
