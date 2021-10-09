import { createSlice } from "@reduxjs/toolkit";

export const scoresSlice = createSlice({
  name: " scores",
  initialState: {
    score: 0,
  },
  reducers: {
    addScore: (state) => {
      state.score += 1;
    },
  },
});

export const { addScore } = scoresSlice.actions;

export default scoresSlice.reducer;
