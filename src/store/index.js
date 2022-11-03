import { configureStore } from "@reduxjs/toolkit";

import auth from "./slices/auth";
import cardBuilder from "./slices/cardBuilder";
import myEnvelope from "./slices/myEnvelope";

export default configureStore({
  reducer: {
    auth,
    cardBuilder,
    myEnvelope,
  },
});
