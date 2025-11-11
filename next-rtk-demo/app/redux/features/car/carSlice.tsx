import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCars: 200,
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    order: (state) => {
      state.numOfCars--;
    },
    restock: (state, action) => {
      state.numOfCars += action.payload;
    },
  },
});

export default carSlice.reducer;
export const { order, restock } = carSlice.actions;
