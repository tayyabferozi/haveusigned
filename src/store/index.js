import { configureStore } from "@reduxjs/toolkit";

import auth from "./slices/auth";
import cardBuilder from "./slices/cardBuilder";

export default configureStore({
  reducer: {
    auth,
    cardBuilder,
  },
});
