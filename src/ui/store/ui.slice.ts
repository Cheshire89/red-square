import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "./ui.model";
import { Util } from "../../services/Util.service";

const initialState: UiState = {
  appName: "",
  name: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  hours: {
    kitchen: "",
    bar: "",
  },
  social: {
    instagram: "",
    twitter: "",
    facebook: "",
    yelp: "",
    opentable: "",
  },
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setUI: (state, action) => {
      return action.payload;
    },
  },
  selectors: {
    getFormattedNumber: ({ phone }): string => {
      return Util.formatPhoneNumber(phone) || phone;
    },
    getAddress: ({ address, city, state, zip }): string[] => {
      return [...address.split(/\r\n/), `${city} ${state}, ${zip}`];
    },
  },
});

export const { setUI } = uiSlice.actions;
export const { getAddress, getFormattedNumber } = uiSlice.selectors;

export default uiSlice.reducer;
