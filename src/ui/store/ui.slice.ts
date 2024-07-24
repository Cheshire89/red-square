import { createSlice } from "@reduxjs/toolkit"
import { UiState } from "./ui.model";

const initialState: UiState = {
    appName: 'red-square',
    name: 'Red Square',
    phone: '303.595.8600',
    email: 'info@redsquare.com',
    address: [
        'Writer Square',
        '1512 Larimer St R38',
        'Denver, CO 80202'
    ],
    social: {
        instagram: '',
        twitter: '',
        facebook: '',
        yelp: '',
        opentable: ''
    },
    theme: {
        primary: '#c92c41',
        secondary: '#eaeaea',
        dark: '#222222',
        darkBorder: '#080808',
        light: '#ffffff',
        lightBorder: '#e7e7e7'
    }
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setAppName: (state, action) => {
            state.appName = action.payload
        }
    }
});

export const { setAppName } = uiSlice.actions;

export default uiSlice.reducer;