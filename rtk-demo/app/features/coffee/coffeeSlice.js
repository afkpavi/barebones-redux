// Create a slice

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCoffee: 15,
};

const coffeeSlice = createSlice({
  name: "coffee",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfCoffee -= action.payload;
    },
    restocked: (state, action) => {
      state.numOfCoffee += action.payload;
    },
  },
});

module.exports = coffeeSlice.reducer;
module.exports.coffeeActions = coffeeSlice.actions;
