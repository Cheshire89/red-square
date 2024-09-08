import { createSlice } from "@reduxjs/toolkit";

interface Auth {
  token: string;
}

const initialState: Auth = {
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
