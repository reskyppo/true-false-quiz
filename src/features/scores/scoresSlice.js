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
    resetScore: (state) => {
      state.score = 0;
    },
  },
});

export const { addScore, resetScore} = scoresSlice.actions;

export default scoresSlice.reducer;
