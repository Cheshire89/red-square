import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "@uiStore/ui.slice";
import authSlice from "@authStore/auth.slice";
import profileSlice from "./profile/profile.slice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    ui: uiSlice,
    profile: profileSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
