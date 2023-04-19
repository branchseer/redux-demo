import { createSlice, PayloadAction, createAsyncThunk, ThunkAction } from "@reduxjs/toolkit";
import { getCountFromServer } from "./countService";

export const fetchCount = createAsyncThunk('counter/fetchCount', () => getCountFromServer())

const initialState = { count: 0, isFetching: false };

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
  extraReducers: (builder) => {
    builder.addCase(fetchCount.pending, state => {
        state.isFetching = true
    })
    builder.addCase(fetchCount.fulfilled, (state, action) => {
        state.count = action.payload
        state.isFetching = false
    })
  }
});
export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

export type State = typeof initialState;
