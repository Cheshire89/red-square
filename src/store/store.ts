import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "../ui/store/ui.slice";


const store = configureStore({
    reducer: {
        ui: uiSlice
    }
});

export type RootState = ReturnType<typeof store.getState>

export default store;