import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { count: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
    decrement(state, action: PayloadAction<number>) {
      state.count -= action.payload;
    },
  },
});
export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

export type State = typeof initialState;
