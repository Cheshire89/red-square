import { createSlice } from "@reduxjs/toolkit";
import { ProfileState } from "./profile.model";
import { Util } from "../../services/Util.service";
import _ from "lodash";

const filesUrl = (collectionId: string, id: string, image: string) => {
  return `${process.env.REACT_APP_API_URL}/api/files/${collectionId}/${id}/${image}`;
};

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
  openTable: null,
  fav_icon: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => action.payload,
  },
  selectors: {
    getProfileName: ({ appName }): string => {
      return _.startCase(appName);
    },
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
    getOpenTableId: ({ openTable }) => {
      return openTable;
    },
    getFavIcon: ({ collectionId, id, fav_icon }): string => {
      return filesUrl(collectionId, id, fav_icon);
    },
  },
});

export const { setProfile } = profileSlice.actions;
export const {
  getAddress,
  getFormattedNumber,
  getCoordinates,
  getOpenTableId,
  getProfileName,
  getFavIcon,
} = profileSlice.selectors;
export default profileSlice.reducer;
