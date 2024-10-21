import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./profile/profile.slice";
import themeSlice from "./theme/theme.slice";
import socialSlice from "./social/social.slice";
import menuSlice from "./menu/menu.slice";
import contentSlice from "./content/content.slice";

const store = configureStore({
  reducer: {
    profile: profileSlice,
    theme: themeSlice,
    social: socialSlice,
    menu: menuSlice,
    content: contentSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
