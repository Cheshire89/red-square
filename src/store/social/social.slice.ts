import { createSlice } from "@reduxjs/toolkit";
import { SocialState } from "./social.model";

const initialState: SocialState = {
  instagram: null,
  twitter: null,
  facebook: null,
  yelp: null,
  opentable: null,
};

const socialSlice = createSlice({
  name: "social",
  initialState,
  reducers: {
    setSocial: (state, action) => action.payload,
  },
});

export const { setSocial } = socialSlice.actions;
export default socialSlice.reducer;
