import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  numOfBikes: number;
};

const initialState: InitialState = {
  numOfBikes: 100,
};

const bikeSlice = createSlice({
  name: "bike",
  initialState,
  reducers: {
    order: (state) => {
      state.numOfBikes--;
    },
    restock: (state, action: PayloadAction<number>) => {
      state.numOfBikes += action.payload;
    },
  },
});

export default bikeSlice.reducer;
export const { order, restock } = bikeSlice.actions;
