import { createSlice } from "@reduxjs/toolkit"
import { UiState } from "./ui.model";

const initialState: UiState = {
    appName: '',
    name: '',
    phone: '',
    email: '',
    address: [
    ],
    hours: {
        kitchen: '',
        bar: ''
    },
    social: {
        instagram: '',
        twitter: '',
        facebook: '',
        yelp: '',
        opentable: ''
    },
    theme: {
        primary: '',
        secondary: '',
        dark: '',
        darkBorder: '',
        light: '',
        lightBorder: ''
    }
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setUI: (state, action) => {
            return action.payload
        }
    }
});

export const { setUI } = uiSlice.actions;

export default uiSlice.reducer;