import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "@authStore/auth.model";

const initialState: AuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => action.payload,
  },
});

export default authSlice.reducer;
