import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 59,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    startTimer: (state) => {
      state.value = 59;
    },
    decrementTimer: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    resetTimer: (state) => {
      state.value = 59;
    },
  },
});

export const { startTimer, decrementTimer, resetTimer } = timerSlice.actions;
export default timerSlice.reducer;