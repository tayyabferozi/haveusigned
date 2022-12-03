import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

import STATUSES, { HYS_ENV_AUTH } from "./enums";

const initialState = {
  auth: {
    status: STATUSES,
    isAuthenticated: false,
  },
  envelope: {
    envelopeId: null,
    status: STATUSES.IDLE,
    data: {
      envelopeId: "2mJQkl",
      ownerName: "123",
      ownerEmailAddress: "ferozitayyab@gmail.com",
      cardDetails: {
        cardId: "YjMEj4",
        cardName: "Happy Birthday",
        cardImageFileName: "01-bday-001.png",
      },
      cardStatus: 0,
      cardMessage: "msg\n",
      returnCardByDeadlineDate: "2022-11-12T00:00:00",
      recipientName: "123",
      recipientEmailAddress: "tayyabferozidev@gmail.com",
      numberOfDaysLeftToReturnEnvelope: 8.887682151833333,
      cost: {
        amount: 2.5,
      },
      envelopeURL:
        "https://hys-staging-api-service.azurewebsites.net/envelopes/2mJQkl",
      amount: 2.5,
      signatories: [],
    },
  },
};

const myEnvelopeSlice = createSlice({
  name: "myEnvelope",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(envelopeAuth.pending, (state, action) => {
        state.auth.status = STATUSES.LOADING;
      })
      .addCase(envelopeAuth.fulfilled, (state, action) => {
        const { envelopeId } = action.payload;

        state.auth.status = STATUSES.SUCCESS;
        state.auth.isAuthenticated = true;

        state.envelope.envelopeId = envelopeId;

        localStorage.setItem(
          HYS_ENV_AUTH,
          JSON.stringify({
            isAuthenticated: true,
            envelopeId,
          })
        );
      })
      .addCase(envelopeAuth.rejected, (state, action) => {
        state.auth.status = STATUSES.ERROR;
        state.auth.isAuthenticated = false;
        if (action.payload.code === 404) toast.error("Envelope not found!");
        else toast.error("Uh Oh! Something went wrong");
      })
      .addCase(fetchEnvelope.pending, (state, action) => {
        state.envelope.status = STATUSES.LOADING;
      })
      .addCase(fetchEnvelope.fulfilled, (state, action) => {
        state.envelope.status = STATUSES.SUCCESS;
        state.envelope.data = action.payload;
      })
      .addCase(fetchEnvelope.rejected, (state, action) => {
        state.envelope.status = STATUSES.ERROR;
        toast.error("Uh Oh! Something went wrong");
      });
  },
});

export default myEnvelopeSlice.reducer;

// THUNKS

export const envelopeAuth = createAsyncThunk(
  "myEnvelope/auth",
  async ({ formState, envelopeId, cb }, { rejectWithValue }) => {
    try {
      await axios.post(`envelopes/${envelopeId}/authenticate`, formState, {
        withCredentials: true,
      });
      cb();
      return { envelopeId };
    } catch (err) {
      console.log(err);
      return rejectWithValue({ code: err.response.status });
    }
  }
);

export const fetchEnvelope = createAsyncThunk(
  "myEnvelope/fetch",
  async (id) => {
    const { data } = await axios.get(`envelopes/${id}`, {
      withCredentials: true,
    });
    return data;
  }
);
