import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import STASUSES from "./enums";

const initialState = {
  occasions: {
    state: STASUSES.IDLE,
    data: [],
  },
  occasionCards: {
    state: STASUSES.IDLE,
    title: "",
    data: [],
  },
  card: {
    state: STASUSES.IDLE,
    data: {},
  },
  envelopeInputDetails: {
    cardId: "",
    ownerName: "",
    ownerEmailAddress: "",
    ownerPassword: "",
    cardMessage: "",
    forRecipientName: "",
    forRecipientEmailAddress: "",
    cardToBeReturnedByDate: "",
    ownerMessage: "",
    notWantsToDonate: false,
    ownerDonationAmount: 5,
    Cost: "",
    participators: [],
  },
  createdEnvelope: {
    status: STASUSES.IDLE,
  },
};

const cardBuilderSlice = createSlice({
  name: "cardBuilder",
  initialState,
  reducers: {
    setEnvelopeDetails: (state, action) => {
      const { name, value } = action.payload;

      state.envelopeInputDetails[name] = value;
    },
    addEmptyParticipator: (state, action) => {
      state.envelopeInputDetails.participators.push("");
    },
    editParticipator: (state, action) => {
      const { idx, value } = action.payload;

      state.envelopeInputDetails.participators[idx] = value;
    },
    deleteParticipator: (state, action) => {
      const { idx } = action.payload;

      const arr = [...state.envelopeInputDetails.participators];

      arr.splice(idx, 1);

      state.envelopeInputDetails.participators = arr;
    },
  },
  extraReducers: (builder) => {
    // CASES FOR FETCH OCCASIONS/CATEGORIES

    builder.addCase(fetchOccasions.pending, (state, action) => {
      state.occasions.state = STASUSES.LOADING;
    });

    builder.addCase(fetchOccasions.fulfilled, (state, action) => {
      state.occasions.state = STASUSES.SUCCESS;
      state.occasions.data = action.payload;
    });

    builder.addCase(fetchOccasions.rejected, (state, action) => {
      state.occasions.state = STASUSES.ERROR;
    });

    // CASES FOR FETCH OCCASION CARDS

    builder.addCase(fetchOccasionCards.pending, (state, action) => {
      state.occasionCards.state = STASUSES.LOADING;
    });

    builder.addCase(fetchOccasionCards.fulfilled, (state, action) => {
      state.occasionCards.state = STASUSES.SUCCESS;
      state.occasionCards.title = action.payload.title;
      state.occasionCards.data = action.payload.cards;
    });

    builder.addCase(fetchOccasionCards.rejected, (state, action) => {
      state.occasionCards.state = STASUSES.ERROR;
    });

    // CASES FOR FETCH CARD

    builder
      .addCase(fetchCard.pending, (state, action) => {
        state.card.state = STASUSES.LOADING;
      })
      .addCase(fetchCard.fulfilled, (state, action) => {
        state.card.data = action.payload;
        state.card.state = STASUSES.SUCCESS;
      })
      .addCase(fetchCard.rejected, (state, action) => {
        state.card.state = STASUSES.ERROR;
      });

    // CASES FOR CREATE ENVELOPE

    builder
      .addCase(createEnvelope.pending, (state, action) => {
        state.createdEnvelope.status = STASUSES.LOADING;
      })
      .addCase(createEnvelope.fulfilled, (state, action) => {
        state.createdEnvelope.data = action.payload;
        state.createdEnvelope.status = STASUSES.SUCCESS;
        action.payload.cb && action.payload.cb();
      })
      .addCase(createEnvelope.rejected, (state, action) => {
        state.createdEnvelope.status = STASUSES.ERROR;
        action?.payload?.cb &&
          action.payload.cb("error", action.payload.errors);
      });
  },
});

export default cardBuilderSlice.reducer;

// ACTIONS

export const {
  setEnvelopeDetails,
  addEmptyParticipator,
  editParticipator,
  deleteParticipator,
} = cardBuilderSlice.actions;

// THUNKS

export const fetchOccasions = createAsyncThunk(
  "cardBuilder/fetchOccasions",
  async () => {
    const {
      data: { occasions },
    } = await axios.get("/occasions");
    return occasions;
  }
);

export const fetchOccasionCards = createAsyncThunk(
  "cardBuilder/fetchOccasionCards",
  async (occasionId) => {
    const {
      data: { cards, occasionName: title },
    } = await axios.get(`/occasions/${occasionId}/cards`);

    return { title, cards };
  }
);

export const fetchCard = createAsyncThunk(
  "cardBuilder/fetchCard",
  async (cardId) => {
    const { data } = await axios.get(`/cards/${cardId}`);
    return data;
  }
);

export const createEnvelope = createAsyncThunk(
  "cardBuilder/createEnvelope",
  async ({ formData, cb }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/envelopes`, formData);

      return { ...data, cb };
    } catch (err) {
      console.log(err);
      return rejectWithValue({ ...err.response.data, cb });
    }
  }
);
