import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  isRunning: false,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    incrementSeconds: (state, action) => {
      state.seconds += action.payload;
      if (state.seconds >= 60) {
        state.seconds -= 60;
        state.minutes += 1;
      }
      if (state.minutes >= 60) {
        state.minutes -= 60;
        state.hours += 1;
      }
    },
    incrementMinutes: (state, action) => {
      state.minutes += action.payload;
      if (state.minutes >= 60) {
        state.minutes -= 60;
        state.hours += 1;
      }
    },
    incrementHours: (state, action) => {
      state.hours += action.payload;
    },
    toggleTimer: (state) => {
      state.isRunning = !state.isRunning;
    },
    resetTimer: (state) => {
      state.hours = 0;
      state.minutes = 0;
      state.seconds = 0;
      state.isRunning = false;
    },
  },
});

export const {
  incrementSeconds,
  incrementMinutes,
  incrementHours,
  toggleTimer,
  resetTimer,
} = timerSlice.actions;

export default timerSlice.reducer;











