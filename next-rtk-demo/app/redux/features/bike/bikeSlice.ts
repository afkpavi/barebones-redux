import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfBikes: 100,
};

const bikeSlice = createSlice({
  name: "bike",
  initialState,
  reducers: {
    order: (state) => {
      state.numOfBikes--;
    },
    restock: (state, action) => {
      state.numOfBikes += action.payload;
    },
  },
});

export default bikeSlice.reducer;
export const { order, restock } = bikeSlice.actions;
