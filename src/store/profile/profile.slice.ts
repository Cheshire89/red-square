import { createSlice } from "@reduxjs/toolkit";
import { ProfileState } from "./profile.model";

const initialState: ProfileState = {
  address: null,
  appName: null,
  city: null,
  collectionId: null,
  collectionName: null,
  created: null,
  email: null,
  id: null,
  phone: null,
  state: null,
  updated: null,
  zip: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => action.payload,
  },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
