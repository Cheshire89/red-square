import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "./theme.model";

const initialState: ThemeState = {
  logo: null,
  footerLogo: null,
  id: null,
  collectionId: null,
};

const filesUrl = (collectionId: string, id: string, image: string) => {
  return `${process.env.REACT_APP_API_URL}/api/files/${collectionId}/${id}/${image}`;
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => action.payload,
  },
  selectors: {
    getLogo: ({ collectionId, id, logo }): string => {
      return filesUrl(collectionId, id, logo);
    },
    getFooterLogo: ({ collectionId, id, footerLogo }): string => {
      return filesUrl(collectionId, id, footerLogo);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export const { getLogo, getFooterLogo } = themeSlice.selectors;
export default themeSlice.reducer;
