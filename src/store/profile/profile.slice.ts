import { createSlice } from "@reduxjs/toolkit";
import { ProfileState } from "./profile.model";
import { Util } from "../../services/Util.service";

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
  lat: null,
  lng: null,
  hours: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => action.payload,
  },
  selectors: {
    getFormattedNumber: ({ phone }): string => {
      return Util.formatPhoneNumber(phone) || phone;
    },
    getAddress: ({ address, city, state, zip }): string[] => {
      if (address) {
        return [...address.split("-"), `${city} ${state}, ${zip}`];
      }
      return [];
    },
    getCoordinates: ({ lat, lng }): { lat: number; lng: number } => {
      return { lat, lng };
    },
  },
});

export const { setProfile } = profileSlice.actions;
export const { getAddress, getFormattedNumber, getCoordinates } =
  profileSlice.selectors;
export default profileSlice.reducer;
