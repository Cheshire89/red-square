import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./profile/profile.slice";
import themeSlice from "./theme/theme.slice";
import socialSlice from "./social/social.slice";

const store = configureStore({
  reducer: {
    profile: profileSlice,
    theme: themeSlice,
    social: socialSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
