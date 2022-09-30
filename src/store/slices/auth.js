import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import STATUSES from "./enums";

const initialState = {
  accessToken: null,
  refreshToken: null,
  expiresIn: null,
  clientId: null,
  clientName: null,
  isAuthSet: false,
  status: STATUSES.IDLE,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthStatus: (state, action) => {
      state.status = action.payload;
    },
    setAuthData: (state, action) => {
      const { accessToken } = action.payload;
      axios.defaults.headers["Authorization"] = "Bearer " + accessToken;
      return {
        ...state,
        ...action.payload,
        status: STATUSES.SUCCESS,
      };
    },
  },
});

export const { setAuthData, setAuthStatus } = authSlice.actions;

export default authSlice.reducer;

export const getAccessToken = () => async (dispatch) => {
  callTokenAPI(dispatch);

  setInterval(function () {
    callTokenAPI(dispatch, true);
  }, 1000 * 60 * 29);
};

async function callTokenAPI(dispatch, refreshing) {
  if (!refreshing) {
    dispatch(setAuthStatus(STATUSES.LOADING));
  }

  try {
    const { data } = await axios.get(
      `/token?clientId=${process.env.REACT_APP_CLIENT_ID}&clientName=${process.env.REACT_APP_CLIENT_NAME}`
    );

    dispatch(setAuthData(data));
  } catch (err) {
    console.log(err);
    setAuthStatus(STATUSES.ERROR);
  }
}
