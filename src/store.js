import { configureStore } from "@reduxjs/toolkit";

import scoresReducer from "./features/scores/scoresSlice";

export default configureStore({
  reducer: {
    scores: scoresReducer,
  },
});
