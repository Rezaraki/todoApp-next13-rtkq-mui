import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  darkMode: false,
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    reset: () => initialState,
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const {
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
  toggleDarkMode,
  reset,
} = appSlice.actions;
export default appSlice.reducer;
