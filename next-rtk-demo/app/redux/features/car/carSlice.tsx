import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  numOfCars: number;
};

const initialState: InitialState = {
  numOfCars: 200,
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    order: (state) => {
      state.numOfCars--;
    },
    restock: (state, action: PayloadAction<number>) => {
      state.numOfCars += action.payload;
    },
  },
});

export default carSlice.reducer;
export const { order, restock } = carSlice.actions;
