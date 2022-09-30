import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  accessToken: null,
  refreshToken: null,
  expiresIn: null,
  clientId: null,
  clientName: null,
  isAuthSet: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { accessToken } = action.payload;

      axios.defaults.headers["Authorization"] = "Bearer " + accessToken;

      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
